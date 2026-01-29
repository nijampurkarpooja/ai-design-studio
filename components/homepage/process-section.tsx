"use client";

import clsx from "clsx";
import { motion } from "motion/react";

import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { ProcessSectionData, ProcessStep } from "@/types/homepage";

interface ProcessSectionProps {
  data: ProcessSectionData;
  className?: string;
}

function ProcessStepNode({
  step,
  index,
  isLast,
}: {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: 0.06 + index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex gap-6 sm:gap-8"
    >
      {/* Timeline line and dot */}
      <div className="relative flex shrink-0 flex-col items-center">
        <div
          className={clsx(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent-purple/40 bg-background text-sm font-semibold text-accent-purple shadow-sm",
            "ring-4 ring-background"
          )}
        >
          {step.step}
        </div>
        {!isLast && (
          <div
            className="absolute top-11 left-1/2 -translate-x-px w-px flex-1 bg-linear-to-b from-accent-purple/50 to-accent-purple/20"
            style={{ height: "calc(100% + 1.5rem)" }}
            aria-hidden
          />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 pb-12 sm:pb-14">
        <h3 className="text-lg font-semibold leading-tight tracking-tight text-text-primary sm:text-xl">
          {step.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
          {step.description}
        </p>
      </div>
    </motion.li>
  );
}

export function ProcessSection({ data, className }: ProcessSectionProps) {
  const headingId = "process-heading";

  return (
    <SectionContainer
      className={clsx(className)}
      innerClassName="py-16 sm:py-20 lg:py-28"
    >
      <div aria-labelledby={headingId} className="mx-auto max-w-3xl">
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

        <ul className="mt-12 sm:mt-16" role="list">
          {data.steps.map((step, index) => (
            <ProcessStepNode
              key={`step-${step.step}-${index}`}
              step={step}
              index={index}
              isLast={index === data.steps.length - 1}
            />
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}
