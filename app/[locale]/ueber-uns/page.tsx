import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { UeberUns } from "@/components/v2/UeberUns";
import { Process } from "@/components/v2/Process";
import { FinalCTA } from "@/components/v2/FinalCTA";
import { resolveLocale, pageMetadata, type LocaleCopy } from "@/lib/seo";

const PATH = "/ueber-uns";

const META: LocaleCopy = {
  de: {
    title: "Über uns — Das KI-Studio aus Stuttgart | Axivore",
    description:
      "Axivore ist ein KI-Studio aus Stuttgart. Wir bauen Automatisierungen, Chatbots und Software, die wir selbst täglich nutzen — persönlich, ehrlich und ohne Agentur-Blabla.",
  },
  en: {
    title: "About us — The AI Studio from Stuttgart | Axivore",
    description:
      "Axivore is an AI studio from Stuttgart. We build automations, chatbots and software that we use ourselves every day — personal, honest, no agency fluff.",
  },
  hr: {
    title: "O nama — AI studio iz Stuttgarta | Axivore",
    description:
      "Axivore je AI studio iz Stuttgarta. Gradimo automatizacije, chatbotove i softver koje sami svakodnevno koristimo — osobno, iskreno, bez agencijskog blabla.",
  },
  ro: {
    title: "Despre noi — Studioul AI din Stuttgart | Axivore",
    description:
      "Axivore este un studio AI din Stuttgart. Construim automatizări, chatboți și software pe care le folosim noi înșine zilnic — personal, onest, fără vorbe goale de agenție.",
  },
  tr: {
    title: "Hakkımızda — Stuttgart'tan Yapay Zeka Stüdyosu | Axivore",
    description:
      "Axivore, Stuttgart merkezli bir yapay zeka stüdyosudur. Her gün kendimiz kullandığımız otomasyonlar, chatbotlar ve yazılımlar geliştiriyoruz — samimi, dürüst, ajans laf kalabalığı olmadan.",
  },
  it: {
    title: "Chi siamo — Lo studio AI di Stoccarda | Axivore",
    description:
      "Axivore è uno studio AI di Stoccarda. Costruiamo automazioni, chatbot e software che usiamo noi stessi ogni giorno — personale, onesto, senza fronzoli da agenzia.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  return pageMetadata(resolveLocale(rawLocale), PATH, META);
}

export default function UeberUnsPage() {
  return (
    <PageShell titleKey="about" hero="seo-only">
      <UeberUns />
      <Process />
      <FinalCTA />
    </PageShell>
  );
}
