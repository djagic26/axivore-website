import { MetadataRoute } from "next";
import { branchen } from "@/lib/branchen";
import { ratgeberArticles } from "@/lib/ratgeber";
import { routing } from "@/i18n/routing";
import { localeHref } from "@/lib/seo";

const SITE_URL = "https://axivore.io";

// Pages that exist in all 6 languages (see lib/i18n.ts) — every other page
// (branchen, leistungen, ratgeber, ki-agentur-stuttgart) is still German-only
// content, so it stays a single German URL in the sitemap for now.
const TRANSLATED_PATHS = ["", "/preise", "/ueber-uns", "/projekte", "/kontakt"];

function languageAlternates(path: string) {
  return {
    languages: Object.fromEntries(routing.locales.map((l) => [l, localeHref(l, path)])),
  };
}

// Only indexable pages belong in the sitemap.
// Impressum & Datenschutz are intentionally noindex (legal pages)
// and are deliberately excluded here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const brancheEntries: MetadataRoute.Sitemap = branchen.map((b) => ({
    url: `${SITE_URL}/branchen/${b.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const translatedEntries: MetadataRoute.Sitemap = TRANSLATED_PATHS.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localeHref(locale, path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: languageAlternates(path),
    }))
  );

  return [
    ...translatedEntries,
    {
      url: `${SITE_URL}/ki-agentur-stuttgart`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/branchen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...brancheEntries,
    {
      url: `${SITE_URL}/leistungen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/leistungen/ki-automatisierung`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/leistungen/ki-chatbots`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/leistungen/webseiten`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/leistungen/web-apps`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/ratgeber`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...ratgeberArticles.map((a) => ({
      url: `${SITE_URL}/ratgeber/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
