'use client';
import { OptimizedImage } from '@/components/OptimizedImage'
import React, { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');

  // Filter plants by category and search term
  const filteredPlants = plants.filter(plant => {
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="calculator-panel" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '870px'
    }}>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '16px', 
        flexShrink: 0 
      }}>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#fde047', marginRight: '8px' }}></div>
        <h2 style={{ 
          color: '#fde047', 
          fontSize: '10px', 
          fontFamily: "'Press Start 2P', cursive",
          fontWeight: 'bold'
        }}>
          SELECT PLANT
        </h2>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#fde047', marginLeft: '8px' }}></div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, minHeight: 0 }}>
        {/* Search Box */}
        <div style={{ flexShrink: 0 }}>
          <label style={{ 
            display: 'block', 
            color: '#4ade80', 
            fontSize: '8px', 
            marginBottom: '6px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            SEARCH
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for a plant..."
              style={{
                width: '100%',
                backgroundColor: '#111827',
                border: '2px solid #374151',
                color: '#fbbf24',
                padding: '8px 12px',
                fontSize: '8px',
                fontFamily: "'Press Start 2P', cursive",
                borderRadius: '4px',
                boxSizing: 'border-box'
              }}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9ca3af',
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontSize: '12px',
                  cursor: 'pointer',
                  fontFamily: "'Press Start 2P', cursive"
                }}
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div style={{ flexShrink: 0 }}>
          <label style={{ 
            display: 'block', 
            color: '#4ade80', 
            fontSize: '8px', 
            marginBottom: '6px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            CATEGORY
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {categories.map(category => (
              <button
                key={category}
                style={{
                  backgroundColor: selectedCategory === category ? '#23a24e' : '#384251',
                  border: '2px solid #3e4856',
                  color: selectedCategory === category ? '#ffffff' : '#fde047',
                  padding: '8px 12px',
                  fontSize: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Press Start 2P', cursive",
                  textAlign: 'center',
                  borderRadius: '4px'
                }}
                onClick={() => onCategorySelect(category)}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#606874'
                    e.currentTarget.style.borderColor = '#17a34a'
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#48525f'
                    e.currentTarget.style.borderColor = '#4b5563'
                  }
                }}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        {/* Plant Grid with Scrolling */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <label style={{ 
            display: 'block', 
            color: '#4ade80', 
            fontSize: '8px', 
            marginBottom: '6px', 
            flexShrink: 0,
            fontFamily: "'Press Start 2P', cursive"
          }}>
            PLANTS
          </label>
          <div 
            className="plant-grid"
            style={{
              flex: 1,
              minHeight: 0,
              backgroundColor: '#1f2937',
              borderRadius: '8px',
              padding: '8px',
              overflowY: 'auto'
            }}>
            {filteredPlants.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#9ca3af', padding: '32px 0' }}>
                <div style={{ fontSize: '8px', fontFamily: "'Press Start 2P', cursive" }}>No matching plants found</div>
              </div>
            ) : (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(5, 1fr)', 
                gap: '8px', 
                alignContent: 'start',
                paddingBottom: '8px'
              }}>
                {filteredPlants.map(plant => (
                  <button
                    key={plant.id}
                    style={{
                      backgroundColor: selectedPlant?.id === plant.id ? '#17a34a' : '#2d3748',
                      border: '2px solid #4b5563',
                      borderColor: selectedPlant?.id === plant.id ? '#16a34a' : '#4b5563',
                      borderRadius: '8px',
                      height: '96px',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onClick={() => onPlantSelect(plant)}
                    onMouseEnter={(e) => {
                      if (selectedPlant?.id !== plant.id) {
                        e.currentTarget.style.backgroundColor = '#4b5563'
                        e.currentTarget.style.borderColor = '#6b7280'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedPlant?.id !== plant.id) {
                        e.currentTarget.style.backgroundColor = '#2d3748'
                        e.currentTarget.style.borderColor = '#4b5563'
                      }
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                      <div style={{ flexShrink: 0, marginBottom: '4px' }}>
                        {getPlantIcon(plant.id, plant.type)}
                      </div>
                    </div>
                    <div style={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      padding: '4px', 
                      height: '24px'
                    }} title={plant.name.toUpperCase()}>
                      <div style={{ 
                        textAlign: 'center', 
                        lineHeight: '1.2', 
                        whiteSpace: 'pre-line', 
                        fontSize: '6px', 
                        height: '100%', 
                        display: 'flex', 
                        alignItems: 'end', 
                        justifyContent: 'center',
                        color: selectedPlant?.id === plant.id ? '#ffffff' : '#fde047',
                        fontFamily: "'Press Start 2P', cursive"
                      }}>
                        {getDisplayName(plant.name)}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {selectedPlant && (
          <div style={{
            flexShrink: 0,
            paddingTop: '8px',
            borderTop: '1px solid #374151',
            backgroundColor: '#111827',
            padding: '12px',
            borderRadius: '4px',
            border: '2px solid #4b5563',
            marginTop: '8px'
          }}>
            <div style={{ 
              fontSize: '10px', 
              color: '#4ade80', 
              marginBottom: '4px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              SELECTED:
            </div>
            <div style={{ 
              color: '#fde047', 
              fontSize: '8px',
              fontFamily: "'Press Start 2P', cursive"
            }}>
              {selectedPlant.name.toUpperCase()} - BASE VALUE: ${selectedPlant.baseValue.toLocaleString()}
            </div>
            <div style={{
              fontSize: '6px',
              color: '#9ca3af',
              lineHeight: '1.4',
              fontFamily: "'Press Start 2P', cursive",
              marginTop: '8px'
            }}>
              <div style={{
                fontWeight: 'bold',
                color: '#fde047',
                marginBottom: '4px'
              }}>
                Restrictions:
              </div>
              <div style={{ color: '#9ca3af' }}>
                Only one Golden OR Rainbow variant allowed. Only one of Chilled/Wet/Frozen allowed. Only one of Burnt/Cooked allowed. These match the actual Roblox game limitations.
              </div>
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
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
        <OptimizedImage 
          src={plantImages[plantId]} 
          alt={plantId} 
          width={72}
          height={72}
          priority={true}
          className="max-w-14 max-h-14 sm:max-w-18 sm:max-h-18 object-contain" 
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
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-4xl">
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