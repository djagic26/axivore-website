"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/ConsentContext";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

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
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
