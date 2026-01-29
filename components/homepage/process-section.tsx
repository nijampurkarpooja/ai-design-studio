"use client";

import clsx from "clsx";
import { motion } from "motion/react";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { ProcessSectionData, ProcessStep } from "@/types/homepage";

interface ProcessSectionProps {
  data: ProcessSectionData;
  className?: string;
}

function ProcessStepCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: 0.08 + index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      <Card className="h-full">
        <CardHeader>
          <div className="mb-2 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-r from-accent-purple/20 to-accent-pink/20 text-sm font-semibold text-accent-purple">
              {step.step}
            </div>
            <h3 className="text-xl font-semibold leading-tight tracking-tight text-text-primary">
              {step.title}
            </h3>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
            {step.description}
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export function ProcessSection({ data, className }: ProcessSectionProps) {
  const headingId = "process-heading";

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
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
              {data.description}
            </p>
          ) : null}
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {data.steps.map((step, index) => (
            <ProcessStepCard
              key={`step-${step.step}-${index}`}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
