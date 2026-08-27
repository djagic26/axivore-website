"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useConsent } from "@/lib/ConsentContext";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Same bootstrap Meta's own snippet uses, just as a real function instead of
// an inline <script> string — keeps CSP script-src free of 'unsafe-inline'.
// Defines window.fbq as a queueing stub, then loads the real fbevents.js.
// Only ever called once consent is already "accepted" (see below) — the
// pixel never loads at all pre-consent, so no revoke-before-init dance is
// needed here.
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
        window.fbq?.("track", "PageView");
        return;
      }
      // Re-accepting after an earlier decline/reset in this session: undo
      // the revoke below so tracking actually resumes.
      window.fbq?.("consent", "grant");
      window.fbq?.("track", "PageView");
      return;
    }

    // Not accepted (declined, or reset back to undecided). If the pixel
    // was never loaded (visitor never accepted this session), window.fbq
    // is undefined and this is a safe no-op. If it WAS loaded (visitor
    // accepted earlier, then declined/reset), fbevents.js is already fully
    // initialized at this point — calling consent "revoke" on a live SDK
    // instance is the documented, well-behaved case (unlike revoking
    // before init, which this file used to do and which silently broke
    // the accept path — confirmed live on production, see git history).
    // This stops fbevents.js's own automatic event tracking
    // (SubscribedButtonClick on every button/link click, Advanced
    // Matching), which gating our own trackLead/trackScheduleClick calls
    // (lib/trackConversion.ts) cannot reach:
    // https://developers.facebook.com/docs/meta-pixel/implementation/gdpr
    if (initialized.current) {
      window.fbq?.("consent", "revoke");
    }
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
