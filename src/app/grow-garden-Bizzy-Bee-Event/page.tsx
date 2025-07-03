import { Metadata } from 'next';
import { BizzyBeeEventPage } from '@/components/BizzyBeeEventPage';

export const metadata: Metadata = {
  title: 'Grow a Garden Bizzy Bee Event - Event Guide and Rewards | Garden Bee Event',
  description: 'Complete guide for Grow a Garden Bizzy Bee Event, including event rewards, participation methods, task completion guide and limited rewards.',
  keywords: 'grow a garden bizzy bee, garden bee event, bee event, event guide, event rewards',
  openGraph: {
    title: 'Grow a Garden Bizzy Bee Event - Event Guide and Rewards',
    description: 'Complete guide for Grow a Garden Bizzy Bee Event, including event rewards, participation methods',
    url: 'https://www.growagardencalculator.me/grow-garden-Bizzy-Bee-Event',
  },
};

export default function BizzyBeeEvent() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <BizzyBeeEventPage />
    </div>
  );
} 