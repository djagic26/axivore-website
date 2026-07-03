import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import type { RatgeberArticle } from "@/lib/ratgeber";

const SITE_URL = "https://axivore.io";

type ArticleLayoutProps = {
  article: RatgeberArticle;
  children: React.ReactNode;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
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
export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const pageUrl = `${SITE_URL}/ratgeber/${article.slug}`;

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
        inLanguage: "de-DE",
        mainEntityOfPage: pageUrl,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ratgeber", item: `${SITE_URL}/ratgeber` },
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
          <Link href="/ratgeber" className="hover:text-white/70 transition-colors">
            Ratgeber
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
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span className="mx-2">·</span>
            {article.readingTime} Lesezeit
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
          <p className="text-[18px] font-semibold mb-2">
            Willst du wissen, was das für deinen Betrieb konkret heißt?
          </p>
          <p className="text-[14px] leading-[1.7] text-white/60 mb-5">
            In einem kostenlosen 30-Minuten-Gespräch schauen wir uns deine Abläufe an und sagen dir
            ehrlich, ob und wo sich Automatisierung für dich lohnt — ohne Fachchinesisch, ohne
            Verkaufsdruck.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full text-[14px] font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}
            >
              Kostenloses Gespräch buchen
            </a>
            <Link href="/kontakt" className="text-[14px] text-white/60 hover:text-white transition-colors">
              oder schreib uns →
            </Link>
          </div>
        </aside>
      </article>
    </ServiceShell>
  );
}
