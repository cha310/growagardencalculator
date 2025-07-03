'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { eggs } from '@/data/gameData'
import { OptimizedImage } from '@/components/OptimizedImage'

export const EggsContent: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All')

  const eggTypes = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Event']

  const filteredEggs = selectedType === 'All' 
    ? eggs 
    : eggs.filter(egg => {
        // Extract rarity from egg name (e.g., "Common Egg" -> "Common")
        const eggRarity = egg.name.split(' ')[0]
        return eggRarity === selectedType
      })

  const getRarityBadgeColor = (rarity: string) => {
    const colors = {
      'Common': 'bg-gray-600',
      'Uncommon': 'bg-green-600',
      'Rare': 'bg-blue-600',
      'Legendary': 'bg-purple-600',
      'Event': 'bg-orange-600',
      'Mythical': 'bg-pink-600',
      'Divine': 'bg-yellow-600'
    }
    return colors[rarity as keyof typeof colors] || 'bg-gray-600'
  }

  const formatPrice = (price: any) => {
    const parts = []
    if (price.robux) parts.push(`${price.robux} Robux`)
    if (price.sheckle) parts.push(`${price.sheckle.toLocaleString()} Sheckles`)
    if (price.honey) parts.push(`${price.honey} Honey`)
    return parts.length > 0 ? parts.join(' / ') : 'Free'
  }

  const formatHatchTime = (hatchTime: any) => {
    if (hatchTime.premium) {
      return `Free: ${hatchTime.free} / Premium: ${hatchTime.premium}`
    }
    return hatchTime.free || hatchTime
  }

  const getRarityColor = (rarity: string) => {
    const colors = {
      'Common': '#d1d5db',
      'Uncommon': '#4ade80',
      'Rare': '#60a5fa',
      'Legendary': '#c084fc',
      'Mythical': '#f472b6',
      'Divine': '#facc15',
      'Event': '#f97316',
      'Prismatic': '#facc15' // fallback for prismatic
    }
    return colors[rarity as keyof typeof colors] || '#d1d5db'
  }

  return (
    <>
      {/* What Are Eggs Section */}
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
          What Are Eggs in Grow a Garden?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '12px' }}>
            Eggs are the primary way to obtain pets in Grow a Garden! Each egg type has a different price, hatch time, and pool of possible pets that you can collect. The rarer the egg, the more valuable and powerful the pets you can obtain from it.
          </p>
          <p style={{ marginBottom: '12px' }}>
            When you purchase an egg from the Pet Egg stall, it begins incubating and will hatch after the specified time period. You can speed up the hatching process using Robux or by watching advertisements. Once hatched, you'll receive a random pet from that egg's available pool—and the excitement of not knowing which pet you'll get is part of the fun!
          </p>
          <p>
            Eggs come in different rarities—<span style={{ color: '#d1d5db' }}>Common</span>, <span style={{ color: '#4ade80' }}>Uncommon</span>, <span style={{ color: '#60a5fa' }}>Rare</span>, <span style={{ color: '#c084fc' }}>Legendary</span>, <span style={{ color: '#f472b6' }}>Mythical</span>, <span style={{ color: '#facc15' }}>Divine</span>, and special <span style={{ color: '#f97316' }}>Event</span> eggs. Higher tier eggs cost more but give you a chance at incredibly powerful and rare pets!
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ 
          fontSize: '12px', 
          fontWeight: 'bold', 
          color: '#fffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          All Eggs in Grow a Garden
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
              {eggTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
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
                    color: selectedType === type ? '#fbbf24' : '#9ca3af',
                    fontWeight: selectedType === type ? '600' : 'normal'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedType !== type) {
                      e.currentTarget.style.color = '#d1d5db'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedType !== type) {
                      e.currentTarget.style.color = '#9ca3af'
                    }
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Eggs Table */}
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
                }}>Hatch Time</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Hatching Probabilities</th>
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
                }}>Available</th>
              </tr>
            </thead>
            <tbody>
              {filteredEggs.map((egg, index) => (
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
                      src={egg.image || '/eggs/default.webp'} 
                      alt={egg.name} 
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
                  }}>{egg.name}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{formatPrice(egg.price)}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{formatHatchTime(egg.hatchTime)}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>
                    <div style={{ maxWidth: '200px' }}>
                      {egg.probabilities?.slice(0, 2).map((prob: any, index: number) => (
                        <div key={index} style={{ marginBottom: '2px' }}>
                          {prob.pet}: {prob.chance}
                        </div>
                      ))}
                      {egg.probabilities?.length > 2 && <div>...</div>}
                    </div>
                  </td>
                  <td style={{ 
                    padding: '4px', 
                    fontWeight: '600', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive",
                    color: getRarityColor(egg.name.split(' ')[0])
                  }}>{egg.name.split(' ')[0]}</td>
                  <td style={{ 
                    padding: '4px', 
                    fontWeight: '600', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    color: '#4ade80',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>YES</td>
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
            {filteredEggs.map((egg, index) => (
              <div key={index} style={{ 
                backgroundColor: '#4b5563', 
                borderRadius: '8px', 
                padding: '16px', 
                border: '2px solid #6b7280'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <OptimizedImage 
                    src={egg.image || '/eggs/default.webp'} 
                    alt={egg.name} 
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
                    }}>{egg.name}</h3>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '12px',
                      color: getRarityColor(egg.name.split(' ')[0]),
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{egg.name.split(' ')[0]}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                    }}>{formatPrice(egg.price)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Hatch Time:</span>
                    <span style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{formatHatchTime(egg.hatchTime)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Available:</span>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '12px',
                      color: '#4ade80',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>YES</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Probabilities:</span>
                    <div style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>
                      {egg.probabilities?.slice(0, 2).map((prob: any, index: number) => (
                        <div key={index}>{prob.pet}: {prob.chance}</div>
                      ))}
                      {egg.probabilities?.length > 2 && <div>...</div>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How Eggs Work */}
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
          How Do Eggs Work in Grow a Garden?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            Getting pets from eggs is an exciting process that combines strategy with a bit of luck! Here's how the egg system works:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Purchase:</strong> Buy eggs from the Pet Egg stall using Sheckles or Robux depending on the egg type. Each egg has its own price point and rarity.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Incubation:</strong> Eggs automatically begin hatching once purchased. Hatch times vary by egg rarity—more valuable eggs take longer to hatch!</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Hatching:</strong> When the timer reaches zero, tap the egg to reveal your new pet companion!</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Speed Up:</strong> Use Robux or watch ads to instantly hatch eggs if you don't want to wait for the timer.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Eggs Make Grow a Garden So Fun */}
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
          Why Eggs Make Grow a Garden So Fun?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            Eggs aren't just about getting pets—they're about the thrill of the unknown! Every egg you hatch is like opening a surprise gift. Will you get a common companion or strike it lucky with a legendary creature? The anticipation makes every hatch exciting!
          </p>
          <p style={{ marginBottom: '16px' }}>
            With different egg types ranging from affordable Common eggs to premium Legendary ones, there's always a goal to work toward. Plus, special Event eggs give you chances at exclusive pets that aren't available anywhere else. Collecting them all becomes an addictive and rewarding challenge!
          </p>
          <p style={{ 
            color: '#f5d954', 
            fontWeight: 'bold' 
          }}>
            So, what are you waiting for? Start collecting eggs, build your perfect pet team, and experience the joy of hatching your way to pet mastery in Grow a Garden!
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