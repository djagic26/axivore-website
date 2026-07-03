import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { Portfolio } from "@/components/v2/Portfolio";
import { Results } from "@/components/v2/Results";
import { FinalCTA } from "@/components/v2/FinalCTA";

const PAGE_URL = "https://axivore.io/projekte";

export const metadata: Metadata = {
  title: "Projekte — Live-Systeme & echte Ergebnisse | Axivore",
  description:
    "Unsere eigenen Produkte und Systeme im Live-Betrieb: ContentEngine, LeadPilot, Insight Pulse und mehr. Echte Zahlen statt Versprechen — überprüfbar, jeden Tag.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Projekte — Live-Systeme & echte Ergebnisse | Axivore",
    description:
      "Produkte und Systeme, die Axivore selbst gebaut hat und täglich betreibt — mit echten, überprüfbaren Zahlen.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

export default function ProjektePage() {
  return (
    <PageShell titleKey="portfolio" hero="seo-only">
      <Portfolio />
      <Results />
      <FinalCTA />
    </PageShell>
  );
}
