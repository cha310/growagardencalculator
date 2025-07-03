import { Metadata } from 'next';
import { PetsContent } from '@/components/wiki/PetsContent';

export const metadata: Metadata = {
  title: 'Grow a Garden Pets Wiki - Complete Pets Guide',
  description: 'Complete pets guide with detailed information about all pets in Grow A Garden. Learn about pet traits, abilities, and rarity tiers.',
  keywords: ['pets', 'wiki', 'pet guide', 'Grow A Garden', 'pet abilities'],
};

export default function GrowAGardenPets() {
  return <PetsContent />;
} 