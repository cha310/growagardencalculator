'use client'

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <div style={{ 
      backgroundColor: '#111827', 
      marginTop: '32px', 
      padding: '24px 0',
      borderTop: '2px solid #374151'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '24px', 
          alignItems: 'start' 
        }}>
          {/* Left - Domain/Brand */}
          <div>
            <h3 style={{ 
              fontSize: '10px', 
              fontWeight: '600', 
              color: '#fde046', 
              marginBottom: '8px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              growagardencalculator.me
            </h3>
            <p style={{ 
              fontSize: '9px', 
              color: '#d1d5db', 
              marginBottom: '8px',
              lineHeight: '1.4',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              Free tool for Roblox players to track prices, optimize harvests, and maximize profits.
            </p>
          </div>

          {/* Center - Quick Actions */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              color: '#fde046',   
              marginBottom: '6px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              Quick Actions
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              <Link 
                href="/" 
                style={{ 
                  color: '#4ade80', 
                  padding: '8px 12px', 
                  borderRadius: '4px', 
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '10px',
                  fontFamily: "'Press Start 2P', cursive",
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#86efac'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4ade80'}
              >
                🏠 Home
              </Link>
              <Link 
                href="/grow-a-garden-wiki" 
                style={{ 
                  color: '#4ade80', 
                  padding: '8px 12px', 
                  borderRadius: '4px', 
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '10px',
                  fontFamily: "'Press Start 2P', cursive",
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#86efac'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4ade80'}
              >
                📚 Wiki
              </Link>
              <Link 
                href="/grow-a-garden-faqs" 
                style={{ 
                  color: '#4ade80', 
                  padding: '8px 12px', 
                  borderRadius: '4px', 
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '10px',
                  fontFamily: "'Press Start 2P', cursive",
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#86efac'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4ade80'}
              >
                📋 FAQs
              </Link>
            </div>
          </div>

          {/* Right - About */}
          <div style={{ textAlign: 'right' }}>
            <h3 style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#fbbf24', 
              marginBottom: '6px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              About
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
              <Link 
                href="/privacy-policy" 
                style={{ 
                  color: '#4ade80', 
                  fontSize: '10px', 
                  textDecoration: 'none',
                  display: 'block',
                  fontFamily: "'Press Start 2P', cursive",
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#86efac'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4ade80'}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                style={{ 
                  color: '#4ade80', 
                  fontSize: '10px', 
                  textDecoration: 'none',
                  display: 'block',
                  fontFamily: "'Press Start 2P', cursive",
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#86efac'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#4ade80'}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div style={{ 
          marginTop: '24px', 
          paddingTop: '16px', 
          borderTop: '1px solid #374151', 
          textAlign: 'center' 
        }}>
          <p style={{ 
            fontSize: '8px', 
            color: '#9ca3af',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            © 2025 Grow A Garden Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}; 