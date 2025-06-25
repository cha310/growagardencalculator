import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

// FAQ Item Component
const AccordionFAQItem: React.FC<{ 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full text-left py-4 px-2 flex justify-between items-center hover:bg-gray-800 transition-colors"
        onClick={onToggle}
      >
        <h3 className="text-green-400 text-sm font-semibold pr-4">{question}</h3>
        <span className="text-yellow-300 text-lg flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 px-2">
          <p className="text-gray-300 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ Section Component
const FAQSection: React.FC = () => {
  const [openStates, setOpenStates] = useState<boolean[]>([true, true, true]); // 默认全部展开

  const faqs = [
    {
      question: "Why Do You Need the Grow A Garden Fruit Value Calculator?",
      answer: "Using the Grow A Garden Calculator allows you to quickly calculate the value of each crop and estimate the most accurate value using three mutation scenarios, enabling you to make informed investment decisions in Grow A Garden."
    },
    {
      question: "What are the best crops for beginner gardeners to grow?",
      answer: "Start with strawberries or blueberries. They are affordable and can regrow after harvest. Additionally, as you learn the game mechanics, they provide a steady income. Avoid planting single-season crops like carrots. They may seem cheap, but they don't hold much long-term value."
    },
    {
      question: "How can I increase the chance of getting a mutation?",
      answer: "Plant during weather changes (rain ensures moist mutation). Use advanced or sacred sprinklers near high-value crops. Focus on high-yield planting to increase the overall probability of rare mutations."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenStates(prev => prev.map((state, i) => i === index ? !state : state));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        {faqs.map((faq, index) => (
          <AccordionFAQItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer}
            isOpen={openStates[index]}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};



// FAQ Page Component
export const FAQPage: React.FC = () => {
  // Update page title for FAQ page
  useEffect(() => {
    document.title = 'FAQs - Grow a Garden Calculator | Roblox Fruit Value Calculator';
    return () => {
      document.title = 'Grow a Garden Calculator - Roblox Fruit Value Calculator';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Decorative Corner Elements */}
      <div className="fixed top-2 left-2 w-4 h-4 bg-yellow-300 z-10"></div>
      <div className="fixed top-2 right-2 w-4 h-4 bg-yellow-300 z-10"></div>
      <div className="fixed bottom-2 left-2 w-4 h-4 bg-yellow-300 z-10"></div>
      <div className="fixed bottom-2 right-2 w-4 h-4 bg-yellow-300 z-10"></div>
      
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="text-center my-12">
          <h1 className="text-2xl md:text-4xl text-yellow-300 mb-2 py-4">
            Frequently Asked Questions
          </h1>
          <div className="text-sm text-green-400 mb-4">
            Everything you need to know about Grow a Garden Calculator
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="w-8 h-1 bg-yellow-300 mr-2"></div>
            <div className="w-2 h-2 bg-yellow-300"></div>
            <div className="w-8 h-1 bg-yellow-300 ml-2"></div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <FAQSection />
        </div>

        {/* Back to Calculator */}
        <div className="text-center mb-8">
          <Link 
            to="/" 
            className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
          >
            ← Back to Calculator
          </Link>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gray-900 mt-8 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Left - Domain/Brand */}
              <div>
                <h3 className="text-sm font-semibold text-yellow-300 mb-2">growagardencalculator.me</h3>
                <p className="text-sm text-gray-300 mb-3">
                  The most comprehensive grow a garden calculator for Roblox players. Calculate plant values, optimize modifiers, and maximize your garden profits with our advanced tools.
                </p>
                <div className="space-y-1 text-sm text-gray-300">
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Accurate Plant Value Calculator
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Advanced Modifier Optimizer
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Custom Configuration Support
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    Share & Export Tools
                  </div>
                </div>
              </div>

              {/* Center - Quick Actions */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-yellow-300 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors inline-block">
                    🏠 Home
                  </Link>
                </div>
              </div>

              {/* Right - Play Game */}
              <div className="text-center md:text-right">
                <h3 className="text-lg font-semibold text-yellow-300 mb-4">Play Grow a Garden</h3>
                <a 
                  href="https://www.roblox.com/games/126884695634066/Grow-a-Garden" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-3 inline-flex items-center"
                >
                  Play on Roblox ↗
                </a>
                <p className="text-sm text-gray-300">
                  Join millions of players in the ultimate garden growing experience on Roblox. Plant, grow, and trade your way to success!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 