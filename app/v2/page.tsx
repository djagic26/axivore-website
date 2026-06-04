"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { Language } from "@/lib/i18n";

// ─── Color system ─────────────────────────────────────────────────────────
function useColors(isDark: boolean) {
  return {
    text:    isDark ? "#ffffff"                    : "#0d0b1a",
    muted:   isDark ? "rgba(255,255,255,0.48)"     : "rgba(13,11,26,0.52)",
    card:    isDark ? "rgba(255,255,255,0.028)"    : "rgba(255,255,255,0.75)",
    cardBorder: isDark ? "rgba(255,255,255,0.07)"  : "rgba(124,92,255,0.14)",
    divider: isDark ? "rgba(255,255,255,0.07)"     : "rgba(124,92,255,0.1)",
    // Section backgrounds — each section slightly different for rhythm
    bgHero:       isDark ? "#030208" : "linear-gradient(155deg,#ede8ff 0%,#e6deff 35%,#f3efff 70%,#faf8ff 100%)",
    bgA:          isDark ? "#040110" : "linear-gradient(180deg,#eee9ff 0%,#f5f1ff 100%)",
    bgB:          isDark ? "#030208" : "linear-gradient(180deg,#f5f1ff 0%,#f0ebff 100%)",
    bgC:          isDark ? "#06030f" : "linear-gradient(180deg,#f0ebff 0%,#ece6ff 100%)",
    bgD:          isDark ? "#040110" : "linear-gradient(180deg,#ece6ff 0%,#f5f1ff 100%)",
  };
}

// ─── Logo ─────────────────────────────────────────────────────────────────
function AxivoreLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <circle cx="26" cy="26" r="24" stroke="#4A4866" strokeWidth="1"/>
      <line x1="26" y1="4" x2="26" y2="48" stroke="#A09AFF" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="4" y1="26" x2="48" y2="26" stroke="#A09AFF" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="8.5" y1="8.5" x2="43.5" y2="43.5" stroke="#7B72E8" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="43.5" y1="8.5" x2="8.5" y2="43.5" stroke="#7B72E8" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="26" cy="26" r="4.5" fill="transparent" stroke="#A09AFF" strokeWidth="1.5"/>
      <circle cx="26" cy="26" r="1.5" fill="#A09AFF"/>
    </svg>
  );
}

// ─── Language Dropdown ────────────────────────────────────────────────────
const langMeta: Record<Language, { name: string; flag: string }> = {
  de: { name: "Deutsch", flag: "🇩🇪" },
  en: { name: "English", flag: "🇬🇧" },
  hr: { name: "Hrvatski", flag: "🇭🇷" },
  ro: { name: "Română", flag: "🇷🇴" },
  tr: { name: "Türkçe", flag: "🇹🇷" },
  it: { name: "Italiano", flag: "🇮🇹" },
};
const langs: Language[] = ["de", "en", "hr", "ro", "tr", "it"];

