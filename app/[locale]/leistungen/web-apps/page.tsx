import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en"];
const PATH = "/leistungen/web-apps";

type Item = { title: string; text: string };
type Step = { n: string; title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr" | "en", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  breadcrumb: string; serviceName: string; eyebrow: string; h1: string; subheadline: string;
  useCasesHeading: string; useCases: Item[];
  stepsHeading: string; steps: Step[];
  faqHeading: string; faq: Faq[];
  projekteText: string; projekteLinkLabel: string;
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string; leistungenLabel: string;
}> = {
  de: {
    metaTitle: "Web-App & SaaS entwickeln lassen — maßgeschneiderte Software | Axivore",
    metaDescription: "Axivore entwickelt maßgeschneiderte Web-Apps und SaaS-Produkte für kleine und mittlere Unternehmen — von der Idee bis live. Genau auf deinen Betrieb zugeschnitten, zum Festpreis.",
    ogDescription: "Maßgeschneiderte Web-Apps und SaaS-Produkte von der Idee bis live — genau auf deinen Betrieb zugeschnitten, zum Festpreis.",
    breadcrumb: "Web-Apps & SaaS",
    serviceName: "Web-Apps & SaaS-Entwicklung",
    eyebrow: "Leistungen / Web-Apps & SaaS",
    h1: "Software, die zu deinem Betrieb passt.",
    subheadline: "Standardsoftware zwingt dich, deinen Ablauf an das Programm anzupassen. Wir machen es umgekehrt: Wir bauen eine Web-App oder ein SaaS-Produkt, das genau deinen Prozess abbildet — von der ersten Idee bis live, zum Festpreis.",
    useCasesHeading: "Was wir bauen",
    useCases: [
      { title: "Interne Tools", text: "Software, die genau deinen Ablauf abbildet — statt teurer Standardlösungen, die nie richtig passen und die du nie ganz nutzt." },
      { title: "Kundenportale", text: "Ein geschützter Bereich, in dem deine Kunden Dokumente, Termine oder Status einsehen — ohne ständige Rückfragen bei dir." },
      { title: "SaaS-Produkte", text: "Du hast eine Produktidee? Wir bauen dein SaaS von der Idee über MVP bis zum Start — inklusive Nutzerverwaltung und Abrechnung." },
      { title: "Dashboards & Auswertungen", text: "Zahlen aus verschiedenen Quellen an einem Ort — übersichtlich, aktuell, damit du Entscheidungen auf Basis echter Daten triffst." },
      { title: "Buchungs- & Bestellsysteme", text: "Maßgeschneiderte Systeme für Termine, Reservierungen oder Bestellungen — genau so, wie dein Betrieb sie braucht." },
      { title: "Integrationen", text: "Wir verbinden deine bestehenden Tools, damit Daten automatisch fließen — kein Copy-Paste zwischen Programmen mehr." },
    ],
    stepsHeading: "So läuft es ab",
    steps: [
      { n: "01", title: "Idee & Scope", text: "Wir klären, was die Anwendung können muss und für wen. Danach bekommst du ein Festpreis-Angebot mit klarem Umfang." },
      { n: "02", title: "Bauen & Testen", text: "Wir entwickeln in Etappen, du siehst früh erste Versionen und gibst Feedback — so gibt es am Ende keine Überraschungen." },
      { n: "03", title: "Live & Weiterentwicklung", text: "Die Anwendung geht live. Auf Wunsch entwickeln wir sie weiter, wenn dein Betrieb wächst und neue Anforderungen kommen." },
    ],
    faqHeading: "Häufige Fragen",
    faq: [
      { question: "Was kostet die Entwicklung einer Web-App?", answer: "Das hängt stark vom Umfang ab. Wir teilen größere Projekte in Etappen, damit du nicht alles auf einmal bezahlst. Vorab bekommst du immer ein schriftliches Festpreis-Angebot mit klarem Umfang — keine offene Rechnung." },
      { question: "Wie lange dauert die Entwicklung?", answer: "Ein erster nutzbarer Stand (MVP) ist oft in wenigen Wochen möglich. Umfangreichere Produkte wachsen in Etappen. Wir sagen dir vorab einen realistischen Zeitplan." },
      { question: "Gehört mir der Code am Ende?", answer: "Ja. Was wir für dich bauen, gehört dir — inklusive Code. Du bist nicht an uns gebunden und kannst die Anwendung jederzeit weitergeben." },
      { question: "Könnt ihr auf einer bestehenden Lösung aufbauen?", answer: "Oft ja. Wir schauen uns an, was du bereits hast, und erweitern oder verbinden es — statt alles neu zu bauen, wenn es sich nicht lohnt." },
    ],
    projekteText: "Live-Beispiele unserer eigenen Produkte findest du unter {LINK} — echte SaaS-Systeme, die wir selbst gebaut haben und täglich betreiben.",
    projekteLinkLabel: "Projekte",
    ctaHeading: "Hast du eine Idee im Kopf?",
    ctaText: "Erzähl sie uns in einem kostenlosen 30-Minuten-Gespräch. Wir sagen dir ehrlich, ob und wie sie sich umsetzen lässt — und was es kostet. Kein Pitch.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
    leistungenLabel: "Leistungen",
  },
  hr: {
    metaTitle: "Izrada web-aplikacije i SaaS-a — softver po mjeri | Axivore",
    metaDescription: "Axivore razvija softver po mjeri — web-aplikacije i SaaS proizvode za male i srednje tvrtke — od ideje do live. Skrojeno točno za tvoj posao, po fiksnoj cijeni.",
    ogDescription: "Softver po mjeri, od ideje do live — skrojeno točno za tvoj posao, po fiksnoj cijeni.",
    breadcrumb: "Web-aplikacije i SaaS",
    serviceName: "Razvoj web-aplikacija i SaaS-a",
    eyebrow: "Usluge / Web-aplikacije i SaaS",
    h1: "Softver koji pristaje tvom poslu.",
    subheadline: "Standardni softver tjera te da svoj proces prilagodiš programu. Mi radimo obrnuto: gradimo web-aplikaciju ili SaaS proizvod koji prati točno tvoj proces — od prve ideje do live, po fiksnoj cijeni.",
    useCasesHeading: "Što gradimo",
    useCases: [
      { title: "Interni alati", text: "Softver koji prati točno tvoj proces — umjesto skupih standardnih rješenja koja nikad ne pristaju kako treba i koja nikad u potpunosti ne koristiš." },
      { title: "Portali za klijente", text: "Zaštićeno područje u kojem tvoji klijenti vide dokumente, termine ili status — bez stalnih dodatnih upita tebi." },
      { title: "SaaS proizvodi", text: "Imaš ideju za proizvod? Gradimo tvoj SaaS od ideje preko MVP-a do lansiranja — uključujući upravljanje korisnicima i naplatu." },
      { title: "Dashboardi i analize", text: "Brojevi s različitih izvora na jednom mjestu — pregledno, ažurno, da odluke donosiš na temelju stvarnih podataka." },
      { title: "Sustavi za rezervacije i narudžbe", text: "Sustavi po mjeri za termine, rezervacije ili narudžbe — točno onako kako tvoj posao treba." },
      { title: "Integracije", text: "Povezujemo tvoje postojeće alate da podaci teku automatski — više nema copy-pastea između programa." },
    ],
    stepsHeading: "Kako to izgleda",
    steps: [
      { n: "01", title: "Ideja i opseg", text: "Razjasnimo što aplikacija mora moći i za koga. Nakon toga dobivaš ponudu s fiksnom cijenom i jasnim opsegom." },
      { n: "02", title: "Izrada i testiranje", text: "Razvijamo u etapama, ti rano vidiš prve verzije i daješ feedback — tako na kraju nema iznenađenja." },
      { n: "03", title: "Live i daljnji razvoj", text: "Aplikacija ide live. Po želji je dalje razvijamo kako tvoj posao raste i dolaze novi zahtjevi." },
    ],
    faqHeading: "Česta pitanja",
    faq: [
      { question: "Koliko košta razvoj web-aplikacije?", answer: "Ovisi uvelike o opsegu. Veće projekte dijelimo na etape, da ne plaćaš sve odjednom. Unaprijed uvijek dobivaš pisanu ponudu s fiksnom cijenom i jasnim opsegom — bez otvorenog računa." },
      { question: "Koliko traje razvoj?", answer: "Prva upotrebljiva verzija (MVP) često je moguća za nekoliko tjedana. Opsežniji proizvodi rastu u etapama. Unaprijed ti kažemo realan rok." },
      { question: "Je li kod na kraju moj?", answer: "Da. Ono što gradimo za tebe, tvoje je — uključujući kod. Nisi vezan uz nas i aplikaciju možeš prenijeti bilo kad." },
      { question: "Možete li nadograditi postojeće rješenje?", answer: "Često da. Pogledamo što već imaš i proširimo ili povežemo to — umjesto da sve gradimo iznova ako se to ne isplati." },
    ],
    projekteText: "Live primjere naših vlastitih proizvoda pronađi na {LINK} — pravi SaaS sustavi koje smo sami izgradili i svakodnevno pokrećemo.",
    projekteLinkLabel: "Projekti",
    ctaHeading: "Imaš ideju u glavi?",
    ctaText: "Ispričaj nam je na besplatnom 30-minutnom razgovoru. Iskreno ćemo ti reći može li se i kako ostvariti — i koliko košta. Bez pitcha.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
    leistungenLabel: "Usluge",
  },
  en: {
    metaTitle: "Custom Web App & SaaS Development | Axivore",
    metaDescription: "Axivore builds custom web apps and SaaS products for small and medium businesses — from idea to live. Tailored exactly to your business, at a fixed price.",
    ogDescription: "Custom web apps and SaaS products from idea to live — tailored exactly to your business, at a fixed price.",
    breadcrumb: "Web Apps & SaaS",
    serviceName: "Web App & SaaS Development",
    eyebrow: "Services / Web Apps & SaaS",
    h1: "Software that fits your business.",
    subheadline: "Off-the-shelf software forces you to adapt your workflow to the program. We do it the other way around: we build a web app or SaaS product that mirrors your exact process — from the first idea to live, at a fixed price.",
    useCasesHeading: "What we build",
    useCases: [
      { title: "Internal tools", text: "Software that mirrors your exact workflow — instead of expensive off-the-shelf solutions that never quite fit and that you never fully use." },
      { title: "Customer portals", text: "A protected area where your customers can view documents, appointments or status — without constant follow-up questions to you." },
      { title: "SaaS products", text: "Have a product idea? We build your SaaS from idea through MVP to launch — including user management and billing." },
      { title: "Dashboards & analytics", text: "Numbers from different sources in one place — clear, up to date, so you make decisions based on real data." },
      { title: "Booking & ordering systems", text: "Custom systems for appointments, reservations or orders — exactly the way your business needs them." },
      { title: "Integrations", text: "We connect your existing tools so data flows automatically — no more copy-paste between programs." },
    ],
    stepsHeading: "How it works",
    steps: [
      { n: "01", title: "Idea & scope", text: "We clarify what the application needs to do and for whom. Then you get a fixed-price quote with a clear scope." },
      { n: "02", title: "Build & test", text: "We develop in stages, you see early versions and give feedback — so there are no surprises at the end." },
      { n: "03", title: "Live & ongoing development", text: "The application goes live. On request, we keep developing it as your business grows and new requirements come up." },
    ],
    faqHeading: "Frequently asked questions",
    faq: [
      { question: "What does developing a web app cost?", answer: "It depends heavily on scope. We split larger projects into stages so you don't pay for everything at once. You always get a written fixed-price quote with a clear scope upfront — no open-ended bill." },
      { question: "How long does development take?", answer: "A first usable version (MVP) is often possible within a few weeks. Larger products grow in stages. We give you a realistic timeline upfront." },
      { question: "Do I own the code in the end?", answer: "Yes. What we build for you belongs to you — including the code. You're not tied to us and can hand off the application at any time." },
      { question: "Can you build on an existing solution?", answer: "Often, yes. We look at what you already have and extend or connect it — instead of rebuilding everything from scratch when that's not worth it." },
    ],
    projekteText: "You'll find live examples of our own products at {LINK} — real SaaS systems we built ourselves and run every day.",
    projekteLinkLabel: "Projects",
    ctaHeading: "Got an idea in mind?",
    ctaText: "Tell us about it in a free 30-minute call. We'll tell you honestly whether and how it can be built — and what it costs. No pitch.",
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

export default async function WebAppsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const leistungenUrl = `https://axivore.io${localePathname(contentLocale, "/leistungen")}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;
  const [projekteBefore, projekteAfter] = c.projekteText.split("{LINK}");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: c.serviceName,
        serviceType: "Softwareentwicklung",
        description: "Maßgeschneiderte Web-Anwendungen und SaaS-Produkte für kleine und mittlere Unternehmen — von der Idee bis live.",
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
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">{c.useCasesHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {c.useCases.map((u) => (
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
          {projekteBefore}
          <Link href={localePathname(contentLocale, "/projekte")} className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">{c.projekteLinkLabel}</Link>
          {projekteAfter}
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
