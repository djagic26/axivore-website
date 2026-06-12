"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

const CARD_ACCENTS = [
  { color: "#5B8AFF", rgb: "91,138,255", grad: "linear-gradient(135deg, #5B8AFF, #93baff)" },
  { color: "#FF3DC5", rgb: "255,61,197", grad: "linear-gradient(135deg, #FF3DC5, #ff8de8)" },
  { color: "#22d3ee", rgb: "34,211,238", grad: "linear-gradient(135deg, #22d3ee, #67e8f9)" },
];

export function ProofBento() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

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

          {/* Founder statement — real, attributable */}
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
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0"
                  style={{ border: "2px solid rgba(124,92,255,0.45)", boxShadow: "0 2px 14px rgba(124,92,255,0.35)" }}>
                  <Image src="/founder.jpg" alt="Dino Jagić" width={40} height={40}
                    className="w-full h-full object-cover" style={{ objectPosition: "50% 8%" }} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold" style={{ color: C.text }}>Dino Jagić</div>
                  <div className="text-[11px]" style={{ color: "#7C5CFF" }}>{t.proofBento.founderRole}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3 honest commitment cards */}
          {t.proofBento.cards.map((card, i) => {
            const acc = CARD_ACCENTS[i];
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 + i * 0.05 }}
                className="rounded-[24px] p-9 flex flex-col justify-between relative overflow-hidden"
                style={{
                  background: isDark
                    ? `linear-gradient(145deg, rgba(${acc.rgb},0.18) 0%, rgba(6,3,14,0.97) 70%)`
                    : `linear-gradient(145deg, rgba(${acc.rgb},0.06) 0%, rgba(248,248,255,0.92) 100%)`,
                  border: `1px solid rgba(${acc.rgb},${isDark ? "0.32" : "0.24"})`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? `0 6px 44px rgba(${acc.rgb},0.2)` : `0 8px 56px rgba(${acc.rgb},0.16)`,
                  minHeight: "220px",
                }}>
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, transparent, rgba(${acc.rgb},0.8), transparent)` }} />
                <div className="absolute top-0 right-0 w-52 h-52 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse, rgba(${acc.rgb},${isDark ? "0.26" : "0.35"}) 0%, transparent 65%)`, filter: "blur(28px)", transform: "translate(35%,-35%)" }} />
                <div className="font-black tracking-[-0.04em] leading-none relative mb-6"
                  style={{ fontSize: 64, background: acc.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {card.big}
                </div>
                <div className="relative">
                  <div className="text-[15px] font-semibold mb-1" style={{ color: C.text }}>{card.title}</div>
                  <div className="text-[12px] leading-[1.6]" style={{ color: C.muted }}>{card.desc}</div>
                </div>
              </motion.div>
            );
          })}

          {/* Live & verifiable — pulse card */}
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
              <div className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#22c55e" }}>
                {t.proofBento.live.badge}
              </div>
            </div>
            <div className="relative">
              <div className="text-[14px] font-semibold mb-1" style={{ color: C.text }}>{t.proofBento.live.title}</div>
              <div className="text-[11px] leading-[1.6]" style={{ color: C.muted }}>{t.proofBento.live.desc}</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
