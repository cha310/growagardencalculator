import { Plant, GrowthMutation, TemperatureMutation, EnvironmentMutation } from '../types';

export const plants: Plant[] = [
  // Common Plants
  { id: 'carrot', name: 'Carrot', baseValue: 20, category: 'Common', type: 'Vegetables' },
  { id: 'strawberry', name: 'Strawberry', baseValue: 50, category: 'Common', type: 'Fruits' },
  { id: 'wildcarrot', name: 'Wild Carrot', baseValue: 25, category: 'Common', type: 'Vegetables' },
  { id: 'rose', name: 'Rose', baseValue: 30, category: 'Common', type: 'Flowers' },
  
  // Uncommon Plants
  { id: 'blueberry', name: 'Blueberry', baseValue: 400, category: 'Uncommon', type: 'Fruits' },
  { id: 'raspberry', name: 'Raspberry', baseValue: 350, category: 'Uncommon', type: 'Fruits' },
  { id: 'pear', name: 'Pear', baseValue: 300, category: 'Uncommon', type: 'Fruits' },
  
  // Rare Plants
  { id: 'tomato', name: 'Tomato', baseValue: 800, category: 'Rare', type: 'Vegetables' },
  { id: 'cauliflower', name: 'Cauliflower', baseValue: 1300, category: 'Rare', type: 'Vegetables' },
  { id: 'watermelon', name: 'Watermelon', baseValue: 2500, category: 'Rare', type: 'Fruits' },
  { id: 'pumpkin', name: 'Pumpkin', baseValue: 1800, category: 'Rare', type: 'Vegetables' },
  { id: 'cantaloupe', name: 'Cantaloupe', baseValue: 2200, category: 'Rare', type: 'Fruits' },
  
  // Legendary Plants
  { id: 'greenapple', name: 'Green Apple', baseValue: 3500, category: 'Legendary', type: 'Fruits' },
  { id: 'avocado', name: 'Avocado', baseValue: 5000, category: 'Legendary', type: 'Fruits' },
  { id: 'banana', name: 'Banana', baseValue: 7000, category: 'Legendary', type: 'Fruits' },
  { id: 'peach', name: 'Peach', baseValue: 4500, category: 'Legendary', type: 'Fruits' },
  
  // Mythical Plants
  { id: 'pineapple', name: 'Pineapple', baseValue: 7500, category: 'Mythical', type: 'Fruits' },
  { id: 'kiwi', name: 'Kiwi', baseValue: 10000, category: 'Mythical', type: 'Fruits' },
  { id: 'bellpepper', name: 'Bell Pepper', baseValue: 55000, category: 'Mythical', type: 'Vegetables' },
  { id: 'pricklypear', name: 'Prickly Pear', baseValue: 555000, category: 'Mythical', type: 'Fruits' },
  { id: 'dragonfruit', name: 'Dragon Fruit', baseValue: 85000, category: 'Mythical', type: 'Fruits' },
  { id: 'cactus', name: 'Cactus', baseValue: 75000, category: 'Mythical', type: 'Vegetables' },
  
  // Divine Plants
  { id: 'loquat', name: 'Loquat', baseValue: 900000, category: 'Divine', type: 'Fruits' },
  { id: 'feijoa', name: 'Feijoa', baseValue: 2750000, category: 'Divine', type: 'Fruits' },
  { id: 'rosydelight', name: 'Rosy Delight', baseValue: 1500000, category: 'Divine', type: 'Flowers' },
  { id: 'elephantears', name: 'Elephant Ears', baseValue: 3200000, category: 'Divine', type: 'Vegetables' },
  
  // Prismatic Plants
  { id: 'sugarapple', name: 'Sugar Apple', baseValue: 25000000, category: 'Prismatic', type: 'Fruits' },
  { id: 'parasolflower', name: 'Parasol Flower', baseValue: 15000000, category: 'Prismatic', type: 'Flowers' },
];

export const categories = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic'];

export const growthMutations: GrowthMutation[] = [
  { id: 'default', name: 'Default', multiplier: 1 },
  { id: 'golden', name: 'Golden', multiplier: 20 },
  { id: 'rainbow', name: 'Rainbow', multiplier: 50 },
];

export const temperatureMutations: TemperatureMutation[] = [
  { id: 'default', name: 'Default', bonus: 0 },
  
  // 2x Multiplier (100% bonus)
  { id: 'wet', name: 'Wet', bonus: 100 },
  { id: 'moonlit', name: 'Moonlit', bonus: 100 },
  { id: 'chilled', name: 'Chilled', bonus: 100 },
  { id: 'choc', name: 'Choc', bonus: 100 },
  
  // 3x Multiplier (200% bonus)
  { id: 'pollinated', name: 'Pollinated', bonus: 200 },
  
  // 4x Multiplier (300% bonus)
  { id: 'bloodlit', name: 'Bloodlit', bonus: 300 },
  { id: 'burnt', name: 'Burnt', bonus: 300 },
  
  // 5x Multiplier (400% bonus)
  { id: 'honeyglazed', name: 'HoneyGlazed', bonus: 400 },
  { id: 'plasma', name: 'Plasma', bonus: 400 },
  { id: 'heavenly', name: 'Heavenly', bonus: 400 },
  { id: 'twisted', name: 'Twisted', bonus: 400 },
  
  // 10x Multiplier (900% bonus)
  { id: 'frozen', name: 'Frozen', bonus: 900 },
  
  // 25x Multiplier (2400% bonus)
  { id: 'cooked', name: 'Cooked', bonus: 2400 },
  { id: 'zombified', name: 'Zombified', bonus: 2400 },
  { id: 'molten', name: 'Molten', bonus: 2400 },
  
  // 100x Multiplier (9900% bonus)
  { id: 'shocked', name: 'Shocked', bonus: 9900 },
  
  // 120x Multiplier (11900% bonus)
  { id: 'celestial', name: 'Celestial', bonus: 11900 },
  
  // 125x Multiplier (12400% bonus)
  { id: 'disco', name: 'Disco', bonus: 12400 },
  { id: 'meteoric', name: 'Meteoric', bonus: 12400 },
  
  // 135x Multiplier (13400% bonus)
  { id: 'voidtouched', name: 'Voidtouched', bonus: 13400 },
  
  // 150x Multiplier (14900% bonus)
  { id: 'dawnbound', name: 'Dawnbound', bonus: 14900 },
];

export const environmentMutations: EnvironmentMutation[] = [
  { id: 'moonlit', name: 'Moonlit', bonus: 2 },
  { id: 'pollinated', name: 'Pollinated', bonus: 150 },
  { id: 'fertilized', name: 'Fertilized', bonus: 50 },
  { id: 'blessed', name: 'Blessed', bonus: 25 },
  { id: 'cursed', name: 'Cursed', bonus: -10 },
  { id: 'magical', name: 'Magical', bonus: 75 },
];