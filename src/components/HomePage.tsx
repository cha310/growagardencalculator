'use client';

import Link from 'next/link';
import { HomeCalculator } from '@/components/calculator/HomeCalculator';
import { FAQSection } from '@/components/home/FAQSection';

interface HomePageProps {
  initialGameData?: {
    plants: any[];
    pets: any[];
    gears: any[];
    eggs: any[];
    mutations: any[];
  };
}

export function HomePage({ initialGameData }: HomePageProps) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1f2937', color: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#fde047', 
            marginBottom: '8px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Grow a Garden Calculator
          </h1>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Calculate your crop values and optimize your garden profits
          </p>
        </div>

        {/* Main Calculator */}
        <HomeCalculator />

        {/* Wiki Section */}
        <div style={{ marginTop: '64px', marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '16px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              Grow A Garden Wiki
            </h2>
            <p style={{ 
              fontSize: '12px', 
              color: '#d1d5db', 
              maxWidth: '1024px', 
              margin: '0 auto',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              Master Roblox's Grow a Garden with our wiki! Discover all pets, gears, mutations, prices, & top crop tips. Your ultimate guide to growing the best garden!
            </p>
          </div>

          {/* Wiki Sections Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
            {/* Crops Section */}
            <Link href="/wiki/crops" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: '#374151', 
                borderRadius: '12px', 
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
                    Crops
                  </h3>
                  <p style={{ 
                    color: '#d1d5db', 
                    fontSize: '10px', 
                    lineHeight: '1.4',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>
                    Explore all seeds and crops with details on sources, prices, and growth tips.
                  </p>
                </div>
              </div>
            </Link>

            {/* Pets Section */}
            <Link href="/wiki/pets" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: '#374151', 
                borderRadius: '12px', 
                padding: '16px', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4b5563'
              }}
              onMouseLeave={(e) => {
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
                    Pets
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

            {/* More sections following the same pattern... */}
            {/* I'll add the essential ones for brevity */}
            
            {/* Values Section */}
            <Link href="/tools/values" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: '#374151', 
                borderRadius: '12px', 
                padding: '16px', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4b5563'
              }}
              onMouseLeave={(e) => {
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
                    Values
                  </h3>
                  <p style={{ 
                    color: '#d1d5db', 
                    fontSize: '10px', 
                    lineHeight: '1.4',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>
                    Learn crop values, trade insights, and market trends.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional quick links */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
            {/* Stock Section */}
            <div style={{ 
              backgroundColor: '#374151', 
              borderRadius: '12px', 
              padding: '16px', 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '16px', 
                display: 'flex', 
                alignItems: 'center',
                fontFamily: "'Press Start 2P', cursive"
              }}>
                <span style={{ fontSize: '24px', marginRight: '12px' }}>📦</span>
                Stock Manager
              </h3>
              <p style={{ 
                fontSize: '12px', 
                color: '#d1d5db', 
                marginBottom: '16px', 
                lineHeight: '1.4',
                fontFamily: "'Press Start 2P', cursive"
              }}>
                Check Sam's Shop stock, event seeds, and pack availability.
              </p>
              <Link 
                href="/grow-a-garden-stock" 
                style={{ 
                  backgroundColor: '#4ade80', 
                  color: '#000000', 
                  padding: '8px 16px', 
                  borderRadius: '8px', 
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '12px',
                  fontFamily: "'Press Start 2P', cursive",
                  fontWeight: '600',
                  border: '2px solid #4ade80',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#22c55e'
                  e.currentTarget.style.borderColor = '#22c55e'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#4ade80'
                  e.currentTarget.style.borderColor = '#4ade80'
                }}
              >
                View Stock
              </Link>
            </div>

            {/* Codes Section */}
            <div style={{ 
              backgroundColor: '#374151', 
              borderRadius: '12px', 
              padding: '16px', 
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: 'white', 
                marginBottom: '16px', 
                display: 'flex', 
                alignItems: 'center',
                fontFamily: "'Press Start 2P', cursive"
              }}>
                <span style={{ fontSize: '24px', marginRight: '12px' }}>🎁</span>
                Game Codes
              </h3>
              <p style={{ 
                fontSize: '12px', 
                color: '#d1d5db', 
                marginBottom: '16px', 
                lineHeight: '1.4',
                fontFamily: "'Press Start 2P', cursive"
              }}>
                Get the latest Grow a Garden Codes for 2025.
              </p>
              <Link 
                href="/grow-a-garden-codes" 
                style={{ 
                  backgroundColor: '#fbbf24', 
                  color: '#000000', 
                  padding: '8px 16px', 
                  borderRadius: '8px', 
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '12px',
                  fontFamily: "'Press Start 2P', cursive",
                  fontWeight: '600',
                  border: '2px solid #fbbf24',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f59e0b'
                  e.currentTarget.style.borderColor = '#f59e0b'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fbbf24'
                  e.currentTarget.style.borderColor = '#fbbf24'
                }}
              >
                View Codes
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </div>
  );
}