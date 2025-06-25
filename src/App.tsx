import React, { useState, useEffect } from 'react';
import { CalculationState } from './types';
import { growthMutations, temperatureMutations } from './data/gameData';
import { PlantSelector } from './components/PlantSelector';
import { MutationSelector } from './components/MutationSelector';
import { CalculationPanel } from './components/CalculationPanel';
import { ResultsPanel } from './components/ResultsPanel';

function App() {
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

    const calculatedResult = 
      state.selectedPlant.baseValue *
      growthMultiplier *
      bonusMultiplier *
      state.weight *
      state.quantity *
      friendMultiplier;

    setResult(calculatedResult);
  }, [state]);

  const handlePlantSelect = (plant: any) => {
    setState(prev => ({ ...prev, selectedPlant: plant }));
  };

  const handleCategorySelect = (category: string) => {
    setState(prev => ({ ...prev, selectedCategory: category }));
  };

  const handleGrowthMutationToggle = (mutation: any) => {
    setState(prev => {
      const isSelected = prev.growthMutations.some(m => m.id === mutation.id);
      
      if (isSelected) {
        // If already selected, remove it
        return {
          ...prev,
          growthMutations: prev.growthMutations.filter(m => m.id !== mutation.id)
        };
      } else {
        // If not selected, check for mutual exclusions before adding
        let filteredMutations = [...prev.growthMutations];
        
        // Mutual exclusion: Gold and Rainbow variants
        const exclusiveVariants = ['gold', 'rainbow'];
        
        if (exclusiveVariants.includes(mutation.id)) {
          // Remove any other exclusive variants
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
        // If already selected, remove it
        return {
          ...prev,
          temperatureMutations: prev.temperatureMutations.filter(m => m.id !== mutation.id)
        };
      } else {
        // If not selected, check for mutual exclusions before adding
        let filteredMutations = [...prev.temperatureMutations];
        
        // Mutual exclusion groups
        const coldGroup = ['wet', 'chilled', 'frozen'];
        const heatGroup = ['burnt', 'cooked'];
        
        if (coldGroup.includes(mutation.id)) {
          // Remove any other cold mutations
          filteredMutations = filteredMutations.filter(m => !coldGroup.includes(m.id));
        }
        
        if (heatGroup.includes(mutation.id)) {
          // Remove any other heat mutations
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

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Decorative Corner Elements */}
      <div className="fixed top-2 left-2 w-4 h-4 bg-yellow-300 z-10"></div>
      <div className="fixed top-2 right-2 w-4 h-4 bg-yellow-300 z-10"></div>
      <div className="fixed bottom-2 left-2 w-4 h-4 bg-yellow-300 z-10"></div>
      <div className="fixed bottom-2 right-2 w-4 h-4 bg-yellow-300 z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-2xl md:text-4xl text-yellow-300 mb-2 py-4">
            Grow a Garden Calculator
          </h1>
          <div className="text-sm text-green-400 mb-4">
            Roblox · Grow a Garden Calculator: Maximize Garden Profits & Value
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="w-8 h-1 bg-yellow-300 mr-2"></div>
            <div className="w-2 h-2 bg-yellow-300"></div>
            <div className="w-8 h-1 bg-yellow-300 ml-2"></div>
          </div>
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

        {/* Bottom Navigation */}
        <div className="bg-gray-900 mt-8 py-6">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Left - Domain/Brand */}
              <div>
                <h3 className="text-sm font-semibold text-yellow-300 mb-2">growagardencalculator.me</h3>
                <p className="text-sm text-gray-300 mb-3">
                Free tool for Roblox players to track prices, optimize harvests, and maximize profits.
                </p>
              </div>

              {/* Center - Quick Actions */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-yellow-300 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                    📋 FAQs
                  </button>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;