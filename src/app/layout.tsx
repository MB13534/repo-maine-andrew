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
  title: "RepoMaine | Recovery Solutions for Portland & Southern Maine",
  description:
    "RepoMaine, a division of A.C. Enterprises, LLC, offers fast, risk-free repossession services for cars, boats, RVs, trailers, and more across Portland and Southern Maine.",
  keywords: [
    "RepoMaine",
    "A.C. Enterprises LLC",
    "Portland Maine repossession",
    "Southern Maine asset recovery",
    "vehicle repossession",
    "auto repossession Maine",
    "boat recovery Maine",
    "RV repossession",
    "trailer recovery",
    "repo company Biddeford",
    "repo services Saco",
    "repo company Scarborough",
    "repossession Portland ME",
  ],
  openGraph: {
    title: "RepoMaine | Trusted Repossession Services in Southern Maine",
    description:
      "RepoMaine, a division of A.C. Enterprises, LLC, offers reliable, legally compliant repossession services for cars, boats, RVs, trailers, and equipment across Portland and Southern Maine.",
    type: "website",
    url: "https://repomaine.com/",
    // images: [
    //   {
    //     url: "https://repomaine.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Repo truck towing a vehicle in Maine",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "RepoMaine | Southern Maine Repossession Experts",
  //   description:
  //     "RepoMaine, a division of A.C. Enterprises, LLC, offers fast, risk-free repossession services for cars, boats, RVs, and more across Portland and Southern Maine.",
  //   images: ["https://repomaine.com/og-image.jpg"],
  // },
  alternates: {
    canonical: "https://repomaine.com/",
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
