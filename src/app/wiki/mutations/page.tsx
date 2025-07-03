import type { Metadata } from 'next'
import { MutationsContent } from '@/components/wiki/MutationsContent'

export const metadata: Metadata = {
  title: 'Mutations Wiki - All Mutation Types Guide',
  description: 'Complete mutations guide for Grow A Garden. Learn about crop mutations, triggers, and how to unlock rare varieties for maximum value.',
  keywords: ['mutations', 'wiki', 'crop mutations', 'variants', 'Grow A Garden', 'mutation guide'],
}

export default function MutationsPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#fcdf56', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Grow A Garden Mutations
        </h1>
        <p style={{ 
          fontSize: '10px', 
          color: '#d1d5db', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          fontFamily: "'Press Start 2P', cursive"
        }}>
            Hey, fellow gardeners! Ready to unlock the secret to massive crop profits? If you've ever wondered how some players get crops worth millions while yours are worth thousands, the answer is mutations! These amazing transformations can turn your ordinary vegetables into sparkling, rainbow-colored masterpieces that sell for incredible amounts. From simple 2x Shiny variants to legendary 5x Rainbow crops, understanding mutations is your ticket to becoming a farming millionaire. Let's dive into the magical world of crop transformations! ✨
        </p>
      </header>
      <MutationsContent />
    </div>
  )
}