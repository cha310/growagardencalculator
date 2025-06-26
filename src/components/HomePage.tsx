import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
        className="w-full text-left py-6 px-6 flex justify-between items-center hover:bg-gray-800 transition-colors"
        onClick={onToggle}
      >
        <h3 className="text-green-400 text-lg font-semibold pr-4">{question}</h3>
        <span className="text-yellow-300 text-lg flex-shrink-0">
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

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-600">
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

  // 确保页面标题被正确设置
  useEffect(() => {
    document.title = 'Grow a Garden Calculator - Roblox Fruit Value Calculator';
    // 添加或更新meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Calculate your Grow A Garden crop values precisely, optimize your planting strategy, and maximize your profits.');
    }
  }, []);

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
      <Helmet>
        <title>Grow a Garden Calculator - Roblox Fruit Value Calculator</title>
        <meta name="description" content="Calculate your Grow A Garden crop values precisely, optimize your planting strategy, and maximize your profits." />
      </Helmet>
      
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