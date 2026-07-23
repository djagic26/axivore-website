import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro"];
const PATH = "/leistungen/webseiten";

type Item = { title: string; text: string };
type Step = { n: string; title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr" | "en" | "ro", {
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
  en: {
    metaTitle: "Website Design & Development — Modern Websites for Small Businesses | Axivore",
    metaDescription: "Axivore builds modern, fast websites that turn visitors into customers — with an optional AI assistant for booking and customer inquiries. Fixed price, live in 1–3 weeks.",
    ogDescription: "Modern, fast websites that turn visitors into customers — with an optional AI assistant. Fixed price, live in 1–3 weeks.",
    breadcrumb: "Websites",
    serviceName: "Websites & Landing Pages",
    eyebrow: "Services / Websites",
    h1: "Websites that don't just look good.",
    subheadline: "A modern website is more than a digital business card. We build sites that turn visitors into customers — fast, mobile, found on Google — and on request with an AI assistant that books appointments and answers questions, even after hours.",
    featuresHeading: "What you get",
    features: [
      { title: "Professional appearance", text: "A design that builds trust and fits your business — not off the shelf, but tailored to you." },
      { title: "Fast & mobile", text: "Your site loads in seconds and looks just as good on a phone as on a computer — where most customers find you." },
      { title: "Found locally", text: "Built cleanly for Google, so customers in your region find you when they search for your service." },
      { title: "AI assistant (optional)", text: "On request we build in an assistant that answers questions and books appointments — your website then works at night too." },
      { title: "Appointments & inquiries", text: "Contact form, appointment booking or WhatsApp — visitors become inquiries directly, with no detours." },
      { title: "Easy to maintain", text: "You can change content yourself or we take care of maintenance — whichever you prefer." },
    ],
    stepsHeading: "How it works",
    steps: [
      { n: "01", title: "Conversation & concept", text: "We clarify what your website needs to achieve and who your customers are. Then you get a fixed-price quote." },
      { n: "02", title: "Design & build", text: "We design and build the site — with your content, your logo, your voice. You see interim versions and give feedback." },
      { n: "03", title: "Live & support", text: "The site goes live, we take care of tech and hosting. On request with ongoing maintenance." },
    ],
    faqHeading: "Frequently asked questions",
    faq: [
      { question: "What does a website from Axivore cost?", answer: "It depends on scope. You get a written fixed-price quote upfront — the price doesn't change after that. A classic business site starts in the low four figures, smaller landing pages below that." },
      { question: "How long until my website is live?", answer: "Usually 1 to 3 weeks, depending on scope and how quickly we get your content (text, images). We give you a realistic date upfront." },
      { question: "Can I change the content myself later?", answer: "Yes. We build the site so you can maintain text and images yourself — or we take care of maintenance for you. Whichever you prefer." },
      { question: "Do you also do search engine optimization (SEO)?", answer: "We build every website technically clean for Google. On request we also handle local SEO, so customers in your region find you better." },
    ],
    crossLinkText: "Does a website with an AI assistant fit your business? Also check out our {CHATBOTS} or take a look at our {RATGEBER}.",
    chatbotsLabel: "AI Chatbots",
    ratgeberLabel: "Guide",
    ctaHeading: "Ready for a website that works?",
    ctaText: "In a free 30-minute call, we'll look at what your website needs to achieve — and afterwards you'll get a fixed-price quote. No pitch.",
    ctaButton: "Book a free call",
    start: "Home",
    leistungenLabel: "Services",
  },
  ro: {
    metaTitle: "Design și dezvoltare de site-uri web — site-uri moderne pentru firme mici | Axivore",
    metaDescription: "Axivore construiește site-uri web moderne, rapide, care transformă vizitatorii în clienți — cu un asistent AI opțional pentru programări și cereri. Preț fix, live în 1–3 săptămâni.",
    ogDescription: "Site-uri web moderne, rapide, care transformă vizitatorii în clienți — cu un asistent AI opțional. Preț fix, live în 1–3 săptămâni.",
    breadcrumb: "Site-uri web",
    serviceName: "Site-uri web și pagini de destinație",
    eyebrow: "Servicii / Site-uri web",
    h1: "Site-uri web care nu doar arată bine.",
    subheadline: "Un site web modern este mai mult decât o carte de vizită digitală. Construim site-uri care transformă vizitatorii în clienți — rapide, adaptate mobilului, găsite pe Google — și, la cerere, cu un asistent AI care programează întâlniri și răspunde la întrebări, chiar și după program.",
    featuresHeading: "Ce primești",
    features: [
      { title: "Aspect profesional", text: "Un design care inspiră încredere și se potrivește firmei tale — nu de serie, ci personalizat pentru tine." },
      { title: "Rapid și adaptat mobilului", text: "Site-ul tău se încarcă în secunde și arată la fel de bine pe telefon ca pe calculator — acolo unde majoritatea clienților te găsesc." },
      { title: "Găsit local", text: "Construit corect pentru Google, ca să te găsească clienții din regiunea ta când caută serviciul tău." },
      { title: "Asistent AI (opțional)", text: "La cerere, integrăm un asistent care răspunde la întrebări și programează întâlniri — site-ul tău lucrează atunci și noaptea." },
      { title: "Programări și cereri", text: "Formular de contact, programare online sau WhatsApp — vizitatorii devin direct cereri, fără ocolișuri." },
      { title: "Ușor de întreținut", text: "Poți modifica singur conținutul sau preluăm noi întreținerea — cum preferi." },
    ],
    stepsHeading: "Cum funcționează",
    steps: [
      { n: "01", title: "Discuție și concept", text: "Clarificăm ce trebuie să realizeze site-ul tău și cine sunt clienții tăi. Apoi primești o ofertă cu preț fix." },
      { n: "02", title: "Design și construire", text: "Proiectăm și construim site-ul — cu conținutul, logo-ul, tonul tău. Vezi etape intermediare și oferi feedback." },
      { n: "03", title: "Lansare și întreținere", text: "Site-ul este lansat, ne ocupăm de tehnologie și hosting. La cerere, cu întreținere continuă." },
    ],
    faqHeading: "Întrebări frecvente",
    faq: [
      { question: "Cât costă un site web la Axivore?", answer: "Depinde de amploare. Primești în avans o ofertă scrisă cu preț fix — prețul nu se schimbă după aceea. Un site clasic de firmă începe în intervalul mediu-jos de patru cifre, paginile de destinație mai mici sub acest nivel." },
      { question: "Cât durează până când site-ul meu e live?", answer: "De obicei 1 până la 3 săptămâni, în funcție de amploare și cât de repede primim conținutul tău (texte, imagini). Îți spunem dinainte un termen realist." },
      { question: "Pot modifica singur conținutul mai târziu?", answer: "Da. Construim site-ul astfel încât să poți întreține singur texte și imagini — sau preluăm noi întreținerea pentru tine. Exact cum preferi." },
      { question: "Faceți și optimizare pentru motoarele de căutare (SEO)?", answer: "Construim fiecare site tehnic corect pentru Google. La cerere, ne ocupăm și de SEO local, ca clienții din regiunea ta să te găsească mai bine." },
    ],
    crossLinkText: "Un site web cu asistent AI se potrivește firmei tale? Vezi și {CHATBOTS} sau aruncă o privire în {RATGEBER}.",
    chatbotsLabel: "chatbot-urile noastre AI",
    ratgeberLabel: "ghidul nostru",
    ctaHeading: "Ești gata pentru un site web care lucrează?",
    ctaText: "La o discuție gratuită de 30 de minute analizăm ce trebuie să realizeze site-ul tău — și primești apoi o ofertă cu preț fix. Fără prezentare de vânzare.",
    ctaButton: "Programează o discuție gratuită",
    start: "Acasă",
    leistungenLabel: "Servicii",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  return partialPageMetadata(
    contentLocale,
    PATH,
    { de: { title: CONTENT.de.metaTitle, description: CONTENT.de.metaDescription }, hr: { title: CONTENT.hr.metaTitle, description: CONTENT.hr.metaDescription }, en: { title: CONTENT.en.metaTitle, description: CONTENT.en.metaDescription }, ro: { title: CONTENT.ro.metaTitle, description: CONTENT.ro.metaDescription } },
    AVAILABLE
  );
}

export default async function WebseitenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en" | "ro"];
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
