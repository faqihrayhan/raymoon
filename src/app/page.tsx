import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { OrbitalTechStack } from "@/components/sections/OrbitalTechStack";
import { ExperienceCarousel } from "@/components/sections/ExperienceCarousel";
import { StatsSection } from "@/components/sections/StatsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <OrbitalTechStack />
      <ExperienceCarousel />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
