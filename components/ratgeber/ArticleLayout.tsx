import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import type { RatgeberArticle } from "@/lib/ratgeber";
import { localePathname, type AppLocale } from "@/lib/seo";

type ArticleLayoutProps = {
  article: RatgeberArticle;
  locale: AppLocale;
  children: React.ReactNode;
};

const UI: Record<"de" | "hr" | "en" | "ro" | "tr" | "it", {
  ratgeberLabel: string; readingTimeSuffix: string; ctaHeading: string; ctaText: string; ctaButton: string; ctaContactLink: string; dateLocale: string;
}> = {
  de: {
    ratgeberLabel: "Ratgeber",
    readingTimeSuffix: "Lesezeit",
    ctaHeading: "Willst du wissen, was das für deinen Betrieb konkret heißt?",
    ctaText: "In einem kostenlosen 30-Minuten-Gespräch schauen wir uns deine Abläufe an und sagen dir ehrlich, ob und wo sich Automatisierung für dich lohnt — ohne Fachchinesisch, ohne Verkaufsdruck.",
    ctaButton: "Kostenloses Gespräch buchen",
    ctaContactLink: "oder schreib uns →",
    dateLocale: "de-DE",
  },
  hr: {
    ratgeberLabel: "Vodič",
    readingTimeSuffix: "čitanja",
    ctaHeading: "Želiš znati što to konkretno znači za tvoj posao?",
    ctaText: "Na besplatnom 30-minutnom razgovoru pogledamo tvoje procese i iskreno ti kažemo isplati li se i gdje se automatizacija isplati za tebe — bez stručnog žargona, bez pritiska na prodaju.",
    ctaButton: "Zakaži besplatan razgovor",
    ctaContactLink: "ili nam piši →",
    dateLocale: "hr-HR",
  },
  en: {
    ratgeberLabel: "Guide",
    readingTimeSuffix: "read",
    ctaHeading: "Want to know what this means for your business specifically?",
    ctaText: "In a free 30-minute call, we'll look at your workflows and tell you honestly whether and where automation is worth it for you — no jargon, no sales pressure.",
    ctaButton: "Book a free call",
    ctaContactLink: "or write to us →",
    dateLocale: "en-US",
  },
  ro: {
    ratgeberLabel: "Ghid",
    readingTimeSuffix: "citire",
    ctaHeading: "Vrei să știi ce înseamnă concret asta pentru afacerea ta?",
    ctaText: "La o discuție gratuită de 30 de minute analizăm procesele tale și îți spunem sincer dacă și unde merită automatizarea pentru tine — fără jargon, fără presiune de vânzare.",
    ctaButton: "Programează o discuție gratuită",
    ctaContactLink: "sau scrie-ne →",
    dateLocale: "ro-RO",
  },
  tr: {
    ratgeberLabel: "Rehber",
    readingTimeSuffix: "okuma",
    ctaHeading: "Bunun işletmen için somut olarak ne anlama geldiğini bilmek ister misin?",
    ctaText: "Ücretsiz 30 dakikalık bir görüşmede iş akışlarına bakarız ve otomasyonun senin için nerede ve ne ölçüde değeceğini dürüstçe söyleriz — karmaşık terimler olmadan, satış baskısı olmadan.",
    ctaButton: "Ücretsiz görüşme ayarla",
    ctaContactLink: "ya da bize yaz →",
    dateLocale: "tr-TR",
  },
  it: {
    ratgeberLabel: "Guida",
    readingTimeSuffix: "di lettura",
    ctaHeading: "Vuoi sapere cosa significa concretamente questo per la tua attività?",
    ctaText: "In un colloquio gratuito di 30 minuti guardiamo i tuoi flussi di lavoro e ti diciamo onestamente se e dove l'automazione conviene per te — senza gergo tecnico, senza pressione di vendita.",
    ctaButton: "Prenota un colloquio gratuito",
    ctaContactLink: "oppure scrivici →",
    dateLocale: "it-IT",
  },
};

function formatDate(iso: string, dateLocale: string): string {
  return new Date(iso).toLocaleDateString(dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Server-rendered layout for Ratgeber articles: breadcrumb, article header,
 * prose styling for plain h2/h3/p/ul children, closing CTA and
 * Article + BreadcrumbList JSON-LD.
 */
export function ArticleLayout({ article, locale, children }: ArticleLayoutProps) {
  const ui = UI[locale as "de" | "hr" | "en" | "ro" | "tr" | "it"] ?? UI.de;
  const pageUrl = `https://axivore.io${localePathname(locale, `/ratgeber/${article.slug}`)}`;
  const ratgeberUrl = `https://axivore.io${localePathname(locale, "/ratgeber")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}/#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        inLanguage: ui.dateLocale,
        mainEntityOfPage: pageUrl,
        author: { "@id": "https://axivore.io/#organization" },
        publisher: { "@id": "https://axivore.io/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: ui.ratgeberLabel, item: ratgeberUrl },
          { "@type": "ListItem", position: 2, name: article.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <ServiceShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-white/40">
          <Link href={localePathname(locale, "/ratgeber")} className="hover:text-white/70 transition-colors">
            {ui.ratgeberLabel}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/60">{article.category}</span>
        </nav>

        <header className="mb-12">
          <h1 className="text-[32px] md:text-[42px] leading-[1.15] font-semibold tracking-tight mb-5">
            {article.title}
          </h1>
          <p className="text-[16px] leading-[1.7] text-white/60 mb-5">{article.description}</p>
          <p className="text-[13px] text-white/40">
            <time dateTime={article.date}>{formatDate(article.date, ui.dateLocale)}</time>
            <span className="mx-2">·</span>
            {article.readingTime} {ui.readingTimeSuffix}
            <span className="mx-2">·</span>
            Axivore, Stuttgart
          </p>
        </header>

        <div
          className="text-[15.5px]
            [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-[24px] [&>h2]:md:text-[26px] [&>h2]:font-semibold [&>h2]:tracking-tight [&>h2]:text-white
            [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-[18px] [&>h3]:font-semibold [&>h3]:text-white
            [&>p]:mb-5 [&>p]:leading-[1.85] [&>p]:text-white/70
            [&>ul]:mb-6 [&>ul]:pl-5 [&>ul]:list-disc [&>ul]:space-y-2.5 [&>ul]:leading-[1.7] [&>ul]:text-white/70
            [&>ol]:mb-6 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol]:space-y-2.5 [&>ol]:leading-[1.7] [&>ol]:text-white/70
            [&_strong]:text-white [&_strong]:font-semibold
            [&_a]:text-[#A09AFF] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#c4c0ff]"
        >
          {children}
        </div>

        <aside
          className="mt-14 rounded-2xl p-7 md:p-8"
          style={{
            background: "linear-gradient(135deg, rgba(124,92,255,0.14), rgba(91,138,255,0.07))",
            border: "1px solid rgba(124,92,255,0.28)",
          }}
        >
          <p className="text-[18px] font-semibold mb-2">{ui.ctaHeading}</p>
          <p className="text-[14px] leading-[1.7] text-white/60 mb-5">{ui.ctaText}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full text-[14px] font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}
            >
              {ui.ctaButton}
            </a>
            <Link href={localePathname(locale, "/kontakt")} className="text-[14px] text-white/60 hover:text-white transition-colors">
              {ui.ctaContactLink}
            </Link>
          </div>
        </aside>
      </article>
    </ServiceShell>
  );
}
