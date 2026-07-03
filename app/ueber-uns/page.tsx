import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { UeberUns } from "@/components/v2/UeberUns";
import { Process } from "@/components/v2/Process";
import { FinalCTA } from "@/components/v2/FinalCTA";

const PAGE_URL = "https://axivore.io/ueber-uns";

export const metadata: Metadata = {
  title: "Über uns — Das KI-Studio aus Stuttgart | Axivore",
  description:
    "Axivore ist ein KI-Studio aus Stuttgart. Wir bauen Automatisierungen, Chatbots und Software, die wir selbst täglich nutzen — persönlich, ehrlich und ohne Agentur-Blabla.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Über uns — Das KI-Studio aus Stuttgart | Axivore",
    description:
      "Wer hinter Axivore steht, wie wir arbeiten und warum kleine Unternehmen mit uns schneller ans Ziel kommen.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

export default function UeberUnsPage() {
  return (
    <PageShell titleKey="about" hero="seo-only">
      <UeberUns />
      <Process />
      <FinalCTA />
    </PageShell>
  );
}
