import { GlobalTheme } from "@/types/theme.types";


export const injectCssVars = (theme: GlobalTheme, mode: "light" | "dark") => {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  Object.entries(theme.typography.sizes).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value);
  });

  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--space-${key}`, value);
  });

  root.setAttribute("data-theme", mode);
};
