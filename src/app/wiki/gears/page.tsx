import type { Metadata } from 'next'
import { GearsContent } from '@/components/wiki/GearsContent'

export const metadata: Metadata = {
  title: 'Gears Wiki - All Equipment Guide',
  description: 'Complete gears and equipment guide for Grow A Garden. Learn about sprinklers, fertilizers, tools and their functions.',
  keywords: ['gears', 'equipment', 'wiki', 'sprinklers', 'fertilizers', 'Grow A Garden'],
}

export default function GearsPage() {
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
          Grow A Garden Gears
        </h1>
        <p style={{ 
          fontSize: '10px', 
          color: '#d1d5db', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          fontFamily: "'Press Start 2P', cursive"
        }}>
            Hey, fellow gardeners! Ready to supercharge your farming game? If you're looking to take your Grow a Garden experience to the next level, you've come to the right place! Gears are the secret weapons that transform ordinary gardens into highly efficient, automated farming paradises. From sprinklers that keep your crops perfectly watered to fertilizers that boost growth speed, these essential tools are what separate the pros from the beginners. Let's explore all the amazing gears that'll help you build the ultimate garden setup! ⚙️
        </p>
      </header>
      <GearsContent />
    </div>
  )
}