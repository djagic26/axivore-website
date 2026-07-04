import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";

const SITE_URL = "https://axivore.io";
const PAGE_URL = `${SITE_URL}/leistungen/web-apps`;

export const metadata: Metadata = {
  title: "Web-App & SaaS entwickeln lassen — maßgeschneiderte Software | Axivore",
  description:
    "Axivore entwickelt maßgeschneiderte Web-Apps und SaaS-Produkte für kleine und mittlere Unternehmen — von der Idee bis live. Genau auf deinen Betrieb zugeschnitten, zum Festpreis.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Web-App & SaaS entwickeln lassen — maßgeschneiderte Software | Axivore",
    description:
      "Maßgeschneiderte Web-Apps und SaaS-Produkte von der Idee bis live — genau auf deinen Betrieb zugeschnitten, zum Festpreis.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

const useCases = [
  { title: "Interne Tools", text: "Software, die genau deinen Ablauf abbildet — statt teurer Standardlösungen, die nie richtig passen und die du nie ganz nutzt." },
  { title: "Kundenportale", text: "Ein geschützter Bereich, in dem deine Kunden Dokumente, Termine oder Status einsehen — ohne ständige Rückfragen bei dir." },
  { title: "SaaS-Produkte", text: "Du hast eine Produktidee? Wir bauen dein SaaS von der Idee über MVP bis zum Start — inklusive Nutzerverwaltung und Abrechnung." },
  { title: "Dashboards & Auswertungen", text: "Zahlen aus verschiedenen Quellen an einem Ort — übersichtlich, aktuell, damit du Entscheidungen auf Basis echter Daten triffst." },
  { title: "Buchungs- & Bestellsysteme", text: "Maßgeschneiderte Systeme für Termine, Reservierungen oder Bestellungen — genau so, wie dein Betrieb sie braucht." },
  { title: "Integrationen", text: "Wir verbinden deine bestehenden Tools, damit Daten automatisch fließen — kein Copy-Paste zwischen Programmen mehr." },
];

const steps = [
  { n: "01", title: "Idee & Scope", text: "Wir klären, was die Anwendung können muss und für wen. Danach bekommst du ein Festpreis-Angebot mit klarem Umfang." },
  { n: "02", title: "Bauen & Testen", text: "Wir entwickeln in Etappen, du siehst früh erste Versionen und gibst Feedback — so gibt es am Ende keine Überraschungen." },
  { n: "03", title: "Live & Weiterentwicklung", text: "Die Anwendung geht live. Auf Wunsch entwickeln wir sie weiter, wenn dein Betrieb wächst und neue Anforderungen kommen." },
];

const faqItems = [
  { question: "Was kostet die Entwicklung einer Web-App?", answer: "Das hängt stark vom Umfang ab. Wir teilen größere Projekte in Etappen, damit du nicht alles auf einmal bezahlst. Vorab bekommst du immer ein schriftliches Festpreis-Angebot mit klarem Umfang — keine offene Rechnung." },
  { question: "Wie lange dauert die Entwicklung?", answer: "Ein erster nutzbarer Stand (MVP) ist oft in wenigen Wochen möglich. Umfangreichere Produkte wachsen in Etappen. Wir sagen dir vorab einen realistischen Zeitplan." },
  { question: "Gehört mir der Code am Ende?", answer: "Ja. Was wir für dich bauen, gehört dir — inklusive Code. Du bist nicht an uns gebunden und kannst die Anwendung jederzeit weitergeben." },
  { question: "Könnt ihr auf einer bestehenden Lösung aufbauen?", answer: "Oft ja. Wir schauen uns an, was du bereits hast, und erweitern oder verbinden es — statt alles neu zu bauen, wenn es sich nicht lohnt." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "Web-Apps & SaaS-Entwicklung",
      serviceType: "Softwareentwicklung",
      description: "Maßgeschneiderte Web-Anwendungen und SaaS-Produkte für kleine und mittlere Unternehmen — von der Idee bis live.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Germany" },
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
        { "@type": "ListItem", position: 3, name: "Web-Apps & SaaS", item: PAGE_URL },
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

export default function WebAppsPage() {
  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">Leistungen / Web-Apps & SaaS</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          Software, die zu deinem Betrieb passt.
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">
          Standardsoftware zwingt dich, deinen Ablauf an das Programm anzupassen. Wir machen es
          umgekehrt: Wir bauen eine Web-App oder ein SaaS-Produkt, das genau deinen Prozess
          abbildet — von der ersten Idee bis live, zum Festpreis.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">Was wir bauen</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {useCases.map((u) => (
            <div key={u.title} className="flex gap-3.5">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#A09AFF" }} />
              <div>
                <h3 className="text-[15.5px] font-semibold mb-1">{u.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-white/50">{u.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">So läuft es ab</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="text-[13px] font-bold text-[#A09AFF] mb-3">{s.n}</div>
              <h3 className="text-[16px] font-semibold mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">Häufige Fragen</h2>
        <div className="space-y-6">
          {faqItems.map((f) => (
            <div key={f.question}>
              <h3 className="text-[15.5px] font-semibold mb-2">{f.question}</h3>
              <p className="text-[14px] leading-relaxed text-white/55">{f.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] leading-relaxed text-white/50 mt-10">
          Live-Beispiele unserer eigenen Produkte findest du unter{" "}
          <Link href="/projekte" className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">Projekte</Link>{" "}
          — echte SaaS-Systeme, die wir selbst gebaut haben und täglich betreiben.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl px-8 py-12 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[26px] font-bold mb-3">Hast du eine Idee im Kopf?</h2>
          <p className="text-white/55 mb-8 max-w-xl mx-auto">
            Erzähl sie uns in einem kostenlosen 30-Minuten-Gespräch. Wir sagen dir ehrlich, ob und
            wie sie sich umsetzen lässt — und was es kostet. Kein Pitch.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
