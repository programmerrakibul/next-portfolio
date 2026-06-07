"use client";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { MagicCard } from "@/components/ui/magic-card";
import { metricsData, skillCategories } from "@/features/skills/data/skills";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { SkillsMetrics } from "./skills-metrics";

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
      delay: i * 0.06,
    },
  }),
};

export function SkillsSection() {
  const pillRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const sectionRef = useGsapReveal<HTMLElement>({
    y: 30,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: true,
  });

  const activeSkills =
    skillCategories.find((c) => c.id === activeTab)?.skills ?? [];

  const handleTabChange = useCallback((id: string, index: number) => {
    setActiveTab(id);
    const tabEl = tabRefs.current[index];

    if (tabEl && pillRef.current) {
      gsap.to(pillRef.current, {
        y: tabEl.offsetTop,
        height: tabEl.offsetHeight,
        duration: 0.45,
        ease: "power3.out",
      });
    }
  }, []);

  /* Position pill on mount */
  useEffect(() => {
    const firstTab = tabRefs.current[0];
    if (firstTab && pillRef.current) {
      gsap.set(pillRef.current, {
        y: firstTab.offsetTop,
        height: firstTab.offsetHeight,
      });
    }
  }, []);

  return (
    <Section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background py-20 text-foreground isolate md:py-28"
    >
      <Container>
        {/* Heading */}
        <div data-reveal-skill className="mb-14 md:mb-20 space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Skills & Expertise
          </p>
          <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">
            Tech Stack
          </h1>
          <p className="max-w-md text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground">
            Technologies and tools I use daily to build modern, scalable
            applications.
          </p>
        </div>

        {/* Main 2-column layout */}
        <div
          data-reveal-skill
          className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] xl:gap-12"
        >
          {/* Left column: Tab Nav + Icon Cloud */}
          <div className="flex flex-col gap-6">
            {/* Tab Navigation */}
            <div className="w-full">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Categories
              </h3>

              <div
                ref={tabsContainerRef}
                className="relative flex flex-row gap-1 overflow-x-auto lg:flex-col"
              >
                {/* Animated pill indicator */}
                <div
                  ref={pillRef}
                  className="pointer-events-none absolute left-0 hidden w-full rounded-xl bg-primary/10 lg:block"
                />

                {skillCategories.map((tab, index) => (
                  <button
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    onClick={() => handleTabChange(tab.id, index)}
                    className={cn(
                      "relative z-10 shrink-0 rounded-xl px-1.5 sm:px-4 py-2.5 text-left text-sm font-medium transition-colors duration-200 lg:py-3",
                      activeTab === tab.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Magic Cards */}
          <div className="min-h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -12, transition: { duration: 0.15 } }}
                className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
              >
                {activeSkills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    custom={i}
                    variants={cardVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <MagicCard
                      mode="gradient"
                      gradientColor={`color-mix(in oklch, ${skill.brandColor} 12%, transparent)`}
                      gradientOpacity={0.85}
                      gradientSize={220}
                      className="relative h-full rounded-2xl p-5 sm:p-6"
                    >
                      <div className="relative z-40 flex h-full flex-col items-center justify-center gap-3 sm:gap-4">
                        <div
                          className={cn(
                            "flex size-10 shrink-0 items-center justify-center rounded-xl border sm:size-12",
                            skill.color,
                          )}
                        >
                          <skill.icon className="size-5 text-muted-foreground transition-colors duration-300 sm:size-6" />
                        </div>

                        <div className="mt-auto">
                          <h3 className="text-sm text-center font-semibold tracking-tight text-foreground sm:text-base">
                            {skill.name}
                          </h3>
                        </div>
                      </div>
                    </MagicCard>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Metrics */}
        <div data-reveal-skill className="mt-14 lg:mt-20">
          <SkillsMetrics metrics={metricsData} />
        </div>
      </Container>
    </Section>
  );
}
