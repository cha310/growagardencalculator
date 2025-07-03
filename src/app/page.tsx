'use client'

import Link from 'next/link'
import { HomeCalculator } from '@/components/calculator/HomeCalculator'
import { FAQSection } from '@/components/home/FAQSection'

export default function HomePage() {
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

          {/* Wiki Sections Grid - 匹配原版6个圆形卡片布局 */}
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

          {/* Additional Sections - Stock and Codes */}
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
                Grow A Garden Stock
              </h3>
              <p style={{ 
                fontSize: '12px', 
                color: '#d1d5db', 
                marginBottom: '16px', 
                lineHeight: '1.4',
                fontFamily: "'Press Start 2P', cursive"
              }}>
                Check Sam's Shop stock, event seeds, and pack availability in Grow a Garden.
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
                Grow A Garden Codes
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

        {/* Events Section */}
        <div style={{ marginTop: '64px', marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: 'white', 
              marginBottom: '16px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              Grow A Garden Events
            </h2>
            <p style={{ 
              fontSize: '12px', 
              color: '#d1d5db', 
              maxWidth: '1024px', 
              margin: '0 auto',
              fontFamily: "'Press Start 2P', cursive",
              lineHeight: '1.6'
            }}>
              Explore the complete timeline of Grow a Garden events! From seasonal celebrations to limited-time challenges, discover exclusive rewards and unique gameplay features.
            </p>
          </div>

          {/* Events Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            {/* Summer Harvest Event */}
            <Link href="/grow-garden-summer-harvest" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: '#374151', 
                borderRadius: '12px', 
                padding: '16px', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4b5563'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#374151'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      backgroundColor: '#f97316', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      border: '2px solid #fb923c'
                    }}>
                      🌾
                    </div>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        color: 'white',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        Summer Harvest Event
                      </h3>
                      <span style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        padding: '4px 12px', 
                        borderRadius: '12px', 
                        fontSize: '10px', 
                        fontWeight: '600', 
                        backgroundColor: '#4b5563', 
                        color: '#d1d5db',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        <span style={{ marginRight: '4px' }}>✓</span>
                        Completed
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#9ca3af', 
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>
                      June 21 - July 5, 2025 • 14 days
                    </p>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', cursive",
                      lineHeight: '1.4'
                    }}>
                      The fifth event featuring hourly harvest challenges where players submit summer crops to earn Harvest Points. Brought back rewards from previous events.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Bizzy Bee Event */}
            <Link href="/grow-garden-Bizzy-Bee-Event" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: '#374151', 
                borderRadius: '12px', 
                padding: '16px', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4b5563'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#374151'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      backgroundColor: '#eab308', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      border: '2px solid #facc15'
                    }}>
                      🐝
                    </div>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        color: 'white',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        Bizzy Bee Event
                      </h3>
                      <span style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        padding: '4px 12px', 
                        borderRadius: '12px', 
                        fontSize: '10px', 
                        fontWeight: '600', 
                        backgroundColor: '#4b5563', 
                        color: '#d1d5db',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        <span style={{ marginRight: '4px' }}>✓</span>
                        Completed
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#9ca3af', 
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>
                      May 31 - June 21, 2025 • 21 days
                    </p>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', cursive",
                      lineHeight: '1.4'
                    }}>
                      The fourth event featuring Queen Bee NPC, honey collection system, bee swarm events, and Bizzy Bear crafting. Players collected pollinated plants for Honey currency.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Lunar Glow Event */}
            <Link href="/grow-garden-Lunar-Glow-Event" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: '#374151', 
                borderRadius: '12px', 
                padding: '16px', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4b5563'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#374151'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      backgroundColor: '#7c3aed', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      border: '2px solid #8b5cf6'
                    }}>
                      🌙
                    </div>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        color: 'white',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        Lunar Glow Event
                      </h3>
                      <span style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        padding: '4px 12px', 
                        borderRadius: '12px', 
                        fontSize: '10px', 
                        fontWeight: '600', 
                        backgroundColor: '#4b5563', 
                        color: '#d1d5db',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        <span style={{ marginRight: '4px' }}>✓</span>
                        Completed
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#9ca3af', 
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>
                      May 10 - May 31, 2025 • 21 days
                    </p>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', cursive",
                      lineHeight: '1.4'
                    }}>
                      The third event featuring Wise Old Owl NPC, night cycles, Lunar Points system, and exclusive Twilight and Blood Moon shops with unique rewards.
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Easter Event 2025 */}
            <Link href="/grow-garden-Easter-Event-2025" style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: '#374151', 
                borderRadius: '12px', 
                padding: '16px', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4b5563'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#374151'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ flexShrink: 0 }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      backgroundColor: '#ec4899', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      border: '2px solid #f472b6'
                    }}>
                      🐰
                    </div>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        color: 'white',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        Easter Event 2025
                      </h3>
                      <span style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        padding: '4px 12px', 
                        borderRadius: '12px', 
                        fontSize: '10px', 
                        fontWeight: '600', 
                        backgroundColor: '#4b5563', 
                        color: '#d1d5db',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        <span style={{ marginRight: '4px' }}>✓</span>
                        Completed
                      </span>
                    </div>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#9ca3af', 
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>
                      March 30 - April 27, 2025 • 28 days
                    </p>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', cursive",
                      lineHeight: '1.4'
                    }}>
                      The first event featuring Easter Bunny NPC, egg collection system, special Easter seeds, and exclusive rewards including the Chocolate Carrot.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </div>
  )
}