import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, Gift, Package, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tools - Grow A Garden Calculator Utilities',
  description: 'Access all calculator tools and utilities for Grow A Garden. Value calculators, redeem codes, stock management, and more.',
  keywords: ['tools', 'calculator', 'utilities', 'Grow A Garden', 'value calculator'],
}

export default function ToolsPage() {
  const tools = [
    {
      name: 'Value Calculator',
      description: 'Advanced value calculation tools with detailed analysis',
      href: '/tools/values',
      icon: Calculator,
      bgColor: '#60a5fa',
      hoverColor: '#3b82f6',
      features: ['Multi-crop comparison', 'Profit analysis', 'Investment recommendations']
    },
    {
      name: 'Redeem Codes',
      description: 'Latest working codes for free rewards and bonuses',
      href: '/grow-a-garden-codes',
      icon: Gift,
      bgColor: '#4ade80',
      hoverColor: '#22c55e',
      features: ['Updated daily', 'Copy to clipboard', 'Expiration tracking']
    },
    {
      name: 'Stock Management',
      description: 'Track shop inventories and restock times',
      href: '/grow-a-garden-stock',
      icon: Package,
      bgColor: '#c084fc',
      hoverColor: '#a855f7',
      features: ['Real-time updates', 'Notification alerts', 'Price tracking']
    },
    {
      name: 'FAQ & Help',
      description: 'Frequently asked questions and game guides',
      href: '/grow-a-garden-faqs',
      icon: HelpCircle,
      bgColor: '#fb923c',
      hoverColor: '#ea580c',
      features: ['Comprehensive guides', 'Tips & tricks', 'Community insights']
    }
  ]

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 'bold', 
          color: '#fbbf24', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Grow A Garden Tools
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#d1d5db', 
          maxWidth: '1000px', 
          margin: '0 auto',
          fontFamily: "'Press Start 2P', cursive",
          lineHeight: '1.6'
        }}>
          Access our suite of powerful tools designed to help you maximize your farming efficiency and profits in Grow a Garden.
        </p>
      </div>

      {/* Tools Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
        gap: '32px', 
        marginBottom: '48px' 
      }}>
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{
              display: 'block',
              backgroundColor: tool.bgColor,
              borderRadius: '12px',
              padding: '32px',
              border: '3px solid #374151',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ flexShrink: 0 }}>
                <tool.icon style={{ width: '48px', height: '48px', color: 'white' }} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  {tool.name}
                </h3>
                <p style={{ 
                  color: '#f3f4f6', 
                  fontSize: '12px', 
                  marginBottom: '16px',
                  fontFamily: "'Press Start 2P', cursive",
                  lineHeight: '1.4'
                }}>
                  {tool.description}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {tool.features.map((feature, index) => (
                    <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      color: '#e5e7eb', 
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>
                      <span style={{ 
                        width: '6px', 
                        height: '6px', 
                        backgroundColor: 'white', 
                        borderRadius: '50%', 
                        marginRight: '8px', 
                        flexShrink: 0 
                      }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Access Section */}
      <div style={{ 
        backgroundColor: '#374151', 
        border: '3px solid #4ade80', 
        borderRadius: '12px', 
        padding: '32px', 
        marginBottom: '32px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#4ade80', 
          marginBottom: '24px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Quick Access
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
          gap: '16px' 
        }}>
          <Link
            href="/"
            style={{
              backgroundColor: '#4b5563',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              border: '2px solid #6b7280'
            }}
          >
            <Calculator style={{ width: '32px', height: '32px', color: '#4ade80', margin: '0 auto 8px auto' }} />
            <p style={{ 
              color: 'white', 
              fontSize: '12px', 
              fontWeight: '500',
              fontFamily: "'Press Start 2P', cursive"
            }}>Main Calculator</p>
          </Link>
          <Link
            href="/wiki"
            style={{
              backgroundColor: '#4b5563',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              border: '2px solid #6b7280'
            }}
          >
            <Package style={{ width: '32px', height: '32px', color: '#60a5fa', margin: '0 auto 8px auto' }} />
            <p style={{ 
              color: 'white', 
              fontSize: '12px', 
              fontWeight: '500',
              fontFamily: "'Press Start 2P', cursive"
            }}>Wiki</p>
          </Link>
          <Link
            href="/grow-a-garden-events"
            style={{
              backgroundColor: '#4b5563',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              border: '2px solid #6b7280'
            }}
          >
            <Gift style={{ width: '32px', height: '32px', color: '#c084fc', margin: '0 auto 8px auto' }} />
            <p style={{ 
              color: 'white', 
              fontSize: '12px', 
              fontWeight: '500',
              fontFamily: "'Press Start 2P', cursive"
            }}>Events</p>
          </Link>
          <Link
            href="/grow-a-garden-codes"
            style={{
              backgroundColor: '#4b5563',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
              border: '2px solid #6b7280'
            }}
          >
            <HelpCircle style={{ width: '32px', height: '32px', color: '#fb923c', margin: '0 auto 8px auto' }} />
            <p style={{ 
              color: 'white', 
              fontSize: '12px', 
              fontWeight: '500',
              fontFamily: "'Press Start 2P', cursive"
            }}>Codes</p>
          </Link>
        </div>
      </div>

      {/* Back to Home */}
      <div style={{ textAlign: 'center' }}>
        <Link 
          href="/" 
          style={{
            backgroundColor: '#4ade80',
            color: '#000000',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            fontSize: '12px',
            fontFamily: "'Press Start 2P', cursive",
            border: '2px solid #4ade80',
            display: 'inline-block'
          }}
        >
          ← Back to Calculator
        </Link>
      </div>
    </div>
  )
}