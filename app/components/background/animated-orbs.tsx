"use client";

import { motion } from "motion/react";

export function AnimatedOrbsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      <motion.div
        className="absolute -top-40 -right-40 h-60 w-60 rounded-full bg-accent-purple/20 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        animate={{
          y: [0, -30, -10, 0],
          x: [0, 10, -5, 0],
          scale: [1, 1.15, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 h-60 w-60 rounded-full bg-accent-pink/20 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        animate={{
          y: [0, 30, 10, 0],
          x: [0, -10, 5, 0],
          scale: [1, 1.2, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/10 blur-3xl sm:h-96 sm:w-96 lg:h-120 lg:w-120"
        animate={{
          scale: [1, 1.25, 1.1, 1],
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

