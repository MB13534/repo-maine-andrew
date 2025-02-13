"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeColors, ThemeNames, themes } from "@/lib/themes";
import { useTheme as useNextTheme } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeNames;
};

type ThemeContextType = {
  theme: ThemeNames;
  setTheme: (theme: ThemeNames) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "slate",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeNames>(defaultTheme);
  const { resolvedTheme } = useNextTheme();

  // Apply theme colors whenever theme or dark/light mode changes
  useEffect(() => {
    const themeConfig = themes[theme];
    if (!themeConfig) return;

    // Choose the correct color set
    const colors: ThemeColors =
      resolvedTheme === "dark" ? themeConfig.dark : themeConfig.light;

    // Update CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      document.documentElement.style.setProperty(cssVar, value);
    });

    // Set data-theme attribute (if needed elsewhere)
    document.documentElement.setAttribute("data-theme", theme);

    // Toggle the "dark" class for Tailwind
    if (resolvedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme, resolvedTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
