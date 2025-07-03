'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../components/OptimizedImage';

export const BizzyBeeEventPage: React.FC = () => {
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
            Bizzy Bee Event
          </h1>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            marginBottom: '16px' 
          }}>
            Celebrated May 31 - June 21, 2025
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            maxWidth: '1000px', 
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            The fourth event in Grow a Garden featuring the Queen Bee NPC, honey collection system, bee swarm events, and Bizzy Bear crafting. Players collected pollinated plants to earn Honey currency for exclusive rewards.
          </p>
        </div>

        {/* Two Column Layout - 70% Left, 30% Right */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '7fr 3fr', 
          gap: '24px',
          marginTop: '32px'
        }}>
          
          {/* Left Column - 70% */}
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
                    The Bizzy Bee Event was a limited-time event with new features, limited-time NPCs, and rewards. This event was the fourth event added to Grow a Garden and introduced the innovative honey collection system.
                  </p>
                  <p>
                    The Queen Bee tasked users with collecting Pollinated plants in exchange for Honey currency. Players could deposit at least 10kg of these plants into the Honey Compressor operated by the "Onett" NPC to earn rewards.
                  </p>
                  <p>
                    The event featured hourly Bee Swarm Events lasting 10 minutes, where the Queen Bee sent swarms of bees to pollinate random plants every 30 seconds. There was also a Working Bee Swarm variant with multi-colored, hard-hat wearing bees.
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
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Honey System</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '6px' }}>• Collect Pollinated plants for Queen Bee</li>
                      <li style={{ marginBottom: '6px' }}>• Deposit 10kg+ into Honey Compressor</li>
                      <li style={{ marginBottom: '6px' }}>• Earn 10 Honey after 30 seconds</li>
                      <li style={{ marginBottom: '6px' }}>• Shop restocks every 30 minutes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Bee Swarm Events</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '6px' }}>• Hourly events lasting 10 minutes</li>
                      <li style={{ marginBottom: '6px' }}>• Bees pollinate plants every 30 seconds</li>
                      <li style={{ marginBottom: '6px' }}>• Working Bee Swarm (1/3 chance)</li>
                      <li style={{ marginBottom: '6px' }}>• 3x pollination with hard-hat bees</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#fbbf24',
                    marginBottom: '8px',
                    fontFamily: "'Press Start 2P', monospace"
                  }}>Bizzy Bear Crafting</h3>
                  <p style={{
                    fontSize: '9px',
                    color: '#d1d5db',
                    fontFamily: "'Press Start 2P', monospace",
                    lineHeight: '1.5',
                    marginBottom: '8px'
                  }}>
                    Players could select which seed or item to craft using unique recipes. Each recipe had specific requirements and designated craft times.
                  </p>
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    fontSize: '9px',
                    color: '#d1d5db',
                    fontFamily: "'Press Start 2P', monospace",
                    lineHeight: '1.5'
                  }}>
                    <li style={{ marginBottom: '6px' }}>• Craft sprinklers, mutation sprays, and special items</li>
                    <li style={{ marginBottom: '6px' }}>• Working Bee Swarm increases craft speed by 10x</li>
                    <li style={{ marginBottom: '6px' }}>• Replaced previous quest system in Part 3</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Honey Shop */}
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
                }}>Honey Shop</h2>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <p style={{
                  fontSize: '10px',
                  color: '#d1d5db',
                  fontFamily: "'Press Start 2P', monospace",
                  lineHeight: '1.5',
                  marginBottom: '16px'
                }}>
                  The Queen Bee's exclusive shop offering bee-themed items, seeds, and cosmetics for Honey currency:
                </p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '9px',
                    fontFamily: "'Press Start 2P', monospace"
                  }}>
                    <thead>
                      <tr>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Item Name</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Honey Cost</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Robux Price</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: '#d1d5db' }}>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Flower Seed Pack</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>10</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>199</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Lavender Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>3</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>99</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Nectarshade Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>5</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>139</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Nectarine Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>25</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>399</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Hive Fruit Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>40</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>599</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Pollen Radar</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>20</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>249</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Nectar Staff</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>25</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>219</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Honey Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>30</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>199</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Bee Egg</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>18</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>129</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px' }}>Bee Crate</td>
                        <td style={{ padding: '6px 8px' }}>12</td>
                        <td style={{ padding: '6px 8px' }}>179</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p style={{
                  fontSize: '8px',
                  color: '#9ca3af',
                  fontFamily: "'Press Start 2P', monospace",
                  marginTop: '8px'
                }}>
                  * Additional cosmetic items available: Honey Comb, Bee Chair, Honey Torch, Honey Walkway
                </p>
              </div>
            </div>

            {/* Crafting Recipes */}
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
                }}>Crafting Recipes</h2>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <p style={{
                  fontSize: '10px',
                  color: '#d1d5db',
                  fontFamily: "'Press Start 2P', monospace",
                  lineHeight: '1.5',
                  marginBottom: '16px'
                }}>
                  Bizzy Bear crafting station offered various gear and item recipes:
                </p>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '9px',
                    fontFamily: "'Press Start 2P', monospace"
                  }}>
                    <thead>
                      <tr>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Item</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Recipe Requirements</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Craft Time</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: '#d1d5db' }}>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Tropical Mist Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Coconut + Dragon Fruit + Mango + Godly Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>1 hour</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Berry Blusher Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Grape + Blueberry + Strawberry + Godly Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>1 hour</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Sweet Soaker Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>3x Watermelon + Master Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>1 hour</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Flower Froster Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Orange Tulip + Daffodil + Advanced + Basic Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>1 hour</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px' }}>Mutation Spray Choc</td>
                        <td style={{ padding: '6px 8px' }}>Cleaning Spray + Cacao + Chocolate Carrot</td>
                        <td style={{ padding: '6px 8px' }}>30 minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 30% */}
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
                padding: '12px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#fde047',
                  letterSpacing: '0.5px',
                  textAlign: 'left',
                  fontFamily: "'Press Start 2P', monospace",
                  margin: 0
                }}>Event Details</h3>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 12px',
              }}>
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  <OptimizedImage 
                    src="/events/Bizzy_Bee_Event.webp" 
                    alt="Bizzy Bee Event"
                    width={96}
                    height={96}
                    style={{ 
                      width: '96px', 
                      height: '96px', 
                      objectFit: 'cover', 
                      borderRadius: '8px',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <div style={{
                  fontSize: '9px',
                  fontFamily: "'Press Start 2P', monospace",
                  lineHeight: '1.5'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>Start Date:</span>
                    <span style={{ color: 'white' }}>May 31, 2025</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>End Date:</span>
                    <span style={{ color: 'white' }}>June 21, 2025</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>Duration:</span>
                    <span style={{ color: 'white' }}>21 days</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>Status:</span>
                    <span style={{ 
                      color: '#9ca3af',
                      backgroundColor: '#4b5563',
                      padding: '2px 6px',
                      borderRadius: '12px',
                      fontSize: '8px'
                    }}>✓ Completed</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>Currency:</span>
                    <span style={{ color: 'white' }}>Honey</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>NPCs:</span>
                    <span style={{ color: 'white' }}>Queen Bee, Onett</span>
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
                padding: '12px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h3 style={{
                  fontSize: '14px',
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
                padding: '16px 12px',
              }}>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  fontSize: '9px',
                  color: '#d1d5db',
                  fontFamily: "'Press Start 2P', monospace",
                  lineHeight: '1.5'
                }}>
                  <li style={{ marginBottom: '6px' }}>• Honey Collection System</li>
                  <li style={{ marginBottom: '6px' }}>• Hourly Bee Swarm Events</li>
                  <li style={{ marginBottom: '6px' }}>• Working Bee Swarm (1/3 chance)</li>
                  <li style={{ marginBottom: '6px' }}>• Bizzy Bear Crafting System</li>
                  <li style={{ marginBottom: '6px' }}>• Pollinated Plant Mutations</li>
                  <li>• Honey Compressor Machine</li>
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
                padding: '12px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h3 style={{
                  fontSize: '14px',
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
                padding: '16px 12px',
              }}>
                <div style={{ 
                  fontSize: '8px',
                  color: '#d1d5db',
                  fontFamily: "'Press Start 2P', monospace",
                  lineHeight: '1.4'
                }}>
                  <div style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid #3b82f6',
                    borderRadius: '8px',
                    padding: '8px',
                    marginBottom: '8px'
                  }}>
                    <p style={{ color: '#93c5fd', margin: 0 }}>
                      <strong>Fourth Event:</strong> This was the fourth event added to Grow a Garden.
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid #22c55e',
                    borderRadius: '8px',
                    padding: '8px',
                    marginBottom: '8px'
                  }}>
                    <p style={{ color: '#86efac', margin: 0 }}>
                      <strong>Onett NPC:</strong> The Honey Compressor operator is Onett, creator of Bee Swarm Simulator.
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(147, 51, 234, 0.1)',
                    border: '1px solid #9333ea',
                    borderRadius: '8px',
                    padding: '8px'
                  }}>
                    <p style={{ color: '#c4b5fd', margin: 0 }}>
                      <strong>Most Crops:</strong> This event added the most event crops to the game.
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
                padding: '12px 12px',
                borderBottom: '2px solid #202938'
              }}>
                <h3 style={{
                  fontSize: '14px',
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
                padding: '16px 12px',
              }}>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  fontSize: '8px',
                  color: '#d1d5db',
                  fontFamily: "'Press Start 2P', monospace",
                  lineHeight: '1.4'
                }}>
                  <li style={{ marginBottom: '6px' }}>• Deposit 10kg+ pollinated plants for honey</li>
                  <li style={{ marginBottom: '6px' }}>• Shop restocks every 30 minutes</li>
                  <li style={{ marginBottom: '6px' }}>• Working Bee Swarm boosts craft speed 10x</li>
                  <li style={{ marginBottom: '6px' }}>• Bee swarms occur hourly for 10 minutes</li>
                  <li>• Pollinated texture resembles gold with particles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};