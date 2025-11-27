"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { lightTheme } from "@/theme/light";
import { darkTheme } from "@/theme/dark";
import { injectCssVars } from "@/theme/css-vars";

type Mode = "light" | "dark";

interface ThemeContextProps {
  mode: Mode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getSystemTheme = (): Mode =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const getInitialTheme = (): Mode => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("theme") as Mode) || getSystemTheme();
  };

  const [mode, setMode] = useState<Mode>(getInitialTheme);

  useEffect(() => {
    const theme = mode === "light" ? lightTheme : darkTheme;
    injectCssVars(theme, mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
