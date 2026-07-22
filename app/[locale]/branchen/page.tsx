import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { branchen } from "@/lib/branchen";

const SITE_URL = "https://axivore.io";
const PAGE_URL = `${SITE_URL}/branchen`;

export const metadata: Metadata = {
  title: "KI-Automatisierung nach Branche — für dein Geschäft | Axivore",
  description:
    "KI-Automatisierung passend zu deiner Branche: Handwerk, Gastronomie, Praxen, Agenturen und Dienstleister. Axivore baut Systeme, die genau die Aufgaben deiner Branche übernehmen — live in 1–2 Wochen.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "KI-Automatisierung nach Branche — für dein Geschäft | Axivore",
    description:
      "KI-Automatisierung für Handwerk, Gastronomie, Praxen, Agenturen und Dienstleister in Deutschland.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#collection`,
      url: PAGE_URL,
      name: "KI-Automatisierung nach Branche",
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Branchen", item: PAGE_URL },
      ],
    },
  ],
};

export default function BranchenPage() {
  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">Branchen</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          KI-Automatisierung für deine Branche.
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">
          Jede Branche verliert Zeit an anderen Aufgaben. Wir bauen Systeme, die genau
          die wiederkehrende Arbeit deines Geschäfts übernehmen — damit du dich auf das
          konzentrierst, was zählt. Wähle deine Branche:
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          {branchen.map((b) => (
            <Link
              key={b.slug}
              href={`/branchen/${b.slug}`}
              className="rounded-xl p-6 transition-transform hover:scale-[1.02]"
              style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <h2 className="text-[18px] font-semibold mb-2">{b.name}</h2>
              <p className="text-[13.5px] leading-relaxed text-white/50">{b.intro.split(".")[0]}.</p>
              <span className="inline-block mt-4 text-[13px] font-medium text-[#A09AFF]">Mehr erfahren →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-2xl px-8 py-11 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[24px] font-bold mb-3">Deine Branche ist nicht dabei?</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">
            Kein Problem — die meisten Abläufe ähneln sich. Sag uns im kostenlosen Gespräch,
            welche Aufgabe dich am meisten Zeit kostet.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
