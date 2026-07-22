import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell } from "@/components/ServiceShell";
import { ratgeberArticles } from "@/lib/ratgeber";

const SITE_URL = "https://axivore.io";
const PAGE_URL = `${SITE_URL}/ratgeber`;

export const metadata: Metadata = {
  title: "Ratgeber — KI & Automatisierung für kleine Unternehmen | Axivore",
  description:
    "Praxisnahe Anleitungen ohne Fachchinesisch: Wie kleine Unternehmen in Deutschland mit KI und Automatisierung Zeit sparen — ehrlich, konkret, ohne Hype.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Ratgeber — KI & Automatisierung für kleine Unternehmen | Axivore",
    description:
      "Praxisnahe Anleitungen ohne Fachchinesisch: Wie kleine Unternehmen mit KI und Automatisierung Zeit sparen.",
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${PAGE_URL}/#collection`,
  url: PAGE_URL,
  name: "Axivore Ratgeber",
  inLanguage: "de-DE",
  about: { "@id": `${SITE_URL}/#organization` },
  hasPart: ratgeberArticles.map((a) => ({
    "@type": "Article",
    headline: a.title,
    url: `${PAGE_URL}/${a.slug}`,
    datePublished: a.date,
  })),
};

export default function RatgeberPage() {
  return (
    <ServiceShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <header className="mb-14 max-w-2xl">
          <p className="text-[11px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#7C5CFF" }}>
            Ratgeber
          </p>
          <h1 className="text-[34px] md:text-[46px] leading-[1.12] font-semibold tracking-tight mb-5">
            KI & Automatisierung — erklärt für kleine Unternehmen.
          </h1>
          <p className="text-[16px] leading-[1.7] text-white/60">
            Keine Buzzwords, keine Hochglanz-Versprechen. Hier schreiben wir auf, was in der Praxis
            funktioniert, was es kostet und wann sich was lohnt — aus unserer täglichen Arbeit mit
            Betrieben in Stuttgart und ganz Deutschland.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ratgeberArticles.map((a) => (
            <Link
              key={a.slug}
              href={`/ratgeber/${a.slug}`}
              className="group rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-4" style={{ color: "#A09AFF" }}>
                {a.category}
              </p>
              <h2 className="text-[20px] leading-[1.3] font-semibold tracking-tight mb-3 group-hover:text-[#c4c0ff] transition-colors">
                {a.title}
              </h2>
              <p className="text-[13.5px] leading-[1.65] text-white/55 mb-5">{a.description}</p>
              <p className="text-[12px] text-white/35">
                <time dateTime={a.date}>{formatDate(a.date)}</time>
                <span className="mx-2">·</span>
                {a.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </ServiceShell>
  );
}
