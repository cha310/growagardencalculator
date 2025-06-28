import { Metadata } from 'next';
import { CropsPage } from '@/components/CropsPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Crops Encyclopedia - Complete Crop Guide',
  description: 'Complete Grow a Garden crops encyclopedia with detailed information about all crops, planting methods, harvest times and value analysis.',
  keywords: 'grow a garden crops, crop encyclopedia, farming game crops, plant guide, crop database',
  openGraph: {
    title: 'Grow a Garden Crops Encyclopedia - Complete Crop Guide',
    description: 'Complete Grow a Garden crops encyclopedia with detailed crop information, planting methods and harvest times',
    url: 'https://www.growagardencalculator.me/grow-a-garden-wiki-crops',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Crops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Crops Encyclopedia - Complete Crop Guide',
    description: 'Complete Grow a Garden crops encyclopedia with detailed crop information, planting methods and harvest times',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenCrops() {
  return (
    <PageLayout>
      <CropsPage />
    </PageLayout>
  );
} 