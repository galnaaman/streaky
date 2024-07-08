import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroPanel from "@/components/HeroPanel";

export default function Home() {
  return (
      <>
        <Suspense>
          <Header />
        </Suspense>
        <main>
          <HeroPanel />
          <Problem />
          <FeaturesAccordion />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </>
  );
}
