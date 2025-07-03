'use client';
import React from 'react';
import Link from 'next/link';

export const CodesPage: React.FC = () => {
  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '0 16px'
    }}>
      {/* What Are Codes Section */}
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
          What Are Codes in Grow a Garden?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '12px' }}>
            Welcome to growagardencalculator.me, your go-to hub for all things Grow a Garden on Roblox! This charming farming game puts a fun spin on the genre with its exciting crop mutation system and amazing reward codes that give you free goodies.
          </p>
          <p style={{ marginBottom: '12px' }}>
            In Grow a Garden, you'll dive into the joy of purchasing seeds, tending to your crops, and harvesting them for sweet in-game profits. The thrill of growing rare, mutated plants makes this game a must-play for farming fans!
          </p>
          <p>
            With Grow a Garden Codes, you can score free seed packs, exclusive items, and bonuses to level up your garden and boost your earnings with ease. These special codes are released by the developers during events, milestones, and updates!
          </p>
        </div>
      </div>

      {/* Active Codes Section */}
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
          fontFamily: "'Press Start 2P', cursive",
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ marginRight: '8px' }}>✅</span>
          Active Codes
        </h2>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', textAlign: 'left', tableLayout: 'fixed' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #666d77', backgroundColor: '#16a34a' }}>
                <th style={{ 
                  padding: '4px', 
                  color: '#ffffff', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Active Code</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#ffffff', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #666d77' }}>
                <td style={{ 
                  padding: '4px', 
                  color: '#d1d5db', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }} colSpan={2}>
                  There are no active codes right now
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div style={{ 
          marginTop: '16px', 
          padding: '12px', 
          backgroundColor: '#92400e', 
          border: '1px solid #d97706',
          borderRadius: '8px'
        }}>
          <p style={{ 
            color: '#fcd34d', 
            fontSize: '8px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            ⚠️ Since all the currently released Codes have expired, we will update this Code list once the developer adds new activation codes.
          </p>
        </div>
      </div>

      {/* Expired Codes Section */}
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
          fontFamily: "'Press Start 2P', cursive",
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ marginRight: '8px' }}>❌</span>
          Expired Codes
        </h2>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', textAlign: 'left', tableLayout: 'fixed' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #666d77', backgroundColor: '#4b5563' }}>
                <th style={{ 
                  padding: '4px', 
                  color: '#ffffff', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Expired Code</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#ffffff', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ 
                borderBottom: '1px solid #666d77',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(75, 85, 99, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}>
                <td style={{ 
                  padding: '4px', 
                  color: '#d1d5db', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>LUNARGLOW10</td>
                <td style={{ 
                  padding: '4px', 
                  color: '#d1d5db', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>3 Basic Seed Pack and 1 Exotic Bug Egg.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* How to Redeem Section */}
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
          fontFamily: "'Press Start 2P', cursive",
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ marginRight: '8px' }}>🎯</span>
          How to Redeem Grow a Garden Codes
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          <div>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ 
                  backgroundColor: '#16a34a', 
                  color: 'white', 
                  border: '2px solid #166534', 
                  width: '24px', 
                  height: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '8px', 
                  fontWeight: 'bold', 
                  marginRight: '12px', 
                  marginTop: '4px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>1</span>
                <div>
                  <h3 style={{ 
                    color: 'white', 
                    fontSize: '8px', 
                    fontWeight: 'bold', 
                    marginBottom: '4px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>Open Game</h3>
                  <p style={{ 
                    color: '#d1d5db', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>Open Grow a Garden on the Roblox platform.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ 
                  backgroundColor: '#16a34a', 
                  color: 'white', 
                  border: '2px solid #166534', 
                  width: '24px', 
                  height: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '8px', 
                  fontWeight: 'bold', 
                  marginRight: '12px', 
                  marginTop: '4px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>2</span>
                <div>
                  <h3 style={{ 
                    color: 'white', 
                    fontSize: '8px', 
                    fontWeight: 'bold', 
                    marginBottom: '4px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>Find Settings</h3>
                  <p style={{ 
                    color: '#d1d5db', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>Tap the Settings icon in the top-left corner.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ 
                  backgroundColor: '#16a34a', 
                  color: 'white', 
                  border: '2px solid #166534', 
                  width: '24px', 
                  height: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '8px', 
                  fontWeight: 'bold', 
                  marginRight: '12px', 
                  marginTop: '4px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>3</span>
                <div>
                  <h3 style={{ 
                    color: 'white', 
                    fontSize: '8px', 
                    fontWeight: 'bold', 
                    marginBottom: '4px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>Enter Code</h3>
                  <p style={{ 
                    color: '#d1d5db', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>Type an active code into the "Type code here…" box.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ 
                  backgroundColor: '#16a34a', 
                  color: 'white', 
                  border: '2px solid #166534', 
                  width: '24px', 
                  height: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '8px', 
                  fontWeight: 'bold', 
                  marginRight: '12px', 
                  marginTop: '4px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>4</span>
                <div>
                  <h3 style={{ 
                    color: 'white', 
                    fontSize: '8px', 
                    fontWeight: 'bold', 
                    marginBottom: '4px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>Claim Rewards</h3>
                  <p style={{ 
                    color: '#d1d5db', 
                    fontSize: '8px',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>Hit the Claim button to grab your rewards.</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div style={{ 
            backgroundColor: '#374151', 
            border: '1px solid #4b5563', 
            padding: '16px',
            borderRadius: '8px'
          }}>
            <h3 style={{ 
              color: '#facc15', 
              fontSize: '8px', 
              fontWeight: 'bold', 
              marginBottom: '12px',
              fontFamily: "'Press Start 2P', cursive"
            }}>💡 Tips</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#4ade80', marginRight: '8px' }}>•</span>
                <span style={{ 
                  color: '#d1d5db', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Codes are case-sensitive, ensure accurate input</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#4ade80', marginRight: '8px' }}>•</span>
                <span style={{ 
                  color: '#d1d5db', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Each code can only be used once</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#4ade80', marginRight: '8px' }}>•</span>
                <span style={{ 
                  color: '#d1d5db', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Check this page regularly for latest codes</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ color: '#4ade80', marginRight: '8px' }}>•</span>
                <span style={{ 
                  color: '#d1d5db', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Expired codes cannot be reused</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stay Updated */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '12px',
          fontFamily: "'Press Start 2P', cursive"
        }}>Stay Updated!</h3>
        <p style={{ 
          color: '#d1d5db', 
          marginBottom: '16px', 
          fontSize: '10px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Follow us for the latest Grow a Garden codes and updates. We'll update this page immediately when new codes are released.
        </p>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '12px' 
        }}>
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
              display: 'inline-block',
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
            📚 Browse Wiki
          </Link>
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
              display: 'inline-block',
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
            🧮 Use Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}; 