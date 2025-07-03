'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// Stock data matching the original version
const stockData = [
  {
    id: 'strawberry-seed',
    name: 'Strawberry Seed',
    category: 'Seeds',
    shop: "Sam's Seed Shop",
    price: 25,
    currency: 'sheckle',
    currentStock: 847,
    maxStock: 1000,
    availability: 'In Stock',
    lastRestock: '2 hours ago',
    rarity: 'Common',
    icon: '🍓'
  },
  {
    id: 'advanced-sprinkler',
    name: 'Advanced Sprinkler',
    category: 'Gears',
    shop: 'Gear Store',
    price: 150,
    currency: 'robux',
    currentStock: 12,
    maxStock: 50,
    availability: 'Low Stock',
    lastRestock: '1 hour ago',
    rarity: 'Rare',
    icon: '🚿'
  },
  {
    id: 'mythical-egg',
    name: 'Mythical Egg',
    category: 'Eggs',
    shop: 'Pet Emporium',
    price: 500,
    currency: 'robux',
    currentStock: 0,
    maxStock: 25,
    availability: 'Out of Stock',
    lastRestock: '6 hours ago',
    rarity: 'Mythical',
    icon: '🔮'
  },
  {
    id: 'blueberry-seed',
    name: 'Blueberry Seed',
    category: 'Seeds',
    shop: "Sam's Seed Shop",
    price: 45,
    currency: 'sheckle',
    currentStock: 623,
    maxStock: 800,
    availability: 'In Stock',
    lastRestock: '3 hours ago',
    rarity: 'Common',
    icon: '🫐'
  },
  {
    id: 'godly-sprinkler',
    name: 'Godly Sprinkler',
    category: 'Gears',
    shop: 'Gear Store',
    price: 750,
    currency: 'robux',
    currentStock: 3,
    maxStock: 10,
    availability: 'Low Stock',
    lastRestock: '30 minutes ago',
    rarity: 'Divine',
    icon: '💧'
  },
  {
    id: 'legendary-egg',
    name: 'Legendary Egg',
    category: 'Eggs',
    shop: 'Pet Emporium',
    price: 250,
    currency: 'robux',
    currentStock: 18,
    maxStock: 40,
    availability: 'In Stock',
    lastRestock: '4 hours ago',
    rarity: 'Legendary',
    icon: '🥚'
  },
  {
    id: 'dragon-fruit-seed',
    name: 'Dragon Fruit Seed',
    category: 'Seeds',
    shop: 'Twilight Shop',
    price: 200,
    currency: 'sheckle',
    currentStock: 156,
    maxStock: 200,
    availability: 'In Stock',
    lastRestock: '1 hour ago',
    rarity: 'Rare',
    icon: '🐉'
  },
  {
    id: 'star-caller',
    name: 'Star Caller',
    category: 'Gears',
    shop: 'Gear Store',
    price: 1200,
    currency: 'robux',
    currentStock: 1,
    maxStock: 5,
    availability: 'Low Stock',
    lastRestock: '12 hours ago',
    rarity: 'Prismatic',
    icon: '⭐'
  }
]

