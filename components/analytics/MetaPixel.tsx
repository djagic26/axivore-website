"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/ConsentContext";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Same bootstrap Meta's own snippet uses, just as a real function instead of
// an inline <script> string — keeps CSP script-src free of 'unsafe-inline'.
// Defines window.fbq as a queueing stub, then loads the real fbevents.js.
//
// Calls consent "revoke" before "init": fbevents.js has its own automatic
// event tracking (SubscribedButtonClick on every button/link click,
// Advanced Matching) that runs independently of any fbq('track', ...) call
// we make ourselves — gating our own trackLead/trackScheduleClick calls
// (see lib/trackConversion.ts) does NOT stop it. Meta's documented
// "consent" API is the only thing that actually silences the SDK itself:
// https://developers.facebook.com/docs/meta-pixel/implementation/gdpr
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

  fbq("consent", "revoke");
  fbq("init", PIXEL_ID);
}

export function MetaPixel() {
  const { consent } = useConsent();
  const pathname = usePathname();
  const initialized = useRef(false);

  useEffect(() => {
    if (!PIXEL_ID) return;

    if (consent === "accepted") {
      if (!initialized.current) {
        initialized.current = true;
        loadFacebookPixel();
      }
      window.fbq?.("consent", "grant");
      window.fbq?.("track", "PageView");
      return;
    }

    // Not accepted (declined, or reset back to undecided): explicitly
    // revoke so the SDK's own automatic click/PageView tracking stops
    // too, not just our own explicit calls. Safe no-op if fbq was never
    // loaded (never accepted this session) — window.fbq is undefined.
    window.fbq?.("consent", "revoke");
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
