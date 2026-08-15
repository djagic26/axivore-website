"use client";

import dynamic from "next/dynamic";

// Smooth-scroll + GSAP need the browser — load client-side only.
const KineticEditorial = dynamic(
  () => import("@/components/v2/KineticEditorial").then((m) => m.KineticEditorial),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "100vh", background: "#050507" }} />,
  }
);

export function HeroPreviewClient() {
  return <KineticEditorial />;
}
