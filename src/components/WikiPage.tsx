import React from 'react';
import { Link } from 'react-router-dom';

export const WikiPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-white mb-4">
          Grow A Garden Wiki
        </h1>
        <p className="text-md text-gray-300 max-w-6xl mx-auto">
          Master Roblox's Grow a Garden with our wiki! Discover all pets, gears, mutations, prices, & top crop tips. Your ultimate guide to growing the best garden!
        </p>
      </div>

      {/* Wiki Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {/* Crops Section */}
        <Link to="/grow-a-garden-wiki-crops" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
            <div className="text-center w-full">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Crops</h3>
              <p className="text-gray-300 text-xs">
                Explore all seeds and crops in Grow a Garden, with details on sources, prices, and growth tips.
              </p>
            </div>
          </div>
        </Link>

        {/* Pets Section */}
        <Link to="/grow-a-garden-wiki-pets" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
            <div className="text-center w-full">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐾</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Pets</h3>
              <p className="text-gray-300 text-xs">
                Each pet has unique abilities that help players grow their gardens more efficiently.
              </p>
            </div>
          </div>
        </Link>

        {/* Gears Section */}
        <Link to="/grow-a-garden-wiki-gears" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
            <div className="text-center w-full">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Gears</h3>
              <p className="text-gray-300 text-xs">
                Gears are essential tools and equipment that enhance your gardening experience.
              </p>
            </div>
          </div>
        </Link>

        {/* Eggs Section */}
        <Link to="/grow-a-garden-wiki-eggs" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
            <div className="text-center w-full">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥚</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Eggs</h3>
              <p className="text-gray-300 text-xs">
                Learn about prices, hatch times, and probabilities on our detailed Eggs wiki page.
              </p>
            </div>
          </div>
        </Link>

        {/* Mutations Section */}
        <Link to="/grow-a-garden-wiki-mutations" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
            <div className="text-center w-full">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Mutations</h3>
              <p className="text-gray-300 text-xs">
                Discover crop mutations, their triggers, and how to unlock rare varieties in Grow a Garden.
              </p>
            </div>
          </div>
        </Link>

        {/* Values Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 aspect-square flex items-center">
          <div className="text-center w-full">
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Values</h3>
            <p className="text-gray-300 text-xs">
              Learn crop values, trade insights, and market trends for Grow a Garden.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Stock Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-2xl mr-3">📦</span>
            Grow A Garden Stock
          </h3>
          <p className="text-xs text-gray-300 mb-4">
            Check Sam's Shop stock, event seeds, and pack availability in Grow a Garden.
          </p>
          <Link to="/grow-a-garden-stock" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            View Stock
          </Link>
        </div>

        {/* Codes Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="text-2xl mr-3">🎁</span>
            Grow A Garden Codes
          </h3>
          <p className="text-xs text-gray-300 mb-4">
            Get the latest Grow a Garden Codes for 2025.
          </p>
          <Link to="/grow-a-garden-codes" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            View Codes
          </Link>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="text-center mb-6">
        <Link 
          to="/" 
          className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mr-4"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ← Calculator
        </Link>
        <Link 
          to="/grow-a-garden-wiki-crops" 
          className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Explore All Crops →
        </Link>
      </div>
    </div>
  );
}; 