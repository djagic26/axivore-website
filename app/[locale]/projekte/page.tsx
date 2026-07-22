import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { Portfolio } from "@/components/v2/Portfolio";
import { Results } from "@/components/v2/Results";
import { FinalCTA } from "@/components/v2/FinalCTA";
import { resolveLocale, pageMetadata, type LocaleCopy } from "@/lib/seo";

const PATH = "/projekte";

const META: LocaleCopy = {
  de: {
    title: "Projekte — Live-Systeme & echte Ergebnisse | Axivore",
    description:
      "Unsere eigenen Produkte und Systeme im Live-Betrieb: ContentEngine, LeadPilot, Insight Pulse und mehr. Echte Zahlen statt Versprechen — überprüfbar, jeden Tag.",
  },
  en: {
    title: "Projects — Live systems & real results | Axivore",
    description:
      "Our own products and systems, live in production: ContentEngine, LeadPilot, Insight Pulse and more. Real numbers, not promises — verifiable every day.",
  },
  hr: {
    title: "Projekti — Live sustavi i stvarni rezultati | Axivore",
    description:
      "Naši vlastiti proizvodi i sustavi u live pogonu: ContentEngine, LeadPilot, Insight Pulse i drugi. Stvarni brojevi umjesto obećanja — provjerljivo, svaki dan.",
  },
  ro: {
    title: "Proiecte — Sisteme live și rezultate reale | Axivore",
    description:
      "Produsele și sistemele noastre proprii, live în producție: ContentEngine, LeadPilot, Insight Pulse și altele. Cifre reale, nu promisiuni — verificabile zilnic.",
  },
  tr: {
    title: "Projeler — Canlı Sistemler ve Gerçek Sonuçlar | Axivore",
    description:
      "Kendi ürünlerimiz ve canlı çalışan sistemlerimiz: ContentEngine, LeadPilot, Insight Pulse ve daha fazlası. Vaat değil, her gün doğrulanabilir gerçek rakamlar.",
  },
  it: {
    title: "Progetti — Sistemi live e risultati reali | Axivore",
    description:
      "I nostri prodotti e sistemi, live in produzione: ContentEngine, LeadPilot, Insight Pulse e altro. Numeri reali, non promesse — verificabili ogni giorno.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  return pageMetadata(resolveLocale(rawLocale), PATH, META);
}

export default function ProjektePage() {
  return (
    <PageShell titleKey="portfolio" hero="seo-only">
      <Portfolio />
      <Results />
      <FinalCTA />
    </PageShell>
  );
}
