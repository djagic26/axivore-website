"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ConsentStatus, getStoredConsent, setStoredConsent, clearStoredConsent } from "./consent";

interface ConsentContextType {
  // null = visitor hasn't decided yet (banner should show)
  consent: ConsentStatus | null;
  accept: () => void;
  decline: () => void;
  reset: () => void;
}

const ConsentContext = createContext<ConsentContextType | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentStatus | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
  }, []);

  function accept() {
    setStoredConsent("accepted");
    setConsent("accepted");
    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
  }

  function decline() {
    setStoredConsent("declined");
    setConsent("declined");
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }

  function reset() {
    clearStoredConsent();
    setConsent(null);
  }

  return (
    <ConsentContext.Provider value={{ consent, accept, decline, reset }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
