export type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
};

export const themes: Record<
  "harvest" | "coastal" | "granite" | "timber" | "slate",
  { light: ThemeColors; dark: ThemeColors }
> = {
  harvest: {
    light: {
      // Warm, earthy tones inspired by fall foliage
      background: "36 30% 97%", // Very light warm beige
      foreground: "24 33% 12%", // Deep brown
      card: "0 0% 100%",
      cardForeground: "24 33% 12%",
      popover: "0 0% 100%",
      popoverForeground: "24 33% 12%",
      primary: "24 75% 35%", // Rich burnt orange
      primaryForeground: "36 30% 97%",
      secondary: "35 25% 90%", // Light warm tan
      secondaryForeground: "24 33% 12%",
      muted: "35 25% 90%",
      mutedForeground: "24 20% 40%",
      accent: "24 75% 35%",
      accentForeground: "36 30% 97%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "35 25% 85%",
      input: "35 25% 85%",
      ring: "24 75% 35%",
    },
    dark: {
      background: "24 33% 12%",
      foreground: "35 25% 90%",
      card: "24 33% 12%",
      cardForeground: "35 25% 90%",
      popover: "24 33% 12%",
      popoverForeground: "35 25% 90%",
      primary: "24 75% 45%",
      primaryForeground: "36 30% 97%",
      secondary: "35 25% 20%",
      secondaryForeground: "35 25% 90%",
      muted: "35 25% 20%",
      mutedForeground: "35 25% 70%",
      accent: "24 75% 45%",
      accentForeground: "36 30% 97%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "35 25% 20%",
      input: "35 25% 20%",
      ring: "24 75% 45%",
    },
  },
  coastal: {
    light: {
      // Inspired by coastal Maine's sandy beaches and weathered wood
      background: "35 25% 96%", // Sandy beige
      foreground: "200 15% 15%", // Deep weathered gray
      card: "0 0% 100%",
      cardForeground: "200 15% 15%",
      popover: "0 0% 100%",
      popoverForeground: "200 15% 15%",
      primary: "198 25% 45%", // Muted sea glass
      primaryForeground: "0 0% 100%",
      secondary: "35 15% 90%", // Light sand
      secondaryForeground: "200 15% 15%",
      muted: "35 15% 90%",
      mutedForeground: "200 15% 40%",
      accent: "198 25% 45%",
      accentForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "35 15% 85%",
      input: "35 15% 85%",
      ring: "198 25% 45%",
    },
    dark: {
      background: "200 15% 15%",
      foreground: "35 15% 90%",
      card: "200 15% 15%",
      cardForeground: "35 15% 90%",
      popover: "200 15% 15%",
      popoverForeground: "35 15% 90%",
      primary: "198 25% 55%",
      primaryForeground: "0 0% 100%",
      secondary: "200 15% 25%",
      secondaryForeground: "35 15% 90%",
      muted: "200 15% 25%",
      mutedForeground: "35 15% 70%",
      accent: "198 25% 55%",
      accentForeground: "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "200 15% 25%",
      input: "200 15% 25%",
      ring: "198 25% 55%",
    },
  },
  granite: {
    light: {
      // Inspired by Maine's granite quarries and mountains
      background: "220 15% 97%", // Cool light gray
      foreground: "220 25% 15%", // Deep granite
      card: "0 0% 100%",
      cardForeground: "220 25% 15%",
      popover: "0 0% 100%",
      popoverForeground: "220 25% 15%",
      primary: "220 25% 35%", // Stone gray
      primaryForeground: "0 0% 100%",
      secondary: "220 15% 92%", // Light granite
      secondaryForeground: "220 25% 15%",
      muted: "220 15% 92%",
      mutedForeground: "220 25% 40%",
      accent: "220 25% 35%",
      accentForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "220 15% 85%",
      input: "220 15% 85%",
      ring: "220 25% 35%",
    },
    dark: {
      background: "220 25% 15%",
      foreground: "220 15% 92%",
      card: "220 25% 15%",
      cardForeground: "220 15% 92%",
      popover: "220 25% 15%",
      popoverForeground: "220 15% 92%",
      primary: "220 25% 45%",
      primaryForeground: "0 0% 100%",
      secondary: "220 25% 25%",
      secondaryForeground: "220 15% 92%",
      muted: "220 25% 25%",
      mutedForeground: "220 15% 70%",
      accent: "220 25% 45%",
      accentForeground: "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "220 25% 25%",
      input: "220 25% 25%",
      ring: "220 25% 45%",
    },
  },
  timber: {
    light: {
      // Inspired by Maine's forests and lumber heritage
      background: "40 30% 98%", // Warm white
      foreground: "120 15% 15%", // Deep pine
      card: "0 0% 100%",
      cardForeground: "120 15% 15%",
      popover: "0 0% 100%",
      popoverForeground: "120 15% 15%",
      primary: "120 25% 35%", // Forest green
      primaryForeground: "0 0% 100%",
      secondary: "40 20% 92%", // Light birch
      secondaryForeground: "120 15% 15%",
      muted: "40 20% 92%",
      mutedForeground: "120 15% 40%",
      accent: "120 25% 35%",
      accentForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "40 20% 85%",
      input: "40 20% 85%",
      ring: "120 25% 35%",
    },
    dark: {
      background: "120 15% 15%",
      foreground: "40 20% 92%",
      card: "120 15% 15%",
      cardForeground: "40 20% 92%",
      popover: "120 15% 15%",
      popoverForeground: "40 20% 92%",
      primary: "120 25% 45%",
      primaryForeground: "0 0% 100%",
      secondary: "120 15% 25%",
      secondaryForeground: "40 20% 92%",
      muted: "120 15% 25%",
      mutedForeground: "40 20% 70%",
      accent: "120 25% 45%",
      accentForeground: "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "120 15% 25%",
      input: "120 15% 25%",
      ring: "120 25% 45%",
    },
  },
  slate: {
    light: {
      // These values come directly from your global.css :root
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "222.2 47.4% 11.2%",
      primaryForeground: "210 40% 98%",
      secondary: "210 40% 96.1%",
      secondaryForeground: "222.2 47.4% 11.2%",
      muted: "210 40% 96.1%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96.1%",
      accentForeground: "222.2 47.4% 11.2%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "222.2 84% 4.9%",
    },
    dark: {
      // These values come from your global.css .dark
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
      card: "222.2 84% 4.9%",
      cardForeground: "210 40% 98%",
      popover: "222.2 84% 4.9%",
      popoverForeground: "210 40% 98%",
      primary: "210 40% 98%",
      primaryForeground: "222.2 47.4% 11.2%",
      secondary: "217.2 32.6% 17.5%",
      secondaryForeground: "210 40% 98%",
      muted: "217.2 32.6% 17.5%",
      mutedForeground: "215 20.2% 65.1%",
      accent: "217.2 32.6% 17.5%",
      accentForeground: "210 40% 98%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "210 40% 98%",
      border: "217.2 32.6% 17.5%",
      input: "217.2 32.6% 17.5%",
      ring: "212.7 26.8% 83.9%",
    },
  },
} as const;

export type ThemeNames = keyof typeof themes;
