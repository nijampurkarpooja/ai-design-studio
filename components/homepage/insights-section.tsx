"use client";

import clsx from "clsx";
import { motion } from "motion/react";

import { Card, CardContent } from "@/app/components/ui/card";
import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { InsightCard, InsightsSectionData } from "@/types/homepage";

interface InsightsSectionProps {
  data: InsightsSectionData;
  className?: string;
}

function InsightCard({ insight, index }: { insight: InsightCard; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -2, scale: 1.01 }}
      className="h-full"
    >
      <Card className="h-full border-card-border/80 bg-card-bg/80 shadow-sm transition-shadow hover:shadow-[0_0_0_1px_rgba(168,85,247,0.12)]">
        <CardContent className="pt-6">
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
            {insight.text}
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export function InsightsSection({ data, className }: InsightsSectionProps) {
  const headingId = "insights-heading";

  // Extract highlighted text from heading if present (e.g., "the present")
  const headingParts = data.heading.split(".");
  const mainHeading = headingParts[0] || data.heading;
  const highlightedText = mainHeading.includes("the present")
    ? "the present"
    : mainHeading.includes("the future")
      ? "the future"
      : undefined;

  return (
    <SectionContainer
      className={clsx(className)}
      innerClassName="py-16 sm:py-20 lg:py-28"
    >
      <div aria-labelledby={headingId} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          {data.eyebrow ? (
            <p className="mb-3 text-xs font-medium tracking-[0.22em] text-text-muted uppercase">
              {data.eyebrow}
            </p>
          ) : null}

          <h2
            id={headingId}
            className="text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl"
          >
            {highlightedText ? (
              <HighlightedText text={data.heading} highlight={highlightedText} />
            ) : (
              data.heading
            )}
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
          {data.insights.map((insight, index) => (
            <InsightCard key={`${insight.text}-${index}`} insight={insight} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

