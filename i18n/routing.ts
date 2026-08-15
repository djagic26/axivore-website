import { defineRouting } from "next-intl/routing";

// German has no URL prefix (matches all existing indexed URLs, zero SEO
// disruption). The other 5 languages get a real prefix so each is its own
// crawlable, hreflang-able URL instead of one page that silently reflows
// client-side based on a cookie.
export const routing = defineRouting({
  locales: ["de", "en", "hr", "ro", "tr", "it"],
  defaultLocale: "de",
  localePrefix: "as-needed",
  // Root "/" must always serve German — the target market. Browser
  // Accept-Language detection would otherwise redirect German business
  // owners with a non-de browser locale away from the German homepage.
  localeDetection: false,
});

export type AppLocale = (typeof routing.locales)[number];
