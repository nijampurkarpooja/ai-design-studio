"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { HighlightedText } from "@/app/components/ui/highlighted-text";
import { SectionContainer } from "@/app/components/ui/section-container";
import type { AIVisionSectionData, ImageCard } from "@/types/homepage";

const AUTO_ADVANCE_MS = 10_000;

interface AIVisionSectionProps {
  data: AIVisionSectionData;
  className?: string;
}

function AIVisionSlide({ card }: { card: ImageCard }) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative aspect-16/10 w-full overflow-hidden bg-card-bg sm:aspect-video">
        <Image
          src={card.image.src}
          alt={card.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="mt-4 flex flex-col gap-1 sm:mt-5">
        <p className="text-xs font-medium tracking-wide text-text-muted uppercase">
          {card.location} • {card.year}
        </p>
        <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
          {card.caption}
        </p>
      </div>
    </div>
  );
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export function AIVisionSection({ data, className }: AIVisionSectionProps) {
  const headingId = "ai-vision-heading";
  const carouselId = "ai-vision-carousel";
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = data.cards.length;
  const currentCard = data.cards[activeIndex];

  const handleDotClick = useCallback(
    (index: number) => {
      if (index < 0 || index >= total) return;
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex, total]
  );

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [total]);

  if (!currentCard) return null;

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

        <div
          id={carouselId}
          className="mt-10 w-full sm:mt-12"
          aria-roledescription="carousel"
          aria-label="AI vision cards"
        >
          <div className="relative w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.article
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 320, damping: 32 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
                aria-live="polite"
                aria-atomic="true"
              >
                <AIVisionSlide card={currentCard} />
              </motion.article>
            </AnimatePresence>
          </div>

          {total > 1 ? (
            <div
              className="mt-8 flex justify-center gap-2"
              role="tablist"
              aria-label="Card position"
            >
              {data.cards.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Card ${index + 1} of ${total}`}
                  onClick={() => handleDotClick(index)}
                  className={clsx(
                    "h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-purple focus:ring-offset-2 focus:ring-offset-background",
                    index === activeIndex
                      ? "w-8 bg-accent-purple"
                      : "w-2.5 bg-text-muted/50 hover:bg-text-muted"
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </SectionContainer>
  );
}
