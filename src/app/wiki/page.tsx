'use client'

import Link from 'next/link'

export default function WikiPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1f2937', color: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Wiki Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#fde047', 
            marginBottom: '12px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Grow A Garden Wiki
          </h1>
          <p style={{ 
            fontSize: '10px', 
            color: '#d1d5db', 
            lineHeight: '1.6',
            maxWidth: '1100px',
            margin: '0 auto',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Master Roblox's Grow a Garden with our wiki! Discover all pets, gears, mutations, prices, & top crop tips. Your ultimate guide to growing the best garden!
          </p>
        </div>

        {/* Wiki Sections Grid - 匹配主页6个圆形卡片布局 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {/* Crops Section */}
          <Link href="/wiki/crops" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#374151', 
              borderRadius: '10px', 
              padding: '16px', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#4b5563'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#4ade80'
              e.currentTarget.style.backgroundColor = '#374151'
            }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#16a34a', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px',
                  border: '2px solid #22c55e'
                }}>
                  <span style={{ fontSize: '32px' }}>🌱</span>
                </div>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '12px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Grow A Garden Crops
                </h3>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '10px', 
                  lineHeight: '1.4',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Explore all seeds and crops in Grow a Garden, with details on sources, prices, and growth tips.
                </p>
              </div>
            </div>
          </Link>

          {/* Pets Section */}
          <Link href="/wiki/pets" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#374151', 
              borderRadius: '12px', 
              padding: '24px', 
              border: '3px solid #4ade80', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#4b5563'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#4ade80'
              e.currentTarget.style.backgroundColor = '#374151'
            }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#2563eb', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px',
                  border: '2px solid #3b82f6'
                }}>
                  <span style={{ fontSize: '32px' }}>🐾</span>
                </div>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '12px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Grow A Garden Pets
                </h3>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '10px', 
                  lineHeight: '1.4',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Each pet has unique abilities that help players grow their gardens more efficiently.
                </p>
              </div>
            </div>
          </Link>

          {/* Gears Section */}
          <Link href="/wiki/gears" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#374151', 
              borderRadius: '12px', 
              padding: '24px', 
              border: '3px solid #4ade80', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#4b5563'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#4ade80'
              e.currentTarget.style.backgroundColor = '#374151'
            }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#7c3aed', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px',
                  border: '2px solid #8b5cf6'
                }}>
                  <span style={{ fontSize: '32px' }}>⚙️</span>
                </div>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '12px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Grow A Garden Gears
                </h3>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '10px', 
                  lineHeight: '1.4',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Gears are essential tools and equipment that enhance your gardening experience.
                </p>
              </div>
            </div>
          </Link>

          {/* Eggs Section */}
          <Link href="/wiki/eggs" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#374151', 
              borderRadius: '12px', 
              padding: '24px', 
              border: '3px solid #4ade80', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#4b5563'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#4ade80'
              e.currentTarget.style.backgroundColor = '#374151'
            }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#eab308', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px',
                  border: '2px solid #facc15'
                }}>
                  <span style={{ fontSize: '32px' }}>🥚</span>
                </div>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '12px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Grow A Garden Eggs
                </h3>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '10px', 
                  lineHeight: '1.4',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Learn about prices, hatch times, and probabilities on our detailed Eggs wiki page.
                </p>
              </div>
            </div>
          </Link>

          {/* Mutations Section */}
          <Link href="/wiki/mutations" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#374151', 
              borderRadius: '12px', 
              padding: '24px', 
              border: '3px solid #4ade80', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#4b5563'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#4ade80'
              e.currentTarget.style.backgroundColor = '#374151'
            }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#dc2626', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px',
                  border: '2px solid #ef4444'
                }}>
                  <span style={{ fontSize: '32px' }}>✨</span>
                </div>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '12px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Grow A Garden Mutations
                </h3>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '10px', 
                  lineHeight: '1.4',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Discover crop mutations, their triggers, and how to unlock rare varieties in Grow a Garden.
                </p>
              </div>
            </div>
          </Link>

          {/* Values Section */}
          <Link href="/tools/values" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: '#374151', 
              borderRadius: '12px', 
              padding: '24px', 
              border: '3px solid #4ade80', 
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#4b5563'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#4ade80'
              e.currentTarget.style.backgroundColor = '#374151'
            }}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#6366f1', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px',
                  border: '2px solid #818cf8'
                }}>
                  <span style={{ fontSize: '32px' }}>💰</span>
                </div>
                <h3 style={{ 
                  fontSize: '14px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '12px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Grow A Garden Values
                </h3>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '10px', 
                  lineHeight: '1.4',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  Learn crop values, trade insights, and market trends for Grow a Garden.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center' }}>
          <Link 
            href="/" 
            style={{ 
              backgroundColor: '#2563eb', 
              color: 'white', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '12px',
              fontFamily: "'Press Start 2P', cursive",
              border: '2px solid #2563eb',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1d4ed8'
              e.currentTarget.style.borderColor = '#1d4ed8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb'
              e.currentTarget.style.borderColor = '#2563eb'
            }}
          >
            ← Back to Calculator
          </Link>
        </div>
      </div>
    </div>
  )
}