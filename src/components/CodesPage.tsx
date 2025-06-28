import React from 'react';
import { Link } from 'react-router-dom';

export const CodesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">
          Grow a Garden Codes
        </h1>
        <p className="text-xs text-gray-300 max-w-6xl mx-auto leading-relaxed">
          Welcome to growagardencalculator.me, your go-to hub for all things Grow a Garden on Roblox! This charming farming game puts a fun spin on the genre with its exciting crop mutation system. In Grow a Garden, you'll dive into the joy of purchasing seeds, tending to your crops, and harvesting them for sweet in-game profits. The thrill of growing rare, mutated plants makes this game a must-play for farming fans. With Grow a Garden Codes, you can score free seed packs and bonuses to level up your garden and boost your earnings with ease!
        </p>
      </div>

      {/* Active Codes Section */}
      <div className="mb-8">
        <div className="bg-gray-800 p-4">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="text-lg mr-2">✅</span>
            Active Codes
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 border-2 border-green-700">
              <thead>
                <tr className="bg-green-600">
                  <th className="px-4 py-2 text-left text-white text-xs font-bold">Active Code</th>
                  <th className="px-4 py-2 text-left text-white text-xs font-bold">Reward</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="px-4 py-3 text-gray-300 text-center text-xs" colSpan={2}>
                    There are no active codes right now
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 p-3 bg-yellow-900 border-2 border-yellow-600">
            <p className="text-yellow-300 text-xs">
              ⚠️ Since all the currently released Codes have expired, we will update this Code list once the developer adds new activation codes.
            </p>
          </div>
        </div>
      </div>

      {/* Expired Codes Section */}
      <div className="mb-8">
        <div className="bg-gray-800 p-4">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="text-lg mr-2">❌</span>
            Expired Codes
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-900 border-2 border-gray-600">
              <thead>
                <tr className="bg-gray-600">
                  <th className="px-4 py-2 text-left text-white text-xs font-bold">Expired Code</th>
                  <th className="px-4 py-2 text-left text-white text-xs font-bold">Reward</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="px-4 py-3 text-gray-300 text-xs">LUNARGLOW10</td>
                  <td className="px-4 py-3 text-gray-300 text-xs">3 Basic Seed Pack and 1 Exotic Bug Egg.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* How to Redeem Section */}
      <div className="mb-8">
        <div className="bg-gray-800 p-4">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center">
            <span className="text-lg mr-2">🎯</span>
            How to Redeem Grow a Garden Codes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white border-2 border-green-800 w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">1</span>
                  <div>
                    <h3 className="text-white text-xs font-bold mb-1">Open Game</h3>
                    <p className="text-gray-300 text-xs">Open Grow a Garden on the Roblox platform.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white border-2 border-green-800 w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">2</span>
                  <div>
                    <h3 className="text-white text-xs font-bold mb-1">Find Settings</h3>
                    <p className="text-gray-300 text-xs">Tap the Settings icon in the top-left corner.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white border-2 border-green-800 w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">3</span>
                  <div>
                    <h3 className="text-white text-xs font-bold mb-1">Enter Code</h3>
                    <p className="text-gray-300 text-xs">Type an active code into the "Type code here…" box.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white border-2 border-green-800 w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-1">4</span>
                  <div>
                    <h3 className="text-white text-xs font-bold mb-1">Claim Rewards</h3>
                    <p className="text-gray-300 text-xs">Hit the Claim button to grab your rewards.</p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="bg-gray-900 border-2 border-gray-600 p-4">
              <h3 className="text-yellow-300 text-xs font-bold mb-3">💡 Tips</h3>
              <ul className="space-y-2 text-gray-300 text-xs">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  Codes are case-sensitive, ensure accurate input
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  Each code can only be used once
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  Check this page regularly for latest codes
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  Expired codes cannot be reused
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-6">
        <div className="pixel-card bg-green-600">
          <h3 className="text-lg font-bold text-white mb-3">Stay Updated!</h3>
          <p className="text-gray-200 mb-4 text-xs">
            Follow us for the latest Grow a Garden codes and updates. We'll update this page immediately when new codes are released.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              to="/grow-a-garden-wiki" 
              className="pixel-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              📚 Browse Wiki
            </Link>
            <Link 
              to="/" 
              className="pixel-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              🧮 Use Calculator
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
}; 