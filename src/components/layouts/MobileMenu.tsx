// "use client";

// import { useState } from "react";
// import { NavItem } from "./NavItem";
// import { Button } from "@/components/ui/Button";

// export function MobileMenu({
//   items,
// }: {
//   items: { label: string; href: string }[];
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="md:hidden block">
//       <Button
//         variant="ghost"
//         size="sm"
//         onClick={() => setOpen(!open)}
//         className="text-[var(--color-foreground)]"
//       >
//         ☰
//       </Button>

//       {open && (
//         <div className="mt-3 flex flex-col gap-4 p-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg shadow-lg">
//           {items.map((item) => (
//             <NavItem
//               key={item.href}
//               label={item.label}
//               href={item.href}
//               onClick={() => setOpen(false)}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function MobileMenu({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden block">

      {/* Menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl text-[var(--color-foreground)]"
      >
        ☰
      </button>

      {/* Slide-down menu */}
      {open && (
        <div
          className="
            absolute right-4 mt-4 w-40 p-4 rounded-lg shadow-lg
            bg-[var(--color-background)]/60 backdrop-blur-xl
            border border-[var(--color-border)]/40
            flex flex-col gap-4
          "
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={`#${item.href}`}
              onClick={() => setOpen(false)}
              className="text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition"
            >
              {item.label}
            </Link>
          ))}

          <ThemeToggle />
        </div>
      )}
    </div>
  );
}
