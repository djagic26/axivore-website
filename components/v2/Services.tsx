"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

const SVC_ACCENTS = [
  { color: "#C97C3C", rgb: "201,124,60" },
  { color: "#D9A54E", rgb: "217,165,78" },
  { color: "#B5502E", rgb: "181,80,46" },
  { color: "#22d3ee", rgb: "34,211,238" },
];

const SVC_ICONS = [
  <svg key="0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"/><path d="M9 9l2 2 4-4"/></svg>,
  <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
  <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round"><path d="M4 4v5h5M20 20v-5h-5"/><path d="M4 9a8 8 0 0114.93-2M20 15a8 8 0 01-14.93 2"/></svg>,
  <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/><path d="M8 10h8M8 14h5"/></svg>,
];

export function Services() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="services" className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ background: C.bgB }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.07) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(201,124,60,0.15) 50%,transparent 95%)" }} />

      <div className="max-w-[1320px] mx-auto px-6">
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 overflow-hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }}>
            <span className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
              style={{ fontSize: "clamp(70px,12vw,180px)",
                color: isDark ? "rgba(255,255,255,0.1)" : "rgba(201,124,60,0.1)" }}>
              SERVICES
            </span>
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[10.5px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#C97C3C" }}>
              {t.labels.services}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
              {t.services.headline}<span style={{ color: "#C97C3C" }}>.</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] leading-[1.75] max-w-xs relative" style={{ color: C.muted, zIndex: 1 }}>
            {t.services.subheadline}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 0, 2, 3].map((idx, i) => {
            const svc = t.services.items[idx];
            if (!svc) return null;
            const acc = SVC_ACCENTS[i % 4];
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
                className="group rounded-[22px] flex flex-col relative overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  background: isDark
                    ? `linear-gradient(145deg, rgba(${acc.rgb},0.26) 0%, rgba(18, 13, 7,0.94) 60%)`
                    : "rgba(255,255,255,0.92)",
                  border: `1px solid rgba(${acc.rgb},${isDark ? "0.46" : "0.2"})`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? `0 8px 50px rgba(${acc.rgb},0.22)` : `0 4px 32px rgba(${acc.rgb},0.09)`,
                  minHeight: "280px",
                }}>
                <div className="h-[3px] flex-shrink-0"
                  style={{ background: `linear-gradient(90deg, transparent 0%, ${acc.color} 25%, ${acc.color} 75%, transparent 100%)` }} />
                <div className="absolute top-2 right-4 font-black select-none pointer-events-none leading-none"
                  style={{ fontSize: 108, color: `rgba(${acc.rgb}, ${isDark ? "0.26" : "0.09"})` }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="absolute top-0 right-0 w-52 h-52 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse, rgba(${acc.rgb},${isDark ? "0.42" : "0.14"}) 0%, transparent 65%)`,
                    filter: "blur(28px)",
                    transform: "translate(25%,-25%)",
                  }} />
                <div className="p-9 flex flex-col justify-between flex-1 relative">
                  <div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-7"
                      style={{
                        background: `rgba(${acc.rgb},0.13)`,
                        border: `1px solid rgba(${acc.rgb},0.32)`,
                        color: acc.color,
                        boxShadow: isDark ? `0 4px 20px rgba(${acc.rgb},0.52)` : `0 4px 18px rgba(${acc.rgb},0.16)`,
                      }}>
                      {SVC_ICONS[i]}
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9.5px] font-semibold tracking-wide mb-4"
                      style={{ background: `rgba(${acc.rgb},0.1)`, color: acc.color, border: `1px solid rgba(${acc.rgb},0.28)` }}>
                      {svc.tag}
                    </div>
                    <h3 className="text-[21px] font-bold mb-3 tracking-tight" style={{ color: C.text }}>{svc.title}</h3>
                    <p className="text-[13.5px] leading-[1.7]" style={{ color: C.muted }}>{svc.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-8 pt-6"
                    style={{ borderTop: `1px solid rgba(${acc.rgb},${isDark ? "0.15" : "0.12"})` }}>
                    <span className="text-[12px] font-semibold" style={{ color: acc.color }}>{svc.outcome}</span>
                    <motion.div whileHover={{ x: 3, y: -3 }}
                      className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: `rgba(${acc.rgb},0.12)`, border: `1px solid rgba(${acc.rgb},0.3)` }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke={acc.color} strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
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
