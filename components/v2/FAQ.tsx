"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

export function FAQ() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ background: C.bgA }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark ? "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.07) 50%, transparent 90%)" : "rgba(0,0,0,0.05)" }} />

      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-[380px] shrink-0 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
              <span aria-hidden="true" className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
                style={{ fontSize: "clamp(80px,13vw,170px)", color: isDark ? "rgba(255,255,255,0.1)" : "rgba(201,124,60,0.1)" }}>
                FAQ
              </span>
            </div>
            <div className="relative" style={{ zIndex: 1 }}>
              <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#E0A360" }}>
                {t.labels.faq}
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-black tracking-[-0.04em] leading-[1.0] mb-6"
                style={{ fontSize: "clamp(36px,4vw,56px)", color: C.text }}>
                {t.faq.headline}<span style={{ color: "#C97C3C" }}>?</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.2 }} className="text-[14px] leading-[1.75]" style={{ color: C.muted }}>
                {t.faq.subtitle}
              </motion.p>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            {t.faq.items.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-[18px] overflow-hidden transition-all duration-250 relative"
                style={{
                  background: openIdx === i
                    ? isDark ? "rgba(201,124,60,0.08)" : "rgba(255,255,255,0.9)"
                    : isDark ? "rgba(255,255,255,0.048)" : "rgba(255,255,255,0.7)",
                  border: `1px solid ${openIdx === i ? "rgba(201,124,60,0.3)" : C.cardBorder}`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? "none" : "0 2px 12px rgba(140, 94, 53,0.06)",
                }}>
                {openIdx === i && (
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-full"
                    style={{ background: "linear-gradient(to bottom, #C97C3C, #B5502E)" }} />
                )}
                <button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                  <span className="text-[14px] font-semibold leading-[1.5]"
                    style={{ color: openIdx === i ? C.text : C.muted }}>
                    {item.question}
                  </span>
                  <motion.div animate={{ rotate: openIdx === i ? 45 : 0 }} transition={{ duration: 0.22 }}
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: openIdx === i ? "rgba(201,124,60,0.18)" : "transparent",
                      border: `1px solid ${openIdx === i ? "rgba(201,124,60,0.4)" : C.cardBorder}`,
                    }}>
                    <svg width="12" height="12" fill="none" viewBox="0 0 24 24"
                      stroke={openIdx === i ? "#E0A360" : isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)"} strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                {/* Answer stays mounted (not unmounted on collapse) so the text is
                    present in server-rendered HTML for crawlers/AI engines, matching
                    the FAQPage JSON-LD — only the visual height is animated. */}
                <motion.div initial={false}
                  animate={{ height: openIdx === i ? "auto" : 0, opacity: openIdx === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ overflow: "hidden" }}>
                  <div className="px-6 pb-6">
                    <p className="text-[13.5px] leading-[1.78]" style={{ color: C.muted }}>{item.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
