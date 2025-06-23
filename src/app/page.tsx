import { Navigation } from "@/components/navigation";
import { Hero } from "./_components/hero";
import { ValueProposition } from "./_components/value-proposition";
import { Contact } from "./_components/contact";
import { CallToAction } from "./_components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProposition />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
