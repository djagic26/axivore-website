"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  ConsentStatus,
  getStoredConsent,
  setStoredConsent,
  clearStoredConsent,
  CONSENT_STORAGE_KEY,
} from "./consent";

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

    // Cross-tab sync: the native "storage" event fires in every OTHER tab
    // when localStorage changes here (never the tab that made the change —
    // that one already updated synchronously in accept/decline/reset).
    // Without this, a tab left open before a decline/reset happens in
    // another tab keeps its stale "accepted" Context value, so MetaPixel/
    // GoogleAnalytics (both gated on this Context, not a live localStorage
    // read) keep sending page-view events in that stale tab.
    function handleStorage(e: StorageEvent) {
      if (e.key !== CONSENT_STORAGE_KEY) return;
      const next = getStoredConsent();
      setConsent(next);
      window.gtag?.("consent", "update", {
        ad_storage: next === "accepted" ? "granted" : "denied",
        analytics_storage: next === "accepted" ? "granted" : "denied",
        ad_user_data: next === "accepted" ? "granted" : "denied",
        ad_personalization: next === "accepted" ? "granted" : "denied",
      });
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
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
    // Revert Google to the denied default too — otherwise a prior
    // "accepted" consent stays granted on Google's side until the visitor
    // explicitly declines again, even though the banner is showing fresh.
    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
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
