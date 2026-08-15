import type { Metadata } from "next";
import { HeroPreviewClient } from "./HeroPreviewClient";

// Internal design-preview page — never meant for public indexing.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function HeroPreviewPage() {
  return <HeroPreviewClient />;
}
