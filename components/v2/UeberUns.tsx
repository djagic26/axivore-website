"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useColors } from "./colors";

const VALUE_ICONS = ["→", "◎", "▲"];
const VALUE_RGBS = ["201,124,60", "181,80,46", "217,165,78"];
const VALUE_COLORS = ["#E0A360", "#B5502E", "#D9A54E"];

export function UeberUns() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const C = useColors(isDark);

  return (
    <section id="ueber-uns" className="relative py-16 md:py-20 lg:py-[120px] overflow-hidden" style={{ background: C.bgC }}>
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: isDark ? "linear-gradient(90deg,transparent 10%,rgba(255,255,255,0.07) 50%,transparent 90%)" : "rgba(0,0,0,0.05)" }} />

      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative overflow-hidden mb-8">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none select-none" style={{ zIndex: 0 }}>
                <span className="font-black uppercase tracking-[-0.04em] whitespace-nowrap"
                  style={{ fontSize: "clamp(70px,12vw,160px)", color: isDark ? "rgba(255,255,255,0.1)" : "rgba(201,124,60,0.1)" }}>
                  STUDIO
                </span>
              </div>
              <div className="relative" style={{ zIndex: 1 }}>
                <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="text-[10.5px] tracking-[0.28em] uppercase mb-5 font-medium" style={{ color: "#C97C3C" }}>
                  {t.labels.about}
                </motion.p>
                <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-black tracking-[-0.04em] leading-[1.05]"
                  style={{ fontSize: "clamp(32px,4vw,54px)", color: C.text }}>
                  {t.about.headline}<span style={{ color: "#C97C3C" }}>.</span>
                </motion.h2>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }} className="space-y-5 mb-10">
              {t.about.paragraphs.map((text, i) => (
                <p key={i} className="text-[14.5px] leading-[1.8]"
                  style={{ color: i === t.about.paragraphs.length - 1 ? C.text : C.muted, fontWeight: i === t.about.paragraphs.length - 1 ? 500 : 400 }}>
                  {text}
                </p>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.35 }} className="flex flex-wrap items-center gap-2">
              {t.about.badges.map((word) => (
                <span key={word} className="text-[12px] font-bold px-4 py-1.5 rounded-full"
                  style={{ background: isDark ? "rgba(201,124,60,0.12)" : "rgba(201,124,60,0.08)", border: "1px solid rgba(201,124,60,0.28)", color: "#E0A360" }}>
                  {word}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.2 }}>
            <div className="rounded-[28px] overflow-hidden relative"
              style={{
                background: isDark
                  ? "linear-gradient(145deg, rgba(201,124,60,0.14) 0%, rgba(18, 12, 7,0.97) 70%)"
                  : "linear-gradient(145deg, rgba(201,124,60,0.06) 0%, rgba(237, 201, 171,0.95) 100%)",
                border: `1px solid rgba(201,124,60,${isDark ? "0.28" : "0.22"})`,
                boxShadow: isDark ? "0 8px 60px rgba(201,124,60,0.2)" : "0 8px 60px rgba(201,124,60,0.12)",
              }}>
              <div className="h-[3px]" style={{ background: "linear-gradient(90deg, transparent, rgba(201,124,60,0.85), transparent)" }} />
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(201,124,60,0.18) 0%, transparent 65%)", filter: "blur(32px)", transform: "translate(30%,-30%)" }} />

              <div className="p-7 flex items-center gap-5 relative"
                style={{ borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(201,124,60,0.1)"}` }}>
                <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden flex-shrink-0"
                  style={{ border: "2px solid rgba(201,124,60,0.38)", boxShadow: "0 4px 20px rgba(201,124,60,0.3)" }}>
                  <Image src="/founder.jpg" alt="Dino Jagić" width={72} height={72}
                    className="w-full h-full object-cover" style={{ objectPosition: "50% 8%" }} />
                </div>
                <div>
                  <div className="text-[16px] font-bold mb-0.5 tracking-tight" style={{ color: C.text }}>Dino Jagić</div>
                  <div className="text-[12px] font-semibold" style={{ color: "#E0A360" }}>Gründer & KI-Architekt</div>
                  <div className="text-[11.5px] mt-0.5" style={{ color: C.muted }}>Stuttgart, Deutschland</div>
                </div>
              </div>

              <div className="p-7 space-y-4 relative">
                {t.about.values.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-[16px]"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.65)",
                      border: `1px solid rgba(${VALUE_RGBS[i]},${isDark ? "0.18" : "0.12"})`,
                    }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-[12px] font-black"
                      style={{ background: `rgba(${VALUE_RGBS[i]},0.14)`, border: `1px solid rgba(${VALUE_RGBS[i]},0.3)`, color: VALUE_COLORS[i] }}>
                      {VALUE_ICONS[i]}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold mb-0.5" style={{ color: C.text }}>{item.label}</div>
                      <div className="text-[12px] leading-[1.6]" style={{ color: C.muted }}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
