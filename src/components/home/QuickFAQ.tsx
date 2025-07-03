'use client'

import React, { useState } from 'react'

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
  )
}

export const QuickFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-green-400 mb-6">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <AccordionFAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}