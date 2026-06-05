"use client";

import { SmoothCursor } from "@/components/ui/smooth-cursor";

export function SiteCursor() {
  return (
    <SmoothCursor
      cursor={
        <div className="relative size-7 rounded-full border border-primary/80 bg-primary/15 shadow-[0_0_28px_color-mix(in_oklch,var(--primary),transparent_30%)] backdrop-blur">
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
