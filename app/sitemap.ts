import { MetadataRoute } from "next";

const SITE_URL = "https://axivore.io";

// Only indexable pages belong in the sitemap.
// Impressum & Datenschutz are intentionally noindex (legal pages)
// and are deliberately excluded here.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
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
  ];
}
