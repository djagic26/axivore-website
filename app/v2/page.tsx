"use client";

import { useTheme } from "@/lib/ThemeContext";
import { ScrollProgress } from "@/components/v2/ScrollProgress";
import { Nav } from "@/components/v2/Nav";
import { Hero } from "@/components/v2/Hero";
import { TrustStrip } from "@/components/v2/TrustStrip";
import { Marquee } from "@/components/v2/Marquee";
import { ProofBento } from "@/components/v2/ProofBento";
import { Results } from "@/components/v2/Results";
import { Services } from "@/components/v2/Services";
import { ForWho } from "@/components/v2/ForWho";
import { WhyUs } from "@/components/v2/WhyUs";
import { Process } from "@/components/v2/Process";
import { FAQ } from "@/components/v2/FAQ";
import { FinalCTA } from "@/components/v2/FinalCTA";
import { Footer } from "@/components/v2/Footer";

export default function V2Page() {
  const { theme } = useTheme();
  const bg = theme === "dark" ? "#050505" : "#ffffff";
  return (
    <main style={{ background: bg }}>
      <ScrollProgress />
      <Nav />
      <Hero />
      <TrustStrip />
      <Marquee />
      <ProofBento />
      <Results />
      <Services />
      <ForWho />
      <WhyUs />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
