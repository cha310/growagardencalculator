export interface Plant {
  id: string;
  name: string;
  baseValue: number;
  category: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical' | 'Divine' | 'Prismatic';
  type: 'Flowers' | 'Vegetables' | 'Fruits' | 'Trees';
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
  growthMutation: GrowthMutation;
  temperatureMutation: TemperatureMutation;
  environmentMutations: EnvironmentMutation[];
  weight: number;
  quantity: number;
  friendBonus: number;
}