import { Metadata } from 'next';
import { SummerHarvestEventPage } from '@/components/SummerHarvestEventPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Summer Harvest Event Guide - Special Event Strategy',
  description: 'Complete Summer Harvest Event guide for Grow a Garden, including event rules, reward items, best strategies and detailed walkthrough.',
  keywords: 'grow a garden summer harvest event, summer event guide, farming game events, roblox event strategy',
  openGraph: {
    title: 'Grow a Garden Summer Harvest Event Guide',
    description: 'Complete Summer Harvest Event guide with event rules, reward items and best strategies',
    url: 'https://www.growagardencalculator.me/grow-garden-summer-harvest',
    images: [
      {
        url: '/events/Summer_Harvest_Almost_Filled.webp',
        width: 1200,
        height: 630,
        alt: 'Summer Harvest Event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Summer Harvest Event Guide',
    description: 'Complete Summer Harvest Event guide with event rules, reward items and best strategies',
    images: ['/events/Summer_Harvest_Almost_Filled.webp'],
  },
};

export default function SummerHarvestEvent() {
  return (
    <PageLayout>
      <SummerHarvestEventPage />
    </PageLayout>
  );
} 