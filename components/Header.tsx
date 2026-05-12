"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { Language } from "@/lib/i18n";

const langMeta: Record<Language, { name: string; flag: string }> = {
  de: { name: "Deutsch", flag: "🇩🇪" },
  en: { name: "English", flag: "🇬🇧" },
  hr: { name: "Hrvatski", flag: "🇭🇷" },
  ro: { name: "Română", flag: "🇷🇴" },
  tr: { name: "Türkçe", flag: "🇹🇷" },
  it: { name: "Italiano", flag: "🇮🇹" },
};

function LanguageDropdown({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (l: Language) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const langs: Language[] = ["de", "en", "hr", "ro", "tr", "it"];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative hidden sm:block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
      >
        {/* Globe icon */}
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span>{langMeta[language].flag} {langMeta[language].name}</span>
        <motion.svg
          className="w-3.5 h-3.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-white/10 bg-[#0d0d15]/95 backdrop-blur-xl shadow-2xl shadow-black/60 overflow-hidden"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {langs.map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-150 hover:bg-white/5 ${
                  language === lang ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className="text-base">{langMeta[lang].flag}</span>
                  <span className="font-medium">{langMeta[lang].name}</span>
                </span>
                {language === lang && (
                  <svg className="w-3.5 h-3.5 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const langs: Language[] = ["de", "en", "hr", "ro", "tr", "it"];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { key: "services", href: "#services" },
    { key: "portfolio", href: "#portfolio" },
    { key: "process", href: "#process" },
    { key: "faq", href: "#faq" },
  ] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3.5 group">
          <svg width="32" height="32" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <circle cx="26" cy="26" r="24" stroke="#4A4866" strokeWidth="1"/>
            <line x1="26" y1="4" x2="26" y2="48" stroke="#A09AFF" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="4" y1="26" x2="48" y2="26" stroke="#A09AFF" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="8.5" y1="8.5" x2="43.5" y2="43.5" stroke="#7B72E8" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="43.5" y1="8.5" x2="8.5" y2="43.5" stroke="#7B72E8" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="26" cy="26" r="4.5" fill="#0C0C0F" stroke="#A09AFF" strokeWidth="1.5"/>
            <circle cx="26" cy="26" r="1.5" fill="#A09AFF"/>
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-medium text-[18px] tracking-[-0.04em]">Axivore</span>
            <span className="text-[#A09AFF] text-[7.5px] uppercase tracking-[0.22em]">Precision · Disruption · Direction</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
            >
              {t.nav[key as keyof typeof t.nav]}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageDropdown language={language} setLanguage={setLanguage} />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
          >
            {t.nav.cta}
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white text-base font-medium transition-colors"
            >
              {t.nav[key as keyof typeof t.nav]}
            </a>
          ))}

          {/* Mobile language picker */}
          <div className="pt-2 border-t border-white/10">
            <p className="text-white/20 text-xs uppercase tracking-widest mb-3">Sprache / Language</p>
            <div className="flex flex-col gap-1">
              {langs.map((lang) => (
                <button
                  key={lang}
                  onClick={() => { setLanguage(lang); setMobileOpen(false); }}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    language === lang
                      ? "bg-white/8 text-white"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-base">{langMeta[lang].flag}</span>
                  <span>{langMeta[lang].name}</span>
                  {language === lang && (
                    <svg className="w-3.5 h-3.5 text-violet-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex justify-center items-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-5 py-3 rounded-full mt-2"
          >
            {t.nav.cta}
          </a>
        </div>
      )}
    </header>
  );
}
