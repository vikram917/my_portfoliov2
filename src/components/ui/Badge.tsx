interface BadgeProps {
  children: string;
  color?: "primary" | "secondary" | "accent";
}

export function Badge({ children, color = "primary" }: BadgeProps) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded-md font-medium`}
      style={{
        backgroundColor: `var(--color-${color})`,
        color: "#fff",
      }}
    >
      {children}
    </span>
  );
}
