"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/ConsentContext";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const { consent } = useConsent();
  const pathname = usePathname();
  // True only once the config call below has actually run. Was previously
  // a "isFirstPageview" ref flipped by the effect's own first run — that
  // raced with the async script load: a fast client-side navigation before
  // gtag.js finished loading pushed an "event" page_view into the
  // dataLayer BEFORE "config" had ever run for this GA_ID, which GA4 has
  // nothing to attach it to. Now gated on the same signal the script's
  // own load uses, so our own page_view call literally cannot fire before
  // config has.
  const isConfigured = useRef(false);

  useEffect(() => {
    if (!GA_ID || consent !== "accepted" || !isConfigured.current) return;
    window.gtag?.("event", "page_view", { page_path: pathname });
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
        // Sends the pageview for whatever path is current at this exact
        // moment (config's automatic page_view reads location.href live),
        // so it's correct even if navigation happened while the script
        // was still loading.
        window.gtag?.("config", GA_ID, { anonymize_ip: true });
        isConfigured.current = true;
      }}
    />
  );
}
