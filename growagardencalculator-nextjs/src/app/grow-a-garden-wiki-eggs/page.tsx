import { Metadata } from 'next';
import { EggsPage } from '@/components/EggsPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Eggs Encyclopedia - Complete Egg Guide',
  description: 'Complete Grow a Garden eggs encyclopedia with detailed information about all eggs, hatching methods and rarity analysis.',
  keywords: 'grow a garden eggs, egg encyclopedia, farming game eggs, hatching guide, egg database',
  openGraph: {
    title: 'Grow a Garden Eggs Encyclopedia - Complete Egg Guide',
    description: 'Complete Grow a Garden eggs encyclopedia with detailed egg information, hatching methods and rarity analysis',
    url: 'https://www.growagardencalculator.me/grow-a-garden-wiki-eggs',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Eggs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Eggs Encyclopedia - Complete Egg Guide',
    description: 'Complete Grow a Garden eggs encyclopedia with detailed egg information, hatching methods and rarity analysis',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenEggs() {
  return (
    <PageLayout>
      <EggsPage />
    </PageLayout>
  );
} 