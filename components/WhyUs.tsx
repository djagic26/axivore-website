"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

function CheckIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-white/20 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function WhyUs() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-violet-600/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4 animate-label-glow">
            {t.labels.whyus}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
            {t.whyus.headline}
          </h2>
          <p className="text-white/40 text-lg">{t.whyus.subheadline}</p>
        </motion.div>

        {/* Mobile layout — 2 columns only (label + Axivore) */}
        <motion.div
          className="sm:hidden rounded-2xl border border-white/8 overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_1.4fr]">
            <div className="px-4 py-4 bg-white/[0.015] border-b border-white/8" />
            <div className="px-4 py-4 bg-violet-500/10 border-b border-violet-500/20 relative flex flex-col items-center justify-end gap-1">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500" />
              <div className="flex items-center gap-2 mb-0.5">
                <motion.div
                  className="w-2 h-2 rounded-full bg-violet-400"
                  animate={{ boxShadow: ["0 0 0px 0px rgba(167,139,250,0)", "0 0 8px 3px rgba(167,139,250,0.7)", "0 0 0px 0px rgba(167,139,250,0)"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-white font-black text-sm tracking-tight">Axivore</span>
              </div>
              <span className="text-violet-400/60 text-[9px] font-bold uppercase tracking-[0.18em]">{t.labels.popular}</span>
            </div>
          </div>
          {/* Rows */}
          {t.whyus.rows.map((row, i) => (
            <motion.div
              key={i}
              className={`grid grid-cols-[1fr_1.4fr] ${i < t.whyus.rows.length - 1 ? "border-b border-white/[0.05]" : ""}`}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.38 + i * 0.07 }}
            >
              <div className="px-4 py-3.5 flex items-center">
                <span className="text-white/55 text-sm font-medium">{row.label}</span>
              </div>
              <div className="px-4 py-3.5 bg-violet-500/[0.07] flex items-center gap-2">
                <CheckIcon />
                <span className="text-white text-sm font-semibold leading-snug">{row.axivore}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop layout — full 4 columns */}
        <motion.div
          className="hidden sm:block overflow-x-auto -mx-2 px-2"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="min-w-[580px] rounded-2xl border border-white/8 overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-[1.8fr_1.5fr_1fr_1fr]">
              <div className="px-6 py-5 bg-white/[0.015] border-b border-white/8" />
              <div className="px-6 py-5 bg-violet-500/10 border-b border-violet-500/20 relative flex flex-col items-center justify-end gap-1">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-violet-500 to-indigo-500" />
                <div className="flex items-center gap-2 mb-0.5">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-violet-400"
                    animate={{ boxShadow: ["0 0 0px 0px rgba(167,139,250,0)", "0 0 8px 3px rgba(167,139,250,0.7)", "0 0 0px 0px rgba(167,139,250,0)"] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <span className="text-white font-black text-base tracking-tight">Axivore</span>
                </div>
                <span className="text-violet-400/60 text-[9px] font-bold uppercase tracking-[0.18em]">{t.labels.popular}</span>
              </div>
              <div className="px-4 py-5 bg-white/[0.015] border-b border-white/8 flex items-end justify-center">
                <span className="text-white/30 font-semibold text-sm text-center leading-tight">{t.whyus.columns.c1}</span>
              </div>
              <div className="px-4 py-5 bg-white/[0.015] border-b border-white/8 flex items-end justify-center">
                <span className="text-white/30 font-semibold text-sm text-center leading-tight">{t.whyus.columns.c2}</span>
              </div>
            </div>
            {/* Data rows */}
            {t.whyus.rows.map((row, i) => (
              <motion.div
                key={i}
                className={`grid grid-cols-[1.8fr_1.5fr_1fr_1fr] ${i < t.whyus.rows.length - 1 ? "border-b border-white/[0.05]" : ""}`}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.38 + i * 0.07 }}
              >
                <div className="px-6 py-4 flex items-center">
                  <span className="text-white/55 text-sm font-medium">{row.label}</span>
                </div>
                <div className="px-6 py-4 bg-violet-500/[0.07] flex items-center gap-2.5">
                  <CheckIcon />
                  <span className="text-white text-sm font-semibold leading-snug">{row.axivore}</span>
                </div>
                <div className="px-4 py-4 flex items-start gap-2 justify-center text-center">
                  <XIcon />
                  <span className="text-white/30 text-xs leading-snug">{row.c1}</span>
                </div>
                <div className="px-4 py-4 flex items-start gap-2 justify-center text-center">
                  <XIcon />
                  <span className="text-white/30 text-xs leading-snug">{row.c2}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
