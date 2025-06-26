import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const WikiPage: React.FC = () => {
  // 确保页面标题被正确设置
  useEffect(() => {
    document.title = 'Grow a Garden Wiki - Game Guide & Information';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete guide to Grow a Garden game - learn about crops, pets, gears, eggs, mutations, and values in this comprehensive wiki.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Helmet>
        <title>Grow a Garden Wiki - Game Guide & Information</title>
        <meta name="description" content="Complete guide to Grow a Garden game - learn about crops, pets, gears, eggs, mutations, and values in this comprehensive wiki." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Grow A Garden Wiki
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master Roblox's Grow a Garden with our wiki! Discover all pets, gears, mutations, prices, & top crop tips. Your ultimate guide to growing the best garden!
          </p>
        </div>

        {/* Wiki Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Crops Section */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Crops</h3>
              <p className="text-gray-300 mb-4">
                Explore all seeds and crops in Grow a Garden, with details on sources, prices, and growth tips.
              </p>
              <Link to="/grow-a-garden-wiki-crops" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Learn More
              </Link>
            </div>
          </div>

          {/* Pets Section */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐾</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Pets</h3>
              <p className="text-gray-300 mb-4">
                Each pet has unique abilities that help players grow their gardens more efficiently.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Gears Section */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Gears</h3>
              <p className="text-gray-300 mb-4">
                Gears are essential tools and equipment that enhance your gardening experience.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Eggs Section */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥚</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Eggs</h3>
              <p className="text-gray-300 mb-4">
                Learn about prices, hatch times, and probabilities on our detailed Eggs wiki page.
              </p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Mutations Section */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧬</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Mutations</h3>
              <p className="text-gray-300 mb-4">
                Discover crop mutations, their triggers, and how to unlock rare varieties in Grow a Garden.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Values</h3>
              <p className="text-gray-300 mb-4">
                Learn crop values, trade insights, and market trends for Grow a Garden.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Stock Section */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-3">📦</span>
              Stock
            </h3>
            <p className="text-gray-300 mb-4">
              Check Sam's Shop stock, event seeds, and pack availability in Grow a Garden.
            </p>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
              View Stock
            </button>
          </div>

          {/* Codes Section */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-2xl mr-3">🎁</span>
              Codes
            </h3>
            <p className="text-gray-300 mb-4">
              Get the latest Grow a Garden Codes for June 2025.
            </p>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
              View Codes
            </button>
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
    </div>
  );
}; 