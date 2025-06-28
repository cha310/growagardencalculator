import { Metadata } from 'next';
import { EasterEvent2025Page } from '@/components/EasterEvent2025Page';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Easter Event 2025 Guide - Special Event Strategy',
  description: 'Complete Easter Event 2025 guide for Grow a Garden, including event rules, reward items, best strategies and detailed walkthrough.',
  keywords: 'grow a garden easter event 2025, easter event guide, farming game events, roblox event strategy',
  openGraph: {
    title: 'Grow a Garden Easter Event 2025 Guide',
    description: 'Complete Easter Event 2025 guide with event rules, reward items and best strategies',
    url: 'https://www.growagardencalculator.me/grow-garden-Easter-Event-2025',
    images: [
      {
        url: '/events/Easter_shop.webp',
        width: 1200,
        height: 630,
        alt: 'Easter Event 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Easter Event 2025 Guide',
    description: 'Complete Easter Event 2025 guide with event rules, reward items and best strategies',
    images: ['/events/Easter_shop.webp'],
  },
};

export default function EasterEvent2025() {
  return (
    <PageLayout>
      <EasterEvent2025Page />
    </PageLayout>
  );
}
