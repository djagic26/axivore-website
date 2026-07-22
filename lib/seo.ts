import type { Metadata } from "next";
import { routing, type AppLocale } from "@/i18n/routing";

export type { AppLocale };

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

/** Same as localeHref but relative (for <Link href>), no domain. */
export function localePathname(locale: AppLocale, path: string = ""): string {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return path === "" ? prefix || "/" : `${prefix}${path}`;
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

/**
 * For pages that are only translated into SOME locales so far (deep SEO
 * content like /branchen, /leistungen, /ratgeber — translated one market at
 * a time). `available` lists which locales actually have real content;
 * any other locale falls back to rendering the default-locale (German)
 * content, and its canonical points back at the German URL so Google never
 * sees the same German text as "duplicate content" under two URLs.
 */
export function resolveContentLocale(raw: string, available: readonly AppLocale[]): AppLocale {
  return available.includes(raw as AppLocale) ? (raw as AppLocale) : routing.defaultLocale;
}

export function partialPageMetadata(
  contentLocale: AppLocale,
  path: string,
  copy: Partial<LocaleCopy>,
  available: readonly AppLocale[]
): Metadata {
  const { title, description } = copy[contentLocale]!;

  return {
    title,
    description,
    alternates: {
      canonical: localeHref(contentLocale, path),
      languages: {
        ...Object.fromEntries(available.map((l) => [l, localeHref(l, path)])),
        "x-default": localeHref(routing.defaultLocale, path),
      },
    },
    openGraph: {
      title,
      description,
      url: localeHref(contentLocale, path),
      siteName: "Axivore",
      locale: OG_LOCALE[contentLocale],
      alternateLocale: available.filter((l) => l !== contentLocale).map((l) => OG_LOCALE[l]),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
