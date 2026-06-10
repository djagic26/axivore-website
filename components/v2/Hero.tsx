"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { GlassCard } from "./GlassCard";

export function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const textColor = isDark ? "#ffffff" : "#0a0a0f";
  const mutedColor = isDark ? "rgba(255,255,255,0.45)" : "rgba(10,10,15,0.48)";

  const heroLines = [
    t.hero.headline.replace(/\.$/, ""),
    t.hero.headline2.replace(/\.$/, ""),
  ];

  const heroBg = isDark
    ? "#030208"
    : "linear-gradient(145deg, #ece8ff 0%, #e8e2ff 20%, #f0ecff 50%, #f8f5ff 80%, #faf8ff 100%)";

  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden"
      style={{ background: heroBg }}>

      {isDark && (
        <>
          <div className="absolute pointer-events-none inset-x-0 top-0"
            style={{ height: "85%",
              background: "radial-gradient(ellipse 38% 60% at 50% -8%, rgba(155,90,255,0.95) 0%, rgba(120,65,240,0.55) 18%, rgba(80,35,200,0.22) 38%, rgba(50,15,140,0.06) 58%, transparent 72%)" }} />
          <div className="absolute pointer-events-none inset-x-0 top-0"
            style={{ height: "50%",
              background: "radial-gradient(ellipse 18% 35% at 50% -2%, rgba(200,160,255,0.9) 0%, rgba(170,120,255,0.5) 20%, transparent 55%)" }} />
          <motion.div className="absolute pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 550, height: 550, top: "10%", right: "-6%",
              background: "radial-gradient(ellipse, rgba(255,61,197,0.28) 0%, rgba(180,60,255,0.1) 40%, transparent 65%)",
              filter: "blur(60px)" }} />
          <motion.div className="absolute pointer-events-none"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.75, 0.4] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{ width: 500, height: 450, top: "20%", left: "-8%",
              background: "radial-gradient(ellipse, rgba(70,130,255,0.3) 0%, rgba(60,80,220,0.12) 45%, transparent 68%)",
              filter: "blur(60px)" }} />
          <motion.div className="absolute pointer-events-none"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ width: 800, height: 300, bottom: 60, left: "50%", transform: "translateX(-50%)",
              background: "radial-gradient(ellipse, rgba(120,60,255,0.18) 0%, rgba(255,61,197,0.07) 40%, transparent 65%)",
              filter: "blur(40px)" }} />
        </>
      )}
      {!isDark && (
        <>
          <motion.div
            animate={{ x: [0, 80, -45, 0], y: [0, -60, 35, 0], scale: [1, 1.18, 0.9, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute pointer-events-none"
            style={{ width: 950, height: 850, top: "-28%", left: "12%",
              background: "radial-gradient(ellipse, rgba(160,120,255,0.44) 0%, rgba(120,80,240,0.2) 40%, transparent 65%)",
              filter: "blur(75px)" }} />
          <motion.div
            animate={{ x: [0, -55, 40, 0], y: [0, 50, -30, 0], scale: [1, 0.88, 1.12, 1] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 7 }}
            className="absolute pointer-events-none"
            style={{ width: 700, height: 700, top: "0%", right: "-10%",
              background: "radial-gradient(ellipse, rgba(180,100,255,0.3) 0%, transparent 60%)",
              filter: "blur(68px)" }} />
          <motion.div
            animate={{ x: [0, 50, -30, 0], y: [0, -25, 60, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 12 }}
            className="absolute pointer-events-none"
            style={{ width: 520, height: 520, bottom: "18%", left: "-6%",
              background: "radial-gradient(ellipse, rgba(200,170,255,0.32) 0%, transparent 60%)",
              filter: "blur(62px)" }} />
        </>
      )}

      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? "rgba(160,154,255,0.18)" : "rgba(90,60,200,0.14)"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 20%, transparent 80%)",
        }} />
      <div className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
        style={{ background: `linear-gradient(to bottom, transparent, ${isDark ? "#030208" : "#eeeaff"}f5)` }} />
      <div className="absolute inset-y-0 left-0 w-[15%] pointer-events-none"
        style={{ background: `linear-gradient(to right, ${isDark ? "#030208" : "#eeeaff"}, transparent)` }} />
      <div className="absolute inset-y-0 right-0 w-[15%] pointer-events-none"
        style={{ background: `linear-gradient(to left, ${isDark ? "#030208" : "#eeeaff"}, transparent)` }} />

      <div className="relative flex-1 max-w-[1320px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-64px)] py-20 md:py-24">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-10"
              style={{
                background: isDark ? "rgba(124,92,255,0.1)" : "rgba(124,92,255,0.08)",
                border: `1px solid ${isDark ? "rgba(124,92,255,0.25)" : "rgba(124,92,255,0.2)"}`,
              }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#A09AFF" }} />
              <span className="text-[10.5px] tracking-[0.18em] uppercase font-medium" style={{ color: "#A09AFF" }}>
                {t.hero.badge}
              </span>
            </motion.div>

            <h1 className="mb-8">
              {heroLines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div initial={{ y: "105%" }} animate={{ y: 0 }}
                    transition={{ duration: 0.78, delay: 0.25 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                    className="font-black leading-[0.88] tracking-[-0.05em]"
                    style={{
                      fontSize: "clamp(58px,7.5vw,110px)",
                      ...(isDark ? {
                        background: i === 0
                          ? "linear-gradient(160deg, #ffffff 0%, #e0d8ff 60%, #c4b8ff 100%)"
                          : "linear-gradient(160deg, #f0ebff 0%, #B8AEFF 50%, #d47fff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        filter: "drop-shadow(0 0 40px rgba(160,154,255,0.35))",
                      } : { color: textColor }),
                    }}>
                    {i === heroLines.length - 1 ? (
                      <>{line}<span style={{ ...(isDark ? { background: "none", WebkitTextFillColor: "#7C5CFF" } : { color: "#7C5CFF" }) }}>.</span></>
                    ) : line}
                  </motion.div>
                </div>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.62 }}
              className="text-[15px] leading-[1.75] max-w-[420px] mb-10"
              style={{ color: mutedColor }}>
              {t.hero.subheadline}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              className="flex items-center gap-5 flex-wrap mb-16">
              <motion.a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
                whileHover={{ scale: 1.04, boxShadow: "0 10px 50px rgba(160,60,255,0.65)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-4 rounded-full text-white text-[14px] font-semibold cursor-pointer relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #7C5CFF 40%, #5b8aff 100%)", boxShadow: "0 6px 36px rgba(124,92,255,0.5)", transition: "box-shadow 0.25s" }}>
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)", width: "45%" }}
                />
                {t.hero.ctaPrimary}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.a>
              <motion.a href="#results" whileHover={{ x: 4 }} transition={{ duration: 0.15 }}
                className="flex items-center gap-2 text-[14px] font-medium cursor-pointer transition-colors"
                style={{ color: mutedColor }}>
                {t.hero.ctaSecondary}
                <span className="text-[16px]">→</span>
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
              <p className="text-[9.5px] tracking-[0.24em] uppercase mb-4"
                style={{ color: isDark ? "rgba(255,255,255,0.42)" : "rgba(90,60,200,0.45)" }}>
                {t.hero.socialProof}
              </p>
              <div className="flex items-center gap-7 flex-wrap">
                {["Zapier", "OpenAI", "Claude", "Supabase", "Next.js", "Stripe"].map((name) => (
                  <span key={name} className="text-[13px] font-semibold"
                    style={{ color: isDark ? "rgba(255,255,255,0.52)" : "rgba(60,30,150,0.38)" }}>
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[520px] hidden lg:block">
            <GlassCard isDark={isDark} />
            <div className="absolute right-[-8px] bottom-14 text-right pr-2">
              <p className="text-[10.5px] leading-[1.9]"
                style={{ color: isDark ? "rgba(255,255,255,0.48)" : "rgba(60,30,150,0.55)" }}>
                Intelligent systems.<br />Real results.<br />No fluff.
              </p>
              <div className="w-1 h-1 rounded-full ml-auto mt-2"
                style={{ background: "#A09AFF", boxShadow: "0 0 8px rgba(160,154,255,0.8)" }} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden pb-2 pointer-events-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
          style={{ width: "max-content" }}>
          {[0, 1].map(k => (
            <div key={k} className="flex items-center">
              {["AXIVORE", "INTELLIGENT SYSTEMS", "AI AUTOMATION", "RESULTS FIRST", "PRECISION"].map((word, j) => (
                <span key={j} className="font-bold uppercase tracking-[-0.02em] mx-8"
                  style={{
                    fontSize: "clamp(48px,7vw,90px)",
                    color: "transparent",
                    WebkitTextStroke: isDark ? "1.5px #8B5CF6" : "1.5px rgba(124,92,255,0.5)",
                    filter: isDark
                      ? "drop-shadow(0 0 6px #8B5CF6) drop-shadow(0 0 18px #7C3AED80)"
                      : "none",
                  }}>
                  {word}
                  <span style={{
                    color: "transparent",
                    WebkitTextStroke: isDark ? "1.5px #A78BFA" : "1.5px rgba(124,92,255,0.5)",
                    filter: isDark ? "drop-shadow(0 0 8px #A78BFA)" : "none",
                  }}> ·</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
