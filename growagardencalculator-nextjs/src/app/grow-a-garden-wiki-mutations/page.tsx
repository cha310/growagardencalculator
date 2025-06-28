import { Metadata } from 'next';
import { MutationsPage } from '@/components/MutationsPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Mutations Encyclopedia - Complete Mutation Guide',
  description: 'Complete Grow a Garden mutations encyclopedia with detailed information about all mutations, trigger conditions and result analysis.',
  keywords: 'grow a garden mutations, mutation encyclopedia, farming game mutations, mutation guide, mutation database',
  openGraph: {
    title: 'Grow a Garden Mutations Encyclopedia - Complete Mutation Guide',
    description: 'Complete Grow a Garden mutations encyclopedia with detailed mutation information, trigger conditions and results',
    url: 'https://www.growagardencalculator.me/grow-a-garden-wiki-mutations',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Mutations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Mutations Encyclopedia - Complete Mutation Guide',
    description: 'Complete Grow a Garden mutations encyclopedia with detailed mutation information, trigger conditions and results',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenMutations() {
  return (
    <PageLayout>
      <MutationsPage />
    </PageLayout>
  );
} 