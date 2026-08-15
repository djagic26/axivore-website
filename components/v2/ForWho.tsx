"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

const FW_ACCENTS = [
  { color: "#C97C3C", rgb: "201,124,60" },
  { color: "#D9A54E", rgb: "217,165,78" },
  { color: "#B5502E", rgb: "181,80,46" },
  { color: "#22d3ee", rgb: "34,211,238" },
];

const FW_ICONS: Record<string, React.ReactNode> = {
  rocket: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
      <path d="M3 3v18h18"/><path d="M7 14l4-4 4 3 5-6"/>
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
};

export function ForWho() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="forwho" className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ background: C.bgA }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.07) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(201,124,60,0.15) 50%,transparent 95%)" }} />

      <div className="max-w-[1320px] mx-auto px-6">
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 overflow-hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
            <span className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
              style={{ fontSize: "clamp(70px,12vw,180px)",
                color: isDark ? "rgba(255,255,255,0.1)" : "rgba(201,124,60,0.1)" }}>
              FOKUS
            </span>
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[10.5px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#C97C3C" }}>
              {t.labels.forwho}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
              {t.forwho.headline.replace(/\?$/, "")}<span style={{ color: "#C97C3C" }}>?</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] leading-[1.75] max-w-xs relative" style={{ color: C.muted, zIndex: 1 }}>
            {t.forwho.subheadline}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.forwho.items.map((item, i) => {
            const acc = FW_ACCENTS[i % 4];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow: isDark
                    ? `0 28px 70px rgba(${acc.rgb},0.3), 0 0 0 1px rgba(${acc.rgb},0.3)`
                    : `0 20px 50px rgba(${acc.rgb},0.2), 0 0 0 1px rgba(${acc.rgb},0.2)`,
                }}
                className="group rounded-[22px] flex flex-col relative overflow-hidden transition-all duration-300"
                style={{
                  background: isDark
                    ? `linear-gradient(145deg, rgba(${acc.rgb},0.22) 0%, rgba(18, 12, 7,0.97) 65%)`
                    : "rgba(255,255,255,0.92)",
                  border: `1px solid rgba(${acc.rgb},${isDark ? "0.44" : "0.2"})`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? `0 6px 44px rgba(${acc.rgb},0.2)` : `0 4px 32px rgba(${acc.rgb},0.09)`,
                }}>
                <div className="h-[3px] flex-shrink-0"
                  style={{ background: `linear-gradient(90deg, transparent 0%, ${acc.color} 25%, ${acc.color} 75%, transparent 100%)` }} />
                <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse, rgba(${acc.rgb},${isDark ? "0.38" : "0.13"}) 0%, transparent 65%)`,
                    filter: "blur(28px)",
                    transform: "translate(25%,-25%)",
                  }} />
                <div className="p-8 relative">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `rgba(${acc.rgb},0.13)`,
                      border: `1px solid rgba(${acc.rgb},0.32)`,
                      color: acc.color,
                      boxShadow: isDark ? `0 4px 20px rgba(${acc.rgb},0.52)` : `0 4px 18px rgba(${acc.rgb},0.16)`,
                    }}>
                    {FW_ICONS[item.icon]}
                  </div>
                  <h3 className="text-[19px] font-bold mb-2.5 tracking-tight" style={{ color: C.text }}>{item.title}</h3>
                  <p className="text-[13.5px] leading-[1.7]" style={{ color: C.muted }}>{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
