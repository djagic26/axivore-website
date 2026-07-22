import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { Pricing } from "@/components/v2/Pricing";
import { FAQ } from "@/components/v2/FAQ";
import { FinalCTA } from "@/components/v2/FinalCTA";
import { resolveLocale, pageMetadata, type LocaleCopy } from "@/lib/seo";

const PATH = "/preise";

const META: LocaleCopy = {
  de: {
    title: "Preise — KI-Automatisierung zum Festpreis | Axivore",
    description:
      "Transparente Festpreise für KI-Automatisierung, Chatbots und individuelle Software. Schriftliches Angebot in 48 Stunden, keine versteckten Kosten — ab 499 €.",
  },
  en: {
    title: "Pricing — Fixed-Price AI Automation | Axivore",
    description:
      "Transparent fixed prices for AI automation, chatbots and custom software. Written quote in 48 hours, no hidden costs — from €499.",
  },
  hr: {
    title: "Cijene — AI automatizacija po fiksnoj cijeni | Axivore",
    description:
      "Transparentne fiksne cijene za AI automatizaciju, chatbotove i prilagođeni softver. Pisana ponuda u 48 sati, bez skrivenih troškova — od 499 €.",
  },
  ro: {
    title: "Prețuri — Automatizare AI la preț fix | Axivore",
    description:
      "Prețuri fixe și transparente pentru automatizare AI, chatboți și software personalizat. Ofertă scrisă în 48 de ore, fără costuri ascunse — de la 499 €.",
  },
  tr: {
    title: "Fiyatlar — Sabit Fiyatlı Yapay Zeka Otomasyonu | Axivore",
    description:
      "Yapay zeka otomasyonu, chatbotlar ve özel yazılım için şeffaf sabit fiyatlar. 48 saat içinde yazılı teklif, gizli maliyet yok — 499 €'dan başlayan fiyatlarla.",
  },
  it: {
    title: "Prezzi — Automazione AI a prezzo fisso | Axivore",
    description:
      "Prezzi fissi e trasparenti per automazione AI, chatbot e software su misura. Preventivo scritto in 48 ore, nessun costo nascosto — da 499 €.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  return pageMetadata(resolveLocale(rawLocale), PATH, META);
}

export default function PreisePage() {
  return (
    <PageShell titleKey="pricing" hero="seo-only">
      <Pricing />
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
}
