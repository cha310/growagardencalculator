import { Metadata } from 'next';
import { GearsContent } from '@/components/wiki/GearsContent';

export const metadata: Metadata = {
  title: 'Grow a Garden Gears - Grow a Garden Wiki',
  description: 'Explore Gears in Grow a Garden! Master tools to enhance crops, unlock rare mutations, and personalize your Roblox farm. Check our wiki for expert tips.',
  keywords: ['gears', 'equipment', 'wiki', 'sprinklers', 'fertilizers', 'Grow A Garden'],
};

export default function GrowAGardenGears() {
  return <GearsContent />;
} 