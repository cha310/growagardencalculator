import { Metadata } from 'next';
import { StockContent } from '@/components/tools/StockContent';

export const metadata: Metadata = {
  title: 'Grow a Garden Stock Management - Track Shop Inventories',
  description: 'Stock management tool for Grow a Garden. Track shop inventories, restock times, and item availability.',
  keywords: ['stock management', 'shop inventory', 'Grow A Garden', 'item tracking'],
};

export default function GrowAGardenStock() {
  return <StockContent />;
} 