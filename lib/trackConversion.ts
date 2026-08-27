// Fires the standard GA4 + Meta conversion events so Google/Meta Ads have
// event history to optimize against from day one of any future campaign —
// waiting until ads launch to add these loses weeks of learning data.
// gtag is always safe to call: Google Consent Mode v2 (default denied in
// app/[locale]/layout.tsx) makes it a no-op/cookieless ping until the
// visitor accepts. Meta Pixel has no equivalent consent-aware mode — once
// loadFacebookPixel() has run once (see MetaPixel.tsx), window.fbq stays
// defined for the rest of the session, so it must be explicitly gated here
// on every call, not just at pixel-load time. Otherwise a visitor who
// accepts, then later declines or resets consent, keeps sending Lead/
// Schedule events to Meta on every subsequent action.
import { getStoredConsent } from "./consent";

export function trackLead(): void {
  window.gtag?.("event", "generate_lead");
  if (getStoredConsent() === "accepted") {
    window.fbq?.("track", "Lead");
  }
}

export function trackScheduleClick(): void {
  window.gtag?.("event", "schedule_click");
  if (getStoredConsent() === "accepted") {
    window.fbq?.("track", "Schedule");
  }
}
