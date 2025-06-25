export interface Plant {
  id: string;
  name: string;
  baseValue: number;
  category: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';
  type: 'Flowers' | 'Vegetables' | 'Fruits' | 'Trees' | 'Plants' | 'Mushrooms' | 'Special' | 'Herbs';
}

export interface GrowthMutation {
  id: string;
  name: string;
  multiplier: number;
}

export interface TemperatureMutation {
  id: string;
  name: string;
  bonus: number;
}

export interface EnvironmentMutation {
  id: string;
  name: string;
  bonus: number;
}

export interface CalculationState {
  selectedPlant: Plant | null;
  selectedCategory: string;
  growthMutations: GrowthMutation[];
  temperatureMutations: TemperatureMutation[];
  environmentMutations: EnvironmentMutation[];
  weight: number;
  quantity: number;
  friendBonus: number;
}