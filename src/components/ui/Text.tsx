import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  className?: string;
}

export function Text({
  children,
  size = "md",
  weight = "normal",
  className,
}: TextProps) {
  return (
    <p
      className={className}
      style={{
        fontSize: `var(--font-size-${size})`,
        fontWeight: `var(--font-weight-${weight})`,
        color: "var(--color-foreground)",
      }}
    >
      {children}
    </p>
  );
}
