import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { plants } from '../data/gameData';

export const ValuesPage: React.FC = () => {
  const [selectedShop, setSelectedShop] = useState('All');

  // 根据商店分类植物
  const shops = [
    'All',
    "Tom's Shop",
    'Normal Seed Pack',
    'Exotic Seed Pack', 
    'Flower Seed Pack',
    'Summer Seed Pack',
    'Crafters Seed',
    'Lunar Glow Event',
    'Blood Moon Shop',
    'Twilight Shop',
    'Queen Bee Shop',
    "Bizzy Bear's Crafting Station",
    'Angry Plant Event',
    'Easter Event 2025',
    'Uncategorized'
  ];

  // 植物图片映射
  const getPlantImage = (plantId: string) => {
    const plantImages: { [key: string]: string } = {
      // Fruits
      'apple': '/plant/apple.png',
      'avocado': '/plant/avocado.png',
      'banana': '/plant/banana.png',
      'blueberry': '/plant/blueberry.png',
      'bloodbanana': '/plant/blood-banana.png',
      'cacao': '/plant/cacao.png',
      'cantaloupe': '/plant/cantaloupe.png',
      'celestiberry': '/plant/celestiberry.png',
      'cocovine': '/plant/cocovine.png',
      'coconut': '/plant/coconut.png',
      'cranberry': '/plant/cranberry.png',
      'cursedfruit': '/plant/cursed-fruit.png',
      'dragonfruit': '/plant/dragon-fruit.png',
      'durian': '/plant/durian.png',
      'feijoa': '/plant/feijoa.png',
      'grape': '/plant/grape.png',
      'greenapple': '/plant/green-apple.png',
      'hivefruit': '/plant/hive-fruit.png',
      'kiwi': '/plant/kiwi.png',
      'lemon': '/plant/lemon.png',
      'loquat': '/plant/loquat.png',
      'mango': '/plant/mango.png',
      'moonmango': '/plant/moon-mango.png',
      'moonmelon': '/plant/moon-melon.png',
      'nectarine': '/plant/nectarine.png',
      'papaya': '/plant/papaya.png',
      'passionfruit': '/plant/passionfruit.png',
      'peach': '/plant/peach.png',
      'pear': '/plant/pear.png',
      'pineapple': '/plant/pineapple.png',
      'pricklypear': '/plant/prickly-pear.png',
      'raspberry': '/plant/raspberry.png',
      'soulfruit': '/plant/soul-fruit.png',
      'starfruit': '/plant/starfruit.png',
      'strawberry': '/plant/strawberry.png',
      'sugarapple': '/plant/sugar-apple.png',
      'watermelon': '/plant/watermelon.png',
      
      // Vegetables
      'carrot': '/plant/carrot.png',
      'cauliflower': '/plant/cauliflower.png',
      'chocolatecarrot': '/plant/chocolate-carrot.png',
      'corn': '/plant/corn.png',
      'dragonpepper': '/plant/dragon-pepper.png',
      'eggplant': '/plant/eggplant.png',
      'pepper': '/plant/pepper.png',
      'bellpepper': '/plant/bell-pepper.png',
      'pumpkin': '/plant/pumpkin.png',
      'tomato': '/plant/tomato.png',
      'violetcorn': '/plant/violet-corn.png',
      'wildcarrot': '/plant/wild-carrot.png',
      
      // Flowers
      'beebalm': '/plant/bee-balm.png',
      'candyblossom': '/plant/candy-blossom.png',
      'candysunflower': '/plant/candy-sunflower.png',
      'cherryblossom': '/plant/cherry-blossom.png',
      'crocus': '/plant/crocus.png',
      'daffodil': '/plant/daffodil.png',
      'dandelion': '/plant/dandelion.png',
      'emberlily': '/plant/ember-lily.png',
      'foxglove': '/plant/foxglove.png',
      'honeysuckle': '/plant/honeysuckle.png',
      'lavender': '/plant/lavender.png',
      'lilac': '/plant/lilac.png',
      'lotus': '/plant/lotus.png',
      'lumira': '/plant/lumira.png',
      'manukaflower': '/plant/manuka-flower.png',
      'moonblossom': '/plant/moon-blossom.png',
      'moonflower': '/plant/moonflower.png',
      'moonglow': '/plant/moonglow.png',
      'orangetulip': '/plant/orange-tulip.png',
      'parasolflower': '/plant/parasol-flower.png',
      'pinklily': '/plant/pink-lily.png',
      'purpledahlia': '/plant/purple-dahlia.png',
      'rose': '/plant/rose.png',
      'rosydelight': '/plant/rosy-delight.png',
      'suncoil': '/plant/suncoil.png',
      'sunflower': '/plant/sunflower.png',
      
      // Plants
      'bamboo': '/plant/bamboo.png',
      'beanstalk': '/plant/beanstalk.png',
      'bendboo': '/plant/bendboo.png',
      'cactus': '/plant/cactus.png',
      'elephantears': '/plant/elephant-ears.png',
      'nectarshade': '/plant/nectarshade.png',
      'nectarthorn': '/plant/nectar-thorn.png',
      'nightshade': '/plant/nightshade.png',
      'succulent': '/plant/succulent.png',
      'venusflytrap': '/plant/venus-fly-trap.png',
      
      // Mushrooms
      'glowshroom': '/plant/glowshroom.png',
      'mushroom': '/plant/mushroom.png',
      
      // Special items
      'easteregg': '/plant/easter-egg.png',
      'redlollipop': '/plant/red-lollipop.png',
      
      // Herbs
      'mint': '/plant/mint.png'
    };
    
    return plantImages[plantId] || '/plant/currency-0.png';
  };

  const filteredPlants = selectedShop === 'All' 
    ? plants 
    : plants.filter(plant => {
        if (selectedShop === "Tom's Shop") {
          return plant.shop === 'Uncategorized' || !plant.shop;
        }
        if (selectedShop === 'Normal Seed Pack') {
          return plant.shop === 'Normal Seed';
        }
        if (selectedShop === 'Exotic Seed Pack') {
          return plant.shop === 'Exotic Seed';
        }
        if (selectedShop === 'Flower Seed Pack') {
          return plant.shop === 'Flower Seed';
        }
        if (selectedShop === 'Summer Seed Pack') {
          return plant.shop === 'Summer Seed';
        }
        return plant.shop === selectedShop;
      });

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

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatPrice = (price: { sheckle?: number; robux?: number }) => {
    if (price.sheckle) {
      return formatNumber(price.sheckle);
    } else if (price.robux) {
      return price.robux.toString();
    }
    return '-';
  };

  const getPriceType = (price: { sheckle?: number; robux?: number }) => {
    if (price.sheckle) return 'Sheckle';
    if (price.robux) return 'Robux';
    return '';
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
          <span className="text-gray-300">Values</span>
        </nav>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">
          Grow A Garden Values
        </h1>
        <p className="text-sm text-gray-300 max-w-6xl mx-auto leading-relaxed">
          Grow A Garden Values for 2025, including sell prices and minimum values for crops like carrots to mythical dragon fruit. Find all trading values of fruits!
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Category/Shop Filter</h3>
        {/* 横向滚动标签页 */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 pb-1 min-w-max border-b border-gray-600">
              {shops.map(shop => (
                <button
                  key={shop}
                  onClick={() => setSelectedShop(shop)}
                  className={`px-4 py-3 transition-all duration-300 text-sm whitespace-nowrap flex-shrink-0 relative ${
                    selectedShop === shop
                      ? 'text-yellow-300 font-semibold'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {shop}
                  {selectedShop === shop && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          {/* 右侧渐变阴影指示器 */}
          <div className="absolute right-0 top-0 bottom-1 w-12 bg-gradient-to-l from-gray-800 via-gray-800/60 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Values Table */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-8 pt-1 pb-8 border border-gray-700 mb-12">
        
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left table-fixed">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center w-20">Crop Image</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs w-32">Crop Name</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center w-24">Price</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center w-24">Min Value</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center w-24">Tier</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlants
                .sort((a, b) => {
                  // Sort by tier priority (higher tier first), then by base value (higher value first)
                  const tierOrder = { 'Prismatic': 7, 'Divine': 6, 'Mythical': 5, 'Legendary': 4, 'Rare': 3, 'Uncommon': 2, 'Common': 1 };
                  const aTierValue = tierOrder[a.category as keyof typeof tierOrder] || 0;
                  const bTierValue = tierOrder[b.category as keyof typeof tierOrder] || 0;
                  
                  if (aTierValue !== bTierValue) {
                    return bTierValue - aTierValue;
                  }
                  return b.baseValue - a.baseValue;
                })
                .map((plant, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                  <td className="p-3 text-center">
                    <img 
                      src={getPlantImage(plant.id)} 
                      alt={plant.name} 
                      className="w-12 h-12 object-contain rounded-lg mx-auto"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/plant/currency-0.png';
                      }}
                    />
                  </td>
                  <td className="p-3 text-white font-semibold text-sm">{plant.name}</td>
                  <td className="p-3 text-center">
                    {plant.price ? (
                      <div className="flex flex-col items-center">
                        <span className="text-green-400 font-semibold text-sm">
                          {formatPrice(plant.price)}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {getPriceType(plant.price)}
                        </span>
                      </div>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    <span className="text-blue-400 font-semibold text-sm">
                      {formatNumber(plant.baseValue)}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getTierBadgeColor(plant.category)} text-white`}>
                      {plant.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {filteredPlants
            .sort((a, b) => {
              const tierOrder = { 'Prismatic': 7, 'Divine': 6, 'Mythical': 5, 'Legendary': 4, 'Rare': 3, 'Uncommon': 2, 'Common': 1 };
              const aTierValue = tierOrder[a.category as keyof typeof tierOrder] || 0;
              const bTierValue = tierOrder[b.category as keyof typeof tierOrder] || 0;
              
              if (aTierValue !== bTierValue) {
                return bTierValue - aTierValue;
              }
              return b.baseValue - a.baseValue;
            })
            .map((plant, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="flex items-start space-x-4">
                <img 
                  src={getPlantImage(plant.id)} 
                  alt={plant.name} 
                  className="w-16 h-16 object-contain rounded-lg flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/plant/currency-0.png';
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold text-lg">{plant.name}</h3>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getTierBadgeColor(plant.category)} text-white`}>
                      {plant.category}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-gray-400">Price:</span>
                      <div className="text-green-400 font-semibold">
                        {plant.price ? `${formatPrice(plant.price)} ${getPriceType(plant.price)}` : '-'}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Min Value:</span>
                      <div className="text-blue-400 font-semibold">
                        {formatNumber(plant.baseValue)}
                      </div>
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
        {/* Understanding Values */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Understanding Grow a Garden Values</h2>
          <div className="text-gray-300 text-sm leading-relaxed space-y-4">
            <p>
              In Grow a Garden, values refer to the in-game market prices of crops, seeds, pets, and gear, influenced by factors like rarity, mutations, weight, and demand. Crops are the heart of the game, grown from seeds purchased at Sam's Shop, earned through events, or obtained via trading. Each crop has a base price, but its final value can skyrocket with mutations (like Gold, Disco, or HoneyGlazed) or increase based on its weight and yield.
            </p>
            <p>
              For example, rare crops like Moon Melon or Candy Blossom can fetch millions or even billions of in-game currency when stacked with high-value mutations. Understanding these values helps players make strategic decisions about which crops to grow, when to sell, and how to maximize their profits in the game's dynamic economy.
            </p>
          </div>
        </div>

        {/* Value Factors */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Factors Affecting Crop Values</h2>
          <div className="text-gray-300 text-sm leading-relaxed">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Base Rarity:</strong> Common crops like Carrots have low base values, while Prismatic crops like Sugar Apple command premium prices.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Mutations:</strong> Special mutations can multiply crop values by 2x to 150x, dramatically increasing their worth.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Weight:</strong> Heavier crops generally sell for more, with weight affecting the final calculation formula.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Market Demand:</strong> Event crops and limited-time varieties often have higher trading values due to scarcity.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Harvest Type:</strong> Multi-harvest crops provide ongoing value, while single-harvest crops offer one-time profits.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trading Tips */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Trading & Investment Tips</h2>
          <div className="text-gray-300 text-sm leading-relaxed">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Focus on High-Value Mutations:</strong> Invest in crops that can receive valuable mutations like Shocked, Dawnbound, or Voidtouched.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Event Timing:</strong> Stock up on event-specific crops during their availability periods for future trading.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Multi-Harvest Advantage:</strong> Prioritize multi-harvest crops for sustained income over time.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Weight Optimization:</strong> Use gear and pets that increase crop weight for maximum value returns.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 