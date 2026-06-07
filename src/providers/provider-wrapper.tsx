"use client";

import { SiteCursor } from "@/components/shared/site-cursor";
import SiteFooter from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>
        <ScrollProgress className="z-60 h-0.5 from-primary via-chart-2 to-chart-1" />
        <SiteCursor />
        <SiteNavbar />
        <main className="min-h-dvh">{children}</main>
        <SiteFooter />
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default ProviderWrapper;
