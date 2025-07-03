export interface Plant {
  id: string;
  name: string;
  baseValue: number;
  category: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical' | 'Divine' | 'Prismatic';
  type: 'Flowers' | 'Vegetables' | 'Fruits' | 'Trees' | 'Plants' | 'Mushrooms' | 'Special' | 'Herbs';
  shop?: 'Tom\'s Shop' | 'Queen Bee Shop' | 'Twilight Shop' | 'Blood Moon Shop' | 'Crafters Seed' | 'Summer Seed' | 'Flower Seed' | 'Exotic Seed' | 'Normal Seed' | 'Lunar Glow Event' | 'Angry Plant Event' | 'Easter Event 2025' | 'Bizzy Bear\'s Crafting Station' | 'Uncategorized';
  obtainable?: boolean;
  weight?: number;
  price?: {
    sheckle?: number;
    robux?: number;
  };
  harvestType?: 'single' | 'multi';
}

export interface Pet {
  id: string;
  name: string;
  trait: string;
  tier: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical' | 'Divine' | 'Prismatic';
  obtainable: boolean;
  image?: string;
}

export interface Gear {
  id: string;
  name: string;
  description: string;
  price: {
    sheckle?: number;
    robux?: number;
    honey?: number;
    lunarPoint?: number;
    other?: string;
  };
  tier: 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Mythical' | 'Divine' | 'Craftables';
  obtainable: boolean;
  image?: string;
}

export interface Egg {
  id: string;
  name: string;
  price: {
    sheckle?: number;
    robux?: number;
    honey?: number;
  };
  hatchTime: {
    free: string;
    premium?: string;
  };
  probabilities: {
    pet: string;
    chance: string;
  }[];
  image?: string;
}

export interface Mutation {
  id: string;
  name: string;
  multiplier: number;
  stackBonus: number;
  triggers: string;
  image?: string;
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