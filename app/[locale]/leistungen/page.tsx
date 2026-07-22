import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en"];
const PATH = "/leistungen";

type ServiceCard = { href: string; eyebrow: string; title: string; text: string };
type Pair = [string, string];
type Step = [string, string, string];

const CONTENT: Record<"de" | "hr" | "en", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  eyebrow: string; h1a: string; h1b: string; subheadline: string;
  services: ServiceCard[]; more: string;
  autoHeading: string; autoIntro: string; autoItems: Pair[];
  stepsHeading: string; steps: Step[];
  branchenLinkText: string; branchenLabel: string; ratgeberLabel: string;
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string;
}> = {
  de: {
    metaTitle: "Leistungen — Websites, Software & KI für kleine Unternehmen | Axivore",
    metaDescription: "Was Axivore für kleine und mittlere Unternehmen in Deutschland baut: moderne Websites, maßgeschneiderte Web-Apps & SaaS und KI-Automatisierung. Alles aus einer Hand, live in Wochen.",
    ogDescription: "Moderne Websites, maßgeschneiderte Web-Apps & SaaS und KI-Automatisierung für kleine Unternehmen in Deutschland — alles aus einer Hand.",
    eyebrow: "Leistungen",
    h1a: "Websites, Software & KI",
    h1b: "für kleine Unternehmen.",
    subheadline: "Von der modernen Website über maßgeschneiderte Web-Apps bis zur KI-Automatisierung — wir bauen deine digitale Basis. Alles aus einer Hand, live in Wochen, nicht Monaten. Speziell für Geschäftsführer mit 5–30 Mitarbeitern in Deutschland, die selbst mit anpacken.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Websites", title: "Websites & Landingpages", text: "Moderne, schnelle Websites, die aus Besuchern Kunden machen — auf Wunsch mit KI-Assistent, der Termine bucht und Fragen beantwortet." },
      { href: "/leistungen/web-apps", eyebrow: "Web-Apps & SaaS", title: "Web-Apps & SaaS", text: "Maßgeschneiderte Web-Anwendungen und SaaS-Produkte — von der Idee bis live. Genau auf deinen Betrieb zugeschnitten, nicht von der Stange." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Automatisierung", title: "KI-Automatisierung", text: "Angebote, Rechnungen, Berichte, Dateneingaben — wiederkehrende Aufgaben laufen automatisch. Du sparst 5–15 Stunden pro Woche." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbots", title: "KI-Chatbots", text: "Ein digitaler Assistent, der rund um die Uhr Kundenanfragen beantwortet, Termine bucht und Leads qualifiziert — auch nachts." },
    ],
    more: "Mehr erfahren",
    autoHeading: "Was sich in deinem Betrieb automatisieren lässt",
    autoIntro: "Die meisten kleinen Unternehmen verlieren jede Woche Stunden an denselben wiederkehrenden Aufgaben. Genau da setzen wir an — hier die häufigsten Beispiele aus der Praxis:",
    autoItems: [
      ["Angebote & Kostenvoranschläge", "Aus ein paar Stichpunkten entsteht das fertige, kalkulierte Angebot — formatiert und versandfertig in Minuten statt Stunden."],
      ["Rechnungen & Nachfassen", "Rechnungen entstehen nach dem Auftrag automatisch, offene Posten werden freundlich nachgefasst — ohne dass du daran denken musst."],
      ["Terminvereinbarung", "Kunden buchen selbst einen freien Termin, Bestätigung und Erinnerung laufen automatisch — kein Telefon-Pingpong mehr."],
      ["Kundenanfragen beantworten", "Wiederkehrende Fragen zu Preisen, Öffnungszeiten und Leistungen werden rund um die Uhr beantwortet — auch nach Feierabend."],
      ["Berichte & Reporting", "Zahlen aus verschiedenen Quellen werden automatisch zusammengeführt — der fertige Bericht liegt montags in deinem Postfach."],
      ["Dateneingabe & Übertragung", "Daten wandern automatisch von A nach B — zwischen Formular, Tabelle und deinem System, ganz ohne Copy-Paste."],
    ],
    stepsHeading: "So läuft ein Projekt ab",
    steps: [
      ["01", "Kostenloses Gespräch", "Wir schauen uns deine Abläufe an und finden die Aufgabe, die sich am schnellsten lohnt. Ehrlich — auch wenn die Antwort manchmal lautet: noch nicht."],
      ["02", "Festpreis-Angebot", "Du bekommst ein schriftliches Angebot mit fixem Preis und klarem Umfang. Danach ändert sich der Preis nicht mehr."],
      ["03", "Live in Wochen", "Wir bauen, testen gemeinsam mit dir und gehen live — meist in 1 bis 2 Wochen, nicht in Monaten."],
    ],
    branchenLinkText: "Du bist dir nicht sicher, ob dein Betrieb dafür bereit ist? Schau dir an, wie wir für {BRANCHEN} arbeiten, oder wirf einen Blick in unseren {RATGEBER}.",
    branchenLabel: "verschiedene Branchen",
    ratgeberLabel: "Ratgeber",
    ctaHeading: "Sag uns dein Problem.",
    ctaText: "In einem kostenlosen 30-Minuten-Gespräch schauen wir gemeinsam, welche Aufgabe sich bei dir am schnellsten automatisieren lässt. Kein Pitch.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
  },
  hr: {
    metaTitle: "Usluge — web stranice, softver i AI za male tvrtke | Axivore",
    metaDescription: "Što Axivore gradi za male i srednje tvrtke u Njemačkoj: moderne web stranice, softver po mjeri (web-aplikacije i SaaS) i AI automatizaciju. Sve na jednom mjestu, live za tjedne.",
    ogDescription: "Moderne web stranice, softver po mjeri i AI automatizacija za male tvrtke u Njemačkoj — sve na jednom mjestu.",
    eyebrow: "Usluge",
    h1a: "Web stranice, softver i AI",
    h1b: "za male tvrtke.",
    subheadline: "Od moderne web stranice preko softvera po mjeri do AI automatizacije — gradimo tvoju digitalnu osnovu. Sve na jednom mjestu, live za tjedne, ne mjesece. Posebno za vlasnike s 5–30 zaposlenih u Njemačkoj koji i sami zasuču rukave.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Web stranice", title: "Web stranice i landing stranice", text: "Moderne, brze web stranice koje od posjetitelja stvaraju klijente — po želji s AI asistentom koji zakazuje termine i odgovara na pitanja." },
      { href: "/leistungen/web-apps", eyebrow: "Web-aplikacije i SaaS", title: "Web-aplikacije i SaaS", text: "Web-aplikacije i SaaS proizvodi po mjeri — od ideje do live. Skrojeno točno za tvoj posao, ne s police." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Automatizacija", title: "AI automatizacija", text: "Ponude, računi, izvještaji, unos podataka — ponavljajući zadaci rade se automatski. Štediš 5–15 sati tjedno." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbotovi", title: "AI chatbotovi", text: "Digitalni asistent koji 0-24 odgovara na upite klijenata, zakazuje termine i kvalificira leadove — čak i noću." },
    ],
    more: "Saznaj više",
    autoHeading: "Što se u tvom poslu može automatizirati",
    autoIntro: "Većina malih tvrtki svaki tjedan gubi sate na iste ponavljajuće zadatke. Upravo tu djelujemo — evo najčešćih primjera iz prakse:",
    autoItems: [
      ["Ponude i predračuni", "Iz nekoliko natuknica nastaje gotova, obračunata ponuda — formatirana i spremna za slanje u minutama umjesto sati."],
      ["Računi i podsjećanje", "Računi nastaju automatski nakon posla, nepodmirene stavke se ljubazno podsjećaju — bez da ti to moraš pamtiti."],
      ["Zakazivanje termina", "Klijenti sami rezerviraju slobodan termin, potvrda i podsjetnik idu automatski — više nema prepiske telefonom."],
      ["Odgovaranje na upite klijenata", "Ponavljajuća pitanja o cijenama, radnom vremenu i uslugama odgovaraju se 0-24 — i poslije radnog vremena." ],
      ["Izvještaji i reporting", "Brojevi s različitih izvora automatski se objedinjuju — gotov izvještaj čeka te u sandučiću ponedjeljkom."],
      ["Unos i prijenos podataka", "Podaci putuju automatski od A do B — između forme, tablice i tvog sustava, potpuno bez copy-pastea."],
    ],
    stepsHeading: "Kako izgleda jedan projekt",
    steps: [
      ["01", "Besplatan razgovor", "Pogledamo tvoje procese i pronađemo zadatak koji se najbrže isplati. Iskreno — i kad je odgovor ponekad: još ne."],
      ["02", "Ponuda s fiksnom cijenom", "Dobivaš pisanu ponudu s fiksnom cijenom i jasnim opsegom. Poslije se cijena više ne mijenja."],
      ["03", "Live za tjedne", "Gradimo, zajedno s tobom testiramo i idemo live — obično za 1 do 2 tjedna, ne u mjesecima."],
    ],
    branchenLinkText: "Nisi siguran je li tvoj posao spreman za ovo? Pogledaj kako radimo za {BRANCHEN}, ili baci pogled u naš {RATGEBER}.",
    branchenLabel: "razne branše",
    ratgeberLabel: "vodič",
    ctaHeading: "Reci nam svoj problem.",
    ctaText: "Na besplatnom 30-minutnom razgovoru zajedno pogledamo koji se zadatak kod tebe najbrže može automatizirati. Bez pitcha.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
  },
  en: {
    metaTitle: "Services — Websites, Software & AI for Small Businesses | Axivore",
    metaDescription: "What Axivore builds for small and medium businesses in Germany: modern websites, custom web apps & SaaS, and AI automation. Everything from one source, live within weeks.",
    ogDescription: "Modern websites, custom web apps & SaaS, and AI automation for small businesses in Germany — everything from one source.",
    eyebrow: "Services",
    h1a: "Websites, Software & AI",
    h1b: "for small businesses.",
    subheadline: "From modern websites through custom web apps to AI automation — we build your digital foundation. Everything from one source, live within weeks, not months. Especially for owners of businesses with 5–30 employees in Germany who roll up their sleeves themselves.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Websites", title: "Websites & Landing Pages", text: "Modern, fast websites that turn visitors into customers — on request with an AI assistant that books appointments and answers questions." },
      { href: "/leistungen/web-apps", eyebrow: "Web Apps & SaaS", title: "Web Apps & SaaS", text: "Custom web applications and SaaS products — from idea to live. Tailored exactly to your business, not off the shelf." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Automation", title: "AI Automation", text: "Quotes, invoices, reports, data entry — recurring tasks run automatically. You save 5–15 hours a week." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbots", title: "AI Chatbots", text: "A digital assistant that answers customer inquiries, books appointments and qualifies leads around the clock — even at night." },
    ],
    more: "Learn more",
    autoHeading: "What can be automated in your business",
    autoIntro: "Most small businesses lose hours every week to the same recurring tasks. That's exactly where we come in — here are the most common examples from practice:",
    autoItems: [
      ["Quotes & estimates", "A few bullet points turn into a finished, calculated quote — formatted and ready to send in minutes instead of hours."],
      ["Invoices & follow-ups", "Invoices are created automatically after the job, open items get a friendly follow-up — without you having to remember."],
      ["Appointment scheduling", "Customers book a free slot themselves, confirmation and reminders go out automatically — no more phone tag."],
      ["Answering customer inquiries", "Recurring questions about prices, hours and services are answered around the clock — even after hours."],
      ["Reports & reporting", "Numbers from different sources are automatically merged — the finished report is in your inbox on Monday morning."],
      ["Data entry & transfer", "Data moves automatically from A to B — between form, spreadsheet and your system, with no copy-paste at all."],
    ],
    stepsHeading: "How a project works",
    steps: [
      ["01", "Free call", "We look at your workflows and find the task that pays off fastest. Honestly — even when the answer is sometimes: not yet."],
      ["02", "Fixed-price quote", "You get a written quote with a fixed price and a clear scope. The price doesn't change after that."],
      ["03", "Live within weeks", "We build, test together with you and go live — usually within 1 to 2 weeks, not months."],
    ],
    branchenLinkText: "Not sure if your business is ready for this? See how we work for {BRANCHEN}, or take a look at our {RATGEBER}.",
    branchenLabel: "different industries",
    ratgeberLabel: "guide",
    ctaHeading: "Tell us your problem.",
    ctaText: "In a free 30-minute call, we'll look together at which task can be automated fastest for you. No pitch.",
    ctaButton: "Book a free call",
    start: "Home",
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

