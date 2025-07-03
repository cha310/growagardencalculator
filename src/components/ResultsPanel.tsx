'use client';
import React from 'react';
import { CalculationState } from '../types';
import { temperatureMutations as allTemperatureMutations, environmentMutations as allEnvironmentMutations } from '../data/gameData';

interface ResultsPanelProps {
  state: CalculationState;
  result: number;
  onReset: () => void;
  onMaxMutation?: () => void;
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ state, result, onReset, onMaxMutation }) => {
  const { selectedPlant, growthMutations, temperatureMutations, environmentMutations, weight, quantity, friendBonus } = state;
  
  const environmentBonus = environmentMutations.reduce((sum, mutation) => sum + mutation.bonus, 0);
  const temperatureBonus = temperatureMutations.reduce((sum, mutation) => sum + mutation.bonus, 0);
  const growthMultiplier = growthMutations.reduce((product, mutation) => product * mutation.multiplier, 1);
  const totalMultiplier = 1 + (temperatureBonus + environmentBonus) / 100;
  const friendMultiplier = 1 + friendBonus / 100;
  
  // 检查是否已启用最大变异
  const hasRainbowAndShiny = growthMutations.some(m => m.id === 'rainbow') && 
                            growthMutations.some(m => m.id === 'shiny');
  const excludedMutations = ['chilled', 'wet', 'pollinated'];
  const expectedTemperatureCount = allTemperatureMutations.filter((m: any) => !excludedMutations.includes(m.id)).length;
  
  const isMaxMutationActive = 
    hasRainbowAndShiny &&
    temperatureMutations.length === expectedTemperatureCount &&
    environmentMutations.length === allEnvironmentMutations.length &&
    friendBonus === 100;
  
  if (!selectedPlant) {
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
            RESULTS
          </h2>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#fde047', marginLeft: '8px' }}></div>
        </div>
        <div style={{ 
          textAlign: 'center', 
          color: '#6b7280', 
          padding: '16px 0',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ fontSize: '8px', marginBottom: '4px' }}>SELECT A PLANT</p>
          <p style={{ fontSize: '8px' }}>TO SEE RESULTS</p>
        </div>
      </div>
    );
  }

  return (
    <div className="calculator-panel">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '16px' 
      }}>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#fde047', marginRight: '8px' }}></div>
        <h2 style={{ 
          color: '#fde047', 
          fontSize: '10px', 
          fontFamily: "'Press Start 2P', cursive",
          fontWeight: 'bold'
        }}>
          RESULTS
        </h2>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#fde047', marginLeft: '8px' }}></div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#fde047',
            marginBottom: '6px',
            fontFamily: "'Press Start 2P', cursive",
            lineHeight: '1.2',
            wordBreak: 'break-all'
          }}>
            {(() => {
              const fullNumber = result.toLocaleString('en-US', { 
                minimumFractionDigits: 0, 
                maximumFractionDigits: 0 
              });
              
              // Format large numbers with commas for readability
              return fullNumber;
            })()}
          </div>
          <div style={{
            fontSize: '8px',
            color: '#4ade80',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            TOTAL VALUE
          </div>
        </div>
        
        <div style={{
          borderTop: '2px solid #4ade80',
          paddingTop: '8px'
        }}>
          <h3 style={{
            color: '#4ade80',
            fontSize: '10px',
            marginBottom: '6px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            CALCULATION BREAKDOWN:
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af', fontFamily: "'Press Start 2P', cursive" }}>Base Value:</span>
              <span style={{ color: '#fde047', fontFamily: "'Press Start 2P', cursive" }}>{selectedPlant.baseValue}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af', fontFamily: "'Press Start 2P', cursive" }}>Growth Multiplier:</span>
              <span style={{ color: '#fde047', fontFamily: "'Press Start 2P', cursive" }}>×{growthMultiplier}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af', fontFamily: "'Press Start 2P', cursive" }}>Temperature Bonus:</span>
              <span style={{ color: '#fde047', fontFamily: "'Press Start 2P', cursive" }}>{temperatureBonus >= 0 ? '+' : ''}{temperatureBonus}%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af', fontFamily: "'Press Start 2P', cursive" }}>Weight:</span>
              <span style={{ color: '#fde047', fontFamily: "'Press Start 2P', cursive" }}>{weight}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af', fontFamily: "'Press Start 2P', cursive" }}>Quantity:</span>
              <span style={{ color: '#fde047', fontFamily: "'Press Start 2P', cursive" }}>{quantity}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af', fontFamily: "'Press Start 2P', cursive" }}>Friend Bonus:</span>
              <span style={{ color: '#fde047', fontFamily: "'Press Start 2P', cursive" }}>{friendBonus}%</span>
            </div>
            <div style={{
              borderTop: '1px solid #4b5563',
              paddingTop: '4px',
              marginTop: '2px',
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 'bold'
            }}>
              <span style={{ color: '#9ca3af', fontFamily: "'Press Start 2P', cursive" }}>Final Result:</span>
              <span style={{ color: '#fde047', fontFamily: "'Press Start 2P', cursive" }}>{result.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div style={{
          fontSize: '6px',
          color: '#9ca3af',
          backgroundColor: '#111827',
          padding: '12px',
          border: '2px solid #4b5563',
          borderRadius: '4px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <div style={{ marginBottom: '4px', fontWeight: 'bold' }}>FORMULA:</div>
          <div style={{ lineHeight: '1.4' }}>
            Base × Growth × (1 + Bonuses%) × Weight × Quantity × (1 + Friend%)
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          marginTop: '0px'
        }}>
          {onMaxMutation && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  height: '24px',
                  width: '44px',
                  alignItems: 'center',
                  borderRadius: '12px',
                  border: '2px solid #4b5563',
                  backgroundColor: isMaxMutationActive ? '#4ade80' : '#4b5563',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onClick={onMaxMutation}
              >
                <span
                  style={{
                    display: 'inline-block',
                    height: '16px',
                    width: '16px',
                    transform: isMaxMutationActive ? 'translateX(22px)' : 'translateX(2px)',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: '1px solid #000000',
                    transition: 'transform 0.2s ease'
                  }}
                />
              </button>
              <span style={{
                fontSize: '8px',
                color: '#9ca3af',
                fontFamily: "'Press Start 2P', cursive"
              }}>
                MAX MUTATION
              </span>
            </div>
          )}
          
          <button
            style={{
              flex: 1,
              backgroundColor: '#17a34a',
              border: '2px solid #176534',
              color: '#fde047',
              padding: '12px 16px',
              fontSize: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: "'Press Start 2P', cursive",
              fontWeight: 'bold',
              borderRadius: '4px'
            }}
            onClick={onReset}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#45b56e'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#17a34a'
            }}
          >
            RESET ALL
          </button>
        </div>
      </div>
    </div>
  );
};