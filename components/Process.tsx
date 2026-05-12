"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 animate-label-glow">
            {t.labels.process}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.process.headline}
          </h2>
          <p className="text-white/40 text-lg">{t.process.subheadline}</p>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-[27px] left-[10%] right-[10%] h-px overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={inView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {t.process.steps.map((step, i) => (
              <ProcessStep key={i} step={step} index={i} globalInView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({
  step,
  index,
  globalInView,
}: {
  step: { number: string; title: string; description: string };
  index: number;
  globalInView: boolean;
}) {
  return (
    <motion.div
      className="relative group text-center lg:text-left"
      initial={{ opacity: 0, y: 28 }}
      animate={globalInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.2 + index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative inline-flex lg:flex items-center justify-center lg:justify-start mb-6">
        <motion.div
          className="w-14 h-14 mx-auto lg:mx-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden"
          whileHover={{ scale: 1.08, borderColor: "rgba(139,92,246,0.4)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <span className="relative text-sm font-bold text-white/30 group-hover:text-violet-400 transition-colors">
            {step.number}
          </span>
        </motion.div>
      </div>
      <h3 className="text-white font-semibold text-lg mb-3 tracking-tight">{step.title}</h3>
      <p className="text-white/35 text-sm leading-relaxed">{step.description}</p>
      {index < 4 && (
        <div className="lg:hidden flex justify-center mt-6">
          <motion.div
            className="w-px bg-gradient-to-b from-white/10 to-transparent"
            initial={{ height: 0 }}
            animate={globalInView ? { height: 32 } : {}}
            transition={{ delay: 0.4 + index * 0.12, duration: 0.4 }}
          />
        </div>
      )}
    </motion.div>
  );
}
