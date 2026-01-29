"use client";

import { Button } from "@/app/components/ui/button";
import clsx from "clsx";
import { motion } from "motion/react";

export interface StatusPageAction {
  label: string;
  href: string;
}

export interface StatusPageProps {
  title: string;
  description: string | React.ReactNode;
  primaryAction: StatusPageAction;
  secondaryAction?: StatusPageAction;
  className?: string;
}

export function StatusPage({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: StatusPageProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        "flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 sm:py-20 lg:py-28",
        className
      )}
      role="main"
    >
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
          {title}
        </h1>
        {typeof description === "string" ? (
          <p className="mt-4 max-w-md mx-auto text-base leading-relaxed text-text-secondary sm:text-lg">
            {description}
          </p>
        ) : (
          description
        )}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href={primaryAction.href} variant="primary" size="md">
            {primaryAction.label}
          </Button>
          {secondaryAction ? (
            <Button href={secondaryAction.href} variant="secondary" size="md">
              {secondaryAction.label}
            </Button>
          ) : null}
        </div>
      </div>
    </motion.main>
  );
}
