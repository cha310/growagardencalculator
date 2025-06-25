import React from 'react';
import { GrowthMutation, TemperatureMutation, EnvironmentMutation } from '../types';
import { growthMutations, temperatureMutations, environmentMutations } from '../data/gameData';

interface MutationSelectorProps {
  growthMutation: GrowthMutation;
  temperatureMutation: TemperatureMutation;
  environmentMutations: EnvironmentMutation[];
  onGrowthMutationSelect: (mutation: GrowthMutation) => void;
  onTemperatureMutationSelect: (mutation: TemperatureMutation) => void;
  onEnvironmentMutationToggle: (mutation: EnvironmentMutation) => void;
}

export const MutationSelector: React.FC<MutationSelectorProps> = ({
  growthMutation,
  temperatureMutation,
  environmentMutations,
  onGrowthMutationSelect,
  onTemperatureMutationSelect,
  onEnvironmentMutationToggle,
}) => {
  const isEnvironmentSelected = (mutation: EnvironmentMutation) => {
    return environmentMutations.some(m => m.id === mutation.id);
  };

  return (
    <div className="pixel-card">
      <div className="flex items-center mb-4">
        <div className="w-2 h-2 bg-yellow-300 mr-2"></div>
        <h2 className="text-yellow-300 text-sm">SELECT MODIFIERS</h2>
        <div className="w-2 h-2 bg-yellow-300 ml-2"></div>
      </div>
      
      <div className="space-y-6">
        {/* Growth Mutations */}
        <div>
          <label className="block text-green-400 text-xs mb-2">GROWTH MUTATION:</label>
          <div className="grid grid-cols-1 gap-2">
            {growthMutations.map(mutation => (
              <button
                key={mutation.id}
                className={`mutation-option text-left ${
                  growthMutation.id === mutation.id ? 'selected' : ''
                }`}
                onClick={() => onGrowthMutationSelect(mutation)}
              >
                {mutation.name.toUpperCase()} ×{mutation.multiplier}
              </button>
            ))}
          </div>
        </div>
        
        {/* Temperature Mutations */}
        <div>
          <label className="block text-green-400 text-xs mb-2">TEMPERATURE MUTATION:</label>
          <div className="grid grid-cols-1 gap-2">
            {temperatureMutations.map(mutation => (
              <button
                key={mutation.id}
                className={`mutation-option text-left ${
                  temperatureMutation.id === mutation.id ? 'selected' : ''
                }`}
                onClick={() => onTemperatureMutationSelect(mutation)}
              >
                {mutation.name.toUpperCase()} {mutation.bonus >= 0 ? '+' : ''}{mutation.bonus}
              </button>
            ))}
          </div>
        </div>
        
        {/* Environment Mutations */}
        <div>
          <label className="block text-green-400 text-xs mb-2">ENVIRONMENT MUTATIONS:</label>
          <div className="grid grid-cols-2 gap-2">
            {environmentMutations.map(mutation => (
              <button
                key={mutation.id}
                className={`mutation-option multiple text-left ${
                  isEnvironmentSelected(mutation) ? 'selected' : ''
                }`}
                onClick={() => onEnvironmentMutationToggle(mutation)}
              >
                <div className="text-xs">{mutation.name.toUpperCase()}</div>
                <div className="text-xs opacity-75">
                  {mutation.bonus >= 0 ? '+' : ''}{mutation.bonus}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};