import { Metadata } from 'next';
import { AngryPlantEventPage } from '@/components/AngryPlantEventPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Angry Plant Event Guide - Special Event Strategy',
  description: 'Complete Angry Plant Event guide for Grow a Garden, including event rules, reward items, best strategies and detailed walkthrough.',
  keywords: 'grow a garden angry plant event, special event guide, farming game events, roblox event strategy',
  openGraph: {
    title: 'Grow a Garden Angry Plant Event Guide',
    description: 'Complete Angry Plant Event guide with event rules, reward items and best strategies',
    url: 'https://www.growagardencalculator.me/grow-garden-Angry-Plant-Event',
    images: [
      {
        url: '/events/Angry_plant.webp',
        width: 1200,
        height: 630,
        alt: 'Angry Plant Event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Angry Plant Event Guide',
    description: 'Complete Angry Plant Event guide with event rules, reward items and best strategies',
    images: ['/events/Angry_plant.webp'],
  },
};

export default function AngryPlantEvent() {
  return (
    <PageLayout>
      <AngryPlantEventPage />
    </PageLayout>
  );
}
