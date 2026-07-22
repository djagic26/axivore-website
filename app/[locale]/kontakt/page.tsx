import type { Metadata } from "next";
import { PageShell } from "@/components/v2/PageShell";
import { KontaktInfo } from "@/components/v2/KontaktInfo";
import { FinalCTA } from "@/components/v2/FinalCTA";
import { resolveLocale, pageMetadata, localeHref, type LocaleCopy } from "@/lib/seo";

const PATH = "/kontakt";

const META: LocaleCopy = {
  de: {
    title: "Kontakt — Sprich mit uns | Axivore",
    description:
      "Kontaktiere Axivore: per Formular, E-Mail (hello@axivore.io) oder direkt im Kalender. Antwort innerhalb von 24 Stunden — KI-Automatisierung aus Stuttgart.",
  },
  en: {
    title: "Contact — Talk to us | Axivore",
    description:
      "Contact Axivore: via form, email (hello@axivore.io) or directly in the calendar. Reply within 24 hours — AI automation from Stuttgart.",
  },
  hr: {
    title: "Kontakt — Razgovaraj s nama | Axivore",
    description:
      "Kontaktiraj Axivore: putem forme, e-maila (hello@axivore.io) ili direktno preko kalendara. Odgovor unutar 24 sata — AI automatizacija iz Stuttgarta.",
  },
  ro: {
    title: "Contact — Vorbește cu noi | Axivore",
    description:
      "Contactează Axivore: prin formular, e-mail (hello@axivore.io) sau direct în calendar. Răspuns în 24 de ore — automatizare AI din Stuttgart.",
  },
  tr: {
    title: "İletişim — Bizimle konuşun | Axivore",
    description:
      "Axivore ile iletişime geçin: form, e-posta (hello@axivore.io) veya doğrudan takvim üzerinden. 24 saat içinde yanıt — Stuttgart'tan yapay zeka otomasyonu.",
  },
  it: {
    title: "Contatti — Parla con noi | Axivore",
    description:
      "Contatta Axivore: tramite modulo, email (hello@axivore.io) o direttamente nel calendario. Risposta entro 24 ore — automazione AI da Stoccarda.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  return pageMetadata(resolveLocale(rawLocale), PATH, META);
}

export default async function KontaktPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const pageUrl = localeHref(locale, PATH);
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${pageUrl}#contactpage`,
    url: pageUrl,
    name: META[locale].title,
    about: { "@id": "https://axivore.io/#organization" },
  };

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
