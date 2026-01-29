"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { NetworkCard } from "@/types/homepage";

interface TeamNetworkSectionProps {
  data: {
    eyebrow?: string;
    heading: string;
    highlightedText?: string;
    description?: string;
    cards: NetworkCard[];
  };
  className?: string;
}

function NetworkCardComponent({
  card,
  index,
}: {
  card: NetworkCard;
  index: number;
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
    >
      <Card className="h-full">
        {card.images && card.images.length > 0 ? (
          <div className="relative h-48 w-full overflow-hidden border-b border-card-border bg-card-bg sm:h-56">
            <div className="flex h-full items-center justify-center gap-2 p-4">
              {card.images.map((imageSrc, imgIndex) => (
                <div
                  key={`${imageSrc}-${imgIndex}`}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-card-border sm:h-32 sm:w-32"
                >
                  <Image
                    src={imageSrc}
                    alt={`${card.title} member ${imgIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 96px, 128px"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
        <CardHeader>
          <h3 className="text-xl font-semibold leading-tight tracking-tight text-text-primary">
            {card.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
            {card.description}
          </p>
        </CardContent>
      </Card>
    </motion.article>
  );
}

export function TeamNetworkSection({
  data,
  className,
}: TeamNetworkSectionProps) {
  const headingId = "team-network-heading";

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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2">
          {data.cards.map((card, index) => (
            <NetworkCardComponent
              key={`${card.title}-${index}`}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
