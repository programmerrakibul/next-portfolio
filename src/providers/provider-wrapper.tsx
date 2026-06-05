"use client";

import { ThemeProvider } from "./theme-provider";

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default ProviderWrapper;
