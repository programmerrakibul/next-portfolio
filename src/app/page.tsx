import { AboutSection } from "@/components/shared/about-section";
import { ContactSection } from "@/components/shared/contact-section";
import { HeroSection } from "@/components/shared/hero-section";
import { SkillsSection } from "@/features/skills/components/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
