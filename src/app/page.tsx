import { AboutSection } from "@/components/shared/about-section";
import { ContactSection } from "@/components/shared/contact-section";
import { HeroSection } from "@/components/shared/hero-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";
import { getProjects } from "@/features/projects/data/projects";
import { SkillsSection } from "@/features/skills/components/skills-section";

export default function Home() {
  const data = getProjects();
  const projects = data.filter((project) => project.featured);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
