"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./container";
import { useGsapReveal } from "./use-gsap-reveal";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useGsapReveal<HTMLElement>({ y: -12, delay: 0.05 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <Link
            data-reveal
            href="/"
            className="font-heading text-lg font-semibold tracking-normal"
            aria-label="Home"
          >
            Rakibul<span className="text-primary">.Portfolio</span>
          </Link>

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
            <ShimmerButton
              type="button"
              aria-label="Open resume"
              onClick={() => router.push("/resume")}
              shimmerColor="color-mix(in oklch, var(--primary), white 35%)"
              background="color-mix(in oklch, var(--background), var(--foreground) 8%)"
              className={cn(
                "relative min-w-28 border-border/60 px-5 py-2 text-sm font-semibold text-foreground shadow-[0_0_28px_color-mix(in_oklch,var(--primary),transparent_72%)]",
              )}
            >
              Resume
              <BorderBeam
                size={48}
                duration={4.8}
                colorFrom="var(--primary)"
                colorTo="color-mix(in oklch, var(--primary), white 40%)"
              />
            </ShimmerButton>
            <AnimatedThemeToggler
              variant="circle"
              duration={520}
              className={cn(
                "inline-flex size-10 items-center justify-center rounded-full border backdrop-blur transition-colors",
                scrolled
                  ? "border-border/60 bg-background/30 text-foreground hover:bg-muted"
                  : "border-border/60 bg-background/50 text-foreground hover:bg-muted",
              )}
            />
          </div>

          <button
            data-reveal
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border md:hidden",
              scrolled
                ? "border-border/60 bg-background/40"
                : "border-border/60 bg-background/50",
            )}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </Container>
      </nav>

      <motion.div
        className="mx-4 overflow-hidden rounded-2xl border border-border/60 bg-background/90 shadow-xl backdrop-blur md:hidden"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-2 p-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                  isActive &&
                    "bg-primary/10 text-foreground ring-1 ring-primary/20",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => router.push("/resume")}
            >
              Resume
            </Button>
            <AnimatedThemeToggler
              duration={520}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/60"
            />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
