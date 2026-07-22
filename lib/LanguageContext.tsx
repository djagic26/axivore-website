"use client";

import { createContext, useContext, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Language, translations, TranslationKeys } from "./i18n";
import { routing } from "@/i18n/routing";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

// Strips a leading /en, /hr, /ro, /tr, /it segment (if present) so the
// remaining path can be re-prefixed with the target locale.
function stripLocalePrefix(pathname: string): string {
  const match = pathname.match(/^\/(en|hr|ro|tr|it)(\/.*)?$/);
  return match ? match[2] ?? "/" : pathname;
}

// Locale now lives in the URL (set server-side by app/[locale]/layout.tsx),
// not in localStorage/cookies — this is what makes each language its own
// real, indexable, hreflang-able page instead of one page that reflows
// client-side after mount.
export function LanguageProvider({ locale, children }: { locale: Language; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";

  function setLanguage(lang: Language) {
    const bare = stripLocalePrefix(pathname);
    const prefix = lang === routing.defaultLocale ? "" : `/${lang}`;
    router.push(`${prefix}${bare}`);
  }

  return (
    <LanguageContext.Provider value={{ language: locale, setLanguage, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
