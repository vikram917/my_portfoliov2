"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
    >
      <span
        className={`
          block w-6 h-6 rounded-full transition-all duration-500 
          ${mode === "light" ? "animate-glowSun bg-yellow-400" : "animate-glowMoon bg-blue-400"}
        `}
      />
    </button>
  );
}
