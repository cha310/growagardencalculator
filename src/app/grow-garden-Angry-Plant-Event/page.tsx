import { Metadata } from 'next';
import { AngryPlantEventPage } from '../../components/AngryPlantEventPage';

export const metadata: Metadata = {
  title: 'Angry Plant Event - Grow a Garden Events',
  description: 'Explore the Grow a Garden Angry Plant Event! Learn about event rewards, participation methods, and task completion guide. Don\'t miss any exciting events!',
  keywords: 'grow a garden angry plant, garden angry plant event, angry plant event, event guide, event rewards',
  openGraph: {
    title: 'Angry Plant Event - Grow a Garden Events',
    description: 'Explore the Grow a Garden Angry Plant Event! Learn about event rewards, participation methods, and task completion guide. Don\'t miss any exciting events!',
    url: 'https://www.growagardencalculator.me/grow-garden-angry-plant-event',
  },
};

export default function AngryPlantEvent() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <AngryPlantEventPage />
    </div>
  );
} 