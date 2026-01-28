import clsx from "clsx";
import Image from "next/image";
import type * as React from "react";

type PolaroidRotation = "none" | "left" | "right" | number;

export interface PolaroidImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  caption?: string;
  rotation?: PolaroidRotation;
  className?: string;
  imageClassName?: string;
  overlay?: React.ReactNode;
}

function getRotationStyles(rotation: PolaroidRotation) {
  if (typeof rotation === "number") {
    return { style: { transform: `rotate(${rotation}deg)` }, className: "" };
  }

  if (rotation === "left") {
    return { style: undefined, className: "-rotate-2" };
  }

  if (rotation === "right") {
    return { style: undefined, className: "rotate-2" };
  }

  return { style: undefined, className: "" };
}

export function PolaroidImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  caption,
  rotation = "none",
  className,
  imageClassName,
  overlay,
}: PolaroidImageProps) {
  const rotationStyles = getRotationStyles(rotation);

  return (
    <figure
      className={clsx(
        "relative inline-block rounded-2xl bg-foreground p-3 pb-6 text-background shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
        rotationStyles.className,
        className,
      )}
      style={rotationStyles.style}
    >
      <div className="relative overflow-hidden rounded-xl bg-neutral-200">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={clsx("h-auto w-full", imageClassName)}
        />
      </div>

      {caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-background/80">
          {caption}
        </figcaption>
      ) : null}

      {overlay ? (
        <div className="pointer-events-none absolute inset-0">{overlay}</div>
      ) : null}
    </figure>
  );
}
