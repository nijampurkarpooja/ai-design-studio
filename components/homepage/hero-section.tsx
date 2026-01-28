"use client";

import { Button } from "@/app/components/ui/button";
import type { HeroData } from "@/types/homepage";
import { motion } from "motion/react";
import Image from "next/image";

interface HeroSectionProps {
  data: HeroData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      {/* Animated glowing orbs - Enhanced with more dynamic movement */}
      <motion.div
        className="absolute -top-40 -right-40 h-60 w-60 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-accent-purple/20 blur-3xl"
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
        className="absolute -bottom-40 -left-40 h-60 w-60 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-accent-pink/20 blur-3xl"
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 sm:h-96 sm:w-96 lg:h-120 lg:w-120 rounded-full bg-accent-purple/10 blur-3xl"
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

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        {/* Headline Image - Enhanced responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8 lg:mb-10"
        >
          {data.headlineImage ? (
            <div className="relative mx-auto h-auto w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl px-4 sm:px-6 lg:px-8">
              <Image
                src={data.headlineImage}
                alt="The Internet's Design School"
                width={1200}
                height={400}
                priority
                className="w-full h-auto max-w-3xl mx-auto"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              />
            </div>
          ) : (
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl px-4">
              The Internet&apos;s Design School
            </h1>
          )}
        </motion.div>

        {/* Subtitle - Enhanced responsive typography */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 sm:mb-10 lg:mb-12 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg md:text-xl lg:text-2xl px-4 sm:px-6"
        >
          {data.subtitle}
        </motion.p>

        {/* CTA Buttons - Enhanced responsive layout and animations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 px-4"
        >
          {/* Primary CTA - Enhanced hover effects */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              href={data.primaryCta.href}
              variant="primary"
              className="w-full sm:w-auto"
            >
              {data.primaryCta.text}
            </Button>
          </motion.div>

          {/* Secondary CTA - Enhanced hover effects */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              href={data.secondaryCta.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {data.secondaryCta.text}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
