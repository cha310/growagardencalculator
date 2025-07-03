'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../components/OptimizedImage';

export const SummerHarvestEventPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-mono">
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '16px 12px' }}>
        
        {/* Header - Centered */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#fde046', 
            marginBottom: '16px' 
          }}>
            Summer Harvest Event
          </h1>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            marginBottom: '16px' 
          }}>
            Celebrated June 21 - July 5, 2025
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            maxWidth: '1000px', 
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            The fifth event featuring hourly harvest challenges where players submit summer crops to earn Harvest Points. This event brought back rewards from previous events and introduced many new summer-themed items.
          </p>
        </div>

        {/* Two Column Layout - 60% Left, 40% Right */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '7fr 3fr', 
          gap: '24px',
          marginTop: '32px'
        }}>
          
          {/* Left Column - 60% */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Event Overview */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Event Overview</h2>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <div style={{ 
                  display: 'grid', 
                  gap: '12px',
                  color: '#d1d5db',
                  fontSize: '10px',
                  fontFamily: "'Press Start 2P', monospace",
                  letterSpacing: '0.5px',
                  lineHeight: '1.6'
                }}>
                  <p>
                    The Summer Harvest Event was a seasonal event introduced in Update 1.11.0 that featured a complete overhaul of the Seed Shop with summer-themed plants and introduced a new activity where players submit summer crops every hour to earn Harvest Points.
                  </p>
                  <p>
                    Every hour, players had 10 minutes to submit Summer Crops to Georgia's cart to gain Harvest Points. Rewards were awarded based on the number of points garnered, with rewards being the same for everyone on all servers who reached the same tier.
                  </p>
                  <p>
                    This event was unique as it brought back rewards from past events like the Lunar Glow Event and Bizzy Bee Event, making it the only event to feature previous event items as rewards.
                  </p>
                </div>
              </div>
            </div>

            {/* Event Mechanics */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Event Mechanics</h2>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fde047',
                      letterSpacing: '0.5px',
                      fontFamily: "'Press Start 2P', monospace",
                      marginBottom: '12px'
                    }}>Harvest System</h3>
                    <ul style={{ 
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gap: '8px'
                    }}>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Hourly 10-minute harvest windows</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Submit summer crops to Georgia's cart</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Earn Harvest Points based on crop rarity</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Same rewards for all players at same tier</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fde047',
                      letterSpacing: '0.5px',
                      fontFamily: "'Press Start 2P', monospace",
                      marginBottom: '12px'
                    }}>Point Bonuses</h3>
                    <ul style={{ 
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gap: '8px'
                    }}>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Gold Mutation: +2 points</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Rainbow Mutation: +3 points</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Must submit at least 1 fruit to participate</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Seed Shop & Summer Seed Pack crops eligible</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Summer Crops Point Values */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Summer Crops Point Values</h2>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <p style={{ 
                  color: '#d1d5db',
                  fontSize: '10px',
                  fontFamily: "'Press Start 2P', monospace",
                  letterSpacing: '0.5px',
                  marginBottom: '12px'
                }}>
                  Different crops provide different amounts of Harvest Points based on their rarity:
                </p>
                
                <div className="overflow-x-auto">
                  <table style={{
                    width: '100%',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    borderCollapse: 'separate',
                    borderSpacing: '0'
                  }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #4b5563' }}>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px 4px', 
                          color: '#fde047'
                        }}>Rarity</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px 4px', 
                          color: '#fde047'
                        }}>Points</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px 4px', 
                          color: '#fde047'
                        }}>Example Crops</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#9ca3af' }}>Common</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>1</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Carrot, Strawberry</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#4ade80' }}>Uncommon</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>2</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Blueberry, Wild Carrot</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#60a5fa' }}>Rare</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>3</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Pear, Tomato, Cauliflower</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#fde047' }}>Legendary</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>4</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Cantaloupe, Watermelon, Green Apple, Avocado</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#c084fc' }}>Mythical</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>5</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Pineapple, Kiwi, Bell Pepper, Prickly Pear</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#f472b6' }}>Divine</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>6</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Rosy Delight, Loquat, Feijoa</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 4px', color: '#67e8f9' }}>Prismatic</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>7</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Sugar Apple, Elephant Ears</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Reward Tiers */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Reward Tiers</h2>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <p style={{ 
                  color: '#d1d5db',
                  fontSize: '10px',
                  fontFamily: "'Press Start 2P', monospace",
                  letterSpacing: '0.5px',
                  marginBottom: '12px'
                }}>
                  Harvest Points required to unlock each reward tier:
                </p>
                
                <div className="overflow-x-auto">
                  <table style={{
                    width: '100%',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    borderCollapse: 'separate',
                    borderSpacing: '0'
                  }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #4b5563' }}>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px 4px', 
                          color: '#fde047'
                        }}>Reward Tier</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px 4px', 
                          color: '#fde047'
                        }}>Required Points</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px 4px', 
                          color: '#fde047'
                        }}>Notable Rewards</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#9ca3af' }}>Common</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>10</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Watering Can, Honey</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#4ade80' }}>Uncommon</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>500</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Basic Sprinkler, Fun Crate, Sheckles</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#60a5fa' }}>Rare</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>2,000</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Flower Seed Pack, Twilight Crate</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#fde047' }}>Legendary</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>5,000</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Reclaimer, Night Egg, Blood Banana Seed</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#c084fc' }}>Mythical</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>8,500</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Summer Fun Crate, Chocolate Sprinkler</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#f472b6' }}>Divine</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>11,000</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Moon Cat, Easter Egg Seed</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 4px', color: '#67e8f9' }}>Prismatic</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>14,000</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Ember Lily Seed (1% chance)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* New Weather Events & Mutations */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h2 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>New Weather Events & Mutations</h2>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <p style={{ 
                  color: '#d1d5db',
                  fontSize: '10px',
                  fontFamily: "'Press Start 2P', monospace",
                  letterSpacing: '0.5px',
                  marginBottom: '12px'
                }}>
                  The Summer Update introduced new weather events and powerful mutations:
                </p>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fde047',
                      letterSpacing: '0.5px',
                      fontFamily: "'Press Start 2P', monospace",
                      marginBottom: '12px'
                    }}>Weather Events</h3>
                    <ul style={{ 
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gap: '8px'
                    }}>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Heat Wave: Causes Sundried mutation</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Gale: Powerful wind, causes Windstruck</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Windy: Light wind, causes Windstruck</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Tornado: Multiple tornados, causes Twisted</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fde047',
                      letterSpacing: '0.5px',
                      fontFamily: "'Press Start 2P', monospace",
                      marginBottom: '12px'
                    }}>New Mutations</h3>
                    <ul style={{ 
                      listStyleType: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'grid',
                      gap: '8px'
                    }}>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Windstruck: 2x multiplier</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Twisted: 5x multiplier</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Sundried: 85x multiplier</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Verdant: 4x multiplier (Scarlet Macaw)</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Paradisal: 18x multiplier (Sundried + Verdant)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Event Details */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Event Details</h3>
              </div>
              
              {/* Image container */}
              <div style={{
                padding: '12px',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#202938',
                borderBottom: '2px solid #202938'
              }}>
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  border: '3px solid #334155'
                }}>
                  <OptimizedImage 
                    src="/events/Summer_Harvest_Almost_Filled.webp" 
                    alt="Summer Harvest Event"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Details content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <div style={{ display: 'grid', gap: '8px' }}>
                  <div>
                    <span style={{ 
                      color: '#94a3b8', 
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      marginRight: '2px'
                    }}>Start Date:</span>
                    <span style={{ 
                      color: 'white', 
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px'
                    }}>June 21, 2025</span>
                  </div>
                  <div>
                    <span style={{ 
                      color: '#94a3b8', 
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      marginRight: '8px'
                    }}>End Date:</span>
                    <span style={{ 
                      color: 'white', 
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px'
                    }}>July 5, 2025</span>
                  </div>
                  <div>
                    <span style={{ 
                      color: '#94a3b8', 
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      marginRight: '8px'
                    }}>Duration:</span>
                    <span style={{ 
                      color: 'white', 
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px'
                    }}>14 days</span>
                  </div>
                  <div>
                    <span style={{ 
                      color: '#94a3b8', 
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      marginRight: '2px'
                    }}>Status:</span>
                    <span style={{ 
                      backgroundColor: '#1e293b',
                      color: '#d1d5db', 
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      padding: '3px 12px',
                      borderRadius: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      border: '1px solid #374151'
                    }}>
                      <span style={{ color: '#22c55e', marginRight: '4px' }}>✓</span>
                      Completed
                    </span>
                  </div>
                  <div>
                    <span style={{ 
                      color: '#94a3b8', 
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      marginRight: '8px'
                    }}>Currency:</span>
                    <span style={{ 
                      color: 'white', 
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px'
                    }}>Harvest Points</span>
                  </div>
                  <div>
                    <span style={{ 
                      color: '#94a3b8', 
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      marginRight: '8px'
                    }}>NPC:</span>
                    <span style={{ 
                      color: 'white', 
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px'
                    }}>Georgia</span>
                  </div>
                  <div>
                    <span style={{ 
                      color: '#94a3b8', 
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      marginRight: '8px'
                    }}>Update:</span>
                    <span style={{ 
                      color: 'white', 
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px'
                    }}>1.11.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Features */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Event Features</h3>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '8px'
                }}>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Hourly Harvest Challenges</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Harvest Points System</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Past Event Items Return</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• 16 New Summer Crops</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• 8+ New Summer Pets</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• New Weather Events</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• 20+ Summer Cosmetics</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Permanent Crafting System</li>
                </ul>
              </div>
            </div>

            {/* Event Trivia */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Event Trivia</h3>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div style={{
                    backgroundColor: 'rgba(29, 78, 216, 0.2)',
                    border: '1px solid #2563eb',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <p style={{
                      color: '#93c5fd',
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      margin: 0
                    }}>
                      <strong>First Return Event!</strong> Only event to bring back rewards from previous events.
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(22, 163, 74, 0.2)',
                    border: '1px solid #16a34a',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <p style={{
                      color: '#86efac',
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      margin: 0
                    }}>
                      <strong>Major Update!</strong> Introduced in Update 1.11.0 with massive content additions.
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(147, 51, 234, 0.2)',
                    border: '1px solid #9333ea',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <p style={{
                      color: '#d8b4fe',
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      margin: 0
                    }}>
                      <strong>Tomato Strategy!</strong> Most effective strategy was hoarding tomatoes for quick collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Tips */}
            <div style={{ 
              border: '2px solid #2c602e',
              borderRadius: '12px', 
              padding: '0',
              backgroundColor: '#202938',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              position: 'relative',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
            }}
            >
              {/* Header with background */}
              <div style={{
                backgroundColor: '#202938',
                padding: '16px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Event Tips</h3>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <ul style={{ 
                  listStyleType: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gap: '8px'
                }}>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Submit 1 fruit first to participate</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Tomatoes are most efficient for collection</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Gold/Rainbow mutations add bonus points</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Use Garden Teleport for faster travel</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Plant crops in compressed areas for easier collection</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• 11,000 points sufficient for most valuable rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};