import { Metadata } from 'next';
import { LunarGlowEventPage } from '@/components/LunarGlowEventPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Lunar Glow Event Guide - Special Event Strategy',
  description: 'Complete Lunar Glow Event guide for Grow a Garden, including event rules, reward items, best strategies and detailed walkthrough.',
  keywords: 'grow a garden lunar glow event, lunar event guide, farming game events, roblox event strategy',
  openGraph: {
    title: 'Grow a Garden Lunar Glow Event Guide',
    description: 'Complete Lunar Glow Event guide with event rules, reward items and best strategies',
    url: 'https://www.growagardencalculator.me/grow-garden-Lunar-Glow-Event',
    images: [
      {
        url: '/events/Lunar_Event_Reward.webp',
        width: 1200,
        height: 630,
        alt: 'Lunar Glow Event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Lunar Glow Event Guide',
    description: 'Complete Lunar Glow Event guide with event rules, reward items and best strategies',
    images: ['/events/Lunar_Event_Reward.webp'],
  },
};

export default function LunarGlowEvent() {
  return (
    <PageLayout>
      <LunarGlowEventPage />
    </PageLayout>
  );
}
