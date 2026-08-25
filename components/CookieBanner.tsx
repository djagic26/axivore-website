"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useConsent } from "@/lib/ConsentContext";

const ACCENT = "#C97C3C";

// Fixed positioning means this can never cause CLS on other content —
// learned the hard way from ChatWidget's flex-col mount, see project memory.
function localePath(locale: string, path: string): string {
  return locale === "de" ? path : `/${locale}${path}`;
}

export function CookieBanner() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const { consent, accept, decline } = useConsent();
  const isDark = theme === "dark";
  const [delayElapsed, setDelayElapsed] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDelayElapsed(true), 1200);
    return () => clearTimeout(id);
  }, []);

  if (!delayElapsed || consent !== null) return null;

  const bg = isDark ? "rgba(18,13,8,0.97)" : "rgba(255,255,255,0.97)";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(201,124,60,0.18)";
  const text = isDark ? "rgba(255,255,255,0.78)" : "rgba(16,13,9,0.75)";
  const declineText = isDark ? "rgba(255,255,255,0.85)" : "rgba(16,13,9,0.8)";
  const declineBorder = isDark ? "rgba(255,255,255,0.18)" : "rgba(16,13,9,0.18)";

  return (
    <div
      role="region"
      aria-label={t.cookieBanner.ariaLabel}
      style={{
        position: "fixed",
        left: "1rem",
        right: "1rem",
        bottom: "1rem",
        zIndex: 60,
        maxWidth: "40rem",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "0.85rem",
        padding: "1rem 1.25rem",
        borderRadius: "1rem",
        background: bg,
        border: `1px solid ${border}`,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 16px 44px rgba(0,0,0,0.28)",
        animation: "cookie-banner-in 0.4s ease-out",
      }}
    >
      <style>{`
        @keyframes cookie-banner-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <p style={{ flex: "1 1 16rem", margin: 0, fontSize: "0.85rem", lineHeight: 1.5, color: text }}>
        {t.cookieBanner.text}{" "}
        <Link
          href={localePath(language, "/datenschutz")}
          style={{ color: ACCENT, textDecoration: "underline", textUnderlineOffset: "2px" }}
        >
          {t.cookieBanner.linkText}
        </Link>
      </p>
      <div style={{ display: "flex", gap: "0.6rem", flexShrink: 0 }}>
        <button
          type="button"
          onClick={decline}
          style={{
            padding: "0.6rem 1.1rem",
            borderRadius: "999px",
            border: `1px solid ${declineBorder}`,
            background: "transparent",
            color: declineText,
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {t.cookieBanner.decline}
        </button>
        <button
          type="button"
          onClick={accept}
          style={{
            padding: "0.6rem 1.35rem",
            borderRadius: "999px",
            border: "none",
            background: ACCENT,
            color: "#fff",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {t.cookieBanner.accept}
        </button>
      </div>
    </div>
  );
}
