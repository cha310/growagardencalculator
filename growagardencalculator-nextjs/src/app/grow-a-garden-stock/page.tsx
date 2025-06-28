import { Metadata } from 'next';
import { StockPage } from '@/components/StockPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Stock Manager - Inventory Calculator Tool',
  description: 'Grow a Garden stock management tool helps players manage game item inventory, optimize resource allocation and improve game efficiency.',
  keywords: 'grow a garden stock, inventory management, farming game tools, game inventory, resource management',
  openGraph: {
    title: 'Grow a Garden Stock Manager - Inventory Calculator Tool',
    description: 'Grow a Garden stock management tool helps players manage game inventory and optimize resource allocation',
    url: 'https://www.growagardencalculator.me/grow-a-garden-stock',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Stock',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Stock Manager - Inventory Calculator Tool',
    description: 'Grow a Garden stock management tool helps players manage game inventory and optimize resource allocation',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenStock() {
  return (
    <PageLayout>
      <StockPage />
    </PageLayout>
  );
} 