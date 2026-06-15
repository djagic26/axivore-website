import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      // /v2 is the historical route; the homepage now serves the same
      // component. Redirect the duplicate URL to the canonical root.
      {
        source: "/v2",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
