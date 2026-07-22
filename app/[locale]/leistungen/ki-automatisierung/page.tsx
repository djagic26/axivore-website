import type { Metadata } from "next";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en"];
const PATH = "/leistungen/ki-automatisierung";

type Item = { title: string; text: string };
type Step = { n: string; title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr" | "en", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  breadcrumb: string; serviceName: string; eyebrow: string; h1: string; subheadline: string;
  useCasesHeading: string; useCases: Item[];
  stepsHeading: string; steps: Step[];
  faqHeading: string; faq: Faq[];
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string; leistungenLabel: string;
}> = {
  de: {
    metaTitle: "KI-Automatisierung für KMU in Deutschland | Axivore",
    metaDescription: "Angebote, Rechnungen, Berichte und Dateneingaben automatisch erledigen lassen. Axivore baut KI-Automatisierungen für kleine Unternehmen — 5–15 Stunden pro Woche gespart. Live in 1–2 Wochen.",
    ogDescription: "Wiederkehrende Aufgaben automatisch erledigen lassen — Angebote, Rechnungen, Berichte. Für kleine Unternehmen in Deutschland.",
    breadcrumb: "KI-Automatisierung",
    serviceName: "KI-Automatisierung",
    eyebrow: "Leistungen / KI-Automatisierung",
    h1: "KI-Automatisierung für kleine Unternehmen.",
    subheadline: "Angebote, Rechnungen, Berichte, Dateneingaben — die Aufgaben, die jede Woche Stunden kosten, übernimmt ein System. Du gewinnst 5–15 Stunden pro Woche zurück, ohne neue Mitarbeiter und ohne dass du Technik verstehen musst.",
    useCasesHeading: "Was sich automatisieren lässt",
    useCases: [
      { title: "Angebote & Rechnungen", text: "Aus einer kurzen Eingabe entsteht das fertige Angebot oder die Rechnung — formatiert, korrekt, in Sekunden statt 30 Minuten." },
      { title: "Berichte & Reporting", text: "Daten aus verschiedenen Quellen werden automatisch zusammengeführt und als fertiger Bericht ausgegeben — täglich, wöchentlich oder auf Knopfdruck." },
      { title: "Dateneingabe & Übertragung", text: "Informationen wandern automatisch zwischen E-Mail, Tabellen und deinen Tools — ohne Copy-Paste, ohne Tippfehler." },
      { title: "Kundenanfragen sortieren", text: "Eingehende Anfragen werden automatisch bewertet, priorisiert und mit Nachfassnachrichten versehen — ohne manuellen Aufwand." },
    ],
    stepsHeading: "So läuft es ab",
    steps: [
      { n: "01", title: "Kostenloses Gespräch", text: "Wir schauen uns deine zeitfressende Aufgabe an und sagen ehrlich, ob und wie wir sie automatisieren können." },
      { n: "02", title: "Aufbau in 1–2 Wochen", text: "Wir bauen das System, testen es mit deinen echten Daten und übergeben es einsatzbereit." },
      { n: "03", title: "Läuft & wird betreut", text: "Das System läuft selbstständig. Wir verschwinden nicht nach dem Start — du erreichst uns jederzeit." },
    ],
    faqHeading: "Häufige Fragen",
    faq: [
      { question: "Wie lange dauert eine Automatisierung?", answer: "Eine typische Automatisierung ist in 1–2 Wochen fertig — von der ersten Idee bis zum laufenden System." },
      { question: "Muss ich technisch sein, um das zu nutzen?", answer: "Nein. Du beschreibst die Aufgabe in normaler Sprache, wir bauen den Rest. Die Bedienung ist so einfach wie eine E-Mail." },
      { question: "Bin ich als kleines Unternehmen zu klein dafür?", answer: "Im Gegenteil. Gerade kleine Unternehmen profitieren am meisten, weil jede gesparte Stunde direkt zählt. Schon eine einzelne Automatisierung spart oft mehrere Stunden pro Woche." },
    ],
    ctaHeading: "Welche Aufgabe kostet dich am meisten Zeit?",
    ctaText: "Sag es uns im kostenlosen Gespräch — wir zeigen dir, wie sich genau diese Aufgabe automatisieren lässt.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
    leistungenLabel: "Leistungen",
  },
  hr: {
    metaTitle: "AI automatizacija za mala i srednja poduzeća u Njemačkoj | Axivore",
    metaDescription: "Ponude, računi, izvještaji i unos podataka automatski obavljeni. Axivore gradi AI automatizacije za male tvrtke — ušteda 5–15 sati tjedno. Live za 1–2 tjedna.",
    ogDescription: "Automatiziraj ponavljajuće zadatke — ponude, račune, izvještaje. Za male tvrtke u Njemačkoj.",
    breadcrumb: "AI automatizacija",
    serviceName: "AI automatizacija",
    eyebrow: "Usluge / AI automatizacija",
    h1: "AI automatizacija za male tvrtke.",
    subheadline: "Ponude, računi, izvještaji, unos podataka — zadatke koji svaki tjedan koštaju sati preuzima sustav. Vraćaš 5–15 sati tjedno, bez novih zaposlenika i bez da moraš razumjeti tehniku.",
    useCasesHeading: "Što se može automatizirati",
    useCases: [
      { title: "Ponude i računi", text: "Iz kratkog unosa nastaje gotova ponuda ili račun — formatirano, ispravno, u sekundama umjesto 30 minuta." },
      { title: "Izvještaji i reporting", text: "Podaci s različitih izvora automatski se objedinjuju i izdaju kao gotov izvještaj — dnevno, tjedno ili na klik." },
      { title: "Unos i prijenos podataka", text: "Informacije putuju automatski između e-maila, tablica i tvojih alata — bez copy-pastea, bez tipfelera." },
      { title: "Sortiranje upita klijenata", text: "Pristigli upiti se automatski ocjenjuju, prioritiziraju i dobivaju poruke za podsjećanje — bez ručnog truda." },
    ],
    stepsHeading: "Kako to izgleda",
    steps: [
      { n: "01", title: "Besplatan razgovor", text: "Pogledamo zadatak koji ti oduzima vrijeme i iskreno kažemo možemo li i kako ga automatizirati." },
      { n: "02", title: "Izrada za 1–2 tjedna", text: "Gradimo sustav, testiramo ga na tvojim stvarnim podacima i predajemo ga spremnog za korištenje." },
      { n: "03", title: "Radi i ima podršku", text: "Sustav radi samostalno. Ne nestajemo nakon lansiranja — uvijek nas možeš kontaktirati." },
    ],
    faqHeading: "Česta pitanja",
    faq: [
      { question: "Koliko traje jedna automatizacija?", answer: "Tipična automatizacija gotova je za 1–2 tjedna — od prve ideje do sustava koji radi." },
      { question: "Moram li biti tehnički potkovan da bih ovo koristio?", answer: "Ne. Ti opišeš zadatak običnim jezikom, mi gradimo ostalo. Korištenje je jednostavno kao slanje e-maila." },
      { question: "Jesam li kao mala tvrtka premali za ovo?", answer: "Naprotiv. Baš male tvrtke imaju najviše koristi, jer svaki ušteđeni sat izravno vrijedi. Već jedna automatizacija često štedi nekoliko sati tjedno." },
    ],
    ctaHeading: "Koji zadatak ti oduzima najviše vremena?",
    ctaText: "Reci nam na besplatnom razgovoru — pokazat ćemo ti kako se točno taj zadatak može automatizirati.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
    leistungenLabel: "Usluge",
  },
  en: {
    metaTitle: "AI Automation for SMEs in Germany | Axivore",
    metaDescription: "Get quotes, invoices, reports and data entry handled automatically. Axivore builds AI automations for small businesses — 5–15 hours saved per week. Live in 1–2 weeks.",
    ogDescription: "Get recurring tasks handled automatically — quotes, invoices, reports. For small businesses in Germany.",
    breadcrumb: "AI Automation",
    serviceName: "AI Automation",
    eyebrow: "Services / AI Automation",
    h1: "AI automation for small businesses.",
    subheadline: "Quotes, invoices, reports, data entry — the tasks that cost hours every week are taken over by a system. You get back 5–15 hours a week, with no new hires and no need to understand the technology.",
    useCasesHeading: "What can be automated",
    useCases: [
      { title: "Quotes & invoices", text: "A short input turns into a finished quote or invoice — formatted, correct, in seconds instead of 30 minutes." },
      { title: "Reports & reporting", text: "Data from different sources is automatically merged and delivered as a finished report — daily, weekly or on demand." },
      { title: "Data entry & transfer", text: "Information moves automatically between email, spreadsheets and your tools — no copy-paste, no typos." },
      { title: "Sorting customer inquiries", text: "Incoming inquiries are automatically scored, prioritized and given follow-up messages — with no manual effort." },
    ],
    stepsHeading: "How it works",
    steps: [
      { n: "01", title: "Free call", text: "We look at your time-consuming task and tell you honestly whether and how we can automate it." },
      { n: "02", title: "Built in 1–2 weeks", text: "We build the system, test it with your real data and hand it over ready to use." },
      { n: "03", title: "Runs & is supported", text: "The system runs on its own. We don't disappear after launch — you can reach us anytime." },
    ],
    faqHeading: "Frequently asked questions",
    faq: [
      { question: "How long does an automation take?", answer: "A typical automation is ready in 1–2 weeks — from the first idea to a running system." },
      { question: "Do I need to be technical to use this?", answer: "No. You describe the task in plain language, we build the rest. Using it afterwards is as simple as sending an email." },
      { question: "Am I too small as a small business?", answer: "Quite the opposite. Small businesses benefit the most, because every hour saved counts directly. Even a single automation often saves several hours a week." },
    ],
    ctaHeading: "Which task costs you the most time?",
    ctaText: "Tell us in a free call — we'll show you exactly how that task can be automated.",
    ctaButton: "Book a free call",
    start: "Home",
    leistungenLabel: "Services",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  return partialPageMetadata(
    contentLocale,
    PATH,
    { de: { title: CONTENT.de.metaTitle, description: CONTENT.de.metaDescription }, hr: { title: CONTENT.hr.metaTitle, description: CONTENT.hr.metaDescription }, en: { title: CONTENT.en.metaTitle, description: CONTENT.en.metaDescription } },
    AVAILABLE
  );
}

export default async function KiAutomatisierungPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const leistungenUrl = `https://axivore.io${localePathname(contentLocale, "/leistungen")}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: c.serviceName,
        serviceType: "KI-Automatisierung für kleine und mittlere Unternehmen",
        description: "Automatisierung wiederkehrender Geschäftsaufgaben wie Angebote, Rechnungen, Berichte und Dateneingaben für KMU in Deutschland.",
        provider: { "@id": "https://axivore.io/#organization" },
        areaServed: { "@type": "Country", name: "Germany" },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.start, item: siteUrl },
          { "@type": "ListItem", position: 2, name: c.leistungenLabel, item: leistungenUrl },
          { "@type": "ListItem", position: 3, name: c.breadcrumb, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faq.map((i) => ({
          "@type": "Question",
          name: i.question,
          acceptedAnswer: { "@type": "Answer", text: i.answer },
        })),
      },
    ],
  };

  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">{c.eyebrow}</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          {c.h1}
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">{c.subheadline}</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{c.useCasesHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {c.useCases.map((u) => (
            <div key={u.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[16px] font-semibold mb-2">{u.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{c.stepsHeading}</h2>
        <div className="space-y-5">
          {c.steps.map((s) => (
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
        <h2 className="text-[24px] font-bold mb-7">{c.faqHeading}</h2>
        <div className="space-y-6">
          {c.faq.map((f) => (
            <div key={f.question}>
              <h3 className="text-[15px] font-semibold mb-1.5">{f.question}</h3>
              <p className="text-[14px] leading-relaxed text-white/50">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-2xl px-8 py-11 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[24px] font-bold mb-3">{c.ctaHeading}</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">{c.ctaText}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
