"use client";

import { motion } from "framer-motion";

export function GlassCard({ isDark }: { isDark: boolean }) {
  const textMain = isDark ? "#fff" : "#0a0a0f";
  const textMuted = isDark ? "rgba(255,255,255,0.45)" : "rgba(10,10,15,0.45)";

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute pointer-events-none"
        style={{ width: 560, height: 560, top: "50%", left: "50%", transform: "translate(-50%,-52%)",
          background: "radial-gradient(ellipse, rgba(124,92,255,0.4) 0%, rgba(91,138,255,0.15) 40%, transparent 70%)",
          filter: "blur(55px)" }} />
      <div className="absolute pointer-events-none"
        style={{ width: 300, height: 300, bottom: "0%", right: "-5%",
          background: "radial-gradient(ellipse, rgba(255,61,197,0.2) 0%, transparent 65%)",
          filter: "blur(45px)" }} />

      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-[20px]"
        style={{
          width: 320, height: 210,
          background: isDark ? "rgba(50,20,110,0.25)" : "rgba(200,190,255,0.3)",
          border: `1px solid ${isDark ? "rgba(160,154,255,0.15)" : "rgba(124,92,255,0.14)"}`,
          backdropFilter: "blur(6px)",
          transform: "rotate(-10deg) translateY(70px) translateX(40px)",
          boxShadow: isDark ? "0 24px 80px rgba(60,20,140,0.4)" : "0 24px 60px rgba(124,92,255,0.12)",
        }} />

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, -0.8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute rounded-[20px]"
        style={{
          width: 345, height: 225,
          background: isDark ? "rgba(35,15,85,0.45)" : "rgba(228,222,255,0.6)",
          border: `1px solid ${isDark ? "rgba(160,154,255,0.22)" : "rgba(124,92,255,0.22)"}`,
          backdropFilter: "blur(12px)",
          transform: "rotate(-5deg) translateY(28px)",
          boxShadow: isDark ? "0 30px 80px rgba(60,20,140,0.45)" : "0 30px 60px rgba(124,92,255,0.14)",
        }} />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="relative rounded-[22px] overflow-hidden"
        style={{
          width: 370, height: 250,
          background: isDark ? "rgba(12,7,28,0.82)" : "rgba(250,248,255,0.92)",
          border: "1px solid rgba(140,100,255,0.35)",
          backdropFilter: "blur(40px) saturate(200%)",
          boxShadow: isDark
            ? "0 50px 120px rgba(40,10,110,0.8), 0 0 0 1px rgba(180,154,255,0.12) inset, 0 1px 0 rgba(255,255,255,0.08) inset"
            : "0 50px 120px rgba(124,92,255,0.22), 0 0 0 1px rgba(124,92,255,0.14) inset",
        }}>
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(180,154,255,0.7) 40%, rgba(255,61,197,0.5) 60%, transparent 95%)" }} />
        <div className="absolute top-0 right-0 pointer-events-none"
          style={{ width: 180, height: 180,
            background: "radial-gradient(ellipse, rgba(124,92,255,0.35) 0%, transparent 70%)",
            filter: "blur(24px)", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 pointer-events-none"
          style={{ width: 140, height: 120,
            background: "radial-gradient(ellipse, rgba(255,61,197,0.18) 0%, transparent 70%)",
            filter: "blur(20px)", transform: "translate(-20%,30%)" }} />

        <div className="relative p-7 h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div className="w-2 h-2 rounded-full"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ background: "#A09AFF", boxShadow: "0 0 10px rgba(160,154,255,1)" }} />
              <span className="text-[9.5px] tracking-[0.2em] uppercase font-medium" style={{ color: textMuted }}>AI System Active</span>
            </div>
            <div className="px-2 py-0.5 rounded-full text-[9px] font-semibold tracking-wide"
              style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}>
              ONLINE
            </div>
          </div>
          <div>
            <div className="font-bold tracking-tight leading-none mb-1"
              style={{ fontSize: 56, background: isDark ? "linear-gradient(135deg, #ffffff 0%, #A09AFF 100%)" : "linear-gradient(135deg, #1a0060 0%, #7C5CFF 55%, #A09AFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              24/7
            </div>
            <div className="text-[11.5px] font-medium" style={{ color: textMuted }}>Systems Running</div>
          </div>
          <div className="flex items-end justify-between pt-4"
            style={{ borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(124,92,255,0.18)"}` }}>
            <div>
              <div className="text-[28px] font-bold" style={{ color: textMain }}>100+</div>
              <div className="text-[10px]" style={{ color: textMuted }}>Auto-Published Posts</div>
            </div>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(124,92,255,0.3), rgba(255,61,197,0.15))", border: "1px solid rgba(160,100,255,0.4)", boxShadow: "0 4px 20px rgba(124,92,255,0.3)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 12L6 7L10 9L14 3" stroke="#A09AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 3H14V6" stroke="#A09AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
          background: isDark ? "rgba(10,5,25,0.85)" : "rgba(248,246,255,0.92)",
          border: "1px solid rgba(160,154,255,0.28)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(60,30,120,0.35)",
        }}>
        <div className="text-[9px] tracking-widest uppercase font-medium mb-0.5" style={{ color: "rgba(160,154,255,0.7)" }}>Systems Built</div>
        <div className="text-[24px] font-bold leading-tight" style={{ color: textMain }}>10+</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0], x: [0, -4, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-6 left-[-8px] px-4 py-3 rounded-2xl"
        style={{
          background: isDark ? "rgba(10,5,25,0.85)" : "rgba(248,246,255,0.92)",
          border: "1px solid rgba(255,61,197,0.3)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(255,61,197,0.2)",
        }}>
        <div className="text-[9px] tracking-widest uppercase font-medium mb-0.5" style={{ color: "rgba(255,120,210,0.8)" }}>Fixed Quote</div>
        <div className="text-[24px] font-bold leading-tight" style={{ color: textMain }}>48 h</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[44%] right-[-16px] flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          background: isDark ? "rgba(10,5,25,0.9)" : "rgba(248,246,255,0.95)",
          border: "1px solid rgba(34,197,94,0.3)",
          backdropFilter: "blur(16px)",
          boxShadow: "0 6px 24px rgba(34,197,94,0.15)",
        }}>
        <motion.div className="w-1.5 h-1.5 rounded-full"
          animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
        <span className="text-[10px] font-semibold whitespace-nowrap" style={{ color: textMuted }}>Live system</span>
      </motion.div>
    </div>
  );
}
