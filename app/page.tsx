import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Results from "@/components/Results";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import ForWho from "@/components/ForWho";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingCTA from "@/components/FloatingCTA";

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
