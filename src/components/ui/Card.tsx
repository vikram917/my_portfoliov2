import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className="p-6 rounded-xl water-slip bg-[var(--color-background)]/40 backdrop-blur-lg border border-[var(--color-foreground)]/20">
    <div
      className={twMerge(
        "rounded-lg bg-[var(--color-card)] border border-[var(--color-border)] shadow-md p-4",
        className
      )}
    >
      {children}
    </div>
    </div>
  );
}
