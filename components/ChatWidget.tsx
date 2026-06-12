"use client";

import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const AxivoreIcon = () => (
  <svg width="22" height="22" viewBox="0 0 52 52" fill="none">
    <circle cx="26" cy="26" r="24" stroke="#4A4866" strokeWidth="1.5" />
    <line x1="26" y1="6" x2="26" y2="46" stroke="#A09AFF" strokeWidth="3" strokeLinecap="round" />
    <line x1="6" y1="26" x2="46" y2="26" stroke="#A09AFF" strokeWidth="3" strokeLinecap="round" />
    <line x1="10" y1="10" x2="42" y2="42" stroke="#7B72E8" strokeWidth="2" strokeLinecap="round" />
    <line x1="42" y1="10" x2="10" y2="42" stroke="#7B72E8" strokeWidth="2" strokeLinecap="round" />
    <circle cx="26" cy="26" r="4" fill="#0C0C0F" stroke="#A09AFF" strokeWidth="2" />
    <circle cx="26" cy="26" r="1.5" fill="#A09AFF" />
  </svg>
);

const WELCOME: Record<string, string> = {
  de: "Hey! 👋 Ich bin Axi, der KI-Assistent von Axivore. Schön, dass du hier bist!",
  en: "Hey! 👋 I'm Axi, Axivore's AI assistant. Great to have you here!",
  hr: "Hej! 👋 Ja sam Axi, AI asistent Axivorea. Drago mi je što si tu!",
  ro: "Salut! 👋 Sunt Axi, asistentul AI al Axivore. Mă bucur că ești aici!",
  tr: "Merhaba! 👋 Ben Axi, Axivore'un AI asistanıyım. Burada olduğun için mutluyum!",
  it: "Ciao! 👋 Sono Axi, l'assistente AI di Axivore. Felice di averti qui!",
};

const PROACTIVE: Record<string, string> = {
  de: "Darf ich kurz fragen — welche Aufgaben rauben dir im Alltag am meisten Zeit? Angebote, Berichte, Kundenanfragen? Ich zeige dir gerne, wie wir das automatisieren. 🚀",
  en: "Quick question — what tasks eat up most of your time each day? Quotes, reports, customer messages? I'd love to show you how we can automate that. 🚀",
  hr: "Smijem li pitati — koji zadaci ti oduzimaju najviše vremena? Ponude, izvještaji, upiti kupaca? Rado ću ti pokazati kako to možemo automatizirati. 🚀",
  ro: "Pot să întreb — ce sarcini îți consumă cel mai mult timp zilnic? Oferte, rapoarte, mesaje clienți? Îți arăt cu plăcere cum le putem automatiza. 🚀",
  tr: "Sorabilir miyim — günlük en çok zamanını ne alıyor? Teklifler, raporlar, müşteri mesajları? Bunu nasıl otomatikleştirebileceğimizi göstermekten mutluyum. 🚀",
  it: "Posso chiederti — quali attività ti portano via più tempo ogni giorno? Preventivi, report, messaggi clienti? Ti mostro volentieri come possiamo automatizzarlo. 🚀",
};

const BUBBLE_TEXT: Record<string, string> = {
  de: "Wie kann ich dir helfen? 💬",
  en: "How can I help you? 💬",
  hr: "Kako mogu pomoći? 💬",
  ro: "Cum pot să te ajut? 💬",
  tr: "Size nasıl yardımcı olabilirim? 💬",
  it: "Come posso aiutarti? 💬",
};

const PLACEHOLDER: Record<string, string> = {
  de: "Schreiben Sie eine Nachricht...",
  en: "Write a message...",
  hr: "Napišite poruku...",
  ro: "Scrieți un mesaj...",
  tr: "Bir mesaj yazın...",
  it: "Scrivi un messaggio...",
};

const ONLINE_TEXT: Record<string, string> = {
  de: "Online · Antwortet sofort",
  en: "Online · Replies instantly",
  hr: "Online · Odgovara odmah",
  ro: "Online · Răspunde imediat",
  tr: "Çevrimiçi · Hemen yanıt verir",
  it: "Online · Risponde subito",
};

