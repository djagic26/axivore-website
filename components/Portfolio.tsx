"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const statusColors: Record<string, string> = {
  "Live Beta":         "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  "Canlı Beta":        "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  "In Entwicklung":    "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "In Development":    "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "U razvoju":         "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "În Dezvoltare":     "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "Geliştirmede":      "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "In Sviluppo":       "bg-amber-500/10 text-amber-400 border-amber-500/25",
  "Demo verfügbar":    "bg-blue-500/10 text-blue-400 border-blue-500/25",
  "Demo Available":    "bg-blue-500/10 text-blue-400 border-blue-500/25",
  "Demo dostupan":     "bg-blue-500/10 text-blue-400 border-blue-500/25",
  "Demo Disponibil":   "bg-blue-500/10 text-blue-400 border-blue-500/25",
  "Demo Mevcut":       "bg-blue-500/10 text-blue-400 border-blue-500/25",
  "Demo Disponibile":  "bg-blue-500/10 text-blue-400 border-blue-500/25",
  Konzept:             "bg-white/5 text-white/40 border-white/10",
  Concept:             "bg-white/5 text-white/40 border-white/10",
  Koncept:             "bg-white/5 text-white/40 border-white/10",
  Konsept:             "bg-white/5 text-white/40 border-white/10",
};

function PortfolioCard({
  product,
  index,
}: {
  product: {
    name: string;
    tagline: string;
    problem: string;
    outcome: string;
    status: string;
    metric: { value: string; label: string };
    tags: string[];
    gradient: string;
  };
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { t } = useLanguage();

  return (
    <motion.div
      ref={ref}
      className="group relative rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden hover:border-white/15 transition-all duration-300"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Gradient top bar */}
      <motion.div
        className={`h-[2px] w-full bg-gradient-to-r ${product.gradient}`}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3 + (index % 2) * 0.15, duration: 0.7 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="p-5 sm:p-8">
        {/* Header: name + status + metric */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1.5 flex-wrap">
              <h3 className="text-white font-black text-xl tracking-tight">{product.name}</h3>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${
                  statusColors[product.status] ?? "bg-white/5 text-white/40 border-white/10"
                }`}
              >
                {product.status}
              </span>
            </div>
            <p className="text-white/35 text-sm font-medium">{product.tagline}</p>
          </div>
          <div className="ml-4 text-right flex-shrink-0">
            <div className={`text-xl font-black bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
              {product.metric.value}
            </div>
            <div className="text-white/20 text-[11px] leading-tight max-w-[88px]">{product.metric.label}</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] mb-5" />

        {/* Problem */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <span className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.16em]">
              {t.labels.problem}
            </span>
          </div>
          <p className="text-white/45 text-sm leading-relaxed pl-[22px]">{product.problem}</p>
        </div>

        {/* Arrow connector */}
        <div className="pl-[9px] mb-4">
          <svg className="w-3.5 h-3.5 text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Outcome */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.16em]">
              {t.labels.outcome}
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed pl-[22px]">{product.outcome}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag, j) => (
            <span
              key={j}
              className="text-xs text-white/30 bg-white/[0.04] border border-white/[0.07] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4 animate-label-glow">
            {t.labels.portfolio}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            {t.portfolio.headline}
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">{t.portfolio.subheadline}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.portfolio.items.map((product, i) => (
            <PortfolioCard key={i} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
