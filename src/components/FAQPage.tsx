import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// FAQ Item Component
const AccordionFAQItem: React.FC<{ 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="w-full text-left py-6 px-6 flex justify-between items-center hover:bg-gray-700 transition-colors"
        onClick={onToggle}
      >
        <h3 className="text-green-400 text-lg font-semibold pr-6 leading-relaxed">{question}</h3>
        <span className="text-yellow-300 text-xl flex-shrink-0">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 px-6">
          <p className="text-gray-300 text-base leading-relaxed">{answer}</p>
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
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    // ... existing FAQ data ...
  ];

  // 确保页面标题被正确设置
  useEffect(() => {
    document.title = 'FAQs - Grow a Garden Calculator';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about the Grow a Garden Calculator - get answers to common questions about plant values, mutations, and optimization strategies.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Helmet>
        <title>FAQs - Grow a Garden Calculator</title>
        <meta name="description" content="Frequently asked questions about the Grow a Garden Calculator - get answers to common questions about plant values, mutations, and optimization strategies." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-300 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-lg">Get answers to common questions about the Grow a Garden Calculator</p>
        </div>

        {/* FAQ Content */}
        <div className="mb-12">
          <FAQSection />
        </div>

        {/* Back to Calculator */}
        <div className="text-center">
          <Link 
            to="/" 
            className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ← Back to Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}; 