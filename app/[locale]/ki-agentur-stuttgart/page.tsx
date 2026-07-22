import type { Metadata } from "next";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";

const SITE_URL = "https://axivore.io";
const PAGE_URL = `${SITE_URL}/ki-agentur-stuttgart`;

export const metadata: Metadata = {
  title: "KI-Agentur Stuttgart — KI-Automatisierung für KMU | Axivore",
  description:
    "Axivore ist deine KI-Agentur aus Stuttgart: KI-Automatisierungen, Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und der Region. Live in 1–2 Wochen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KI-Agentur Stuttgart — KI-Automatisierung für KMU | Axivore",
    description:
      "KI-Automatisierungen, Chatbots und Software für kleine Unternehmen in Stuttgart und Umgebung. Persönlich, lokal, ehrlich.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

const region = [
  "Stuttgart", "Esslingen", "Ludwigsburg", "Böblingen",
  "Sindelfingen", "Waiblingen", "Fellbach", "Leonberg",
];

const services = [
  { title: "KI-Automatisierung", text: "Angebote, Rechnungen, Berichte und Dateneingaben laufen automatisch — 5–15 Stunden pro Woche zurückgewonnen, ohne neue Mitarbeiter." },
  { title: "KI-Chatbots", text: "Ein digitaler Assistent beantwortet Kundenanfragen rund um die Uhr, bucht Termine und qualifiziert Leads — auch nach Feierabend." },
  { title: "Maßgeschneiderte Software", text: "Kleine Tools, die genau zu deinem Betrieb passen — statt teurer Standardlösungen, die du nie ganz nutzt." },
];

const whyLocal = [
  { title: "Aus Stuttgart, für Stuttgart", text: "Wir kennen die Betriebe hier — Handwerk, Dienstleistung, Gastronomie, Praxen. Kein anonymes Callcenter, sondern ein Ansprechpartner aus der Region." },
  { title: "Persönlich erreichbar", text: "Vor-Ort-Termin in Stuttgart und Umgebung oder per Video — wie es dir passt. Du redest immer direkt mit der Person, die dein System baut." },
  { title: "Schnell live", text: "Die erste Automatisierung läuft meist in 1–2 Wochen. Kein monatelanges Projekt, sondern ein Ergebnis, das du sofort spürst." },
];

const faqItems = [
  { question: "Arbeitet Axivore nur in Stuttgart?", answer: "Unser Sitz ist in Stuttgart und wir betreuen Unternehmen in Stuttgart und der gesamten Region — von Esslingen über Ludwigsburg bis Böblingen. Vor-Ort-Termine sind in der Region problemlos möglich, der Rest läuft bequem digital." },
  { question: "Für welche Unternehmen lohnt sich das?", answer: "Für kleine und mittlere Betriebe mit 5–30 Mitarbeitern, die Zeit an wiederkehrenden Aufgaben verlieren — Handwerk, Dienstleistungen, Agenturen, Gastronomie, Praxen. Gerade kleine Betriebe profitieren am meisten, weil jede gesparte Stunde direkt zählt." },
  { question: "Was kostet eine KI-Automatisierung?", answer: "Das hängt vom Umfang ab. Im kostenlosen Erstgespräch schauen wir uns deine zeitfressende Aufgabe an und sagen dir ehrlich, was es kostet und ob sich der Aufwand lohnt — ohne Verpflichtung." },
  { question: "Muss ich technisch sein?", answer: "Nein. Du beschreibst die Aufgabe in normaler Sprache, wir bauen den Rest. Die Bedienung ist anschließend so einfach wie eine E-Mail." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${PAGE_URL}/#localbusiness`,
      name: "Axivore — KI-Agentur Stuttgart",
      url: PAGE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        "KI-Agentur aus Stuttgart für KI-Automatisierungen, Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und der Region.",
      email: "hello@axivore.io",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rotweg 172",
        postalCode: "70437",
        addressLocality: "Stuttgart",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.8313,
        longitude: 9.1665,
      },
      areaServed: region.map((name) => ({ "@type": "City", name })),
      provider: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "KI-Agentur Stuttgart", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((i) => ({
        "@type": "Question",
        name: i.question,
        acceptedAnswer: { "@type": "Answer", text: i.answer },
      })),
    },
  ],
};

export default function KiAgenturStuttgartPage() {
  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">KI-Agentur · Stuttgart</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          KI-Agentur aus Stuttgart für kleine Unternehmen.
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">
          Axivore baut KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte
          Software für kleine und mittlere Unternehmen in Stuttgart und der Region.
          Wir nehmen dir die Aufgaben ab, die jede Woche Stunden kosten — persönlich,
          lokal und ohne dass du Technik verstehen musst.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">Was wir für Stuttgarter Unternehmen bauen</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[16px] font-semibold mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">Warum eine KI-Agentur aus der Region</h2>
        <div className="space-y-5">
          {whyLocal.map((w) => (
            <div key={w.title} className="flex gap-5">
              <span className="text-[#7C5CFF] font-black text-[20px] shrink-0">›</span>
              <div>
                <h3 className="text-[16px] font-semibold mb-1">{w.title}</h3>
                <p className="text-[14px] leading-relaxed text-white/50">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-5">In Stuttgart und Umgebung</h2>
        <p className="text-[14px] leading-relaxed text-white/50 mb-6">
          Wir betreuen Unternehmen in ganz Stuttgart und der Region — unter anderem in:
        </p>
        <div className="flex flex-wrap gap-2.5">
          {region.map((city) => (
            <span key={city} className="text-[13px] px-3.5 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
              {city}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">Häufige Fragen</h2>
        <div className="space-y-6">
          {faqItems.map((f) => (
            <div key={f.question}>
              <h3 className="text-[15px] font-semibold mb-1.5">{f.question}</h3>
              <p className="text-[14px] leading-relaxed text-white/50">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-2xl px-8 py-11 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[24px] font-bold mb-3">Lass uns über deinen Betrieb reden.</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">
            Kostenloses Erstgespräch — vor Ort in Stuttgart oder per Video. Wir zeigen dir,
            welche Aufgabe sich bei dir zuerst automatisieren lässt.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
