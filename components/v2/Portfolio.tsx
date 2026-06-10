"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

const PORT_ACCENTS = [
  { color: "#7C5CFF", rgb: "124,92,255" },
  { color: "#FF3DC5", rgb: "255,61,197" },
  { color: "#22d3ee", rgb: "34,211,238" },
  { color: "#5B8AFF", rgb: "91,138,255" },
];

const statusColors: Record<string, { bg: string; color: string; border: string }> = {
  "Live Beta":        { bg: "rgba(34,197,94,0.08)",  color: "#4ade80", border: "rgba(34,197,94,0.2)" },
  "Canlı Beta":       { bg: "rgba(34,197,94,0.08)",  color: "#4ade80", border: "rgba(34,197,94,0.2)" },
  "In Entwicklung":   { bg: "rgba(251,191,36,0.08)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  "In Development":   { bg: "rgba(251,191,36,0.08)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  "U razvoju":        { bg: "rgba(251,191,36,0.08)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  "Demo verfügbar":   { bg: "rgba(99,102,241,0.08)", color: "#818cf8", border: "rgba(99,102,241,0.2)" },
  "Demo Available":   { bg: "rgba(99,102,241,0.08)", color: "#818cf8", border: "rgba(99,102,241,0.2)" },
  "Demo dostupan":    { bg: "rgba(99,102,241,0.08)", color: "#818cf8", border: "rgba(99,102,241,0.2)" },
};

function PortfolioCard({ product, i, isDark }: {
  product: { name: string; tagline: string; problem: string; outcome: string; status: string; metric: { value: string; label: string }; tags: string[]; gradient: string };
  i: number; isDark: boolean;
}) {
  const { t } = useLanguage();
  const C = useColors(isDark);
  const sc = statusColors[product.status] ?? { bg: "rgba(124,92,255,0.08)", color: "#A09AFF", border: "rgba(124,92,255,0.2)" };
  const acc = PORT_ACCENTS[i % 4];

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -5, boxShadow: isDark ? `0 24px 60px rgba(${acc.rgb},0.24)` : `0 16px 48px rgba(${acc.rgb},0.18)` }}
      className="rounded-[22px] overflow-hidden flex flex-col transition-all duration-300 relative"
      style={{ background: isDark
        ? `linear-gradient(145deg, rgba(${acc.rgb},0.12) 0%, rgba(6,3,14,0.97) 65%)`
        : "rgba(255,255,255,0.9)",
        border: `1px solid rgba(${acc.rgb},${isDark ? "0.3" : "0.18"})`,
        backdropFilter: isDark ? "none" : "blur(20px)",
        boxShadow: isDark ? `0 4px 32px rgba(${acc.rgb},0.14)` : `0 4px 24px rgba(${acc.rgb},0.1)` }}>
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, rgba(${acc.rgb},${isDark ? "0.18" : "0.1"}) 0%, transparent 65%)`, filter: "blur(24px)", transform: "translate(30%,-30%)" }} />
      <div className="h-[3px] flex-shrink-0" style={{ background: `linear-gradient(90deg, transparent, ${acc.color}, transparent)` }} />
      <div className="p-7 flex flex-col flex-1 gap-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap mb-1">
              <h3 className="text-[18px] font-bold tracking-tight" style={{ color: C.text }}>{product.name}</h3>
              <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full border"
                style={{ background: sc.bg, color: sc.color, borderColor: sc.border }}>{product.status}</span>
            </div>
            <p className="text-[12.5px]" style={{ color: C.muted }}>{product.tagline}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[22px] font-bold" style={{ color: "#7C5CFF" }}>{product.metric.value}</div>
            <div className="text-[10px] max-w-[80px] leading-tight" style={{ color: C.muted }}>{product.metric.label}</div>
          </div>
        </div>
        <div className="h-px" style={{ background: C.divider }} />
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(251,191,36,0.15)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f59e0b" }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#f59e0b" }}>{t.labels.problem}</span>
          </div>
          <p className="text-[12.5px] leading-[1.65] pl-5" style={{ color: C.muted }}>{product.problem}</p>
        </div>
        <div className="pl-2">
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path d="M5 0v12M1 9l4 4 4-4" stroke={C.divider} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.15)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: "#22c55e" }}>{t.labels.outcome}</span>
          </div>
          <p className="text-[12.5px] leading-[1.65] pl-5" style={{ color: C.text }}>{product.outcome}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {product.tags.map((tag, j) => (
            <span key={j} className="text-[11px] px-2.5 py-0.5 rounded-full"
              style={{ color: C.muted, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(124,92,255,0.07)", border: `1px solid ${C.cardBorder}` }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="portfolio" className="py-16 md:py-20 lg:py-[110px] relative" style={{ background: C.bgC }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark
          ? "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.07) 50%,transparent 90%)"
          : "linear-gradient(90deg,transparent 5%,rgba(124,92,255,0.15) 50%,transparent 95%)" }} />
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="relative text-center mb-16">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center pointer-events-none overflow-hidden select-none" style={{ zIndex: 0 }}>
            <span className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
              style={{ fontSize: "clamp(80px,14vw,200px)", color: isDark ? "rgba(255,255,255,0.1)" : "rgba(124,92,255,0.1)" }}>
              PORTFOLIO
            </span>
          </div>
          <div className="relative" style={{ zIndex: 1 }}>
            <p className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#7C5CFF" }}>
              {t.labels.portfolio}
            </p>
            <h2 className="font-black tracking-[-0.04em] leading-[1.0]" style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
              {t.portfolio.headline}<span style={{ color: "#7C5CFF" }}>.</span>
            </h2>
            <p className="text-[15px] mt-5 max-w-md mx-auto leading-[1.7]" style={{ color: C.muted }}>
              {t.portfolio.subheadline}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.portfolio.items.map((product, i) => (
            <PortfolioCard key={i} product={product} i={i} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
}
