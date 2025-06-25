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
          <h1 className="text-2xl md:text-4xl text-yellow-300 mb-4 py-4">
            Grow a Garden Calculator
          </h1>
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
            <div className="text-xs text-gray-500">RETRO GARDEN CALCULATOR v1.0</div>
            <div className="w-16 h-1 bg-green-600 ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;