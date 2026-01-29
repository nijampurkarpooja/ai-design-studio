"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { TeamMemberCard, TeamSectionData } from "@/types/homepage";

interface TeamSectionProps {
  data: TeamSectionData;
  className?: string;
}

function TeamCard({ card, index }: { card: TeamMemberCard; index: number }) {
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
      <Card className="h-full overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden border-b border-card-border bg-card-bg sm:h-52">
          <Image
            src={card.avatar.src}
            alt={card.avatar.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 32vw, 360px"
          />
        </div>
        <CardHeader className="pb-2">
          <p className="text-base font-semibold tracking-tight text-text-primary">
            {card.name}
          </p>
          <p className="text-xs font-medium tracking-wide text-text-muted uppercase">
            {card.role}
          </p>
        </CardHeader>
        {card.bio ? (
          <CardContent className="pt-0">
            <p className="text-sm leading-relaxed text-text-secondary">
              {card.bio}
            </p>
          </CardContent>
        ) : null}
      </Card>
    </motion.article>
  );
}

export function TeamSection({ data, className }: TeamSectionProps) {
  const headingId = "team-heading";

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

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
            Senior designers and operators who ship thoughtful, AI-accelerated
            product and brand work.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card, index) => (
            <TeamCard
              key={`${card.avatar.src}-${card.name}`}
              card={card}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
