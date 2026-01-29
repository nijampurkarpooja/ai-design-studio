"use client";

import clsx from "clsx";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useCallback, useEffect, useMemo, useRef } from "react";

import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { InsightsSectionData } from "@/types/homepage";

interface InsightsSectionProps {
  data: InsightsSectionData;
  className?: string;
}

const MARQUEE_DURATION = 60;
const MARQUEE_PERCENT_PER_SEC = 50 / MARQUEE_DURATION;

function InsightsMarquee({ insights }: { insights: { text: string }[] }) {
  const loop = useMemo(() => [...insights, ...insights], [insights]);
  const x = useMotionValue(0);
  const xStyle = useTransform(x, (v) => `${v}%`);
  const isPausedRef = useRef(false);

  const progressRef = useRef(0);

  useEffect(() => {
    let rafId: number;
    let lastTime: number | null = null;

    const tick = (now: number) => {
      lastTime ??= now;
      const deltaSec = (now - lastTime) / 1000;
      lastTime = now;

      if (!isPausedRef.current) {
        progressRef.current -= MARQUEE_PERCENT_PER_SEC * deltaSec;
        if (progressRef.current <= -50) progressRef.current = 0;
        x.set(progressRef.current);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [x]);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);
  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-background to-transparent sm:w-24" />

      <motion.div
        className="flex w-max items-center whitespace-nowrap py-4 sm:py-5"
        style={{ x: xStyle }}
        aria-hidden
      >
        {loop.map((insight, index) => (
          <span
            key={`${insight.text}-${index}`}
            className="mr-8 text-base font-medium text-text-secondary sm:mr-12 sm:text-lg"
          >
            {insight.text}
            <span className="ml-8 text-text-muted/50 sm:ml-12" aria-hidden>
              •
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function InsightsSection({ data, className }: InsightsSectionProps) {
  const headingId = "insights-heading";
  const highlightedText =
    data.highlightedText ??
    (data.heading.includes("the present")
      ? "the present"
      : data.heading.includes("the future")
        ? "the future"
        : undefined);

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
              <HighlightedText
                text={data.heading}
                highlight={highlightedText}
              />
            ) : (
              data.heading
            )}
          </h2>

          {data.description ? (
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
              {data.description}
            </p>
          ) : null}
        </motion.div>

        <div className="mt-10 border-y border-card-border sm:mt-12">
          <InsightsMarquee insights={data.insights} />
        </div>
      </div>
    </SectionContainer>
  );
}
