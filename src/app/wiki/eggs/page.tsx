import type { Metadata } from 'next'
import { EggsContent } from '@/components/wiki/EggsContent'

export const metadata: Metadata = {
  title: 'Eggs Wiki - All Egg Types Guide',
  description: 'Complete eggs guide for Grow A Garden. Learn about egg prices, hatch times, probabilities and which pets you can get.',
  keywords: ['eggs', 'wiki', 'pet eggs', 'hatch times', 'Grow A Garden', 'pet collection'],
}

export default function EggsPage() {
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
          Grow A Garden Eggs
        </h1>
        <p style={{ 
          fontSize: '10px', 
          color: '#d1d5db', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          fontFamily: "'Press Start 2P', cursive"
        }}>
            Hey, fellow pet collectors! Ready to dive into the exciting world of egg hatching in Grow a Garden? If you've ever wondered about the thrill of not knowing what amazing pet you'll get next, you're in for a treat! Eggs are your gateway to building the ultimate pet collection, from adorable common companions to legendary creatures that'll make your friends jealous. Whether you're saving up for your first egg or strategizing which ones to hatch next, understanding the egg system is key to becoming a master pet collector. Let's crack open all the secrets! 🥚
        </p>
      </header>
      <EggsContent />
    </div>
  )
}