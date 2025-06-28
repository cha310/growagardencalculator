import { Metadata } from 'next';
import { WikiPage } from '@/components/WikiPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Wiki - Complete Game Guide',
  description: 'Complete Grow a Garden game wiki with detailed information about crops, pets, gears, eggs, mutations and more. The most comprehensive farming game guide.',
  keywords: 'grow a garden wiki, farming game guide, crop guide, pet encyclopedia, gear database, roblox farming',
  openGraph: {
    title: 'Grow a Garden Wiki - Complete Game Guide',
    description: 'Complete Grow a Garden game wiki with detailed information about crops, pets, gears and more',
    url: 'https://www.growagardencalculator.me/grow-a-garden-wiki',
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
    title: 'Grow a Garden Wiki - Complete Game Guide',
    description: 'Complete Grow a Garden game wiki with detailed information about crops, pets, gears and more',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenWiki() {
  return (
    <PageLayout>
      <WikiPage />
    </PageLayout>
  );
} 