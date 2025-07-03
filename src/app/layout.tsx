import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#10b981',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.growagardencalculator.me'),
  title: {
    template: '%s | Grow A Garden Calculator',
    default: 'Grow A Garden Calculator - Farm Value Calculator'
  },
  description: 'Professional farm game calculator tool to optimize your planting strategy and investment decisions',
  keywords: ['farm game', 'calculator', 'Grow A Garden', 'crop calculator', 'planting strategy'],
  authors: [{ name: 'Grow A Garden Calculator Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.growagardencalculator.me',
    siteName: 'Grow A Garden Calculator',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow A Garden Calculator'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow A Garden Calculator',
    description: 'Professional farm game calculator tool',
    images: ['/icons/growagardencalculator.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.growagardencalculator.me",
  },
};

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" 
          rel="stylesheet" 
        />
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3881719379229226"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ 
        backgroundColor: '#1f2937', 
        color: 'white', 
        minHeight: '100vh', 
        fontFamily: "'Press Start 2P', cursive",
        margin: 0,
        padding: 0 
      }}>
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 