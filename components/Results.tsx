"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

function useCounter(target: number, duration = 1400, active = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * target));
      if (t < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

const accents = [
  {
    gradient: "from-violet-400 to-purple-300",
    lightColor: "#5B21B6",
    barFrom: "#8b5cf6",
    barTo: "#a78bfa",
    glow: "rgba(139,92,246,0.35)",
    blob: "from-violet-500/25 to-purple-500/5",
    hoverBorder: "rgba(139,92,246,0.4)",
  },
  {
    gradient: "from-blue-400 to-cyan-300",
    lightColor: "#1D4ED8",
    barFrom: "#3b82f6",
    barTo: "#67e8f9",
    glow: "rgba(59,130,246,0.35)",
    blob: "from-blue-500/25 to-cyan-500/5",
    hoverBorder: "rgba(59,130,246,0.4)",
  },
  {
    gradient: "from-emerald-400 to-teal-300",
    lightColor: "#047857",
    barFrom: "#10b981",
    barTo: "#5eead4",
    glow: "rgba(16,185,129,0.35)",
    blob: "from-emerald-500/25 to-teal-500/5",
    hoverBorder: "rgba(16,185,129,0.4)",
  },
  {
    gradient: "from-orange-400 to-amber-300",
    lightColor: "#C2410C",
    barFrom: "#f97316",
    barTo: "#fbbf24",
    glow: "rgba(249,115,22,0.35)",
    blob: "from-orange-500/25 to-amber-500/5",
    hoverBorder: "rgba(249,115,22,0.4)",
  },
];

function MetricCard({
  metric,
  index,
  inView,
}: {
  metric: { value: string; suffix: string; label: string; context: string };
  index: number;
  inView: boolean;
}) {
  const num = parseInt(metric.value);
  const count = useCounter(num, 1200 + index * 150, inView);
  const a = accents[index];
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.div
      className="group relative flex flex-col p-8 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: isLight ? "#FFFFFF" : "linear-gradient(155deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.008) 100%)",
        border: isLight ? `1px solid rgba(91,79,217,0.15)` : "1px solid rgba(255,255,255,0.07)",
        boxShadow: isLight ? "0 4px 24px rgba(91,79,217,0.09), 0 1px 4px rgba(91,79,217,0.06)" : undefined,
      }}
      initial={{ opacity: 0, y: 52 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.08 + index * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{
        y: -10,
        boxShadow: `0 24px 60px -8px ${a.glow}`,
        borderColor: a.hoverBorder,
        transition: { duration: 0.22 },
      }}
    >
      {/* Ambient blob — always visible, intensifies on hover */}
      <div
        className={`absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br ${a.blob} blur-3xl pointer-events-none transition-opacity duration-500 opacity-70 group-hover:opacity-100`}
      />

      {/* Top sweep line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] rounded-t-2xl overflow-hidden">
        <div className="h-full w-full bg-white/5" />
        <motion.div
          className="absolute inset-y-0 left-0 h-full"
          style={{
            background: `linear-gradient(90deg, ${a.barFrom}, ${a.barTo})`,
          }}
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ duration: 1.2, delay: 0.35 + index * 0.14, ease: "easeOut" }}
        />
      </div>

      {/* Index badge */}
      <div className="relative z-10 mb-6">
        <span
          className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30"
          style={{ color: a.barFrom }}
        >
          0{index + 1}
        </span>
      </div>

      {/* Number */}
      <div className="relative z-10 flex items-baseline gap-1 mb-5">
        <motion.span
          className={`text-[4.5rem] leading-none font-black tracking-tight ${isLight ? "" : `bg-gradient-to-br ${a.gradient} bg-clip-text text-transparent`}`}
          style={isLight ? { color: a.lightColor } : {}}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.14, type: "spring", stiffness: 200 }}
        >
          {isNaN(num) ? metric.value : count}
        </motion.span>
        {metric.suffix && (
          <motion.span
            className={`text-2xl font-black pb-1 ${isLight ? "" : `bg-gradient-to-br ${a.gradient} bg-clip-text text-transparent`}`}
            style={isLight ? { color: a.lightColor } : {}}
            initial={{ opacity: 0, x: -6 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45 + index * 0.14 }}
          >
            {metric.suffix}
          </motion.span>
        )}
      </div>

      {/* Label */}
      <div className="relative z-10 text-white font-bold text-[15px] leading-snug mb-2.5">
        {metric.label}
      </div>

      {/* Context */}
      <div className="relative z-10 flex items-center gap-2 mt-auto">
        <div
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: `linear-gradient(${a.barFrom}, ${a.barTo})` }}
        />
        <span className="text-white/35 text-xs leading-relaxed">{metric.context}</span>
      </div>

      {/* Bottom glowing bar */}
      <div className="absolute bottom-0 left-8 right-8 h-px overflow-hidden">
        <motion.div
          className="h-full"
          style={{ background: `linear-gradient(90deg, transparent, ${a.barFrom}60, transparent)` }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.8 }}
        />
      </div>
    </motion.div>
  );
}

export default function Results() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 animate-label-glow">
            {t.labels.results}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            {t.results.headline}
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">{t.results.subheadline}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {t.results.metrics.map((metric, i) => (
            <MetricCard key={i} metric={metric} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
