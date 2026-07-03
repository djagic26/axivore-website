"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { ScrollProgress } from "./ScrollProgress";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

type PageTitleKey = "services" | "branchen" | "portfolio" | "pricing" | "about" | "contact";

type PageShellProps = {
  /** i18n nav key used as the page h1 (translated per active language). */
  titleKey: PageTitleKey;
  /** Optional translated subtitle rendered under the h1. */
  subtitle?: string;
  /**
   * "visible" renders the compact page hero with the h1.
   * "seo-only" renders the h1 screen-reader-only — for pages whose first
   * section already opens with a strong headline (avoids double titles).
   */
  hero?: "visible" | "seo-only";
  children: React.ReactNode;
};

/**
 * Shared shell for v2 sub-pages (/preise, /ueber-uns, /projekte, /kontakt).
 * Renders Nav + page h1 (visible hero or sr-only) + sections + Footer,
 * matching the homepage design language.
 */
export function PageShell({ titleKey, subtitle, hero = "visible", children }: PageShellProps) {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.5)" : "rgba(10,10,15,0.55)";

  if (hero === "seo-only") {
    return (
      <main style={{ background: bg }}>
        <ScrollProgress />
        <Nav />
        <h1 className="sr-only">{t.nav[titleKey]}</h1>
        <div className="pt-16">{children}</div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ background: bg }}>
      <ScrollProgress />
      <Nav />
      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 px-6 overflow-hidden" style={{ background: bg }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,92,255,0.12), transparent)"
              : "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,92,255,0.07), transparent)",
          }}
        />
        <div className="relative max-w-[1320px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            className="text-[10.5px] tracking-[0.28em] uppercase mb-4 font-medium"
            style={{ color: "#7C5CFF" }}
          >
            Axivore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-[40px] md:text-[56px] leading-[1.05] font-medium tracking-[-0.04em]"
            style={{ color: textColor }}
          >
            {t.nav[titleKey]}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-5 text-[15px] md:text-[16px] leading-[1.7] max-w-[560px]"
              style={{ color: mutedColor }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
      {children}
      <Footer />
    </main>
  );
}
