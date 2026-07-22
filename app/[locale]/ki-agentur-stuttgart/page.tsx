import type { Metadata } from "next";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en"];
const PATH = "/ki-agentur-stuttgart";

const region = ["Stuttgart", "Esslingen", "Ludwigsburg", "Böblingen", "Sindelfingen", "Waiblingen", "Fellbach", "Leonberg"];

type Item = { title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr" | "en", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  eyebrow: string; h1: string; subheadline: string;
  servicesHeading: string; services: Item[];
  whyHeading: string; why: Item[];
  regionHeading: string; regionText: string;
  faqHeading: string; faq: Faq[];
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string; localBusinessDescription: string;
}> = {
  de: {
    metaTitle: "KI-Agentur Stuttgart — KI-Automatisierung für KMU | Axivore",
    metaDescription: "Axivore ist deine KI-Agentur aus Stuttgart: KI-Automatisierungen, Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und der Region. Live in 1–2 Wochen.",
    ogDescription: "KI-Automatisierungen, Chatbots und Software für kleine Unternehmen in Stuttgart und Umgebung. Persönlich, lokal, ehrlich.",
    eyebrow: "KI-Agentur · Stuttgart",
    h1: "KI-Agentur aus Stuttgart für kleine Unternehmen.",
    subheadline: "Axivore baut KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und der Region. Wir nehmen dir die Aufgaben ab, die jede Woche Stunden kosten — persönlich, lokal und ohne dass du Technik verstehen musst.",
    servicesHeading: "Was wir für Stuttgarter Unternehmen bauen",
    services: [
      { title: "KI-Automatisierung", text: "Angebote, Rechnungen, Berichte und Dateneingaben laufen automatisch — 5–15 Stunden pro Woche zurückgewonnen, ohne neue Mitarbeiter." },
      { title: "KI-Chatbots", text: "Ein digitaler Assistent beantwortet Kundenanfragen rund um die Uhr, bucht Termine und qualifiziert Leads — auch nach Feierabend." },
      { title: "Maßgeschneiderte Software", text: "Kleine Tools, die genau zu deinem Betrieb passen — statt teurer Standardlösungen, die du nie ganz nutzt." },
    ],
    whyHeading: "Warum eine KI-Agentur aus der Region",
    why: [
      { title: "Aus Stuttgart, für Stuttgart", text: "Wir kennen die Betriebe hier — Handwerk, Dienstleistung, Gastronomie, Praxen. Kein anonymes Callcenter, sondern ein Ansprechpartner aus der Region." },
      { title: "Persönlich erreichbar", text: "Vor-Ort-Termin in Stuttgart und Umgebung oder per Video — wie es dir passt. Du redest immer direkt mit der Person, die dein System baut." },
      { title: "Schnell live", text: "Die erste Automatisierung läuft meist in 1–2 Wochen. Kein monatelanges Projekt, sondern ein Ergebnis, das du sofort spürst." },
    ],
    regionHeading: "In Stuttgart und Umgebung",
    regionText: "Wir betreuen Unternehmen in ganz Stuttgart und der Region — unter anderem in:",
    faqHeading: "Häufige Fragen",
    faq: [
      { question: "Arbeitet Axivore nur in Stuttgart?", answer: "Unser Sitz ist in Stuttgart und wir betreuen Unternehmen in Stuttgart und der gesamten Region — von Esslingen über Ludwigsburg bis Böblingen. Vor-Ort-Termine sind in der Region problemlos möglich, der Rest läuft bequem digital." },
      { question: "Für welche Unternehmen lohnt sich das?", answer: "Für kleine und mittlere Betriebe mit 5–30 Mitarbeitern, die Zeit an wiederkehrenden Aufgaben verlieren — Handwerk, Dienstleistungen, Agenturen, Gastronomie, Praxen. Gerade kleine Betriebe profitieren am meisten, weil jede gesparte Stunde direkt zählt." },
      { question: "Was kostet eine KI-Automatisierung?", answer: "Das hängt vom Umfang ab. Im kostenlosen Erstgespräch schauen wir uns deine zeitfressende Aufgabe an und sagen dir ehrlich, was es kostet und ob sich der Aufwand lohnt — ohne Verpflichtung." },
      { question: "Muss ich technisch sein?", answer: "Nein. Du beschreibst die Aufgabe in normaler Sprache, wir bauen den Rest. Die Bedienung ist anschließend so einfach wie eine E-Mail." },
    ],
    ctaHeading: "Lass uns über deinen Betrieb reden.",
    ctaText: "Kostenloses Erstgespräch — vor Ort in Stuttgart oder per Video. Wir zeigen dir, welche Aufgabe sich bei dir zuerst automatisieren lässt.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
    localBusinessDescription: "KI-Agentur aus Stuttgart für KI-Automatisierungen, Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und der Region.",
  },
  hr: {
    metaTitle: "AI agencija Stuttgart — AI automatizacija za male tvrtke | Axivore",
    metaDescription: "Axivore je tvoja AI agencija iz Stuttgarta: AI automatizacije, chatbotovi i softver po mjeri za male i srednje tvrtke u Stuttgartu i okolici. Live za 1–2 tjedna.",
    ogDescription: "AI automatizacije, chatbotovi i softver za male tvrtke u Stuttgartu i okolici. Osobno, lokalno, iskreno.",
    eyebrow: "AI agencija · Stuttgart",
    h1: "AI agencija iz Stuttgarta za male tvrtke.",
    subheadline: "Axivore gradi AI automatizacije, inteligentne chatbotove i softver po mjeri za male i srednje tvrtke u Stuttgartu i okolici. Preuzimamo zadatke koji te svaki tjedan koštaju sate — osobno, lokalno i bez da moraš razumjeti tehniku.",
    servicesHeading: "Što gradimo za tvrtke iz Stuttgarta",
    services: [
      { title: "AI automatizacija", text: "Ponude, računi, izvještaji i unos podataka rade se automatski — 5–15 sati tjedno vraćeno, bez novih zaposlenika." },
      { title: "AI chatbotovi", text: "Digitalni asistent 0-24 odgovara na upite klijenata, zakazuje termine i kvalificira leadove — čak i poslije radnog vremena." },
      { title: "Softver po mjeri", text: "Mali alati koji točno pristaju tvom poslu — umjesto skupih standardnih rješenja koja nikad u potpunosti ne koristiš." },
    ],
    whyHeading: "Zašto AI agencija iz regije",
    why: [
      { title: "Iz Stuttgarta, za Stuttgart", text: "Poznajemo tvrtke ovdje — obrt, uslužne djelatnosti, ugostiteljstvo, ordinacije. Ne anonimni pozivni centar, nego osoba za kontakt iz regije." },
      { title: "Osobno dostupni", text: "Sastanak uživo u Stuttgartu i okolici ili preko videa — kako tebi odgovara. Uvijek razgovaraš izravno s osobom koja gradi tvoj sustav." },
      { title: "Brzo live", text: "Prva automatizacija obično radi za 1–2 tjedna. Ne mjesecima dugačak projekt, nego rezultat koji odmah osjetiš." },
    ],
    regionHeading: "U Stuttgartu i okolici",
    regionText: "Brinemo se o tvrtkama u cijelom Stuttgartu i regiji — među ostalim u:",
    faqHeading: "Česta pitanja",
    faq: [
      { question: "Radi li Axivore samo u Stuttgartu?", answer: "Naše je sjedište u Stuttgartu i brinemo se o tvrtkama u Stuttgartu i cijeloj regiji — od Esslingena preko Ludwigsburga do Böblingena. Sastanci uživo u regiji su bez problema mogući, ostalo ide udobno digitalno." },
      { question: "Za koje se tvrtke ovo isplati?", answer: "Za male i srednje tvrtke s 5–30 zaposlenih koje gube vrijeme na ponavljajućim zadacima — obrt, uslužne djelatnosti, agencije, ugostiteljstvo, ordinacije. Baš male tvrtke imaju najviše koristi, jer svaki ušteđeni sat izravno vrijedi." },
      { question: "Koliko košta AI automatizacija?", answer: "Ovisi o opsegu. Na besplatnom prvom razgovoru pogledamo tvoj zadatak koji ti oduzima vrijeme i iskreno ti kažemo koliko košta i isplati li se trud — bez obveze." },
      { question: "Moram li biti tehnički potkovan?", answer: "Ne. Ti opišeš zadatak običnim jezikom, mi gradimo ostalo. Korištenje je nakon toga jednostavno kao slanje e-maila." },
    ],
    ctaHeading: "Razgovarajmo o tvom poslu.",
    ctaText: "Besplatan prvi razgovor — uživo u Stuttgartu ili preko videa. Pokazat ćemo ti koji se zadatak kod tebe prvo isplati automatizirati.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
    localBusinessDescription: "AI agencija iz Stuttgarta za AI automatizacije, chatbotove i softver po mjeri za male i srednje tvrtke u Stuttgartu i okolici.",
  },
  en: {
    metaTitle: "AI Agency Stuttgart — AI Automation for SMEs | Axivore",
    metaDescription: "Axivore is your AI agency from Stuttgart: AI automations, chatbots and custom software for small and medium businesses in Stuttgart and the region. Live in 1–2 weeks.",
    ogDescription: "AI automations, chatbots and software for small businesses in Stuttgart and the surrounding area. Personal, local, honest.",
    eyebrow: "AI Agency · Stuttgart",
    h1: "AI agency from Stuttgart for small businesses.",
    subheadline: "Axivore builds AI automations, intelligent chatbots and custom software for small and medium businesses in Stuttgart and the region. We take the tasks off your hands that cost hours every week — personal, local, with no need to understand the technology.",
    servicesHeading: "What we build for Stuttgart businesses",
    services: [
      { title: "AI automation", text: "Quotes, invoices, reports and data entry run automatically — 5–15 hours a week reclaimed, with no new hires." },
      { title: "AI chatbots", text: "A digital assistant answers customer inquiries around the clock, books appointments and qualifies leads — even after hours." },
      { title: "Custom software", text: "Small tools that fit your business exactly — instead of expensive off-the-shelf solutions you never fully use." },
    ],
    whyHeading: "Why an AI agency from the region",
    why: [
      { title: "From Stuttgart, for Stuttgart", text: "We know the businesses here — trades, services, hospitality, practices. Not an anonymous call center, but a contact person from the region." },
      { title: "Personally reachable", text: "In-person meeting in Stuttgart and the surrounding area or via video — whichever suits you. You always talk directly to the person building your system." },
      { title: "Live fast", text: "The first automation usually runs within 1–2 weeks. Not a months-long project, but a result you feel immediately." },
    ],
    regionHeading: "In Stuttgart and the surrounding area",
    regionText: "We support businesses across Stuttgart and the region — including in:",
    faqHeading: "Frequently asked questions",
    faq: [
      { question: "Does Axivore only work in Stuttgart?", answer: "We're based in Stuttgart and support businesses in Stuttgart and the entire region — from Esslingen to Ludwigsburg to Böblingen. In-person meetings are easily possible across the region, everything else runs comfortably online." },
      { question: "Which businesses is this worth it for?", answer: "For small and medium businesses with 5–30 employees that lose time on recurring tasks — trades, services, agencies, hospitality, practices. Small businesses in particular benefit the most, because every hour saved counts directly." },
      { question: "What does AI automation cost?", answer: "It depends on the scope. In the free initial call, we'll look at your time-consuming task and tell you honestly what it costs and whether it's worth the effort — with no obligation." },
      { question: "Do I need to be technical?", answer: "No. You describe the task in plain language, we build the rest. Using it afterwards is as simple as sending an email." },
    ],
    ctaHeading: "Let's talk about your business.",
    ctaText: "Free initial call — in person in Stuttgart or via video. We'll show you which task is worth automating first for you.",
    ctaButton: "Book a free call",
    start: "Home",
    localBusinessDescription: "AI agency from Stuttgart for AI automations, chatbots and custom software for small and medium businesses in Stuttgart and the region.",
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

export default async function KiAgenturStuttgartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${pageUrl}/#localbusiness`,
        name: `Axivore — ${c.eyebrow.replace(" · ", " ")}`,
        url: pageUrl,
        logo: "https://axivore.io/icon.png",
        image: "https://axivore.io/opengraph-image",
        description: c.localBusinessDescription,
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
        geo: { "@type": "GeoCoordinates", latitude: 48.8313, longitude: 9.1665 },
        areaServed: region.map((name) => ({ "@type": "City", name })),
        provider: { "@id": "https://axivore.io/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.start, item: siteUrl },
          { "@type": "ListItem", position: 2, name: c.eyebrow, item: pageUrl },
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
        <h2 className="text-[24px] font-bold mb-7">{c.servicesHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {c.services.map((s) => (
            <div key={s.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[16px] font-semibold mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{c.whyHeading}</h2>
        <div className="space-y-5">
          {c.why.map((w) => (
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
        <h2 className="text-[24px] font-bold mb-5">{c.regionHeading}</h2>
        <p className="text-[14px] leading-relaxed text-white/50 mb-6">{c.regionText}</p>
        <div className="flex flex-wrap gap-2.5">
          {region.map((city) => (
            <span key={city} className="text-[13px] px-3.5 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
              {city}
            </span>
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
