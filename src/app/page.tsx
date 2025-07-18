import { Hero } from "./_components/hero";
import { ValueProposition } from "./_components/value-proposition";
import { Services } from "./_components/services";
import { PortfolioPreview } from "./_components/portfolio-preview";
import { CallToAction } from "./_components/cta";
import { Contact } from "./_components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <PortfolioPreview />
      <CallToAction />
      <Contact />
    </>
  );
}
