import { HeroSection } from "@/components/hero-section";
import { SezioniWrapper } from "@/components/sezioni-wrapper";
import { PortaleSection } from "@/components/portale-section";
import { PercheSection } from "@/components/perche-section";
import { ApprofondimentiSection } from "@/components/approfondimenti-section";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SezioniWrapper />
      <PortaleSection />
      <PercheSection />
      <ApprofondimentiSection />
      <CtaSection />
    </>
  );
}
