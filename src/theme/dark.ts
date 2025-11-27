import { GlobalTheme } from "@/types/theme.types";


export const darkTheme: GlobalTheme = {
  colors: {
    primary: "#4F46E5",
    secondary: "#6366F1",
    accent: "#F59E0B",

    background: "#0F0F0F",
    foreground: "#F5F5F5",

    card: "#1A1A1A",
    border: "#2A2A2A",

    success: "#10B981",
    warning: "#FBBF24",
    error: "#EF4444",

    muted: "#9CA3AF",
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
    sm: "0px 1px 2px rgba(0,0,0,0.1)",
    md: "0px 2px 4px rgba(0,0,0,0.15)",
    lg: "0px 4px 8px rgba(0,0,0,0.2)",
    xl: "0px 8px 16px rgba(0,0,0,0.25)",
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
