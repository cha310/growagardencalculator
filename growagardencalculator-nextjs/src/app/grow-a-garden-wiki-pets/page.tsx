import { Metadata } from 'next';
import { PetsPage } from '@/components/PetsPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Pets Encyclopedia - Complete Pet Guide',
  description: 'Complete Grow a Garden pets encyclopedia with detailed information about all pets, acquisition methods and ability analysis.',
  keywords: 'grow a garden pets, pet encyclopedia, farming game pets, pet guide, pet database',
  openGraph: {
    title: 'Grow a Garden Pets Encyclopedia - Complete Pet Guide',
    description: 'Complete Grow a Garden pets encyclopedia with detailed pet information, acquisition methods and abilities',
    url: 'https://www.growagardencalculator.me/grow-a-garden-wiki-pets',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Pets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Pets Encyclopedia - Complete Pet Guide',
    description: 'Complete Grow a Garden pets encyclopedia with detailed pet information, acquisition methods and abilities',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenPets() {
  return (
    <PageLayout>
      <PetsPage />
    </PageLayout>
  );
} 