export default async function LeistungenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;
  const [beforeBranchen, rest] = c.branchenLinkText.split("{BRANCHEN}");
  const [betweenLinks, afterRatgeber] = rest.split("{RATGEBER}");

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.start, item: siteUrl },
      { "@type": "ListItem", position: 2, name: c.eyebrow, item: pageUrl },
    ],
  };

  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">{c.eyebrow}</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.02] mb-6" style={{ fontSize: "clamp(38px,6vw,68px)" }}>
          {c.h1a}
          <br />
          {c.h1b}
        </h1>
        <p className="text-[16px] leading-relaxed text-white/55 max-w-2xl">{c.subheadline}</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="grid sm:grid-cols-2 gap-5">
          {c.services.map((s) => (
            <Link
              key={s.href}
              href={localePathname(contentLocale, s.href)}
              className="group block rounded-2xl p-7 transition-colors"
              style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-[10.5px] tracking-[0.18em] uppercase text-[#A09AFF] mb-3">{s.eyebrow}</p>
              <h2 className="text-[22px] font-semibold mb-3 group-hover:text-[#C4B8FF] transition-colors">{s.title}</h2>
              <p className="text-[14px] leading-relaxed text-white/50">{s.text}</p>
              <span className="inline-flex items-center gap-1.5 mt-5 text-[13px] font-medium text-[#A09AFF]">
                {c.more}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight mb-5">{c.autoHeading}</h2>
        <p className="text-[15px] leading-relaxed text-white/55 max-w-2xl mb-9">{c.autoIntro}</p>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {c.autoItems.map(([title, text]) => (
            <div key={title} className="flex gap-3.5">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#A09AFF" }} />
              <div>
                <h3 className="text-[15.5px] font-semibold mb-1">{title}</h3>
                <p className="text-[13.5px] leading-relaxed text-white/50">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight mb-8">{c.stepsHeading}</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {c.steps.map(([num, title, text]) => (
            <div key={num}>
              <div className="text-[13px] font-bold text-[#A09AFF] mb-3">{num}</div>
              <h3 className="text-[16px] font-semibold mb-2">{title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] leading-relaxed text-white/50 max-w-2xl mt-10">
          {beforeBranchen}
          <Link href={localePathname(contentLocale, "/branchen")} className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">{c.branchenLabel}</Link>
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
