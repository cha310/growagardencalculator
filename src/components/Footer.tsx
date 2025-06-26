import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
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
              <Link 
                to="/" 
                className="text-green-400 py-2 px-4 rounded hover:text-green-300 transition-colors inline-block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                🏠 Home
              </Link>
              <Link 
                to="/grow-a-garden-wiki" 
                className="text-green-400 py-2 px-4 rounded hover:text-green-300 transition-colors inline-block ml-4"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                📚 Wiki
              </Link>
              <Link 
                to="/grow-a-garden-faqs" 
                className="text-green-400 py-2 px-4 rounded hover:text-green-300 transition-colors inline-block ml-4"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                📋 FAQs
              </Link>
            </div>
          </div>

          {/* Right - About */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">About</h3>
            <div className="space-y-2">
              <Link 
                to="/privacy-policy" 
                className="text-green-400 text-sm hover:text-green-300 transition-colors block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-green-400 text-sm hover:text-green-300 transition-colors block"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 