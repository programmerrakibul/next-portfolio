import { cn } from "@/lib/utils";
import { SiteCursor } from "@/components/shared/site-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import ProviderWrapper from "@/providers/provider-wrapper";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Oxanium } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/shared/site-navbar";

const geistMonoHeading = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
});

const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Programmer Rakibul",
  description: "This is my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        oxanium.variable,
        geistMonoHeading.variable,
      )}
    >
      <body>
        <ProviderWrapper>
          <ScrollProgress className="z-60 h-0.5 from-primary via-chart-2 to-chart-1" />
          <SiteCursor />
          <SiteNavbar />
          <main className="min-h-dvh">{children}</main>
        </ProviderWrapper>
      </body>
    </html>
  );
}
