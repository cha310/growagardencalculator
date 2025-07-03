'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../components/OptimizedImage';

export const EasterEvent2025Page: React.FC = () => {
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
            Easter Event 2025
          </h1>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            marginBottom: '16px' 
          }}>
            Celebrated April 19 - April 27, 2025
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            maxWidth: '1000px', 
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            The Easter Event is a seasonal limited-time event packed with colorful rewards and unique gameplay features. During this event, players explore, farm, and trade special items to earn exclusive prizes through the Easter Shop.
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
                    The Easter Event is a seasonal limited-time event packed with colorful rewards and unique gameplay features. During this event, players would explore, farm, and trade in special items to earn exclusive prizes.
                  </p>
                  <p>
                    The Easter Shop is a special event-exclusive shop available only during the Easter Event. It offered a rotating selection of festive and powerful items.
                  </p>
                  <p>
                    Players could collect Easter Eggs and exchange them for exclusive rewards, including rare pets, decorative items, and special crops that were only available during this limited time.
                  </p>
                </div>
              </div>
            </div>

            {/* Shop Mechanics */}
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
                }}>Shop Mechanics</h2>
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
                    }}>Easter Shop</h3>
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
                      }}>• Limited-time exclusive shop</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Rotating selection of items</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Exchange Easter Eggs for rewards</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Special holiday-themed items</li>
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
                    }}>Easter Eggs</h3>
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
                      }}>• Primary event currency</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Obtained through farming activities</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Hidden throughout the garden</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Daily collection activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Easter Shop Items */}
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
                }}>Easter Shop Items</h2>
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
                  Special items available only during the Easter Event:
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
                        }}>Item</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px 4px', 
                          color: '#fde047'
                        }}>Cost</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px 4px', 
                          color: '#fde047'
                        }}>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Easter Egg Seed</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>50 Easter Eggs</td>
                        <td style={{ padding: '6px 4px', color: '#fbbf24' }}>Crop</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Bunny Pet</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>100 Easter Eggs</td>
                        <td style={{ padding: '6px 4px', color: '#a78bfa' }}>Pet</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Easter Decoration</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>25 Easter Eggs</td>
                        <td style={{ padding: '6px 4px', color: '#34d399' }}>Decoration</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #374151' }}>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Chocolate Sprinkler</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>200 Easter Eggs</td>
                        <td style={{ padding: '6px 4px', color: '#fb7185' }}>Tool</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>Golden Egg</td>
                        <td style={{ padding: '6px 4px', color: '#d1d5db' }}>500 Easter Eggs</td>
                        <td style={{ padding: '6px 4px', color: '#fbbf24' }}>Special</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Event Activities */}
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
                }}>Event Activities</h2>
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
                  Activities available during the Easter Event:
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
                    }}>Egg Hunting</h3>
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
                      }}>• Search for hidden Easter Eggs</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Daily respawn locations</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Special rare egg varieties</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Bonus rewards for collection</li>
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
                    }}>Special Farming</h3>
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
                      }}>• Plant Easter-themed crops</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Harvest for bonus Easter Eggs</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Chance for rare mutations</li>
                      <li style={{
                        color: '#d1d5db',
                        fontSize: '10px',
                        fontFamily: "'Press Start 2P', monospace",
                        letterSpacing: '0.5px',
                      }}>• Trading with other players</li>
                    </ul>
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
                    src="/events/Easter_shop.webp" 
                    alt="Easter Event 2025"
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
                    }}>April 19, 2025</span>
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
                    }}>April 27, 2025</span>
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
                    }}>8 days</span>
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
                    }}>Easter Eggs</span>
                  </div>
                  <div>
                    <span style={{ 
                      color: '#94a3b8', 
                      fontSize: '10px',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px',
                      marginRight: '8px'
                    }}>Shop:</span>
                    <span style={{ 
                      color: 'white', 
                      fontSize: '10px',
                      fontWeight: 'bold',
                      fontFamily: "'Press Start 2P', monospace",
                      letterSpacing: '0.5px'
                    }}>Easter Shop</span>
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
                    }}>1.10.5</span>
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
                  }}>• Easter Egg Collection</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Exclusive Easter Shop</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Limited-Time Items</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Easter-Themed Crops</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Special Pets & Decorations</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Bunny Pet Collection</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Garden Decoration Items</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Trading & Collection</li>
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
                      <strong>Spring Celebration!</strong> First major spring-themed event in the game.
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
                      <strong>Colorful Theme!</strong> Introduced vibrant Easter colors and decorations.
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
                      <strong>Short & Sweet!</strong> One of the shorter events but packed with content.
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
                  }}>• Check all garden corners for hidden eggs</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Prioritize rare items in Easter Shop</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Plant Easter Egg crops for bonus currency</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Save Golden Eggs for best rewards</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Trade with friends for variety</li>
                  <li style={{
                    color: '#d1d5db',
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    letterSpacing: '0.5px',
                  }}>• Check shop daily for new items</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-center space-x-4 mt-12 pt-6 border-t border-gray-700">
          <Link href="/events" className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors">
            ← Back to Events
          </Link>
          <Link href="/wiki" className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors">
            Explore Wiki →
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="text-left">
              <span>growagardencalculator.me</span>
              <br />
              <span className="text-xs">Free tool for Roblox players to track prices, optimize harvests, and maximize profit</span>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 font-bold">Quick Actions</span>
              <br />
              <Link href="/" className="text-xs hover:text-white">🏠 Home</Link> | 
              <Link href="/wiki" className="text-xs hover:text-white"> 📚 Wiki</Link>
            </div>
            <div className="text-right">
              <span className="text-yellow-400 font-bold">About</span>
              <br />
              <Link href="/privacy-policy" className="text-xs hover:text-white">Privacy Policy</Link>
              <br />
              <Link href="/terms-of-service" className="text-xs hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};