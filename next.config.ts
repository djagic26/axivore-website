import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Content-Security-Policy",
            // 'unsafe-inline' is required for the JSON-LD blocks and the
            // pre-hydration theme script rendered inline across pages;
            // everything else stays same-origin only.
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
          },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // /v2 is the historical route; the homepage now serves the same
      // component. Redirect the duplicate URL to the canonical root.
      {
        source: "/v2",
        destination: "/",
        permanent: true,
      },
      // www served a full 200 duplicate of the apex domain instead of
      // redirecting — collapse it onto the canonical apex.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.axivore.io" }],
        destination: "https://axivore.io/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
