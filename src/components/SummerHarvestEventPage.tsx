import React from 'react';
import { Link } from 'react-router-dom';

export const SummerHarvestEventPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <span className="mx-2">›</span>
        <Link to="/grow-a-garden-events" className="hover:text-yellow-300">Events</Link>
        <span className="mx-2">›</span>
        <span className="text-white">Summer Harvest Event</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-yellow-300 mb-2">Summer Harvest Event</h1>
            <div className="flex items-center justify-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-600 text-gray-300">
                <span className="mr-1">✓</span>
                Completed
              </span>
              <span className="text-gray-400">June 21 - July 5, 2025</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-300 max-w-6xl mx-auto leading-relaxed">
          The fifth event featuring hourly harvest challenges where players submit summer crops to earn Harvest Points. This event brought back rewards from previous events and introduced many new summer-themed items.
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
                The Summer Harvest Event was a seasonal event introduced in Update 1.11.0 that featured a complete overhaul of the Seed Shop with summer-themed plants and introduced a new activity where players submit summer crops every hour to earn Harvest Points.
              </p>
              <p>
                Every hour, players had 10 minutes to submit Summer Crops to Georgia's cart to gain Harvest Points. Rewards were awarded based on the number of points garnered, with rewards being the same for everyone on all servers who reached the same tier.
              </p>
              <p>
                This event was unique as it brought back rewards from past events like the Lunar Glow Event and Bizzy Bee Event, making it the only event to feature previous event items as rewards.
              </p>
            </div>
          </div>

          {/* Event Mechanics */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Event Mechanics</h2>
            <div className="text-gray-300 text-sm leading-relaxed space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-3">Harvest System</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Hourly 10-minute harvest windows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Submit summer crops to Georgia's cart</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Earn Harvest Points based on crop rarity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Same rewards for all players at same tier</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-yellow-300 mb-3">Point Bonuses</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Gold Mutation: +2 points</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Rainbow Mutation: +3 points</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Must submit at least 1 fruit to participate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-2 mt-1">•</span>
                      <span>Seed Shop & Summer Seed Pack crops eligible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Summer Crops Points */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Summer Crops Point Values</h2>
            <p className="text-gray-300 text-sm mb-6">Different crops provide different amounts of Harvest Points based on their rarity:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-yellow-300">Rarity</th>
                    <th className="text-left py-3 px-4 text-yellow-300">Points</th>
                    <th className="text-left py-3 px-4 text-yellow-300">Example Crops</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-gray-400">Common</td>
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">Carrot, Strawberry</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-green-400">Uncommon</td>
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4">Blueberry, Wild Carrot</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-blue-400">Rare</td>
                    <td className="py-3 px-4">3</td>
                    <td className="py-3 px-4">Pear, Tomato, Cauliflower</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-yellow-400">Legendary</td>
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">Cantaloupe, Watermelon, Green Apple, Avocado</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-purple-400">Mythical</td>
                    <td className="py-3 px-4">5</td>
                    <td className="py-3 px-4">Pineapple, Kiwi, Bell Pepper, Prickly Pear</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-pink-400">Divine</td>
                    <td className="py-3 px-4">6</td>
                    <td className="py-3 px-4">Rosy Delight, Loquat, Feijoa</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-cyan-400">Prismatic</td>
                    <td className="py-3 px-4">7</td>
                    <td className="py-3 px-4">Sugar Apple, Elephant Ears</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Reward Tiers */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Reward Tiers</h2>
            <p className="text-gray-300 text-sm mb-6">Harvest Points required to unlock each reward tier:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-yellow-300">Reward Tier</th>
                    <th className="text-left py-3 px-4 text-yellow-300">Required Points</th>
                    <th className="text-left py-3 px-4 text-yellow-300">Notable Rewards</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-gray-400">Common</td>
                    <td className="py-3 px-4">10</td>
                    <td className="py-3 px-4">Watering Can, Honey</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-green-400">Uncommon</td>
                    <td className="py-3 px-4">500</td>
                    <td className="py-3 px-4">Basic Sprinkler, Fun Crate, Sheckles</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-blue-400">Rare</td>
                    <td className="py-3 px-4">2,000</td>
                    <td className="py-3 px-4">Flower Seed Pack, Twilight Crate</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-yellow-400">Legendary</td>
                    <td className="py-3 px-4">5,000</td>
                    <td className="py-3 px-4">Reclaimer, Night Egg, Blood Banana Seed</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-purple-400">Mythical</td>
                    <td className="py-3 px-4">8,500</td>
                    <td className="py-3 px-4">Summer Fun Crate, Chocolate Sprinkler</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-3 px-4 font-semibold text-pink-400">Divine</td>
                    <td className="py-3 px-4">11,000</td>
                    <td className="py-3 px-4">Moon Cat, Easter Egg Seed</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-cyan-400">Prismatic</td>
                    <td className="py-3 px-4">14,000</td>
                    <td className="py-3 px-4">Ember Lily Seed (1% chance)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* New Weather Events */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">New Weather Events & Mutations</h2>
            <p className="text-gray-300 text-sm mb-6">The Summer Update introduced new weather events and powerful mutations:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-yellow-300 mb-3">Weather Events</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">☀️</span>
                    <span><strong>Heat Wave:</strong> Causes Sundried mutation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">💨</span>
                    <span><strong>Gale:</strong> Powerful wind, causes Windstruck</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">💨</span>
                    <span><strong>Windy:</strong> Light wind, causes Windstruck</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">🌪️</span>
                    <span><strong>Tornado:</strong> Multiple tornados, causes Twisted</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-yellow-300 mb-3">New Mutations</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">💨</span>
                    <span><strong>Windstruck:</strong> 2x multiplier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">🌪️</span>
                    <span><strong>Twisted:</strong> 5x multiplier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">☀️</span>
                    <span><strong>Sundried:</strong> 85x multiplier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">🟢</span>
                    <span><strong>Verdant:</strong> 4x multiplier (Scarlet Macaw)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2 mt-1">🟡</span>
                    <span><strong>Paradisal:</strong> 18x multiplier (Sundried + Verdant)</span>
                  </li>
                </ul>
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
                src="/events/Summer_Harvest_Almost_Filled.webp" 
                alt="Summer Harvest Event"
                className="w-32 h-32 object-cover rounded-lg mx-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/plant/currency-0.png';
                }}
              />
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">Start Date:</span>
                <span className="text-white whitespace-nowrap">June 21, 2025</span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">End Date:</span>
                <span className="text-white whitespace-nowrap">July 5, 2025</span>
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
                <span className="text-white whitespace-nowrap">Harvest Points</span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">NPC:</span>
                <span className="text-white whitespace-nowrap">Georgia</span>
              </div>
              <div className="flex items-center flex-nowrap">
                <span className="text-gray-400 mr-2 whitespace-nowrap">Update:</span>
                <span className="text-white whitespace-nowrap">1.11.0</span>
              </div>
            </div>
          </div>

          {/* Event Features */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Event Features</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Hourly Harvest Challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Harvest Points System</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Past Event Items Return</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>16 New Summer Crops</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>8+ New Summer Pets</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>New Weather Events</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>20+ Summer Cosmetics</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Permanent Crafting System</span>
              </li>
            </ul>
          </div>

          {/* Event Trivia */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Event Trivia</h3>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-3">
                <p className="text-blue-300">
                  <strong>First Return Event:</strong> Only event to bring back rewards from previous events.
                </p>
              </div>
              <div className="bg-green-900/20 border border-green-600 rounded-lg p-3">
                <p className="text-green-300">
                  <strong>Major Update:</strong> Introduced in Update 1.11.0 with massive content additions.
                </p>
              </div>
              <div className="bg-purple-900/20 border border-purple-600 rounded-lg p-3">
                <p className="text-purple-300">
                  <strong>Tomato Strategy:</strong> Most effective strategy was hoarding tomatoes for quick collection.
                </p>
              </div>
            </div>
          </div>

          {/* Event Tips */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-yellow-300 mb-4">Event Tips</h3>
            <ul className="space-y-2 text-gray-300 text-xs">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Submit 1 fruit first to participate</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Tomatoes are most efficient for collection</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Gold/Rainbow mutations add bonus points</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Use Garden Teleport for faster travel</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>Plant crops in compressed areas for easier collection</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2 mt-1">•</span>
                <span>11,000 points sufficient for most valuable rewards</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="text-center">
        <Link 
          to="/grow-a-garden-events" 
          className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors mr-4"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ← Back to Events
        </Link>
        <Link 
          to="/grow-a-garden-wiki" 
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Explore Wiki →
        </Link>
      </div>
    </div>
  );
}; 