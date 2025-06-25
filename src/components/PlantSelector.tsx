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
    <div className="pixel-card flex flex-col max-h-[1033px]">
      <div className="flex items-center mb-4 flex-shrink-0">
        <div className="w-2 h-2 bg-yellow-300 mr-2"></div>
        <h2 className="text-yellow-300 text-sm">SELECT PLANT</h2>
        <div className="w-2 h-2 bg-yellow-300 ml-2"></div>
      </div>
      
      <div className="space-y-4 flex-1 flex flex-col min-h-0">
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
        
        {/* Plant Grid with Scrolling */}
        <div className="flex-1 flex flex-col min-h-0">
          <label className="block text-green-400 text-xs mb-2 flex-shrink-0">
            PLANTS ({filteredPlants.length}):
          </label>
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="grid grid-cols-5 gap-2 plant-grid content-start pb-2">
              {filteredPlants.map(plant => (
                <button
                  key={plant.id}
                  className={`plant-card h-28 relative ${
                    selectedPlant?.id === plant.id ? 'selected' : ''
                  }`}
                  onClick={() => onPlantSelect(plant)}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="plant-icon flex-shrink-0 mb-2">
                      {getPlantIcon(plant.id, plant.type)}
                    </div>
                  </div>
                  <div className="plant-name absolute bottom-0 left-0 right-0 px-1 py-1 h-8" title={plant.name.toUpperCase()}>
                    <div className="text-center leading-tight whitespace-pre-line text-[7px] h-full flex items-end justify-center">
                      {getDisplayName(plant.name)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {selectedPlant && (
          <div className="selected-plant-info flex-shrink-0 pt-2 border-t border-gray-700">
            <div className="text-xs text-green-400 mb-1">SELECTED:</div>
            <div className="text-yellow-300 text-xs">
              {selectedPlant.name.toUpperCase()} - BASE VALUE: ${selectedPlant.baseValue.toLocaleString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Plant icon mapping - using real game images
const getPlantIcon = (plantId: string, plantType: string) => {
  // Real game images mapped to plant IDs
  const plantImages: { [key: string]: string } = {
    // Fruits
    'apple': '/plant/apple.png',
    'avocado': '/plant/avocado.png',
    'banana': '/plant/banana.png',
    'blueberry': '/plant/blueberry.png',
    'bloodbanana': '/plant/blood-banana.png',
    'cacao': '/plant/cacao.png',
    'cantaloupe': '/plant/cantaloupe.png',
    'celestiberry': '/plant/celestiberry.png',
    'cocovine': '/plant/cocovine.png',
    'coconut': '/plant/coconut.png',
    'cranberry': '/plant/cranberry.png',
    'cursedfruit': '/plant/cursed-fruit.png',
    'dragonfruit': '/plant/dragon-fruit.png',
    'durian': '/plant/durian.png',
    'feijoa': '/plant/feijoa.png',
    'grape': '/plant/grape.png',
    'greenapple': '/plant/green-apple.png',
    'hivefruit': '/plant/hive-fruit.png',
    'kiwi': '/plant/kiwi.png',
    'lemon': '/plant/lemon.png',
    'loquat': '/plant/loquat.png',
    'mango': '/plant/mango.png',
    'moonmango': '/plant/moon-mango.png',
    'moonmelon': '/plant/moon-melon.png',
    'nectarine': '/plant/nectarine.png',
    'papaya': '/plant/papaya.png',
    'passionfruit': '/plant/passionfruit.png',
    'peach': '/plant/peach.png',
    'pear': '/plant/pear.png',
    'pineapple': '/plant/pineapple.png',
    'pricklypear': '/plant/prickly-pear.png',
    'raspberry': '/plant/raspberry.png',
    'soulfruit': '/plant/soul-fruit.png',
    'starfruit': '/plant/starfruit.png',
    'strawberry': '/plant/strawberry.png',
    'sugarapple': '/plant/sugar-apple.png',
    'watermelon': '/plant/watermelon.png',
    
    // Vegetables
    'carrot': '/plant/carrot.png',
    'cauliflower': '/plant/cauliflower.png',
    'chocolatecarrot': '/plant/chocolate-carrot.png',
    'corn': '/plant/corn.png',
    'dragonpepper': '/plant/dragon-pepper.png',
    'eggplant': '/plant/eggplant.png',
    'pepper': '/plant/pepper.png',
    'pumpkin': '/plant/pumpkin.png',
    'tomato': '/plant/tomato.png',
    'violetcorn': '/plant/violet-corn.png',
    'wildcarrot': '/plant/wild-carrot.png',
    
    // Flowers
    'beebalm': '/plant/bee-balm.png',
    'candyblossom': '/plant/candy-blossom.png',
    'candysunflower': '/plant/candy-sunflower.png',
    'cherryblossom': '/plant/cherry-blossom.png',
    'crocus': '/plant/crocus.png',
    'daffodil': '/plant/daffodil.png',
    'dandelion': '/plant/dandelion.png',
    'emberlily': '/plant/ember-lily.png',
    'foxglove': '/plant/foxglove.png',
    'honeysuckle': '/plant/honeysuckle.png',
    'lavender': '/plant/lavender.png',
    'lilac': '/plant/lilac.png',
    'lotus': '/plant/lotus.png',
    'lumira': '/plant/lumira.png',
    'manukaflower': '/plant/manuka-flower.png',
    'moonblossom': '/plant/moon-blossom.png',
    'moonflower': '/plant/moonflower.png',
    'moonglow': '/plant/moonglow.png',
    'orangetulip': '/plant/orange-tulip.png',
    'parasolflower': '/plant/parasol-flower.png',
    'pinklily': '/plant/pink-lily.png',
    'purpledahlia': '/plant/purple-dahlia.png',
    'rose': '/plant/rose.png',
    'rosydelight': '/plant/rosy-delight.png',
    'suncoil': '/plant/suncoil.png',
    'sunflower': '/plant/sunflower.png',
    
    // Plants
    'bamboo': '/plant/bamboo.png',
    'beanstalk': '/plant/beanstalk.png',
    'bendboo': '/plant/bendboo.png',
    'cactus': '/plant/cactus.png',
    'elephantears': '/plant/elephant-ears.png',
    'nectarshade': '/plant/nectarshade.png',
    'nectarthorn': '/plant/nectar-thorn.png',
    'nightshade': '/plant/nightshade.png',
    'succulent': '/plant/succulent.png',
    'venusflytrap': '/plant/venus-fly-trap.png',
    
    // Mushrooms
    'glowshroom': '/plant/glowshroom.png',
    'mushroom': '/plant/mushroom.png',
    
    // Special items
    'easteregg': '/plant/easter-egg.png',
    'redlollipop': '/plant/red-lollipop.png',
    
    // Herbs
    'mint': '/plant/mint.png',
    
    // Special mappings for plants without direct image matches
    'purplecabbage': '/plant/Cabbageee.webp',
    'lime': '/plant/Lime_possible_appearance.webp'
  };

  // Use real image if available
  if (plantImages[plantId]) {
    return (
      <div className="w-22 h-22 flex items-center justify-center">
        <img 
          src={plantImages[plantId]} 
          alt={plantId} 
          className="max-w-20 max-h-20 object-contain" 
        />
      </div>
    );
  }

  // Fallback to emoji icons based on plant type for unmapped plants
  const emojiIcons = {
    'Flowers': '🌸',
    'Vegetables': '🥕',
    'Fruits': '🍎',
    'Trees': '🌳',
    'Plants': '🌱',
    'Mushrooms': '🍄',
    'Special': '⭐',
    'Herbs': '🌿'
  };
  const emoji = emojiIcons[plantType as keyof typeof emojiIcons] || '🌱';
  return (
    <div className="w-22 h-22 flex items-center justify-center text-4xl">
      {emoji}
    </div>
  );
};

// Function to handle long plant names for better display
const getDisplayName = (name: string) => {
  const upperName = name.toUpperCase();
  
  // Special cases for common long names with smart abbreviations
  const abbreviations: { [key: string]: string } = {
    'STRAWBERRY': 'STRAWBR',
    'BLUEBERRY': 'BLUEBRR',
    'CAULIFLOWER': 'CAULIFL',
    'WATERMELON': 'WATMLN',
    'PINEAPPLE': 'PINEPPL',
    'CANTALOUPE': 'CANTLPE',
    'PRICKLY PEAR': 'PRICKLY\nPEAR',
    'ORANGE TULIP': 'ORANGE\nTULIP',
    'WILD CARROT': 'WILD\nCARROT',
    'GREEN APPLE': 'GREEN\nAPPLE',
    'DRAGON FRUIT': 'DRAGON\nFRUIT',
    'BLOOD BANANA': 'BLOOD\nBANANA',
    'DRAGON PEPPER': 'DRAGON\nPEPPER',
    'CHOCOLATE CARROT': 'CHOCO\nCARROT',
    'PASSION FRUIT': 'PASSION\nFRUIT',
    'CURSED FRUIT': 'CURSED\nFRUIT',
    'SOUL FRUIT': 'SOUL\nFRUIT',
    'STAR FRUIT': 'STAR\nFRUIT',
    'SUGAR APPLE': 'SUGAR\nAPPLE',
    'MOON MANGO': 'MOON\nMANGO',
    'MOON MELON': 'MOON\nMELON',
    'MOON FLOWER': 'MOON\nFLOWER',
    'MOON BLOSSOM': 'MOON\nBLOSSOM',
    'CHERRY BLOSSOM': 'CHERRY\nBLOSSOM',
    'CANDY BLOSSOM': 'CANDY\nBLOSSOM',
    'CANDY SUNFLOWER': 'CANDY\nSUNFLWR',
    'BEE BALM': 'BEE\nBALM',
    'EMBER LILY': 'EMBER\nLILY',
    'PINK LILY': 'PINK\nLILY',
    'PURPLE DAHLIA': 'PURPLE\nDAHLIA',
    'ROSY DELIGHT': 'ROSY\nDELIGHT',
    'MANUKA FLOWER': 'MANUKA\nFLOWER',
    'PARASOL FLOWER': 'PARASOL\nFLOWER',
    'ELEPHANT EARS': 'ELEPHNT\nEARS',
    'NECTAR THORN': 'NECTAR\nTHORN',
    'NECTAR SHADE': 'NECTAR\nSHADE',
    'VENUS FLYTRAP': 'VENUS\nFLYTRAP',
    'HIVE FRUIT': 'HIVE\nFRUIT',
    'VIOLET CORN': 'VIOLET\nCORN',
    'EASTER EGG': 'EASTER\nEGG',
    'RED LOLLIPOP': 'RED\nLOLLIP',
    'PURPLE CABBAGE': 'PURPLE\nCABBAGE'
  };
  
  // Check if we have a special abbreviation
  if (abbreviations[upperName]) {
    return abbreviations[upperName];
  }
  
  // For other long names, try to split into two lines if there's a space
  if (upperName.length > 8 && upperName.includes(' ')) {
    const words = upperName.split(' ');
    if (words.length === 2) {
      return `${words[0]}\n${words[1]}`;
    }
  }
  
  // If still too long and no space, try to fit more characters
  if (upperName.length > 10) {
    return upperName.substring(0, 9);
  }
  
  return upperName;
};