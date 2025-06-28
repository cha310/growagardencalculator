import React from 'react';
import Link from 'next/link';
import { eggs } from '../data/gameData';

export const EggsPage: React.FC = () => {
  const formatPrice = (price: any) => {
    const parts = [];
    if (price.robux) parts.push(`Robux: ${price.robux}`);
    if (price.sheckle) parts.push(`Sheckle: ${price.sheckle.toLocaleString()}`);
    if (price.honey) parts.push(`Honey: ${price.honey}`);
    return parts;
  };

  const formatHatchTime = (hatchTime: any) => {
    if (hatchTime.premium) {
      return {
        free: `Free: ${hatchTime.free}`,
        premium: `Premium: ${hatchTime.premium}`
      };
    }
    return hatchTime.free;
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
          <span className="text-gray-300">Eggs</span>
        </nav>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">
          Grow A Garden Eggs
        </h1>
        <p className="text-xs text-gray-300 max-w-6xl mx-auto leading-relaxed">
          Pet Eggs are special items in Grow a Garden that you can buy, hatch, and use to bring adorable pets into your garden. Each egg type corresponds to different pet species, rarity, hatch times, and costs.
        </p>
      </div>

      {/* How to Get Eggs Section */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">How to Get Eggs in Grow a Garden</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4">How to Get Eggs</h3>
          <ul className="text-gray-300 text-xs leading-relaxed space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-300 mr-3 mt-1">•</span>
              <span>Purchase Pet Eggs from the Pet Eggs shop, which refreshes every 30 minutes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-3 mt-1">•</span>
              <span>Eggs cannot be gifted and are obtained through normal gameplay.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-3 mt-1">•</span>
              <span>Check the egg types in the shop, as each egg has a chance to yield different pets.</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">How to Hatch Eggs</h3>
          <ul className="text-gray-300 text-xs leading-relaxed space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-300 mr-3 mt-1">•</span>
              <span>Equip an egg from your inventory and place it on any space on your plot.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-3 mt-1">•</span>
              <span>Wait for the egg to hatch naturally.</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">To speed up hatching:</strong>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Pay Robux to skip the growth time.</li>
                  <li>• Use pets like Chickens, Roosters, or Blood Kiwis to reduce hatch time.</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-300 mr-3 mt-1">•</span>
              <div>
                <strong className="text-white">By default, you can hatch 3 eggs at a time. Increase this limit by:</strong>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Buying additional slots in the shop with Robux.</li>
                  <li>• Trading aged pets to add up to 5 extra slots.</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* All Eggs Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">All Eggs in Grow a Garden</h3>
      </div>

      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl px-8 pt-1 pb-8 border border-gray-700 mb-12">
        
        {/* Desktop Table */}
        <div className="hidden lg:block">
          <table className="w-full text-left table-fixed">
            <colgroup>
              <col className="w-32" />
              <col className="w-72" />
              <col className="w-64" />
              <col className="w-64" />
              <col className="w-auto" />
            </colgroup>
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Image</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Name</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Price</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs text-center">Hatch Time</th>
                <th className="p-3 text-yellow-300 font-semibold text-xs">Hatching Probabilities</th>
              </tr>
            </thead>
            <tbody>
              {eggs.map((egg, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                  <td className="p-2 text-center">
                    <img 
                      src={egg.image} 
                      alt={egg.name} 
                      className="w-10 h-10 object-contain rounded-lg mx-auto"
                    />
                  </td>
                  <td className="p-3 text-white font-semibold text-sm text-center">{egg.name}</td>
                  <td className="p-3 text-gray-300 text-sm text-center">
                    <div className="space-y-0.5">
                      {formatPrice(egg.price).map((priceItem, priceIndex) => (
                        <div key={priceIndex} className="text-xs">{priceItem}</div>
                      ))}
                    </div>
                  </td>
                  <td className="p-3 text-gray-300 text-sm text-center">
                    {typeof formatHatchTime(egg.hatchTime) === 'object' ? (
                      <div className="space-y-0.5">
                        <div className="text-xs">{formatHatchTime(egg.hatchTime).free}</div>
                        <div className="text-xs">{formatHatchTime(egg.hatchTime).premium}</div>
                      </div>
                    ) : (
                      <div className="text-xs">{formatHatchTime(egg.hatchTime)}</div>
                    )}
                  </td>
                  <td className="p-3 text-gray-300 text-sm">
                    <div className="space-y-0.5">
                      {egg.probabilities.map((prob: any, probIndex: number) => (
                        <div key={probIndex} className="flex items-center gap-1">
                          <span className="text-gray-300 text-xs">{prob.pet}:</span>
                          <span className="text-yellow-300 font-semibold text-xs">{prob.chance}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {eggs.map((egg, index) => (
            <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="flex items-start space-x-4">
                <img 
                  src={egg.image} 
                  alt={egg.name} 
                  className="w-16 h-16 object-contain rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-lg mb-2">{egg.name}</h3>
                  <div className="space-y-2 mb-3">
                    <div>
                      <span className="text-sm text-gray-400">Price:</span>
                      <div className="mt-1">
                        {formatPrice(egg.price).map((priceItem, priceIndex) => (
                          <div key={priceIndex} className="text-sm text-gray-300">{priceItem}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Hatch Time:</span>
                      <div className="mt-1">
                        {typeof formatHatchTime(egg.hatchTime) === 'object' ? (
                          <div className="space-y-0.5">
                            <div className="text-sm text-gray-300">{formatHatchTime(egg.hatchTime).free}</div>
                            <div className="text-sm text-gray-300">{formatHatchTime(egg.hatchTime).premium}</div>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-300">{formatHatchTime(egg.hatchTime)}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 mb-2">Hatching Probabilities:</h4>
                    <div className="space-y-1">
                      {egg.probabilities.map((prob: any, probIndex: number) => (
                        <div key={probIndex} className="flex justify-between text-sm">
                          <span className="text-gray-300">{prob.pet}:</span>
                          <span className="text-yellow-300 font-semibold">{prob.chance}</span>
                        </div>
                      ))}
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
        {/* About Eggs */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">About Eggs in Grow a Garden</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
            <p>
              Pet Eggs are one of the most exciting features in Grow a Garden, offering players the chance to obtain various pets that can significantly enhance their farming experience. Each egg type has different costs, hatch times, and probability distributions for the pets they can produce.
            </p>
            <p>
              The egg system adds an element of excitement and strategy to the game, as players must decide which eggs to invest in based on their budget, desired pets, and risk tolerance. Some eggs offer guaranteed common pets, while others provide rare chances at legendary or mythical companions.
            </p>
          </div>
        </div>

        {/* Egg Strategy Tips */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Egg Strategy Tips</h2>
          <div className="text-gray-300 text-xs leading-relaxed space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Start with Common Eggs:</strong> If you're new to the game, Common Eggs provide reliable pets at an affordable price.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Check Shop Timing:</strong> The Pet Eggs shop refreshes every 30 minutes, so plan your purchases accordingly.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Consider Hatch Time Pets:</strong> Pets like Chickens and Roosters can reduce hatch times for future eggs.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Manage Your Slots:</strong> With only 3 default hatching slots, prioritize which eggs to hatch simultaneously.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white">Premium vs Free Hatching:</strong> Some eggs offer premium instant hatching options - weigh the cost vs time savings.
                </div>
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