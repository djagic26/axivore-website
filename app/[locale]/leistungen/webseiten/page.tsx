import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";

const SITE_URL = "https://axivore.io";
const PAGE_URL = `${SITE_URL}/leistungen/webseiten`;

export const metadata: Metadata = {
  title: "Webseite erstellen lassen — moderne Websites für kleine Unternehmen | Axivore",
  description:
    "Axivore baut moderne, schnelle Websites, die aus Besuchern Kunden machen — auf Wunsch mit KI-Assistent für Terminbuchung und Kundenanfragen. Festpreis, live in 1–3 Wochen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Webseite erstellen lassen — moderne Websites für kleine Unternehmen | Axivore",
    description:
      "Moderne, schnelle Websites, die aus Besuchern Kunden machen — mit optionalem KI-Assistenten. Festpreis, live in 1–3 Wochen.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

const features = [
  { title: "Professioneller Auftritt", text: "Ein Design, das Vertrauen schafft und zu deinem Betrieb passt — nicht von der Stange, sondern auf dich zugeschnitten." },
  { title: "Schnell & mobil", text: "Deine Seite lädt in Sekunden und sieht auf dem Handy genauso gut aus wie am Rechner — dort, wo die meisten Kunden dich finden." },
  { title: "Lokal gefunden werden", text: "Sauber aufgebaut für Google, damit dich Kunden aus deiner Region finden, wenn sie nach deiner Leistung suchen." },
  { title: "KI-Assistent (optional)", text: "Auf Wunsch bauen wir einen Assistenten ein, der Fragen beantwortet und Termine bucht — deine Website arbeitet dann auch nachts." },
  { title: "Termine & Anfragen", text: "Kontaktformular, Terminbuchung oder WhatsApp — Besucher werden direkt zu Anfragen, ohne Umwege." },
  { title: "Pflegeleicht", text: "Du kannst Inhalte selbst ändern oder wir übernehmen die Pflege — wie es dir lieber ist." },
];

const steps = [
  { n: "01", title: "Gespräch & Konzept", text: "Wir klären, was deine Website leisten soll und wer deine Kunden sind. Danach bekommst du ein Festpreis-Angebot." },
  { n: "02", title: "Design & Aufbau", text: "Wir gestalten und bauen die Seite — mit deinen Inhalten, deinem Logo, deiner Sprache. Du siehst Zwischenstände und gibst Feedback." },
  { n: "03", title: "Live & Betreuung", text: "Die Seite geht live, wir kümmern uns um Technik und Hosting. Auf Wunsch mit laufender Pflege." },
];

const faqItems = [
  { question: "Was kostet eine Website bei Axivore?", answer: "Das hängt vom Umfang ab. Du bekommst vorab ein schriftliches Festpreis-Angebot — danach ändert sich der Preis nicht mehr. Eine klassische Unternehmensseite startet im niedrigen vierstelligen Bereich, kleinere Landingpages darunter." },
  { question: "Wie lange dauert es, bis meine Website live ist?", answer: "Meist 1 bis 3 Wochen, je nach Umfang und wie schnell wir deine Inhalte (Texte, Bilder) bekommen. Wir sagen dir vorab einen realistischen Termin." },
  { question: "Kann ich die Inhalte später selbst ändern?", answer: "Ja. Wir bauen die Seite so, dass du Texte und Bilder selbst pflegen kannst — oder wir übernehmen die Pflege für dich. Ganz wie du möchtest." },
  { question: "Macht ihr auch Suchmaschinenoptimierung (SEO)?", answer: "Jede Website bauen wir technisch sauber für Google auf. Auf Wunsch kümmern wir uns darüber hinaus um lokales SEO, damit dich Kunden aus deiner Region besser finden." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "Webseiten & Landingpages",
      serviceType: "Webdesign & Webentwicklung",
      description: "Moderne, schnelle Websites für kleine und mittlere Unternehmen — auf Wunsch mit KI-Assistent.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Germany" },
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
        { "@type": "ListItem", position: 3, name: "Webseiten", item: PAGE_URL },
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

export default function WebseitenPage() {
  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">Leistungen / Websites</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          Websites, die nicht nur gut aussehen.
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">
          Eine moderne Website ist mehr als eine digitale Visitenkarte. Wir bauen Seiten, die
          Besucher zu Kunden machen — schnell, mobil, in Google gefunden — und auf Wunsch mit
          einem KI-Assistenten, der Termine bucht und Fragen beantwortet, auch nach Feierabend.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">Was du bekommst</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {features.map((f) => (
            <div key={f.title} className="flex gap-3.5">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#A09AFF" }} />
              <div>
                <h3 className="text-[15.5px] font-semibold mb-1">{f.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-white/50">{f.text}</p>
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
          Passt eine Website mit KI-Assistent zu deinem Betrieb? Schau dir auch unsere{" "}
          <Link href="/leistungen/ki-chatbots" className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">KI-Chatbots</Link>{" "}
          an oder wirf einen Blick in den{" "}
          <Link href="/ratgeber" className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">Ratgeber</Link>.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl px-8 py-12 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[26px] font-bold mb-3">Bereit für eine Website, die arbeitet?</h2>
          <p className="text-white/55 mb-8 max-w-xl mx-auto">
            In einem kostenlosen 30-Minuten-Gespräch schauen wir, was deine Website leisten soll —
            und du bekommst danach ein Festpreis-Angebot. Kein Pitch.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
