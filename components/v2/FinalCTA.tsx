"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export function FinalCTA() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const focusStyle = (key: string) => ({
    borderColor: focusedField === key ? "rgba(124,92,255,0.5)" : isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
    background: focusedField === key
      ? isDark ? "rgba(124,92,255,0.06)" : "rgba(124,92,255,0.04)"
      : isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative py-16 md:py-24 lg:py-[160px] overflow-hidden" style={{ borderTop: `1px solid ${borderColor}` }}>
      <div className="absolute inset-0"
        style={{ background: isDark
          ? "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(80,40,200,0.22) 0%, rgba(40,15,90,0.12) 40%, #030208 70%)"
          : "linear-gradient(to bottom, #ffffff, #f5f2ff)" }} />
      {isDark && (
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ top: "20%", width: 900, height: 600,
            background: "radial-gradient(ellipse, rgba(100,55,240,0.2) 0%, transparent 65%)",
            filter: "blur(60px)" }} />
      )}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(160,154,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(160,154,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
      )}

      <div className="relative max-w-[1320px] mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-10"
            style={{ background: "rgba(124,92,255,0.1)", border: "1px solid rgba(124,92,255,0.22)" }}>
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#A09AFF" }}
              animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[10.5px] tracking-[0.18em] uppercase font-medium" style={{ color: "#A09AFF" }}>
              {t.labels.cta}
            </span>
          </div>
          <h2 className="font-bold tracking-[-0.04em] leading-[0.92] mb-8"
            style={{ fontSize: "clamp(48px,7vw,100px)", color: textColor }}>
            {t.cta.headline.replace(/[?!.]$/, "")}<span style={{ color: "#7C5CFF" }}>.</span>
          </h2>
          <p className="text-[16px] mb-12 max-w-[400px] mx-auto leading-[1.7]" style={{ color: mutedColor }}>
            {t.cta.subheadline}
          </p>
          <motion.a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 12px 48px rgba(124,92,255,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-[14px] font-semibold cursor-pointer relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #7C5CFF 0%, #6B8FFF 100%)", boxShadow: "0 6px 32px rgba(124,92,255,0.45)", transition: "box-shadow 0.2s" }}>
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)", width: "45%" }}
            />
            {t.cta.button}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H4M12 2V10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.a>
          <p className="text-[11.5px] mt-6 tracking-wide" style={{ color: isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.25)" }}>
            {t.cta.subtext}
          </p>

          <div className="flex items-center gap-4 mt-16 mb-10 max-w-md mx-auto">
            <div className="flex-1 h-px" style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
            <span className="text-[12px] font-medium" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)" }}>
              {t.cta.formTitle}
            </span>
            <div className="flex-1 h-px" style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
          </div>

          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[480px] mx-auto flex flex-col gap-3 text-left">
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: name, set: setName, ph: t.cta.formName, type: "text" },
                { value: email, set: setEmail, ph: t.cta.formEmail, type: "email" },
              ].map(({ value, set, ph, type }) => (
                <input key={ph} type={type} required value={value}
                  onChange={e => set(e.target.value)} placeholder={ph} aria-label={ph}
                  className="w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all duration-200"
                  style={{ ...focusStyle(ph), color: textColor }}
                  onFocus={() => setFocusedField(ph)}
                  onBlur={() => setFocusedField(null)}
                />
              ))}
            </div>
            <textarea required rows={4} value={message}
              onChange={e => setMessage(e.target.value)} placeholder={t.cta.formMessage} aria-label={t.cta.formMessage}
              className="w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all duration-200 resize-none"
              style={{ ...focusStyle("message"), color: textColor }}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
            {status === "success" && (
              <p className="text-[13px] text-center py-1" style={{ color: "#4ade80" }}>{t.cta.formSuccess}</p>
            )}
            {status === "error" && (
              <p className="text-[13px] text-center py-1" style={{ color: "#f87171" }}>{t.cta.formError}</p>
            )}
            <motion.button type="submit" disabled={status === "loading"}
              whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl text-[13px] font-semibold transition-all duration-200 disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #7C5CFF, #5b8aff)",
                border: "none",
                color: "#ffffff",
                boxShadow: "0 4px 28px rgba(124,92,255,0.45)",
              }}>
              {status === "loading" ? "..." : t.cta.formSubmit}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
