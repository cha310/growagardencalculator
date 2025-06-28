import React from 'react';
import Link from 'next/link';

export const EasterEvent2025Page: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-yellow-300">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/grow-a-garden-events" className="hover:text-yellow-300">Events</Link>
        <span className="mx-2">›</span>
        <span className="text-white">Easter Event 2025</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-yellow-300 mb-2">Easter Event 2025</h1>
            <div className="flex items-center justify-center space-x-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-600 text-gray-300">
                <span className="mr-1">✓</span>
                Completed
              </span>
              <span className="text-gray-400">April 19 - April 27, 2025</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-300 max-w-6xl mx-auto leading-relaxed">
          The Easter Event is a seasonal limited-time event packed with colorful rewards and unique gameplay features. During this event, players explore, farm, and trade special items to earn exclusive prizes through the Easter Shop.
        </p>
      </div>

      {/* Event Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Event Description */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Event Overview</h2>
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
              The Easter Event is a seasonal limited-time event packed with colorful rewards and unique gameplay features. During this event, players would explore, farm, and trade in special items to earn exclusive prizes.
              </p>
              <p>
              The Easter Shop is a special event-exclusive shop available only during the Easter Event. It offered a rotating selection of festive and powerful items.
              </p>
            </div>
          </div>

          {/* Shop Mechanics */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Shop Mechanics</h2>
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                · The shop restocked every 60 minutes in real time.
              </p>
              <p>
              · Each restock brought a randomized inventory from the Easter item pool.
              </p>
              <p>
              · Items may had limited stock per restock.
              </p>
            </div>
          </div>

          {/* Easter Shop Items */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Easter Shop Item Pool</h2>
            <p className="text-gray-300 text-sm mb-6">Here's a list of items that can appear in the Easter Shop:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-yellow-300">Item Name</th>
                    <th className="text-left py-3 px-4 text-yellow-300">Sheckles Price</th>
                    <th className="text-left py-3 px-4 text-yellow-300">Robux Price</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Chocolate Carrot</td>
                    <td className="py-3 px-4">10,000</td>
                    <td className="py-3 px-4">99</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Red Lollipop</td>
                    <td className="py-3 px-4">45,000</td>
                    <td className="py-3 px-4">199</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Candy Sunflower</td>
                    <td className="py-3 px-4">75,000</td>
                    <td className="py-3 px-4">279</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Easter Egg</td>
                    <td className="py-3 px-4">500,000</td>
                    <td className="py-3 px-4">699</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Chocolate Sprinkler</td>
                    <td className="py-3 px-4">500,000</td>
                    <td className="py-3 px-4">199</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Candy Blossom</td>
                    <td className="py-3 px-4">10,000,000</td>
                    <td className="py-3 px-4">1,299</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Chocolate Mutation */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Mutation</h2>
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                <strong className="text-yellow-300">Chocolate</strong> is a fruit mutation that boosts the value of crops by approximately 2x from any crop it affects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-3">Mutation Details</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-400">Effect:</span>
                      <span className="text-white">Multiplies fruit sell value by ~2x</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-gray-400 mr-2">Rarity:</span>
                      <span className="text-white">~Rare</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-3">Sources</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Chocolate Sprinklers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Chocolate Rain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Mutation Spray Choc</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-red-900/20 border border-red-600 rounded-lg p-4 mt-4">
                <p className="text-red-300 text-sm">
                  <strong>Important:</strong> Chocolate cannot mutate single use plants, such as carrots, bamboo, or watermelon.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Event Details */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Event Details</h3>
            <div className="mb-4 text-center">
              <img 
                src="/events/Easter_shop.webp" 
                alt="Easter Shop"
                className="w-90 h-90 object-cover rounded-lg mx-auto"
              />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">Start Date:</span>
                <span className="text-white whitespace-nowrap">April 19, 2025</span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">End Date:</span>
                <span className="text-white whitespace-nowrap">April 27, 2025</span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">Duration:</span>
                <span className="text-white whitespace-nowrap">8 days</span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">Status:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-600 text-gray-300 whitespace-nowrap">
                <span className="mr-1">✓</span>
                Completed
              </span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">Currency:</span>
                <span className="text-white whitespace-nowrap">Sheckles</span>
              </div>
            </div>
          </div>

          {/* Quest Requirements */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Quest Requirements</h3>
            <p className="text-gray-300 text-sm mb-3">
              To access the Easter Shop, you must complete Poppy's Golden Request:
            </p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Find Poppy near the Easter Shop</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Deliver 30 KG worth of Golden Fruits</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Gain access to the Easter Shop</span>
              </li>
            </ul>
          </div>

          {/* Event Trivia */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Event Trivia</h3>
            <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                <strong>Historical Significance:</strong> The Easter Event 2025 was the first event added in Grow a Garden, setting the foundation for all future seasonal events.
              </p>
            </div>
          </div>

          {/* Event Tips */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Event Tips</h3>
            <ul className="space-y-2 text-gray-300 text-xs">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Prepare Golden Fruits before the event starts</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Check the shop every 60 minutes for new items</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Save Sheckles for the most expensive items</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Get Chocolate Sprinklers for mutation farming</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Remember: Chocolate can't mutate single-use plants</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="text-center">
        <Link 
          href="/grow-a-garden-events" 
          className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors mr-4"
         
        >
          ← Back to Events
        </Link>
        <Link 
          href="/grow-a-garden-wiki" 
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
         
        >
          Explore Wiki →
        </Link>
      </div>
    </div>
  );
}; 