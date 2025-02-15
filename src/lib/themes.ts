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
  | "maine"
  | "lobster"
  | "stormyCoast"
  | "mountainTimber"
  | "blackIce"
  | "harvest"
  | "coastal"
  | "granite"
  | "timber"
  | "slate",
  { light: ThemeColors; dark: ThemeColors }
> = {
  maine: {
    light: {
      background: "220 15% 96%", // Light grayish-blue (coastal fog)
      foreground: "220 25% 15%", // Dark navy (deep water)
      card: "0 0% 100%",
      cardForeground: "220 25% 15%",
      popover: "0 0% 100%",
      popoverForeground: "220 25% 15%",
      primary: "220 70% 45%", // Classic Maine blue
      primaryForeground: "0 0% 100%", // White for contrast
      secondary: "18 72% 40%", // Rusty red (lobster trap buoy)
      secondaryForeground: "0 0% 100%", // White
      muted: "215 20% 86%", // Misty gray
      mutedForeground: "215 25% 30%",
      accent: "158 45% 30%", // Deep forest green
      accentForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "215 16% 50%", // Steel blue-gray
      input: "215 16% 50%",
      ring: "220 70% 45%", // Matches primary
    },
    dark: {
      background: "220 25% 10%", // Midnight blue
      foreground: "0 0% 100%", // White
      card: "220 25% 10%",
      cardForeground: "0 0% 100%",
      popover: "220 25% 10%",
      popoverForeground: "0 0% 100%",
      primary: "220 70% 50%", // Brighter coastal blue
      primaryForeground: "0 0% 100%",
      secondary: "18 72% 45%", // Rusty red
      secondaryForeground: "0 0% 100%",
      muted: "220 20% 20%",
      mutedForeground: "220 25% 85%",
      accent: "158 45% 35%", // Deep pine green
      accentForeground: "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "220 20% 40%",
      input: "220 20% 40%",
      ring: "220 70% 50%",
    },
  },
  blackIce: {
    light: {
      background: "220 10% 95%",
      foreground: "220 50% 20%",
      card: "0 0% 100%",
      cardForeground: "220 50% 20%",
      popover: "0 0% 100%",
      popoverForeground: "220 50% 20%",
      primary: "220 60% 30%",
      primaryForeground: "0 0% 100%",
      secondary: "220 20% 85%",
      secondaryForeground: "220 50% 20%",
      muted: "220 20% 80%",
      mutedForeground: "220 40% 40%",
      accent: "220 50% 50%",
      accentForeground: "0 0% 100%",
      destructive: "0 70% 50%",
      destructiveForeground: "0 0% 98%",
      border: "220 20% 70%",
      input: "220 20% 70%",
      ring: "220 60% 30%",
    },
    dark: {
      background: "220 50% 10%",
      foreground: "220 20% 85%",
      card: "220 50% 10%",
      cardForeground: "220 20% 85%",
      popover: "220 50% 10%",
      popoverForeground: "220 20% 85%",
      primary: "220 60% 40%",
      primaryForeground: "0 0% 100%",
      secondary: "220 30% 20%",
      secondaryForeground: "220 20% 85%",
      muted: "220 30% 20%",
      mutedForeground: "220 20% 70%",
      accent: "220 50% 60%",
      accentForeground: "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "220 30% 20%",
      input: "220 30% 20%",
      ring: "220 60% 40%",
    },
  },
  lobster: {
    light: {
      background: "20 30% 95%",
      foreground: "0 50% 20%",
      card: "0 0% 100%",
      cardForeground: "0 50% 20%",
      popover: "0 0% 100%",
      popoverForeground: "0 50% 20%",
      primary: "0 60% 40%",
      primaryForeground: "20 30% 95%",
      secondary: "210 40% 30%",
      secondaryForeground: "20 30% 95%",
      muted: "210 20% 80%",
      mutedForeground: "210 30% 35%",
      accent: "210 60% 45%",
      accentForeground: "20 30% 95%",
      destructive: "0 70% 50%",
      destructiveForeground: "0 0% 98%",
      border: "210 20% 60%",
      input: "210 20% 60%",
      ring: "0 60% 40%",
    },
    dark: {
      background: "0 50% 15%",
      foreground: "210 20% 80%",
      card: "0 50% 15%",
      cardForeground: "210 20% 80%",
      popover: "0 50% 15%",
      popoverForeground: "210 20% 80%",
      primary: "0 60% 50%",
      primaryForeground: "20 30% 95%",
      secondary: "210 40% 20%",
      secondaryForeground: "210 20% 80%",
      muted: "210 20% 35%",
      mutedForeground: "210 20% 65%",
      accent: "210 60% 55%",
      accentForeground: "20 30% 95%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "210 20% 30%",
      input: "210 20% 30%",
      ring: "0 60% 50%",
    },
  },
  stormyCoast: {
    light: {
      background: "220 15% 97%",
      foreground: "220 25% 15%",
      card: "0 0% 100%",
      cardForeground: "220 25% 15%",
      popover: "0 0% 100%",
      popoverForeground: "220 25% 15%",
      primary: "220 60% 40%",
      primaryForeground: "0 0% 100%",
      secondary: "220 30% 85%",
      secondaryForeground: "220 25% 15%",
      muted: "220 30% 85%",
      mutedForeground: "220 30% 40%",
      accent: "180 70% 45%",
      accentForeground: "0 0% 100%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "220 30% 70%",
      input: "220 30% 70%",
      ring: "220 60% 40%",
    },
    dark: {
      background: "220 25% 15%",
      foreground: "220 30% 85%",
      card: "220 25% 15%",
      cardForeground: "220 30% 85%",
      popover: "220 25% 15%",
      popoverForeground: "220 30% 85%",
      primary: "220 60% 50%",
      primaryForeground: "0 0% 100%",
      secondary: "220 40% 20%",
      secondaryForeground: "220 30% 85%",
      muted: "220 40% 20%",
      mutedForeground: "220 30% 70%",
      accent: "180 70% 50%",
      accentForeground: "0 0% 100%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "0 0% 98%",
      border: "220 40% 20%",
      input: "220 40% 20%",
      ring: "220 60% 50%",
    },
  },
  mountainTimber: {
    light: {
      background: "40 30% 98%",
      foreground: "120 15% 15%",
      card: "0 0% 100%",
      cardForeground: "120 15% 15%",
      popover: "0 0% 100%",
      popoverForeground: "120 15% 15%",
      primary: "120 35% 35%",
      primaryForeground: "0 0% 100%",
      secondary: "40 20% 92%",
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
      primary: "120 35% 45%",
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
