"use client";

import { useEffect } from "react";
import { trackScheduleClick } from "@/lib/trackConversion";

// Event delegation instead of an onClick per <a> — the Calendly link is
// repeated across Nav, Hero, Pricing, Footer, FinalCTA and more; this
// tracks all of them (present and future) from one place.
export function CalendlyClickTracking() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest('a[href*="calendly.com"]')) {
        trackScheduleClick();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
