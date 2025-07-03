'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../components/OptimizedImage';

export const BloodMoonEventPage: React.FC = () => {
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
            Blood Moon Event
          </h1>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            marginBottom: '16px' 
          }}>
            Celebrated May 17 - May 31, 2025
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            maxWidth: '1000px', 
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            The Blood Moon Event was part of the Lunar Glow Event, featuring the exclusive Blood Moon Shop and special Bloodlit mutations. Players could farm Bloodlit fruits during Blood Moon cycles to earn exclusive rewards.
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
                    The Blood Moon Event was part of the Lunar Glow Event that was added on May 17, 2025. This event featured the Blood Moon Shop and Blood Moon time alongside with Meteor Showers.
                  </p>
                  <p>
                    During this event, players could explore and farm Bloodlit Fruits to earn exclusive plant mutations. The Blood Moon had a 33% chance of spawning instead of a normal night, meaning it took an average of 3 hours or every three nights for a blood moon to spawn.
                  </p>
                  <p>
                    The Blood Moon period lasted 15 minutes compared to the normal 10-minute night cycle, giving players more time to collect valuable Bloodlit crops and access the exclusive shop.
                  </p>
                </div>
              </div>
            </div>

            {/* Blood Moon Mechanics */}
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
                }}>Blood Moon Mechanics</h2>
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
                    }}>Blood Moon Spawning</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '6px' }}>• 33% chance to spawn instead of normal night</li>
                      <li style={{ marginBottom: '6px' }}>• Average of 3 hours between Blood Moons</li>
                      <li style={{ marginBottom: '6px' }}>• Lasts 15 minutes (vs 10 for normal Night)</li>
                      <li style={{ marginBottom: '6px' }}>• Exclusive Blood Moon Shop appears</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Bloodlit Mutations</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '6px' }}>• Crops have chance to turn Bloodlit (4x value)</li>
                      <li style={{ marginBottom: '6px' }}>• Night Staff can force Bloodlit mutation</li>
                      <li style={{ marginBottom: '6px' }}>• Higher Lunar Points than Moonlit crops</li>
                      <li style={{ marginBottom: '6px' }}>• Exclusive to Blood Moon periods</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Blood Moon Shop */}
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
                }}>Blood Moon Shop</h2>
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
                  The exclusive Blood Moon Shop, only available during Blood Moon events:
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
                        }}>Lunar Points</th>
                        <th style={{ 
                          textAlign: 'left', 
                          padding: '8px', 
                          color: '#fde047',
                          borderBottom: '1px solid #4b5563'
                        }}>Type</th>
                      </tr>
                    </thead>
                    <tbody style={{ color: '#d1d5db' }}>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Crimson Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>80</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Crop Seed</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Blood Rose Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>120</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Crop Seed</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Night Staff</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>250</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Tool</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Crimson Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>400</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Equipment</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Blood Moon Pet</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>350</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Pet</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px' }}>Eclipse Crate</td>
                        <td style={{ padding: '6px 8px' }}>500</td>
                        <td style={{ padding: '6px 8px' }}>Crate</td>
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
                  * Shop only available during Blood Moon periods (15 minutes every ~3 hours)
                </p>
              </div>
            </div>

            {/* Meteor Shower Features */}
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
                }}>Meteor Shower Features</h2>
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
                  Meteor Showers were special rare events that could occur during Blood Moon periods:
                </p>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Celestial Mutation</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '4px' }}>• Rarest mutation (8x value)</li>
                      <li style={{ marginBottom: '4px' }}>• Only during Meteor Showers</li>
                      <li style={{ marginBottom: '4px' }}>• Highest Lunar Point multiplier</li>
                      <li style={{ marginBottom: '4px' }}>• Glowing starlike appearance</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Event Mechanics</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '4px' }}>• Random chance during Blood Moon</li>
                      <li style={{ marginBottom: '4px' }}>• Visual meteor effects across sky</li>
                      <li style={{ marginBottom: '4px' }}>• Enhanced crop mutation rates</li>
                      <li style={{ marginBottom: '4px' }}>• Limited time opportunity</li>
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
                    src="/events/Blood_Moon_Event.webp" 
                    alt="Blood Moon Event"
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
                    <span style={{ color: 'white' }}>May 17, 2025</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>End Date:</span>
                    <span style={{ color: 'white' }}>May 31, 2025</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>Duration:</span>
                    <span style={{ color: 'white' }}>14 days</span>
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
                    <span style={{ color: 'white' }}>Lunar Points</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>Parent Event:</span>
                    <span style={{ color: 'white' }}>Lunar Glow Event</span>
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
                  <li style={{ marginBottom: '6px' }}>• 33% Blood Moon spawn chance</li>
                  <li style={{ marginBottom: '6px' }}>• 15-minute Blood Moon cycles</li>
                  <li style={{ marginBottom: '6px' }}>• Exclusive Blood Moon Shop</li>
                  <li style={{ marginBottom: '6px' }}>• Bloodlit mutations (4x value)</li>
                  <li style={{ marginBottom: '6px' }}>• Meteor Shower events</li>
                  <li>• Celestial mutations (8x value)</li>
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
                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                    border: '1px solid #dc2626',
                    borderRadius: '8px',
                    padding: '8px',
                    marginBottom: '8px'
                  }}>
                    <p style={{ color: '#fca5a5', margin: 0 }}>
                      <strong>Sub-Event:</strong> Part of the larger Lunar Glow Event expansion.
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(147, 51, 234, 0.1)',
                    border: '1px solid #9333ea',
                    borderRadius: '8px',
                    padding: '8px',
                    marginBottom: '8px'
                  }}>
                    <p style={{ color: '#c4b5fd', margin: 0 }}>
                      <strong>Rare Mutations:</strong> Introduced both Bloodlit and Celestial crop mutations.
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid #22c55e',
                    borderRadius: '8px',
                    padding: '8px'
                  }}>
                    <p style={{ color: '#86efac', margin: 0 }}>
                      <strong>Timing System:</strong> First event with variable-length cycles (15 vs 10 min).
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
                  <li style={{ marginBottom: '6px' }}>• Save Lunar Points for Blood Moon Shop</li>
                  <li style={{ marginBottom: '6px' }}>• Use Night Staff for guaranteed Bloodlit</li>
                  <li style={{ marginBottom: '6px' }}>• Watch for Meteor Shower events</li>
                  <li style={{ marginBottom: '6px' }}>• Blood Moon lasts 15 minutes vs 10</li>
                  <li>• Celestial mutation has highest value (8x)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};