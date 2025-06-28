import { Metadata } from 'next';
import { BizzyBeeEventPage } from '@/components/BizzyBeeEventPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Bizzy Bee Event Guide - Special Event Strategy',
  description: 'Complete Bizzy Bee Event guide for Grow a Garden, including event rules, reward items, best strategies and detailed walkthrough.',
  keywords: 'grow a garden bizzy bee event, bee event guide, farming game events, roblox event strategy',
  openGraph: {
    title: 'Grow a Garden Bizzy Bee Event Guide',
    description: 'Complete Bizzy Bee Event guide with event rules, reward items and best strategies',
    url: 'https://www.growagardencalculator.me/grow-garden-Bizzy-Bee-Event',
    images: [
      {
        url: '/events/Bizzy_Bee_Event.webp',
        width: 1200,
        height: 630,
        alt: 'Bizzy Bee Event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Bizzy Bee Event Guide',
    description: 'Complete Bizzy Bee Event guide with event rules, reward items and best strategies',
    images: ['/events/Bizzy_Bee_Event.webp'],
  },
};

export default function BizzyBeeEvent() {
  return (
    <PageLayout>
      <BizzyBeeEventPage />
    </PageLayout>
  );
}
