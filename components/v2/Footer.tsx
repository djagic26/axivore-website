"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { AxivoreLogo } from "./AxivoreLogo";

export function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  const textColor = isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)";
  const borderColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const hover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
    e.currentTarget.style.color = enter ? (isDark ? "#ffffff" : "#0a0a0f") : textColor;
  };

  const serviceLinks = [
    { label: t.nav.services, href: "/leistungen" },
    { label: "KI-Automatisierung", href: "/leistungen/ki-automatisierung" },
    { label: "KI-Chatbots", href: "/leistungen/ki-chatbots" },
    { label: "KI-Agentur Stuttgart", href: "/ki-agentur-stuttgart" },
  ];

  const companyLinks = [
    { label: t.nav.branchen, href: "/branchen" },
    { label: t.nav.portfolio, href: "/projekte" },
    { label: t.nav.pricing, href: "/preise" },
    { label: t.nav.about, href: "/ueber-uns" },
    { label: t.nav.contact, href: "/kontakt" },
  ];

  return (
    <footer style={{ background: bg, borderTop: `1px solid ${borderColor}` }}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AxivoreLogo />
              <div>
                <div className="font-semibold text-[16px] tracking-[-0.03em]" style={{ color: isDark ? "#fff" : "#0a0a0f" }}>Axivore</div>
                <div className="text-[7px] uppercase tracking-[0.22em]" style={{ color: "#A09AFF" }}>Precision · Disruption · Direction</div>
              </div>
            </div>
            <p className="text-[12.5px] leading-[1.65] max-w-[220px]" style={{ color: textColor }}>
              {t.footer.description}
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] font-semibold mb-4" style={{ color: "#A09AFF" }}>{t.nav.services}</p>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map(({ label, href }) => (
                <Link key={href} href={href} className="text-[13px] transition-colors duration-150 w-fit"
                  style={{ color: textColor }}
                  onMouseEnter={e => hover(e, true)} onMouseLeave={e => hover(e, false)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] font-semibold mb-4" style={{ color: "#A09AFF" }}>{t.labels.navigation}</p>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map(({ label, href }) => (
                <Link key={href} href={href} className="text-[13px] transition-colors duration-150 w-fit"
                  style={{ color: textColor }}
                  onMouseEnter={e => hover(e, true)} onMouseLeave={e => hover(e, false)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] font-semibold mb-4" style={{ color: "#A09AFF" }}>Kontakt</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@axivore.io" className="text-[13px] transition-colors duration-150 w-fit"
                style={{ color: textColor }}
                onMouseEnter={e => hover(e, true)} onMouseLeave={e => hover(e, false)}>
                hello@axivore.io
              </a>
              <a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
                target="_blank" rel="noopener noreferrer"
                className="text-[13px] transition-colors duration-150 w-fit"
                style={{ color: "#A09AFF" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#7C5CFF"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#A09AFF"; }}>
                Kostenloses Gespräch →
              </a>
              <p className="text-[12px] mt-1" style={{ color: textColor }}>Stuttgart, Deutschland</p>
              <div className="flex items-center gap-2 mt-2">
                {[
                  {
                    href: "https://www.instagram.com/axivore.io/",
                    label: "Instagram",
                    icon: (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                        <circle cx="12" cy="12" r="4.5"/>
                        <circle cx="17.5" cy="6.5" r="0.7" fill="currentColor" stroke="none"/>
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/company/118684148/",
                    label: "LinkedIn",
                    icon: (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="4"/>
                        <line x1="8" y1="11" x2="8" y2="16"/>
                        <line x1="8" y1="7.5" x2="8" y2="8.5"/>
                        <path d="M12 16v-5m0 0a3 3 0 016 0v5"/>
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.facebook.com/profile.php?id=61589879489067",
                    label: "Facebook",
                    icon: (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                      </svg>
                    ),
                  },
                ].map(({ href, label, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)"}`,
                      color: textColor,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,92,255,0.14)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,92,255,0.35)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#A09AFF";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = isDark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.08)";
                      (e.currentTarget as HTMLAnchorElement).style.color = textColor;
                    }}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 flex items-center justify-between flex-wrap gap-4"
          style={{ borderTop: `1px solid ${borderColor}` }}>
          <span className="text-[11.5px]" style={{ color: textColor }}>
            © 2026 Axivore. {t.footer.copyright}
          </span>
          <div className="flex gap-5">
            <a href="/impressum" className="text-[11.5px] transition-colors duration-150" style={{ color: textColor }}
              onMouseEnter={e => hover(e, true)} onMouseLeave={e => hover(e, false)}>
              {t.footer.legal}
            </a>
            <a href="/datenschutz" className="text-[11.5px] transition-colors duration-150" style={{ color: textColor }}
              onMouseEnter={e => hover(e, true)} onMouseLeave={e => hover(e, false)}>
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
