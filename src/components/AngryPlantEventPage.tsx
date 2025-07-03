'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../components/OptimizedImage';

export const AngryPlantEventPage: React.FC = () => {
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
            Angry Plant Event
          </h1>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            marginBottom: '16px' 
          }}>
            Celebrated April 27 - May 9, 2025
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            maxWidth: '1000px', 
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            The second event in Grow a Garden featuring Jim, an animated Venus Flytrap NPC. Players completed quests by bringing specific crops to earn Basic and Premium Seed Packs.
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
                    The Angry Plant Event was released on April 27th, 2025, and ended on May 9th, 2025. This event was the second ever event to be released in-game.
                  </p>
                  <p>
                    This event featured an animated plant NPC whose name was Jim, with a design that was somewhat similar to the real-life Venus Flytrap plant. Players were able to receive quests from Jim, which involved bringing him a specific type of crop that also needed to be a specified size.
                  </p>
                  <p>
                    By completing Jim's quests, players filled a progress bar, which required a maximum of 50 quests to complete. Players were rewarded with one Basic Seed Pack per quest they completed, and one Premium Seed Pack upon completion of 50 quests.
                  </p>
                </div>
              </div>
            </div>

            {/* Quest Mechanics */}
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
                }}>Quest Mechanics</h2>
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
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Jim's Requests</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '6px' }}>• Specific crop type required</li>
                      <li style={{ marginBottom: '6px' }}>• Minimum weight requirement</li>
                      <li style={{ marginBottom: '6px' }}>• Sometimes specific mutation needed</li>
                      <li style={{ marginBottom: '6px' }}>• Total of 50 quests to complete</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Rewards</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '6px' }}>• 1 Basic Seed Pack per quest</li>
                      <li style={{ marginBottom: '6px' }}>• 1 Premium Seed Pack for completing 50 quests</li>
                      <li style={{ marginBottom: '6px' }}>• Progress bar tracking completion</li>
                      <li style={{ marginBottom: '6px' }}>• Jim eats crops and spits out rewards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Quest Items */}
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
                }}>Sample Quest Items</h2>
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
                  Jim requested specific crops with exact weight requirements. Here are some example quests:
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
                        }}>Quest #</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Crop</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Weight</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Mutation</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: '#d1d5db' }}>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>1</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Tomato</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>0.5kg</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Normal</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>2</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Strawberry</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>0.3kg</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Normal</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>11</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Carrot</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>0.2kg</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Wet</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>27</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Tomato</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>0.55kg</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Chilled</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>43</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Tomato</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>0.6kg</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Frozen</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>49</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Grape</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>3.3kg</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Shocked</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px' }}>50</td>
                        <td style={{ padding: '6px 8px' }}>Mushroom</td>
                        <td style={{ padding: '6px 8px' }}>25kg</td>
                        <td style={{ padding: '6px 8px' }}>Normal</td>
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
                  * Complete list includes 50 quests with various mutations: Normal, Wet, Chilled, Frozen, and Shocked
                </p>
              </div>
            </div>

            {/* Jim's Dialogue */}
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
                }}>Jim's Dialogue Options</h2>
              </div>
              
              {/* Content */}
              <div style={{
                padding: '16px 16px',
              }}>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div style={{
                    backgroundColor: 'rgba(75, 85, 99, 0.5)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <h3 style={{
                      color: '#fbbf24',
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      marginBottom: '6px'
                    }}>"What are you?"</h3>
                    <p style={{
                      color: '#d1d5db',
                      fontSize: '9px',
                      fontFamily: "'Press Start 2P', monospace",
                      fontStyle: 'italic',
                      lineHeight: '1.4'
                    }}>Information about Jim's nature and purpose</p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(75, 85, 99, 0.5)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <h3 style={{
                      color: '#fbbf24',
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      marginBottom: '6px'
                    }}>"Show me Seed Pack Info"</h3>
                    <p style={{
                      color: '#d1d5db',
                      fontSize: '9px',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.4'
                    }}>Shows quest progress bar and seed pack information</p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(75, 85, 99, 0.5)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <h3 style={{
                      color: '#fbbf24',
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      marginBottom: '6px'
                    }}>"Take this Plant!"</h3>
                    <p style={{
                      color: '#d1d5db',
                      fontSize: '9px',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.4',
                      marginBottom: '4px'
                    }}>Give crops to Jim - he eats them and spits out Basic Seed Packs</p>
                    <p style={{
                      color: '#9ca3af',
                      fontSize: '8px',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.3'
                    }}>Note: Must be holding the correct crop when selecting this option</p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(75, 85, 99, 0.5)',
                    borderRadius: '8px',
                    padding: '12px'
                  }}>
                    <h3 style={{
                      color: '#fbbf24',
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      marginBottom: '6px'
                    }}>"Let's be friends"</h3>
                    <div style={{
                      color: '#d1d5db',
                      fontSize: '9px',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.4',
                      marginBottom: '6px'
                    }}>
                      <p style={{ margin: '0 0 4px 0' }}><strong>Jim:</strong> "FRIEND???🔥😡"</p>
                      <p style={{ margin: '0 0 4px 0' }}><strong>Jim:</strong> "frend... with me?? 🥺🥺🥺"</p>
                      <p style={{ margin: '0' }}><strong>Jim:</strong> "angry plant always wanted frens... :)"</p>
                    </div>
                    <p style={{
                      color: '#9ca3af',
                      fontSize: '8px',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.3'
                    }}>* This option was added in the last week of the event</p>
                  </div>
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
                    src="/events/Angry_plant.webp" 
                    alt="Angry Plant Event - Jim"
                    width={120}
                    height={120}
                    style={{ 
                      width: '120px', 
                      height: '120px', 
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
                    <span style={{ color: 'white' }}>April 27, 2025</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>End Date:</span>
                    <span style={{ color: 'white' }}>May 9, 2025</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>Duration:</span>
                    <span style={{ color: 'white' }}>12 days</span>
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
                    <span style={{ color: 'white' }}>Sheckles</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>NPC:</span>
                    <span style={{ color: 'white' }}>Jim (Venus Flytrap)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quest Progress */}
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
                }}>Quest Progress</h3>
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
                  <li style={{ marginBottom: '6px' }}>• 50 total quests to complete</li>
                  <li style={{ marginBottom: '6px' }}>• Progress bar tracks completion</li>
                  <li style={{ marginBottom: '6px' }}>• 1 Basic Seed Pack per quest</li>
                  <li>• 1 Premium Seed Pack at completion</li>
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
                      <strong>Second Event:</strong> This was the second ever event released in Grow a Garden.
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
                      <strong>Jim's Design:</strong> Jim is a Venus Flytrap with an animated design.
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    border: '1px solid #dc2626',
                    borderRadius: '8px',
                    padding: '8px'
                  }}>
                    <p style={{ color: '#fca5a5', margin: 0 }}>
                      <strong>Head Bug:</strong> There was a bug where Jim's head wouldn't appear on his body.
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
                  <li style={{ marginBottom: '6px' }}>• Must hold correct crop when offering to Jim</li>
                  <li style={{ marginBottom: '6px' }}>• Check weight and mutation requirements</li>
                  <li style={{ marginBottom: '6px' }}>• Complete all 50 quests for Premium Seed Pack</li>
                  <li style={{ marginBottom: '6px' }}>• Friendship option added in final week</li>
                  <li>• Some bugs existed with quest completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};