import { Metadata } from 'next';
import { CodesPage } from '@/components/CodesPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Codes - Free Redemption Codes',
  description: 'Latest Grow a Garden free redemption codes collection, including valid free codes, redemption methods and reward details. Get free game resources.',
  keywords: 'grow a garden codes, redemption codes, free codes, roblox farming game codes, game freebies',
  openGraph: {
    title: 'Grow a Garden Codes - Free Redemption Codes',
    description: 'Latest Grow a Garden free redemption codes with valid codes, redemption methods and reward details',
    url: 'https://www.growagardencalculator.me/grow-a-garden-codes',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Codes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Codes - Free Redemption Codes',
    description: 'Latest Grow a Garden free redemption codes with valid codes, redemption methods and reward details',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenCodes() {
  return (
    <PageLayout>
      <CodesPage />
    </PageLayout>
  );
} 