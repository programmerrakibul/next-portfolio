"use client";

// import { SiteCursor } from "@/components/shared/site-cursor";
import SiteFooter from "@/components/shared/site-footer";
import { SiteNavbar } from "@/components/shared/site-navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme-provider";
import { useTheme } from "next-themes";
import { Toaster, ToasterProps } from "sonner";

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <>
      <ThemeProvider>
        <ScrollProgress className="z-60 h-0.5 from-primary via-chart-2 to-chart-1" />
        {/* <SiteCursor /> */}
        <TooltipProvider>
          <SiteNavbar />
          <main className="min-h-dvh">{children}</main>
          <SiteFooter />
        </TooltipProvider>
        <Toaster
          closeButton
          richColors
          position="top-right"
          theme={(theme as ToasterProps["theme"]) ?? "dark"}
        />
      </ThemeProvider>
    </>
  );
};

export default ProviderWrapper;
