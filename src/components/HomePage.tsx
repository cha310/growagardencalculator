import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalculationState } from '../types';
import { growthMutations, temperatureMutations, environmentMutations } from '../data/gameData';
import { PlantSelector } from './PlantSelector';
import { MutationSelector } from './MutationSelector';
import { CalculationPanel } from './CalculationPanel';
import { ResultsPanel } from './ResultsPanel';

// FAQ Component
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

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // 手风琴交互：一次只能打开一个

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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg overflow-hidden">
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
  );
};

export const HomePage: React.FC = () => {
  // Update page title for home page
  useEffect(() => {
    document.title = 'Grow a Garden Calculator.me';
  }, []);

  const [state, setState] = useState<CalculationState>({
    selectedPlant: null,
    selectedCategory: 'All',
    growthMutations: [growthMutations[0]],
    temperatureMutations: [],
    environmentMutations: [],
    weight: 1,
    quantity: 1,
    friendBonus: 0,
  });

  const [result, setResult] = useState<number>(0);

  // Calculate result whenever state changes
  useEffect(() => {
    if (!state.selectedPlant) {
      setResult(0);
      return;
    }

    const environmentBonus = state.environmentMutations.reduce((sum, mutation) => sum + mutation.bonus, 0);
    const temperatureBonus = state.temperatureMutations.reduce((sum, mutation) => sum + mutation.bonus, 0);
    const totalBonusPercent = temperatureBonus + environmentBonus;
    const bonusMultiplier = 1 + totalBonusPercent / 100;
    const friendMultiplier = 1 + state.friendBonus / 100;
    const growthMultiplier = state.growthMutations.reduce((product, mutation) => product * mutation.multiplier, 1);

    // 计算基于重量比例的价值
    const plantStandardWeight = state.selectedPlant.weight || 1;
    const weightRatio = state.weight / plantStandardWeight;
    
    const calculatedResult = 
      state.selectedPlant.baseValue *
      weightRatio *
      growthMultiplier *
      bonusMultiplier *
      state.quantity *
      friendMultiplier;

    setResult(calculatedResult);
  }, [state]);

  const handlePlantSelect = (plant: any) => {
    setState(prev => ({ 
      ...prev, 
      selectedPlant: plant,
      weight: plant?.weight || 1 // 自动设置植物重量，如果没有重量则默认为1
    }));
  };

  const handleCategorySelect = (category: string) => {
    setState(prev => ({ ...prev, selectedCategory: category }));
  };

  const handleGrowthMutationToggle = (mutation: any) => {
    setState(prev => {
      const isSelected = prev.growthMutations.some(m => m.id === mutation.id);
      
      if (isSelected) {
        return {
          ...prev,
          growthMutations: prev.growthMutations.filter(m => m.id !== mutation.id)
        };
      } else {
        let filteredMutations = [...prev.growthMutations];
        
        const exclusiveVariants = ['gold', 'rainbow'];
        
        if (exclusiveVariants.includes(mutation.id)) {
          filteredMutations = filteredMutations.filter(m => !exclusiveVariants.includes(m.id));
        }
        
        return {
          ...prev,
          growthMutations: [...filteredMutations, mutation]
        };
      }
    });
  };

  const handleTemperatureMutationToggle = (mutation: any) => {
    setState(prev => {
      const isSelected = prev.temperatureMutations.some(m => m.id === mutation.id);
      
      if (isSelected) {
        return {
          ...prev,
          temperatureMutations: prev.temperatureMutations.filter(m => m.id !== mutation.id)
        };
      } else {
        let filteredMutations = [...prev.temperatureMutations];
        
        const coldGroup = ['wet', 'chilled', 'frozen'];
        const heatGroup = ['burnt', 'cooked'];
        
        if (coldGroup.includes(mutation.id)) {
          filteredMutations = filteredMutations.filter(m => !coldGroup.includes(m.id));
        }
        
        if (heatGroup.includes(mutation.id)) {
          filteredMutations = filteredMutations.filter(m => !heatGroup.includes(m.id));
        }
        
        return {
          ...prev,
          temperatureMutations: [...filteredMutations, mutation]
        };
      }
    });
  };

  const handleEnvironmentMutationToggle = (mutation: any) => {
    setState(prev => {
      const isSelected = prev.environmentMutations.some(m => m.id === mutation.id);
      if (isSelected) {
        return {
          ...prev,
          environmentMutations: prev.environmentMutations.filter(m => m.id !== mutation.id)
        };
      } else {
        return {
          ...prev,
          environmentMutations: [...prev.environmentMutations, mutation]
        };
      }
    });
  };

  const handleWeightChange = (weight: number) => {
    setState(prev => ({ ...prev, weight }));
  };

  const handleQuantityChange = (quantity: number) => {
    setState(prev => ({ ...prev, quantity }));
  };

  const handleFriendBonusChange = (bonus: number) => {
    setState(prev => ({ ...prev, friendBonus: bonus }));
  };

  const handleReset = () => {
    setState({
      selectedPlant: null,
      selectedCategory: 'All',
      growthMutations: [growthMutations[0]],
      temperatureMutations: [],
      environmentMutations: [],
      weight: 1,
      quantity: 1,
      friendBonus: 0,
    });
  };

  const handleMaxMutation = () => {
    // 检查当前是否已经是最大变异状态
    const hasRainbowAndShiny = state.growthMutations.some(m => m.id === 'rainbow') && 
                              state.growthMutations.some(m => m.id === 'shiny');
    const excludedMutations = ['chilled', 'wet', 'pollinated'];
    const expectedTemperatureCount = temperatureMutations.filter(m => !excludedMutations.includes(m.id)).length;
    
    const isCurrentlyMaxed = 
      hasRainbowAndShiny &&
      state.temperatureMutations.length === expectedTemperatureCount &&
      state.environmentMutations.length === environmentMutations.length &&
      state.friendBonus === 100;

    if (isCurrentlyMaxed) {
      // 如果已经是最大状态，则重置到默认状态
      setState(prev => ({
        ...prev,
        growthMutations: [growthMutations[0]], // 默认
        temperatureMutations: [],
        environmentMutations: [],
        friendBonus: 0,
      }));
    } else {
            // 设置为最大变异状态
      
      // Growth/Variants: 选择 Rainbow Variant 和 Shiny Variant
      const rainbowVariant = growthMutations.find(m => m.id === 'rainbow');
      const shinyVariant = growthMutations.find(m => m.id === 'shiny');
      const selectedGrowthMutations = [rainbowVariant, shinyVariant].filter((mutation): mutation is any => Boolean(mutation));
      
      // Temperature/Mutations: 选择除了 chilled、wet、pollinated 之外的所有选项
      const excludedMutations = ['chilled', 'wet', 'pollinated'];
      const selectedTemperatureMutations = temperatureMutations.filter(m => 
        !excludedMutations.includes(m.id)
      );
      
      // Environment: 选择所有环境变异（没有互斥关系）
      const allEnvironmentMutations = [...environmentMutations];
      
      setState(prev => ({
        ...prev,
        growthMutations: selectedGrowthMutations,
        temperatureMutations: selectedTemperatureMutations,
        environmentMutations: allEnvironmentMutations,
        friendBonus: 100, // 设置最大朋友加成
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-300 mb-2">Grow a Garden Calculator</h1>
          <p className="text-gray-300 text-lg">Calculate your crop values and optimize your garden profits</p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6 lg:items-stretch min-h-[600px]">
          {/* Left Column - Plant Selection Only */}
          <div>
            <PlantSelector
              selectedPlant={state.selectedPlant}
              selectedCategory={state.selectedCategory}
              onPlantSelect={handlePlantSelect}
              onCategorySelect={handleCategorySelect}
            />
          </div>

          {/* Right Column - Modifiers, Calculation, and Results */}
          <div className="space-y-6">
            <MutationSelector
              growthMutations={state.growthMutations}
              temperatureMutations={state.temperatureMutations}
              environmentMutations={state.environmentMutations}
              onGrowthMutationToggle={handleGrowthMutationToggle}
              onTemperatureMutationToggle={handleTemperatureMutationToggle}
              onEnvironmentMutationToggle={handleEnvironmentMutationToggle}
            />
            
            <CalculationPanel
              weight={state.weight}
              quantity={state.quantity}
              friendBonus={state.friendBonus}
              onWeightChange={handleWeightChange}
              onQuantityChange={handleQuantityChange}
              onFriendBonusChange={handleFriendBonusChange}
            />
            
            <ResultsPanel
              state={state}
              result={result}
              onReset={handleReset}
              onMaxMutation={handleMaxMutation}
            />
          </div>
        </div>

        {/* Wiki Section */}
        <div className="mt-16 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Grow A Garden Wiki
            </h2>
            <p className="text-md text-gray-300 max-w-6xl mx-auto">
              Master Roblox's Grow a Garden with our wiki! Discover all pets, gears, mutations, prices, & top crop tips. Your ultimate guide to growing the best garden!
            </p>
          </div>

          {/* Wiki Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Crops Section */}
            <Link to="/grow-a-garden-wiki-crops" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
                <div className="text-center w-full">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Crops</h3>
                  <p className="text-gray-300 text-xs">
                    Explore all seeds and crops in Grow a Garden, with details on sources, prices, and growth tips.
                  </p>
                </div>
              </div>
            </Link>

            {/* Pets Section */}
            <Link to="/grow-a-garden-wiki-pets" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
                <div className="text-center w-full">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🐾</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Pets</h3>
                  <p className="text-gray-300 text-xs">
                    Each pet has unique abilities that help players grow their gardens more efficiently.
                  </p>
                </div>
              </div>
            </Link>

            {/* Gears Section */}
            <Link to="/grow-a-garden-wiki-gears" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
                <div className="text-center w-full">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Gears</h3>
                  <p className="text-gray-300 text-xs">
                    Gears are essential tools and equipment that enhance your gardening experience.
                  </p>
                </div>
              </div>
            </Link>

            {/* Eggs Section */}
            <Link to="/grow-a-garden-wiki-eggs" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer aspect-square flex items-center">
                <div className="text-center w-full">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🥚</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Eggs</h3>
                  <p className="text-gray-300 text-xs">
                    Learn about prices, hatch times, and probabilities on our detailed Eggs wiki page.
                  </p>
                </div>
              </div>
            </Link>

            {/* Mutations Section */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105 aspect-square flex items-center">
              <div className="text-center w-full">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧬</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Mutations</h3>
                <p className="text-gray-300 text-xs">
                  Discover crop mutations, their triggers, and how to unlock rare varieties in Grow a Garden.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 aspect-square flex items-center">
              <div className="text-center w-full">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Grow A Garden Values</h3>
                <p className="text-gray-300 text-xs">
                  Learn crop values, trade insights, and market trends for Grow a Garden.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Stock Section */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">📦</span>
                Grow A Garden Stock
              </h3>
              <p className="text-xs text-gray-300 mb-4">
                Check Sam's Shop stock, event seeds, and pack availability in Grow a Garden.
              </p>
              <Link to="/grow-a-garden-stock" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                View Stock
              </Link>
            </div>

            {/* Codes Section */}
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-2xl mr-3">🎁</span>
                Grow A Garden Codes
              </h3>
              <p className="text-xs text-gray-300 mb-4">
                Get the latest Grow a Garden Codes for 2025.
              </p>
              <Link to="/grow-a-garden-codes" className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                View Codes
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <Link 
              to="/grow-a-garden-wiki" 
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Explore Complete Wiki →
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-12 mb-4">
          <div className="flex justify-center items-center">
            <div className="w-16 h-1 bg-green-600 mr-2"></div>
            <div className="text-xs text-gray-500">Roblox · Grow a Garden Calculator: Maximize Garden Profits & Value</div>
            <div className="w-16 h-1 bg-green-600 ml-2"></div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h2 className="text-yellow-300 text-lg font-semibold">Frequently Asked Questions</h2>
          </div>
          
          <FAQSection />
        </div>
      </div>
    </div>
  );
}; 