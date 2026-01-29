import clsx from "clsx";
import Link from "next/link";
import type * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsLinkProps = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "className" | "href"> & {
    href: string;
    disabled?: boolean;
  };

type ButtonAsButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base",
  lg: "h-14 px-8 text-base",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "group relative overflow-hidden bg-linear-to-r from-accent-purple to-accent-pink text-foreground hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] before:absolute before:inset-0 before:bg-linear-to-r before:from-accent-pink before:to-accent-purple before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
  secondary:
    "border border-border bg-button-secondary-bg text-text-secondary backdrop-blur-sm hover:border-button-secondary-hover-border hover:bg-button-secondary-hover-bg hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  ghost: "text-text-secondary hover:bg-hover",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, ...rest } = props;

  const classes = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const children =
    variant === "primary" ? (
      <span className="relative z-10 flex h-full w-full items-center justify-center">
        {props.children}
      </span>
    ) : (
      props.children
    );

  if ("href" in rest && rest.href) {
    const { href, disabled, ...linkProps } = rest;

    if (disabled) {
      return (
        <span
          aria-disabled="true"
          className={clsx(classes, "cursor-not-allowed")}
        >
          {children}
        </span>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  // Type guard to ensure rest is ButtonAsButtonProps
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
