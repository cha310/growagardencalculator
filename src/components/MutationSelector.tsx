'use client';
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
    <div className="calculator-panel">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '8px' 
      }}>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#fde047', marginRight: '8px' }}></div>
        <h2 style={{ 
          color: '#fde047', 
          fontSize: '10px', 
          fontFamily: "'Press Start 2P', cursive",
          fontWeight: 'bold'
        }}>
          SELECT MODIFIERS
        </h2>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#fde047', marginLeft: '8px' }}></div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Growth Mutations */}
        <div>
          <label style={{ 
            display: 'block', 
            color: '#4ade80', 
            fontSize: '8px', 
            marginBottom: '6px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            VARIANTS
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
            {growthMutations.map(mutation => (
              <button
                key={mutation.id}
                style={{
                  backgroundColor: isGrowthSelected(mutation) ? '#17a34a' : '#2d3748',
                  border: isGrowthSelected(mutation) ? '2px solid #17a34a' : '2px solid #4b5563',
                  color: isGrowthSelected(mutation) ? '#ffffff' : '#fde047',
                  padding: '8px 6px',
                  fontSize: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Press Start 2P', cursive",
                  textAlign: 'center',
                  borderRadius: '4px',
                  lineHeight: '1.1',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => onGrowthMutationToggle(mutation)}
                onMouseEnter={(e) => {
                  if (!isGrowthSelected(mutation)) {
                    e.currentTarget.style.backgroundColor = '#4b5563'
                    e.currentTarget.style.borderColor = '#6b7280'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isGrowthSelected(mutation)) {
                    e.currentTarget.style.backgroundColor = '#2d3748'
                    e.currentTarget.style.borderColor = '#4b5563'
                  }
                }}
              >
                {mutation.name.toUpperCase()} ({mutation.multiplier}x)
              </button>
            ))}
          </div>
        </div>
        
        {/* Temperature Mutations */}
        <div>
          <label style={{ 
            display: 'block', 
            color: '#4ade80', 
            fontSize: '8px', 
            marginBottom: '6px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            MUTATIONS
          </label>
          <div style={{
            maxHeight: '160px',
            overflowY: 'auto',
            paddingRight: '6px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
              {allTemperatureMutations.map((mutation: TemperatureMutation) => (
                <button
                  key={mutation.id}
                  style={{
                    backgroundColor: isTemperatureSelected(mutation) ? '#17a34a' : '#2d3748',
                    border: isTemperatureSelected(mutation) ? '2px solid #17a34a' : '2px solid #4b5563',
                    color: isTemperatureSelected(mutation) ? '#ffffff' : '#fde047',
                    padding: '8px 6px',
                    fontSize: '7px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: "'Press Start 2P', cursive",
                    textAlign: 'center',
                    borderRadius: '4px',
                    lineHeight: '1.1',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onClick={() => onTemperatureMutationToggle(mutation)}
                  onMouseEnter={(e) => {
                    if (!isTemperatureSelected(mutation)) {
                      e.currentTarget.style.backgroundColor = '#4b5563'
                      e.currentTarget.style.borderColor = '#6b7280'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isTemperatureSelected(mutation)) {
                      e.currentTarget.style.backgroundColor = '#2d3748'
                      e.currentTarget.style.borderColor = '#4b5563'
                    }
                  }}
                >
                  {mutation.name.toUpperCase()} ({getMultiplierText(mutation)})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};