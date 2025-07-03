import { Metadata } from 'next';
import { CodesPage } from '@/components/CodesPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Codes - Latest Gift Codes and Rewards | Garden Codes',
  description: 'Latest Grow a Garden codes and gift codes, including valid codes, reward content and usage methods.',
  keywords: 'grow a garden codes, garden codes, gift codes, code rewards, free rewards',
  openGraph: {
    title: 'Grow a Garden Codes - Latest Gift Codes and Rewards',
    description: 'Latest Grow a Garden codes and gift codes, including valid codes',
    url: 'https://www.growagardencalculator.me/grow-a-garden-codes',
  },
};

export default function GrowAGardenCodes() {
  return (
    <PageLayout showNavigation={false}>
      <CodesPage />
    </PageLayout>
  );
} 