"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

const PROC_ACCENTS = [
  { color: "#A09AFF", rgb: "160,154,255" },
  { color: "#FF3DC5", rgb: "255,61,197" },
  { color: "#5B8AFF", rgb: "91,138,255" },
  { color: "#22d3ee", rgb: "34,211,238" },
  { color: "#A09AFF", rgb: "160,154,255" },
];

export function Process() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [scrollRange, setScrollRange] = useState(520);
  useEffect(() => {
    const update = () => {
      const cardW = 326;
      const vw = window.innerWidth;
      const pl = Math.max(24, (vw - 1320) / 2 + 24);
      const total = t.process.steps.length * cardW + pl + 128;
      setScrollRange(Math.max(total - vw + 40, 0));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [t.process.steps.length]);
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

  return (
    <section id="process" ref={targetRef} className="relative lg:h-[220vh]">
      <div className="lg:sticky top-0 lg:h-screen flex flex-col justify-center overflow-hidden py-16 lg:py-0"
        style={{ background: C.bgB }}>
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: isDark ? "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.07) 50%, transparent 90%)" : "rgba(0,0,0,0.05)" }} />

        <div className="max-w-[1320px] mx-auto px-6 w-full mb-12">
          <div className="flex items-end justify-between relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none select-none" style={{ zIndex: 0 }}>
              <span className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
                style={{ fontSize: "clamp(70px,12vw,180px)", color: isDark ? "rgba(255,255,255,0.1)" : "rgba(124,92,255,0.1)" }}>
                PROZESS
              </span>
            </div>
            <div className="relative" style={{ zIndex: 1 }}>
              <p className="text-[10.5px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#A09AFF" }}>
                {t.labels.process}
              </p>
              <h2 className="font-black tracking-[-0.04em] leading-[1.0]"
                style={{ fontSize: "clamp(36px,4.5vw,60px)", color: C.text }}>
                {t.process.headline}<span style={{ color: "#7C5CFF" }}>.</span>
              </h2>
            </div>
            <div className="text-right hidden md:block relative" style={{ zIndex: 1 }}>
              <p className="text-[12px] mb-1" style={{ color: C.muted }}>{t.process.subheadline}</p>
              <span className="text-[11px] font-mono tracking-widest" style={{ color: "#7C5CFF" }}>
                01 → 0{t.process.steps.length}
              </span>
            </div>
          </div>
        </div>

        <div className="lg:hidden px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.process.steps.map((step, i) => {
              const pa = PROC_ACCENTS[i % PROC_ACCENTS.length];
              return (
                <div key={i} className="rounded-[22px] flex flex-col justify-between relative overflow-hidden"
                  style={{
                    background: isDark ? `linear-gradient(145deg, rgba(${pa.rgb},0.16) 0%, rgba(6,3,14,0.97) 65%)` : `linear-gradient(145deg, rgba(${pa.rgb},0.05) 0%, rgba(255,255,255,0.94) 100%)`,
                    border: `1px solid rgba(${pa.rgb},${isDark ? "0.32" : "0.2"})`,
                    boxShadow: isDark ? `0 6px 40px rgba(${pa.rgb},0.18)` : `0 4px 28px rgba(${pa.rgb},0.12)`,
                    minHeight: "220px",
                  }}>
                  <div className="h-[3px]" style={{ background: `linear-gradient(90deg, transparent, ${pa.color}, transparent)` }} />
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="font-black leading-none mb-4" style={{ fontSize: 40, color: `rgba(${pa.rgb},0.8)` }}>{step.number}</div>
                    <div>
                      <h3 className="text-[17px] font-bold mb-2 tracking-tight" style={{ color: C.text }}>{step.title}</h3>
                      <p className="text-[12px] leading-[1.65]" style={{ color: C.muted }}>{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:block overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4 pl-[max(24px,calc((100vw-1320px)/2+24px))] pr-32">
            {t.process.steps.map((step, i) => {
              const pa = PROC_ACCENTS[i % PROC_ACCENTS.length];
              return (
                <div key={i} className="flex-shrink-0 w-[310px] rounded-[22px] flex flex-col justify-between relative overflow-hidden"
                  style={{
                    background: isDark
                      ? `linear-gradient(145deg, rgba(${pa.rgb},0.16) 0%, rgba(6,3,14,0.97) 65%)`
                      : `linear-gradient(145deg, rgba(${pa.rgb},0.05) 0%, rgba(255,255,255,0.94) 100%)`,
                    border: `1px solid rgba(${pa.rgb},${isDark ? "0.32" : "0.2"})`,
                    backdropFilter: isDark ? "none" : "blur(20px)",
                    boxShadow: isDark ? `0 6px 40px rgba(${pa.rgb},0.18)` : `0 4px 28px rgba(${pa.rgb},0.12)`,
                    height: "280px",
                  }}>
                  <div className="h-[3px] flex-shrink-0"
                    style={{ background: `linear-gradient(90deg, transparent, ${pa.color}, transparent)` }} />
                  <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse, rgba(${pa.rgb},${isDark ? "0.22" : "0.12"}) 0%, transparent 65%)`, filter: "blur(24px)", transform: "translate(30%,-30%)" }} />
                  <div className="p-8 flex flex-col justify-between flex-1 relative">
                    <div>
                      <div className="font-black leading-none mb-6"
                        style={{ fontSize: 56, color: `rgba(${pa.rgb},${isDark ? "0.85" : "0.7"})` }}>
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-[21px] font-bold mb-3 tracking-tight" style={{ color: C.text }}>{step.title}</h3>
                      <p className="text-[12.5px] leading-[1.68]" style={{ color: C.muted }}>{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
