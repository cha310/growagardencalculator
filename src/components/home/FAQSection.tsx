'use client'

import React, { useState } from 'react'

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
]

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div style={{ marginTop: '64px', marginBottom: '48px' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
          Frequently Asked Questions
        </h2>
      </div>
      
      <div style={{ maxWidth: '768px', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: 'rgba(31, 41, 55, 1)', 
          borderRadius: '8px', 
          overflow: 'hidden' 
        }}>
          {faqs.map((faq, index) => (
            <div key={index} style={{ borderBottom: index < faqs.length - 1 ? '1px solid #374151' : 'none' }}>
              <button
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onClick={() => handleToggle(index)}
              >
                <h3 style={{ 
                  color: '#10b981', 
                  fontSize: '14px', 
                  fontWeight: '600', 
                  paddingRight: '16px',
                  margin: 0,
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  {faq.question}
                </h3>
                <span style={{ 
                  color: '#fbbf24', 
                  fontSize: '18px', 
                  flexShrink: 0,
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div style={{ padding: '0 16px 16px 16px' }}>
                  <p style={{ 
                    color: '#d1d5db', 
                    fontSize: '14px', 
                    lineHeight: '1.6',
                    margin: 0,
                    fontFamily: "'Press Start 2P', cursive"
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}