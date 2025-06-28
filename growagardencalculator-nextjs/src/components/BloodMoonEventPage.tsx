import React from 'react';
import Link from 'next/link';

export const BloodMoonEventPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-yellow-300">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/grow-a-garden-events" className="hover:text-yellow-300">Events</Link>
        <span className="mx-2">›</span>
        <span className="text-white">Blood Moon Event</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-yellow-300 mb-2">Blood Moon Event</h1>
            <div className="flex items-center justify-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-600 text-gray-300">
                <span className="mr-1">✓</span>
                Completed
              </span>
              <span className="text-gray-400">May 17 - May 31, 2025</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-300 max-w-6xl mx-auto leading-relaxed">
          The Blood Moon Event was part of the Lunar Glow Event, featuring the exclusive Blood Moon Shop and special Bloodlit mutations. Players could farm Bloodlit fruits during Blood Moon cycles to earn exclusive rewards.
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
                The Blood Moon Event was part of the Lunar Glow Event that was added on May 17, 2025. This event featured the Blood Moon Shop and Blood Moon time alongside with Meteor Showers.
              </p>
              <p>
                During this event, players could explore and farm Bloodlit Fruits to earn exclusive plant mutations. The Blood Moon had a 33% chance of spawning instead of a normal night, meaning it took an average of 3 hours or every three nights for a blood moon to spawn.
              </p>
            </div>
          </div>

          {/* Blood Moon Mechanics */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Blood Moon Mechanics</h2>
            <div className="text-gray-300 text-sm leading-relaxed space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-3">Blood Moon Spawning</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>33% chance to spawn instead of normal night</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Average of 3 hours between Blood Moons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Lasts 15 minutes (vs 10 for normal Night)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Exclusive Blood Moon Shop appears</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-3">Bloodlit Mutations</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Crops have chance to turn Bloodlit (4x value)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Night Staff can force Bloodlit mutation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Higher Lunar Points than Moonlit crops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Exclusive to Blood Moon periods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Blood Moon Shop */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Blood Moon Shop</h2>
            <p className="text-gray-300 text-sm mb-6">When a Blood Moon starts, an exclusive shop is dug up from the ground offering brand-new pets, night seed packs, eggs, special moon-themed seeds and gears:</p>
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
                    <td className="py-3 px-4 font-semibold">Blood Banana</td>
                    <td className="py-3 px-4">200,000</td>
                    <td className="py-3 px-4">599</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Moon Melon</td>
                    <td className="py-3 px-4">500,000</td>
                    <td className="py-3 px-4">729</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Mysterious Crate</td>
                    <td className="py-3 px-4">10,000,000</td>
                    <td className="py-3 px-4">149</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Night Seed Pack</td>
                    <td className="py-3 px-4">10,000,000</td>
                    <td className="py-3 px-4">129</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Star Caller</td>
                    <td className="py-3 px-4">12,000,000</td>
                    <td className="py-3 px-4">219</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Blood Kiwi</td>
                    <td className="py-3 px-4">20,000,000</td>
                    <td className="py-3 px-4">399</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Blood Hedgehog</td>
                    <td className="py-3 px-4">23,000,000</td>
                    <td className="py-3 px-4">439</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold">Night Egg</td>
                    <td className="py-3 px-4">25,000,000</td>
                    <td className="py-3 px-4">129</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Blood Owl</td>
                    <td className="py-3 px-4">60,000,000</td>
                    <td className="py-3 px-4">899</td>
                  </tr>
                </tbody>
              </table>
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
                src="/events/Blood_Shop.webp" 
                alt="Blood Moon Event"
                className="w-90 h-90 object-cover rounded-lg mx-auto"
              />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">Start Date:</span>
                <span className="text-white whitespace-nowrap">May 17, 2025</span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">End Date:</span>
                <span className="text-white whitespace-nowrap">May 31, 2025</span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">Duration:</span>
                <span className="text-white whitespace-nowrap">14 days</span>
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

          {/* Special Features */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Special Features</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Blood Moon Shop dug up from ground</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Bloodlit mutation (4x crop value)</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Meteor Shower events</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Extended 15-minute duration</span>
              </li>
            </ul>
          </div>

          {/* Event Trivia */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Event Trivia</h3>
            <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                <strong>Special Launch:</strong> When the Blood Moon event launched, the developer started a Global Blood Moon event and the Blood Moon Shop restocked twice, which doesn't happen during normal Blood Moons.
              </p>
            </div>
          </div>

          {/* Event Tips */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Event Tips</h3>
            <ul className="space-y-2 text-gray-300 text-xs">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Blood Moon occurs every 3 nights on average</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Use Night Staff to guarantee Bloodlit mutation</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Bloodlit crops give 4x value boost</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Shop appears only during Blood Moon</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Event was part of larger Lunar Glow Event</span>
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