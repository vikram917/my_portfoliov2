export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;

  background: string;
  foreground: string;

  card: string;
  border: string;

  success: string;
  warning: string;
  error: string;

  muted: string;
}

export interface Typography {
  fontFamily: {
    primary: string;
    secondary: string;
  };

  sizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
  };

  weight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
}

export interface Shadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Spacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Radii {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

export interface Breakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface GlobalTheme {
  colors: ColorPalette;
  typography: Typography;
  shadows: Shadows;
  spacing: Spacing;
  radii: Radii;
  breakpoints: Breakpoints;
}
