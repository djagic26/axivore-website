import type { Metadata } from "next";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";

const SITE_URL = "https://axivore.io";
const PAGE_URL = `${SITE_URL}/leistungen/ki-chatbots`;

export const metadata: Metadata = {
  title: "KI-Chatbots für Unternehmen in Deutschland | Axivore",
  description:
    "Intelligente KI-Chatbots, die rund um die Uhr Kundenanfragen beantworten, Termine buchen und Leads qualifizieren. Axivore baut Chatbots für KMU — 70–90 % der Anfragen automatisch beantwortet.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KI-Chatbots für Unternehmen in Deutschland | Axivore",
    description:
      "Ein digitaler Assistent, der rund um die Uhr Kundenanfragen beantwortet und Termine bucht — auch nachts.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

const useCases = [
  { title: "24/7 Kundenservice", text: "Beantwortet wiederkehrende Fragen sofort — zu Öffnungszeiten, Preisen, Leistungen — auch außerhalb deiner Arbeitszeit." },
  { title: "Termine buchen", text: "Besucher buchen direkt im Chat einen Termin, ganz ohne E-Mail-Hin-und-Her und Telefonschleifen." },
  { title: "Leads qualifizieren", text: "Der Bot stellt die richtigen Fragen, erkennt ernsthafte Interessenten und übergibt sie mit allen Infos an dich." },
  { title: "Auf deiner Website oder WhatsApp", text: "Wir setzen den Bot dort ein, wo deine Kunden sind — eingebettet auf der Website oder über Messenger." },
];

const steps = [
  { n: "01", title: "Wissen sammeln", text: "Wir füttern den Bot mit deinen Inhalten — Leistungen, Preise, häufige Fragen — damit er klingt wie dein Unternehmen." },
  { n: "02", title: "Aufbau in 2–4 Wochen", text: "Wir bauen, trainieren und testen den Chatbot mit echten Fragen, bevor er live geht." },
  { n: "03", title: "Live & lernt weiter", text: "Der Bot geht live und wird mit echten Gesprächen laufend besser. Wir betreuen ihn weiter." },
];

const faqItems = [
  { question: "Wie viele Anfragen kann ein Chatbot übernehmen?", answer: "In der Praxis beantworten gut gebaute Chatbots 70–90 % der wiederkehrenden Anfragen vollautomatisch. Dein Team kümmert sich dann nur noch um die wirklich komplexen Fälle." },
  { question: "Klingt der Bot wie ein Roboter?", answer: "Nein. Wir trainieren ihn auf deine Inhalte und deinen Ton, sodass er natürlich und hilfreich antwortet — wie ein gut eingearbeiteter Mitarbeiter." },
  { question: "Was passiert, wenn der Bot etwas nicht weiß?", answer: "Dann gibt er das ehrlich zu und leitet die Anfrage an dich oder dein Team weiter — inklusive der bisherigen Konversation." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "KI-Chatbots",
      serviceType: "KI-Chatbot-Entwicklung für Unternehmen",
      description:
        "Entwicklung intelligenter KI-Chatbots, die Kundenanfragen beantworten, Termine buchen und Leads qualifizieren — für KMU in Deutschland.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Germany" },
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
        { "@type": "ListItem", position: 3, name: "KI-Chatbots", item: PAGE_URL },
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

export default function KiChatbotsPage() {
  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">Leistungen / KI-Chatbots</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          KI-Chatbots, die nie schlafen.
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">
          Ein digitaler Assistent, der rund um die Uhr Kundenanfragen beantwortet, Termine
          bucht und Interessenten qualifiziert — auch nachts und am Wochenende. So verlierst
          du keine Anfrage mehr, nur weil gerade niemand am Telefon ist.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">Was ein KI-Chatbot für dich übernimmt</h2>
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
          <h2 className="text-[24px] font-bold mb-3">Teste, wie dein Chatbot klingen würde.</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">
            Im kostenlosen Gespräch zeigen wir dir an einem konkreten Beispiel, wie ein
            Chatbot für dein Unternehmen Anfragen beantworten würde.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
