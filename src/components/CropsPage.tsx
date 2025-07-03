'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { plants } from '../data/gameData';
import { OptimizedImage } from '@/components/OptimizedImage';

export const CropsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      'mint': '/plant/mint.png',
      
      // Special mappings
      'cabbageee': '/plant/Cabbageee.webp',
      'lime': '/plant/Lime_possible_appearance.webp'
    };
    
    return plantImages[plantId] || '/plant/currency-0.png';
  };

  // 将gameData中的plants数据转换为crops页面需要的格式
  const crops = plants.map(plant => ({
    name: plant.name,
    image: getPlantImage(plant.id),
    price: { 
      sheckle: Math.round(plant.baseValue * 0.5), // 估算价格，可根据实际游戏数据调整
      robux: Math.round(plant.baseValue * 0.02) // 估算Robux价格
    },
    value: plant.baseValue,
    weight: Math.round(plant.baseValue * 0.001 * 100) / 100, // 估算重量
    tier: plant.category,
    harvest: 'Multi', // 大部分植物都是Multi harvest
    obtainable: plant.obtainable === false ? 'NO' : 'YES',
    category: plant.shop || "Tom's Shop" // 使用商店信息，如果没有则默认为Tom's Shop
  }));

  const categories = [
    'All',
    "Tom's Shop", 
    'Queen Bee Shop', 
    'Twilight Shop', 
    'Blood Moon Shop', 
    'Crafters Seed', 
    'Summer Seed', 
    'Flower Seed', 
    'Exotic Seed', 
    'Normal Seed', 
    'Lunar Glow Event', 
    'Angry Plant Event', 
    'Easter Event 2025', 
    "Bizzy Bear's Crafting Station", 
    'Uncategorized'
  ];

  const filteredCrops = selectedCategory === 'All' 
    ? crops 
    : crops.filter(crop => crop.category === selectedCategory);

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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/grow-a-garden-wiki" className="text-blue-400 hover:text-blue-300">
              Wiki
            </Link>
            <span className="text-gray-500">›</span>
            <span className="text-gray-300">Crops</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-300 mb-4">
            Grow A Garden Crops
          </h1>
          <p className="text-xs text-gray-300 max-w-6xl mx-auto leading-relaxed">
            Hey, fellow gardeners! If you're diving into the colorful world of Grow a Garden on Roblox, you're probably wondering, "What exactly are crops, and how can I maximize them?" Well, get ready—because crops are the lifeblood of this fantastic gardening sim! Whether you're a beginner sowing your first radish or a pro farmer hunting for those elusive mutations, mastering crops is the secret to cultivating a flourishing, profit-making paradise. Let's dig into the dirt and uncover all the juicy tips you need to make your garden thrive! 🌱
          </p>
        </div>

        {/* What Are Crops Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What Are Crops in Grow a Garden?</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
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
            <h3 className="text-2xl font-bold text-white mb-4">All Crops in Grow a Garden </h3>
            {/* 横向滚动标签页 */}
            <div className="relative">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-1 pb-1 min-w-max border-b border-gray-600">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-3 transition-all duration-300 text-sm whitespace-nowrap flex-shrink-0 relative ${
                        selectedCategory === category
                          ? 'text-yellow-300 font-semibold'
                          : 'text-gray-400 hover:text-gray-300'
                      }`}
                    >
                      {category}
                      {selectedCategory === category && (
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

        {/* All Crops Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-8 pt-1 pb-8 border border-gray-700 mb-12">
          
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <table className="w-full text-left table-fixed">
              <colgroup>
                <col className="w-20" />
                <col className="w-32" />
                <col className="w-32" />
                <col className="w-32" />
                <col className="w-24" />
                <col className="w-20" />
                <col className="w-24" />
              </colgroup>
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Image</th>
                  <th className="p-3 text-yellow-300 font-semibold text-xs">Name</th>
                  <th className="p-3 text-yellow-300 font-semibold text-xs text-center">
                    <div>Price</div>
                    <div>(Sheckle / Robux)</div>
                  </th>
                  <th className="p-3 text-yellow-300 font-semibold text-xs text-center">
                    <div>Min Value /</div>
                    <div>Weight(kg)</div>
                  </th>
                  <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Tier</th>
                  <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Harvest</th>
                  <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Obtainable</th>
                </tr>
              </thead>
              <tbody>
                {filteredCrops.map((crop, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <td className="p-3 text-center">
                      <OptimizedImage 
                        src={crop.image} 
                        alt={crop.name} 
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain rounded-lg mx-auto"
                      />
                    </td>
                    <td className="p-3 text-white font-semibold text-sm">{crop.name}</td>
                    <td className="p-3 text-gray-300 text-sm text-center">{formatNumber(crop.price.sheckle)} / {crop.price.robux}</td>
                    <td className="p-3 text-gray-300 text-sm text-center">{formatNumber(crop.value)} / {crop.weight}</td>
                    <td className={`p-3 font-semibold text-sm text-center ${getTierColor(crop.tier)}`}>{crop.tier}</td>
                    <td className="p-3 text-gray-300 text-sm text-center">{crop.harvest === 'Single' ? '-' : 'Multi'}</td>
                  <td className={`p-3 font-semibold text-sm text-center ${crop.obtainable === 'YES' ? 'text-green-400' : 'text-red-400'}`}>{crop.obtainable}</td>
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
                  <OptimizedImage 
                    src={crop.image} 
                    alt={crop.name} 
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain rounded-lg mr-4"
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
                  <span className={`font-semibold ${crop.obtainable === 'YES' ? 'text-green-400' : 'text-red-400'}`}>{crop.obtainable}</span>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Crops Make Grow a Garden So Fun */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Why Crops Make Grow a Garden So Fun?</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
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