export default function ChatWidget() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: { language },
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: WELCOME[language] ?? WELCOME.de,
      },
    ],
    onFinish: () => {
      if (!open) setHasUnread(true);
    },
  });

  const userHasMessaged = messages.some((m) => m.role === "user");

  // Auto-open once per session: bubble at 2s, open at 4s
  useEffect(() => {
    if (sessionStorage.getItem("axi-chat-seen")) return;
    const bubbleTimer = setTimeout(() => setShowBubble(true), 2000);
    const openTimer = setTimeout(() => {
      setOpen(true);
      setShowBubble(false);
      sessionStorage.setItem("axi-chat-seen", "1");
    }, 4000);
    return () => {
      clearTimeout(bubbleTimer);
      clearTimeout(openTimer);
    };
  }, []);

  // Hide bubble when chat opens manually
  useEffect(() => {
    if (open) setShowBubble(false);
  }, [open]);

  // Proactive follow-up message 2.5s after opening, only if user hasn't written
  useEffect(() => {
    if (!open || showProactive || userHasMessaged) return;
    const t = setTimeout(() => setShowProactive(true), 2500);
    return () => clearTimeout(t);
  }, [open, showProactive, userHasMessaged]);

  // Reset proactive when chat closes so it shows again on reopen
  useEffect(() => {
    if (!open) setShowProactive(false);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showProactive]);

  useEffect(() => {
    if (open) setHasUnread(false);
  }, [open]);

  const proactiveMsg = {
    id: "proactive-1",
    role: "assistant" as const,
    content: PROACTIVE[language] ?? PROACTIVE.de,
  };

  const displayMessages =
    !userHasMessaged && showProactive ? [...messages, proactiveMsg] : messages;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{ border: "1px solid rgba(74,72,102,0.6)", background: "#0C0C0F", height: "480px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(74,72,102,0.4)", background: "#050507" }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#13131A", border: "1px solid #4A4866" }}>
                  <AxivoreIcon />
                </div>
                <div>
                  <p className="text-white text-sm font-medium leading-none">Axi</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "#A09AFF" }}>{ONLINE_TEXT[language] ?? ONLINE_TEXT.de}</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/30 hover:text-white/70 transition-colors p-1"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ scrollbarWidth: "none" }}>
              {displayMessages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                    style={
                      m.role === "user"
                        ? { background: "#A09AFF", color: "#0C0C0F", borderBottomRightRadius: "4px" }
                        : { background: "#13131A", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(74,72,102,0.4)", borderBottomLeftRadius: "4px" }
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 rounded-2xl" style={{ background: "#13131A", border: "1px solid rgba(74,72,102,0.4)", borderBottomLeftRadius: "4px" }}>
                    <div className="flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "#A09AFF" }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 flex gap-2 items-center"
              style={{ borderTop: "1px solid rgba(74,72,102,0.4)", background: "#050507" }}
            >
              <input
                value={input}
                onChange={handleInputChange}
                placeholder={PLACEHOLDER[language] ?? PLACEHOLDER.de}
                className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
                style={{ background: "#A09AFF" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0C0C0F" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preview bubble - teaser before auto-open */}
      <AnimatePresence>
        {showBubble && !open && (
          <motion.button
            onClick={() => { setOpen(true); setShowBubble(false); }}
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="max-w-[220px] text-left px-4 py-2.5 rounded-2xl text-sm cursor-pointer"
            style={{
              background: "#13131A",
              color: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(74,72,102,0.6)",
              borderBottomRightRadius: "4px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {BUBBLE_TEXT[language] ?? BUBBLE_TEXT.de}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{ background: open ? "#13131A" : "#A09AFF", border: "1px solid rgba(160,154,255,0.3)" }}
      >
        {hasUnread && !open && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#A09AFF] border-2 border-[#050507]" />
        )}
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.div key="icon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0C0C0F" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
