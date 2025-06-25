import React from 'react';
import { Plant } from '../types';
import { plants, categories } from '../data/gameData';

interface PlantSelectorProps {
  selectedPlant: Plant | null;
  selectedCategory: string;
  onPlantSelect: (plant: Plant) => void;
  onCategorySelect: (category: string) => void;
}

export const PlantSelector: React.FC<PlantSelectorProps> = ({
  selectedPlant,
  selectedCategory,
  onPlantSelect,
  onCategorySelect,
}) => {
  const filteredPlants = selectedCategory === 'All' 
    ? plants 
    : plants.filter(plant => plant.category === selectedCategory);

  return (
    <div className="pixel-card h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-2 h-2 bg-yellow-300 mr-2"></div>
        <h2 className="text-yellow-300 text-sm">SELECT PLANT</h2>
        <div className="w-2 h-2 bg-yellow-300 ml-2"></div>
      </div>
      
      <div className="space-y-4 flex-1 flex flex-col">
        {/* Category Filter Buttons */}
        <div className="flex-shrink-0">
          <label className="block text-green-400 text-xs mb-2">CATEGORY:</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`category-filter ${
                  selectedCategory === category ? 'selected' : ''
                }`}
                onClick={() => onCategorySelect(category)}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {/* Plant Grid */}
        <div className="flex-1 flex flex-col min-h-0">
          <label className="block text-green-400 text-xs mb-2 flex-shrink-0">
            PLANTS ({filteredPlants.length}):
          </label>
          <div className="grid grid-cols-5 gap-1 overflow-y-auto plant-grid flex-1 content-start">
            {filteredPlants.map(plant => (
              <button
                key={plant.id}
                className={`plant-card h-18 ${
                  selectedPlant?.id === plant.id ? 'selected' : ''
                }`}
                onClick={() => onPlantSelect(plant)}
              >
                <div className="plant-icon">
                  {getPlantIcon(plant.category)}
                </div>
                <div className="plant-name" title={plant.name.toUpperCase()}>
                  {getDisplayName(plant.name)}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {selectedPlant && (
          <div className="selected-plant-info flex-shrink-0">
            <div className="text-xs text-green-400 mb-1">SELECTED:</div>
            <div className="text-yellow-300 text-xs">
              {selectedPlant.name.toUpperCase()} - BASE VALUE: {selectedPlant.baseValue}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Simple plant icon mapping based on category
const getPlantIcon = (category: string) => {
  const icons = {
    'Flowers': '🌸',
    'Vegetables': '🥕',
    'Fruits': '🍎',
    'Trees': '🌳'
  };
  return icons[category as keyof typeof icons] || '🌱';
};

// Function to handle long plant names for better display
const getDisplayName = (name: string) => {
  const upperName = name.toUpperCase();
  // If name is too long, try to abbreviate or shorten
  if (upperName.length > 8) {
    // Special cases for common long names
    const abbreviations: { [key: string]: string } = {
      'SUNFLOWER': 'SUNFLWR',
      'PINEAPPLE': 'PINEPPL',
      'CAULIFLOWER': 'CAULIFL',
      'WATERMELON': 'WATMLN',
      'STRAWBERRY': 'STRAWBR',
      'BLUEBERRY': 'BLUEBRR',
      'BELLPEPPER': 'BELLPPR',
      'PRICKLYPEAR': 'PRICKLY',
      'ORANGETULIP': 'ORTULIP'
    };
    
    return abbreviations[upperName] || upperName.substring(0, 8);
  }
  return upperName;
};