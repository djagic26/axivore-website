import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { Pricing } from "@/components/v2/Pricing";
import { FAQ } from "@/components/v2/FAQ";
import { FinalCTA } from "@/components/v2/FinalCTA";

const PAGE_URL = "https://axivore.io/preise";

export const metadata: Metadata = {
  title: "Preise — KI-Automatisierung zum Festpreis | Axivore",
  description:
    "Transparente Festpreise für KI-Automatisierung, Chatbots und individuelle Software. Schriftliches Angebot in 48 Stunden, keine versteckten Kosten — ab 499 €.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Preise — KI-Automatisierung zum Festpreis | Axivore",
    description:
      "Transparente Festpreise für KI-Automatisierung, Chatbots und Software. Angebot in 48 h, keine versteckten Kosten.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

export default function PreisePage() {
  return (
    <PageShell titleKey="pricing" hero="seo-only">
      <Pricing />
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
}
