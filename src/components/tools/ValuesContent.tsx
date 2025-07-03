'use client';

import { ValuesTable } from './ValuesTable';

interface ValuesContentProps {
  initialPlants?: any[];
}

export function ValuesContent({ initialPlants }: ValuesContentProps) {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '16px 12px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#fde046', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Values Chart
        </h1>
        <p style={{ 
          fontSize: '12px', 
          color: '#d1d5db', 
          maxWidth: '1000px', 
          margin: '0 auto',
          fontFamily: "'Press Start 2P', cursive",
          lineHeight: '1.6'
        }}>
          Grow A Garden Values for 2025, including sell prices and minimum values for crops like carrots to mythical dragon fruit. Find all trading values of fruits!
        </p>
      </div>


      {/* Values Table */}
      <ValuesTable />

      {/* Tips Section */}
      <div style={{ 
        marginTop: '48px',
        backgroundColor: '#374151', 
        border: '0.5px solid #4ade80', 
        borderRadius: '12px', 
        padding: '32px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <h2 style={{ 
          fontSize: '12px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '24px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Category/Shop Filter
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          <div>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#4ade80', 
              marginBottom: '12px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              💰 Value Optimization
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ 
                color: '#d1d5db', 
                fontSize: '12px',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.4'
              }}>
                • Compare base values across different crops
              </li>
              <li style={{ 
                color: '#d1d5db', 
                fontSize: '12px',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.4'
              }}>
                • Factor in mutation bonuses for rare variants
              </li>
              <li style={{ 
                color: '#d1d5db', 
                fontSize: '12px',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.4'
              }}>
                • Consider growth time vs. value ratios
              </li>
              <li style={{ 
                color: '#d1d5db', 
                fontSize: '12px',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.4'
              }}>
                • Use weight multipliers for oversized crops
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#60a5fa', 
              marginBottom: '12px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              📊 Investment Strategy
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li style={{ 
                color: '#d1d5db', 
                fontSize: '12px',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.4'
              }}>
                • Calculate ROI for premium seeds
              </li>
              <li style={{ 
                color: '#d1d5db', 
                fontSize: '12px',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.4'
              }}>
                • Plan long-term vs. short-term profits
              </li>
              <li style={{ 
                color: '#d1d5db', 
                fontSize: '12px',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.4'
              }}>
                • Track seasonal value fluctuations
              </li>
              <li style={{ 
                color: '#d1d5db', 
                fontSize: '12px',
                fontFamily: "'Press Start 2P', cursive",
                lineHeight: '1.4'
              }}>
                • Optimize for friend bonus scenarios
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}