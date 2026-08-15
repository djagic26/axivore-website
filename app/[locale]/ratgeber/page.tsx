import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell } from "@/components/ServiceShell";
import { getRatgeberArticlesList } from "@/lib/ratgeber";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const PATH = "/ratgeber";

const COPY: Record<"de" | "hr" | "en" | "ro" | "tr" | "it", { metaTitle: string; metaDescription: string; ogDescription: string; eyebrow: string; h1: string; intro: string; dateLocale: string }> = {
  de: {
    metaTitle: "Ratgeber — KI & Automatisierung für kleine Unternehmen | Axivore",
    metaDescription: "Praxisnahe Anleitungen ohne Fachchinesisch: Wie kleine Unternehmen in Deutschland mit KI und Automatisierung Zeit sparen — ehrlich, konkret, ohne Hype.",
    ogDescription: "Praxisnahe Anleitungen ohne Fachchinesisch: Wie kleine Unternehmen mit KI und Automatisierung Zeit sparen.",
    eyebrow: "Ratgeber",
    h1: "KI & Automatisierung — erklärt für kleine Unternehmen.",
    intro: "Keine Buzzwords, keine Hochglanz-Versprechen. Hier schreiben wir auf, was in der Praxis funktioniert, was es kostet und wann sich was lohnt — aus unserer täglichen Arbeit mit Betrieben in Stuttgart und ganz Deutschland.",
    dateLocale: "de-DE",
  },
  hr: {
    metaTitle: "Vodič — AI i automatizacija za male tvrtke | Axivore",
    metaDescription: "Praktični vodiči bez stručnog žargona: kako male tvrtke u Njemačkoj štede vrijeme uz AI i automatizaciju — iskreno, konkretno, bez hypea.",
    ogDescription: "Praktični vodiči bez stručnog žargona: kako male tvrtke štede vrijeme uz AI i automatizaciju.",
    eyebrow: "Vodič",
    h1: "AI i automatizacija — objašnjeno za male tvrtke.",
    intro: "Bez buzzworda, bez sjajnih obećanja. Ovdje pišemo o onome što stvarno funkcionira u praksi, koliko to košta i kad se što isplati — iz našeg svakodnevnog rada s tvrtkama u Stuttgartu i cijeloj Njemačkoj.",
    dateLocale: "hr-HR",
  },
  en: {
    metaTitle: "Guide — AI & Automation for Small Businesses | Axivore",
    metaDescription: "Practical guides with no jargon: how small businesses in Germany save time with AI and automation — honest, concrete, no hype.",
    ogDescription: "Practical guides with no jargon: how small businesses save time with AI and automation.",
    eyebrow: "Guide",
    h1: "AI & automation — explained for small businesses.",
    intro: "No buzzwords, no glossy promises. Here we write down what actually works in practice, what it costs and when it's worth it — from our daily work with businesses in Stuttgart and across Germany.",
    dateLocale: "en-US",
  },
  ro: {
    metaTitle: "Ghid — AI și automatizare pentru firme mici | Axivore",
    metaDescription: "Ghiduri practice fără jargon: cum economisesc firmele mici din Germania timp cu AI și automatizare — sincer, concret, fără hype.",
    ogDescription: "Ghiduri practice fără jargon: cum economisesc firmele mici timp cu AI și automatizare.",
    eyebrow: "Ghid",
    h1: "AI și automatizare — explicate pentru firme mici.",
    intro: "Fără cuvinte la modă, fără promisiuni lucioase. Aici scriem ce funcționează cu adevărat în practică, cât costă și când merită — din munca noastră zilnică cu firme din Stuttgart și din toată Germania.",
    dateLocale: "ro-RO",
  },
  tr: {
    metaTitle: "Rehber — Küçük İşletmeler için AI ve Otomasyon | Axivore",
    metaDescription: "Karmaşık terimler olmadan pratik rehberler: Almanya'daki küçük işletmeler AI ve otomasyonla nasıl zaman kazanır — dürüst, somut, abartısız.",
    ogDescription: "Karmaşık terimler olmadan pratik rehberler: küçük işletmeler AI ve otomasyonla nasıl zaman kazanır.",
    eyebrow: "Rehber",
    h1: "AI ve otomasyon — küçük işletmeler için açıklandı.",
    intro: "Ne moda kelimeler, ne parlak vaatler. Burada pratikte gerçekten neyin işe yaradığını, neye mal olduğunu ve ne zaman değdiğini yazıyoruz — Stuttgart'ta ve tüm Almanya'daki işletmelerle günlük çalışmamızdan.",
    dateLocale: "tr-TR",
  },
  it: {
    metaTitle: "Guida — AI e Automazione per Piccole Imprese | Axivore",
    metaDescription: "Guide pratiche senza gergo tecnico: come le piccole imprese in Germania risparmiano tempo con AI e automazione — onesto, concreto, senza hype.",
    ogDescription: "Guide pratiche senza gergo tecnico: come le piccole imprese risparmiano tempo con AI e automazione.",
    eyebrow: "Guida",
    h1: "AI e automazione — spiegate per piccole imprese.",
    intro: "Niente parole d'ordine, niente promesse patinate. Qui scriviamo cosa funziona davvero nella pratica, quanto costa e quando conviene — dal nostro lavoro quotidiano con aziende a Stoccarda e in tutta la Germania.",
    dateLocale: "it-IT",
  },
};

