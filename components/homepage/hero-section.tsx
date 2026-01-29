"use client";

import { Button } from "@/app/components/ui/button";
import { IconList } from "@/app/components/ui/icon-list";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { HeroData } from "@/types/homepage";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  data: HeroData;
}

function HeroFeaturedCard({ data }: { data: NonNullable<HeroData["featured"]> }) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="overflow-hidden rounded-3xl border border-card-border bg-card-bg/70 shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_0_60px_rgba(168,85,247,0.08)] backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            {data.kicker ? (
              <p className="text-xs font-medium tracking-[0.18em] text-text-muted uppercase">
                {data.kicker}
              </p>
            ) : null}

            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl lg:text-4xl">
              {data.title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
              {data.description}
            </p>

            {data.bullets && data.bullets.length > 0 ? (
              <IconList items={data.bullets} className="mt-6" />
            ) : null}
          </div>

          <div className="relative min-h-[320px] md:min-h-full">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 via-background/10 to-transparent md:bg-linear-to-l md:from-background/50 md:via-transparent md:to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <SectionContainer
      className="overflow-hidden border-b border-white/5"
      innerClassName="relative py-28 sm:py-36 lg:py-44"
    >
      {/* Soft gradient band so hero extends theme but stands out from content below */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-transparent via-accent-purple/10 to-accent-purple/5"
        aria-hidden
      />
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-5xl text-center">
          {data.eyebrow ? (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-sm font-medium tracking-[0.24em] text-text-muted uppercase sm:mb-6"
            >
              {data.eyebrow}
            </motion.p>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8 sm:mb-10"
          >
            <h1
              className="px-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-text-primary drop-shadow-[0_0_40px_rgba(168,85,247,0.15)] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              style={{ fontFamily: "var(--font-syne), var(--font-geist-sans)" }}
            >
              <span className="bg-linear-to-b from-white via-white to-white/90 bg-clip-text text-transparent">
                {data.headline}
              </span>
            </h1>
            <div
              className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-accent-purple via-accent-pink to-accent-purple opacity-90 sm:mt-5 sm:h-1.5 sm:w-28"
              aria-hidden
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10 max-w-2xl px-4 text-base leading-relaxed text-text-muted sm:mb-12 sm:text-lg md:text-xl"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center gap-4 px-4 sm:flex-row sm:gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
            >
              <Button
                href={data.primaryCta.href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                {data.primaryCta.text}
              </Button>
            </motion.div>

            {data.secondaryCta.text ? (
              <Link
                href={data.secondaryCta.href}
                className="text-sm text-text-muted transition-colors hover:text-text-secondary sm:text-base"
              >
                {data.secondaryCta.text}
              </Link>
            ) : null}
          </motion.div>
        </div>

        {data.featured ? (
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.25 }}
            className="mt-14 sm:mt-18"
          >
            <HeroFeaturedCard data={data.featured} />
          </motion.div>
        ) : null}
      </div>
    </SectionContainer>
  );
}
