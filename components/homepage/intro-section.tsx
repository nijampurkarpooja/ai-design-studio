"use client";

import clsx from "clsx";
import { motion } from "motion/react";

import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { IconList } from "@/app/components/ui/icon-list";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { IntroData } from "@/types/homepage";
import Image from "next/image";

interface IntroSectionProps {
  data: IntroData;
  className?: string;
}

export function IntroSection({ data, className }: IntroSectionProps) {
  return (
    <SectionContainer
      className={clsx(className)}
      innerClassName="py-18 sm:py-22 lg:py-28"
    >
      <div aria-labelledby="intro-heading">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-2 lg:order-1"
          >
            {data.eyebrow ? (
              <p className="mb-3 text-xs font-medium tracking-[0.22em] text-text-muted uppercase">
                {data.eyebrow}
              </p>
            ) : null}

            <h2
              id="intro-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
            >
              <HighlightedText
                text={data.heading}
                highlight={data.highlightedText}
              />
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {data.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {data.bullets && data.bullets.length > 0 ? (
              <IconList items={data.bullets} className="mt-8" />
            ) : null}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative w-full overflow-hidden rounded-xl">
              <Image
                src={data.image.src}
                alt={data.image.alt}
                width={720}
                height={900}
                sizes="(max-width: 1024px) 92vw, 520px"
                className="h-auto w-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
