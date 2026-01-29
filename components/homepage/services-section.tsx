"use client";

import clsx from "clsx";
import { motion } from "motion/react";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { ServiceCard, ServicesSectionData } from "@/types/homepage";

interface ServicesSectionProps {
  data: ServicesSectionData;
  className?: string;
}

function ServiceCard({ service, index }: { service: ServiceCard; index: number }) {
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
      <Card className="h-full transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.2),0_0_40px_rgba(168,85,247,0.1)]">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-text-primary">
            {service.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export function ServicesSection({ data, className }: ServicesSectionProps) {
  const headingId = "services-heading";

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
          {data.services.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
