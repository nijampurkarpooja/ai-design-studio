import clsx from "clsx";
import type * as React from "react";

export interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className,
  innerClassName,
  id,
}: SectionContainerProps) {
  return (
    <section className={clsx("relative", className)} id={id}>
      <div
        className={clsx(
          "mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
