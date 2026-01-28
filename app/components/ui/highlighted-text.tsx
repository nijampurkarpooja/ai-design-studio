import clsx from "clsx";
import type * as React from "react";

export interface HighlightedTextProps {
  text: string;
  highlight?: string;
  highlightClassName?: string;
}

export function HighlightedText({
  text,
  highlight,
  highlightClassName,
}: HighlightedTextProps) {
  if (!highlight) {
    return text;
  }

  const split = text.split(highlight);
  if (split.length !== 2) {
    return text;
  }

  const [before, after] = split;

  return (
    <>
      {before}
      <span className={clsx("text-accent-purple", highlightClassName)}>
        {highlight}
      </span>
      {after}
    </>
  );
}

