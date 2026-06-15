"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export function TrustStrip() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const items: string[] = t.hero.trust ?? [];

  if (items.length === 0) return null;

  return (
    <section className="relative" style={{ background: isDark ? "#030208" : "#f3efff" }}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 py-5 border-y"
          style={{ borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(124,92,255,0.14)" }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-center gap-2.5"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C5CFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span
                className="text-[12.5px] font-semibold tracking-tight"
                style={{ color: isDark ? "rgba(255,255,255,0.78)" : "rgba(13,11,26,0.72)" }}
              >
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
