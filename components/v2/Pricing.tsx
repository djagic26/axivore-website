"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

const CALENDLY = "https://calendly.com/hello-axivore/kostenloses-gesprach";

const OFFER_ACCENTS = [
  { color: "#D9A54E", rgb: "217,165,78", grad: "linear-gradient(135deg, #D9A54E, #f0c98a)" },
  { color: "#C97C3C", rgb: "201,124,60", grad: "linear-gradient(135deg, #C97C3C, #E0A360)" },
  { color: "#B5502E", rgb: "181,80,46", grad: "linear-gradient(135deg, #B5502E, #e0a074)" },
];

export function Pricing() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="pricing" className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ background: C.bgD }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.07) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(201,124,60,0.15) 50%,transparent 95%)" }} />

      <div className="max-w-[1320px] mx-auto px-6">
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 overflow-hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }}>
            <span aria-hidden="true" className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
              style={{ fontSize: "clamp(70px,12vw,180px)",
                color: isDark ? "rgba(255,255,255,0.1)" : "rgba(201,124,60,0.1)" }}>
              PRICING
            </span>
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[10.5px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#C97C3C" }}>
              {t.labels.pricing}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(34px,4.5vw,58px)", color: C.text }}>
              {t.pricing.headline}<span style={{ color: "#C97C3C" }}>.</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[14px] leading-[1.75] max-w-xs relative" style={{ color: C.muted, zIndex: 1 }}>
            {t.pricing.subheadline}
          </motion.p>
        </div>

        {/* Price orientation — "ab" cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {t.pricing.offers.map((offer, i) => {
            const acc = OFFER_ACCENTS[i % 3];
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
                className="rounded-[22px] relative overflow-hidden transition-all duration-300"
                style={{
                  background: isDark
                    ? `linear-gradient(145deg, rgba(${acc.rgb},0.2) 0%, rgba(18, 12, 7,0.97) 65%)`
                    : "rgba(255,255,255,0.94)",
                  border: `1px solid rgba(${acc.rgb},${isDark ? "0.42" : "0.2"})`,
                  backdropFilter: isDark ? "none" : "blur(20px)",
                  boxShadow: isDark ? `0 6px 44px rgba(${acc.rgb},0.2)` : `0 4px 32px rgba(${acc.rgb},0.09)`,
                }}>
                <div className="h-[3px]"
                  style={{ background: `linear-gradient(90deg, transparent 0%, ${acc.color} 25%, ${acc.color} 75%, transparent 100%)` }} />
                <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse, rgba(${acc.rgb},${isDark ? "0.38" : "0.13"}) 0%, transparent 65%)`,
                    filter: "blur(28px)", transform: "translate(25%,-25%)" }} />
                <div className="p-8 relative">
                  <div className="text-[12px] font-bold uppercase tracking-[0.14em] mb-4" style={{ color: acc.color }}>
                    {offer.name}
                  </div>
                  <div className="font-black tracking-[-0.03em] leading-none mb-4"
                    style={{ fontSize: 34, background: acc.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {offer.from}
                  </div>
                  <p className="text-[13px] leading-[1.7]" style={{ color: C.muted }}>{offer.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* How your price is made — 3 steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {t.pricing.steps.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-[18px] p-6 flex gap-4 relative overflow-hidden"
              style={{
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)",
                border: `1px solid ${isDark ? "rgba(201,124,60,0.2)" : "rgba(201,124,60,0.15)"}`,
              }}>
              <div className="font-black text-[26px] leading-none flex-shrink-0 mt-0.5"
                style={{ color: "rgba(201,124,60,0.55)" }}>
                {i + 1}
              </div>
              <div>
                <div className="text-[14px] font-bold mb-1.5" style={{ color: C.text }}>{step.title}</div>
                <div className="text-[12.5px] leading-[1.65]" style={{ color: C.muted }}>{step.text}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 30-day guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-[24px] relative overflow-hidden"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(34,197,94,0.16) 0%, rgba(18, 12, 7,0.97) 55%, rgba(201,124,60,0.14) 100%)"
              : "linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(248,255,250,0.95) 55%, rgba(201,124,60,0.07) 100%)",
            border: `1px solid rgba(34,197,94,${isDark ? "0.38" : "0.28"})`,
            boxShadow: isDark ? "0 10px 60px rgba(34,197,94,0.18)" : "0 10px 56px rgba(34,197,94,0.14)",
          }}>
          <div className="h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #22c55e, transparent)" }} />
          <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{ background: `radial-gradient(ellipse, rgba(34,197,94,${isDark ? "0.22" : "0.18"}) 0%, transparent 65%)`,
              filter: "blur(34px)", transform: "translate(30%,-30%)" }} />

          <div className="p-9 md:p-11 flex flex-col md:flex-row md:items-center gap-8 relative">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)",
                boxShadow: "0 6px 28px rgba(34,197,94,0.3)" }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="inline-flex px-3 py-1 rounded-full text-[10px] font-black tracking-[0.16em] mb-3"
                style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.32)" }}>
                {t.pricing.guarantee.badge}
              </div>
              <div className="font-black tracking-[-0.03em] mb-2.5" style={{ fontSize: "clamp(22px,2.6vw,30px)", color: C.text }}>
                {t.pricing.guarantee.title}
              </div>
              <p className="text-[13.5px] leading-[1.75] max-w-2xl" style={{ color: C.muted }}>
                {t.pricing.guarantee.text}
              </p>
            </div>
            <motion.a href={CALENDLY} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 10px 50px rgba(188, 102, 40,0.6)" }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 flex items-center justify-center gap-2 px-7 py-4 rounded-full text-white text-[14px] font-semibold cursor-pointer"
              style={{ background: "linear-gradient(135deg, #C97C3C 0%, #C97C3C 40%, #d9a54e 100%)",
                boxShadow: "0 6px 36px rgba(201,124,60,0.5)", transition: "box-shadow 0.25s" }}>
              {t.pricing.cta}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <p className="text-[11px] leading-[1.6] mt-5 text-center" style={{ color: C.muted }}>
          {t.pricing.note}
        </p>
      </div>
    </section>
  );
}
