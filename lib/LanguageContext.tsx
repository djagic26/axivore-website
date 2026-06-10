"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, TranslationKeys } from "./i18n";

const VALID_LANGS: Language[] = ["de", "en", "hr", "ro", "tr", "it"];

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

  useEffect(() => {
    const stored = localStorage.getItem("axivore-lang") as Language;
    if (stored && VALID_LANGS.includes(stored)) {
      setLanguageState(stored);
    } else {
      setLanguageState(detectBrowserLanguage());
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
