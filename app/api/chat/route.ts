import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { Resend } from "resend";
import { z } from "zod";
import type { NextRequest } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const CHAT_RATE_LIMIT = 20;
const CHAT_RATE_WINDOW_MS = 60_000;

const requestSchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().max(4000),
      })
    )
    .min(1)
    .max(40),
  language: z.enum(["de", "en", "hr", "ro", "tr", "it"]).optional(),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const LANG_NAMES: Record<string, string> = {
  de: "German",
  en: "English",
  hr: "Croatian",
  ro: "Romanian",
  tr: "Turkish",
  it: "Italian",
};

function buildSystemPrompt(language: string) {
  const langName = LANG_NAMES[language] ?? "German";
  return `You are Axi, the friendly assistant for Axivore — a premium AI agency based in Stuttgart, Germany.

LANGUAGE RULE: You MUST respond exclusively in ${langName}. No exceptions.

YOUR IDENTITY: Your name is Axi. You represent the Axivore team. When someone asks who they're talking to, say you're Axi from Axivore.

ABOUT AXIVORE:
- We build custom AI automations, intelligent chatbots, and SaaS products for businesses
- Founded and run by Dino Jagić, based in Stuttgart, Germany
- Contact: hello@axivore.io | axivore.io
- Free 30-minute strategy call available — no commitment

OUR SERVICES:
1. AI Automations — automate repetitive processes: quote generation, invoice processing, lead qualification, appointment booking, report generation, data entry, customer communication
2. Custom AI Chatbots — 24/7 customer service bots, lead qualification bots, sales assistants that never sleep
3. SaaS Development — custom software products built with AI at the core
4. Custom GPTs & AI Assistants — specialized AI tools trained for specific business needs

WHO WE HELP:
- Business owners with 5–30 employees in Germany
- Industries: Handwerk (Klempner, Elektriker, Schreiner), Gastronomie, Dienstleistungen, kleine Agenturen, E-Commerce, Arztpraxen
- Their pain: losing 5–15 hours per week on manual, repetitive tasks
- We do NOT work with large corporations or enterprise companies

CONCRETE RESULTS:
- Businesses typically save 5–15 hours per week after working with us
- Our chatbots handle 70–90% of customer inquiries automatically
- Quote generation that used to take 30 minutes now happens in seconds
- Appointment booking fully automated, zero back-and-forth emails

HOW YOU BEHAVE:
- Always respond in ${langName} regardless of what language the visitor writes in
- Be warm, natural, curious, and human — like a helpful colleague, not a salesperson
- Keep responses short (2–3 sentences max), but ask a follow-up question to keep the conversation going
- Show genuine interest in their business — ask what they do, what their biggest time-wasters are
- Your main goal is to understand their pain, then invite them to a free 30-min strategy call
- If someone asks about pricing: every project is scoped individually; a short call gives a much clearer answer than a number in chat
- Only give rough ranges if someone pushes hard — frame as "starting from" and emphasize a call is better
- When someone shows genuine interest, naturally ask for their name and email so our team can follow up
- Once you have their name AND email, call the capture_lead tool immediately
- When mentioning follow-up, say "our team will reach out" — never reference a specific person
- Never be pushy. If they don't want to share contact info, that's fine — keep the conversation open.`;
}

function buildTranscriptHtml(messages: { role: string; content: string }[]) {
  const rows = messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => {
      const isUser = m.role === "user";
      const label = isUser ? "👤 Besucher" : "🤖 Axivore AI";
      const bg = isUser ? "#0f0d0a" : "#13131A";
      const border = isUser ? "#B36A2E" : "#4A4866";
      return `<div style="margin-bottom:12px;padding:12px 16px;background:${bg};border-left:3px solid ${border};border-radius:6px;">
        <div style="font-size:11px;color:#ffffff50;margin-bottom:4px;">${label}</div>
        <div style="color:#ffffff;font-size:14px;line-height:1.5;">${escapeHtml(m.content)}</div>
      </div>`;
    })
    .join("");
  return rows;
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  const { allowed, retryAfterSeconds } = checkRateLimit(
    `chat:${ip}`,
    CHAT_RATE_LIMIT,
    CHAT_RATE_WINDOW_MS
  );
  if (!allowed) {
    return new Response(JSON.stringify({ error: "Too many requests" }), {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(retryAfterSeconds),
      },
    });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400 });
  }
  const { messages, language = "de" } = parsed.data;

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: buildSystemPrompt(language),
    messages,
    tools: {
      capture_lead: tool({
        description:
          "Call this tool as soon as you have the visitor's name AND email address. Use it to save the lead and notify the team.",
        parameters: z.object({
          name: z.string().max(200).describe("Visitor's full name"),
          email: z.string().email().max(320).describe("Visitor's email address"),
          interest: z
            .string()
            .max(2000)
            .describe("What they are interested in or their main question"),
        }),
        execute: async ({ name, email, interest }) => {
          try {
            const apiKey = process.env.RESEND_API_KEY;
            if (!apiKey) {
              console.error("RESEND_API_KEY not configured — lead email skipped");
              return { success: false };
            }
            const resend = new Resend(apiKey);
            const transcript = buildTranscriptHtml(messages);
            const safeName = escapeHtml(name);
            const safeEmail = escapeHtml(email);
            const safeInterest = escapeHtml(interest);
            await resend.emails.send({
              from: "Axivore Chatbot <hello@axivore.io>",
              to: "hello@axivore.io",
              subject: `🎯 Neuer Lead: ${safeName}`,
              html: `
                <div style="font-family: sans-serif; max-width: 620px; margin: 0 auto; background: #0C0C0F; color: #ffffff; padding: 32px; border-radius: 12px;">
                  <h2 style="color: #E0A360; margin: 0 0 24px;">Neuer Lead über Axivore Chatbot</h2>
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
                    <tr>
                      <td style="padding: 10px 0; color: #ffffff80; width: 120px;">Name</td>
                      <td style="padding: 10px 0; color: #ffffff; font-weight: 600;">${safeName}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; color: #ffffff80;">E-Mail</td>
                      <td style="padding: 10px 0;"><a href="mailto:${safeEmail}" style="color: #E0A360;">${safeEmail}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; color: #ffffff80;">Interesse</td>
                      <td style="padding: 10px 0; color: #ffffff;">${safeInterest}</td>
                    </tr>
                  </table>
                  <h3 style="color: #E0A360; margin: 0 0 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Gesprächsverlauf</h3>
                  ${transcript}
                  <a href="mailto:${safeEmail}" style="display: inline-block; margin-top: 24px; padding: 12px 24px; background: #E0A360; color: #0C0C0F; border-radius: 8px; text-decoration: none; font-weight: 600;">
                    Jetzt antworten
                  </a>
                </div>
              `,
            });
            return { success: true };
          } catch {
            return { success: false };
          }
        },
      }),
    },
    maxSteps: 3,
  });

  return result.toDataStreamResponse();
}
