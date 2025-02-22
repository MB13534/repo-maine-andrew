import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { FloatingCTA } from "@/components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RepoMaine | Vehicle Repossession Services",
  description:
    "Trusted vehicle repossession services in Portland, Maine. We specialize in auto, boat, RV, and equipment recovery for financial institutions and lenders.",
  keywords: [
    "vehicle repossession",
    "repo company Maine",
    "auto recovery services",
    "car repossession Maine",
    "repo business Portland ME",
  ],
  openGraph: {
    title: "RepoMaine | Professional Vehicle Repossession",
    description:
      "Reliable, legally compliant vehicle repossession services in Maine. Serving banks, credit unions, and financial institutions.",
    type: "website",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Repo truck towing a car",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextThemesProvider attribute="class" defaultTheme="LIGHT">
          <ThemeProvider defaultTheme="slate">
            <div className="flex min-h-screen flex-col">
              <MainNav />
              <main className="flex-1">{children}</main>
              <FloatingCTA />
              <Footer />
            </div>
          </ThemeProvider>
          <Analytics />
        </NextThemesProvider>
      </body>
    </html>
  );
}
