"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const baseStyles =
  "rounded-md font-medium transition-all duration-200 active:scale-[0.97]";

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const variantStyles = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-md hover:opacity-90",
  secondary:
    "bg-[var(--color-secondary)] text-white shadow-md hover:opacity-90",
  outline:
    "border border-[var(--color-border)] text-[var(--color-foreground)] hover:bg-[var(--color-card)]",
  ghost:
    "text-[var(--color-foreground)] hover:bg-[var(--color-card)]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
