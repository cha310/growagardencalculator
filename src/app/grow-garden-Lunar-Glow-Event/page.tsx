import { Metadata } from 'next';
import { LunarGlowEventPage } from '@/components/LunarGlowEventPage';

export const metadata: Metadata = {
  title: 'Grow a Garden Lunar Glow Event - Event Guide and Rewards | Garden Lunar Event',
  description: 'Complete guide for Grow a Garden Lunar Glow Event, including event rewards, participation methods, task completion guide and limited rewards.',
  keywords: 'grow a garden lunar glow, garden lunar event, lunar event, event guide, event rewards',
  openGraph: {
    title: 'Grow a Garden Lunar Glow Event - Event Guide and Rewards',
    description: 'Complete guide for Grow a Garden Lunar Glow Event, including event rewards, participation methods',
    url: 'https://www.growagardencalculator.me/grow-garden-Lunar-Glow-Event',
  },
};

export default function LunarGlowEvent() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <LunarGlowEventPage />
    </div>
  );
} 