function LangDropdown({ language, setLanguage, isDark }: {
  language: Language; setLanguage: (l: Language) => void; isDark: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const muted = isDark ? "rgba(255,255,255,0.5)" : "rgba(10,10,15,0.5)";
  const hoverBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";

  return (
    <div ref={ref} className="relative hidden sm:block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200"
        style={{ color: muted }}
      >
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span>{langMeta[language].flag} {langMeta[language].name}</span>
        <motion.svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.18 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.14 }}
            className="absolute right-0 top-full mt-2 w-44 rounded-xl shadow-2xl overflow-hidden z-50"
            style={{
              background: isDark ? "rgba(13,13,21,0.97)" : "rgba(255,255,255,0.97)",
              border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            {langs.map((lang) => (
              <button key={lang} onClick={() => { setLanguage(lang); setOpen(false); }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-[13px] transition-colors duration-150"
                style={{
                  color: language === lang ? (isDark ? "#fff" : "#0a0a0f") : muted,
                  background: language === lang ? hoverBg : "transparent",
                }}>
                <span className="flex items-center gap-2.5">
                  <span>{langMeta[lang].flag}</span>
                  <span className="font-medium">{langMeta[lang].name}</span>
                </span>
                {language === lang && (
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="#A09AFF" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────
function Nav() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "rgba(255,255,255,0.9)" : "rgba(10,10,15,0.9)";
  const mutedColor = isDark ? "rgba(255,255,255,0.45)" : "rgba(10,10,15,0.45)";
  const borderColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  const navLinks = [
    { key: "services", href: "#services", label: t.nav.services },
    { key: "portfolio", href: "#portfolio", label: t.nav.portfolio },
    { key: "process", href: "#process", label: t.nav.process },
    { key: "faq", href: "#faq", label: t.nav.faq },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? `${bg}e6` : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${borderColor}` : "1px solid transparent",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <AxivoreLogo />
          <div className="flex flex-col leading-tight">
            <span className="font-medium text-[17px] tracking-[-0.04em]" style={{ color: textColor }}>Axivore</span>
            <span className="text-[7px] uppercase tracking-[0.22em]" style={{ color: "#A09AFF" }}>
              Precision · Disruption · Direction
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ key, href, label }, i) => (
            <motion.a key={key} href={href}
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.05 }}
              className="text-[13px] font-medium transition-colors duration-200"
              style={{ color: mutedColor }}
              onMouseEnter={e => (e.currentTarget.style.color = textColor)}
              onMouseLeave={e => (e.currentTarget.style.color = mutedColor)}
            >
              {label}
            </motion.a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <LangDropdown language={language} setLanguage={setLanguage} isDark={isDark} />

          {/* Theme toggle */}
          <button onClick={toggle}
            className="p-2 rounded-lg transition-all duration-200"
            style={{ color: mutedColor }}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* CTA */}
          <motion.a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[13px] font-semibold shadow-lg"
            style={{ background: "linear-gradient(135deg, #7C5CFF, #5b8aff)", boxShadow: "0 4px 20px rgba(124,92,255,0.3)" }}
          >
            {t.nav.cta}
          </motion.a>

          {/* Mobile burger */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: mutedColor }}>
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden px-6 py-5 flex flex-col gap-4 border-t overflow-hidden"
            style={{ background: isDark ? "rgba(5,5,5,0.97)" : "rgba(255,255,255,0.97)", borderColor, backdropFilter: "blur(20px)" }}>
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)}
                className="text-base font-medium transition-colors" style={{ color: textColor }}>
                {label}
              </a>
            ))}
            <a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
              onClick={() => setMobileOpen(false)}
              className="inline-flex justify-center items-center text-white text-sm font-semibold px-5 py-3 rounded-full mt-1"
              style={{ background: "linear-gradient(135deg, #7C5CFF, #5b8aff)" }}>
              {t.nav.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ─── Count-up ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [inView, target, duration]);
  return { count, ref };
}

// ─── Glass Card ───────────────────────────────────────────────────────────
function GlassCard({ isDark }: { isDark: boolean }) {
  const textMain = isDark ? "#fff" : "#0a0a0f";
  const textMuted = isDark ? "rgba(255,255,255,0.45)" : "rgba(10,10,15,0.45)";

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Mega glow behind card */}
      <div className="absolute pointer-events-none"
        style={{ width: 560, height: 560, top: "50%", left: "50%", transform: "translate(-50%,-52%)",
          background: "radial-gradient(ellipse, rgba(124,92,255,0.4) 0%, rgba(91,138,255,0.15) 40%, transparent 70%)",
          filter: "blur(55px)" }} />
      <div className="absolute pointer-events-none"
        style={{ width: 300, height: 300, bottom: "0%", right: "-5%",
          background: "radial-gradient(ellipse, rgba(255,61,197,0.2) 0%, transparent 65%)",
          filter: "blur(45px)" }} />

      {/* Layer 3 — deep back */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-[20px]"
        style={{
          width: 320, height: 210,
          background: isDark ? "rgba(50,20,110,0.25)" : "rgba(200,190,255,0.3)",
          border: `1px solid ${isDark ? "rgba(160,154,255,0.15)" : "rgba(124,92,255,0.14)"}`,
          backdropFilter: "blur(6px)",
          transform: "rotate(-10deg) translateY(70px) translateX(40px)",
          boxShadow: isDark ? "0 24px 80px rgba(60,20,140,0.4)" : "0 24px 60px rgba(124,92,255,0.12)",
        }} />

      {/* Layer 2 — mid */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, -0.8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute rounded-[20px]"
        style={{
          width: 345, height: 225,
          background: isDark ? "rgba(35,15,85,0.45)" : "rgba(228,222,255,0.6)",
          border: `1px solid ${isDark ? "rgba(160,154,255,0.22)" : "rgba(124,92,255,0.22)"}`,
          backdropFilter: "blur(12px)",
          transform: "rotate(-5deg) translateY(28px)",
          boxShadow: isDark ? "0 30px 80px rgba(60,20,140,0.45)" : "0 30px 60px rgba(124,92,255,0.14)",
        }} />

      {/* Layer 1 — main card */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative rounded-[22px] overflow-hidden"
        style={{
          width: 370, height: 250,
          background: isDark ? "rgba(12,7,28,0.82)" : "rgba(250,248,255,0.92)",
          border: "1px solid rgba(140,100,255,0.35)",
          backdropFilter: "blur(40px) saturate(200%)",
          boxShadow: isDark
            ? "0 50px 120px rgba(40,10,110,0.8), 0 0 0 1px rgba(180,154,255,0.12) inset, 0 1px 0 rgba(255,255,255,0.08) inset"
            : "0 50px 120px rgba(124,92,255,0.22), 0 0 0 1px rgba(124,92,255,0.14) inset",
        }}>
        {/* Top shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(180,154,255,0.7) 40%, rgba(255,61,197,0.5) 60%, transparent 95%)" }} />
        {/* Corner glow */}
        <div className="absolute top-0 right-0 pointer-events-none"
          style={{ width: 180, height: 180,
            background: "radial-gradient(ellipse, rgba(124,92,255,0.35) 0%, transparent 70%)",
            filter: "blur(24px)", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 pointer-events-none"
          style={{ width: 140, height: 120,
            background: "radial-gradient(ellipse, rgba(255,61,197,0.18) 0%, transparent 70%)",
            filter: "blur(20px)", transform: "translate(-20%,30%)" }} />

        <div className="relative p-7 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div className="w-2 h-2 rounded-full"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ background: "#A09AFF", boxShadow: "0 0 10px rgba(160,154,255,1)" }} />
              <span className="text-[9.5px] tracking-[0.2em] uppercase font-medium" style={{ color: textMuted }}>AI System Active</span>
            </div>
            <div className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide"
              style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}>
              ONLINE
            </div>
          </div>
          <div>
            <div className="font-bold tracking-tight leading-none mb-1"
              style={{ fontSize: 56, background: "linear-gradient(135deg, #ffffff 0%, #A09AFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              98%
            </div>
            <div className="text-[11.5px] font-medium" style={{ color: textMuted }}>Client Retention Rate</div>
          </div>
          <div className="flex items-end justify-between pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div>
              <div className="text-[28px] font-bold" style={{ color: textMain }}>$24M+</div>
              <div className="text-[10px]" style={{ color: textMuted }}>Revenue Influenced</div>
            </div>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.3), rgba(255,61,197,0.15))", border: "1px solid rgba(160,100,255,0.4)", boxShadow: "0 4px 20px rgba(124,92,255,0.3)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 12L6 7L10 9L14 3" stroke="#A09AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 3H14V6" stroke="#A09AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating chip — top right */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-2 right-0 px-4 py-3 rounded-2xl"
        style={{
          background: isDark ? "rgba(10,5,25,0.85)" : "rgba(248,246,255,0.92)",
          border: "1px solid rgba(160,154,255,0.28)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(60,30,120,0.35)",
        }}>
        <div className="text-[9px] tracking-widest uppercase font-medium mb-0.5" style={{ color: "rgba(160,154,255,0.7)" }}>Systems Built</div>
        <div className="text-[24px] font-bold leading-tight" style={{ color: textMain }}>47+</div>
      </motion.div>

      {/* Floating chip — bottom left */}
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, -4, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-6 left-[-8px] px-4 py-3 rounded-2xl"
        style={{
          background: isDark ? "rgba(10,5,25,0.85)" : "rgba(248,246,255,0.92)",
          border: "1px solid rgba(255,61,197,0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(255,61,197,0.2)",
        }}>
        <div className="text-[9px] tracking-widest uppercase font-medium mb-0.5" style={{ color: "rgba(255,120,210,0.8)" }}>Avg. ROI</div>
        <div className="text-[24px] font-bold leading-tight" style={{ color: textMain }}>2–6x</div>
      </motion.div>

      {/* Floating pill — live */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[44%] right-[-16px] flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: isDark ? "rgba(10,5,25,0.9)" : "rgba(248,246,255,0.95)",
          border: "1px solid rgba(34,197,94,0.3)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 6px 24px rgba(34,197,94,0.15)",
        }}>
        <motion.div className="w-1.5 h-1.5 rounded-full"
          animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
        <span className="text-[10px] font-semibold whitespace-nowrap" style={{ color: textMuted }}>Live system</span>
      </motion.div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.45)" : "rgba(10,10,15,0.48)";

  const heroLines = [
    t.hero.headline.replace(/\.$/, ""),
    t.hero.headline2.replace(/\.$/, ""),
  ];

  const heroBg = isDark
    ? "#030208"
    : "linear-gradient(145deg, #ece8ff 0%, #e8e2ff 20%, #f0ecff 50%, #f8f5ff 80%, #faf8ff 100%)";

  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden"
      style={{ background: heroBg }}>

      {/* ── SPOTLIGHT BEAM — the WOW moment ── */}
      {isDark && (
        <>
          {/* Sharp concentrated beam from top */}
          <div className="absolute pointer-events-none inset-x-0 top-0"
            style={{ height: "85%",
              background: "radial-gradient(ellipse 38% 60% at 50% -8%, rgba(155,90,255,0.95) 0%, rgba(120,65,240,0.55) 18%, rgba(80,35,200,0.22) 38%, rgba(50,15,140,0.06) 58%, transparent 72%)" }} />
          {/* Beam core — ultra bright center */}
          <div className="absolute pointer-events-none inset-x-0 top-0"
            style={{ height: "50%",
              background: "radial-gradient(ellipse 18% 35% at 50% -2%, rgba(200,160,255,0.9) 0%, rgba(170,120,255,0.5) 20%, transparent 55%)" }} />
          {/* Right accent orb — magenta */}
          <motion.div className="absolute pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 550, height: 550, top: "10%", right: "-6%",
              background: "radial-gradient(ellipse, rgba(255,61,197,0.28) 0%, rgba(180,60,255,0.1) 40%, transparent 65%)",
              filter: "blur(60px)" }} />
          {/* Left blue orb */}
          <motion.div className="absolute pointer-events-none"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{ width: 500, height: 450, top: "20%", left: "-8%",
              background: "radial-gradient(ellipse, rgba(70,130,255,0.3) 0%, rgba(60,80,220,0.12) 45%, transparent 68%)",
              filter: "blur(60px)" }} />
          {/* Subtle floor reflection */}
          <motion.div className="absolute pointer-events-none"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ width: 800, height: 300, bottom: 60, left: "50%", transform: "translateX(-50%)",
              background: "radial-gradient(ellipse, rgba(120,60,255,0.18) 0%, rgba(255,61,197,0.07) 40%, transparent 65%)",
              filter: "blur(40px)" }} />
        </>
      )}
      {!isDark && (
        <div className="absolute pointer-events-none inset-x-0 top-0" style={{ height: "100%",
          background: "radial-gradient(ellipse 60% 70% at 50% -5%, rgba(150,110,255,0.35) 0%, rgba(120,80,240,0.18) 40%, transparent 65%)" }} />
      )}

      {/* Fine dot grid — premium texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? "rgba(160,154,255,0.18)" : "rgba(90,60,200,0.14)"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 20%, transparent 80%)",
        }} />
      {/* Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${isDark ? "#030208" : "#eeeaff"}f5)` }} />
      {/* Side vignettes */}
      <div className="absolute inset-y-0 left-0 w-[15%] pointer-events-none"
        style={{ background: `linear-gradient(to right, ${isDark ? "#030208" : "#eeeaff"}, transparent)` }} />
      <div className="absolute inset-y-0 right-0 w-[15%] pointer-events-none"
        style={{ background: `linear-gradient(to left, ${isDark ? "#030208" : "#eeeaff"}, transparent)` }} />

      {/* ── Content ── */}
      <div className="relative flex-1 max-w-[1320px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-64px)] py-24">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-10"
              style={{
                background: isDark ? "rgba(124,92,255,0.1)" : "rgba(124,92,255,0.08)",
                border: `1px solid ${isDark ? "rgba(124,92,255,0.25)" : "rgba(124,92,255,0.2)"}`,
              }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#A09AFF" }} />
              <span className="text-[10.5px] tracking-[0.18em] uppercase font-medium" style={{ color: "#A09AFF" }}>
                {t.hero.badge}
              </span>
            </motion.div>

            <h1 className="mb-8">
              {heroLines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div initial={{ y: "105%" }} animate={{ y: 0 }}
                    transition={{ duration: 0.78, delay: 0.25 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                    className="font-black leading-[0.88] tracking-[-0.05em]"
                    style={{
                      fontSize: "clamp(58px,7.5vw,110px)",
                      ...(isDark ? {
                        background: i === 0
                          ? "linear-gradient(160deg, #ffffff 0%, #e0d8ff 60%, #c4b8ff 100%)"
                          : "linear-gradient(160deg, #f0ebff 0%, #B8AEFF 50%, #d47fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 0 40px rgba(160,154,255,0.35))",
                      } : { color: textColor }),
                    }}>
                    {i === heroLines.length - 1 ? (
                      <>{line}<span style={{ ...(isDark ? { background: "none", WebkitTextFillColor: "#7C5CFF" } : { color: "#7C5CFF" }) }}>.</span></>
                    ) : line}
                  </motion.div>
                </div>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.62 }}
              className="text-[15px] leading-[1.75] max-w-[420px] mb-10"
              style={{ color: mutedColor }}>
              {t.hero.subheadline}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              className="flex items-center gap-5 flex-wrap mb-16">
              <motion.a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
                whileHover={{ scale: 1.04, boxShadow: "0 10px 50px rgba(160,60,255,0.65)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-4 rounded-full text-white text-[14px] font-semibold cursor-pointer relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #7C5CFF 40%, #5b8aff 100%)", boxShadow: "0 6px 36px rgba(124,92,255,0.5)", transition: "box-shadow 0.25s" }}>
                {t.hero.ctaPrimary}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.a>
              <motion.a href="#results" whileHover={{ x: 4 }} transition={{ duration: 0.15 }}
                className="flex items-center gap-2 text-[14px] font-medium cursor-pointer transition-colors"
                style={{ color: mutedColor }}>
                {t.hero.ctaSecondary}
                <span className="text-[16px]">→</span>
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
              <p className="text-[9.5px] tracking-[0.24em] uppercase mb-4"
                style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(90,60,200,0.35)" }}>
                {t.hero.socialProof}
              </p>
              <div className="flex items-center gap-7 flex-wrap">
                {["Zapier", "OpenAI", "Claude", "Supabase", "Next.js", "Stripe"].map((name) => (
                  <span key={name} className="text-[13px] font-semibold"
                    style={{ color: isDark ? "rgba(255,255,255,0.14)" : "rgba(60,30,150,0.22)" }}>
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Glass card */}
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[520px] hidden lg:block">
            <GlassCard isDark={isDark} />
            <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 text-right pr-2">
              <p className="text-[10.5px] leading-[1.9]"
                style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(60,30,150,0.3)" }}>
                Intelligent systems.<br />Real results.<br />No fluff.
              </p>
              <div className="w-1 h-1 rounded-full ml-auto mt-2"
                style={{ background: "#A09AFF", boxShadow: "0 0 8px rgba(160,154,255,0.8)" }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Big scrolling text at bottom ── */}
      <div className="relative w-full overflow-hidden pb-2 pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
          style={{ width: "max-content" }}>
          {[0, 1].map(k => (
            <div key={k} className="flex items-center">
              {["AXIVORE", "INTELLIGENT SYSTEMS", "AI AUTOMATION", "RESULTS FIRST", "PRECISION"].map((word, j) => (
                <span key={j} className="font-bold uppercase tracking-[-0.02em] mx-8"
                  style={{
                    fontSize: "clamp(56px, 8vw, 110px)",
                    color: j % 2 === 0
                      ? isDark ? "rgba(255,255,255,0.09)" : "rgba(90,60,200,0.1)"
                      : "transparent",
                    WebkitTextStroke: j % 2 !== 0
                      ? isDark ? "1.5px rgba(160,154,255,0.45)" : "1.5px rgba(90,60,200,0.22)"
                      : "none",
                  }}>
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Marquee ──────────────────────────────────────────────────────────────
const marqueeBrands = ["Zapier", "OpenAI", "Claude", "Supabase", "Next.js", "Stripe", "HubSpot", "Notion", "Slack", "Airtable", "Make", "n8n"];

function Marquee() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const textColor = isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.22)";

  return (
    <div className="overflow-hidden py-4" style={{ borderTop: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}`, background: bg }}>
      <div className="flex gap-12 animate-marquee w-max">
        {[...marqueeBrands, ...marqueeBrands].map((b, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <div className="w-1 h-1 rounded-full" style={{ background: "#A09AFF", opacity: 0.5 }} />
            <span className="text-[13px] font-medium tracking-wide" style={{ color: textColor }}>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Results / Stats ──────────────────────────────────────────────────────
const ACCENTS = [
  { color: "#A09AFF", glow: "rgba(160,154,255,0.5)", bg: "rgba(160,154,255,0.07)", border: "rgba(160,154,255,0.18)" },
  { color: "#FF3DC5", glow: "rgba(255,61,197,0.4)",  bg: "rgba(255,61,197,0.07)",  border: "rgba(255,61,197,0.18)" },
  { color: "#5B8AFF", glow: "rgba(91,138,255,0.4)",  bg: "rgba(91,138,255,0.07)",  border: "rgba(91,138,255,0.18)" },
  { color: "#22d3ee", glow: "rgba(34,211,238,0.35)", bg: "rgba(34,211,238,0.06)",  border: "rgba(34,211,238,0.15)" },
];

function MetricCard({ m, i, isDark }: {
  m: { value: string; suffix: string; label: string; context: string };
  i: number; isDark: boolean;
}) {
  const numVal = parseInt(m.value) || 0;
  const { count, ref } = useCountUp(numVal, 2000);
  const inView = useInView(ref, { once: true });
  const acc = ACCENTS[i % 4];
  const C = useColors(isDark);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ y: -6, boxShadow: isDark ? `0 24px 60px ${acc.glow}` : `0 16px 48px rgba(124,92,255,0.15)` }}
      className="rounded-[20px] p-8 flex flex-col relative overflow-hidden cursor-default transition-all duration-300"
      style={{ background: isDark
        ? `linear-gradient(145deg, rgba(12,7,28,0.9), rgba(6,3,14,0.96))`
        : "rgba(255,255,255,0.85)",
        border: `1px solid ${isDark ? acc.border : "rgba(124,92,255,0.16)"}`,
        backdropFilter: isDark ? "none" : "blur(20px)",
        boxShadow: isDark ? "none" : "0 4px 24px rgba(100,60,220,0.08)" }}>
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent 5%, ${acc.color} 50%, transparent 95%)` }} />
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${acc.bg} 0%, transparent 70%)`, filter: "blur(20px)", transform: "translate(20%,-20%)" }} />
      <div className="font-black tracking-tight leading-none mb-4"
        style={{ fontSize: "clamp(52px,5vw,76px)", color: acc.color,
          textShadow: isDark ? `0 0 40px ${acc.glow}` : `0 2px 20px ${acc.glow}` }}>
        {numVal > 0 && inView ? count : m.value}{m.suffix}
      </div>
      <div className="text-[15px] font-semibold mb-1.5" style={{ color: C.text }}>{m.label}</div>
      <div className="text-[12px] leading-[1.6]" style={{ color: C.muted }}>{m.context}</div>
    </motion.div>
  );
}

function Results() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="results" className="relative py-[120px] overflow-hidden" style={{ background: C.bgA }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(124,92,255,0.3) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(124,92,255,0.2) 50%,transparent 95%)" }} />
      {isDark && (
        <div className="absolute pointer-events-none" style={{ width: 900, height: 600, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(ellipse,rgba(80,40,180,0.14) 0%,transparent 65%)", filter: "blur(60px)" }} />
      )}
      <div className="relative max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#7C5CFF" }}>
            {t.labels.results}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
            {t.results.headline}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-[15px] mt-5 max-w-sm mx-auto leading-[1.7]" style={{ color: C.muted }}>
            {t.results.subheadline}
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.results.metrics.map((m, i) => <MetricCard key={i} m={m} i={i} isDark={isDark} />)}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────
const SVC_ICONS = [
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/><path d="M9 9l2 2 4-4"/></svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round"><path d="M4 4v5h5M20 20v-5h-5"/><path d="M4 9a8 8 0 0114.93-2M20 15a8 8 0 01-14.93 2"/></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 10h8M8 14h5"/></svg>,
];

function Services() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);
  const borderColor = C.cardBorder;

  return (
    <section id="services" className="relative py-[120px] overflow-hidden" style={{ background: C.bgB }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.07) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(124,92,255,0.15) 50%,transparent 95%)" }} />

      <div className="max-w-[1320px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[10.5px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#7C5CFF" }}>
              {t.labels.services}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
              {t.services.headline}<span style={{ color: "#7C5CFF" }}>.</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] leading-[1.75] max-w-xs" style={{ color: C.muted }}>
            {t.services.subheadline}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.services.items.map((svc, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: isDark ? "0 28px 70px rgba(100,50,220,0.25)" : "0 20px 50px rgba(100,60,220,0.15)" }}
              className="group rounded-[22px] p-9 flex flex-col justify-between relative overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: isDark
                  ? i === 0 ? "linear-gradient(145deg,rgba(100,60,220,0.14),rgba(6,3,14,0.96))"
                           : "linear-gradient(145deg,rgba(12,7,28,0.92),rgba(6,3,14,0.96))"
                  : "rgba(255,255,255,0.82)",
                border: `1px solid ${i === 0 ? "rgba(124,92,255,0.38)" : borderColor}`,
                backdropFilter: isDark ? "none" : "blur(20px)",
                boxShadow: isDark ? "none" : "0 4px 24px rgba(100,60,220,0.08)",
                minHeight: "280px",
              }}>
              {/* Top shimmer on hover */}
              <div className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
                style={{ background: i === 0
                  ? "linear-gradient(90deg, transparent, rgba(160,154,255,0.6), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(160,154,255,0.2), transparent)", opacity: i === 0 ? 1 : 0 }}
                data-hover-show />
              {/* Corner glow */}
              {isDark && i === 0 && (
                <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(124,92,255,0.18) 0%, transparent 65%)", filter: "blur(24px)", transform: "translate(20%,-20%)" }} />
              )}

              <div>
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-7"
                  style={{
                    background: i === 0
                      ? "rgba(124,92,255,0.18)"
                      : isDark ? "rgba(255,255,255,0.06)" : "rgba(124,92,255,0.1)",
                    border: `1px solid ${i === 0
                      ? "rgba(124,92,255,0.4)"
                      : isDark ? "rgba(255,255,255,0.1)" : "rgba(124,92,255,0.2)"}`,
                    color: isDark
                      ? i === 0 ? "#A09AFF" : "rgba(255,255,255,0.5)"
                      : "#7C5CFF",
                  }}>
                  {SVC_ICONS[i]}
                </div>
                {/* Tag */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9.5px] font-semibold tracking-wide mb-4"
                  style={{ background: "rgba(124,92,255,0.1)", color: "#7C5CFF", border: "1px solid rgba(124,92,255,0.2)" }}>
                  {svc.tag}
                </div>
                <h3 className="text-[21px] font-bold mb-3 tracking-tight" style={{ color: C.text }}>{svc.title}</h3>
                <p className="text-[13.5px] leading-[1.7]" style={{ color: C.muted }}>{svc.description}</p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6"
                style={{ borderTop: `1px solid ${C.divider}` }}>
                <span className="text-[12px] font-semibold" style={{ color: "#7C5CFF" }}>{svc.outcome}</span>
                <motion.div whileHover={{ x: 3, y: -3 }}
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(124,92,255,0.1)", border: "1px solid rgba(124,92,255,0.2)" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#A09AFF" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────
const statusColors: Record<string, { bg: string; color: string; border: string }> = {
  "Live Beta":        { bg: "rgba(34,197,94,0.08)",  color: "#4ade80", border: "rgba(34,197,94,0.2)" },
  "Canlı Beta":       { bg: "rgba(34,197,94,0.08)",  color: "#4ade80", border: "rgba(34,197,94,0.2)" },
  "In Entwicklung":   { bg: "rgba(251,191,36,0.08)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  "In Development":   { bg: "rgba(251,191,36,0.08)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  "U razvoju":        { bg: "rgba(251,191,36,0.08)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  "Demo verfügbar":   { bg: "rgba(99,102,241,0.08)", color: "#818cf8", border: "rgba(99,102,241,0.2)" },
  "Demo Available":   { bg: "rgba(99,102,241,0.08)", color: "#818cf8", border: "rgba(99,102,241,0.2)" },
  "Demo dostupan":    { bg: "rgba(99,102,241,0.08)", color: "#818cf8", border: "rgba(99,102,241,0.2)" },
};

function PortfolioCard({ product, i, isDark }: {
  product: { name: string; tagline: string; problem: string; outcome: string; status: string; metric: { value: string; label: string }; tags: string[]; gradient: string };
  i: number; isDark: boolean;
}) {
  const { t } = useLanguage();
  const C = useColors(isDark);
  const sc = statusColors[product.status] ?? { bg: "rgba(124,92,255,0.08)", color: "#A09AFF", border: "rgba(124,92,255,0.2)" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -5, boxShadow: isDark ? "0 24px 60px rgba(80,40,180,0.18)" : "0 16px 48px rgba(100,60,220,0.14)" }}
      className="rounded-[22px] overflow-hidden flex flex-col transition-all duration-300"
      style={{ background: isDark
        ? "linear-gradient(145deg,rgba(12,7,28,0.92),rgba(6,3,14,0.96))"
        : "rgba(255,255,255,0.85)",
        border: `1px solid ${C.cardBorder}`,
        backdropFilter: isDark ? "none" : "blur(20px)",
        boxShadow: isDark ? "none" : "0 4px 24px rgba(100,60,220,0.08)" }}>
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${product.gradient.includes("violet") ? "#7C5CFF" : "#5b8aff"}, ${product.gradient.includes("indigo") ? "#5b8aff" : "#A09AFF"})` }} />
      <div className="p-7 flex flex-col flex-1 gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap mb-1">
              <h3 className="text-[18px] font-bold tracking-tight" style={{ color: C.text }}>{product.name}</h3>
              <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border"
                style={{ background: sc.bg, color: sc.color, borderColor: sc.border }}>{product.status}</span>
            </div>
            <p className="text-[12.5px]" style={{ color: C.muted }}>{product.tagline}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[22px] font-bold" style={{ color: "#7C5CFF" }}>{product.metric.value}</div>
            <div className="text-[10px] max-w-[80px] leading-tight" style={{ color: C.muted }}>{product.metric.label}</div>
          </div>
        </div>
        <div className="h-px" style={{ background: C.divider }} />
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(251,191,36,0.15)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f59e0b" }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#f59e0b" }}>{t.labels.problem}</span>
          </div>
          <p className="text-[12.5px] leading-[1.65] pl-5" style={{ color: C.muted }}>{product.problem}</p>
        </div>
        <div className="pl-2">
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path d="M5 0v12M1 9l4 4 4-4" stroke={C.divider} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.15)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#22c55e" }}>{t.labels.outcome}</span>
          </div>
          <p className="text-[12.5px] leading-[1.65] pl-5" style={{ color: C.text }}>{product.outcome}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {product.tags.map((tag, j) => (
            <span key={j} className="text-[11px] px-2.5 py-0.5 rounded-full"
              style={{ color: C.muted, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(124,92,255,0.07)", border: `1px solid ${C.cardBorder}` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Portfolio() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="portfolio" className="py-[110px] relative" style={{ background: C.bgC }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.07) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(124,92,255,0.15) 50%,transparent 95%)" }} />
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="relative text-center mb-16">
          <p className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#7C5CFF" }}>
            {t.labels.portfolio}
          </p>
          <h2 className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
            {t.portfolio.headline}<span style={{ color: "#7C5CFF" }}>.</span>
          </h2>
          <p className="text-[15px] mt-5 max-w-md mx-auto leading-[1.7]" style={{ color: C.muted }}>
            {t.portfolio.subheadline}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.portfolio.items.map((product, i) => (
            <PortfolioCard key={i} product={product} i={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────
function FAQ() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-[120px] overflow-hidden" style={{ background: C.bgA }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark ? "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.07) 50%, transparent 90%)" : "rgba(0,0,0,0.05)" }} />

      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left — sticky title */}
          <div className="md:w-[380px] shrink-0">
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#A09AFF" }}>
              {t.labels.faq}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black tracking-[-0.04em] leading-[1.0] mb-6"
              style={{ fontSize: "clamp(36px,4vw,56px)", color: C.text }}>
              {t.faq.headline}<span style={{ color: "#7C5CFF" }}>?</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }} className="text-[14px] leading-[1.75]" style={{ color: C.muted }}>
              Alles Wichtige — klar und direkt.
            </motion.p>
          </div>

          {/* Right — accordion */}
          <div className="flex-1 space-y-2">
            {t.faq.items.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[18px] overflow-hidden transition-all duration-250 relative"
                style={{
                  background: openIdx === i
                    ? isDark ? "rgba(124,92,255,0.08)" : "rgba(255,255,255,0.9)"
                    : isDark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.7)",
                  border: `1px solid ${openIdx === i ? "rgba(124,92,255,0.3)" : C.cardBorder}`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? "none" : "0 2px 12px rgba(100,60,220,0.06)",
                }}>
                {/* Left accent bar when open */}
                {openIdx === i && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-full"
                    style={{ background: "linear-gradient(to bottom, #7C5CFF, #FF3DC5)" }} />
                )}
                <button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                  <span className="text-[14px] font-semibold leading-[1.5]"
                    style={{ color: openIdx === i ? C.text : C.muted }}>
                    {item.question}
                  </span>
                  <motion.div animate={{ rotate: openIdx === i ? 45 : 0 }} transition={{ duration: 0.22 }}
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: openIdx === i ? "rgba(124,92,255,0.18)" : "transparent",
                      border: `1px solid ${openIdx === i ? "rgba(124,92,255,0.4)" : C.cardBorder}`,
                    }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24"
                      stroke={openIdx === i ? "#A09AFF" : isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)"} strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
                      <div className="px-6 pb-6">
                        <p className="text-[13.5px] leading-[1.78]" style={{ color: C.muted }}>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process (horizontal scroll) ─────────────────────────────────────────
function Process() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-420px"]);

  return (
    <section id="process" ref={targetRef} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: C.bgB }}>
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: isDark ? "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.07) 50%, transparent 90%)" : "rgba(0,0,0,0.05)" }} />

        <div className="max-w-[1320px] mx-auto px-6 w-full mb-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10.5px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#A09AFF" }}>
                {t.labels.process}
              </p>
              <h2 className="font-black tracking-[-0.04em] leading-[1.0]"
                style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
                {t.process.headline}<span style={{ color: "#7C5CFF" }}>.</span>
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[12px] mb-1" style={{ color: C.muted }}>{t.process.subheadline}</p>
              <span className="text-[11px] font-mono tracking-widest" style={{ color: "#7C5CFF" }}>
                01 → 0{t.process.steps.length}
              </span>
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4 pl-[max(24px,calc((100vw-1320px)/2+24px))] pr-32">
            {t.process.steps.map((step, i) => (
              <div key={i} className="flex-shrink-0 w-[310px] rounded-[22px] p-8 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: isDark
                    ? "linear-gradient(145deg,rgba(14,8,32,0.95),rgba(6,3,14,0.98))"
                    : "rgba(255,255,255,0.85)",
                  border: `1px solid ${C.cardBorder}`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? "none" : "0 4px 24px rgba(100,60,220,0.08)",
                  height: "280px",
                }}>
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${i === 0 ? "160,154,255" : i === 1 ? "255,61,197" : i === 2 ? "91,138,255" : i === 3 ? "34,211,238" : "160,154,255"},0.6), transparent)` }} />
                {/* Step number — large gradient */}
                <div>
                  <div className="font-black leading-none mb-6"
                    style={{ fontSize: 56,
                      background: "linear-gradient(135deg, rgba(160,154,255,0.9) 0%, rgba(124,92,255,0.4) 100%)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-[21px] font-bold mb-3 tracking-tight" style={{ color: C.text }}>{step.title}</h3>
                  <p className="text-[12.5px] leading-[1.68]" style={{ color: C.muted }}>{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────
const TESTI_ACCENTS = [
  { avatar: "linear-gradient(135deg, #7C5CFF, #A09AFF)", border: "rgba(124,92,255,0.25)", result: "rgba(124,92,255,0.1)", resultColor: "#A09AFF", resultBorder: "rgba(124,92,255,0.2)" },
  { avatar: "linear-gradient(135deg, #FF3DC5, #ff8de8)", border: "rgba(255,61,197,0.2)",  result: "rgba(255,61,197,0.08)", resultColor: "#FF3DC5", resultBorder: "rgba(255,61,197,0.18)" },
  { avatar: "linear-gradient(135deg, #5B8AFF, #93baff)", border: "rgba(91,138,255,0.2)",  result: "rgba(91,138,255,0.08)", resultColor: "#5B8AFF", resultBorder: "rgba(91,138,255,0.18)" },
];

function Testimonials() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="testimonials" className="relative py-[120px] overflow-hidden" style={{ background: C.bgD }}>
      {/* Atmospheric glow */}
      {isDark && (
        <div className="absolute pointer-events-none inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(80,40,180,0.1) 0%, transparent 65%)" }} />
      )}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark ? "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.07) 50%, transparent 90%)" : "rgba(0,0,0,0.05)" }} />

      <div className="relative max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#7C5CFF" }}>
            {t.labels.testimonials}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
            {t.testimonials.headline}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.testimonials.items.map((item, i) => {
            const acc = TESTI_ACCENTS[i % 3];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: `0 28px 70px rgba(80,40,180,0.18)` }}
                className="rounded-[22px] p-8 flex flex-col relative overflow-hidden transition-all duration-300"
                style={{
                  background: isDark
                    ? "linear-gradient(145deg,rgba(12,7,28,0.95),rgba(6,3,14,0.98))"
                    : "rgba(255,255,255,0.82)",
                  border: `1px solid ${isDark ? acc.border : "rgba(124,92,255,0.15)"}`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? "none" : "0 4px 24px rgba(100,60,220,0.08)",
                }}>
                {/* Top shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent 5%, ${acc.resultColor}88 50%, transparent 95%)` }} />

                {/* Big quote mark */}
                <div className="font-black leading-none mb-6 select-none"
                  style={{ fontSize: 72, lineHeight: 1,
                    background: `linear-gradient(135deg, ${acc.resultColor} 0%, rgba(255,255,255,0.15) 100%)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  "
                </div>

                {/* Quote text */}
                <p className="text-[14px] leading-[1.8] flex-1 mb-8 font-medium" style={{ color: C.muted }}>
                  {item.quote}
                </p>

                {/* Author + result */}
                <div className="flex items-center justify-between pt-5"
                  style={{ borderTop: `1px solid ${C.divider}` }}>
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-black text-white shrink-0"
                      style={{ background: acc.avatar }}>
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold" style={{ color: C.text }}>{item.name}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: isDark ? "rgba(160,154,255,0.55)" : "#7C5CFF" }}>{item.role}</div>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide"
                    style={{ background: acc.result, color: acc.resultColor, border: `1px solid ${acc.resultBorder}` }}>
                    {item.result}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────
function FinalCTA() {
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
    <section className="relative py-[160px] overflow-hidden" style={{ borderTop: `1px solid ${borderColor}` }}>
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: isDark
          ? "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(80,40,200,0.22) 0%, rgba(40,15,90,0.12) 40%, #030208 70%)"
          : "linear-gradient(to bottom, #ffffff, #f5f2ff)" }} />
      {/* Top glow */}
      {isDark && (
        <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ top: "20%", width: 900, height: 600,
            background: "radial-gradient(ellipse, rgba(100,55,240,0.2) 0%, transparent 65%)",
            filter: "blur(60px)" }} />
      )}
      {/* Grid */}
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
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#A09AFF" }} />
            <span className="text-[10.5px] tracking-[0.18em] uppercase font-medium" style={{ color: "#A09AFF" }}>
              {t.labels.cta}
            </span>
          </div>
          <h2 className="font-bold tracking-[-0.04em] leading-[0.92] mb-8"
            style={{ fontSize: "clamp(48px,7vw,100px)", color: textColor }}>
            {t.cta.headline.replace(/[?!.]$/, "")}<span style={{ color: "#7C5CFF" }}>?</span>
          </h2>
          <p className="text-[16px] mb-12 max-w-[400px] mx-auto leading-[1.7]" style={{ color: mutedColor }}>
            {t.cta.subheadline}
          </p>
          <motion.a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
            whileHover={{ scale: 1.04, boxShadow: "0 12px 48px rgba(124,92,255,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-[14px] font-semibold cursor-pointer"
            style={{ background: "linear-gradient(135deg, #7C5CFF 0%, #6B8FFF 100%)", boxShadow: "0 6px 32px rgba(124,92,255,0.45)", transition: "box-shadow 0.2s" }}>
            {t.cta.button}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H4M12 2V10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </motion.a>
          <p className="text-[11.5px] mt-6 tracking-wide" style={{ color: isDark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.25)" }}>
            {t.cta.subtext}
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mt-16 mb-10 max-w-md mx-auto">
            <div className="flex-1 h-px" style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
            <span className="text-[12px] font-medium" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)" }}>
              {t.cta.formTitle}
            </span>
            <div className="flex-1 h-px" style={{ background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
          </div>

          {/* Contact form */}
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
                  onChange={e => set(e.target.value)} placeholder={ph}
                  className="w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all duration-200"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                    color: textColor,
                  }}
                  onFocus={e => { e.target.style.borderColor = "rgba(124,92,255,0.5)"; e.target.style.background = isDark ? "rgba(124,92,255,0.06)" : "rgba(124,92,255,0.04)"; }}
                  onBlur={e => { e.target.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"; e.target.style.background = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"; }}
                />
              ))}
            </div>
            <textarea required rows={4} value={message}
              onChange={e => setMessage(e.target.value)} placeholder={t.cta.formMessage}
              className="w-full px-4 py-3 rounded-xl text-[13px] outline-none transition-all duration-200 resize-none"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                color: textColor,
              }}
              onFocus={e => { e.target.style.borderColor = "rgba(124,92,255,0.5)"; e.target.style.background = isDark ? "rgba(124,92,255,0.06)" : "rgba(124,92,255,0.04)"; }}
              onBlur={e => { e.target.style.borderColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"; e.target.style.background = isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"; }}
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
                background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                color: textColor,
              }}>
              {status === "loading" ? "..." : t.cta.formSubmit}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.28)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <footer className="py-7" style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2.5">
          <AxivoreLogo />
          <span className="text-[13px] font-medium" style={{ color: textColor }}>
            © 2026 Axivore. {t.footer.copyright}
          </span>
        </div>
        <div className="flex gap-6">
          <a href="/impressum" className="text-[12px] transition-colors" style={{ color: textColor }}>{t.footer.legal}</a>
          <a href="#" className="text-[12px] transition-colors" style={{ color: textColor }}>{t.footer.privacy}</a>
          <a href="mailto:hello@axivore.io" className="text-[12px] transition-colors" style={{ color: textColor }}>hello@axivore.io</a>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────
export default function V2Page() {
  const { theme } = useTheme();
  const bg = theme === "dark" ? "#050505" : "#ffffff";
  return (
    <main style={{ background: bg }}>
      <Nav />
      <Hero />
      <Marquee />
      <Results />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
