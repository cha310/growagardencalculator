import type { Metadata } from 'next'
import { ValuesContent } from '@/components/tools/ValuesContent'

export const metadata: Metadata = {
  title: 'Value Calculator - Advanced Crop Value Analysis',
  description: 'Advanced value calculation tools for Grow A Garden. Compare crops, analyze profits, and optimize your farming strategy.',
  keywords: ['value calculator', 'crop analysis', 'profit calculator', 'Grow A Garden', 'farming strategy'],
}

export default function ValuesPage() {
  return <ValuesContent />
}