import type { Metadata } from "next";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";

const SITE_URL = "https://axivore.io";
const PAGE_URL = `${SITE_URL}/leistungen/ki-automatisierung`;

export const metadata: Metadata = {
  title: "KI-Automatisierung für KMU in Deutschland | Axivore",
  description:
    "Angebote, Rechnungen, Berichte und Dateneingaben automatisch erledigen lassen. Axivore baut KI-Automatisierungen für kleine Unternehmen — 5–15 Stunden pro Woche gespart. Live in 1–2 Wochen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KI-Automatisierung für KMU in Deutschland | Axivore",
    description:
      "Wiederkehrende Aufgaben automatisch erledigen lassen — Angebote, Rechnungen, Berichte. Für kleine Unternehmen in Deutschland.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

const useCases = [
  { title: "Angebote & Rechnungen", text: "Aus einer kurzen Eingabe entsteht das fertige Angebot oder die Rechnung — formatiert, korrekt, in Sekunden statt 30 Minuten." },
  { title: "Berichte & Reporting", text: "Daten aus verschiedenen Quellen werden automatisch zusammengeführt und als fertiger Bericht ausgegeben — täglich, wöchentlich oder auf Knopfdruck." },
  { title: "Dateneingabe & Übertragung", text: "Informationen wandern automatisch zwischen E-Mail, Tabellen und deinen Tools — ohne Copy-Paste, ohne Tippfehler." },
  { title: "Kundenanfragen sortieren", text: "Eingehende Anfragen werden automatisch bewertet, priorisiert und mit Nachfassnachrichten versehen — ohne manuellen Aufwand." },
];

const steps = [
  { n: "01", title: "Kostenloses Gespräch", text: "Wir schauen uns deine zeitfressende Aufgabe an und sagen ehrlich, ob und wie wir sie automatisieren können." },
  { n: "02", title: "Aufbau in 1–2 Wochen", text: "Wir bauen das System, testen es mit deinen echten Daten und übergeben es einsatzbereit." },
  { n: "03", title: "Läuft & wird betreut", text: "Das System läuft selbstständig. Wir verschwinden nicht nach dem Start — du erreichst uns jederzeit." },
];

const faqItems = [
  { question: "Wie lange dauert eine Automatisierung?", answer: "Eine typische Automatisierung ist in 1–2 Wochen fertig — von der ersten Idee bis zum laufenden System." },
  { question: "Muss ich technisch sein, um das zu nutzen?", answer: "Nein. Du beschreibst die Aufgabe in normaler Sprache, wir bauen den Rest. Die Bedienung ist so einfach wie eine E-Mail." },
  { question: "Bin ich als kleines Unternehmen zu klein dafür?", answer: "Im Gegenteil. Gerade kleine Unternehmen profitieren am meisten, weil jede gesparte Stunde direkt zählt. Schon eine einzelne Automatisierung spart oft mehrere Stunden pro Woche." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "KI-Automatisierung",
      serviceType: "KI-Automatisierung für kleine und mittlere Unternehmen",
      description:
        "Automatisierung wiederkehrender Geschäftsaufgaben wie Angebote, Rechnungen, Berichte und Dateneingaben für KMU in Deutschland.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Germany" },
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
        { "@type": "ListItem", position: 3, name: "KI-Automatisierung", item: PAGE_URL },
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

export default function KiAutomatisierungPage() {
  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">Leistungen / KI-Automatisierung</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          KI-Automatisierung für kleine Unternehmen.
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">
          Angebote, Rechnungen, Berichte, Dateneingaben — die Aufgaben, die jede Woche
          Stunden kosten, übernimmt ein System. Du gewinnst 5–15 Stunden pro Woche zurück,
          ohne neue Mitarbeiter und ohne dass du Technik verstehen musst.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">Was sich automatisieren lässt</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {useCases.map((u) => (
            <div key={u.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[16px] font-semibold mb-2">{u.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">So läuft es ab</h2>
        <div className="space-y-5">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-5">
              <span className="text-[#7C5CFF] font-black text-[20px] shrink-0">{s.n}</span>
              <div>
                <h3 className="text-[16px] font-semibold mb-1">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-white/50">{s.text}</p>
              </div>
            </div>
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
          <h2 className="text-[24px] font-bold mb-3">Welche Aufgabe kostet dich am meisten Zeit?</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">
            Sag es uns im kostenlosen Gespräch — wir zeigen dir, wie sich genau diese Aufgabe automatisieren lässt.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
