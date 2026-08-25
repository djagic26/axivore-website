"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

const STORAGE_KEY = "axivore-cookie-consent";
const ACCENT = "#C97C3C";

// Fixed positioning means this can never cause CLS on other content —
// learned the hard way from ChatWidget's flex-col mount, see project memory.
function localePath(locale: string, path: string): string {
  return locale === "de" ? path : `/${locale}${path}`;
}

export function CookieBanner() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(id);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  const bg = isDark ? "rgba(18,13,8,0.97)" : "rgba(255,255,255,0.97)";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(201,124,60,0.18)";
  const text = isDark ? "rgba(255,255,255,0.78)" : "rgba(16,13,9,0.75)";

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
        maxWidth: "38rem",
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
      <button
        type="button"
        onClick={accept}
        style={{
          flexShrink: 0,
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
  );
}
