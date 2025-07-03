import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showNavigation = true 
}) => {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {showNavigation && <Navigation />}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}; 