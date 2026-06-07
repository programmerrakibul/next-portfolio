import type { Metric, SkillCategory } from "@/types/skills";
import { BsBootstrap, BsTypescript } from "react-icons/bs";
import {
  RiNextjsFill,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAxios,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReactquery,
  SiShadcnui,
  SiVercel,
  SiZod,
} from "react-icons/si";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      {
        name: "TypeScript",
        icon: BsTypescript,
        color: "text-[#3178C6] bg-[#3178C6]/10 border-[#3178C6]/20",
        brandColor: "#3178C6",
      },
      {
        name: "Next.js",
        icon: RiNextjsFill,
        color: "text-foreground bg-foreground/10 border-foreground/20",
        brandColor: "#ffffff",
      },
      {
        name: "React",
        icon: RiReactjsLine,
        color: "text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/20",
        brandColor: "#61DAFB",
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
        color: "text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/20",
        brandColor: "#06B6D4",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "text-[#0055FF] bg-[#0055FF]/10 border-[#0055FF]/20",
        brandColor: "#0055FF",
      },
      {
        name: "shadcn/ui",
        icon: SiShadcnui,
        color: "text-foreground bg-foreground/10 border-foreground/20",
        brandColor: "#000000",
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: "text-[#007FFF] bg-[#007FFF]/10 border-[#007FFF]/20",
        brandColor: "#007FFF",
      },
      {
        name: "Bootstrap",
        icon: BsBootstrap,
        color: "text-[#7952B3] bg-[#7952B3]/10 border-[#7952B3]/20",
        brandColor: "#7952B3",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: RiNodejsLine,
        color: "text-[#339933] bg-[#339933]/10 border-[#339933]/20",
        brandColor: "#339933",
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
        brandColor: "#f59e0b",
      },
      {
        name: "Zod",
        icon: SiZod,
        color: "text-[#3E67B1] bg-[#3E67B1]/10 border-[#3E67B1]/20",
        brandColor: "#3E67B1",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "text-[#D63AFF] bg-[#D63AFF]/10 border-[#D63AFF]/20",
        brandColor: "#D63AFF",
      },
      {
        name: "Firebase Auth",
        icon: SiFirebase,
        color: "text-[#FFCA28] bg-[#FFCA28]/10 border-[#FFCA28]/20",
        brandColor: "#FFCA28",
      },
      {
        name: "Next Auth",
        icon: SiNextdotjs,
        color: "text-foreground bg-foreground/10 border-foreground/20",
        brandColor: "#ffffff",
      },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248] bg-[#47A248]/10 border-[#47A248]/20",
        brandColor: "#47A248",
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
        color: "text-[#880000] bg-[#880000]/10 border-[#880000]/20",
        brandColor: "#880000",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-[#4169E1] bg-[#4169E1]/10 border-[#4169E1]/20",
        brandColor: "#4169E1",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color:
          "text-[#2D3748] bg-[#2D3748]/10 border-[#2D3748]/20 dark:text-[#E2E8F0] dark:bg-[#E2E8F0]/10 dark:border-[#E2E8F0]/20",
        brandColor: "#E2E8F0",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-[#F05032] bg-[#F05032]/10 border-[#F05032]/20",
        brandColor: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-foreground bg-foreground/10 border-foreground/20",
        brandColor: "#ffffff",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-foreground bg-foreground/10 border-foreground/20",
        brandColor: "#ffffff",
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: "text-[#00C8BC] bg-[#00C8BC]/10 border-[#00C8BC]/20",
        brandColor: "#00C8BC",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-[#FF6C37] bg-[#FF6C37]/10 border-[#FF6C37]/20",
        brandColor: "#FF6C37",
      },
      {
        name: "Axios",
        icon: SiAxios,
        color: "text-[#5A29E4] bg-[#5A29E4]/10 border-[#5A29E4]/20",
        brandColor: "#5A29E4",
      },
      {
        name: "TanStack Query",
        icon: SiReactquery,
        color: "text-[#FF4154] bg-[#FF4154]/10 border-[#FF4154]/20",
        brandColor: "#FF4154",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "text-[#F24E1E] bg-[#F24E1E]/10 border-[#F24E1E]/20",
        brandColor: "#F24E1E",
      },
    ],
  },
];

export const metricsData: Metric[] = [
  {
    label: "Frontend Performance",
    value: 95,
    color: "#61DAFB",
  },
  {
    label: "Backend Architecture",
    value: 90,
    color: "#339933",
  },
  {
    label: "Database Modeling",
    value: 85,
    color: "#4169E1",
  },
];
