import { Metadata } from 'next';
import { EventsPage } from '@/components/EventsPage';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Grow a Garden Events Center - Latest Events and Rewards | Garden Events Guide',
  description: 'Latest Grow a Garden event information, including event rewards, event times, participation methods and strategies. Don\'t miss any exciting events!',
  keywords: 'grow a garden events, garden events, game events, event rewards, event guide, limited events',
  openGraph: {
    title: 'Grow a Garden Events Center - Latest Events and Rewards',
    description: 'Latest Grow a Garden event information, including event rewards, event times, participation methods',
    url: 'https://www.growagardencalculator.me/grow-a-garden-events',
  },
};

export default function GrowAGardenEvents() {
  return (
    <PageLayout>
      <EventsPage />
    </PageLayout>
  );
} 