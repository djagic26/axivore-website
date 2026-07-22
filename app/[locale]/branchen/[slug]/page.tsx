import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { branchen, getBranche } from "@/lib/branchen";

const SITE_URL = "https://axivore.io";

// Only the known branches exist — unknown slugs return 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return branchen.map((b) => ({ slug: b.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const branche = getBranche(slug);
  if (!branche) return {};

  const pageUrl = `${SITE_URL}/branchen/${branche.slug}`;
  return {
    title: branche.metaTitle,
    description: branche.metaDescription,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: branche.metaTitle,
      description: branche.ogDescription,
      url: pageUrl,
      siteName: "Axivore",
      locale: "de_DE",
      type: "website",
    },
  };
}

export default async function BranchePage({ params }: Props) {
  const { slug } = await params;
  const branche = getBranche(slug);
  if (!branche) notFound();

  const pageUrl = `${SITE_URL}/branchen/${branche.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: branche.metaTitle.split(" — ")[0],
        serviceType: branche.serviceType,
        description: branche.metaDescription,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Germany" },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Branchen", item: `${SITE_URL}/branchen` },
          { "@type": "ListItem", position: 3, name: branche.name, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: branche.faq.map((i) => ({
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
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">{branche.eyebrow}</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          {branche.h1}
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">{branche.intro}</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{branche.useCasesHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {branche.useCases.map((u) => (
            <div key={u.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[16px] font-semibold mb-2">{u.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">Häufige Fragen</h2>
        <div className="space-y-6">
          {branche.faq.map((f) => (
            <div key={f.question}>
              <h3 className="text-[15px] font-semibold mb-1.5">{f.question}</h3>
              <p className="text-[14px] leading-relaxed text-white/50">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-2xl px-8 py-11 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[24px] font-bold mb-3">Welche Aufgabe kostet dich am meisten Zeit?</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">
            Sag es uns im kostenlosen Gespräch — wir zeigen dir, wie sich genau diese Aufgabe in deinem Betrieb automatisieren lässt.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-16">
        <p className="text-[12px] tracking-[0.15em] uppercase text-white/35 mb-4">Weitere Branchen</p>
        <div className="flex flex-wrap gap-2.5">
          {branchen
            .filter((b) => b.slug !== branche.slug)
            .map((b) => (
              <Link key={b.slug} href={`/branchen/${b.slug}`} className="text-[13px] px-3.5 py-1.5 rounded-full transition-colors" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
                {b.name}
              </Link>
            ))}
        </div>
      </section>
    </ServiceShell>
  );
}
