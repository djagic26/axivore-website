"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

const EMAIL = "hello@axivore.io";

export function KontaktInfo() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.5)" : "rgba(10,10,15,0.55)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
  const cardBorder = isDark ? "1px solid rgba(255,255,255,0.07)" : "1px solid rgba(0,0,0,0.07)";

  const cards = [
    { label: t.kontaktPage.emailLabel, value: EMAIL, href: `mailto:${EMAIL}` },
    { label: t.kontaktPage.locationLabel, value: t.kontaktPage.location },
    { label: t.kontaktPage.responseLabel, value: t.kontaktPage.response },
  ];

  return (
    <section className="relative px-6 pb-10 md:pb-14" style={{ background: bg }}>
      <div className="max-w-[1320px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-[15px] leading-[1.7] max-w-[560px] mb-10"
          style={{ color: mutedColor }}
        >
          {t.kontaktPage.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map(({ label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl p-6"
              style={{ background: cardBg, border: cardBorder }}
            >
              <p className="text-[9px] uppercase tracking-[0.24em] font-semibold mb-3" style={{ color: "#A09AFF" }}>
                {label}
              </p>
              {href ? (
                <a href={href} className="text-[15px] font-medium transition-opacity hover:opacity-70" style={{ color: textColor }}>
                  {value}
                </a>
              ) : (
                <p className="text-[15px] font-medium" style={{ color: textColor }}>{value}</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
