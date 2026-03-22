import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { FeaturesShowcase } from '@/components/sections/FeaturesShowcase';
import { UserJourney } from '@/components/sections/UserJourney';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <FeaturesShowcase />
        <UserJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
