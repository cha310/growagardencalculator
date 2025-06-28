"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { gears } from '../data/gameData';

export const GearsPage: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('All');

  const tiers = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Craftables'];

  const filteredGears = selectedTier === 'All' 
    ? gears 
    : gears.filter(gear => gear.tier === selectedTier);

  const getTierColor = (tier: string) => {
    const colors = {
      'Common': 'text-gray-300',
      'Uncommon': 'text-green-400',
      'Rare': 'text-blue-400',
      'Legendary': 'text-purple-400',
      'Mythical': 'text-pink-400',
      'Divine': 'text-yellow-400',
      'Craftables': 'text-orange-400'
    };
    return colors[tier as keyof typeof colors] || 'text-gray-300';
  };

  const getTierBadgeColor = (tier: string) => {
    const colors = {
      'Common': 'bg-gray-600',
      'Uncommon': 'bg-green-600',
      'Rare': 'bg-blue-600',
      'Legendary': 'bg-purple-600',
      'Mythical': 'bg-pink-600',
      'Divine': 'bg-yellow-600',
      'Craftables': 'bg-orange-600'
    };
    return colors[tier as keyof typeof colors] || 'bg-gray-600';
  };

  const formatPrice = (price: any) => {
    if (price.sheckle) return `${price.sheckle.toLocaleString()} Sheckles`;
    if (price.robux) return `${price.robux} Robux`;
    if (price.honey) return `${price.honey} Honey`;
    if (price.lunarPoint) return `${price.lunarPoint} Lunar Points`;
    if (price.other) return price.other;
    return 'Unknown';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/grow-a-garden-wiki" className="text-yellow-300 hover:text-yellow-400 transition-colors">
            Wiki
          </Link>
          <span className="text-gray-500">›</span>
          <span className="text-gray-300">Gears</span>
        </nav>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">
          Grow A Garden Gears
        </h1>
        <p className="text-xs text-gray-300 max-w-6xl mx-auto leading-relaxed">
          Discover all the essential tools and equipment in Roblox's Grow a Garden! From basic watering cans to divine artifacts, each gear serves a specific purpose to help you cultivate your garden more efficiently. Explore gear descriptions, rarity tiers, and pricing information.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">All Gears in Grow a Garden</h3>
        {/* 横向滚动标签页 */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 pb-1 min-w-max border-b border-gray-600">
              {tiers.map(tier => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-4 py-3 transition-all duration-300 text-sm whitespace-nowrap flex-shrink-0 relative ${
                    selectedTier === tier
                      ? 'text-yellow-300 font-semibold'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {tier}
                  {selectedTier === tier && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* 右侧渐变阴影指示器 - 更自然的渐变 */}
          <div className="absolute right-0 top-0 bottom-1 w-12 bg-gradient-to-l from-gray-800 via-gray-800/60 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* All Gears Section */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-8 pt-1 pb-8 border border-gray-700 mb-12">
        
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left table-fixed">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Image</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs">Name</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs">Description</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Price</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Rarity</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Obtainable</th>
              </tr>
            </thead>
            <tbody>
              {filteredGears.map((gear, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                  <td className="p-3 text-center">
                    <img 
                      src={gear.image} 
                      alt={gear.name} 
                      className="w-12 h-12 object-contain rounded-lg mx-auto"
                    />
                  </td>
                  <td className="p-3 text-white font-semibold text-sm">{gear.name}</td>
                  <td className="p-3 text-gray-300 text-sm max-w-md">{gear.description}</td>
                  <td className="p-3 text-gray-300 text-sm text-center">{formatPrice(gear.price)}</td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTierBadgeColor(gear.tier)} text-white`}>
                      {gear.tier}
                    </span>
                  </td>
                  <td className={`p-3 font-semibold text-sm text-center ${gear.obtainable ? 'text-green-400' : 'text-red-400'}`}>
                    {gear.obtainable ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {filteredGears.map((gear, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="flex items-start space-x-4">
                <img 
                  src={gear.image} 
                  alt={gear.name} 
                  className="w-16 h-16 object-contain rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-lg">{gear.name}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getTierBadgeColor(gear.tier)} text-white`}>
                      {gear.tier}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{gear.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Price:</span>
                      <span className="text-sm text-gray-300">{formatPrice(gear.price)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Obtainable:</span>
                      <span className={`text-sm font-semibold ${gear.obtainable ? 'text-green-400' : 'text-red-400'}`}>
                        {gear.obtainable ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information Sections */}
      <div className="space-y-8 mb-12">
        {/* About Gears */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">About Gears in Grow a Garden</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
            <p>
              Gears in Grow a Garden are essential tools and equipment that enhance your farming capabilities and garden management. From simple watering cans to advanced mystical artifacts, these items provide various benefits including faster crop growth, automated watering, improved harvesting efficiency, and special mutation opportunities.
            </p>
            <p>
              Gears are available in different rarity tiers: Common, Uncommon, Rare, Legendary, Mythical, Divine, and special Craftables. Each tier generally offers more powerful effects and capabilities. Some gears can be purchased with Sheckles, Robux, Honey, or Lunar Points, while others require special crafting materials or are only available during events.
            </p>
          </div>
        </div>

        {/* How Gears Work */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">How Do Gears Work in Grow a Garden?</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Equipment Slots:</strong> Players can equip multiple gears simultaneously, with each piece serving different functions in your garden operations.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Automation Tools:</strong> Many gears like sprinklers provide automation benefits, reducing the manual work required to maintain your garden.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Enhancement Effects:</strong> Gears can provide various benefits including growth speed bonuses, mutation chances, harvest efficiency, and special abilities.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Specialized Functions:</strong> Some gears are designed for specific crop types or conditions, such as the Tropical Mist Sprinkler for exotic fruits or the Night Staff for lunar-powered effects.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Gears Are Important */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Why Are Gears Important in Grow a Garden?</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
            <p>
              Gears are crucial for advancing your farming operations and maximizing efficiency. They help players:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Automate repetitive tasks like watering and harvesting</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Increase crop growth speed and quality</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Access special mutation opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Expand garden capabilities and coverage area</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Optimize resource management and efficiency</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Unlock advanced farming strategies and techniques</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Calculator */}
      <div className="text-center mb-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/" 
            className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto"
           
          >
            ← Calculator
          </Link>
          <Link 
            href="/grow-a-garden-wiki" 
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
           
          >
            ← Back to Wiki
          </Link>
        </div>
      </div>
    </div>
  );
}; 