"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { Lens } from "@/components/ui/lens";
import { MagicCard } from "@/components/ui/magic-card";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import {
  GithubIcon,
  Linkedin02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Code2, Cpu, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { BsTypescript } from "react-icons/bs";
import {
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiMongoose,
  SiNetlify,
  SiPostman,
  SiPrisma,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { ShineBorder } from "../ui/shine-border";
import Container from "./container";
import Section from "./section";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "../ui/particles";

// Tech stack list with names and SVG icons
const techStack = [
  {
    name: "React",
    color: "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20",
    icon: RiReactjsLine,
  },
  {
    name: "Next.js",
    color: "text-foreground bg-foreground/10 border-foreground/20",
    icon: RiNextjsFill,
  },
  {
    name: "TypeScript",
    color: "text-[#3178C6] bg-[#3178C6]/10 border-[#3178C6]/20",
    icon: BsTypescript,
  },
  {
    name: "Node.js",
    color: "text-[#339933] bg-[#339933]/10 border-[#339933]/20",
    icon: RiNodejsLine,
  },
  {
    name: "MongoDB",
    color: "text-[#47A248] bg-[#47A248]/10 border-[#47A248]/20",
    icon: BiLogoMongodb,
  },
  {
    name: "Mongoose",
    color: "text-[#880000] bg-[#880000]/10 border-[#880000]/20",
    icon: SiMongoose,
  },
  {
    name: "PostgreSQL",
    color: "text-[#4169E1] bg-[#4169E1]/10 border-[#4169E1]/20",
    icon: BiLogoPostgresql,
  },
  {
    name: "Prisma",
    color:
      "text-[#2D3748] bg-[#2D3748]/10 border-[#2D3748]/20 dark:text-[#E2E8F0] dark:bg-[#E2E8F0]/10 dark:border-[#E2E8F0]/20",
    icon: SiPrisma,
  },
  {
    name: "Zod",
    color: "text-[#3E67B1] bg-[#3E67B1]/10 border-[#3E67B1]/20",
    icon: SiZod,
  },
  {
    name: "Tailwind CSS",
    color: "text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/20",
    icon: RiTailwindCssFill,
  },
  {
    name: "Express",
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    icon: SiExpress,
  },
  {
    name: "Git",
    color: "text-[#F05032] bg-[#F05032]/10 border-[#F05032]/20",
    icon: SiGit,
  },
  {
    name: "Vercel",
    color: "text-foreground bg-foreground/10 border-foreground/20",
    icon: SiVercel,
  },
  {
    name: "Netlify",
    color: "text-[#00C7B7] bg-[#00C7B7]/10 border-[#00C7B7]/20",
    icon: SiNetlify,
  },
  {
    name: "Figma",
    color: "text-[#F24E1E] bg-[#F24E1E]/10 border-[#F24E1E]/20",
    icon: SiFigma,
  },
  {
    name: "Postman",
    color: "text-[#FF6C37] bg-[#FF6C37]/10 border-[#FF6C37]/20",
    icon: SiPostman,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/programmerrakibul",
    icon: GithubIcon,
    title: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin02Icon,
    title: "LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:contact@programmerrakibul.com",
    icon: Mail01Icon,
    title: "Email",
  },
];

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Crafting maintainable, elegant solutions using DRY principles.",
  },
  {
    icon: Cpu,
    title: "Component Architecture",
    description: "Building scalable, modular and reusable UI patterns.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing for speed, responsiveness, and clean integrations.",
  },
];

export function AboutSection() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#3b82f6");
  }, [resolvedTheme]);

  return (
    <Section className="relative w-full overflow-hidden bg-background py-20 md:py-28 text-foreground isolate">
      {/* Background Dots Pattern with radial mask fade */}
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "absolute inset-0 -z-10 opacity-60 dark:opacity-30 mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]",
          "fill-primary/20 stroke-primary/10",
        )}
      />

      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Image wrapper with Lens magnification */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="relative group w-full overflow-hidden rounded-2xl border border-border/80 bg-transparent p-4 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
              {/* Top reflection shine line */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
              <ShineBorder shineColor={"var(--primary)"} />

              <Lens zoomFactor={1.35} lensSize={150}>
                <div className="relative w-full aspect-4/5 overflow-hidden rounded-xl bg-muted">
                  <Image
                    src="https://res.cloudinary.com/dqh5dajig/image/upload/v1778164294/snap_order/users/ett1sls7ny5ajgqqh198.jpg"
                    alt="Md. Rakibul Islam"
                    fill
                    sizes="(max-w-768px) 100vw, 380px"
                    priority
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle vignette shade */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/25 to-transparent pointer-events-none" />
                </div>
              </Lens>

              {/* Bottom tag info */}
              <div className="mt-4 flex items-center justify-end border-t border-border/50 pt-3 text-xs text-muted-foreground font-mono">
                <span>MERN & NEXT.JS</span>
              </div>
            </div>
          </div>

          {/* Right Column: MagicCard Details */}
          <div className="lg:col-span-8 h-full  relative overflow-hidden">
            <Particles
              key={resolvedTheme}
              className="absolute inset-0 z-200"
              quantity={200}
              staticity={30}
              ease={60}
              color={color}
              refresh
            />
            <MagicCard
              mode="gradient"
              gradientColor="color-mix(in oklch, var(--primary) 8%, transparent)"
              gradientFrom="var(--primary)"
              gradientTo="oklch(0.704 0.14 182.503)"
              className="border border-border/60 shadow-lg h-full grid place-items-center rounded-2xl p-6"
            >
              {/* Header profile info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="relative size-12 overflow-hidden rounded-full border-2 border-primary bg-muted">
                    <Image
                      src="https://res.cloudinary.com/dqh5dajig/image/upload/v1778164294/snap_order/users/ett1sls7ny5ajgqqh198.jpg"
                      alt="Md. Rakibul Islam avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold tracking-tight">
                      Md. Rakibul Islam
                    </h2>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      MERN & Next.js Developer
                    </p>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      {...(link.name !== "Email" && {
                        target: "_blank",
                        rel: "noreferrer",
                      })}
                      className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-background/50 hover:bg-primary/10 hover:text-primary transition-all"
                      title={link.title}
                    >
                      <HugeiconsIcon icon={link.icon} size={18} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Core statement */}
              <div className="py-6">
                <h3 className="text-2xl font-bold tracking-tight md:text-3xl text-balance">
                  Passionate about clean code and scalability.
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  I thrive on building modern web applications using TypeScript,
                  Next.js, and the MERN stack. I focus on developer experience,
                  component architecture, and optimizing web application
                  performance for real-world reliability.
                </p>
              </div>

              {/* Sub-values grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border/50">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="relative overflow-hidden rounded-xl border border-border/40 bg-background/30 p-4 hover:border-primary/30 transition-colors"
                  >
                    <ShineBorder shineColor={"var(--primary)"} />
                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="size-4" />
                    </div>
                    <h4 className="mt-3 font-semibold text-sm">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-normal">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </MagicCard>
          </div>
        </div>

        {/* Bottom Marquee: Tech stacks icons animation */}
        <div className="mt-20 w-full relative">
          {/* Gradient fade borders */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

          <Marquee pauseOnHover className="[--duration:28s]">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className={cn(
                  "flex items-center gap-2 rounded-xl border px-4 py-2 font-medium transition-all duration-300 hover:scale-105",
                  tech.color,
                )}
              >
                <tech.icon className="size-3.5 md:size-4.5" />
                <span className="text-xs md:text-sm font-semibold tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </Container>
    </Section>
  );
}
