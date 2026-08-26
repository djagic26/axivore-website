"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/ConsentContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const { consent } = useConsent();
  const pathname = usePathname();
  const isFirstPageview = useRef(true);

  useEffect(() => {
    if (!GA_ID || consent !== "accepted" || !window.gtag) return;
    // The initial config call (below) already sends the first page_view —
    // only track subsequent client-side route changes here.
    if (isFirstPageview.current) {
      isFirstPageview.current = false;
      return;
    }
    window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname, consent]);

  if (!GA_ID || consent !== "accepted") return null;

  return (
    // window.gtag is defined globally in app/[locale]/layout.tsx (Consent Mode default
    // runs there before this ever mounts) — this just points it at our GA4 property.
    // Init runs via onLoad (real JS in this component's own bundle) instead of a
    // separate inline <script>, so CSP script-src can drop 'unsafe-inline'.
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
      onLoad={() => {
        window.gtag?.("js", new Date());
        window.gtag?.("config", GA_ID, { anonymize_ip: true });
      }}
    />
  );
}
