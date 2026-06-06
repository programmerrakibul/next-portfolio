"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { useGsapReveal } from "../../hooks/use-gsap-reveal";
import Container from "./container";
import Section from "./section";

import {
  GithubIcon,
  Linkedin02Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { MapPin, Phone } from "lucide-react";
import ContactForm from "../forms/contact-form";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/programmerrakibul",
    icon: GithubIcon,
  },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin02Icon },
  {
    name: "Email",
    href: "mailto:contact@programmerrakibul.com",
    icon: Mail01Icon,
  },
];

const staggerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ContactSection() {
  const sectionRef = useGsapReveal<HTMLElement>({
    y: 30,
    duration: 1,
    stagger: 0.15,
    scrollTrigger: true,
  });

  return (
    <Section
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-background py-20 md:py-28 text-foreground"
    >
      <AnimatedGridPattern
        width={48}
        height={48}
        numSquares={50}
        maxOpacity={0.12}
        duration={3}
        repeatDelay={0.7}
        className={cn(
          "opacity-50 mask-[radial-gradient(ellipse_at_center,white,transparent_72%)]",
          "fill-primary/20 stroke-primary/15",
        )}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklch,var(--primary),transparent_90%),transparent_60%),radial-gradient(ellipse_at_bottom,color-mix(in_oklch,var(--primary),transparent_94%),transparent_60%)]" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full border border-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      <Container className="relative z-10 ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 gap-12 md:gap-6 md:grid-cols-2 lg:gap-8"
        >
          <motion.div
            variants={staggerVariants}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Contact
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">
              Let&apos;s work together
            </h2>
            <p className="max-w-md text-xs md:text-sm lg:text-base xl:text-lg leading-relaxed text-muted-foreground">
              Have a project in mind or just want to say hi? I&apos;d love to
              hear from you. Drop me a message and I&apos;ll get back as soon as
              possible.
            </p>

            <div className="space-y-4 pt-2">
              {[
                {
                  icon: Mail01Icon,
                  iconType: "hugeicons" as const,
                  label: "Email",
                  value: "contact@programmerrakibul.com",
                  href: "mailto:contact@programmerrakibul.com",
                },
                {
                  icon: Phone,
                  iconType: "lucide" as const,
                  label: "Phone",
                  value: "+1 (555) 123-4567",
                },
                {
                  icon: MapPin,
                  iconType: "lucide" as const,
                  label: "Location",
                  value: "Dhaka, Bangladesh",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/50 text-primary">
                    {item.iconType === "hugeicons" ? (
                      <HugeiconsIcon icon={item.icon} size={18} />
                    ) : (
                      <item.icon className="size-4.5" />
                    )}
                  </div>
                  <div>
                    <p className="text-xs xl:text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-xs lg:text-sm xl:text-base font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="text-xs lg:text-sm xl:text-base font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  {...(link.name !== "Email" && {
                    target: "_blank",
                    rel: "noreferrer",
                  })}
                  className="flex size-10 items-center justify-center rounded-lg border border-border/60 bg-background/50 text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  title={link.name}
                >
                  <HugeiconsIcon icon={link.icon} size={18} />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerVariants}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
