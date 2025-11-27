"use client";

import Link from "next/link";
import { useActiveSection } from "./useActiveSection";
import { MobileMenu } from "./MobileMenu";
import { ThemeMorphToggle } from "../common/ThemeMorphToggle";

export function Header() {
  const navItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Projects", href: "projects" },
    { label: "Experience", href: "experience" },
    { label: "Contact", href: "contact" },
  ];

  const active = useActiveSection(navItems.map(n => n.href));

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 
        backdrop-blur-xs 
        transition-all duration-300
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-[var(--color-primary)]"
        >
          Portfolio 
        <span className="text-white">Dev/</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={`#${item.href}`}
              className={`
                text-sm transition-all 
                ${active === item.href 
                  ? "text-[var(--color-primary)] scale-[1.05] font-semibold" 
                  : "text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                }
              `}
            >
              {item.label}
            </Link>
          ))}

          <ThemeMorphToggle />
        </nav>

        {/* Mobile menu */}
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
