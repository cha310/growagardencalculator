'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { mutations } from '@/data/gameData'

export const MutationsContent: React.FC = () => {
  const [selectedMultiplier, setSelectedMultiplier] = useState('All')

  // 根据倍数分组mutations
  const multiplierGroups = ['All', '2x', '3x', '4x', '5x', '10x', '18x', '20x', '25x', '50x', '85x', '100x', '120x', '125x', '135x', '150x']

  const filteredMutations = selectedMultiplier === 'All' 
    ? mutations 
    : mutations.filter(mutation => {
        const multiplierStr = `${mutation.multiplier}x`
        return multiplierStr === selectedMultiplier
      })

  const getMultiplierColor = (multiplier: number) => {
    if (multiplier <= 2) return '#d1d5db'
    if (multiplier <= 5) return '#4ade80'
    if (multiplier <= 10) return '#60a5fa'
    if (multiplier <= 25) return '#c084fc'
    if (multiplier <= 50) return '#f472b6'
    if (multiplier <= 100) return '#facc15'
    return '#f87171'
  }

  return (
    <>
      {/* What Are Mutations Section */}
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
          What Are Mutations in Grow a Garden?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '12px' }}>
            Mutations are special variations of crops that can occur during growth, significantly increasing their value and changing their appearance! These rare transformations are triggered by various environmental factors and game mechanics, making them one of the most exciting aspects of farming in Grow a Garden.
          </p>
          <p style={{ marginBottom: '12px' }}>
            From modest 2x multipliers like Moonlit or Chilled fruits to electrifying 150x surge with Dawnbound mutations, the potential is wild! Each mutation has unique visual effects and specific triggers that create stunning crop variations.
          </p>
          <p>
            Mutations can stack together, meaning a single crop can have multiple mutations at once for incredible value multipliers! The combination of growth variants with environmental bonuses creates the key to massive profits in your garden.
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
          All Mutations in Grow a Garden
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
              {multiplierGroups.map(group => (
                <button
                  key={group}
                  onClick={() => setSelectedMultiplier(group)}
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
                    color: selectedMultiplier === group ? '#fbbf24' : '#9ca3af',
                    fontWeight: selectedMultiplier === group ? '600' : 'normal'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedMultiplier !== group) {
                      e.currentTarget.style.color = '#d1d5db'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedMultiplier !== group) {
                      e.currentTarget.style.color = '#9ca3af'
                    }
                  }}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mutations Table */}
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
                }}>Multiplier</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Stack Bonus</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Triggers & Appearance</th>
              </tr>
            </thead>
            <tbody>
              {filteredMutations.map((mutation, index) => (
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
                    <img 
                      src={mutation.image} 
                      alt={mutation.name} 
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
                  }}>{mutation.name}</td>
                  <td style={{ 
                    padding: '4px', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive",
                    color: getMultiplierColor(mutation.multiplier),
                    fontWeight: '600'
                  }}>x{mutation.multiplier}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive",
                    fontWeight: '600'
                  }}>{mutation.stackBonus > 0 ? `+${mutation.stackBonus}` : '-'}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{mutation.triggers}</td>
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
            {filteredMutations.map((mutation, index) => (
              <div key={index} style={{ 
                backgroundColor: '#4b5563', 
                borderRadius: '8px', 
                padding: '16px', 
                border: '2px solid #6b7280'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <img 
                    src={mutation.image} 
                    alt={mutation.name} 
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
                    }}>{mutation.name}</h3>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '12px',
                      color: getMultiplierColor(mutation.multiplier),
                      fontFamily: "'Press Start 2P', cursive"
                    }}>x{mutation.multiplier}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Stack Bonus:</span>
                    <span style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{mutation.stackBonus > 0 ? `+${mutation.stackBonus}` : '-'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Triggers:</span>
                    <span style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{mutation.triggers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Crop Value Calculation */}
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
          Crop Value Calculation
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            The total value of a mutated crop is determined using the following formula:
          </p>
          <div style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            borderRadius: '8px', 
            padding: '16px', 
            fontFamily: 'monospace', 
            color: '#facc15', 
            fontSize: '10px',
            marginBottom: '16px'
          }}>
            <div style={{ marginBottom: '8px' }}>Total Value = Minimum Value × Total Multiplier</div>
            <div style={{ marginBottom: '8px' }}>Total Multiplier = Growth Mutation × (1 + Sum of Environmental Stack Bonuses)</div>
            <div style={{ color: '#9ca3af', fontSize: '8px' }}>or</div>
            <div>Total Multiplier = Growth Mutation × (1 + Sum of Multipliers - Number of Mutations)</div>
          </div>
          <p style={{ marginBottom: '16px' }}>
            When the weight of the crop exceeds its minimum weight, the calculation formula becomes:
          </p>
          <div style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            borderRadius: '8px', 
            padding: '16px', 
            fontFamily: 'monospace', 
            color: '#facc15', 
            fontSize: '10px'
          }}>
            Total Value = k × Weight² × Total Multiplier
          </div>
        </div>
      </div>

      {/* Mutation Constraints */}
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
          Mutation Constraints & Tips
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            Understanding mutation constraints and stacking rules is crucial for maximizing your crop values:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#facc15', marginRight: '8px', marginTop: '2px' }}>•</span>
              <span>Only one of Gold or Rainbow mutations can be applied to a crop.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#facc15', marginRight: '8px', marginTop: '2px' }}>•</span>
              <span>Only one of Chilled, Wet, or Frozen mutations can be applied to a crop.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#facc15', marginRight: '8px', marginTop: '2px' }}>•</span>
              <span>The "Dawnbound mutation" can only be obtained on sunflower.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#facc15', marginRight: '8px', marginTop: '2px' }}>•</span>
              <span>Only one of Cooked or Burnt mutations can be applied to a crop.</span>
            </li>
            <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: '#4ade80', marginRight: '8px', marginTop: '2px' }}>✓</span>
              <span><strong style={{ color: 'white' }}>Stack Bonus Formula:</strong> Growth Mutation × (1 + Sum of Environmental Stack Bonuses)</span>
            </li>
          </ul>
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