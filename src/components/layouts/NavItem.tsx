"use client";

import Link from "next/link";

export function NavItem({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition"
    >
      {label}
    </Link>
  );
}
