import { GlobalTheme } from "@/types/theme.types";


export const lightTheme: GlobalTheme = {
  colors: {
    primary: "#4F46E5",
    secondary: "#6366F1",
    accent: "#F59E0B",

    background: "#FFFFFF",
    foreground: "#111111",

    card: "#F4F4F5",
    border: "#E5E7EB",

    success: "#10B981",
    warning: "#FBBF24",
    error: "#EF4444",

    muted: "#6B7280",
  },

  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Poppins', sans-serif",
    },
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  shadows: {
    sm: "0px 1px 2px rgba(0,0,0,0.05)",
    md: "0px 2px 4px rgba(0,0,0,0.08)",
    lg: "0px 4px 8px rgba(0,0,0,0.12)",
    xl: "0px 8px 16px rgba(0,0,0,0.18)",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  radii: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    full: "9999px",
  },

  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};
