"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { StatCard, StatsSectionData } from "@/types/homepage";

interface StatsSectionProps {
  data: StatsSectionData;
  className?: string;
}

function AnimatedCounter({ value }: { value: string }) {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");
  const isNumber = !isNaN(numericValue);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isNumber || !ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(startValue + (numericValue - startValue) * easeOutQuart);
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(numericValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [numericValue, isNumber, hasAnimated]);

  if (!isNumber) {
    return <span>{value}</span>;
  }

  return (
    <div ref={ref} className="inline-block">
      <span>{displayValue}</span>
      {suffix && <span>{suffix}</span>}
    </div>
  );
}

export function StatsSection({ data, className }: StatsSectionProps) {
  const headingId = "stats-heading";

  return (
    <SectionContainer
      className={clsx(className)}
      innerClassName="py-12 sm:py-16 lg:py-20"
    >
      <div aria-labelledby={headingId} className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.eyebrow ? (
            <p className="mb-2 text-center text-xs font-medium tracking-[0.22em] text-text-muted uppercase">
              {data.eyebrow}
            </p>
          ) : null}

          <h2
            id={headingId}
            className="text-center text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl"
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

          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-x-10 gap-y-6 border-y border-card-border py-8 sm:mt-10 sm:gap-x-14 sm:py-10 lg:gap-x-16">
            {data.stats.map((stat, index) => (
              <motion.div
                key={`${stat.label}-${index}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex min-w-0 flex-1 basis-32 flex-col items-center text-center sm:basis-36"
              >
                <div className="text-3xl font-bold leading-none text-accent-purple sm:text-4xl">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="mt-1.5 text-sm font-semibold text-text-primary">
                  {stat.label}
                </p>
                {stat.description ? (
                  <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">
                    {stat.description}
                  </p>
                ) : null}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
