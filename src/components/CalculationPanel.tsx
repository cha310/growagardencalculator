'use client';
import React from 'react';

interface CalculationPanelProps {
  weight: number;
  quantity: number;
  friendBonus: number;
  onWeightChange: (weight: number) => void;
  onQuantityChange: (quantity: number) => void;
  onFriendBonusChange: (bonus: number) => void;
}

export const CalculationPanel: React.FC<CalculationPanelProps> = ({
  weight,
  quantity,
  friendBonus,
  onWeightChange,
  onQuantityChange,
  onFriendBonusChange,
}) => {
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
          CALCULATION PARAMS
        </h2>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#fde047', marginLeft: '8px' }}></div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <div>
            <label style={{ 
              display: 'block', 
              color: '#4ade80', 
              fontSize: '8px', 
              marginBottom: '6px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              WEIGHT
            </label>
            <input
              type="number"
              style={{
                width: '100%',
                backgroundColor: '#111827',
                border: '2px solid #374151',
                color: '#fbbf24',
                padding: '8px',
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive",
                borderRadius: '4px',
                boxSizing: 'border-box'
              }}
              value={weight}
              onChange={(e) => onWeightChange(Math.max(0, parseFloat(e.target.value) || 0))}
              min="0"
              step="0.1"
              placeholder="1"
            />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              color: '#4ade80', 
              fontSize: '8px', 
              marginBottom: '6px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              QUANTITY
            </label>
            <input
              type="number"
              style={{
                width: '100%',
                backgroundColor: '#111827',
                border: '2px solid #374151',
                color: '#fbbf24',
                padding: '8px',
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive",
                borderRadius: '4px',
                boxSizing: 'border-box'
              }}
              value={quantity}
              onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              placeholder="1"
            />
          </div>
        </div>
        
        <div>
          <label style={{ 
            display: 'block', 
            color: '#4ade80', 
            fontSize: '8px', 
            marginBottom: '6px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            FRIEND BONUS: {friendBonus}%
          </label>
          <input
            type="range"
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: '#374151',
              borderRadius: '0',
              appearance: 'none',
              cursor: 'pointer',
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${friendBonus}%, #374151 ${friendBonus}%, #374151 100%)`,
              border: '2px solid #4b5563',
              boxSizing: 'border-box'
            }}
            min="0"
            max="100"
            value={friendBonus}
            onChange={(e) => onFriendBonusChange(parseInt(e.target.value))}
          />
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            fontSize: '8px', 
            color: '#9ca3af', 
            marginTop: '4px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        

      </div>
    </div>
  );
};