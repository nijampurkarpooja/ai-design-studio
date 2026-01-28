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
      className="overflow-hidden"
      innerClassName="py-20 sm:py-24 lg:py-28"
    >
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-5xl text-center">
          {data.eyebrow ? (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-xs font-medium tracking-[0.22em] text-text-muted uppercase"
            >
              {data.eyebrow}
            </motion.p>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 sm:mb-8"
          >
            {data.headlineImage ? (
              <div className="relative mx-auto h-auto w-full max-w-6xl px-2 sm:px-6">
                <Image
                  src={data.headlineImage}
                  alt="The Internet's Design School"
                  width={1200}
                  height={400}
                  priority
                  className="mx-auto h-auto w-full max-w-3xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                />
              </div>
            ) : (
              <h1 className="px-4 text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                The Internet&apos;s Design School
              </h1>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-text-muted sm:text-lg md:text-xl"
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
            className="mt-12 sm:mt-16"
          >
            <HeroFeaturedCard data={data.featured} />
          </motion.div>
        ) : null}
      </div>
    </SectionContainer>
  );
}
