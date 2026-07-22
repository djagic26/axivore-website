import type { Metadata } from "next";
import { routing, type AppLocale } from "@/i18n/routing";

export const SITE_URL = "https://axivore.io";

export const OG_LOCALE: Record<AppLocale, string> = {
  de: "de_DE",
  en: "en_US",
  hr: "hr_HR",
  ro: "ro_RO",
  tr: "tr_TR",
  it: "it_IT",
};

export function resolveLocale(raw: string): AppLocale {
  return (routing.locales as readonly string[]).includes(raw) ? (raw as AppLocale) : routing.defaultLocale;
}

export function localeHref(locale: AppLocale, path: string = ""): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

export type LocaleCopy = Record<AppLocale, { title: string; description: string }>;

/**
 * Builds title/description/canonical/hreflang/OG/Twitter metadata for a page
 * that has a translated title+description per locale. `path` is the
 * locale-agnostic path (e.g. "/preise", "" for home).
 */
export function pageMetadata(locale: AppLocale, path: string, copy: LocaleCopy): Metadata {
  const { title, description } = copy[locale];

  return {
    title,
    description,
    alternates: {
      canonical: localeHref(locale, path),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, localeHref(l as AppLocale, path)])),
        "x-default": localeHref(routing.defaultLocale, path),
      },
    },
    openGraph: {
      title,
      description,
      url: localeHref(locale, path),
      siteName: "Axivore",
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l as AppLocale]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
