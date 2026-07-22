"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { Language } from "@/lib/i18n";
import { AxivoreLogo } from "./AxivoreLogo";

const langMeta: Record<Language, { name: string; flag: string }> = {
  de: { name: "Deutsch", flag: "🇩🇪" },
  en: { name: "English", flag: "🇬🇧" },
  hr: { name: "Hrvatski", flag: "🇭🇷" },
  ro: { name: "Română", flag: "🇷🇴" },
  tr: { name: "Türkçe", flag: "🇹🇷" },
  it: { name: "Italiano", flag: "🇮🇹" },
};
const langs: Language[] = ["de", "en", "hr", "ro", "tr", "it"];

// German has no URL prefix; every other language keeps its /xx prefix on
// internal links so switching pages doesn't silently drop the visitor back
// into German chrome.
function localePath(locale: Language, path: string): string {
  if (locale === "de") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

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

export function Nav({ hideLanguageSwitcher = false }: { hideLanguageSwitcher?: boolean } = {}) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "rgba(255,255,255,0.9)" : "rgba(10,10,15,0.9)";
  const mutedColor = isDark ? "rgba(255,255,255,0.45)" : "rgba(10,10,15,0.45)";
  const borderColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";

  // Leistungen/Branchen aren't translated yet (German-only SEO content) —
  // keep those two unprefixed so visitors land on a consistently German
  // page instead of a Croatian/Romanian/etc. shell around German copy.
  const navLinks = [
    { key: "services", href: "/leistungen", label: t.nav.services },
    { key: "branchen", href: "/branchen", label: t.nav.branchen },
    { key: "portfolio", href: localePath(language, "/projekte"), label: t.nav.portfolio },
    { key: "pricing", href: localePath(language, "/preise"), label: t.nav.pricing },
    { key: "about", href: localePath(language, "/ueber-uns"), label: t.nav.about },
    { key: "contact", href: localePath(language, "/kontakt"), label: t.nav.contact },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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
        <Link href={localePath(language, "/")} className="flex items-center gap-3 group">
          <AxivoreLogo />
          <div className="flex flex-col leading-tight">
            <span className="font-medium text-[17px] tracking-[-0.04em]" style={{ color: textColor }}>Axivore</span>
            <span className="text-[7px] uppercase tracking-[0.22em]" style={{ color: "#A09AFF" }}>
              Precision · Disruption · Direction
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map(({ key, href, label }, i) => (
            <motion.div key={key}
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.05 }}
            >
              <Link href={href}
                className="text-[13px] font-medium transition-colors duration-200"
                style={{ color: isActive(href) ? textColor : mutedColor }}
                onMouseEnter={e => (e.currentTarget.style.color = textColor)}
                onMouseLeave={e => (e.currentTarget.style.color = isActive(href) ? textColor : mutedColor)}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {!hideLanguageSwitcher && <LangDropdown language={language} setLanguage={setLanguage} isDark={isDark} />}

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

          <motion.a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[13px] font-semibold shadow-lg relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #7C5CFF, #5b8aff)", boxShadow: "0 4px 20px rgba(124,92,255,0.3)" }}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)", width: "45%" }}
            />
            {t.nav.cta}
          </motion.a>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            style={{ color: mutedColor }}>
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden px-6 py-5 flex flex-col gap-4 border-t overflow-hidden"
            style={{ background: isDark ? "rgba(5,5,5,0.97)" : "rgba(255,255,255,0.97)", borderColor, backdropFilter: "blur(20px)" }}>
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                className="text-base font-medium transition-colors"
                style={{ color: isActive(href) ? "#A09AFF" : textColor }}>
                {label}
              </Link>
            ))}
            {!hideLanguageSwitcher && (
              <div className="flex flex-wrap gap-2 pt-1">
                {langs.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setMobileOpen(false); }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all"
                    style={{
                      color: language === lang ? "#fff" : mutedColor,
                      background: language === lang ? "rgba(124,92,255,0.25)" : isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                      border: language === lang ? "1px solid rgba(124,92,255,0.4)" : isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <span>{langMeta[lang].flag}</span>
                    <span>{langMeta[lang].name}</span>
                  </button>
                ))}
              </div>
            )}
            <a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
              target="_blank" rel="noopener noreferrer"
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
