import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutMe } from "@/components/sections/AboutMe";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { BeamsBackground } from "@/components/ui/BeamsBackground";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c0d0e] relative selection:bg-orange-500/30 selection:text-orange-200">
      {/* Animated Beams Background */}
      <BeamsBackground intensity="medium" />

      {/* Main Content Sections */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <AboutMe />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
