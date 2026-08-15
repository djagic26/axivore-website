import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/hero-preview", "/v2"],
    },
    sitemap: "https://axivore.io/sitemap.xml",
  };
}
