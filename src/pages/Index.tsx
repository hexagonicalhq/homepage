
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import MissionSection from '@/components/MissionSection';
import JourneySection from '@/components/JourneySection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const Index = () => {
  // Initialize scroll reveal
  useRevealOnScroll({ selector: '.reveal, .reveal-left, .reveal-right' });

  useEffect(() => {
    // Scroll to the journey section if the URL includes #journey
    if (window.location.hash === '#journey') {
      const journeySection = document.getElementById('journey');
      if (journeySection) {
        journeySection.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Set page title
    document.title = "Hexagonical | Developer-First Tools & Hosting";
  }, []);

  return (
    <div className="min-h-screen bg-hexDark-500 text-white antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <MissionSection />
        <JourneySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
