"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const year = new Date().getFullYear();

  return (
    <footer ref={ref} className="border-t border-white/5 px-6 py-16 bg-[#050507]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3.5 mb-5">
              <svg width="30" height="30" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <circle cx="26" cy="26" r="24" stroke="#4A4866" strokeWidth="1"/>
                <line x1="26" y1="4" x2="26" y2="48" stroke="#A09AFF" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="4" y1="26" x2="48" y2="26" stroke="#A09AFF" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="8.5" y1="8.5" x2="43.5" y2="43.5" stroke="#7B72E8" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="43.5" y1="8.5" x2="8.5" y2="43.5" stroke="#7B72E8" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="26" cy="26" r="4.5" fill="#0C0C0F" stroke="#A09AFF" strokeWidth="1.5"/>
                <circle cx="26" cy="26" r="1.5" fill="#A09AFF"/>
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-medium text-[17px] tracking-[-0.04em]">Axivore</span>
                <span className="text-[#A09AFF] text-[7px] uppercase tracking-[0.22em]">Precision · Disruption · Direction</span>
              </div>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs mt-1">{t.footer.tagline}</p>
            <div className="mt-6">
              <a href="mailto:hello@axivore.io" className="text-white/50 text-sm hover:text-white transition-colors">
                hello@axivore.io
              </a>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white/20 text-xs font-semibold uppercase tracking-widest mb-4">{t.labels.navigation}</h4>
            <ul className="space-y-3">
              {(
                [
                  ["#services", t.footer.links.services],
                  ["#portfolio", t.footer.links.portfolio],
                  ["#process", t.footer.links.process],
                  ["#contact", t.footer.links.contact],
                ] as const
              ).map(([href, label], i) => (
                <motion.li key={href} initial={{ opacity: 0, x: -8 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + i * 0.06 }}>
                  <a href={href} className="text-white/40 text-sm hover:text-white transition-colors">
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white/20 text-xs font-semibold uppercase tracking-widest mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@axivore.io" className="text-white/40 text-sm hover:text-white transition-colors">
                  hello@axivore.io
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/40 text-sm hover:text-white transition-colors">
                  Calendly
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/20 text-xs">© {year} Axivore. {t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 text-xs hover:text-white/50 transition-colors">{t.footer.legal}</a>
            <a href="#" className="text-white/20 text-xs hover:text-white/50 transition-colors">{t.footer.privacy}</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
