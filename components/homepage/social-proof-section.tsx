"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import * as React from "react";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { SectionContainer } from "@/app/components/ui/section-container";
import type {
  Logo,
  SocialProofData,
  SocialProofStatusCard,
} from "@/types/homepage";

interface SocialProofSectionProps {
  data: SocialProofData;
  className?: string;
}

function ToneDot({ tone }: { tone: SocialProofStatusCard["tone"] }) {
  const dotClassName =
    tone === "positive"
      ? "bg-emerald-400"
      : tone === "warning"
        ? "bg-amber-400"
        : "bg-white/40";

  return (
    <span aria-hidden className={clsx("h-2 w-2 rounded-full", dotClassName)} />
  );
}

function LogoItem({ logo, index }: { logo: Logo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 1 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-center justify-center rounded-2xl border border-card-border bg-card-bg/35 px-4 py-5 shadow-[0_0_0_1px_rgba(168,85,247,0.10)] backdrop-blur-sm"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={220}
        height={72}
        className="h-8 w-auto max-w-[160px] opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-9 sm:max-w-[180px]"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 220px"
      />
    </motion.div>
  );
}

function LogosGrid({ logos }: { logos: Logo[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6">
      {logos.map((logo, index) => (
        <LogoItem key={`${logo.src}-${logo.alt}`} logo={logo} index={index} />
      ))}
    </div>
  );
}

function LogosMarquee({ logos }: { logos: Logo[] }) {
  const loop = React.useMemo(() => [...logos, ...logos], [logos]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-linear-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-linear-to-l from-background to-transparent sm:w-24" />

      <motion.div
        className="flex w-max gap-4 pr-4 sm:gap-5 lg:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 45, ease: "linear", repeat: Infinity }}
      >
        {loop.map((logo, index) => (
          <div key={`${logo.src}-${logo.alt}-${index}`} className="w-[220px]">
            <LogoItem logo={logo} index={index % logos.length} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SocialProofSection({
  data,
  className,
}: SocialProofSectionProps) {
  const headingId = "social-proof-heading";

  return (
    <SectionContainer
      className={clsx(className)}
      innerClassName="py-16 sm:py-20 lg:py-24"
    >
      <div aria-labelledby={headingId} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.eyebrow ? (
            <p className="mb-3 text-center text-xs font-medium tracking-[0.22em] text-text-muted uppercase">
              {data.eyebrow}
            </p>
          ) : null}

          <h2
            id={headingId}
            className="text-center text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl"
          >
            {data.heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3">
            <Card variant="glow" className="lg:col-span-1">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-card-border">
                    <Image
                      src={data.founder.avatar.src}
                      alt={data.founder.avatar.alt}
                      fill
                      className="object-cover"
                      sizes="48px"
                      priority={false}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      {data.founder.name}
                    </p>
                    <p className="text-xs font-medium tracking-wide text-text-muted uppercase">
                      {data.founder.role}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm leading-relaxed text-text-secondary">
                  {data.founder.bio}
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
              {data.networkCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.05 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-0">
                      <p className="text-sm font-semibold text-text-primary">
                        {card.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {card.description}
                      </p>
                    </CardHeader>
                    {card.images && card.images.length > 0 ? (
                      <CardContent className="pt-4">
                        <div className="flex -space-x-2">
                          {card.images.slice(0, 6).map((src) => (
                            <div
                              key={src}
                              className="relative h-9 w-9 overflow-hidden rounded-full border border-card-border bg-card-bg"
                            >
                              <Image
                                src={src}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="36px"
                              />
                            </div>
                          ))}
                        </div>
                        <p className="mt-3 text-xs text-text-muted">
                          A few of the people in our orbit.
                        </p>
                      </CardContent>
                    ) : null}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {data.statusCards.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {data.statusCards.map((status, index) => (
                <motion.div
                  key={`${status.label}-${status.value}`}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-text-muted uppercase">
                        <ToneDot tone={status.tone} />
                        {status.label}
                      </div>
                      <p className="mt-2 text-sm font-semibold text-text-primary">
                        {status.value}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : null}

          <div className="mt-10">
            {data.logos.variant === "marquee" ? (
              <LogosMarquee logos={data.logos.logos} />
            ) : (
              <LogosGrid logos={data.logos.logos} />
            )}
          </div>

          {/* <div className="mt-10 rounded-3xl border border-card-border bg-linear-to-b from-card-bg/60 via-card-bg/25 to-transparent p-6 shadow-[0_0_0_1px_rgba(168,85,247,0.08)] backdrop-blur-sm sm:mt-12 sm:p-8">
            {data.logos.eyebrow ? (
              <p className="mb-6 text-center text-xs font-medium tracking-[0.22em] text-text-muted uppercase">
                {data.logos.eyebrow}
              </p>
            ) : null}

            {data.logos.variant === "marquee" ? (
              <LogosMarquee logos={data.logos.logos} />
            ) : (
              <LogosGrid logos={data.logos.logos} />
            )}
          </div> */}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
