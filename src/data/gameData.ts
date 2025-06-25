import { Plant, GrowthMutation, TemperatureMutation, EnvironmentMutation } from '../types';

export const plants: Plant[] = [
  // Common Plants
  { id: 'carrot', name: 'Carrot', baseValue: 20, category: 'Common', type: 'Vegetables' },
  { id: 'strawberry', name: 'Strawberry', baseValue: 50, category: 'Common', type: 'Fruits' },
  
  // Uncommon Plants
  { id: 'blueberry', name: 'Blueberry', baseValue: 400, category: 'Uncommon', type: 'Fruits' },
  
  // Rare Plants
  { id: 'tomato', name: 'Tomato', baseValue: 800, category: 'Rare', type: 'Vegetables' },
  { id: 'cauliflower', name: 'Cauliflower', baseValue: 1300, category: 'Rare', type: 'Vegetables' },
  { id: 'watermelon', name: 'Watermelon', baseValue: 2500, category: 'Rare', type: 'Fruits' },
  
  // Legendary Plants
  { id: 'apple', name: 'Green Apple', baseValue: 3500, category: 'Legendary', type: 'Fruits' },
  { id: 'avocado', name: 'Avocado', baseValue: 5000, category: 'Legendary', type: 'Fruits' },
  { id: 'banana', name: 'Banana', baseValue: 7000, category: 'Legendary', type: 'Fruits' },
  
  // Mythical Plants
  { id: 'pineapple', name: 'Pineapple', baseValue: 7500, category: 'Mythical', type: 'Fruits' },
  { id: 'kiwi', name: 'Kiwi', baseValue: 10000, category: 'Mythical', type: 'Fruits' },
  { id: 'bellpepper', name: 'Bell Pepper', baseValue: 55000, category: 'Mythical', type: 'Vegetables' },
  { id: 'pricklypear', name: 'Prickly Pear', baseValue: 555000, category: 'Mythical', type: 'Fruits' },
  
  // Divine Plants
  { id: 'loquat', name: 'Loquat', baseValue: 900000, category: 'Divine', type: 'Fruits' },
  { id: 'feijoa', name: 'Feijoa', baseValue: 2750000, category: 'Divine', type: 'Fruits' },
  
  // Prismatic Plants
  { id: 'sugarapple', name: 'Sugar Apple', baseValue: 25000000, category: 'Prismatic', type: 'Fruits' },
];

export const categories = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic'];

export const growthMutations: GrowthMutation[] = [
  { id: 'default', name: 'Default', multiplier: 1 },
  { id: 'golden', name: 'Golden', multiplier: 20 },
  { id: 'rainbow', name: 'Rainbow', multiplier: 50 },
];

export const temperatureMutations: TemperatureMutation[] = [
  { id: 'default', name: 'Default', bonus: 0 },
  { id: 'wet', name: 'Wet', bonus: 2 },
  { id: 'frozen', name: 'Frozen', bonus: 10 },
];

export const environmentMutations: EnvironmentMutation[] = [
  { id: 'moonlit', name: 'Moonlit', bonus: 2 },
  { id: 'pollinated', name: 'Pollinated', bonus: 150 },
  { id: 'fertilized', name: 'Fertilized', bonus: 50 },
  { id: 'blessed', name: 'Blessed', bonus: 25 },
  { id: 'cursed', name: 'Cursed', bonus: -10 },
  { id: 'magical', name: 'Magical', bonus: 75 },
];