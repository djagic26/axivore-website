import { MetadataRoute } from "next";
import { branchen } from "@/lib/branchen";
import { ratgeberArticles } from "@/lib/ratgeber";
import { routing } from "@/i18n/routing";
import { localeHref, type AppLocale } from "@/lib/seo";

// Pages that exist in all 6 languages (see lib/i18n.ts).
const TRANSLATED_PATHS = ["", "/preise", "/ueber-uns", "/projekte", "/kontakt"];

// Deep SEO content translated one market at a time — currently German + Croatian.
const PARTIAL_LOCALES: readonly AppLocale[] = ["de", "hr"];
const LEISTUNGEN_PATHS = ["/leistungen", "/leistungen/ki-automatisierung", "/leistungen/ki-chatbots", "/leistungen/web-apps", "/leistungen/webseiten"];

function languageAlternates(path: string, locales: readonly AppLocale[] = routing.locales) {
  return {
    languages: Object.fromEntries(locales.map((l) => [l, localeHref(l, path)])),
  };
}

function partialEntries(paths: string[], priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], lastModified: Date): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    PARTIAL_LOCALES.map((locale) => ({
      url: localeHref(locale, path),
      lastModified,
      changeFrequency,
      priority,
      alternates: languageAlternates(path, PARTIAL_LOCALES),
    }))
  );
}

// Only indexable pages belong in the sitemap.
// Impressum & Datenschutz are intentionally noindex (legal pages)
// and are deliberately excluded here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const brancheEntries = partialEntries(branchen.map((b) => `/branchen/${b.slug}`), 0.8, "monthly", lastModified);
  const branchenHubEntries = partialEntries(["/branchen"], 0.8, "monthly", lastModified);
  const leistungenEntries = partialEntries(LEISTUNGEN_PATHS, 0.8, "monthly", lastModified);
  const kiAgenturEntries = partialEntries(["/ki-agentur-stuttgart"], 0.9, "monthly", lastModified);
  const ratgeberHubEntries = partialEntries(["/ratgeber"], 0.7, "weekly", lastModified);
  const ratgeberArticleEntries = ratgeberArticles.flatMap((a) =>
    PARTIAL_LOCALES.map((locale) => ({
      url: localeHref(locale, `/ratgeber/${a.slug}`),
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: languageAlternates(`/ratgeber/${a.slug}`, PARTIAL_LOCALES),
    }))
  );

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
    ...kiAgenturEntries,
    ...branchenHubEntries,
    ...brancheEntries,
    ...leistungenEntries,
    ...ratgeberHubEntries,
    ...ratgeberArticleEntries,
  ];
}
