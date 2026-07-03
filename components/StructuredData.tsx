import { translations } from "@/lib/i18n";

const SITE_URL = "https://axivore.io";

/**
 * Server-rendered JSON-LD structured data.
 * Lives in the static HTML so Google + AI search engines can read it
 * (client-injected schema is invisible to most crawlers).
 */
export function StructuredData() {
  const faqItems = translations.de.faq.items;

  const graph = [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Axivore",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        "Axivore entwickelt KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und ganz Deutschland.",
      email: "hello@axivore.io",
      priceRange: "€€",
      founder: {
        "@type": "Person",
        name: "Dino Jagić",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rotweg 172",
        postalCode: "70437",
        addressLocality: "Stuttgart",
        addressRegion: "Baden-Württemberg",
        addressCountry: "DE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.8313,
        longitude: 9.1665,
      },
      areaServed: [
        { "@type": "Country", name: "Germany" },
        { "@type": "City", name: "Stuttgart" },
        { "@type": "City", name: "Esslingen" },
        { "@type": "City", name: "Ludwigsburg" },
        { "@type": "City", name: "Böblingen" },
        { "@type": "City", name: "Sindelfingen" },
        { "@type": "City", name: "Waiblingen" },
      ],
      knowsLanguage: ["de", "en"],
      sameAs: [
        "https://www.instagram.com/axivore.io/",
        "https://www.linkedin.com/company/118684148/",
      ],
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
