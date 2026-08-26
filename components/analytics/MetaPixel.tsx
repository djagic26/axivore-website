"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/ConsentContext";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Same bootstrap Meta's own snippet uses, just as a real function instead of
// an inline <script> string — keeps CSP script-src free of 'unsafe-inline'.
// Defines window.fbq as a queueing stub, then loads the real fbevents.js.
function loadFacebookPixel() {
  if (window.fbq) return;
  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  }) as NonNullable<Window["fbq"]>;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.getElementsByTagName("script")[0]?.parentNode?.insertBefore(script, document.getElementsByTagName("script")[0]);
}

export function MetaPixel() {
  const { consent } = useConsent();
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (!PIXEL_ID || consent !== "accepted") return;

    if (!initialized.current) {
      initialized.current = true;
      loadFacebookPixel();
      window.fbq?.("init", PIXEL_ID);
      window.fbq?.("track", "PageView");
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname, consent]);

  if (!PIXEL_ID || consent !== "accepted") return null;

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
