"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface StockItem {
  id: string;
  name: string;
  category: 'Seeds' | 'Gears' | 'Eggs' | 'Cosmetics' | 'Event Items';
  shop: string;
  price: number;
  currency: 'sheckle' | 'robux';
  stock: number;
  maxStock: number;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical' | 'Divine' | 'Prismatic';
  image: string;
  lastRestocked: string;
  availability: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

// Mock stock data - in a real app this would come from an API
const mockStockData: StockItem[] = [
  {
    id: 'strawberry-seed',
    name: 'Strawberry Seed',
    category: 'Seeds',
    shop: "Sam's Seed Shop",
    price: 25,
    currency: 'sheckle',
    stock: 847,
    maxStock: 1000,
    rarity: 'Common',
    image: '/plant/strawberry.png',
    lastRestocked: '2 hours ago',
    availability: 'In Stock'
  },
  {
    id: 'advanced-sprinkler',
    name: 'Advanced Sprinkler',
    category: 'Gears',
    shop: 'Gear Store',
    price: 150,
    currency: 'robux',
    stock: 12,
    maxStock: 50,
    rarity: 'Rare',
    image: '/gears/Advanced-Sprinkler.webp',
    lastRestocked: '1 hour ago',
    availability: 'Low Stock'
  },
  {
    id: 'mythical-egg',
    name: 'Mythical Egg',
    category: 'Eggs',
    shop: 'Pet Emporium',
    price: 500,
    currency: 'robux',
    stock: 0,
    maxStock: 25,
    rarity: 'Mythical',
    image: '/eggs/Mythical-Egg.webp',
    lastRestocked: '6 hours ago',
    availability: 'Out of Stock'
  },
  {
    id: 'blueberry-seed',
    name: 'Blueberry Seed',
    category: 'Seeds',
    shop: "Sam's Seed Shop",
    price: 45,
    currency: 'sheckle',
    stock: 623,
    maxStock: 800,
    rarity: 'Common',
    image: '/plant/blueberry.png',
    lastRestocked: '3 hours ago',
    availability: 'In Stock'
  },
  {
    id: 'godly-sprinkler',
    name: 'Godly Sprinkler',
    category: 'Gears',
    shop: 'Gear Store',
    price: 750,
    currency: 'robux',
    stock: 3,
    maxStock: 10,
    rarity: 'Divine',
    image: '/gears/Godly-Sprinkler.webp',
    lastRestocked: '30 minutes ago',
    availability: 'Low Stock'
  },
  {
    id: 'legendary-egg',
    name: 'Legendary Egg',
    category: 'Eggs',
    shop: 'Pet Emporium',
    price: 250,
    currency: 'robux',
    stock: 18,
    maxStock: 40,
    rarity: 'Legendary',
    image: '/eggs/Legendary-Egg.webp',
    lastRestocked: '4 hours ago',
    availability: 'In Stock'
  },
  {
    id: 'dragon-fruit-seed',
    name: 'Dragon Fruit Seed',
    category: 'Seeds',
    shop: 'Twilight Shop',
    price: 200,
    currency: 'sheckle',
    stock: 156,
    maxStock: 200,
    rarity: 'Rare',
    image: '/plant/dragon-fruit.png',
    lastRestocked: '1 hour ago',
    availability: 'In Stock'
  },
  {
    id: 'star-caller',
    name: 'Star Caller',
    category: 'Gears',
    shop: 'Gear Store',
    price: 1200,
    currency: 'robux',
    stock: 1,
    maxStock: 5,
    rarity: 'Prismatic',
    image: '/gears/Star-Caller.webp',
    lastRestocked: '12 hours ago',
    availability: 'Low Stock'
  }
];

