"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";
import { useCountUp } from "./hooks";

const ACCENTS = [
  { color: "#E0A360", glow: "rgba(224,163,96,0.5)", bg: "rgba(224,163,96,0.07)", border: "rgba(224,163,96,0.18)" },
  { color: "#B5502E", glow: "rgba(181,80,46,0.4)",  bg: "rgba(181,80,46,0.07)",  border: "rgba(181,80,46,0.18)" },
  { color: "#D9A54E", glow: "rgba(217,165,78,0.4)",  bg: "rgba(217,165,78,0.07)",  border: "rgba(217,165,78,0.18)" },
  { color: "#22d3ee", glow: "rgba(34,211,238,0.35)", bg: "rgba(34,211,238,0.06)",  border: "rgba(34,211,238,0.15)" },
];

function MetricCard({ m, i, isDark }: {
  m: { value: string; suffix: string; label: string; context: string };
  i: number; isDark: boolean;
}) {
  const numVal = parseInt(m.value) || 0;
  const { count, ref } = useCountUp(numVal, 2000);
  const inView = useInView(ref, { once: true });
  const acc = ACCENTS[i % 4];
  const C = useColors(isDark);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ y: -6, boxShadow: isDark ? `0 24px 60px ${acc.glow}` : `0 16px 48px rgba(201,124,60,0.15)` }}
      className="rounded-[20px] p-4 sm:p-6 md:p-8 flex flex-col relative overflow-hidden cursor-default transition-all duration-300"
      style={{ background: isDark
        ? `linear-gradient(145deg, rgba(18, 13, 8,0.9), rgba(18, 12, 7,0.96))`
        : "rgba(255,255,255,0.85)",
        border: `1px solid ${isDark ? acc.border : "rgba(201,124,60,0.16)"}`,
        backdropFilter: isDark ? "none" : "blur(20px)",
        boxShadow: isDark ? "none" : "0 4px 24px rgba(140, 94, 53,0.08)" }}>
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent 5%, ${acc.color} 50%, transparent 95%)` }} />
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${acc.bg} 0%, transparent 70%)`, filter: "blur(20px)", transform: "translate(20%,-20%)" }} />
      <div className="font-black tracking-tight leading-none mb-3"
        style={{ fontSize: "clamp(40px,5vw,76px)", color: acc.color,
          textShadow: isDark ? `0 0 40px ${acc.glow}` : `0 2px 20px ${acc.glow}` }}>
        {numVal > 0 && inView ? count : m.value}{m.suffix}
      </div>
      <div className="text-[13px] sm:text-[15px] font-semibold mb-1.5 leading-snug" style={{ color: C.text, wordBreak: "break-word", overflowWrap: "break-word" }}>{m.label}</div>
      <div className="text-[11px] sm:text-[12px] leading-[1.6]" style={{ color: C.muted }}>{m.context}</div>
    </motion.div>
  );
}

export function Results() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="results" className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ background: C.bgA }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(201,124,60,0.3) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(201,124,60,0.2) 50%,transparent 95%)" }} />
      {isDark && (
        <div className="absolute pointer-events-none" style={{ width: 900, height: 600, top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(ellipse,rgba(94, 65, 39,0.14) 0%,transparent 65%)", filter: "blur(60px)" }} />
      )}
      <div className="relative max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-20 relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none overflow-hidden select-none"
            style={{ zIndex: 0 }}>
            <span aria-hidden="true" className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
              style={{ fontSize: "clamp(80px,14vw,200px)",
                color: isDark ? "rgba(255,255,255,0.1)" : "rgba(201,124,60,0.1)" }}>
              RESULTS
            </span>
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#C97C3C" }}>
              {t.labels.results}
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
              {t.results.headline}
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }} className="text-[15px] mt-5 max-w-sm mx-auto leading-[1.7]" style={{ color: C.muted }}>
              {t.results.subheadline}
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.results.metrics.map((m, i) => <MetricCard key={i} m={m} i={i} isDark={isDark} />)}
        </div>
      </div>
    </section>
  );
}
