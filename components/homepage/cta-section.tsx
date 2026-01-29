"use client";

import clsx from "clsx";
import { motion } from "motion/react";

import { Button } from "@/app/components/ui/button";
import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { CTASectionData } from "@/types/homepage";
import Link from "next/link";

interface CTASectionProps {
  data: CTASectionData;
  className?: string;
}

export function CTASection({ data, className }: CTASectionProps) {
  const headingId = "cta-heading";

  return (
    <SectionContainer
      className={clsx("relative overflow-hidden", className)}
      innerClassName="py-20 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-linear-to-br from-accent-purple/10 via-accent-pink/5 to-transparent" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.eyebrow ? (
            <p className="mb-4 text-xs font-medium tracking-[0.22em] text-text-muted uppercase">
              {data.eyebrow}
            </p>
          ) : null}

          <h2
            id={headingId}
            className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
          >
            {data.highlightedText ? (
              <HighlightedText
                text={data.heading}
                highlight={data.highlightedText}
              />
            ) : (
              data.heading
            )}
          </h2>

          {data.description ? (
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {data.description}
            </p>
          ) : null}

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
            >
              <Button
                href={data.primaryCta.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {data.primaryCta.text}
              </Button>
            </motion.div>

            {data.secondaryCta?.text ? (
              <Link
                href={data.secondaryCta.href}
                className="text-sm text-text-muted transition-colors hover:text-text-secondary sm:text-base"
              >
                {data.secondaryCta.text}
              </Link>
            ) : null}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
