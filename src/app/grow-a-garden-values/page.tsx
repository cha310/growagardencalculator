import { Metadata } from 'next';
import { HomeCalculator } from '@/components/calculator/HomeCalculator';

export const metadata: Metadata = {
  title: 'Grow a Garden Value Calculator - Complete Value Analysis',
  description: 'Advanced value calculator for Grow a Garden. Calculate crop values, analyze profits, and optimize your farming strategy.',
  keywords: ['value calculator', 'crop values', 'profit analysis', 'Grow A Garden'],
};

export default function GrowAGardenValues() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">
          Grow A Garden Value Calculator
        </h1>
        <p className="text-lg text-gray-300">
          Calculate crop values and optimize your farming strategy
        </p>
      </div>
      <HomeCalculator />
    </div>
  );
} 