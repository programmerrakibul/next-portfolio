"use client";

import { cn } from "@/lib/utils";
import type { Metric } from "@/types/skills";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";

function AnimatedCounter({
  value,
  suffix = "%",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const displayValue = useTransform(
    count,
    (latest) => `${Math.round(latest)}${suffix}`,
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      type: "spring",
      stiffness: 50,
      damping: 20,
    });
    return controls.stop;
  }, [isInView, value, count]);

  return (
    <motion.span
      ref={ref}
      className="text-2xl font-bold tabular-nums sm:text-3xl"
    >
      {displayValue}
    </motion.span>
  );
}

interface SkillsMetricsProps {
  metrics: Metric[];
  className?: string;
}

export function SkillsMetrics({ metrics, className }: SkillsMetricsProps) {
  return (
    <div
      className={cn(
        "w-full max-w-5xl mx-auto rounded-2xl border border-border/50 bg-background/40 p-6 backdrop-blur-sm sm:p-8",
        className,
      )}
    >
      <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Proficiency Metrics
      </h3>

      <div className="space-y-5">
        {metrics.map((metric, index) => (
          <div key={metric.label} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground/80">
                {metric.label}
              </span>
              <AnimatedCounter value={metric.value} />
            </div>

            <div className="relative h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${metric.color}, color-mix(in oklch, ${metric.color} 60%, var(--primary)))`,
                }}
                initial={{ width: "0%" }}
                whileInView={{ width: `${metric.value}%` }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 15,
                  delay: index * 0.1,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
