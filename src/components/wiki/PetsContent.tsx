'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { pets } from '@/data/gameData'
import { OptimizedImage } from '@/components/OptimizedImage'

export const PetsContent: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('All')

  const tiers = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic']

  const filteredPets = selectedTier === 'All' 
    ? pets 
    : pets.filter(pet => pet.tier === selectedTier)

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
      {/* What Are Pets Section */}
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
          What Are Pets in Grow a Garden?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '12px' }}>
            Grow a Garden pets are adorable and functional companions introduced in the popular Roblox farming game Grow a Garden, starting with the 1.04.0 update known as The Animal Update. These pets are much more than just cute additions to your farm—they actively support your gardening efforts by providing various in-game benefits and perks that enhance gameplay and crop management.
          </p>
          <p style={{ marginBottom: '12px' }}>
            In Grow a Garden, pets are collectible animals hatched from different types of eggs available in the Pet Egg stall. There are over 50 pets, currently in seven rarity tiers: <span style={{ color: '#d1d5db' }}>Common</span>, <span style={{ color: '#4ade80' }}>Uncommon</span>, <span style={{ color: '#60a5fa' }}>Rare</span>, <span style={{ color: '#c084fc' }}>Legendary</span>, <span style={{ color: '#f472b6' }}>Mythical</span>, <span style={{ color: '#facc15' }}>Divine</span>, and <span style={{ background: 'linear-gradient(to right, #f87171, #facc15, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Prismatic</span>.
          </p>
          <p>
            Each pet has unique abilities that help players grow their gardens more efficiently by speeding up crop growth, increasing harvest yields, generating free seeds, providing mutation chances, and even interacting with neighboring players' gardens.
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
          All Pets in Grow a Garden
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

      {/* Pets Table */}
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
                }}>Trait</th>
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
              {filteredPets.map((pet, index) => (
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
                      src={pet.image || '/pet/growagardencalculator.png'} 
                      alt={pet.name} 
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
                  }}>{pet.name}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{pet.trait}</td>
                  <td style={{ 
                    padding: '4px', 
                    fontWeight: '600', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive",
                    color: getTierColor(pet.tier)
                  }}>{pet.tier}</td>
                  <td style={{ 
                    padding: '4px', 
                    fontWeight: '600', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    color: pet.obtainable ? '#4ade80' : '#f87171',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{pet.obtainable ? 'YES' : 'NO'}</td>
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
            {filteredPets.map((pet, index) => (
              <div key={index} style={{ 
                backgroundColor: '#4b5563', 
                borderRadius: '8px', 
                padding: '16px', 
                border: '2px solid #6b7280'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <OptimizedImage 
                    src={pet.image || '/pet/growagardencalculator.png'} 
                    alt={pet.name} 
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
                    }}>{pet.name}</h3>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '12px',
                      color: getTierColor(pet.tier),
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{pet.tier}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Trait:</span>
                    <span style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{pet.trait}</span>
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
                      color: pet.obtainable ? '#4ade80' : '#f87171',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{pet.obtainable ? 'YES' : 'NO'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How Pets Work */}
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
          How Do Pets Work in Grow a Garden?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            Pets add a dynamic and engaging layer to Grow a Garden by making farming less monotonous and more strategic. They help players:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Pet Abilities:</strong> Each pet comes with a specific trait or skill. For example, some pets can dig up free seeds periodically, others boost the growth rate or size of nearby fruits, and some increase the chances of crop mutations.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Stacking Effects:</strong> Pet abilities stack, meaning having multiple pets with similar traits can amplify their benefits. For instance, owning several pets that increase mutation chances or crop growth speed will enhance those effects cumulatively.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Pet Slots:</strong> Players can equip up to eight pets simultaneously, allowing for a strategic combination of abilities to maximize garden productivity.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Garden Enhancement:</strong> Add charm and life to their gardens with their animations and behaviors, making farming more enjoyable and rewarding.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Why Pets Make Grow a Garden So Fun */}
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
          Why Pets Make Grow a Garden So Fun?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            Pets aren't just about boosting your farm's efficiency—they're about creating a more engaging and strategic gaming experience! With their unique abilities and adorable animations, pets transform your garden from a simple farming plot into a dynamic ecosystem.
          </p>
          <p style={{ marginBottom: '16px' }}>
            With over 50 pets to collect across seven rarity tiers, from Common companions to ultra-rare Prismatic creatures, there's always a new pet to discover. Plus, the thrill of hatching a legendary pet from an egg or seeing your pets work together to create the perfect garden setup? Absolutely unbeatable!
          </p>
          <p style={{ 
            color: '#f5d954', 
            fontWeight: 'bold' 
          }}>
            So, what are you waiting for? Start collecting pets, experiment with different combinations, and watch your garden flourish with the help of your adorable companions in Grow a Garden!
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