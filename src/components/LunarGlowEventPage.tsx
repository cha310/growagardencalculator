'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '../components/OptimizedImage';

export const LunarGlowEventPage: React.FC = () => {
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
            Lunar Glow Event
          </h1>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            marginBottom: '16px' 
          }}>
            Celebrated May 10 - May 31, 2025
          </p>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            maxWidth: '1000px', 
            margin: '0 auto',
            lineHeight: '1.5'
          }}>
            The Lunar Glow Event was a limited-time event featuring the Wise Old Owl NPC, night cycles, and special mutations. Players harvested Moonlit and Bloodlit crops to earn Lunar Points and unlock exclusive rewards.
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
                    The Lunar Glow Event was a limited-time event in Grow a Garden that introduced new features, an exclusive NPC, and rewards. The event featured the Wise Old Owl NPC, who tasked users with harvesting Moonlit, and later, Bloodlit plants.
                  </p>
                  <p>
                    The theme drew inspiration from the night cycle and nocturnal imagery. The event was the third event added to Grow a Garden and the first to feature a different currency (Lunar Points) as obtainment needs.
                  </p>
                  <p>
                    The event was extended by one week after community backlash for Update 1.07.0, demonstrating the developers' responsiveness to player feedback.
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
                    }}>Lunar Points System</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '6px' }}>• Harvest Moonlit and Bloodlit crops</li>
                      <li style={{ marginBottom: '6px' }}>• Exchange with Wise Old Owl for Lunar Points</li>
                      <li style={{ marginBottom: '6px' }}>• Points based on tier and mutations</li>
                      <li style={{ marginBottom: '6px' }}>• Complete milestones for rewards</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Night & Blood Moon Cycles</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '6px' }}>• Hourly Night Events (10 minutes duration)</li>
                      <li style={{ marginBottom: '6px' }}>• Plants gain Moonlit mutation during Night</li>
                      <li style={{ marginBottom: '6px' }}>• Blood Moon (1/3 chance) grants Bloodlit mutation</li>
                      <li style={{ marginBottom: '6px' }}>• Meteor Shower gives Celestial mutation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Shop */}
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
                }}>Lunar Shop</h2>
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
                  The Wise Old Owl's exclusive shop offering lunar-themed items and rewards for Lunar Points:
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
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Nightshade Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>50</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Crop Seed</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Moonbell Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>75</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Crop Seed</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Cosmos Seed</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>100</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Crop Seed</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Astral Staff</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>200</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Tool</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Lunar Sprinkler</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>300</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Equipment</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Stellar Egg</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>150</td>
                        <td style={{ padding: '6px 8px', borderBottom: '1px solid #374151' }}>Pet Egg</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '6px 8px' }}>Cosmic Crate</td>
                        <td style={{ padding: '6px 8px' }}>250</td>
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
                  * Additional cosmetic items available: Lunar Lamp, Night Sky Walkway, Crescent Moon Chair
                </p>
              </div>
            </div>

            {/* Mutation Values */}
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
                }}>Mutation Point Values</h2>
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
                  Lunar Point values based on crop mutations and tiers:
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
                    }}>Mutation Multipliers</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '4px' }}>• Moonlit: 2x base points</li>
                      <li style={{ marginBottom: '4px' }}>• Bloodlit: 4x base points</li>
                      <li style={{ marginBottom: '4px' }}>• Celestial: 8x base points</li>
                      <li style={{ marginBottom: '4px' }}>• Normal: 1x base points</li>
                    </ul>
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: '#fbbf24',
                      marginBottom: '8px',
                      fontFamily: "'Press Start 2P', monospace"
                    }}>Tier Base Values</h3>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      fontSize: '9px',
                      color: '#d1d5db',
                      fontFamily: "'Press Start 2P', monospace",
                      lineHeight: '1.5'
                    }}>
                      <li style={{ marginBottom: '4px' }}>• Basic Tier: 1 point</li>
                      <li style={{ marginBottom: '4px' }}>• Advanced Tier: 2 points</li>
                      <li style={{ marginBottom: '4px' }}>• Master Tier: 3 points</li>
                      <li style={{ marginBottom: '4px' }}>• Godly Tier: 5 points</li>
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
                    src="/events/Lunar_Glow_Event.webp" 
                    alt="Lunar Glow Event"
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
                    <span style={{ color: 'white' }}>May 10, 2025</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ color: '#9ca3af' }}>End Date:</span>
                    <span style={{ color: 'white' }}>May 31, 2025</span>
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
                    <span style={{ color: 'white' }}>Lunar Points</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#9ca3af' }}>NPC:</span>
                    <span style={{ color: 'white' }}>Wise Old Owl</span>
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
                  <li style={{ marginBottom: '6px' }}>• Night Cycle Events</li>
                  <li style={{ marginBottom: '6px' }}>• Blood Moon Special Events</li>
                  <li style={{ marginBottom: '6px' }}>• Meteor Shower Celestial Mutations</li>
                  <li style={{ marginBottom: '6px' }}>• Lunar Points Currency System</li>
                  <li style={{ marginBottom: '6px' }}>• Three Special Mutations</li>
                  <li>• Wise Old Owl NPC Shop</li>
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
                      <strong>Third Event:</strong> This was the third event added to Grow a Garden.
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
                      <strong>New Currency:</strong> First event to feature Lunar Points instead of Sheckles.
                    </p>
                  </div>
                  <div style={{
                    backgroundColor: 'rgba(147, 51, 234, 0.1)',
                    border: '1px solid #9333ea',
                    borderRadius: '8px',
                    padding: '8px'
                  }}>
                    <p style={{ color: '#c4b5fd', margin: 0 }}>
                      <strong>Extended Duration:</strong> Event was extended by one week due to community feedback.
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
                  <li style={{ marginBottom: '6px' }}>• Focus on higher tier crops for more points</li>
                  <li style={{ marginBottom: '6px' }}>• Wait for Blood Moon events for 4x multiplier</li>
                  <li style={{ marginBottom: '6px' }}>• Celestial mutation gives highest point values</li>
                  <li style={{ marginBottom: '6px' }}>• Night events occur every hour for 10 minutes</li>
                  <li>• Prioritize Bloodlit and Celestial mutations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};