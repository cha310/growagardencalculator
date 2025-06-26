import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

export const CropsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 作物数据
  const crops = [
    { name: 'Carrot', image: '/plant/carrot.png', price: { sheckle: 10, robux: 7 }, value: 18, weight: 0.24, tier: 'Common', harvest: 'Single', obtainable: 'YES' },
    { name: 'Strawberry', image: '/plant/strawberry.png', price: { sheckle: 50, robux: 21 }, value: 14, weight: 0.29, tier: 'Common', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Blueberry', image: '/plant/blueberry.png', price: { sheckle: 400, robux: 49 }, value: 18, weight: 0.17, tier: 'Uncommon', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Tomato', image: '/plant/tomato.png', price: { sheckle: 800, robux: 79 }, value: 27, weight: 0.44, tier: 'Rare', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Cauliflower', image: '/plant/cauliflower.png', price: { sheckle: 1300, robux: 135 }, value: 36, weight: 4.74, tier: 'Rare', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Watermelon', image: '/plant/watermelon.png', price: { sheckle: 2500, robux: 195 }, value: 2708, weight: 7.3, tier: 'Rare', harvest: 'Single', obtainable: 'YES' },
    { name: 'Green Apple', image: '/plant/green-apple.png', price: { sheckle: 3500, robux: 399 }, value: 271, weight: 2.85, tier: 'Legendary', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Avocado', image: '/plant/avocado.png', price: { sheckle: 5000, robux: 419 }, value: 91, weight: 3.32, tier: 'Legendary', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Banana', image: '/plant/banana.png', price: { sheckle: 7000, robux: 459 }, value: 1805, weight: 1.42, tier: 'Legendary', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Pineapple', image: '/plant/pineapple.png', price: { sheckle: 7500, robux: 475 }, value: 1805, weight: 2.85, tier: 'Mythical', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Kiwi', image: '/plant/kiwi.png', price: { sheckle: 10000, robux: 529 }, value: 2482, weight: 4.75, tier: 'Mythical', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Bell Pepper', image: '/plant/bell-pepper.png', price: { sheckle: 55000, robux: 589 }, value: 4964, weight: 7.61, tier: 'Mythical', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Prickly Pear', image: '/plant/prickly-pear.png', price: { sheckle: 555000, robux: 599 }, value: 6319, weight: 6.65, tier: 'Mythical', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Loquat', image: '/plant/loquat.png', price: { sheckle: 900000, robux: 629 }, value: 7220, weight: 6.17, tier: 'Divine', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Feijoa', image: '/plant/feijoa.png', price: { sheckle: 2750000, robux: 679 }, value: 11733, weight: 9.5, tier: 'Divine', harvest: 'Multi', obtainable: 'YES' },
    { name: 'Sugar Apple', image: '/plant/sugar-apple.png', price: { sheckle: 25000000, robux: 819 }, value: 43320, weight: 8.55, tier: 'Prismatic', harvest: 'Multi', obtainable: 'YES' }
  ];

  const categories = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic'];

  const filteredCrops = selectedCategory === 'All' 
    ? crops 
    : crops.filter(crop => crop.tier === selectedCategory);

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

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/wiki" className="text-yellow-300 hover:text-yellow-400 transition-colors">
              Wiki
            </Link>
            <span className="text-gray-500">›</span>
            <span className="text-gray-300">Crops</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Grow a Garden Crops
          </h1>
          <div className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed">
            <p className="mb-4">
              Hey, fellow gardeners! If you're diving into the colorful world of Grow a Garden on Roblox, you're probably wondering, "What are crops, and how do I make the most of them?" Well, buckle up, because crops are the heart and soul of this awesome gardening simulator!
            </p>
            <p>
              Whether you're a newbie planting your first carrot or a seasoned farmer chasing those rare mutations, understanding crops is key to building a thriving, money-making garden. Let's break it down in true grower style, with all the tips you need to get your green thumb glowing!
            </p>
          </div>
        </div>

        {/* What Are Crops Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">What Are Crops in Grow a Garden?</h2>
          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              In Grow a Garden, crops are the plants you grow from seeds in your personal garden plot. These crops range from classic veggies like carrots and pumpkins to exotic fruits like Moon Mango and Hive Fruit, each with unique appearances, growth times, and sell values.
            </p>
            <p>
              You plant seeds, wait for them to grow (in real-time hours), and then harvest the crops to sell for Sheckles, the in-game currency, at Steven's Stand. Some crops are single-harvest, meaning you pick them once and they're gone, while others are multi-harvest, regrowing fruits or veggies every few minutes for continuous profits. Pretty sweet, right?
            </p>
            <p>
              Crops are the main way to earn cash in Grow a Garden, and they come in different rarities—<span className="text-gray-300">Common</span>, <span className="text-green-400">Uncommon</span>, <span className="text-blue-400">Rare</span>, <span className="text-purple-400">Legendary</span>, <span className="text-pink-400">Mythical</span>, <span className="text-yellow-400">Divine</span>, and <span className="bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">Prismatic</span>. The rarer the crop, the longer it takes to grow, but the bigger the payout!
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Filter by Tier:</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-300 text-gray-900 font-semibold'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Crops Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">All Crops in Grow a Garden</h2>
          
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="p-4 text-yellow-300 font-semibold">Image</th>
                  <th className="p-4 text-yellow-300 font-semibold">Name</th>
                  <th className="p-4 text-yellow-300 font-semibold">Price (Sheckle / Robux)</th>
                  <th className="p-4 text-yellow-300 font-semibold">Min Value / Weight(kg)</th>
                  <th className="p-4 text-yellow-300 font-semibold">Tier</th>
                  <th className="p-4 text-yellow-300 font-semibold">Harvest</th>
                  <th className="p-4 text-yellow-300 font-semibold">Obtainable</th>
                </tr>
              </thead>
              <tbody>
                {filteredCrops.map((crop, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <td className="p-4">
                      <img 
                        src={crop.image} 
                        alt={crop.name} 
                        className="w-12 h-12 object-contain rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/plant/currency-0.png';
                        }}
                      />
                    </td>
                    <td className="p-4 text-white font-semibold">{crop.name}</td>
                    <td className="p-4 text-gray-300">{formatNumber(crop.price.sheckle)} / {crop.price.robux}</td>
                    <td className="p-4 text-gray-300">{formatNumber(crop.value)} / {crop.weight}</td>
                    <td className={`p-4 font-semibold ${getTierColor(crop.tier)}`}>{crop.tier}</td>
                    <td className="p-4 text-gray-300">{crop.harvest === 'Single' ? '-' : 'Multi'}</td>
                    <td className="p-4 text-green-400 font-semibold">{crop.obtainable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCrops.map((crop, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center mb-3">
                  <img 
                    src={crop.image} 
                    alt={crop.name} 
                    className="w-16 h-16 object-contain rounded-lg mr-4"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/plant/currency-0.png';
                    }}
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg">{crop.name}</h3>
                    <span className={`font-semibold ${getTierColor(crop.tier)}`}>{crop.tier}</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-gray-300">{formatNumber(crop.price.sheckle)} / {crop.price.robux}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Value/Weight:</span>
                    <span className="text-gray-300">{formatNumber(crop.value)} / {crop.weight}kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Harvest:</span>
                    <span className="text-gray-300">{crop.harvest === 'Single' ? 'Single' : 'Multi'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Obtainable:</span>
                    <span className="text-green-400 font-semibold">{crop.obtainable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Crops Make Grow a Garden So Fun */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Crops Make Grow a Garden So Fun?</h2>
          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              Crops aren't just about making money—they're about creativity and community! Show off your garden's unique layout to friends, trade rare mutated crops, or compete to grow the most epic plants.
            </p>
            <p>
              With abundant crops to discover (and counting!), from blocky Mushrooms to towering Beanstalks, there's always something new to plant. Plus, the thrill of seeing a crop mutate into a sparkly, billion-Sheckle masterpiece? Unbeatable.
            </p>
            <p className="text-yellow-300 font-semibold">
              So, what are you waiting for? Grab some seeds, plant your plot, and start growing your way to gardening glory in Grow a Garden!
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gray-900 mt-8 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Left - Domain/Brand */}
              <div>
                <h3 className="text-sm font-semibold text-yellow-300 mb-2">growagardencalculator.me</h3>
                <p className="text-xs text-gray-300 mb-3">
                  Free tool for Roblox players to track prices, optimize harvests, and maximize profits.
                </p>
              </div>

              {/* Center - Quick Actions */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-yellow-300 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/" className="text-green-400 py-2 px-4 rounded hover:text-green-300 transition-colors inline-block">
                    🏠 Home
                  </Link>
                  <Link to="/wiki" className="text-green-400 py-2 px-4 rounded hover:text-green-300 transition-colors inline-block ml-4">
                    📚 Wiki
                  </Link>
                  <Link to="/faqs" className="text-green-400 py-2 px-4 rounded hover:text-green-300 transition-colors inline-block ml-4">
                    📋 FAQs
                  </Link>
                </div>
              </div>

              {/* Right - Play Game */}
              <div className="text-center md:text-right">
                <h3 className="text-lg font-semibold text-yellow-300 mb-4">Play Grow a Garden</h3>
                <a 
                  href="https://www.roblox.com/games/126884695634066/Grow-a-Garden" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-400 py-3 px-4 rounded-lg font-semibold hover:text-green-300 transition-colors mb-3 inline-flex items-center"
                >
                  Play on Roblox
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 