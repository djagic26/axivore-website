"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

export function WhyUs() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="vergleich" className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ background: C.bgC }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.07) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(201,124,60,0.15) 50%,transparent 95%)" }} />

      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative mb-14 overflow-hidden text-center">
          <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center pointer-events-none select-none" style={{ zIndex: 0 }}>
            <span className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
              style={{ fontSize: "clamp(80px,14vw,200px)",
                color: isDark ? "rgba(255,255,255,0.1)" : "rgba(201,124,60,0.1)" }}>
              VS
            </span>
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[10.5px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#C97C3C" }}>
              {t.labels.whyus}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black tracking-[-0.04em] leading-[1.1] max-w-3xl mx-auto"
              style={{ fontSize: "clamp(28px,3.6vw,46px)", color: C.text }}>
              {t.whyus.headline}
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[14px] leading-[1.75] mt-4" style={{ color: C.muted }}>
              {t.whyus.subheadline}
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
          className="rounded-[24px] overflow-hidden relative"
          style={{
            background: isDark
              ? "linear-gradient(145deg, rgba(201,124,60,0.1) 0%, rgba(18, 12, 7,0.97) 70%)"
              : "rgba(255,255,255,0.9)",
            border: `1px solid rgba(201,124,60,${isDark ? "0.3" : "0.2"})`,
            backdropFilter: isDark ? "none" : "blur(20px)",
            boxShadow: isDark ? "0 8px 60px rgba(201,124,60,0.18)" : "0 8px 56px rgba(201,124,60,0.12)",
          }}>
          <div className="h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #C97C3C, transparent)" }} />
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(201,124,60,0.16) 0%, transparent 65%)", filter: "blur(32px)", transform: "translate(30%,-30%)" }} />

          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              {/* header */}
              <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] px-7 pt-7 pb-4">
                <div />
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 rounded-full text-[12px] font-black tracking-wide text-white"
                    style={{ background: "linear-gradient(135deg, #C97C3C, #C97C3C)", boxShadow: "0 4px 22px rgba(201,124,60,0.5)" }}>
                    AXIVORE
                  </span>
                </div>
                <div className="text-center text-[12px] font-semibold pt-1.5" style={{ color: C.muted }}>{t.whyus.columns.c1}</div>
                <div className="text-center text-[12px] font-semibold pt-1.5" style={{ color: C.muted }}>{t.whyus.columns.c2}</div>
              </div>
              {/* rows */}
              {t.whyus.rows.map((row, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                  className="grid grid-cols-[1.3fr_1fr_1fr_1fr] items-center px-7 py-4"
                  style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(201,124,60,0.09)"}` }}>
                  <div className="text-[13px] font-semibold pr-3" style={{ color: C.text }}>{row.label}</div>
                  <div className="text-center text-[13px] font-bold px-2 py-2 rounded-xl mx-1"
                    style={{
                      color: "#E0A360",
                      background: isDark ? "rgba(201,124,60,0.12)" : "rgba(201,124,60,0.07)",
                      border: "1px solid rgba(201,124,60,0.22)",
                    }}>
                    {row.axivore}
                  </div>
                  <div className="text-center text-[12.5px]" style={{ color: C.muted }}>{row.c1}</div>
                  <div className="text-center text-[12.5px]" style={{ color: C.muted }}>{row.c2}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
