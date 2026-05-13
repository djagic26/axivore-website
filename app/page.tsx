import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const FloatingCTA    = dynamic(() => import("@/components/FloatingCTA"),    { ssr: false });

// Lazy-load everything below the fold — cuts initial JS bundle in half
const Marquee     = dynamic(() => import("@/components/Marquee"));
const Results     = dynamic(() => import("@/components/Results"));
const WhyUs       = dynamic(() => import("@/components/WhyUs"));
const Services    = dynamic(() => import("@/components/Services"));
const ForWho      = dynamic(() => import("@/components/ForWho"));
const Portfolio   = dynamic(() => import("@/components/Portfolio"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Process     = dynamic(() => import("@/components/Process"));
const FAQ         = dynamic(() => import("@/components/FAQ"));
const FinalCTA    = dynamic(() => import("@/components/FinalCTA"));
const Footer      = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <FloatingCTA />
      <Header />
      <Hero />
      <Marquee />
      <Results />
      <WhyUs />
      <Services />
      <ForWho />
      <Portfolio />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
