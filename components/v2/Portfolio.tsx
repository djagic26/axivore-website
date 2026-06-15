"use client";

import type { MouseEvent } from "react";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

// Real, public links per product (keyed by name — works across all languages).
// Only products listed here render a "Live ansehen" link. Leave out anything private.
const PORTFOLIO_LINKS: Record<string, string> = {
  "ContentEngine": "https://www.instagram.com/axivore.io/",
  "Insight Pulse": "https://insight-pulse700.lovable.app",
  "LeadPilot": "https://leadpilot-app.lovable.app",
  // CreatorAI, Supervisor — internal, no public link yet.
};

const PORT_ACCENTS = [
  { color: "#7C5CFF", rgb: "124,92,255" },
  { color: "#FF3DC5", rgb: "255,61,197" },
  { color: "#22d3ee", rgb: "34,211,238" },
  { color: "#5B8AFF", rgb: "91,138,255" },
];

const statusColors: Record<string, { bg: string; color: string; border: string }> = {
  "Live":             { bg: "rgba(34,197,94,0.1)",   color: "#4ade80", border: "rgba(34,197,94,0.28)" },
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
  const href = PORTFOLIO_LINKS[product.name];
  const viewLive = t.hero.viewLive;
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 220, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${px}px ${py}px, rgba(${acc.rgb},0.16), transparent 72%)`;

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
    px.set(e.clientX - r.left);
    py.set(e.clientY - r.top);
  }
  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 26, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 90, damping: 18, delay: i * 0.09 }}
      whileHover={{ scale: 1.015, boxShadow: isDark ? `0 28px 64px rgba(${acc.rgb},0.26)` : `0 18px 50px rgba(${acc.rgb},0.2)` }}
      className="group rounded-[22px] overflow-hidden flex flex-col relative will-change-transform"
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d",
        background: isDark
        ? `linear-gradient(145deg, rgba(${acc.rgb},0.12) 0%, rgba(6,3,14,0.97) 65%)`
        : "rgba(255,255,255,0.9)",
        border: `1px solid rgba(${acc.rgb},${isDark ? "0.3" : "0.18"})`,
        backdropFilter: isDark ? "none" : "blur(20px)",
        boxShadow: isDark ? `0 4px 32px rgba(${acc.rgb},0.14)` : `0 4px 24px rgba(${acc.rgb},0.1)` }}>
      <motion.div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ background: spotlight }} />
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
        style={{ background: `radial-gradient(ellipse, rgba(${acc.rgb},${isDark ? "0.18" : "0.1"}) 0%, transparent 65%)`, filter: "blur(24px)", transform: "translate(30%,-30%)" }} />
      <div className="h-[3px] flex-shrink-0 transition-all duration-300 group-hover:h-[4px]" style={{ background: `linear-gradient(90deg, transparent, ${acc.color}, transparent)`, boxShadow: `0 0 12px rgba(${acc.rgb},0.5)` }} />
      <div className="relative z-20 p-7 flex flex-col flex-1 gap-5">
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
        <div className="mt-auto pt-2 flex flex-col gap-3.5">
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, j) => (
              <span key={j} className="text-[11px] px-2.5 py-0.5 rounded-full"
                style={{ color: C.muted, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(124,92,255,0.07)", border: `1px solid ${C.cardBorder}` }}>
                {tag}
              </span>
            ))}
          </div>
          {href && (
            <a href={href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold w-fit transition-all hover:gap-2.5"
              style={{ color: acc.color }}>
              {viewLive}
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          )}
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
