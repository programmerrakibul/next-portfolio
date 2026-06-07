"use client";

import Container from "@/components/shared/container";
import ResumeButton from "@/components/shared/resume-button";
import SiteMobileNavbar from "@/components/shared/site-mobile-navbar";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Logo from "@/components/ui/logo";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { useMobile } from "@/hooks/use-mobile";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const scrolled = useScroll();
  const pathname = usePathname();
  const isMobile = useMobile();
  const navRef = useGsapReveal<HTMLElement>({ y: -12, delay: 0.05 });

  return (
    <motion.header
      ref={navRef}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300",
        scrolled
          ? "border-border/60 bg-background/75 text-foreground backdrop-blur-xl"
          : "text-foreground",
      )}
      initial={false}
      animate={{ y: scrolled ? 0 : 0 }}
    >
      <nav>
        <Container className="flex h-20 items-center justify-between">
          <Logo />

          <div
            data-reveal
            className={cn(
              "hidden items-center gap-5 lg:gap-10 rounded-full border px-8 py-3 text-sm shadow-sm backdrop-blur md:flex",
              scrolled
                ? "border-border/40 bg-background/35 text-muted-foreground"
                : "border-border/50 bg-background/50 text-muted-foreground",
            )}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-1 transition-colors hover:text-foreground",
                    isActive && "text-foreground",
                    item.label === "Home" && "hidden lg:inline-block",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute -inset-x-4 -inset-y-2 -z-10 rounded-full bg-primary/10 ring-1 ring-primary/20"
                      transition={{ duration: 0.28, ease: "easeOut" }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div data-reveal className="hidden items-center gap-4 md:flex">
            <ResumeButton />
            {/* <AnimatedThemeToggler
              variant="circle"
              duration={520}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-full border backdrop-blur transition-colors",
                scrolled
                  ? "border-border/60 bg-background/30 text-foreground hover:bg-muted"
                  : "border-border/60 bg-background/50 text-foreground hover:bg-muted",
              )}
            /> */}
          </div>

          {isMobile && <SiteMobileNavbar navItems={navItems} />}
        </Container>
      </nav>
    </motion.header>
  );
}
