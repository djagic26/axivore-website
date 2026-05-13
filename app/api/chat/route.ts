import { openai } from "@ai-sdk/openai";
import { streamText, tool } from "ai";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  return `You are a friendly AI assistant for Axivore, a premium AI agency based in Stuttgart, Germany.

LANGUAGE RULE: You MUST respond exclusively in ${langName}. No exceptions.

ABOUT AXIVORE:
- We build custom AI automations, intelligent chatbots, and SaaS products for businesses
- Founded by Dino Jagić, AI entrepreneur
- Contact: hello@axivore.io | axivore.io
- Free strategy call available via Calendly

OUR SERVICES:
1. AI Automations — automate repetitive business processes (lead gen, onboarding, reporting)
2. Custom AI Chatbots — 24/7 customer service, lead qualification, sales assistance
3. SaaS Development — custom software products built with AI
4. Custom GPTs — specialized AI assistants for specific business needs

PRICING APPROACH:
- Never give a price range before you know what kind of business they have and where they are located
- First ask: what kind of business do they run, and which country/market are they in
- Once you know their business type and location, use these market-adjusted ranges:
  * DACH (Germany, Austria, Switzerland): €800 – €6,000+
  * Western Europe (Italy, France, Spain, Netherlands, etc.): €600 – €4,500+
  * Croatia, Slovenia, Serbia and similar markets: €300 – €2,000+
  * Romania, Bulgaria and similar markets: €250 – €1,800+
  * Turkey and similar markets: €200 – €1,500+
- Always mention that every project is custom-scoped and a free strategy call is available
- The ranges above are starting points — complex integrations, AI automations, or SaaS products can be significantly higher

HOW YOU BEHAVE:
- Always respond in ${langName} regardless of what language the visitor writes in
- Be warm, professional, concise — like a smart consultant, not a salesperson
- Answer questions about our services honestly
- When someone asks about pricing, first ask 1-2 short qualifying questions: what kind of business they have and where they are located — then give the relevant price range
- When a visitor shows genuine interest or asks about pricing/process, naturally ask for their contact info so Dino can follow up personally
- Once you have their name AND email, call the capture_lead tool immediately
- Never be pushy. If they don't want to share contact info, that's fine.
- Keep responses short (2-4 sentences max)`;
}

function buildTranscriptHtml(messages: { role: string; content: string }[]) {
  const rows = messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => {
      const isUser = m.role === "user";
      const label = isUser ? "👤 Besucher" : "🤖 Axivore AI";
      const bg = isUser ? "#1a1a2e" : "#13131A";
      const border = isUser ? "#7B72E8" : "#4A4866";
      return `<div style="margin-bottom:12px;padding:12px 16px;background:${bg};border-left:3px solid ${border};border-radius:6px;">
        <div style="font-size:11px;color:#ffffff50;margin-bottom:4px;">${label}</div>
        <div style="color:#ffffff;font-size:14px;line-height:1.5;">${m.content.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
      </div>`;
    })
    .join("");
  return rows;
}

export async function POST(req: Request) {
  const { messages, language = "de" } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: buildSystemPrompt(language),
    messages,
    tools: {
      capture_lead: tool({
        description:
          "Call this tool as soon as you have the visitor's name AND email address. Use it to save the lead and notify Dino.",
        parameters: z.object({
          name: z.string().describe("Visitor's full name"),
          email: z.string().describe("Visitor's email address"),
          interest: z
            .string()
            .describe("What they are interested in or their main question"),
        }),
        execute: async ({ name, email, interest }) => {
          try {
            const transcript = buildTranscriptHtml(messages);
            await resend.emails.send({
              from: "Axivore Chatbot <hello@axivore.io>",
              to: "hello@axivore.io",
              subject: `🎯 Neuer Lead: ${name}`,
              html: `
                <div style="font-family: sans-serif; max-width: 620px; margin: 0 auto; background: #0C0C0F; color: #ffffff; padding: 32px; border-radius: 12px;">
                  <h2 style="color: #A09AFF; margin: 0 0 24px;">Neuer Lead über Axivore Chatbot</h2>
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
                    <tr>
                      <td style="padding: 10px 0; color: #ffffff80; width: 120px;">Name</td>
                      <td style="padding: 10px 0; color: #ffffff; font-weight: 600;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; color: #ffffff80;">E-Mail</td>
                      <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #A09AFF;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 10px 0; color: #ffffff80;">Interesse</td>
                      <td style="padding: 10px 0; color: #ffffff;">${interest}</td>
                    </tr>
                  </table>
                  <h3 style="color: #A09AFF; margin: 0 0 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Gesprächsverlauf</h3>
                  ${transcript}
                  <a href="mailto:${email}" style="display: inline-block; margin-top: 24px; padding: 12px 24px; background: #A09AFF; color: #0C0C0F; border-radius: 8px; text-decoration: none; font-weight: 600;">
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