export const StockContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedShop, setSelectedShop] = useState('All')
  const [sortBy, setSortBy] = useState('Name')

  const categories = ['All', 'Seeds', 'Gears', 'Eggs', 'Cosmetics', 'Event Items']
  const shops = ['All', "Sam's Seed Shop", 'Gear Store', 'Pet Emporium', 'Cosmetic Boutique', 'Event Shop', 'Twilight Shop']
  const sortOptions = ['Name', 'Price', 'Stock', 'Last Restock']

  // Filter and sort data
  let filteredData = stockData
  if (selectedCategory !== 'All') {
    filteredData = filteredData.filter(item => item.category === selectedCategory)
  }
  if (selectedShop !== 'All') {
    filteredData = filteredData.filter(item => item.shop === selectedShop)
  }

  // Sort data
  filteredData = [...filteredData].sort((a, b) => {
    switch (sortBy) {
      case 'Price':
        return a.price - b.price
      case 'Stock':
        return b.currentStock - a.currentStock
      case 'Last Restock':
        return a.lastRestock.localeCompare(b.lastRestock)
      default:
        return a.name.localeCompare(b.name)
    }
  })

  // Calculate stats
  const inStockItems = stockData.filter(item => item.availability === 'In Stock').length
  const lowStockItems = stockData.filter(item => item.availability === 'Low Stock').length
  const outOfStockItems = stockData.filter(item => item.availability === 'Out of Stock').length
  const uniqueShops = new Set(stockData.map(item => item.shop))
  const totalShops = Array.from(uniqueShops).length

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock': return '#4ade80'
      case 'Low Stock': return '#facc15'
      case 'Out of Stock': return '#f87171'
      default: return '#d1d5db'
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return '#d1d5db'
      case 'Uncommon': return '#4ade80'
      case 'Rare': return '#60a5fa'
      case 'Legendary': return '#c084fc'
      case 'Mythical': return '#f472b6'
      case 'Divine': return '#facc15'
      default: return '#d1d5db'
    }
  }

  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '0 16px'
    }}>
      {/* Header */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        borderRadius: '12px', 
        padding: '24px', 
        marginBottom: '24px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '24px', marginRight: '16px' }}>📦</span>
          <h1 style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#f5d954', 
            margin: 0,
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Grow A Garden Stock Tracker
          </h1>
        </div>
        <p style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive",
          marginBottom: '12px'
        }}>
          Real-time inventory monitoring for all Grow a Garden shops. Never miss out on premium items again!
        </p>
        <p style={{ 
          color: '#9ca3af', 
          fontSize: '8px', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Last updated: 2025/7/2 22:20:35
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        marginBottom: '24px'
      }}>
        <div style={{ 
          backgroundColor: '#1f2a37', 
          border: '2px solid #4ade80', 
          borderRadius: '12px', 
          padding: '16px', 
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛍️</div>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#facc15', 
            fontFamily: "'Press Start 2P', cursive"
          }}>{inStockItems}</div>
          <div style={{ 
            fontSize: '8px', 
            color: '#d1d5db', 
            fontFamily: "'Press Start 2P', cursive"
          }}>Items In Stock</div>
        </div>
        
        <div style={{ 
          backgroundColor: '#1f2a37', 
          border: '2px solid #facc15', 
          borderRadius: '12px', 
          padding: '16px', 
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚠️</div>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#facc15', 
            fontFamily: "'Press Start 2P', cursive"
          }}>{lowStockItems}</div>
          <div style={{ 
            fontSize: '8px', 
            color: '#d1d5db', 
            fontFamily: "'Press Start 2P', cursive"
          }}>Low Stock Items</div>
        </div>
        
        <div style={{ 
          backgroundColor: '#1f2a37', 
          border: '2px solid #f87171', 
          borderRadius: '12px', 
          padding: '16px', 
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>❌</div>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#facc15', 
            fontFamily: "'Press Start 2P', cursive"
          }}>{outOfStockItems}</div>
          <div style={{ 
            fontSize: '8px', 
            color: '#d1d5db', 
            fontFamily: "'Press Start 2P', cursive"
          }}>Out of Stock</div>
        </div>
        
        <div style={{ 
          backgroundColor: '#1f2a37', 
          border: '2px solid #4ade80', 
          borderRadius: '12px', 
          padding: '16px', 
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏪</div>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#facc15', 
            fontFamily: "'Press Start 2P', cursive"
          }}>{totalShops}</div>
          <div style={{ 
            fontSize: '8px', 
            color: '#d1d5db', 
            fontFamily: "'Press Start 2P', cursive"
          }}>Shops Monitored</div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        marginBottom: '24px'
      }}>
        <div>
          <label style={{ 
            display: 'block', 
            color: '#facc15', 
            fontSize: '10px', 
            fontFamily: "'Press Start 2P', cursive",
            marginBottom: '8px'
          }}>Category</label>
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              backgroundColor: '#1f2a37',
              border: '2px solid #4ade80',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '8px',
              fontFamily: "'Press Start 2P', cursive"
            }}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ 
            display: 'block', 
            color: '#facc15', 
            fontSize: '10px', 
            fontFamily: "'Press Start 2P', cursive",
            marginBottom: '8px'
          }}>Shop</label>
          <select 
            value={selectedShop}
            onChange={(e) => setSelectedShop(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              backgroundColor: '#1f2a37',
              border: '2px solid #4ade80',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '8px',
              fontFamily: "'Press Start 2P', cursive"
            }}
          >
            {shops.map(shop => (
              <option key={shop} value={shop}>{shop}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ 
            display: 'block', 
            color: '#facc15', 
            fontSize: '10px', 
            fontFamily: "'Press Start 2P', cursive",
            marginBottom: '8px'
          }}>Sort By</label>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              backgroundColor: '#1f2a37',
              border: '2px solid #4ade80',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '8px',
              fontFamily: "'Press Start 2P', cursive"
            }}
          >
            {sortOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stock Table */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #4ade80' }}>
              <th style={{ 
                padding: '12px 8px', 
                color: '#facc15', 
                fontWeight: '600', 
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive"
              }}>Item</th>
              <th style={{ 
                padding: '12px 8px', 
                color: '#facc15', 
                fontWeight: '600', 
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive"
              }}>Category</th>
              <th style={{ 
                padding: '12px 8px', 
                color: '#facc15', 
                fontWeight: '600', 
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive"
              }}>Shop</th>
              <th style={{ 
                padding: '12px 8px', 
                color: '#facc15', 
                fontWeight: '600', 
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive"
              }}>Price</th>
              <th style={{ 
                padding: '12px 8px', 
                color: '#facc15', 
                fontWeight: '600', 
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive"
              }}>Stock</th>
              <th style={{ 
                padding: '12px 8px', 
                color: '#facc15', 
                fontWeight: '600', 
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive"
              }}>Availability</th>
              <th style={{ 
                padding: '12px 8px', 
                color: '#facc15', 
                fontWeight: '600', 
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive"
              }}>Last Restock</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id} style={{ 
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
                  padding: '12px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontSize: '16px' }}>{item.icon}</span>
                  <div>
                    <div style={{ 
                      color: 'white', 
                      fontWeight: '600', 
                      fontSize: '8px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{item.name}</div>
                    <div style={{ 
                      color: getRarityColor(item.rarity), 
                      fontSize: '6px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{item.rarity}</div>
                  </div>
                </td>
                <td style={{ 
                  padding: '12px 8px', 
                  color: '#d1d5db', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>{item.category}</td>
                <td style={{ 
                  padding: '12px 8px', 
                  color: '#d1d5db', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>{item.shop}</td>
                <td style={{ 
                  padding: '12px 8px', 
                  color: '#facc15', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive",
                  fontWeight: '600'
                }}>
                  {item.price} {item.currency === 'robux' ? '💎' : '🪙'}
                </td>
                <td style={{ 
                  padding: '12px 8px', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  <div style={{ color: '#d1d5db', marginBottom: '4px' }}>
                    {item.currentStock}/{item.maxStock}
                  </div>
                  <div style={{ 
                    width: '60px', 
                    height: '6px', 
                    backgroundColor: '#374151', 
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${(item.currentStock / item.maxStock) * 100}%`,
                      height: '100%',
                      backgroundColor: getAvailabilityColor(item.availability),
                      transition: 'width 0.3s ease'
                    }}></div>
                  </div>
                  <div style={{ 
                    color: '#9ca3af', 
                    fontSize: '6px',
                    marginTop: '2px'
                  }}>
                    {Math.round((item.currentStock / item.maxStock) * 100)}%
                  </div>
                </td>
                <td style={{ 
                  padding: '12px 8px', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive",
                  color: getAvailabilityColor(item.availability)
                }}>{item.availability}</td>
                <td style={{ 
                  padding: '12px 8px', 
                  color: '#9ca3af', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>{item.lastRestock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back to Tools */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '16px', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
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
              display: 'block',
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
            ← Calculator
          </Link>
          <Link 
            href="/tools" 
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
              display: 'block',
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
            ← Back to Tools
          </Link>
        </div>
      </div>
    </div>
  )
}