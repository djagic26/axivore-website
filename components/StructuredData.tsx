import { translations, type Language } from "@/lib/i18n";

const SITE_URL = "https://axivore.io";

/**
 * Server-rendered JSON-LD structured data.
 * Lives in the static HTML so Google + AI search engines can read it
 * (client-injected schema is invisible to most crawlers).
 */
export function StructuredData({ locale }: { locale: Language }) {
  const faqItems = translations[locale].faq.items;
  const offers = translations[locale].pricing.offers;

  const graph = [
    {
      // Plain Organization — Axivore is remote-first with no walk-in
      // location, so LocalBusiness/ProfessionalService + GeoCoordinates
      // (which imply a visitable place) were dropped. The address stays
      // for Impressum/legal purposes only.
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Axivore",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        "Axivore entwickelt moderne Websites, maßgeschneiderte Web-Apps und SaaS-Produkte sowie KI-Automatisierungen und Chatbots für kleine und mittlere Unternehmen in Stuttgart und ganz Deutschland.",
      email: "hello@axivore.io",
      telephone: "+49 172 9372307",
      founder: { "@id": `${SITE_URL}/#dino-jagic` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rotweg 172",
        postalCode: "70437",
        addressLocality: "Stuttgart",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
      },
      areaServed: { "@type": "Country", name: "Germany" },
      knowsLanguage: ["de", "en"],
      sameAs: [
        "https://www.instagram.com/axivore.io/",
        "https://www.linkedin.com/company/118684148/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Axivore Leistungen",
        itemListElement: offers.map((offer) => ({
          "@type": "Offer",
          priceCurrency: "EUR",
          price: offer.from.replace(/[^0-9]/g, ""),
          itemOffered: {
            "@type": "Service",
            name: offer.name,
            description: offer.desc,
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#dino-jagic`,
      name: "Dino Jagić",
      jobTitle: "Gründer & KI-Architekt",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Axivore",
      inLanguage: "de-DE",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
