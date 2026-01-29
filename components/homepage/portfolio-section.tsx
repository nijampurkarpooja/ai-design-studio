"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { ImageCard, PortfolioSectionData } from "@/types/homepage";

interface PortfolioSectionProps {
  data: PortfolioSectionData;
  className?: string;
}

function PortfolioCard({
  card,
  index,
  colSpan,
}: {
  card: ImageCard;
  index: number;
  colSpan: number;
}) {
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
      className={clsx(
        "group",
        colSpan === 2 ? "sm:col-span-2 lg:col-span-1" : ""
      )}
    >
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(168,85,247,0.2),0_0_40px_rgba(168,85,247,0.1)]">
        <div className="relative h-64 w-full overflow-hidden border-b border-card-border bg-card-bg transition-transform duration-300 group-hover:scale-105 sm:h-72">
          <Image
            src={card.image.src}
            alt={card.image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 32vw, 360px"
          />
        </div>
        <CardHeader className="pb-2">
          <p className="text-xs font-medium tracking-wide text-text-muted uppercase">
            {card.location} • {card.year}
          </p>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm leading-relaxed text-text-secondary">
            {card.caption}
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export function PortfolioSection({ data, className }: PortfolioSectionProps) {
  const headingId = "portfolio-heading";

  return (
    <SectionContainer
      className={clsx(className)}
      innerClassName="py-16 sm:py-20 lg:py-28"
      id="portfolio"
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

        {/* for sm - if last child is odd - make it occupy 2 columns */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card, index) => {
            const isLast = index === data.cards.length - 1;
            const isOdd = (index + 1) % 2 !== 0;
            const colSpan = isLast && isOdd ? 2 : 1;
            return (
              <PortfolioCard
                key={`${card.image.src}-${card.location}-${card.year}`}
                card={card}
                index={index}
                colSpan={colSpan}
              />
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
