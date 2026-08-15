"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

const TESTI_ACCENTS = [
  { rgb: "201,124,60", avatar: "linear-gradient(135deg, #C97C3C, #E0A360)", border: "rgba(201,124,60,0.34)", result: "rgba(201,124,60,0.1)", resultColor: "#E0A360", resultBorder: "rgba(201,124,60,0.2)" },
  { rgb: "181,80,46", avatar: "linear-gradient(135deg, #B5502E, #e0a074)", border: "rgba(181,80,46,0.3)",  result: "rgba(181,80,46,0.08)", resultColor: "#B5502E", resultBorder: "rgba(181,80,46,0.18)" },
  { rgb: "217,165,78",  avatar: "linear-gradient(135deg, #D9A54E, #f0c98a)", border: "rgba(217,165,78,0.3)",  result: "rgba(217,165,78,0.08)", resultColor: "#D9A54E", resultBorder: "rgba(217,165,78,0.18)" },
];

export function Testimonials() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="testimonials" className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ background: C.bgD }}>
      {isDark && (
        <div className="absolute pointer-events-none inset-0"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(94, 65, 39,0.1) 0%, transparent 65%)" }} />
      )}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark ? "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.07) 50%, transparent 90%)" : "rgba(0,0,0,0.05)" }} />

      <div className="relative max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-20 relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none overflow-hidden select-none" style={{ zIndex: 0 }}>
            <span className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
              style={{ fontSize: "clamp(50px,10vw,160px)", color: isDark ? "rgba(255,255,255,0.1)" : "rgba(201,124,60,0.1)" }}>
              TESTIMONIALS
            </span>
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#C97C3C" }}>
              {t.labels.testimonials}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
              {t.testimonials.headline}
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.testimonials.items.map((item, i) => {
            const acc = TESTI_ACCENTS[i % 3];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay: i * 0.12 }}
                whileHover={{ y: -6, boxShadow: `0 28px 70px rgba(${acc.rgb},0.28)` }}
                className="rounded-[22px] p-8 flex flex-col relative overflow-hidden transition-all duration-300"
                style={{
                  background: isDark
                    ? `linear-gradient(145deg, rgba(${acc.rgb},0.14) 0%, rgba(18, 12, 7,0.97) 70%)`
                    : "rgba(255,255,255,0.88)",
                  border: `1px solid ${isDark ? acc.border : "rgba(201,124,60,0.15)"}`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? `0 6px 44px rgba(${acc.rgb},0.18)` : "0 4px 24px rgba(140, 94, 53,0.08)",
                }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${acc.rgb},0.85), transparent)` }} />
                <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse, rgba(${acc.rgb},${isDark ? "0.22" : "0.12"}) 0%, transparent 65%)`, filter: "blur(26px)", transform: "translate(30%,-30%)" }} />
                <div className="font-black leading-none mb-6 select-none relative"
                  style={{ fontSize: 72, lineHeight: 1,
                    background: `linear-gradient(135deg, ${acc.resultColor} 0%, rgba(${acc.rgb},0.35) 100%)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {'"'}
                </div>
                <p className="text-[14px] leading-[1.8] flex-1 mb-8 font-medium" style={{ color: C.muted }}>
                  {item.quote}
                </p>
                <div className="flex items-center justify-between pt-5"
                  style={{ borderTop: `1px solid ${C.divider}` }}>
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-black text-white shrink-0"
                      style={{ background: acc.avatar }}>
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold" style={{ color: C.text }}>{item.name}</div>
                      <div className="text-[11px] mt-0.5" style={{ color: isDark ? "rgba(224,163,96,0.55)" : "#C97C3C" }}>{item.role}</div>
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
