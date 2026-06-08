"use client";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { DotPattern } from "@/components/ui/dot-pattern";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import useProjects from "@/hooks/use-projects";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const pathname = usePathname();
  const projects = useProjects();
  const isProjectsPage = pathname === "/projects";
  const featuredProjects = projects.filter((project) => project.featured);
  const data = isProjectsPage ? projects : featuredProjects;
  const sectionRef = useGsapReveal<HTMLElement>({
    y: 24,
    duration: 1,
    stagger: 0.12,
    scrollTrigger: true,
  });

  return (
    <Section
      ref={sectionRef}
      className="relative min-h-dvh overflow-hidden py-20 md:py-28"
    >
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        glow
        className="text-foreground/10 mask-[radial-gradient(600px_circle_at_center,white,transparent)]"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.511_0.096_186.391/0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,oklch(0.437_0.078_188.216/0.12),transparent_70%)]" />

      <Container className="relative z-10">
        <div data-reveal className="mb-14 space-y-4 md:mb-18">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            {isProjectsPage ? "All " : "Featured "}Projects
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">
            {!isProjectsPage
              ? `Best projects I've experienced`
              : "Work & Experiments"}
          </h1>
          <p className="max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground">
            {!isProjectsPage
              ? `A selection of projects I've built`
              : `A curated selection of projects I've built — from production
            applications to experimental tools.`}
          </p>
        </div>

        <motion.div
          data-reveal
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        >
          {data.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
