"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { Language } from "@/lib/i18n";
import { AxivoreLogo } from "./AxivoreLogo";

// German has no URL prefix; every other language keeps its /xx prefix so
// footer links stay in the visitor's language instead of dropping them
// back into German chrome.
function localePath(locale: string, path: string): string {
  if (locale === "de") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

// Sub-navigation labels not covered by the shared nav.* translations.
const FOOTER_EXTRA: Record<Language, { automation: string; chatbots: string; agency: string; ratgeber: string }> = {
  de: { automation: "KI-Automatisierung", chatbots: "KI-Chatbots", agency: "KI-Agentur Stuttgart", ratgeber: "Ratgeber" },
  en: { automation: "AI Automation", chatbots: "AI Chatbots", agency: "AI Agency Stuttgart", ratgeber: "Guide" },
  hr: { automation: "AI automatizacija", chatbots: "AI chatbotovi", agency: "AI agencija Stuttgart", ratgeber: "Vodič" },
  ro: { automation: "Automatizare AI", chatbots: "Chatbot-uri AI", agency: "Agenție AI Stuttgart", ratgeber: "Ghid" },
  tr: { automation: "AI Otomasyonu", chatbots: "AI Chatbotlar", agency: "Stuttgart AI Ajansı", ratgeber: "Rehber" },
  it: { automation: "Automazione AI", chatbots: "Chatbot AI", agency: "Agenzia AI Stoccarda", ratgeber: "Guida" },
};

export function Footer() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const bg = isDark ? "#050505" : "#ffffff";
  // 0.3/0.35 failed WCAG AA contrast (2.52:1 vs required 4.5:1, flagged by
  // Lighthouse a11y audit on the small footer text/links) — bumped to clear it.
  const textColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.6)";
  const borderColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)";
  const hover = (e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) => {
    e.currentTarget.style.color = enter ? (isDark ? "#ffffff" : "#0a0a0f") : textColor;
  };

  const fx = FOOTER_EXTRA[language] ?? FOOTER_EXTRA.de;

  const serviceLinks = [
    { label: t.nav.services, href: localePath(language, "/leistungen") },
    { label: fx.automation, href: localePath(language, "/leistungen/ki-automatisierung") },
    { label: fx.chatbots, href: localePath(language, "/leistungen/ki-chatbots") },
    { label: fx.agency, href: localePath(language, "/ki-agentur-stuttgart") },
  ];

  const companyLinks = [
    { label: t.nav.branchen, href: localePath(language, "/branchen") },
    { label: t.nav.portfolio, href: localePath(language, "/projekte") },
    { label: t.nav.pricing, href: localePath(language, "/preise") },
    { label: t.nav.about, href: localePath(language, "/ueber-uns") },
    { label: fx.ratgeber, href: localePath(language, "/ratgeber") },
    { label: t.nav.contact, href: localePath(language, "/kontakt") },
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
                <div className="text-[7px] uppercase tracking-[0.22em]" style={{ color: "#E0A360" }}>Precision · Disruption · Direction</div>
              </div>
            </div>
            <p className="text-[12.5px] leading-[1.65] max-w-[220px]" style={{ color: textColor }}>
              {t.footer.description}
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] font-semibold mb-4" style={{ color: "#E0A360" }}>{t.nav.services}</p>
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
            <p className="text-[9px] uppercase tracking-[0.24em] font-semibold mb-4" style={{ color: "#E0A360" }}>{t.labels.navigation}</p>
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
            <p className="text-[9px] uppercase tracking-[0.24em] font-semibold mb-4" style={{ color: "#E0A360" }}>Kontakt</p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:hello@axivore.io" className="text-[13px] transition-colors duration-150 w-fit"
                style={{ color: textColor }}
                onMouseEnter={e => hover(e, true)} onMouseLeave={e => hover(e, false)}>
                hello@axivore.io
              </a>
              <a href="https://calendly.com/hello-axivore/kostenloses-gesprach"
                target="_blank" rel="noopener noreferrer"
                className="text-[13px] transition-colors duration-150 w-fit"
                style={{ color: "#E0A360" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#C97C3C"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#E0A360"; }}>
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
                      (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,124,60,0.14)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,124,60,0.35)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#E0A360";
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
