import { Metadata } from 'next';
import { MutationsContent } from '@/components/wiki/MutationsContent';

export const metadata: Metadata = {
  title: 'Grow a Garden Mutations - Grow a Garden Wiki',
  description: 'Explore the Grow A Garden Mutations wiki for a complete guide on crop mutations, including value calculations, mutation multipliers, and environmental bonuses.',
  keywords: ['mutations', 'wiki', 'crop mutations', 'variants', 'Grow A Garden', 'mutation guide'],
};

export default function GrowAGardenMutations() {
  return <MutationsContent />;
} 