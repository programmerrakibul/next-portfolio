"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
};

export function useGsapReveal<T extends HTMLElement>({
  y = 18,
  duration = 0.9,
  stagger = 0.08,
  delay = 0,
}: RevealOptions = {}) {
  const scopeRef = useRef<T>(null);

  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal]",
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
        },
      );
    }, scope);

    return () => ctx.revert();
  }, [delay, duration, stagger, y]);

  return scopeRef;
}
