'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// FAQ Item Component
const AccordionFAQItem: React.FC<{ 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void; 
}> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div style={{ borderBottom: '2px solid #4b5563' }}>
      <button
        style={{
          width: '100%',
          textAlign: 'left',
          padding: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontFamily: "'Press Start 2P', cursive"
        }}
        onClick={onToggle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#4b5563'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
        }}
      >
        <h3 style={{ 
          color: '#4ade80', 
          fontSize: '12px', 
          fontWeight: '600', 
          paddingRight: '12px', 
          lineHeight: '1.2',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          {question}
        </h3>
        <span style={{ 
          color: '#fbbf24', 
          fontSize: '12px', 
          flexShrink: 0,
          fontFamily: "'Press Start 2P', cursive"
        }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div style={{ paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px' }}>
          <p style={{ 
            color: '#d1d5db', 
            fontSize: '12px', 
            lineHeight: '1.2',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

// FAQ Section Component
const FAQSection: React.FC = () => {
  const [openStates, setOpenStates] = useState<boolean[]>([true, true, true]); // Default all expanded

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
    <div style={{ maxWidth: '768px', margin: '0 auto' }}>
      <div style={{ 
        backgroundColor: '#374151', 
        border: '3px solid #4ade80', 
        borderRadius: '12px', 
        overflow: 'hidden', 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
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
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ 
          fontSize: '20px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Frequently Asked Questions
        </h1>
        <p style={{ 
          color: '#d1d5db', 
          fontSize: '10px',
          fontFamily: "'Press Start 2P', cursive",
          lineHeight: '1.6'
        }}>
          Get answers to common questions about the Grow a Garden Calculator
        </p>
      </div>

      {/* FAQ Content */}
      <div style={{ marginBottom: '48px' }}>
        <FAQSection />
      </div>

      {/* Back to Calculator */}
      <div style={{ textAlign: 'center' }}>
        <Link 
          href="/" 
          style={{
            backgroundColor: '#4ade80',
            color: '#000000',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            transition: 'all 0.2s ease',
            fontSize: '12px',
            fontFamily: "'Press Start 2P', cursive",
            border: '2px solid #4ade80'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#22c55e'
            e.currentTarget.style.borderColor = '#22c55e'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4ade80'
            e.currentTarget.style.borderColor = '#4ade80'
          }}
        >
          ← Back to Calculator
        </Link>
      </div>
    </div>
  );
}; 