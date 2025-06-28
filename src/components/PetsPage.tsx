import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pets } from '../data/gameData';

export const PetsPage: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState('All');

  const tiers = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic'];

  const filteredPets = selectedTier === 'All' 
    ? pets 
    : pets.filter(pet => pet.tier === selectedTier);

  const getTierColor = (tier: string) => {
    const colors = {
      'Common': 'text-gray-300',
      'Uncommon': 'text-green-400',
      'Rare': 'text-blue-400',
      'Legendary': 'text-purple-400',
      'Mythical': 'text-pink-400',
      'Divine': 'text-yellow-400',
      'Prismatic': 'text-rainbow bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent'
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
      'Prismatic': 'bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'
    };
    return colors[tier as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link to="/grow-a-garden-wiki" className="text-yellow-300 hover:text-yellow-400 transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Wiki
          </Link>
          <span className="text-gray-500">›</span>
          <span className="text-gray-300">Pets</span>
        </nav>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-yellow-300 mb-4">
          Grow A Garden Pets
        </h1>
        <p className="text-xs text-gray-300 max-w-6xl mx-auto leading-relaxed">
          Discover all pets in Roblox's Grow a Garden! From adorable common pets to rare divine creatures, each pet has unique abilities to help you grow your garden more efficiently. Explore pet traits, rarity tiers, and obtainability.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">All Pets in Grow a Garden</h3>
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



      {/* All Pets Section */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-8 pt-1 pb-8 border border-gray-700 mb-12">
        
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left table-fixed">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Image</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs">Name</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs">Trait</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Rarity</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Obtainable</th>
              </tr>
            </thead>
            <tbody>
              {filteredPets.map((pet, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                  <td className="p-3 text-center">
                    <img 
                      src={pet.image} 
                      alt={pet.name} 
                      className="w-12 h-12 object-contain rounded-lg mx-auto"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/pet/growagardencalculator.png';
                      }}
                    />
                  </td>
                  <td className="p-3 text-white font-semibold text-sm">{pet.name}</td>
                  <td className="p-3 text-gray-300 text-sm max-w-md">{pet.trait}</td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTierBadgeColor(pet.tier)} text-white`}>
                      {pet.tier}
                    </span>
                  </td>
                  <td className={`p-3 font-semibold text-sm text-center ${pet.obtainable ? 'text-green-400' : 'text-red-400'}`}>
                    {pet.obtainable ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {filteredPets.map((pet, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="flex items-start space-x-4">
                <img 
                  src={pet.image} 
                  alt={pet.name} 
                  className="w-16 h-16 object-contain rounded-lg flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/pet/growagardencalculator.png';
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-lg">{pet.name}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getTierBadgeColor(pet.tier)} text-white`}>
                      {pet.tier}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3">{pet.trait}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Obtainable:</span>
                    <span className={`text-sm font-semibold ${pet.obtainable ? 'text-green-400' : 'text-red-400'}`}>
                      {pet.obtainable ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information Sections */}
      <div className="space-y-8 mb-12">
        {/* About Pets */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">About Pets in Grow a Garden</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
            <p>
              Grow a Garden pets are adorable and functional companions introduced in the popular Roblox farming game Grow a Garden, starting with the 1.04.0 update known as The Animal Update. These pets are much more than just cute additions to your farm—they actively support your gardening efforts by providing various in-game benefits and perks that enhance gameplay and crop management.
            </p>
            <p>
              In Grow a Garden, pets are collectible animals hatched from different types of eggs available in the Pet Egg stall. There are over 50 pets, currently in seven rarity tiers: Common, Uncommon, Rare, Legendary, Mythical, Divine, and Prismatic. Each pet has unique abilities that help players grow their gardens more efficiently by speeding up crop growth, increasing harvest yields, generating free seeds, providing mutation chances, and even interacting with neighboring players' gardens.
            </p>
          </div>
        </div>

        {/* How Pets Work */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">How Do Pets Work in Grow a Garden?</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Pet Abilities:</strong> Each pet comes with a specific trait or skill. For example, some pets can dig up free seeds periodically, others boost the growth rate or size of nearby fruits, and some increase the chances of crop mutations, which are valuable for rare and powerful plant variants.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Stacking Effects:</strong> Pet abilities stack, meaning having multiple pets with similar traits can amplify their benefits. For instance, owning several pets that increase mutation chances or crop growth speed will enhance those effects cumulatively.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Pet Slots:</strong> Players can equip up to eight pets simultaneously, allowing for a strategic combination of abilities to maximize garden productivity.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Pets Are Important */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Why Are Pets Important in Grow a Garden?</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
            <p>
              Pets add a dynamic and engaging layer to Grow a Garden by making farming less monotonous and more strategic. They help players:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Increase crop growth speed and size</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Gain extra seeds and resources without extra effort</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Boost mutation chances for rare plants</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Enhance overall farming efficiency and profits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Add charm and life to their gardens with their animations and behaviors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Back to Calculator */}
      <div className="text-center mb-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ← Calculator
          </Link>
          <Link 
            to="/grow-a-garden-wiki" 
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ← Back to Wiki
          </Link>
        </div>
      </div>
    </div>
  );
}; 