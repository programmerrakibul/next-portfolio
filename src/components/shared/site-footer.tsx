"use client";

import Container from "@/components/shared/container";
import Logo from "@/components/ui/logo";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

interface FooterLink {
  label: string;
  href: string;
}

const navLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

const socialLinks: (FooterLink & { icon: IconType })[] = [
  {
    label: "GitHub",
    href: "https://github.com/programmerrakibul",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:contact@programmerrakibul.com",
    icon: FiMail,
  },
];

const projectLinks: FooterLink[] = [
  { label: "All Projects", href: "/projects" },
  {
    label: "GitHub Repos",
    href: "https://github.com/programmerrakibul?tab=repositories",
  },
];

const linkClass =
  "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full inline-block w-fit";

function AvailabilityDot() {
  return (
    <span className="relative flex size-2">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/75" />
      <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
    </span>
  );
}

const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-background">
      <Container>
        {/* Top row */}
        <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12 md:py-16">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 md:col-end-2">
            <Logo />

            <p className="mt-3 text-sm text-muted-foreground">
              MERN &amp; Next.js Developer crafting modern, scalable web
              applications with clean code and thoughtful architecture.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <AvailabilityDot />
              <span className="text-xs text-muted-foreground">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm text-muted-foreground transition-colors hover:text-foreground ${linkClass}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Social
            </h3>
            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground ${linkClass}`}
                  >
                    <link.icon className="size-3.5 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Projects
            </h3>
            <ul className="mt-4 space-y-3">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className={`text-sm text-muted-foreground transition-colors hover:text-foreground ${linkClass}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Programmer Rakibul. All rights
            reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to Top
            <FiArrowUp className="size-3" />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
