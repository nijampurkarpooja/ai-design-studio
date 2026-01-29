"use client";

import clsx from "clsx";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
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

function StatCardComponent({ stat, index }: { stat: StatCard; index: number }) {
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
    >
      <Card className="h-full text-center">
        <CardHeader>
          <div className="text-4xl font-bold leading-none text-accent-purple sm:text-5xl lg:text-6xl">
            <AnimatedCounter value={stat.value} />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <h3 className="mb-2 text-lg font-semibold text-text-primary">
            {stat.label}
          </h3>
          {stat.description ? (
            <p className="text-sm leading-relaxed text-text-secondary">
              {stat.description}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </motion.article>
  );
}

export function StatsSection({ data, className }: StatsSectionProps) {
  const headingId = "stats-heading";

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
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((stat, index) => (
            <StatCardComponent
              key={`${stat.label}-${index}`}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
