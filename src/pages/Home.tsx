import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { Portfolio } from "@/components/sections/Portfolio";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <BentoFeatures />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
