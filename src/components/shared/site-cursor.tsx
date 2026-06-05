"use client";

import { useEffect, useState } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export function SiteCursor() {
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.closest('[role="button"]');

      setIsHoveringInteractive(!!isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <SmoothCursor
      cursor={
        <div
          className={`relative size-7 rounded-full border border-primary/80 bg-primary/15 shadow-[0_0_28px_color-mix(in_oklch,var(--primary),transparent_30%)] backdrop-blur transition-opacity duration-200 ${
            isHoveringInteractive ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
        </div>
      }
      springConfig={{
        damping: 42,
        stiffness: 520,
        mass: 0.7,
        restDelta: 0.001,
      }}
    />
  );
}
