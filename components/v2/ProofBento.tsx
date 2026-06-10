"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";
import { useCountUp } from "./hooks";

export function ProofBento() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);
  const { count: c47, ref: r47 } = useCountUp(47, 1800);
  const { count: c24, ref: r24 } = useCountUp(24, 2000);

  const sectionBg = isDark
    ? "linear-gradient(180deg, #050410 0%, #040110 100%)"
    : "linear-gradient(180deg, #f2eeff 0%, #ece6ff 100%)";

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden" style={{ background: sectionBg }}>
      {isDark && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 90% 60% at 50% 50%, rgba(80,40,180,0.07) 0%, transparent 70%)" }} />
      )}
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="md:col-span-2 rounded-[24px] p-10 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: isDark
                ? "linear-gradient(145deg, rgba(124,92,255,0.16) 0%, rgba(6,3,14,0.97) 70%)"
                : "linear-gradient(145deg, rgba(124,92,255,0.06) 0%, rgba(245,240,255,0.92) 100%)",
              border: `1px solid rgba(124,92,255,${isDark ? "0.3" : "0.24"})`,
              backdropFilter: isDark ? "none" : "blur(20px)",
              boxShadow: isDark ? "0 6px 44px rgba(124,92,255,0.18)" : "0 8px 56px rgba(124,92,255,0.16)",
              minHeight: "220px",
            }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(124,92,255,0.8), transparent)" }} />
            <div className="absolute -top-8 -left-4 font-black select-none pointer-events-none leading-none"
              style={{ fontSize: 240, lineHeight: 1,
                background: isDark
                  ? "linear-gradient(135deg, rgba(124,92,255,0.12) 0%, transparent 55%)"
                  : "linear-gradient(135deg, rgba(124,92,255,0.16) 0%, transparent 55%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {'"'}
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
              style={{ background: `radial-gradient(ellipse, rgba(124,92,255,${isDark ? "0.18" : "0.3"}) 0%, transparent 65%)`, filter: "blur(36px)", transform: "translate(35%,-35%)" }} />
            <div className="relative">
              <p className="text-[17px] md:text-[20px] font-medium leading-[1.7] mb-8 max-w-xl"
                style={{ color: isDark ? "rgba(255,255,255,0.9)" : "#0a0a0f" }}>
                {t.proofBento.quoteStart}
                <span style={{ color: "#7C5CFF", fontWeight: 700 }}>{t.proofBento.quoteHighlight}</span>
                {t.proofBento.quoteEnd}
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-black text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #7C5CFF, #A09AFF)" }}>
                    MK
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold" style={{ color: C.text }}>M. Kovalenko</div>
                    <div className="text-[11px]" style={{ color: "#7C5CFF" }}>Geschäftsführer, E-Commerce</div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[0,1,2,3,4].map(s => (
                    <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }}
            className="rounded-[24px] p-9 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: isDark
                ? "linear-gradient(145deg, rgba(91,138,255,0.18) 0%, rgba(6,3,14,0.97) 70%)"
                : "linear-gradient(145deg, rgba(91,138,255,0.06) 0%, rgba(238,244,255,0.92) 100%)",
              border: `1px solid rgba(91,138,255,${isDark ? "0.32" : "0.24"})`,
              backdropFilter: isDark ? "none" : "blur(20px)",
              boxShadow: isDark ? "0 6px 44px rgba(91,138,255,0.2)" : "0 8px 56px rgba(91,138,255,0.16)",
              minHeight: "220px",
            }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(91,138,255,0.8), transparent)" }} />
            <div className="absolute top-0 right-0 w-52 h-52 pointer-events-none"
              style={{ background: `radial-gradient(ellipse, rgba(91,138,255,${isDark ? "0.26" : "0.35"}) 0%, transparent 65%)`, filter: "blur(28px)", transform: "translate(35%,-35%)" }} />
            <div ref={r47} className="font-black tracking-[-0.04em] leading-none relative"
              style={{ fontSize: 80, background: "linear-gradient(135deg, #5B8AFF, #93baff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {c47}+
            </div>
            <div className="relative">
              <div className="text-[15px] font-semibold mb-1" style={{ color: C.text }}>KI-Systeme deployed</div>
              <div className="text-[12px] leading-[1.6]" style={{ color: C.muted }}>Jedes live, skalierbar und messbar</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.15 }}
            className="rounded-[24px] p-8 relative overflow-hidden"
            style={{
              background: isDark
                ? "linear-gradient(145deg, rgba(255,61,197,0.16) 0%, rgba(6,3,14,0.97) 70%)"
                : "linear-gradient(145deg, rgba(255,61,197,0.05) 0%, rgba(255,245,252,0.92) 100%)",
              border: `1px solid rgba(255,61,197,${isDark ? "0.3" : "0.22"})`,
              backdropFilter: isDark ? "none" : "blur(20px)",
              boxShadow: isDark ? "0 6px 44px rgba(255,61,197,0.18)" : "0 8px 48px rgba(255,61,197,0.14)",
            }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,61,197,0.8), transparent)" }} />
            <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
              style={{ background: `radial-gradient(ellipse, rgba(255,61,197,${isDark ? "0.28" : "0.32"}) 0%, transparent 65%)`, filter: "blur(26px)", transform: "translate(30%,-30%)" }} />
            <div ref={r24} className="font-black tracking-[-0.04em] leading-none mb-3"
              style={{ fontSize: 56, background: "linear-gradient(135deg, #FF3DC5, #ff8de8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {"$"}{c24}M+
            </div>
            <div className="text-[13px] font-semibold mb-1" style={{ color: C.text }}>Beeinflusster Umsatz</div>
            <div className="text-[11px]" style={{ color: C.muted }}>über alle Kundenprojekte hinweg</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.2 }}
            className="rounded-[24px] p-8 relative overflow-hidden"
            style={{
              background: isDark
                ? "linear-gradient(145deg, rgba(34,211,238,0.14) 0%, rgba(6,3,14,0.97) 70%)"
                : "linear-gradient(145deg, rgba(34,211,238,0.05) 0%, rgba(240,252,255,0.92) 100%)",
              border: `1px solid rgba(34,211,238,${isDark ? "0.3" : "0.22"})`,
              backdropFilter: isDark ? "none" : "blur(20px)",
              boxShadow: isDark ? "0 6px 44px rgba(34,211,238,0.18)" : "0 8px 48px rgba(34,211,238,0.14)",
            }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.8), transparent)" }} />
            <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
              style={{ background: `radial-gradient(ellipse, rgba(34,211,238,${isDark ? "0.24" : "0.3"}) 0%, transparent 65%)`, filter: "blur(26px)", transform: "translate(30%,-30%)" }} />
            <div className="font-black tracking-[-0.04em] leading-none mb-3"
              style={{ fontSize: 56, background: "linear-gradient(135deg, #22d3ee, #67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              2–6×
            </div>
            <div className="text-[13px] font-semibold mb-1" style={{ color: C.text }}>Ø ROI für Kunden</div>
            <div className="text-[11px]" style={{ color: C.muted }}>innerhalb der ersten 90 Tage</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.25 }}
            className="rounded-[24px] p-8 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: isDark
                ? "linear-gradient(145deg, rgba(34,197,94,0.14) 0%, rgba(6,3,14,0.97) 70%)"
                : "linear-gradient(145deg, rgba(34,197,94,0.05) 0%, rgba(240,255,245,0.92) 100%)",
              border: `1px solid rgba(34,197,94,${isDark ? "0.3" : "0.22"})`,
              backdropFilter: isDark ? "none" : "blur(20px)",
              boxShadow: isDark ? "0 6px 44px rgba(34,197,94,0.18)" : "0 8px 48px rgba(34,197,94,0.14)",
            }}>
            <div className="absolute top-0 left-0 right-0 h-[3px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.8), transparent)" }} />
            <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
              style={{ background: `radial-gradient(ellipse, rgba(34,197,94,${isDark ? "0.24" : "0.3"}) 0%, transparent 65%)`, filter: "blur(26px)", transform: "translate(30%,-30%)" }} />
            <div className="flex items-center gap-3 mb-6 relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.32)" }}>
                <motion.div className="w-3.5 h-3.5 rounded-full"
                  animate={{ scale: [1, 1.55, 1], opacity: [1, 0.55, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ background: "#22c55e", boxShadow: "0 0 14px #22c55e" }} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#22c55e" }}>All Systems Active</div>
            </div>
            <div className="relative">
              <div className="text-[14px] font-semibold mb-1" style={{ color: C.text }}>99.9% Uptime</div>
              <div className="text-[11px] leading-[1.6]" style={{ color: C.muted }}>24/7 überwacht — 0 Ausfälle im letzten Jahr</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
