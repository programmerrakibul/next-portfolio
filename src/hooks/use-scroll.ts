"use client";

import { useEffect, useState } from "react";

const useScroll = (): boolean => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
};

export default useScroll;
