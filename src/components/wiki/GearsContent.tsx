'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { gears } from '@/data/gameData'
import { OptimizedImage } from '@/components/OptimizedImage'

export const GearsContent: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('All')

  const tiers = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Craftables']

  const filteredGears = selectedTier === 'All' 
    ? gears 
    : gears.filter(gear => gear.tier === selectedTier)

  const getTierBadgeColor = (tier: string) => {
    const colors = {
      'Common': 'bg-gray-600',
      'Uncommon': 'bg-green-600',
      'Rare': 'bg-blue-600',
      'Legendary': 'bg-purple-600',
      'Mythical': 'bg-pink-600',
      'Divine': 'bg-yellow-600',
      'Prismatic': 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'
    }
    return colors[tier as keyof typeof colors] || 'bg-gray-600'
  }

  const formatPrice = (price: any) => {
    if (price.sheckle) return `${price.sheckle.toLocaleString()} Sheckles`
    if (price.robux) return `${price.robux} Robux`
    if (price.honey) return `${price.honey} Honey`
    if (price.lunarPoint) return `${price.lunarPoint} Lunar Points`
    if (price.other) return price.other
    return 'Unknown'
  }

  const getTierColor = (tier: string) => {
    const colors = {
      'Common': '#d1d5db',
      'Uncommon': '#4ade80',
      'Rare': '#60a5fa',
      'Legendary': '#c084fc',
      'Mythical': '#f472b6',
      'Divine': '#facc15',
      'Prismatic': '#facc15' // fallback for prismatic
    }
    return colors[tier as keyof typeof colors] || '#d1d5db'
  }

  return (
    <>
      {/* What Are Gears Section */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          What Are Gears in Grow a Garden?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '12px' }}>
            Gears are essential tools and equipment that enhance your gardening experience in Grow a Garden. These items provide various benefits to help optimize your farming efficiency, from automatic watering systems to growth boosters and specialized farming tools.
          </p>
          <p style={{ marginBottom: '12px' }}>
            Each gear serves a specific purpose in your garden management. Whether you're looking to automate repetitive tasks like watering or maximize your crop yields with fertilizers, the right combination of gears can significantly improve your farming success and make your gardening journey much more enjoyable.
          </p>
          <p>
            Gears come in different rarities—<span style={{ color: '#d1d5db' }}>Common</span>, <span style={{ color: '#4ade80' }}>Uncommon</span>, <span style={{ color: '#60a5fa' }}>Rare</span>, <span style={{ color: '#c084fc' }}>Legendary</span>, <span style={{ color: '#f472b6' }}>Mythical</span>, <span style={{ color: '#facc15' }}>Divine</span>, and <span style={{ background: 'linear-gradient(to right, #f87171, #facc15, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Prismatic</span>. Higher tier gears offer better performance and more advanced features!
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ 
          fontSize: '12px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          All Gears in Grow a Garden
        </h3>
        <div style={{ position: 'relative' }}>
          <div style={{ overflowX: 'auto' }}>
            <div style={{ 
              display: 'flex', 
              gap: '4px', 
              paddingBottom: '4px', 
              minWidth: 'max-content', 
              borderBottom: '2px solid #4b5563'
            }}>
              {tiers.map(tier => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  style={{
                    padding: '12px 12px',
                    fontSize: '10px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    position: 'relative',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Press Start 2P', cursive",
                    color: selectedTier === tier ? '#fbbf24' : '#9ca3af',
                    fontWeight: selectedTier === tier ? '600' : 'normal'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTier !== tier) {
                      e.currentTarget.style.color = '#d1d5db'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTier !== tier) {
                      e.currentTarget.style.color = '#9ca3af'
                    }
                  }}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gears Table */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px 16px 16px 16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        {/* Desktop Table */}
        <div>
          <table style={{ width: '100%', textAlign: 'left', tableLayout: 'fixed' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #666d77' }}>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '10px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Image</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Name</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Description</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Price</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Rarity</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Obtainable</th>
              </tr>
            </thead>
            <tbody>
              {filteredGears.map((gear, index) => (
                <tr key={index} style={{ 
                  borderBottom: '1px solid #666d77',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(75, 85, 99, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}>
                  <td style={{ padding: '4px', textAlign: 'center' }}>
                    <OptimizedImage 
                      src={gear.image || '/gears/default.webp'} 
                      alt={gear.name} 
                      width={48}
                      height={48}
                      style={{ 
                        width: '32px', 
                        height: '32px', 
                        objectFit: 'contain', 
                        borderRadius: '4px', 
                        margin: '0 auto',
                        imageRendering: 'pixelated'
                      }}
                    />
                  </td>
                  <td style={{ 
                    padding: '4px', 
                    color: 'white', 
                    fontWeight: '600', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{gear.name}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{gear.description}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{formatPrice(gear.price)}</td>
                  <td style={{ 
                    padding: '4px', 
                    fontWeight: '600', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive",
                    color: getTierColor(gear.tier)
                  }}>{gear.tier}</td>
                  <td style={{ 
                    padding: '4px', 
                    fontWeight: '600', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    color: gear.obtainable ? '#4ade80' : '#f87171',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{gear.obtainable ? 'YES' : 'NO'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards - Hidden for now, showing table instead */}
        <div style={{ display: 'none' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px' 
          }}>
            {filteredGears.map((gear, index) => (
              <div key={index} style={{ 
                backgroundColor: '#4b5563', 
                borderRadius: '8px', 
                padding: '16px', 
                border: '2px solid #6b7280'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <OptimizedImage 
                    src={gear.image || '/gears/default.webp'} 
                    alt={gear.name} 
                    width={64}
                    height={64}
                    style={{ 
                      width: '64px', 
                      height: '64px', 
                      objectFit: 'contain', 
                      borderRadius: '8px', 
                      marginRight: '16px',
                      imageRendering: 'pixelated'
                    }}
                  />
                  <div>
                    <h3 style={{ 
                      color: 'white', 
                      fontWeight: '600', 
                      fontSize: '16px',
                      fontFamily: "'Press Start 2P', cursive",
                      marginBottom: '4px'
                    }}>{gear.name}</h3>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '12px',
                      color: getTierColor(gear.tier),
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{gear.tier}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Description:</span>
                    <span style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{gear.description}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Price:</span>
                    <span style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{formatPrice(gear.price)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Obtainable:</span>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '12px',
                      color: gear.obtainable ? '#4ade80' : '#f87171',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{gear.obtainable ? 'YES' : 'NO'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Types of Gears */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Types of Gears in Grow a Garden
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            Gears in Grow a Garden come in several categories, each designed to help you optimize different aspects of your farming experience:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Sprinklers:</strong> Automatic watering systems that keep your crops hydrated without manual intervention. Higher tier sprinklers cover larger areas and work more efficiently.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Fertilizers:</strong> Growth enhancers that boost crop development speed, allowing for faster harvests and increased productivity across your garden.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Tools:</strong> Specialized equipment for various farming tasks, from harvesting aids to soil preparation tools that make gardening easier.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Special Items:</strong> Unique gears with special abilities that provide rare bonuses or unlock new farming possibilities and strategies.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Gears Make Grow a Garden So Fun */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Why Gears Make Grow a Garden So Fun?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            Gears aren't just about making farming easier—they're about strategic optimization and creating the ultimate garden setup! With the right combination of gears, you can automate tedious tasks and focus on the fun parts like planting rare crops and designing your perfect garden layout.
          </p>
          <p style={{ marginBottom: '16px' }}>
            From basic sprinklers that keep your first crops watered to legendary fertilizers that supercharge your entire farm, there's always a new gear to unlock and experiment with. Plus, the satisfaction of watching your perfectly geared garden run like clockwork? Absolutely unbeatable!
          </p>
          <p style={{ 
            color: '#f5d954', 
            fontWeight: 'bold' 
          }}>
            So, what are you waiting for? Start collecting gears, experiment with different combinations, and build the most efficient garden in all of Grow a Garden!
          </p>
        </div>
      </div>

      {/* Back to Calculator */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '16px', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
            <Link 
              href="/" 
              style={{
                backgroundColor: '#22c55e',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontSize: '10px',
                fontFamily: "'Press Start 2P', cursive",
                border: 'none',
                textAlign: 'center',
                display: 'block',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#16a34a'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#22c55e'
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              ← Calculator
            </Link>
            <Link 
              href="/wiki" 
              style={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontSize: '10px',
                fontFamily: "'Press Start 2P', cursive",
                border: 'none',
                textAlign: 'center',
                display: 'block',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6'
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              ← Back to Wiki
            </Link>
        </div>
      </div>
    </>
  )
}