"use client";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Meteors } from "@/components/ui/meteors";
import { MorphingText } from "@/components/ui/morphing-text";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowRight, Code2, Network } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const designationTexts = [
  "Full Stack Developer",
  "Next.js Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Developer",
];

function AnimatedSideLines() {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 260 620"
      className="absolute -left-20 top-16 hidden h-152 w-72 text-primary/45 md:block"
      fill="none"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {Array.from({ length: 18 }).map((_, index) => (
        <motion.path
          key={index}
          d={`M${index * 3} 0 C ${150 + index * 2} ${120 + index * 7}, ${-80 + index * 6} ${260 + index * 8}, ${130 + index * 5} 620`}
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            duration: 2.2,
            delay: index * 0.035,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
}

export function HeroSection() {
  const router = useRouter();
  const heroRef = useGsapReveal<HTMLElement>({
    y: 24,
    duration: 1,
    stagger: 0.1,
    delay: 0.15,
  });

  return (
    <Section
      ref={heroRef}
      className="relative isolate flex min-h-dvh overflow-hidden bg-background pt-28 text-foreground"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,color-mix(in_oklch,var(--primary),transparent_86%),transparent_48%),linear-gradient(180deg,transparent,color-mix(in_oklch,var(--background),var(--foreground)_4%)_92%)]" />
      <AnimatedGridPattern
        width={48}
        height={48}
        numSquares={70}
        maxOpacity={0.18}
        duration={3}
        repeatDelay={0.7}
        className={cn(
          "opacity-50 mask-[radial-gradient(ellipse_at_center,white,transparent_72%)]",
          "fill-primary/25 stroke-primary/20",
        )}
      />
      <Meteors
        number={22}
        minDuration={4}
        maxDuration={9}
        className="bg-primary shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary),transparent_80%)] hidden dark:inline-block"
      />
      <AnimatedSideLines />

      <div className="absolute -left-40 top-12 h-136 w-[24rem] rotate-12 rounded-[50%] border border-primary/20 opacity-70 blur-[1px]" />
      <div className="absolute -right-48 top-24 h-120 w-120 rounded-full border border-primary/10" />
      <motion.div
        aria-hidden="true"
        className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-primary/35"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-1/2 top-36 h-88 w-152 -translate-x-1/2 rounded-[50%] border border-border/60"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 grid flex-1 place-items-center pb-12">
        <div className="relative w-full max-w-5xl text-center">
          <motion.div
            data-reveal
            className="absolute left-0 top-1/2 hidden size-20 -translate-y-1/2 items-center justify-center rounded-full border border-primary/15 bg-radial from-primary/50 via-primary/8 to-transparent text-primary backdrop-blur md:flex"
            animate={{ y: [-8, 8, -8], rotate: 360 }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 16, repeat: Infinity, ease: "linear" },
            }}
          >
            <motion.span
              className="absolute inset-2 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <Network className="size-6" />
          </motion.div>

          <motion.div
            data-reveal
            className="absolute right-0 top-1/2 hidden size-20 -translate-y-1/2 items-center justify-center rounded-full border border-primary/15 bg-radial from-primary/50 via-primary/8 to-transparent text-primary backdrop-blur md:flex"
            animate={{ y: [8, -8, 8], rotate: -360 }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 16, repeat: Infinity, ease: "linear" },
            }}
          >
            <motion.span
              className="absolute inset-2 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <Code2 className="size-6" />
          </motion.div>

          <p
            data-reveal
            className="mb-5 text-xs sm:text-sm font-medium uppercase text-primary"
          >
            Available for work
          </p>
          <h1
            data-reveal
            className="font-heading text-3xl font-semibold tracking-normal text-balance text-foreground md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            It&apos;s Md. Rakibul Islam
          </h1>
          <div
            data-reveal
            className="mt-5 flex flex-col items-center justify-center gap-2 text-3xl font-semibold text-balance text-foreground md:text-5xl"
          >
            <span>A</span>
            <MorphingText
              texts={designationTexts}
              className="mx-0 h-7 max-w-[min(42rem,90vw)] text-primary md:h-12 [&_span]:text-2xl sm:[&_span]:text-3xl [&_span]:md:text-5xl"
            />
          </div>
          <p
            data-reveal
            className="mx-auto mt-6 max-w-3xl text-sm md:text-base leading-8 text-muted-foreground lg:text-lg"
          >
            Professional MERN Stack Developer with expertise in building
            scalable web applications using MongoDB, Express.js, React, and
            Node.js. Focused on developing high-performance RESTful APIs and
            responsive frontends to deliver seamless, user-centric digital
            solutions.
          </p>
          <p
            data-reveal
            className="mt-5 text-base md:text-lg text-foreground/80"
          >
            Where clean interfaces meet reliable engineering.
          </p>

          <div data-reveal className="mt-9">
            <InteractiveHoverButton
              type="button"
              onClick={() => router.push("/contact")}
              className="min-w-40 border-primary/30 py-2.5 shadow-lg shadow-primary/15"
            >
              Contact Me
            </InteractiveHoverButton>
          </div>
        </div>

        <div className="absolute bottom-6 left-4 hidden [writing-mode:vertical-rl] text-xs tracking-[0.35em] text-muted-foreground md:block">
          Contact me
        </div>
        <Link
          href="/projects"
          className="absolute bottom-6 right-4 hidden items-center gap-2 text-sm tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
          View Projects
          <ArrowRight className="size-4" />
        </Link>
        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted-foreground md:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
          }}
        >
          <ArrowDown className="size-5" />
        </motion.div>
      </Container>
    </Section>
  );
}
