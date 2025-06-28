import { Metadata } from 'next';
import { ValuesPage } from '@/components/ValuesPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Values Chart - Item Value Calculator',
  description: 'Complete Grow a Garden values chart with detailed value information for all crops, pets and gears, helping players develop optimal strategies.',
  keywords: 'grow a garden values, value chart, farming game values, item values, game value calculator',
  openGraph: {
    title: 'Grow a Garden Values Chart - Item Value Calculator',
    description: 'Complete Grow a Garden values chart with detailed value information for all crops, pets and gears',
    url: 'https://www.growagardencalculator.me/grow-a-garden-values',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Values',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Values Chart - Item Value Calculator',
    description: 'Complete Grow a Garden values chart with detailed value information for all crops, pets and gears',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenValues() {
  return (
    <PageLayout>
      <ValuesPage />
    </PageLayout>
  );
} 