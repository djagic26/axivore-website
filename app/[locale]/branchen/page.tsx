import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { getBranchenList } from "@/lib/branchen";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro"];

const COPY: Record<"de" | "hr" | "en" | "ro", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  eyebrow: string; h1: string; intro: string; more: string; noMatchHeading: string; noMatchText: string; ctaButton: string;
  start: string;
}> = {
  de: {
    metaTitle: "KI-Automatisierung nach Branche — für dein Geschäft | Axivore",
    metaDescription:
      "KI-Automatisierung passend zu deiner Branche: Handwerk, Gastronomie, Praxen, Agenturen und Dienstleister. Axivore baut Systeme, die genau die Aufgaben deiner Branche übernehmen — live in 1–2 Wochen.",
    ogDescription: "KI-Automatisierung für Handwerk, Gastronomie, Praxen, Agenturen und Dienstleister in Deutschland.",
    eyebrow: "Branchen",
    h1: "KI-Automatisierung für deine Branche.",
    intro: "Jede Branche verliert Zeit an anderen Aufgaben. Wir bauen Systeme, die genau die wiederkehrende Arbeit deines Geschäfts übernehmen — damit du dich auf das konzentrierst, was zählt. Wähle deine Branche:",
    more: "Mehr erfahren →",
    noMatchHeading: "Deine Branche ist nicht dabei?",
    noMatchText: "Kein Problem — die meisten Abläufe ähneln sich. Sag uns im kostenlosen Gespräch, welche Aufgabe dich am meisten Zeit kostet.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
  },
  hr: {
    metaTitle: "AI automatizacija po branši — za tvoj posao | Axivore",
    metaDescription:
      "AI automatizacija prilagođena tvojoj branši: obrt, ugostiteljstvo, ordinacije, agencije i pružatelji usluga. Axivore gradi sustave koji preuzimaju upravo zadatke tvoje branše — live za 1–2 tjedna.",
    ogDescription: "AI automatizacija za obrt, ugostiteljstvo, ordinacije, agencije i pružatelje usluga u Njemačkoj.",
    eyebrow: "Branše",
    h1: "AI automatizacija za tvoju branšu.",
    intro: "Svaka branša gubi vrijeme na drugačijim zadacima. Gradimo sustave koji preuzimaju upravo ponavljajući posao tvog poslovanja — da se ti možeš usredotočiti na ono što je važno. Odaberi svoju branšu:",
    more: "Saznaj više →",
    noMatchHeading: "Tvoje branše nema na popisu?",
    noMatchText: "Nema problema — većina procesa je slična. Reci nam na besplatnom razgovoru koji ti zadatak oduzima najviše vremena.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
  },
  en: {
    metaTitle: "AI Automation by Industry — For Your Business | Axivore",
    metaDescription:
      "AI automation tailored to your industry: trade businesses, hospitality, medical practices, agencies and service providers. Axivore builds systems that take over exactly your industry's tasks — live in 1–2 weeks.",
    ogDescription: "AI automation for trade businesses, hospitality, practices, agencies and service providers in Germany.",
    eyebrow: "Industries",
    h1: "AI automation for your industry.",
    intro: "Every industry loses time on different tasks. We build systems that take over exactly the recurring work of your business — so you can focus on what matters. Choose your industry:",
    more: "Learn more →",
    noMatchHeading: "Your industry isn't listed?",
    noMatchText: "No problem — most workflows are similar. Tell us in a free call which task costs you the most time.",
    ctaButton: "Book a free call",
    start: "Home",
  },
  ro: {
    metaTitle: "Automatizare AI pe domenii — pentru afacerea ta | Axivore",
    metaDescription: "Automatizare AI adaptată domeniului tău: meșteșugari, ospitalitate, cabinete medicale, agenții și prestatori de servicii. Axivore construiește sisteme care preiau exact sarcinile domeniului tău — live în 1–2 săptămâni.",
    ogDescription: "Automatizare AI pentru meșteșugari, ospitalitate, cabinete, agenții și prestatori de servicii din Germania.",
    eyebrow: "Domenii",
    h1: "Automatizare AI pentru domeniul tău.",
    intro: "Fiecare domeniu pierde timp cu sarcini diferite. Construim sisteme care preiau exact munca recurentă a afacerii tale — ca tu să te poți concentra pe ce contează. Alege-ți domeniul:",
    more: "Află mai multe →",
    noMatchHeading: "Domeniul tău nu e pe listă?",
    noMatchText: "Nicio problemă — majoritatea proceselor sunt similare. Spune-ne la o discuție gratuită care sarcină îți consumă cel mai mult timp.",
    ctaButton: "Programează o discuție gratuită",
    start: "Acasă",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = COPY[contentLocale as "de" | "hr" | "en" | "ro"];
  return partialPageMetadata(
    contentLocale,
    "/branchen",
    { de: { title: COPY.de.metaTitle, description: COPY.de.metaDescription }, hr: { title: COPY.hr.metaTitle, description: COPY.hr.metaDescription }, en: { title: COPY.en.metaTitle, description: COPY.en.metaDescription }, ro: { title: COPY.ro.metaTitle, description: COPY.ro.metaDescription } },
    AVAILABLE
  );
}

export default async function BranchenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = COPY[contentLocale as "de" | "hr" | "en" | "ro"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, "/branchen")}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#collection`,
        url: pageUrl,
        name: c.metaTitle.split(" — ")[0],
        isPartOf: { "@id": "https://axivore.io/#website" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.start, item: siteUrl },
          { "@type": "ListItem", position: 2, name: c.eyebrow, item: pageUrl },
        ],
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
        <p className="text-[17px] leading-relaxed text-white/60">{c.intro}</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {getBranchenList(contentLocale).map((b) => (
            <Link
              key={b.slug}
              href={localePathname(contentLocale, `/branchen/${b.slug}`)}
              className="rounded-xl p-6 transition-transform hover:scale-[1.02]"
              style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <h2 className="text-[18px] font-semibold mb-2">{b.name}</h2>
              <p className="text-[13.5px] leading-relaxed text-white/50">{b.intro.split(".")[0]}.</p>
              <span className="inline-block mt-4 text-[13px] font-medium text-[#A09AFF]">{c.more}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-2xl px-8 py-11 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[24px] font-bold mb-3">{c.noMatchHeading}</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">{c.noMatchText}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
