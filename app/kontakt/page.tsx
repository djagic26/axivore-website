import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { KontaktInfo } from "@/components/v2/KontaktInfo";
import { FinalCTA } from "@/components/v2/FinalCTA";

const PAGE_URL = "https://axivore.io/kontakt";

export const metadata: Metadata = {
  title: "Kontakt — Sprich mit uns | Axivore",
  description:
    "Kontaktiere Axivore: per Formular, E-Mail (hello@axivore.io) oder direkt im Kalender. Antwort innerhalb von 24 Stunden — KI-Automatisierung aus Stuttgart.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Kontakt — Sprich mit uns | Axivore",
    description:
      "Per Formular, E-Mail oder direkt im Kalender — Antwort innerhalb von 24 Stunden.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${PAGE_URL}/#contactpage`,
  url: PAGE_URL,
  name: "Kontakt — Axivore",
  about: { "@id": "https://axivore.io/#organization" },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <PageShell titleKey="contact">
        <KontaktInfo />
        <FinalCTA />
      </PageShell>
    </>
  );
}
