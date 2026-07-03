import { MetadataRoute } from "next";
import { branchen } from "@/lib/branchen";

const SITE_URL = "https://axivore.io";

// Only indexable pages belong in the sitemap.
// Impressum & Datenschutz are intentionally noindex (legal pages)
// and are deliberately excluded here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const brancheEntries: MetadataRoute.Sitemap = branchen.map((b) => ({
    url: `${SITE_URL}/branchen/${b.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/ki-agentur-stuttgart`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/branchen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...brancheEntries,
    {
      url: `${SITE_URL}/leistungen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/leistungen/ki-automatisierung`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/leistungen/ki-chatbots`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projekte`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/preise`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/ueber-uns`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
