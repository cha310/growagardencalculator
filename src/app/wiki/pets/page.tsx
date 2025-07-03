import type { Metadata } from 'next'
import { PetsContent } from '@/components/wiki/PetsContent'

export const metadata: Metadata = {
  title: 'Pets Wiki - All Pets Guide',
  description: 'Complete pets guide with detailed information about all pets in Grow A Garden. Learn about pet traits, abilities, and rarity tiers.',
  keywords: ['pets', 'wiki', 'pet guide', 'Grow A Garden', 'pet abilities'],
}

export default function PetsPage() {
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
          Grow A Garden Pets
        </h1>
        <p style={{ 
          fontSize: '10px', 
          color: '#d1d5db', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          fontFamily: "'Press Start 2P', cursive"
        }}>
            Hey, fellow gardeners! If you're diving into the colorful world of Grow a Garden on Roblox, you're probably wondering about these adorable companions called pets! Well, get ready—because pets are amazing helpers that make your farming experience way more fun and efficient. Whether you're a beginner looking for your first pet or a pro collector hunting for those ultra-rare Prismatic creatures, understanding pets is key to creating the ultimate garden setup. Let's explore all the furry (and not-so-furry) friends waiting to join your gardening adventure! 🐾
        </p>
      </header>
      <PetsContent />
    </div>
  )
}