"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export function GlassCard({ isDark }: { isDark: boolean }) {
  const { t } = useLanguage();
  const w = t.hero.widget;
  const textMain = isDark ? "#fff" : "#0a0a0f";
  const textMuted = isDark ? "rgba(255,255,255,0.45)" : "rgba(10,10,15,0.45)";

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute pointer-events-none"
        style={{ width: 560, height: 560, top: "50%", left: "50%", transform: "translate(-50%,-52%)",
          background: isDark
            ? "radial-gradient(ellipse, rgba(201,124,60,0.4) 0%, rgba(217,165,78,0.15) 40%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(201,124,60,0.14) 0%, rgba(217,165,78,0.05) 40%, transparent 70%)",
          filter: "blur(55px)" }} />
      <div className="absolute pointer-events-none"
        style={{ width: 300, height: 300, bottom: "0%", right: "-5%",
          background: isDark
            ? "radial-gradient(ellipse, rgba(181,80,46,0.2) 0%, transparent 65%)"
            : "radial-gradient(ellipse, rgba(181,80,46,0.07) 0%, transparent 65%)",
          filter: "blur(45px)" }} />

      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-[20px]"
        style={{
          width: 320, height: 210,
          background: isDark ? "rgba(31, 21, 12,0.25)" : "rgba(228, 179, 130,0.3)",
          border: `1px solid ${isDark ? "rgba(224,163,96,0.15)" : "rgba(201,124,60,0.14)"}`,
          backdropFilter: "blur(6px)",
          transform: "rotate(-10deg) translateY(70px) translateX(40px)",
          boxShadow: isDark ? "0 24px 80px rgba(55, 35, 19,0.4)" : "0 24px 60px rgba(201,124,60,0.12)",
        }} />

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, -0.8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute rounded-[20px]"
        style={{
          width: 345, height: 225,
          background: isDark ? "rgba(19, 12, 7,0.45)" : "rgba(234, 194, 156,0.6)",
          border: `1px solid ${isDark ? "rgba(224,163,96,0.22)" : "rgba(201,124,60,0.22)"}`,
          backdropFilter: "blur(12px)",
          transform: "rotate(-5deg) translateY(28px)",
          boxShadow: isDark ? "0 30px 80px rgba(55, 35, 19,0.45)" : "0 30px 60px rgba(201,124,60,0.14)",
        }} />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative rounded-[22px] overflow-hidden"
        style={{
          width: 370, height: 250,
          background: isDark ? "rgba(18, 13, 8,0.82)" : "rgba(239, 206, 178,0.92)",
          border: "1px solid rgba(213, 130, 56,0.35)",
          backdropFilter: "blur(40px) saturate(200%)",
          boxShadow: isDark
            ? "0 50px 120px rgba(26, 16, 8,0.8), 0 0 0 1px rgba(222, 158, 100,0.12) inset, 0 1px 0 rgba(255,255,255,0.08) inset"
            : "0 50px 120px rgba(201,124,60,0.22), 0 0 0 1px rgba(201,124,60,0.14) inset",
        }}>
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(222, 158, 100,0.7) 40%, rgba(181,80,46,0.5) 60%, transparent 95%)" }} />
        <div className="absolute top-0 right-0 pointer-events-none"
          style={{ width: 180, height: 180,
            background: isDark
              ? "radial-gradient(ellipse, rgba(201,124,60,0.35) 0%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(201,124,60,0.13) 0%, transparent 70%)",
            filter: "blur(24px)", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 pointer-events-none"
          style={{ width: 140, height: 120,
            background: isDark
              ? "radial-gradient(ellipse, rgba(181,80,46,0.18) 0%, transparent 70%)"
              : "radial-gradient(ellipse, rgba(181,80,46,0.07) 0%, transparent 70%)",
            filter: "blur(20px)", transform: "translate(-20%,30%)" }} />

        <div className="relative p-7 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div className="w-2 h-2 rounded-full"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ background: "#E0A360", boxShadow: "0 0 10px rgba(224,163,96,1)" }} />
              <span className="text-[9.5px] tracking-[0.2em] uppercase font-medium" style={{ color: textMuted }}>{w.statusActive}</span>
            </div>
            <div className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide"
              style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}>
              {w.online}
            </div>
          </div>
          <div>
            <div className="font-bold tracking-tight leading-none mb-1"
              style={{ fontSize: 56, backgroundImage: isDark ? "linear-gradient(135deg, #ffffff 0%, #E0A360 100%)" : "linear-gradient(135deg, #150c04 0%, #C97C3C 55%, #E0A360 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              24/7
            </div>
            <div className="text-[11.5px] font-medium" style={{ color: textMuted }}>{w.systemsRunning}</div>
          </div>
          <div className="flex items-end justify-between pt-4"
            style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(201,124,60,0.18)"}` }}>
            <div>
              <div className="text-[28px] font-bold" style={{ color: textMain }}>100+</div>
              <div className="text-[10px]" style={{ color: textMuted }}>{w.autoPublished}</div>
            </div>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(201,124,60,0.3), rgba(181,80,46,0.15))", border: "1px solid rgba(213, 125, 56,0.4)", boxShadow: "0 4px 20px rgba(201,124,60,0.3)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 12L6 7L10 9L14 3" stroke="#E0A360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 3H14V6" stroke="#E0A360" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-2 right-0 px-4 py-3 rounded-2xl"
        style={{
          background: isDark ? "rgba(18, 12, 7,0.85)" : "rgba(238, 206, 176,0.92)",
          border: "1px solid rgba(224,163,96,0.28)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(44, 31, 19,0.35)",
        }}>
        <div className="text-[9px] tracking-widest uppercase font-medium mb-0.5" style={{ color: "rgba(224,163,96,0.7)" }}>{w.systemsBuilt}</div>
        <div className="text-[24px] font-bold leading-tight" style={{ color: textMain }}>10+</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0], x: [0, -4, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-6 left-[-8px] px-4 py-3 rounded-2xl"
        style={{
          background: isDark ? "rgba(18, 12, 7,0.85)" : "rgba(238, 206, 176,0.92)",
          border: "1px solid rgba(181,80,46,0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(181,80,46,0.2)",
        }}>
        <div className="text-[9px] tracking-widest uppercase font-medium mb-0.5" style={{ color: "rgba(216, 107, 72,0.8)" }}>{w.fixedQuote}</div>
        <div className="text-[24px] font-bold leading-tight" style={{ color: textMain }}>48 h</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[44%] right-[-16px] flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: isDark ? "rgba(18, 12, 7,0.9)" : "rgba(238, 206, 176,0.95)",
          border: "1px solid rgba(34,197,94,0.3)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 6px 24px rgba(34,197,94,0.15)",
        }}>
        <motion.div className="w-1.5 h-1.5 rounded-full"
          animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
        <span className="text-[10px] font-semibold whitespace-nowrap" style={{ color: textMuted }}>{w.liveSystem}</span>
      </motion.div>
    </div>
  );
}
