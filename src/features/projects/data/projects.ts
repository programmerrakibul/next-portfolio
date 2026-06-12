import type { Project } from "@/types/projects";

const projects: Project[] = [
  {
    id: "book-wagon",
    title: "Book Wagon",
    description:
      "A full-stack online bookstore platform with role-based access (Admin, Librarian, Member), Stripe payment integration, wishlist management, and comprehensive book browsing.",
    photoUrl:
      "https://res.cloudinary.com/dqh5dajig/image/upload/v1781288979/Screenshot_2026-06-06_181206_nl9vlm.png",
    featured: true,
    liveUrl: "https://book-wagon-46880.web.app/",
    repoUrl: "https://github.com/programmerrakibul/book-wagon-client",
    stacks: ["React", "Firebase", "Stripe", "GSAP", "DaisyUI", "Framer Motion"],
    createdAt: new Date("2025-11-15"),
    updatedAt: new Date("2026-05-20"),
  },
  {
    id: "labora",
    title: "Labora",
    description:
      "A full-stack freelance job platform that enables users to post job opportunities, browse available tasks, and accept projects with real-time updates and secure authentication.",
    photoUrl:
      "https://res.cloudinary.com/dqh5dajig/image/upload/v1781288979/Screenshot_2026-06-13_001647_uc4bce.png",
    featured: true,
    liveUrl: "https://labora-7a232.web.app/",
    repoUrl: "https://github.com/programmerrakibul/labora-client",
    stacks: [
      "React",
      "Firebase",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Motion",
    ],
    createdAt: new Date("2025-09-20"),
    updatedAt: new Date("2026-04-15"),
  },
  {
    id: "chronos",
    title: "Chronos",
    description:
      "A modern, full-stack blog platform built with Next.js 16, featuring user authentication, blog management, category system, and a responsive UI with dark mode support.",
    photoUrl:
      "https://res.cloudinary.com/dqh5dajig/image/upload/v1781288979/Screenshot_2026-06-13_002013_vuiaxc.png",
    featured: true,
    liveUrl: "https://chronos-blog.vercel.app/",
    repoUrl: "https://github.com/programmerrakibul/chronos",
    stacks: [
      "Next.js",
      "React",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "DaisyUI",
    ],
    createdAt: new Date("2026-04-02"),
    updatedAt: new Date("2026-05-28"),
  },
  {
    id: "snap-order",
    title: "Snap Order",
    description:
      "Modern inventory and order management dashboard for customers and administrators with role-based access control, secure email verification, and real-time stock tracking.",
    photoUrl:
      "https://res.cloudinary.com/dqh5dajig/image/upload/v1781288978/Screenshot_2026-06-06_175942_vmcyzr.png",
    featured: false,
    liveUrl: "https://snap-order-sigma.vercel.app/",
    repoUrl: "https://github.com/programmerrakibul/snap-order",
    stacks: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Zod",
    ],
    createdAt: new Date("2026-04-26"),
    updatedAt: new Date("2026-06-04"),
  },
  {
    id: "kid-venture",
    title: "Kid Venture",
    description:
      "An e-commerce toy store platform bringing the magic of a local toy shop online, featuring product catalog, shopping cart, and a delightful kid-friendly browsing experience.",
    photoUrl:
      "https://res.cloudinary.com/dqh5dajig/image/upload/v1781288982/Screenshot_2026-06-13_002603_ogkzhq.png",
    featured: false,
    liveUrl: "https://kid-venture-119c5.firebaseapp.com/",
    repoUrl: "https://github.com/programmerrakibul/kid-venture",
    stacks: ["React", "Firebase", "DaisyUI", "Tailwind CSS", "Swiper"],
    createdAt: new Date("2025-07-10"),
    updatedAt: new Date("2026-03-22"),
  },
  {
    id: "aurora-mart",
    title: "Aurora Mart API",
    description:
      "A type-safe REST API server for an e-commerce platform built with Express.js, TypeScript, PostgreSQL, and Prisma ORM featuring session management and Zod validation.",
    photoUrl: "",
    featured: false,
    liveUrl: "https://aurora-mart-server.vercel.app/",
    repoUrl: "https://github.com/programmerrakibul/aurora-mart-server",
    stacks: ["TypeScript", "Express.js", "PostgreSQL", "Prisma", "Zod"],
    createdAt: new Date("2025-06-01"),
    updatedAt: new Date("2026-04-25"),
  },
];

export function getProjects(): Project[] {
  return projects;
}

export type { Project };