export const StockPage: React.FC = () => {
  const [stockData, setStockData] = useState<StockItem[]>(mockStockData);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedShop, setSelectedShop] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    document.title = 'Grow a Garden Stock Tracker - Real-time Inventory Monitor';
    setLastUpdate(new Date().toLocaleString());
    
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStockData(prevData => 
        prevData.map(item => ({
          ...item,
          stock: Math.max(0, item.stock + Math.floor(Math.random() * 10 - 5)),
          lastRestocked: Math.random() > 0.9 ? 'Just now' : item.lastRestocked
        }))
      );
      setLastUpdate(new Date().toLocaleString());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const categories = ['All', 'Seeds', 'Gears', 'Eggs', 'Cosmetics', 'Event Items'];
  const shops = ['All', "Sam's Seed Shop", 'Gear Store', 'Pet Emporium', 'Cosmetic Boutique', 'Event Shop', 'Twilight Shop'];

  const getRarityColor = (rarity: string) => {
    const colors = {
      'Common': 'text-gray-300',
      'Uncommon': 'text-green-400',
      'Rare': 'text-blue-400',
      'Legendary': 'text-purple-400',
      'Mythical': 'text-pink-400',
      'Divine': 'text-yellow-400',
      'Prismatic': 'text-rainbow bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent'
    };
    return colors[rarity as keyof typeof colors] || 'text-gray-300';
  };

  const getAvailabilityColor = (availability: string) => {
    const colors = {
      'In Stock': 'text-green-400',
      'Low Stock': 'text-yellow-400',
      'Out of Stock': 'text-red-400'
    };
    return colors[availability as keyof typeof colors] || 'text-gray-300';
  };

  const getStockPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  const filteredData = stockData
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .filter(item => selectedShop === 'All' || item.shop === selectedShop)
    .sort((a, b) => {
      switch (sortBy) {
        case 'stock':
          return b.stock - a.stock;
        case 'price':
          return a.price - b.price;
        case 'rarity':
          const rarityOrder = ['Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic'];
          return rarityOrder.indexOf(b.rarity) - rarityOrder.indexOf(a.rarity);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-yellow-300 hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <span className="text-gray-500">›</span>
          <span className="text-gray-300">Stock Tracker</span>
        </nav>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">
          📦 Grow A Garden Stock Tracker
        </h1>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
          Real-time inventory monitoring for all Grow a Garden shops. Never miss out on premium items again!
        </p>
        <div className="mt-4 text-xs text-gray-400">
          Last updated: {lastUpdate}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="pixel-card">
          <div className="text-center">
            <div className="text-2xl text-green-400 mb-2">🛍️</div>
            <div className="text-lg font-bold text-yellow-300">{stockData.filter(item => item.availability === 'In Stock').length}</div>
            <div className="text-xs text-gray-300">Items In Stock</div>
          </div>
        </div>
        <div className="pixel-card">
          <div className="text-center">
            <div className="text-2xl text-yellow-400 mb-2">⚠️</div>
            <div className="text-lg font-bold text-yellow-300">{stockData.filter(item => item.availability === 'Low Stock').length}</div>
            <div className="text-xs text-gray-300">Low Stock Items</div>
          </div>
        </div>
        <div className="pixel-card">
          <div className="text-center">
            <div className="text-2xl text-red-400 mb-2">❌</div>
            <div className="text-lg font-bold text-yellow-300">{stockData.filter(item => item.availability === 'Out of Stock').length}</div>
            <div className="text-xs text-gray-300">Out of Stock</div>
          </div>
        </div>
        <div className="pixel-card">
          <div className="text-center">
            <div className="text-2xl text-blue-400 mb-2">🏪</div>
            <div className="text-lg font-bold text-yellow-300">{new Set(stockData.map(item => item.shop)).size}</div>
            <div className="text-xs text-gray-300">Shops Monitored</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-yellow-300 text-xs mb-2">Category</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pixel-select w-full"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Shop Filter */}
          <div>
            <label className="block text-yellow-300 text-xs mb-2">Shop</label>
            <select 
              value={selectedShop} 
              onChange={(e) => setSelectedShop(e.target.value)}
              className="pixel-select w-full"
            >
              {shops.map(shop => (
                <option key={shop} value={shop}>{shop}</option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <label className="block text-yellow-300 text-xs mb-2">Sort By</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="pixel-select w-full"
            >
              <option value="name">Name</option>
              <option value="stock">Stock Level</option>
              <option value="price">Price</option>
              <option value="rarity">Rarity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stock Table */}
      <div className="pixel-card">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-3 px-2 text-yellow-300">Item</th>
                <th className="text-left py-3 px-2 text-yellow-300">Category</th>
                <th className="text-left py-3 px-2 text-yellow-300">Shop</th>
                <th className="text-left py-3 px-2 text-yellow-300">Price</th>
                <th className="text-left py-3 px-2 text-yellow-300">Stock</th>
                <th className="text-left py-3 px-2 text-yellow-300">Availability</th>
                <th className="text-left py-3 px-2 text-yellow-300">Last Restock</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-3 px-2">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-8 h-8 object-contain"
                        style={{ imageRendering: 'pixelated' }}
                      />
                      <div>
                        <div className="text-gray-300 font-semibold">{item.name}</div>
                        <div className={`text-2xs ${getRarityColor(item.rarity)}`}>{item.rarity}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-gray-300">{item.category}</td>
                  <td className="py-3 px-2 text-gray-300">{item.shop}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-300">{formatNumber(item.price)}</span>
                      <span className="text-gray-400">{item.currency === 'sheckle' ? '🪙' : '💎'}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="space-y-1">
                      <div className="text-gray-300">{item.stock}/{item.maxStock}</div>
                      <div className="w-full bg-gray-600 h-2 border border-gray-500">
                        <div 
                          className={`h-full transition-all duration-300 ${
                            getStockPercentage(item.stock, item.maxStock) > 50 
                              ? 'bg-green-500' 
                              : getStockPercentage(item.stock, item.maxStock) > 20 
                                ? 'bg-yellow-500' 
                                : 'bg-red-500'
                          }`}
                          style={{ width: `${getStockPercentage(item.stock, item.maxStock)}%` }}
                        ></div>
                      </div>
                      <div className="text-2xs text-gray-400">
                        {getStockPercentage(item.stock, item.maxStock)}%
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <span className={`text-xs font-semibold ${getAvailabilityColor(item.availability)}`}>
                      {item.availability}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-gray-400">{item.lastRestocked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="pixel-card">
          <h3 className="text-lg font-bold text-yellow-300 mb-4">⏰ Smart Shopping Strategy</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <p>• <span className="text-green-400">Track Restocks:</span> Get notified when sold-out items return</p>
            <p>• <span className="text-blue-400">Monitor Quantities:</span> See exactly how many items are left</p>
            <p>• <span className="text-purple-400">Compare Availability:</span> Check multiple shops simultaneously</p>
            <p>• <span className="text-yellow-400">Plan Investments:</span> Time purchases for maximum value</p>
          </div>
        </div>

        <div className="pixel-card">
          <h3 className="text-lg font-bold text-yellow-300 mb-4">🛒 Multi-Shop Coverage</h3>
          <div className="space-y-3 text-sm text-gray-300">
            <p>• <span className="text-green-400">Sam's Seed Shop:</span> Seeds, packs, and planting essentials</p>
            <p>• <span className="text-blue-400">Gear Store:</span> Tools, sprinklers, and automation equipment</p>
            <p>• <span className="text-purple-400">Pet Emporium:</span> Eggs, companions, and breeding supplies</p>
            <p>• <span className="text-pink-400">Event Shop:</span> Seasonal exclusives and limited-time content</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pixel-card">
        <h3 className="text-sm font-bold text-yellow-300 mb-3">Stock Status Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 border border-gray-600"></div>
            <span className="text-gray-300">In Stock (50%+ available)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 border border-gray-600"></div>
            <span className="text-gray-300">Low Stock (20-50% available)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 border border-gray-600"></div>
            <span className="text-gray-300">Critical/Out of Stock (&lt;20%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 