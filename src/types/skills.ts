import type { ComponentType, SVGProps } from "react";

export interface Skill {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
  brandColor: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Metric {
  label: string;
  value: number;
  color: string;
}

export interface Tab {
  id: SkillCategory["id"];
  label: string;
}
