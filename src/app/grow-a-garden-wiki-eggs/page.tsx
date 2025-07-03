import { Metadata } from 'next';
import { EggsContent } from '@/components/wiki/EggsContent';

export const metadata: Metadata = {
  title: 'Grow a Garden Eggs - Grow a Garden Wiki',
  description: 'Discover all Grow a Garden eggs! Learn about prices, hatch times, and probabilities on our detailed Eggs wiki page.',
  keywords: ['eggs', 'wiki', 'pet eggs', 'hatch times', 'Grow A Garden', 'pet collection'],
};

export default function GrowAGardenEggs() {
  return <EggsContent />;
} 