"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

/* ── Animated star that spins + pulses with golden glow ── */
function PopularStar() {
  return (
    <span className="relative inline-flex items-center justify-center mr-1.5">
      {/* Glow behind the star */}
      <motion.span
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0px 0px rgba(251,191,36,0)",
            "0 0 10px 4px rgba(251,191,36,0.8)",
            "0 0 0px 0px rgba(251,191,36,0)",
          ],
        }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* The star itself */}
      <motion.span
        className="relative z-10 text-sm"
        animate={{
          rotate: [0, 20, -20, 0],
          scale: [1, 1.35, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
      >
        ⭐
      </motion.span>
    </span>
  );
}

export default function Pricing() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4 animate-label-glow">
            {t.labels.pricing}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.pricing.headline}
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">{t.pricing.subheadline}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {t.pricing.plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} globalInView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  index,
  globalInView,
}: {
  plan: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    highlighted: boolean;
  };
  index: number;
  globalInView: boolean;
}) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={globalInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: plan.highlighted ? -8 : -5, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl flex flex-col ${
        plan.highlighted
          ? "bg-gradient-to-b from-violet-600/20 to-indigo-600/10 border-2 border-violet-500/40 shadow-2xl shadow-violet-500/15"
          : "bg-white/[0.02] border border-white/8 hover:border-white/15 hover:shadow-xl"
      }`}
    >
      {/* Animated border glow on popular card */}
      {plan.highlighted && globalInView && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 20px 2px rgba(139,92,246,0.1)",
              "0 0 40px 6px rgba(139,92,246,0.25)",
              "0 0 20px 2px rgba(139,92,246,0.1)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Popular badge with shimmer + star */}
      {plan.highlighted && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center"
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          animate={globalInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
        >
          {/* Shimmer sweep */}
          <motion.span
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
            }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: "easeInOut",
            }}
          />
          <PopularStar />
          <span className="relative z-10">{t.labels.popular}</span>
        </motion.div>
      )}

      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-8">
          <h3 className="text-white font-semibold text-lg mb-1">{plan.name}</h3>
          <p className="text-white/35 text-sm mb-6">{plan.description}</p>
          <div className="flex items-baseline gap-2">
            <motion.span
              className={`text-4xl font-bold tracking-tight ${
                plan.highlighted
                  ? "bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent"
                  : "text-white"
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={globalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
            >
              {plan.price}
            </motion.span>
            {plan.period && (
              <span className="text-white/30 text-sm">/ {plan.period}</span>
            )}
          </div>
        </div>

        <ul className="space-y-3 flex-1 mb-8">
          {plan.features.map((feature, j) => (
            <motion.li
              key={j}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -8 }}
              animate={globalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.12 + j * 0.06 }}
            >
              <div
                className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                  plan.highlighted
                    ? "bg-violet-500/20 text-violet-400"
                    : "bg-white/5 text-white/40"
                }`}
              >
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white/55 text-sm leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
            plan.highlighted
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25"
              : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {plan.cta}
        </motion.a>
      </div>
    </motion.div>
  );
}
