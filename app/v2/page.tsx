"use client";

import { useTheme } from "@/lib/ThemeContext";
import { ScrollProgress } from "@/components/v2/ScrollProgress";
import { Nav } from "@/components/v2/Nav";
import { Hero } from "@/components/v2/Hero";
import { Marquee } from "@/components/v2/Marquee";
import { ProofBento } from "@/components/v2/ProofBento";
import { Results } from "@/components/v2/Results";
import { Services } from "@/components/v2/Services";
import { Portfolio } from "@/components/v2/Portfolio";
import { Process } from "@/components/v2/Process";
import { Testimonials } from "@/components/v2/Testimonials";
import { UeberUns } from "@/components/v2/UeberUns";
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
      <Marquee />
      <ProofBento />
      <Results />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <UeberUns />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