function formatDate(iso: string, dateLocale: string): string {
  return new Date(iso).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" });
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  return partialPageMetadata(
    contentLocale,
    PATH,
    { de: { title: COPY.de.metaTitle, description: COPY.de.metaDescription }, hr: { title: COPY.hr.metaTitle, description: COPY.hr.metaDescription }, en: { title: COPY.en.metaTitle, description: COPY.en.metaDescription }, ro: { title: COPY.ro.metaTitle, description: COPY.ro.metaDescription }, tr: { title: COPY.tr.metaTitle, description: COPY.tr.metaDescription }, it: { title: COPY.it.metaTitle, description: COPY.it.metaDescription } },
    AVAILABLE
  );
}

export default async function RatgeberPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = COPY[contentLocale as "de" | "hr" | "en" | "ro" | "tr" | "it"];
  const articles = getRatgeberArticlesList(contentLocale);
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}/#collection`,
    url: pageUrl,
    name: `Axivore ${c.eyebrow}`,
    inLanguage: c.dateLocale,
    about: { "@id": "https://axivore.io/#organization" },
    hasPart: articles.map((a) => ({
      "@type": "Article",
      headline: a.title,
      url: `${pageUrl}/${a.slug}`,
      datePublished: a.date,
    })),
  };

  return (
    <ServiceShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-8">
        <header className="mb-14 max-w-2xl">
          <p className="text-[11px] tracking-[0.28em] uppercase mb-4 font-medium" style={{ color: "#C97C3C" }}>
            {c.eyebrow}
          </p>
          <h1 className="text-[34px] md:text-[46px] leading-[1.12] font-semibold tracking-tight mb-5">
            {c.h1}
          </h1>
          <p className="text-[16px] leading-[1.7] text-white/60">{c.intro}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={localePathname(contentLocale, `/ratgeber/${a.slug}`)}
              className="group rounded-2xl p-7 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-[10px] tracking-[0.22em] uppercase font-semibold mb-4" style={{ color: "#E0A360" }}>
                {a.category}
              </p>
              <h2 className="text-[20px] leading-[1.3] font-semibold tracking-tight mb-3 group-hover:text-[#f0c48a] transition-colors">
                {a.title}
              </h2>
              <p className="text-[13.5px] leading-[1.65] text-white/55 mb-5">{a.description}</p>
              <p className="text-[12px] text-white/35">
                <time dateTime={a.date}>{formatDate(a.date, c.dateLocale)}</time>
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
