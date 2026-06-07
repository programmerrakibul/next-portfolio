"use client";

import Container from "@/components/shared/container";
import Section from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <Section className="relative flex min-h-dvh items-center justify-center overflow-hidden pt-20">
      {/* Ambient radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-125 w-125 rounded-full bg-primary/10 blur-[120px] md:h-175 md:w-175" />
      </div>

      <Container>
        {/* Floating 424 background text */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
        >
          <span className="font-heading text-[15rem] font-black leading-none text-foreground/4 blur-2xl md:text-[25rem]">
            404
          </span>
        </motion.div>

        {/* Foreground content */}
        <div className="relative z-10 mx-auto max-w-xl px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium uppercase tracking-wider text-primary"
          >
            Error 404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-heading text-5xl font-bold md:text-7xl"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-muted-foreground"
          >
            The page you&apos;re trying to reach doesn&apos;t exist or has been
            moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Button asChild>
                <Link href="/">Go Back Home</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
