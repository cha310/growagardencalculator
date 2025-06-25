import React from 'react';
import { GrowthMutation, TemperatureMutation, EnvironmentMutation } from '../types';
import { growthMutations, temperatureMutations as allTemperatureMutations, environmentMutations } from '../data/gameData';

interface MutationSelectorProps {
  growthMutations: GrowthMutation[];
  temperatureMutations: TemperatureMutation[];
  environmentMutations: EnvironmentMutation[];
  onGrowthMutationToggle: (mutation: GrowthMutation) => void;
  onTemperatureMutationToggle: (mutation: TemperatureMutation) => void;
  onEnvironmentMutationToggle: (mutation: EnvironmentMutation) => void;
}

export const MutationSelector: React.FC<MutationSelectorProps> = ({
  growthMutations: selectedGrowthMutations,
  temperatureMutations: selectedTemperatureMutations,
  environmentMutations,
  onGrowthMutationToggle,
  onTemperatureMutationToggle,
  onEnvironmentMutationToggle,
}) => {
  const isEnvironmentSelected = (mutation: EnvironmentMutation) => {
    return environmentMutations.some(m => m.id === mutation.id);
  };

  const isTemperatureSelected = (mutation: TemperatureMutation) => {
    return selectedTemperatureMutations.some(m => m.id === mutation.id);
  };

  const isGrowthSelected = (mutation: GrowthMutation) => {
    return selectedGrowthMutations.some(m => m.id === mutation.id);
  };

  const getMultiplierText = (mutation: TemperatureMutation) => {
    // Convert bonus percentage to multiplier (bonus% = (multiplier - 1) * 100)
    const multiplier = 1 + mutation.bonus / 100;
    return `${multiplier}x`;
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
          <label className="block text-green-400 text-xs mb-2">VARIANTS:</label>
          <div className="grid grid-cols-2 gap-2">
            {growthMutations.map(mutation => (
              <button
                key={mutation.id}
                className={`mutation-option multiple text-center ${
                  isGrowthSelected(mutation) ? 'selected' : ''
                }`}
                onClick={() => onGrowthMutationToggle(mutation)}
              >
                <div className="text-xs">{mutation.name.toUpperCase()}</div>
                <div className="text-xs opacity-75">
                  ({mutation.multiplier}x)
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Temperature Mutations */}
        <div>
          <label className="block text-green-400 text-xs mb-2">MUTATIONS:</label>
          <div className="grid grid-cols-2 gap-2">
            {allTemperatureMutations.map((mutation: TemperatureMutation) => (
              <button
                key={mutation.id}
                className={`mutation-option multiple text-center ${
                  isTemperatureSelected(mutation) ? 'selected' : ''
                }`}
                onClick={() => onTemperatureMutationToggle(mutation)}
              >
                <div className="text-xs">{mutation.name.toUpperCase()}</div>
                <div className="text-xs opacity-75">
                  ({getMultiplierText(mutation)})
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Restrictions Notice */}
        <div className="text-[10px] text-gray-400 leading-relaxed">
          <div className="font-semibold text-yellow-300 mb-1">Restrictions:</div>
          Only one of Gold/Rainbow Variant allowed. Only one of Wet/Chilled/Frozen allowed. Only one of Burnt/Cooked allowed. These match the actual Roblox game limitations.
        </div>
      </div>
    </div>
  );
};