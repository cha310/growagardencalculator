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
    <div className="pixel-card">
      <div className="flex items-center mb-4">
        <div className="w-2 h-2 bg-yellow-300 mr-2"></div>
        <h2 className="text-yellow-300 text-sm">CALCULATION PARAMS</h2>
        <div className="w-2 h-2 bg-yellow-300 ml-2"></div>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-green-400 text-xs mb-2">WEIGHT:</label>
            <input
              type="number"
              className="pixel-input w-full"
              value={weight}
              onChange={(e) => onWeightChange(Math.max(0, parseFloat(e.target.value) || 0))}
              min="0"
              step="0.1"
              placeholder="0.0"
            />
          </div>
          
          <div>
            <label className="block text-green-400 text-xs mb-2">QUANTITY:</label>
            <input
              type="number"
              className="pixel-input w-full"
              value={quantity}
              onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              placeholder="1"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-green-400 text-xs mb-2">
            FRIEND BONUS: {friendBonus}%
          </label>
          <input
            type="range"
            className="w-full h-2 bg-gray-700 rounded-none appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${friendBonus}%, #374151 ${friendBonus}%, #374151 100%)`
            }}
            min="0"
            max="100"
            value={friendBonus}
            onChange={(e) => onFriendBonusChange(parseInt(e.target.value))}
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        

      </div>
    </div>
  );
};