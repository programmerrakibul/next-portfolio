"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn, getInitials } from "@/lib/utils";
import type { Project } from "@/types/projects";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 22,
      delay: i * 0.08,
    },
  }),
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 350, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 30 });

  const rotateX = useTransform(springY, [-0.4, 0.4], [6, -6]);
  const rotateY = useTransform(springX, [-0.4, 0.4], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mouseX.set((e.clientX - cx) / rect.width);
    mouseY.set((e.clientY - cy) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const { title, description, photoUrl, liveUrl, repoUrl, stacks } = project;

  return (
    <motion.div
      data-reveal
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      style={{ perspective: 900, rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="relative"
    >
      <Card className="relative h-full rounded-2xl border-border/50 bg-card/80 backdrop-blur-sm py-0 gap-0">
        <ShineBorder
          shineColor={[
            "oklch(0.511 0.096 186.391 / 0.6)",
            "oklch(0.704 0.14 182.503 / 0.4)",
            "oklch(0.511 0.096 186.391 / 0.6)",
          ]}
          borderWidth={1}
          duration={12}
        />
        <div className="relative aspect-3/2 h-40 w-full overflow-hidden rounded-t-2xl bg-linear-to-br from-primary/20 via-primary/10 to-transparent">
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt={title}
              width={320}
              height={240}
              className="size-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex size-full items-center justify-center">
              <span className="text-4xl font-bold text-primary/30">
                {getInitials(title)}
              </span>
            </div>
          )}
        </div>

        <div className="py-6 space-y-3">
          <CardHeader>
            <CardTitle>
              <Tooltip>
                <TooltipTrigger>
                  <h5 className="line-clamp-1">{title}</h5>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </CardTitle>

            <Tooltip>
              <TooltipTrigger>
                <p className="line-clamp-2 text-muted-foreground text-start">
                  {description}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          </CardHeader>

          <CardContent>
            <div className="flex flex-wrap gap-1.5">
              {stacks.map((stack) => (
                <span
                  key={stack}
                  className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary-foreground/50"
                >
                  {stack}
                </span>
              ))}
            </div>
          </CardContent>

          <CardFooter className="mt-auto gap-3 pt-2">
            {[
              {
                icon: FiExternalLink,
                href: liveUrl,
                label: "Live",
              },
              {
                icon: FiGithub,
                href: repoUrl,
                label: "Repo",
              },
            ].map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-4 py-2 text-xs font-medium",
                  "text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                )}
              >
                <Icon className="size-3.5" />
                {label}
              </Link>
            ))}
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
