import { Plant, GrowthMutation, TemperatureMutation, EnvironmentMutation } from '../types';

export const plants: Plant[] = [
  // Flowers
  { id: 'rose', name: 'Rose', baseValue: 10, category: 'Flowers' },
  { id: 'tulip', name: 'Tulip', baseValue: 8, category: 'Flowers' },
  { id: 'lily', name: 'Lily', baseValue: 12, category: 'Flowers' },
  { id: 'sunflower', name: 'Sunflower', baseValue: 15, category: 'Flowers' },
  
  // Vegetables
  { id: 'carrot', name: 'Carrot', baseValue: 5, category: 'Vegetables' },
  { id: 'tomato', name: 'Tomato', baseValue: 7, category: 'Vegetables' },
  { id: 'potato', name: 'Potato', baseValue: 6, category: 'Vegetables' },
  { id: 'lettuce', name: 'Lettuce', baseValue: 4, category: 'Vegetables' },
  
  // Fruits
  { id: 'apple', name: 'Apple', baseValue: 20, category: 'Fruits' },
  { id: 'orange', name: 'Orange', baseValue: 18, category: 'Fruits' },
  { id: 'banana', name: 'Banana', baseValue: 22, category: 'Fruits' },
  { id: 'grape', name: 'Grape', baseValue: 25, category: 'Fruits' },
  
  // Trees
  { id: 'oak', name: 'Oak Tree', baseValue: 100, category: 'Trees' },
  { id: 'pine', name: 'Pine Tree', baseValue: 80, category: 'Trees' },
  { id: 'maple', name: 'Maple Tree', baseValue: 120, category: 'Trees' },
  { id: 'birch', name: 'Birch Tree', baseValue: 90, category: 'Trees' },
];

export const categories = ['All', 'Flowers', 'Vegetables', 'Fruits', 'Trees'];

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