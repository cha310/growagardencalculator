import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [showWikiDropdown, setShowWikiDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 统一的滚动到顶部函数
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowWikiDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowWikiDropdown(false);
    }, 150); // 150ms延迟
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
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
                onClick={scrollToTop}
              >
                Home
              </Link>
              <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  to="/grow-a-garden-wiki" 
                  className={`transition-colors px-3 py-2 text-sm flex items-center ${
                    location.pathname === '/grow-a-garden-wiki' || location.pathname === '/grow-a-garden-wiki-crops' || location.pathname === '/grow-a-garden-wiki-pets'
                      ? 'text-yellow-300 border-b-2 border-yellow-300' 
                      : 'text-gray-300 hover:text-yellow-300'
                  }`}
                  onClick={scrollToTop}
                >
                  Wiki
                  <svg className="ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                
                {/* Dropdown Menu */}
                {showWikiDropdown && (
                  <div 
                    className="absolute top-full left-0 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      to="/grow-a-garden-wiki-crops" 
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-yellow-300 hover:bg-gray-700 transition-colors first:rounded-t-lg"
                      onClick={scrollToTop}
                    >
                      🌱 Crops
                    </Link>
                    <Link 
                      to="/grow-a-garden-wiki-pets" 
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-yellow-300 hover:bg-gray-700 transition-colors last:rounded-b-lg"
                      onClick={scrollToTop}
                    >
                      🐾 Pets
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                to="/grow-a-garden-faqs" 
                className={`transition-colors px-3 py-2 text-sm ${
                  location.pathname === '/grow-a-garden-faqs' 
                    ? 'text-yellow-300 border-b-2 border-yellow-300' 
                    : 'text-gray-300 hover:text-yellow-300'
                }`}
                onClick={scrollToTop}
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