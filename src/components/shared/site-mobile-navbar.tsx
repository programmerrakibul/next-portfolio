"use client";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import Logo from "../ui/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import ResumeButton from "./resume-button";
import { NavItem } from "./site-navbar";

interface MobileNavbarProps {
  navItems: NavItem[];
}

const SiteMobileNavbar = ({ navItems }: MobileNavbarProps) => {
  const pathname = usePathname();
  const scrolled = useScroll();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
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
          >
            <Menu className="size-5" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex flex-col p-6 w-full max-w-[320px]"
        >
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile navigation menu containing links to different sections of the
            website.
          </SheetDescription>
          <SheetClose asChild>
            <div className="flex items-center gap-2 pt-2">
              <Logo />
            </div>
          </SheetClose>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <SheetClose key={item.href} asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      isActive
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>

          <div className="mt-auto flex items-center gap-3 pt-4">
            <ResumeButton className="flex-1" />
            <AnimatedThemeToggler
              duration={520}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border/60"
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SiteMobileNavbar;
