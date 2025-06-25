import React from 'react';
import { CalculationState } from '../types';

interface ResultsPanelProps {
  state: CalculationState;
  result: number;
  onReset: () => void;
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ state, result, onReset }) => {
  const { selectedPlant, growthMutation, temperatureMutation, environmentMutations, weight, quantity, friendBonus } = state;
  
  const environmentBonus = environmentMutations.reduce((sum, mutation) => sum + mutation.bonus, 0);
  const totalMultiplier = 1 + (temperatureMutation.bonus + environmentBonus) / 100;
  const friendMultiplier = 1 + friendBonus / 100;
  
  if (!selectedPlant) {
    return (
      <div className="pixel-card">
        <div className="flex items-center mb-4">
          <div className="w-2 h-2 bg-yellow-300 mr-2"></div>
          <h2 className="text-yellow-300 text-sm">RESULTS</h2>
          <div className="w-2 h-2 bg-yellow-300 ml-2"></div>
        </div>
        <div className="text-center text-gray-500 py-8">
          <p className="text-xs">SELECT A PLANT</p>
          <p className="text-xs">TO SEE RESULTS</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-card">
      <div className="flex items-center mb-4">
        <div className="w-2 h-2 bg-yellow-300 mr-2"></div>
        <h2 className="text-yellow-300 text-sm">RESULTS</h2>
        <div className="w-2 h-2 bg-yellow-300 ml-2"></div>
      </div>
      
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-300 mb-2 result-value">
            {result.toFixed(2)}
          </div>
          <div className="text-xs text-green-400">TOTAL VALUE</div>
        </div>
        
        <div className="border-t border-green-600 pt-4">
          <h3 className="text-green-400 text-xs mb-2">CALCULATION BREAKDOWN:</h3>
          <div className="space-y-1 text-xs text-gray-300">
            <div className="flex justify-between">
              <span>Base Value:</span>
              <span className="text-yellow-300">{selectedPlant.baseValue}</span>
            </div>
            <div className="flex justify-between">
              <span>Growth Mutation:</span>
              <span className="text-yellow-300">×{growthMutation.multiplier}</span>
            </div>
            <div className="flex justify-between">
              <span>Temperature Bonus:</span>
              <span className="text-yellow-300">{temperatureMutation.bonus >= 0 ? '+' : ''}{temperatureMutation.bonus}%</span>
            </div>
            {environmentMutations.length > 0 && (
              <div className="flex justify-between">
                <span>Environment Bonus:</span>
                <span className="text-yellow-300">{environmentBonus >= 0 ? '+' : ''}{environmentBonus}%</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Weight:</span>
              <span className="text-yellow-300">{weight}</span>
            </div>
            <div className="flex justify-between">
              <span>Quantity:</span>
              <span className="text-yellow-300">{quantity}</span>
            </div>
            <div className="flex justify-between">
              <span>Friend Bonus:</span>
              <span className="text-yellow-300">{friendBonus}%</span>
            </div>
            <div className="border-t border-gray-600 pt-1 mt-2 flex justify-between font-bold">
              <span>Final Result:</span>
              <span className="text-yellow-300">{result.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-400 bg-gray-900 p-2 border border-gray-600">
          <div className="mb-1">FORMULA:</div>
          <div>Base × Growth × (1 + Bonuses%) × Weight × Quantity × (1 + Friend%)</div>
        </div>
        
        <button
          className="pixel-button w-full mt-4"
          onClick={onReset}
        >
          RESET ALL
        </button>
      </div>
    </div>
  );
};