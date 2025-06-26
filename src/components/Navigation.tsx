import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <img 
                src="/icons/growagardencalculator.svg" 
                alt="Grow a Garden Calculator" 
                className="h-8 w-8"
              />
            </Link>
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className={`transition-colors px-3 py-2 text-sm ${
                  location.pathname === '/' 
                    ? 'text-yellow-300 border-b-2 border-yellow-300' 
                    : 'text-gray-300 hover:text-yellow-300'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/wiki" 
                className={`transition-colors px-3 py-2 text-sm ${
                  location.pathname === '/wiki' 
                    ? 'text-yellow-300 border-b-2 border-yellow-300' 
                    : 'text-gray-300 hover:text-yellow-300'
                }`}
              >
                Wiki
              </Link>
              <Link 
                to="/faqs" 
                className={`transition-colors px-3 py-2 text-sm ${
                  location.pathname === '/faqs' 
                    ? 'text-yellow-300 border-b-2 border-yellow-300' 
                    : 'text-gray-300 hover:text-yellow-300'
                }`}
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 