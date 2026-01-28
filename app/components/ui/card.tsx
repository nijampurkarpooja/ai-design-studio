import clsx from "clsx";
import type * as React from "react";

type CardVariant = "default" | "glow";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "rounded-2xl border border-card-border bg-card-bg/80 shadow-sm backdrop-blur-sm",
  glow: "rounded-2xl border border-card-border bg-card-bg/80 shadow-[0_0_0_1px_rgba(168,85,247,0.12),0_0_40px_rgba(168,85,247,0.08)] backdrop-blur-sm",
};

export function Card({ variant = "default", className, ...props }: CardProps) {
  return <div className={clsx(variantStyles[variant], className)} {...props} />;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={clsx("p-6 pb-4", className)} {...props} />;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ className, ...props }: CardContentProps) {
  return <div className={clsx("px-6 pb-6", className)} {...props} />;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={clsx("px-6 pb-6", className)} {...props} />;
}
