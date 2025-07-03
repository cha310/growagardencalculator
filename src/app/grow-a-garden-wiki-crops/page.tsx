import { Metadata } from 'next';
import { CropsPage } from '@/components/CropsPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Crops - Grow a Garden Wiki',
  description: 'Explore the ultimate guide to crops in Robloxs Grow a Garden. Discover all seeds from Sams Shop, events, and packs, including prices, values, and top crop recommendations.',
  keywords: 'grow a garden crops, garden crops, crop guide, crop values, planting guide, crop list',
  openGraph: {
    title: 'Grow a Garden Crops - Grow a Garden Wiki',
    description: 'Explore the ultimate guide to crops in Robloxs Grow a Garden. Discover all seeds from Sams Shop, events, and packs, including prices, values, and top crop recommendations.',
    url: 'https://www.growagardencalculator.me/grow-a-garden-wiki-crops',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Wiki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Wiki - Grow a Garden Wiki',
    description: 'Explore the ultimate guide to crops in Robloxs Grow a Garden. Discover all seeds from Sams Shop, events, and packs, including prices, values, and top crop recommendations.',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenWikiCrops() {
  return (
    <PageLayout>
      <CropsPage />
    </PageLayout>
  );
} 