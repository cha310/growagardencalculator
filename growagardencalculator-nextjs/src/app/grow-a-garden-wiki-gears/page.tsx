import { Metadata } from 'next';
import { GearsPage } from '@/components/GearsPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Gears Encyclopedia - Complete Gear Guide',
  description: 'Complete Grow a Garden gears encyclopedia with detailed information about all gears, acquisition methods and effect analysis.',
  keywords: 'grow a garden gears, gear encyclopedia, farming game gears, tool guide, gear database',
  openGraph: {
    title: 'Grow a Garden Gears Encyclopedia - Complete Gear Guide',
    description: 'Complete Grow a Garden gears encyclopedia with detailed gear information, acquisition methods and effects',
    url: 'https://www.growagardencalculator.me/grow-a-garden-wiki-gears',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Gears',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Gears Encyclopedia - Complete Gear Guide',
    description: 'Complete Grow a Garden gears encyclopedia with detailed gear information, acquisition methods and effects',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenGears() {
  return (
    <PageLayout>
      <GearsPage />
    </PageLayout>
  );
} 