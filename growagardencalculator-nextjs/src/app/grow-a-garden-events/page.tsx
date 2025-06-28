import { Metadata } from 'next';
import { EventsPage } from '@/components/EventsPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Events Center - All Game Events Guide',
  description: 'Grow a Garden events center with all game event information, including event guides, reward details, participation methods and complete walkthroughs.',
  keywords: 'grow a garden events, events center, farming game events, roblox game events, event guides',
  openGraph: {
    title: 'Grow a Garden Events Center',
    description: 'Grow a Garden events center with all game event information, guides, rewards and participation methods',
    url: 'https://www.growagardencalculator.me/grow-a-garden-events',
    images: [
      {
        url: '/icons/growagardencalculator.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Events Center',
    description: 'Grow a Garden events center with all game event information, guides, rewards and participation methods',
    images: ['/icons/growagardencalculator.png'],
  },
};

export default function GrowAGardenEvents() {
  return (
    <PageLayout>
      <EventsPage />
    </PageLayout>
  );
} 