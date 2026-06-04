"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { Language } from "@/lib/i18n";

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
  const textMuted = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.45)";
  const cardGlass = isDark
    ? { bg: "rgba(18,14,38,0.6)", border: "rgba(124,92,255,0.22)" }
    : { bg: "rgba(248,246,255,0.8)", border: "rgba(124,92,255,0.18)" };

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Outer glow blobs */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,92,255,0.28) 0%, transparent 65%)", filter: "blur(60px)", top: "50%", left: "50%", transform: "translate(-50%,-55%)" }} />
      <div className="absolute w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(90,138,255,0.18) 0%, transparent 65%)", filter: "blur(50px)", bottom: "5%", right: "0%" }} />

      {/* Layer 3 — deep back */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 1.2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[310px] h-[200px] rounded-2xl"
        style={{
          background: isDark ? "rgba(60,30,120,0.18)" : "rgba(200,190,255,0.25)",
          border: `1px solid ${isDark ? "rgba(160,154,255,0.12)" : "rgba(124,92,255,0.12)"}`,
          backdropFilter: "blur(4px)",
          transform: "rotate(-9deg) translateY(62px) translateX(36px)",
          boxShadow: isDark ? "0 20px 60px rgba(60,30,120,0.25)" : "0 20px 60px rgba(124,92,255,0.1)",
        }} />

      {/* Layer 2 — mid */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, -0.6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute w-[330px] h-[215px] rounded-2xl"
        style={{
          background: isDark ? "rgba(40,20,90,0.35)" : "rgba(230,225,255,0.5)",
          border: `1px solid ${isDark ? "rgba(160,154,255,0.18)" : "rgba(124,92,255,0.2)"}`,
          backdropFilter: "blur(10px)",
          transform: "rotate(-4deg) translateY(24px)",
          boxShadow: isDark ? "0 24px 60px rgba(60,30,120,0.3)" : "0 24px 60px rgba(124,92,255,0.12)",
        }} />

      {/* Layer 1 — front main card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative w-[350px] h-[235px] rounded-2xl overflow-hidden"
        style={{
          background: cardGlass.bg,
          border: `1px solid ${cardGlass.border}`,
          backdropFilter: "blur(24px)",
          boxShadow: isDark
            ? "0 32px 80px rgba(60,30,120,0.5), 0 0 0 1px rgba(160,154,255,0.08) inset"
            : "0 32px 80px rgba(124,92,255,0.15), 0 0 0 1px rgba(124,92,255,0.1) inset",
        }}>
        {/* Top shimmer */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(160,154,255,0.5) 50%, transparent 95%)" }} />
        {/* Inner glow top-right */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(124,92,255,0.25) 0%, transparent 70%)", filter: "blur(20px)", transform: "translate(30%, -30%)" }} />
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 w-32 h-24 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(90,138,255,0.15) 0%, transparent 70%)", filter: "blur(15px)", transform: "translate(-20%, 30%)" }} />

        <div className="relative p-6 h-full flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <motion.div className="w-2 h-2 rounded-full"
              animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
              style={{ background: "#A09AFF", boxShadow: "0 0 8px rgba(160,154,255,0.8)" }} />
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ color: textMuted }}>AI System Active</span>
          </div>
          <div>
            <div className="text-[52px] font-bold tracking-tight leading-none"
              style={{ color: textMain, textShadow: isDark ? "0 0 40px rgba(160,154,255,0.4)" : "none" }}>98%</div>
            <div className="text-[12px] mt-1" style={{ color: textMuted }}>Client Retention Rate</div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[26px] font-bold" style={{ color: textMain }}>$24M+</div>
              <div className="text-[10px]" style={{ color: textMuted }}>Revenue Influenced</div>
            </div>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(124,92,255,0.2)", border: "1px solid rgba(124,92,255,0.35)", boxShadow: "0 4px 20px rgba(124,92,255,0.25)" }}>
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
        animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-4 right-2 px-4 py-2.5 rounded-xl"
        style={{
          background: isDark ? "rgba(18,14,38,0.75)" : "rgba(248,246,255,0.9)",
          border: `1px solid ${isDark ? "rgba(160,154,255,0.2)" : "rgba(124,92,255,0.2)"}`,
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(60,30,120,0.25)",
        }}>
        <div className="text-[9.5px] tracking-widest uppercase" style={{ color: textMuted }}>Systems Built</div>
        <div className="text-[22px] font-bold leading-tight" style={{ color: textMain }}>47+</div>
      </motion.div>

      {/* Floating chip — bottom left */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, -3, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-8 left-0 px-4 py-2.5 rounded-xl"
        style={{
          background: isDark ? "rgba(40,20,100,0.6)" : "rgba(240,236,255,0.9)",
          border: "1px solid rgba(124,92,255,0.3)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 8px 32px rgba(124,92,255,0.2)",
        }}>
        <div className="text-[9.5px] tracking-widest uppercase" style={{ color: "rgba(160,154,255,0.8)" }}>Avg. ROI</div>
        <div className="text-[22px] font-bold leading-tight" style={{ color: textMain }}>2–6x</div>
      </motion.div>

      {/* Floating pill — activity */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[42%] right-[-12px] flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: isDark ? "rgba(20,15,50,0.8)" : "rgba(245,242,255,0.95)",
          border: "1px solid rgba(124,92,255,0.25)",
          backdropFilter: "blur(12px)",
        }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
        <span className="text-[10px] font-medium whitespace-nowrap" style={{ color: textMuted }}>Live system</span>
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
    ? "#06040f"
    : "linear-gradient(145deg, #ece8ff 0%, #e8e2ff 20%, #f0ecff 50%, #f8f5ff 80%, #faf8ff 100%)";

  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden"
      style={{ background: heroBg }}>

      {/* ── Background atmosphere ── */}
      {/* Primary mega-glow — top center */}
      <div className="absolute pointer-events-none"
        style={{ width: 1100, height: 800, top: -200, left: "50%", transform: "translateX(-50%)",
          background: isDark
            ? "radial-gradient(ellipse, rgba(110,65,240,0.55) 0%, rgba(80,40,200,0.28) 35%, transparent 65%)"
            : "radial-gradient(ellipse, rgba(150,110,255,0.35) 0%, rgba(120,80,240,0.18) 40%, transparent 70%)",
          filter: "blur(50px)" }} />
      {/* Right glow */}
      <motion.div className="absolute pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: 700, height: 700, top: "5%", right: "-10%",
          background: isDark
            ? "radial-gradient(ellipse, rgba(100,65,230,0.35) 0%, rgba(70,40,180,0.15) 45%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(130,90,255,0.22) 0%, transparent 65%)",
          filter: "blur(70px)" }} />
      {/* Left glow */}
      <motion.div className="absolute pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ width: 600, height: 500, top: "30%", left: "-8%",
          background: isDark
            ? "radial-gradient(ellipse, rgba(70,40,190,0.3) 0%, transparent 65%)"
            : "radial-gradient(ellipse, rgba(110,70,230,0.15) 0%, transparent 65%)",
          filter: "blur(60px)" }} />
      {/* Bottom accent */}
      <div className="absolute pointer-events-none"
        style={{ width: 800, height: 300, bottom: 60, left: "50%", transform: "translateX(-50%)",
          background: isDark
            ? "radial-gradient(ellipse, rgba(80,45,200,0.22) 0%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(120,80,240,0.12) 0%, transparent 70%)",
          filter: "blur(40px)" }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "rgba(160,154,255,0.06)" : "rgba(90,60,200,0.07)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(160,154,255,0.06)" : "rgba(90,60,200,0.07)"} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }} />
      {/* Vignette bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${isDark ? "#06040f" : "#eeeaff"}ee)` }} />

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
                    transition={{ duration: 0.75, delay: 0.25 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                    className="font-bold leading-[0.93] tracking-[-0.04em]"
                    style={{ fontSize: "clamp(50px,6vw,88px)", color: textColor }}>
                    {i === heroLines.length - 1 ? (
                      <>{line}<span style={{ color: "#7C5CFF" }}>.</span></>
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
                whileHover={{ scale: 1.03, boxShadow: "0 8px 36px rgba(124,92,255,0.55)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-[14px] font-semibold cursor-pointer"
                style={{ background: "linear-gradient(135deg, #7C5CFF 0%, #5b8aff 100%)", boxShadow: "0 4px 28px rgba(124,92,255,0.4)", transition: "box-shadow 0.2s" }}>
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
              {["AXIVORE", "AI AUTOMATION", "MÜNCHEN & STUTTGART", "KI AGENTUR", "AXIVORE"].map((word, j) => (
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
function MetricCard({ m, i, isDark }: {
  m: { value: string; suffix: string; label: string; context: string };
  i: number;
  isDark: boolean;
}) {
  const numVal = parseInt(m.value) || 0;
  const { count, ref } = useCountUp(numVal, 1800);
  const inView = useInView(ref, { once: true });
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const cardBg = isDark ? "rgba(255,255,255,0.022)" : "rgba(0,0,0,0.025)";
  const cardBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
      className="rounded-2xl p-6 flex flex-col gap-1"
      style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
      <div className="font-bold tracking-tight leading-none mb-2" style={{ fontSize: "clamp(36px,4vw,54px)", color: textColor }}>
        {numVal > 0 && inView ? count : m.value}{m.suffix}
      </div>
      <div className="text-[13px] font-medium" style={{ color: textColor }}>{m.label}</div>
      <div className="text-[11.5px]" style={{ color: mutedColor }}>{m.context}</div>
    </motion.div>
  );
}

function Results() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <section id="results" className="py-[100px]" style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10.5px] tracking-[0.22em] uppercase mb-4" style={{ color: "#A09AFF" }}>
            {t.labels.results}
          </p>
          <h2 className="font-bold tracking-[-0.03em] leading-[1.05]" style={{ fontSize: "clamp(32px,4vw,52px)", color: textColor }}>
            {t.results.headline}
          </h2>
          <p className="text-[15px] mt-4 max-w-md mx-auto" style={{ color: mutedColor }}>
            {t.results.subheadline}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.results.metrics.map((m, i) => (
            <MetricCard key={i} m={m} i={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────
function Services() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const cardBg = isDark ? "rgba(255,255,255,0.022)" : "rgba(0,0,0,0.025)";
  const cardBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const accentCardBg = isDark ? "rgba(124,92,255,0.06)" : "rgba(124,92,255,0.04)";
  const accentCardBorder = "rgba(124,92,255,0.18)";

  return (
    <section id="services" className="py-[100px]" style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-[10.5px] tracking-[0.22em] uppercase mb-3" style={{ color: "#A09AFF" }}>
              {t.labels.services}
            </p>
            <h2 className="font-bold tracking-[-0.03em] leading-[1.05]" style={{ fontSize: "clamp(32px,4vw,52px)", color: textColor }}>
              {t.services.headline}<span style={{ color: "#7C5CFF" }}>.</span>
            </h2>
            <p className="text-[14px] mt-2 max-w-sm" style={{ color: mutedColor }}>{t.services.subheadline}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.services.items.map((svc, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300"
              style={{ background: i === 0 ? accentCardBg : cardBg, border: `1px solid ${i === 0 ? accentCardBorder : cardBorder}`, minHeight: "220px" }}>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium mb-5"
                  style={{ background: "rgba(124,92,255,0.1)", color: "#A09AFF", border: "1px solid rgba(124,92,255,0.2)" }}>
                  {svc.tag}
                </div>
                <h3 className="text-[19px] font-bold mb-2.5 tracking-tight" style={{ color: textColor }}>{svc.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: mutedColor }}>{svc.description}</p>
              </div>
              <div className="flex items-center justify-between mt-6 pt-5"
                style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"}` }}>
                <span className="text-[12px] font-medium" style={{ color: "#A09AFF" }}>{svc.outcome}</span>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(124,92,255,0.08)", border: "1px solid rgba(124,92,255,0.15)" }}>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="#A09AFF" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
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
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const cardBg = isDark ? "rgba(255,255,255,0.022)" : "rgba(0,0,0,0.025)";
  const cardBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const sc = statusColors[product.status] ?? { bg: "rgba(255,255,255,0.05)", color: mutedColor, border: cardBorder };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${product.gradient.includes("violet") ? "#7C5CFF" : "#5b8aff"}, ${product.gradient.includes("indigo") ? "#5b8aff" : "#A09AFF"})` }} />
      <div className="p-7 flex flex-col flex-1 gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap mb-1">
              <h3 className="text-[18px] font-bold tracking-tight" style={{ color: textColor }}>{product.name}</h3>
              <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border"
                style={{ background: sc.bg, color: sc.color, borderColor: sc.border }}>{product.status}</span>
            </div>
            <p className="text-[12.5px]" style={{ color: mutedColor }}>{product.tagline}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[22px] font-bold" style={{ color: "#A09AFF" }}>{product.metric.value}</div>
            <div className="text-[10px] max-w-[80px] leading-tight" style={{ color: mutedColor }}>{product.metric.label}</div>
          </div>
        </div>
        <div className="h-px" style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }} />
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(251,191,36,0.15)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#fbbf24" }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#fbbf24" }}>{t.labels.problem}</span>
          </div>
          <p className="text-[12.5px] leading-[1.65] pl-5" style={{ color: mutedColor }}>{product.problem}</p>
        </div>
        <div className="pl-2">
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path d="M5 0v12M1 9l4 4 4-4" stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.15)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#22c55e" }}>{t.labels.outcome}</span>
          </div>
          <p className="text-[12.5px] leading-[1.65] pl-5" style={{ color: textColor }}>{product.outcome}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {product.tags.map((tag, j) => (
            <span key={j} className="text-[11px] px-2.5 py-0.5 rounded-full"
              style={{ color: mutedColor, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", border: `1px solid ${cardBorder}` }}>
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
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <section id="portfolio" className="py-[100px]" style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10.5px] tracking-[0.22em] uppercase mb-4" style={{ color: "#A09AFF" }}>
            {t.labels.portfolio}
          </p>
          <h2 className="font-bold tracking-[-0.03em] leading-[1.05]" style={{ fontSize: "clamp(32px,4vw,52px)", color: textColor }}>
            {t.portfolio.headline}<span style={{ color: "#7C5CFF" }}>.</span>
          </h2>
          <p className="text-[15px] mt-4 max-w-md mx-auto" style={{ color: mutedColor }}>
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
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[100px]" style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[10.5px] tracking-[0.22em] uppercase mb-4" style={{ color: "#A09AFF" }}>
            {t.labels.faq}
          </p>
          <h2 className="font-bold tracking-[-0.03em] leading-[1.05]" style={{ fontSize: "clamp(32px,4vw,52px)", color: textColor }}>
            {t.faq.headline}<span style={{ color: "#7C5CFF" }}>?</span>
          </h2>
        </div>
        <div className="max-w-[780px] mx-auto space-y-2">
          {t.faq.items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl overflow-hidden transition-colors duration-200"
              style={{
                background: openIdx === i
                  ? isDark ? "rgba(124,92,255,0.06)" : "rgba(124,92,255,0.04)"
                  : isDark ? "rgba(255,255,255,0.022)" : "rgba(0,0,0,0.025)",
                border: `1px solid ${openIdx === i ? "rgba(124,92,255,0.2)" : borderColor}`,
              }}>
              <button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                <span className="text-[14px] font-medium" style={{ color: openIdx === i ? textColor : mutedColor }}>
                  {item.question}
                </span>
                <motion.div animate={{ rotate: openIdx === i ? 45 : 0 }} transition={{ duration: 0.22 }}
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: openIdx === i ? "rgba(124,92,255,0.15)" : "transparent",
                    border: `1px solid ${openIdx === i ? "rgba(124,92,255,0.3)" : borderColor}`,
                  }}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke={openIdx === i ? "#A09AFF" : mutedColor} strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}>
                    <div className="px-6 pb-5">
                      <p className="text-[13px] leading-[1.72]" style={{ color: mutedColor }}>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.35)" : "rgba(10,10,15,0.4)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const cardBg = isDark ? "rgba(255,255,255,0.022)" : "rgba(0,0,0,0.025)";
  const cardBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0px", "-420px"]);

  return (
    <section id="process" ref={targetRef} className="relative h-[220vh]" style={{ borderTop: `1px solid ${borderColor}` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden" style={{ background: bg }}>
        <div className="max-w-[1320px] mx-auto px-6 w-full mb-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10.5px] tracking-[0.22em] uppercase mb-3" style={{ color: "#A09AFF" }}>
                {t.labels.process}
              </p>
              <h2 className="font-bold tracking-[-0.03em] leading-[1.05]"
                style={{ fontSize: "clamp(32px,4vw,52px)", color: textColor }}>
                {t.process.headline}<span style={{ color: "#7C5CFF" }}>.</span>
              </h2>
            </div>
            <p className="text-[12px] mb-1.5" style={{ color: mutedColor }}>{t.process.subheadline}</p>
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.div style={{ x }} className="flex gap-5 pl-[max(24px,calc((100vw-1320px)/2+24px))] pr-24">
            {t.process.steps.map((step, i) => (
              <div key={i} className="flex-shrink-0 w-[300px] rounded-2xl p-7 flex flex-col justify-between"
                style={{ background: cardBg, border: `1px solid ${cardBorder}`, height: "260px" }}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.14em]" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)" }}>{step.number}</span>
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(124,92,255,0.08)", border: "1px solid rgba(124,92,255,0.12)" }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#A09AFF" }} />
                  </div>
                </div>
                <div>
                  <h3 className="text-[20px] font-bold mb-2.5 tracking-tight" style={{ color: textColor }}>{step.title}</h3>
                  <p className="text-[12.5px] leading-[1.65]" style={{ color: mutedColor }}>{step.description}</p>
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
function Testimonials() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const cardBg = isDark ? "rgba(255,255,255,0.022)" : "rgba(0,0,0,0.025)";
  const cardBorder = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  return (
    <section id="testimonials" className="py-[100px]" style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-[1320px] mx-auto px-6">
        <p className="text-[10.5px] tracking-[0.22em] uppercase text-center mb-3" style={{ color: "#A09AFF" }}>
          {t.labels.testimonials}
        </p>
        <h2 className="text-center font-bold tracking-[-0.03em] mb-14" style={{ fontSize: "clamp(28px,3.5vw,44px)", color: textColor }}>
          {t.testimonials.headline}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {t.testimonials.items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.48, delay: i * 0.09 }}
              className="rounded-2xl p-6 flex flex-col"
              style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
              <div className="text-[32px] font-serif leading-none mb-3" style={{ color: "#A09AFF" }}>"</div>
              <p className="text-[13.5px] leading-[1.7] flex-1 mb-6" style={{ color: mutedColor }}>
                {item.quote}
              </p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${cardBorder}` }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: "rgba(124,92,255,0.12)", color: "#A09AFF" }}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium" style={{ color: textColor }}>{item.name}</div>
                    <div className="text-[10.5px]" style={{ color: mutedColor }}>{item.role}</div>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full text-[10px] font-medium"
                  style={{ background: "rgba(124,92,255,0.08)", color: "#A09AFF", border: "1px solid rgba(124,92,255,0.15)" }}>
                  {item.result}
                </div>
              </div>
            </motion.div>
          ))}
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
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.38)" : "rgba(10,10,15,0.42)";
  const borderColor = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";

  return (
    <section className="py-[140px]" style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-[1320px] mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-[10.5px] tracking-[0.22em] uppercase mb-10" style={{ color: "#A09AFF" }}>
            {t.labels.cta}
          </p>
          <h2 className="font-bold tracking-[-0.035em] leading-[0.95] mb-8"
            style={{ fontSize: "clamp(44px,6.5vw,90px)", color: textColor }}>
            {t.cta.headline.replace(/[?!.]$/, "")}<span style={{ color: "#7C5CFF" }}>?</span>
          </h2>
          <p className="text-[15px] mb-12 max-w-[420px] mx-auto leading-[1.72]" style={{ color: mutedColor }}>
            {t.cta.subheadline}
          </p>
          <motion.a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white text-[14px] font-semibold cursor-pointer"
            style={{ background: "linear-gradient(135deg, #7C5CFF, #5b8aff)", boxShadow: "0 4px 28px rgba(124,92,255,0.4)" }}>
            {t.cta.button}
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
          </motion.a>
          <p className="text-[11px] mt-5" style={{ color: isDark ? "rgba(255,255,255,0.22)" : "rgba(0,0,0,0.25)" }}>
            {t.cta.subtext}
          </p>
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
