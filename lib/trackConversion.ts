// Fires the standard GA4 + Meta conversion events so Google/Meta Ads have
// event history to optimize against from day one of any future campaign —
// waiting until ads launch to add these loses weeks of learning data.
// Both calls are safe pre-consent: gtag queues harmlessly (see Consent Mode
// default in app/[locale]/layout.tsx), fbq simply doesn't exist yet.

export function trackLead(): void {
  window.gtag?.("event", "generate_lead");
  window.fbq?.("track", "Lead");
}

export function trackScheduleClick(): void {
  window.gtag?.("event", "schedule_click");
  window.fbq?.("track", "Schedule");
}
