import { Metadata } from 'next';
import { SummerHarvestEventPage } from '@/components/SummerHarvestEventPage';

export const metadata: Metadata = {
  title: 'Summer Harvest Event - Grow a Garden Events',
  description: 'Explore the Grow a Garden Summer Harvest Event! Learn about event rewards, participation methods, and task completion guide. Don\'t miss any exciting events!',
  keywords: 'grow a garden summer harvest, garden summer harvest, summer event, event guide, event rewards',
  openGraph: {
    title: 'Summer Harvest Event - Grow a Garden Events',
    description: 'Explore the Grow a Garden Summer Harvest Event! Learn about event rewards, participation methods, and task completion guide. Don\'t miss any exciting events!',
    url: 'https://www.growagardencalculator.me/grow-garden-summer-harvest',
  },
};

export default function SummerHarvestEvent() {
  return <SummerHarvestEventPage />;
} 