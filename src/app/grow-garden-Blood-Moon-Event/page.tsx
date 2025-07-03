import { Metadata } from 'next';
import { BloodMoonEventPage } from '@/components/BloodMoonEventPage';

export const metadata: Metadata = {
  title: 'Grow a Garden Blood Moon Event - Event Guide and Rewards | Garden Blood Moon Event',
  description: 'Complete guide for Grow a Garden Blood Moon Event, including event rewards, participation methods, task completion guide and limited rewards.',
  keywords: 'grow a garden blood moon, garden blood moon event, blood moon event, event guide, event rewards',
  openGraph: {
    title: 'Grow a Garden Blood Moon Event - Event Guide and Rewards',
    description: 'Complete guide for Grow a Garden Blood Moon Event, including event rewards, participation methods',
    url: 'https://www.growagardencalculator.me/grow-garden-Blood-Moon-Event',
  },
};

export default function BloodMoonEvent() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <BloodMoonEventPage />
    </div>
  );
} 