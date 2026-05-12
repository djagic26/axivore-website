"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const starPath =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

const avatarGradients = [
  "from-violet-500 to-indigo-600",
  "from-indigo-500 to-blue-600",
  "from-blue-500 to-cyan-600",
];

/* Badge gradient + glow color per card */
const badgeAccents = [
  {
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.75)",
    dot: "bg-emerald-300",
  },
  {
    gradient: "from-violet-500 to-indigo-600",
    glow: "rgba(139,92,246,0.75)",
    dot: "bg-violet-300",
  },
  {
    gradient: "from-blue-500 to-cyan-500",
    glow: "rgba(59,130,246,0.75)",
    dot: "bg-blue-300",
  },
];

function ReviewBadge({
  result,
  index,
  inView,
}: {
  result: string;
  index: number;
  inView: boolean;
}) {
  const a = badgeAccents[index];
  return (
    <motion.div
      className={`absolute -top-4 left-1/2 -translate-x-1/2 overflow-hidden bg-gradient-to-r ${a.gradient} text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap z-10`}
      initial={{ opacity: 0, y: 10, scale: 0.88 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: 0.4 + index * 0.18, type: "spring", stiffness: 300 }}
    >
      {/* Shimmer sweep — identical to Pricing Popular badge */}
      <motion.span
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.38) 50%, transparent 70%)",
        }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 2.4,
          ease: "easeInOut",
        }}
      />
      {/* Pulsing glow behind badge */}
      <motion.span
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            `0 0 0px 0px ${a.glow.replace("0.75", "0")}`,
            `0 0 12px 4px ${a.glow}`,
            `0 0 0px 0px ${a.glow.replace("0.75", "0")}`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
      />
      {/* Pulsing dot */}
      <motion.span
        className={`relative z-10 w-1.5 h-1.5 rounded-full ${a.dot}`}
        animate={{ opacity: [1, 0.35, 1], scale: [1, 1.5, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <span className="relative z-10">{result}</span>
    </motion.div>
  );
}

function ShiningStars({ cardDelay = 0 }: { cardDelay?: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {[0, 1, 2, 3, 4].map((j) => (
        <svg
          key={j}
          className="w-4 h-4"
          fill="#fbbf24"
          viewBox="0 0 20 20"
          style={{
            animation: "starWave 3.5s ease-in-out infinite",
            animationDelay: `${cardDelay + j * 0.13}s`,
          }}
        >
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-4 animate-label-glow">
            {t.labels.testimonials}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
            {t.testimonials.headline}
          </h2>
          <p className="text-white/40 text-lg">{t.testimonials.subheadline}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, i) => (
            /* Wrapper with top-padding creates space for the floating badge */
            <div key={i} className="relative pt-5">
              <ReviewBadge result={item.result} index={i} inView={inView} />

              <motion.div
                className="group relative flex flex-col h-full p-8 rounded-2xl border border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.035] transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.14 }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                {/* Animated card glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                  style={{
                    background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${badgeAccents[i].glow.replace("0.75", "0.07")} 0%, transparent 70%)`,
                  }}
                />

                {/* Big quote mark */}
                <div className="absolute top-4 right-6 text-[6rem] font-black leading-none text-white/[0.04] select-none pointer-events-none font-serif">
                  "
                </div>

                {/* Stars */}
                <ShiningStars cardDelay={i * 0.55} />

                {/* Quote */}
                <p className="text-white/65 text-sm leading-relaxed flex-1 mb-8 relative z-10">
                  „{item.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-6 border-t border-white/6">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradients[i]} flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-lg`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.name}</div>
                    <div className="text-white/35 text-xs">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
