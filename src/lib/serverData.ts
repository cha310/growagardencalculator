import { plants, pets, gears, eggs, mutations } from '@/data/gameData';

export async function getPlantsData() {
  // Return plants data from gameData
  return plants;
}

export async function getPetsData() {
  // Return pets data from gameData
  return pets;
}

export async function getGameData() {
  // Return all game data
  return {
    plants,
    pets,
    gears,
    eggs,
    mutations
  };
}

export function generateStructuredData(gameData: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Grow a Garden Calculator',
    description: 'The most comprehensive Grow a Garden calculator for Roblox',
    url: 'https://www.growagardencalculator.me',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    creator: {
      '@type': 'Organization',
      name: 'Grow a Garden Calculator Team'
    },
    mainEntity: {
      '@type': 'Dataset',
      name: 'Grow a Garden Game Data',
      description: `Complete database with ${gameData.plants.length} crops, ${gameData.pets.length} pets, ${gameData.gears.length} gears, and ${gameData.mutations.length} mutations`,
      keywords: ['grow a garden', 'roblox', 'farming game', 'calculator', 'database']
    }
  };
}

// Export other data functions if needed
export { plants, categories, growthMutations, temperatureMutations, environmentMutations, pets, gears, eggs, mutations } from '@/data/gameData';