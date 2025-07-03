import { Metadata } from 'next';
import { EasterEvent2025Page } from '@/components/EasterEvent2025Page';

export const metadata: Metadata = {
  title: 'Grow a Garden Easter Event 2025 - Event Guide and Rewards | Garden Easter Event',
  description: 'Complete guide for Grow a Garden 2025 Easter Event, including event rewards, participation methods, task completion guide and limited rewards.',
  keywords: 'grow a garden easter 2025, garden easter event, easter event, event guide, event rewards',
  openGraph: {
    title: 'Grow a Garden Easter Event 2025 - Event Guide and Rewards',
    description: 'Complete guide for Grow a Garden 2025 Easter Event, including event rewards, participation methods',
    url: 'https://www.growagardencalculator.me/grow-garden-Easter-Event-2025',
  },
};

export default function EasterEvent2025() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <EasterEvent2025Page />
    </div>
  );
} 