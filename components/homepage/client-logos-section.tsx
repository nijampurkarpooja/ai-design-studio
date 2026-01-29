"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { SectionContainer } from "@/app/components/ui/section-container";
import type { ClientLogosData, Logo } from "@/types/homepage";

interface ClientLogosSectionProps {
  data: ClientLogosData;
  className?: string;
}

function LogoItem({
  logo,
  index,
}: {
  logo: Logo;
  index: number;
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.06, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center justify-center rounded-2xl border border-card-border bg-card-bg/40 px-4 py-5 shadow-[0_0_0_1px_rgba(168,85,247,0.10)] backdrop-blur-sm transition-colors hover:border-card-border/70"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={220}
        height={72}
        className="h-8 w-auto max-w-[160px] opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 sm:h-9 sm:max-w-[180px]"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 220px"
      />
    </motion.div>
  );

  if (logo.href) {
    return (
      <Link
        href={logo.href}
        className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent-purple focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={logo.alt}
      >
        {content}
      </Link>
    );
  }

  return content;
}

function Grid({ logos }: { logos: Logo[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
      {logos.map((logo, index) => (
        <LogoItem key={`${logo.src}-${logo.alt}`} logo={logo} index={index} />
      ))}
    </div>
  );
}

function Marquee({ logos }: { logos: Logo[] }) {
  const loop = React.useMemo(() => [...logos, ...logos], [logos]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-linear-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-linear-to-l from-background to-transparent sm:w-24" />

      <motion.div
        className="flex w-max gap-4 pr-4 sm:gap-5 lg:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
      >
        {loop.map((logo, index) => (
          <div key={`${logo.src}-${logo.alt}-${index}`} className="w-[220px]">
            <LogoItem logo={logo} index={index % logos.length} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ClientLogosSection({ data, className }: ClientLogosSectionProps) {
  const headingId = "client-logos-heading";
  const hasHeading = Boolean(data.heading);

  return (
    <SectionContainer className={clsx(className)} innerClassName="py-16 sm:py-20 lg:py-24">
      <div aria-labelledby={headingId}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-6xl"
        >
          {data.eyebrow ? (
            <p className="mb-3 text-center text-xs font-medium tracking-[0.22em] text-text-muted uppercase">
              {data.eyebrow}
            </p>
          ) : null}

          {hasHeading ? (
            <h2
              id={headingId}
              className="text-center text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl"
            >
              {data.heading}
            </h2>
          ) : (
            <h2 id={headingId} className="sr-only">
              Client logos
            </h2>
          )}

          <div className={clsx("mt-10", hasHeading ? "sm:mt-12" : "sm:mt-10")}>
            {data.variant === "marquee" ? (
              <Marquee logos={data.logos} />
            ) : (
              <Grid logos={data.logos} />
            )}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

