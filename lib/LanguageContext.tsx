"use client";

import { createContext, useContext, useState, useEffect, useLayoutEffect, ReactNode } from "react";
import { Language, translations, TranslationKeys } from "./i18n";

const VALID_LANGS: Language[] = ["de", "en", "hr", "ro", "tr", "it"];

// useLayoutEffect fires before the browser paints, so the language swap below
// happens before the user sees a frame — useEffect would let a German frame
// paint first for every non-German visitor. Falls back to useEffect on the
// server where useLayoutEffect is a no-op (and would otherwise warn).
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function detectBrowserLanguage(): Language {
  const browserLang = navigator.language?.split("-")[0];
  return VALID_LANGS.includes(browserLang as Language) ? (browserLang as Language) : "de";
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useIsomorphicLayoutEffect(() => {
    const stored = localStorage.getItem("axivore-lang") as Language;
    if (stored && VALID_LANGS.includes(stored)) {
      setLanguageState(stored);
    } else {
      const detected = detectBrowserLanguage();
      setLanguageState(detected);
      localStorage.setItem("axivore-lang", detected);
      document.cookie = `axivore-lang=${detected}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, []);

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    localStorage.setItem("axivore-lang", lang);
    document.cookie = `axivore-lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
