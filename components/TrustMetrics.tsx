"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

function useCounter(target: number, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function parseMetricValue(value: string): { num: number; suffix: string; prefix: string } {
  const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { num: 0, suffix: value, prefix: "" };
  return { num: parseInt(match[2]), suffix: match[3], prefix: match[1] };
}

function AnimatedMetric({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { num, suffix, prefix } = parseMetricValue(value);
  const count = useCounter(num, 1600, inView);

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-2 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent group-hover:from-violet-300 group-hover:to-indigo-400 transition-all duration-500">
        {prefix}{count}{suffix}
      </div>
      <div className="text-white/40 text-sm font-medium">{label}</div>
    </motion.div>
  );
}

export default function TrustMetrics() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-center text-white/30 text-sm font-semibold uppercase tracking-widest mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t.results.headline}
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {t.results.metrics.map((metric, i) => (
            <AnimatedMetric key={i} value={metric.value} label={metric.label} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
