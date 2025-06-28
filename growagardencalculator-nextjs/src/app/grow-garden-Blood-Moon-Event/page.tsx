import { Metadata } from 'next';
import { BloodMoonEventPage } from '@/components/BloodMoonEventPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Blood Moon Event Guide - Special Event Strategy',
  description: 'Complete Blood Moon Event guide for Grow a Garden, including event rules, reward items, best strategies and detailed walkthrough.',
  keywords: 'grow a garden blood moon event, special event guide, farming game events, roblox event strategy',
  openGraph: {
    title: 'Grow a Garden Blood Moon Event Guide',
    description: 'Complete Blood Moon Event guide with event rules, reward items and best strategies',
    url: 'https://www.growagardencalculator.me/grow-garden-Blood-Moon-Event',
    images: [
      {
        url: '/events/Blood_Shop.webp',
        width: 1200,
        height: 630,
        alt: 'Blood Moon Event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Blood Moon Event Guide',
    description: 'Complete Blood Moon Event guide with event rules, reward items and best strategies',
    images: ['/events/Blood_Shop.webp'],
  },
};

export default function BloodMoonEvent() {
  return (
    <PageLayout>
      <BloodMoonEventPage />
    </PageLayout>
  );
}
