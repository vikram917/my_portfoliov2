import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={twMerge(
        "py-[var(--space-xl)] px-6 md:px-12",
        className
      )}
    >
      {children}
    </section>
  );
}
