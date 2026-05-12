"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

function AuroraBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 900, height: 720,
          top: "-12%", left: "50%", marginLeft: -450,
          background: "radial-gradient(ellipse, rgba(124,58,237,0.24) 0%, rgba(109,40,217,0.12) 40%, transparent 70%)",
          filter: "blur(72px)",
        }}
        animate={{ scale: [1, 1.14, 0.94, 1], y: [0, -28, 14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 620, height: 520,
          top: "18%", left: "-8%",
          background: "radial-gradient(ellipse, rgba(99,102,241,0.18) 0%, transparent 70%)",
          filter: "blur(88px)",
        }}
        animate={{ scale: [1, 0.87, 1.10, 1], y: [0, 38, -16, 0], x: [0, 18, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520, height: 440,
          bottom: "8%", right: "-6%",
          background: "radial-gradient(ellipse, rgba(59,130,246,0.13) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{ scale: [1, 1.20, 0.88, 1], y: [0, -32, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300, height: 210,
          top: "58%", left: "28%",
          background: "radial-gradient(ellipse, rgba(244,63,94,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ scale: [1, 1.45, 0.72, 1], x: [0, 52, -22, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Grid lines — uses CSS var so light mode can switch color */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(var(--grid-line,rgba(255,255,255,1)) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line,rgba(255,255,255,1)) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Pulsing concentric rings */}
      {[280, 420, 580].map((size, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full border border-violet-500"
          style={{
            width: size, height: size,
            marginLeft: -size / 2, marginTop: -size / 2,
          }}
          animate={{ opacity: [0.05, 0.16, 0.05], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 4 + i * 1.4, repeat: Infinity, ease: "easeInOut", delay: i * 1.3 }}
        />
      ))}

      {/* Vignette mask */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 42%, var(--hero-vignette,rgba(10,10,15,0.58)) 100%)" }}
      />
    </div>
  );
}

const PARTICLES = [
  { left: "11%", top: "17%", w: 3, delay: 0,   dur: 9  },
  { left: "85%", top: "11%", w: 2, delay: 1.3, dur: 11 },
  { left: "73%", top: "63%", w: 4, delay: 0.6, dur: 13 },
  { left: "21%", top: "79%", w: 2, delay: 2.1, dur: 8  },
  { left: "54%", top: "89%", w: 3, delay: 0.9, dur: 12 },
  { left: "92%", top: "43%", w: 2, delay: 1.9, dur: 7  },
  { left: "7%",  top: "57%", w: 2, delay: 3.1, dur: 10 },
  { left: "41%", top: "7%",  w: 3, delay: 1.6, dur: 14 },
  { left: "64%", top: "31%", w: 2, delay: 0.3, dur: 9  },
];

function FloatingParticles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-violet-400 pointer-events-none -z-10"
          style={{ left: p.left, top: p.top, width: p.w, height: p.w, opacity: 0.35 }}
          animate={{ y: [0, -18, 0], opacity: [0.22, 0.52, 0.22] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.13 } } };
  const item = {
    hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden">
      <AuroraBg />
      <FloatingParticles />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-col items-center text-center w-full max-w-5xl relative z-10"
      >
        {/* Badge */}
        <motion.div variants={item} className="relative flex items-center mb-12">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: "rgba(139,92,246,0.18)", filter: "blur(12px)" }}
            animate={{ scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.1] rounded-full px-5 py-2.5 backdrop-blur-md">
            <motion.div
              className="w-2 h-2 rounded-full bg-violet-400"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.35, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
            <span className="text-white/60 text-sm font-medium tracking-wide">{t.hero.badge}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight leading-[0.92] text-white">
            {t.hero.headline}
          </h1>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-tight leading-[0.92] mt-3">
            <span
              className={isLight ? "" : "bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent animate-gradient-pan"}
              style={isLight ? { color: "#5B21B6" } : {}}
            >
              {t.hero.headline2}
            </span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p variants={item} className="text-white/50 text-lg sm:text-xl max-w-xl leading-relaxed mb-12">
          {t.hero.subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-white text-[#0a0a0f] font-bold px-9 py-4 rounded-full text-base animate-btn-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {t.hero.ctaPrimary}
            <motion.svg
              className="w-4 h-4"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
          <motion.a
            href="#portfolio"
            className="group inline-flex items-center gap-2.5 text-white/65 hover:text-white font-semibold px-9 py-4 rounded-full border border-white/10 text-base bg-white/[0.04] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {t.hero.ctaSecondary}
            <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div variants={item} className="flex items-center gap-3">
          <div className="flex -space-x-2.5">
            {["MH", "SK", "TR"].map((init, i) => (
              <div key={i} className="w-9 h-9 rounded-full border-2 border-[#0a0a0f] bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-black shadow-lg">
                {init}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  style={{ animation: "starWave 3.5s ease-in-out infinite", animationDelay: `${i * 0.2}s` }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/40 text-xs">{t.hero.socialProof}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
