import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr"];
const PATH = "/leistungen/webseiten";

type Item = { title: string; text: string };
type Step = { n: string; title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  breadcrumb: string; serviceName: string; eyebrow: string; h1: string; subheadline: string;
  featuresHeading: string; features: Item[];
  stepsHeading: string; steps: Step[];
  faqHeading: string; faq: Faq[];
  crossLinkText: string; chatbotsLabel: string; ratgeberLabel: string;
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string; leistungenLabel: string;
}> = {
  de: {
    metaTitle: "Webseite erstellen lassen — moderne Websites für kleine Unternehmen | Axivore",
    metaDescription: "Axivore baut moderne, schnelle Websites, die aus Besuchern Kunden machen — auf Wunsch mit KI-Assistent für Terminbuchung und Kundenanfragen. Festpreis, live in 1–3 Wochen.",
    ogDescription: "Moderne, schnelle Websites, die aus Besuchern Kunden machen — mit optionalem KI-Assistenten. Festpreis, live in 1–3 Wochen.",
    breadcrumb: "Webseiten",
    serviceName: "Webseiten & Landingpages",
    eyebrow: "Leistungen / Websites",
    h1: "Websites, die nicht nur gut aussehen.",
    subheadline: "Eine moderne Website ist mehr als eine digitale Visitenkarte. Wir bauen Seiten, die Besucher zu Kunden machen — schnell, mobil, in Google gefunden — und auf Wunsch mit einem KI-Assistenten, der Termine bucht und Fragen beantwortet, auch nach Feierabend.",
    featuresHeading: "Was du bekommst",
    features: [
      { title: "Professioneller Auftritt", text: "Ein Design, das Vertrauen schafft und zu deinem Betrieb passt — nicht von der Stange, sondern auf dich zugeschnitten." },
      { title: "Schnell & mobil", text: "Deine Seite lädt in Sekunden und sieht auf dem Handy genauso gut aus wie am Rechner — dort, wo die meisten Kunden dich finden." },
      { title: "Lokal gefunden werden", text: "Sauber aufgebaut für Google, damit dich Kunden aus deiner Region finden, wenn sie nach deiner Leistung suchen." },
      { title: "KI-Assistent (optional)", text: "Auf Wunsch bauen wir einen Assistenten ein, der Fragen beantwortet und Termine bucht — deine Website arbeitet dann auch nachts." },
      { title: "Termine & Anfragen", text: "Kontaktformular, Terminbuchung oder WhatsApp — Besucher werden direkt zu Anfragen, ohne Umwege." },
      { title: "Pflegeleicht", text: "Du kannst Inhalte selbst ändern oder wir übernehmen die Pflege — wie es dir lieber ist." },
    ],
    stepsHeading: "So läuft es ab",
    steps: [
      { n: "01", title: "Gespräch & Konzept", text: "Wir klären, was deine Website leisten soll und wer deine Kunden sind. Danach bekommst du ein Festpreis-Angebot." },
      { n: "02", title: "Design & Aufbau", text: "Wir gestalten und bauen die Seite — mit deinen Inhalten, deinem Logo, deiner Sprache. Du siehst Zwischenstände und gibst Feedback." },
      { n: "03", title: "Live & Betreuung", text: "Die Seite geht live, wir kümmern uns um Technik und Hosting. Auf Wunsch mit laufender Pflege." },
    ],
    faqHeading: "Häufige Fragen",
    faq: [
      { question: "Was kostet eine Website bei Axivore?", answer: "Das hängt vom Umfang ab. Du bekommst vorab ein schriftliches Festpreis-Angebot — danach ändert sich der Preis nicht mehr. Eine klassische Unternehmensseite startet im niedrigen vierstelligen Bereich, kleinere Landingpages darunter." },
      { question: "Wie lange dauert es, bis meine Website live ist?", answer: "Meist 1 bis 3 Wochen, je nach Umfang und wie schnell wir deine Inhalte (Texte, Bilder) bekommen. Wir sagen dir vorab einen realistischen Termin." },
      { question: "Kann ich die Inhalte später selbst ändern?", answer: "Ja. Wir bauen die Seite so, dass du Texte und Bilder selbst pflegen kannst — oder wir übernehmen die Pflege für dich. Ganz wie du möchtest." },
      { question: "Macht ihr auch Suchmaschinenoptimierung (SEO)?", answer: "Jede Website bauen wir technisch sauber für Google auf. Auf Wunsch kümmern wir uns darüber hinaus um lokales SEO, damit dich Kunden aus deiner Region besser finden." },
    ],
    crossLinkText: "Passt eine Website mit KI-Assistent zu deinem Betrieb? Schau dir auch unsere {CHATBOTS} an oder wirf einen Blick in den {RATGEBER}.",
    chatbotsLabel: "KI-Chatbots",
    ratgeberLabel: "Ratgeber",
    ctaHeading: "Bereit für eine Website, die arbeitet?",
    ctaText: "In einem kostenlosen 30-Minuten-Gespräch schauen wir, was deine Website leisten soll — und du bekommst danach ein Festpreis-Angebot. Kein Pitch.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
    leistungenLabel: "Leistungen",
  },
  hr: {
    metaTitle: "Izrada web stranice — moderne web stranice za male tvrtke | Axivore",
    metaDescription: "Axivore gradi moderne, brze web stranice koje od posjetitelja stvaraju klijente — po želji s AI asistentom za zakazivanje termina i upite klijenata. Fiksna cijena, live za 1–3 tjedna.",
    ogDescription: "Moderne, brze web stranice koje od posjetitelja stvaraju klijente — s opcionalnim AI asistentom. Fiksna cijena, live za 1–3 tjedna.",
    breadcrumb: "Web stranice",
    serviceName: "Web stranice i landing stranice",
    eyebrow: "Usluge / Web stranice",
    h1: "Web stranice koje ne samo da dobro izgledaju.",
    subheadline: "Moderna web stranica je više od digitalne posjetnice. Gradimo stranice koje pretvaraju posjetitelje u klijente — brze, prilagođene mobitelu, pronađene na Googleu — i po želji s AI asistentom koji zakazuje termine i odgovara na pitanja, čak i poslije radnog vremena.",
    featuresHeading: "Što dobivaš",
    features: [
      { title: "Profesionalan izgled", text: "Dizajn koji stvara povjerenje i pristaje tvom poslu — ne s police, nego skrojen za tebe." },
      { title: "Brzo i prilagođeno mobitelu", text: "Tvoja stranica učitava se u sekundama i na mobitelu izgleda jednako dobro kao na računalu — tamo gdje te većina klijenata i pronalazi." },
      { title: "Pronalaženje u lokalnoj pretrazi", text: "Uredno izgrađena za Google, da te klijenti iz tvoje regije pronađu kad traže tvoju uslugu." },
      { title: "AI asistent (opcionalno)", text: "Po želji ugrađujemo asistenta koji odgovara na pitanja i zakazuje termine — tvoja web stranica onda radi i noću." },
      { title: "Termini i upiti", text: "Kontakt forma, zakazivanje termina ili WhatsApp — posjetitelji odmah postaju upiti, bez zaobilaznih puteva." },
      { title: "Jednostavno održavanje", text: "Sadržaj možeš sam mijenjati ili mi preuzimamo održavanje — kako tebi više odgovara." },
    ],
    stepsHeading: "Kako to izgleda",
    steps: [
      { n: "01", title: "Razgovor i koncept", text: "Razjasnimo što tvoja web stranica treba postići i tko su tvoji klijenti. Nakon toga dobivaš ponudu s fiksnom cijenom." },
      { n: "02", title: "Dizajn i izrada", text: "Oblikujemo i gradimo stranicu — s tvojim sadržajem, logom, tvojim jezikom. Vidiš međukorake i daješ feedback." },
      { n: "03", title: "Live i podrška", text: "Stranica ide live, mi se brinemo o tehnici i hostingu. Po želji uz stalno održavanje." },
    ],
    faqHeading: "Česta pitanja",
    faq: [
      { question: "Koliko košta web stranica kod Axivorea?", answer: "Ovisi o opsegu. Unaprijed dobivaš pisanu ponudu s fiksnom cijenom — poslije se cijena više ne mijenja. Klasična poslovna stranica kreće u niskom četveroznamenkastom rasponu, manje landing stranice ispod toga." },
      { question: "Koliko traje dok moja web stranica ne bude live?", answer: "Obično 1 do 3 tjedna, ovisno o opsegu i koliko brzo dobijemo tvoj sadržaj (tekstove, slike). Unaprijed ti kažemo realan rok." },
      { question: "Mogu li kasnije sam mijenjati sadržaj?", answer: "Da. Stranicu gradimo tako da tekstove i slike možeš sam održavati — ili mi preuzimamo održavanje za tebe. Potpuno kako želiš." },
      { question: "Radite li i optimizaciju za tražilice (SEO)?", answer: "Svaku web stranicu tehnički uredno gradimo za Google. Po želji se dodatno brinemo o lokalnom SEO-u, da te klijenti iz tvoje regije bolje pronađu." },
    ],
    crossLinkText: "Pristaje li web stranica s AI asistentom tvom poslu? Pogledaj i naše {CHATBOTS} ili baci pogled u {RATGEBER}.",
    chatbotsLabel: "AI chatbotove",
    ratgeberLabel: "Vodič",
    ctaHeading: "Spreman za web stranicu koja radi?",
    ctaText: "Na besplatnom 30-minutnom razgovoru pogledamo što tvoja web stranica treba postići — i nakon toga dobivaš ponudu s fiksnom cijenom. Bez pitcha.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
    leistungenLabel: "Usluge",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  return partialPageMetadata(
    contentLocale,
    PATH,
    { de: { title: CONTENT.de.metaTitle, description: CONTENT.de.metaDescription }, hr: { title: CONTENT.hr.metaTitle, description: CONTENT.hr.metaDescription } },
    AVAILABLE
  );
}

export default async function WebseitenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const leistungenUrl = `https://axivore.io${localePathname(contentLocale, "/leistungen")}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;

  const [beforeChatbots, rest] = c.crossLinkText.split("{CHATBOTS}");
  const [betweenLinks, afterRatgeber] = rest.split("{RATGEBER}");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: c.serviceName,
        serviceType: "Webdesign & Webentwicklung",
        description: "Moderne, schnelle Websites für kleine und mittlere Unternehmen — auf Wunsch mit KI-Assistent.",
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

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">{c.featuresHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {c.features.map((f) => (
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
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">{c.stepsHeading}</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {c.steps.map((s) => (
            <div key={s.n}>
              <div className="text-[13px] font-bold text-[#A09AFF] mb-3">{s.n}</div>
              <h3 className="text-[16px] font-semibold mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">{c.faqHeading}</h2>
        <div className="space-y-6">
          {c.faq.map((f) => (
            <div key={f.question}>
              <h3 className="text-[15.5px] font-semibold mb-2">{f.question}</h3>
              <p className="text-[14px] leading-relaxed text-white/55">{f.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] leading-relaxed text-white/50 mt-10">
          {beforeChatbots}
          <Link href={localePathname(contentLocale, "/leistungen/ki-chatbots")} className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">{c.chatbotsLabel}</Link>
          {betweenLinks}
          <Link href={localePathname(contentLocale, "/ratgeber")} className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">{c.ratgeberLabel}</Link>
          {afterRatgeber}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl px-8 py-12 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[26px] font-bold mb-3">{c.ctaHeading}</h2>
          <p className="text-white/55 mb-8 max-w-xl mx-auto">{c.ctaText}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
