import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growagardencalculator.me'),
  title: "Grow a Garden Calculator - Garden Planning Tool",
  description: "Grow a Garden Calculator helps you optimize your garden planning with crop calculations, pet management, and event tracking. The ultimate Roblox farming game companion.",
  keywords: "grow a garden, calculator, crops, pets, garden planning, roblox farming game, mutation calculator",
  authors: [{ name: "Grow a Garden Calculator Team" }],
  robots: "index, follow",
  openGraph: {
    title: "Grow a Garden Calculator - Garden Planning Tool",
    description: "Optimize your garden planning with our comprehensive calculator tool for the Roblox farming game",
    url: "https://www.growagardencalculator.me",
    siteName: "Grow a Garden Calculator",
    images: [
      {
        url: "/icons/growagardencalculator.png",
        width: 1200,
        height: 630,
        alt: "Grow a Garden Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow a Garden Calculator - Garden Planning Tool",
    description: "Optimize your garden planning with our comprehensive calculator tool for the Roblox farming game",
    images: ["/icons/growagardencalculator.png"],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/growagardencalculator.png" />
        <meta name="theme-color" content="#10b981" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
