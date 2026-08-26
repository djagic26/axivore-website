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
            // 'unsafe-inline' on script-src is required and NOT easily
            // removable: Next.js App Router injects its own inline
            // `self.__next_f.push(...)` bootstrap scripts for streaming/RSC
            // hydration on every page — dynamic per-render content that
            // only a nonce can allow, and nonces require every page to
            // render dynamically (no static generation, no CDN caching —
            // see Next's own CSP docs, "Static vs Dynamic Rendering with
            // CSP"). This site is deliberately fully static (see
            // project-axivore memory, 03.07.2026 TTFB fix) — trading that
            // away for CSP hardening is a worse trade. Tested locally
            // 26.08.2026 with 'unsafe-inline' removed: confirmed it breaks
            // hydration entirely (cookie banner never mounts, theme toggle
            // inert). Verified this is NOT needed for the app's own inline
            // scripts (those are now external files, see
            // public/consent-default.js + theme-init.js) or for GA4/Meta
            // Pixel init (now onLoad/useEffect, not inline <script>) — it's
            // purely a Next.js framework requirement.
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.facebook.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
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
