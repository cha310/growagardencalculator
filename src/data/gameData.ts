import { Plant, GrowthMutation, TemperatureMutation, EnvironmentMutation } from '../types';

export const plants: Plant[] = [
  // Common Plants
  { id: 'carrot', name: 'Carrot', baseValue: 18, category: 'Common', type: 'Vegetables', shop: 'Uncategorized', weight: 0.24, price: { sheckle: 10, robux: 7 }, harvestType: 'single' },
  { id: 'strawberry', name: 'Strawberry', baseValue: 14, category: 'Common', type: 'Fruits', shop: 'Uncategorized', weight: 0.29, price: { sheckle: 50, robux: 21 }, harvestType: 'multi' },
  { id: 'chocolatecarrot', name: 'Chocolate Carrot', baseValue: 9960, category: 'Common', type: 'Vegetables', shop: 'Easter Event 2025', weight: 0.262, price: { sheckle: 10000, robux: 99 }, harvestType: 'single' },
  
  // Uncommon Plants
  { id: 'blueberry', name: 'Blueberry', baseValue: 18, category: 'Uncommon', type: 'Fruits', shop: 'Uncategorized', weight: 0.17, price: { sheckle: 400, robux: 49 }, harvestType: 'multi' },
  { id: 'lavender', name: 'Lavender', baseValue: 22563, category: 'Uncommon', type: 'Flowers', shop: 'Queen Bee Shop', weight: 0.25, price: { sheckle: 3, robux: 99 }, harvestType: 'single', obtainable: false },
  { id: 'crocus', name: 'Crocus', baseValue: 27075, category: 'Uncommon', type: 'Flowers', shop: 'Crafters Seed', weight: 0.285, price: { robux: 199 }, harvestType: 'single' },
  { id: 'wildcarrot', name: 'Wild Carrot', baseValue: 22563, category: 'Uncommon', type: 'Vegetables', shop: 'Summer Seed', weight: 0.286, price: { robux: 199 }, harvestType: 'single' },
  { id: 'rose', name: 'Rose', baseValue: 4513, category: 'Uncommon', type: 'Flowers', shop: 'Flower Seed', weight: 0.95, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'manukaflower', name: 'Manuka Flower', baseValue: 22563, category: 'Uncommon', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station', weight: 0.289, harvestType: 'single' },
  { id: 'nightshade', name: 'Nightshade', baseValue: 3159, category: 'Uncommon', type: 'Plants', shop: 'Lunar Glow Event', weight: 0.48, harvestType: 'single' },
  { id: 'redlollipop', name: 'Red Lollipop', baseValue: 45102, category: 'Uncommon', type: 'Special', shop: 'Easter Event 2025', weight: 3.799, price: { sheckle: 45000, robux: 199 }, harvestType: 'single', obtainable: false },
  
  // Rare Plants
  { id: 'tomato', name: 'Tomato', baseValue: 27, category: 'Rare', type: 'Vegetables', shop: 'Uncategorized', weight: 0.44, price: { sheckle: 800, robux: 79 }, harvestType: 'multi' },
  { id: 'cauliflower', name: 'Cauliflower', baseValue: 36, category: 'Rare', type: 'Vegetables', shop: 'Uncategorized', weight: 4.74, price: { sheckle: 1300, robux: 135 }, harvestType: 'multi' },
  { id: 'watermelon', name: 'Watermelon', baseValue: 2708, category: 'Rare', type: 'Fruits', shop: 'Uncategorized', weight: 7.3, price: { sheckle: 2500, robux: 195 }, harvestType: 'single' },
  { id: 'nectarshade', name: 'Nectar Shade', baseValue: 45125, category: 'Rare', type: 'Plants', shop: 'Queen Bee Shop', weight: 0.75, price: { sheckle: 5, robux: 139 }, harvestType: 'single', obtainable: false },
  { id: 'succulent', name: 'Succulent', baseValue: 22563, category: 'Rare', type: 'Plants', shop: 'Crafters Seed', weight: 4.75, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'pear', name: 'Pear', baseValue: 18050, category: 'Rare', type: 'Fruits', shop: 'Normal Seed', weight: 2.85, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'foxglove', name: 'Foxglove', baseValue: 18050, category: 'Rare', type: 'Flowers', shop: 'Flower Seed', weight: 1.9, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'glowshroom', name: 'Glowshroom', baseValue: 271, category: 'Rare', type: 'Mushrooms', shop: 'Lunar Glow Event', weight: 0.7, harvestType: 'multi' },
  { id: 'mint', name: 'Mint', baseValue: 4738, category: 'Rare', type: 'Herbs', shop: 'Lunar Glow Event', weight: 0.95, harvestType: 'multi' },
  { id: 'beebalm', name: 'Bee Balm', baseValue: 16245, category: 'Rare', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station', weight: 0.94, harvestType: 'multi' },
  { id: 'dandelion', name: 'Dandelion', baseValue: 45125, category: 'Rare', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station', weight: 3.79, harvestType: 'single' },
  { id: 'raspberry', name: 'Raspberry', baseValue: 90, category: 'Rare', type: 'Fruits', shop: 'Normal Seed', weight: 0.71, harvestType: 'multi' },
  { id: 'candysunflower', name: 'Candy Sunflower', baseValue: 72200, category: 'Rare', type: 'Flowers', shop: 'Easter Event 2025', weight: 1.428, price: { sheckle: 75000, robux: 279 }, harvestType: 'single', obtainable: false },
  
  // Legendary Plants
  { id: 'greenapple', name: 'Green Apple', baseValue: 271, category: 'Legendary', type: 'Fruits', shop: 'Uncategorized', weight: 2.85, price: { sheckle: 3500, robux: 399 }, harvestType: 'multi' },
  { id: 'avocado', name: 'Avocado', baseValue: 91, category: 'Legendary', type: 'Fruits', shop: 'Uncategorized', weight: 3.32, price: { sheckle: 5000, robux: 419 }, harvestType: 'multi' },
  { id: 'banana', name: 'Banana', baseValue: 1805, category: 'Legendary', type: 'Fruits', shop: 'Exotic Seed', weight: 1.42, price: { sheckle: 7000, robux: 459 }, harvestType: 'multi' },
  { id: 'violetcorn', name: 'Violet Corn', baseValue: 45125, category: 'Legendary', type: 'Vegetables', shop: 'Crafters Seed', weight: 2.85, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'cantaloupe', name: 'Cantaloupe', baseValue: 30685, category: 'Legendary', type: 'Fruits', shop: 'Summer Seed', weight: 5.22, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'moonflower', name: 'Moon Flower', baseValue: 8574, category: 'Legendary', type: 'Flowers', shop: 'Lunar Glow Event', weight: 1.9, harvestType: 'multi' },
  { id: 'starfruit', name: 'Star Fruit', baseValue: 13538, category: 'Legendary', type: 'Fruits', shop: 'Lunar Glow Event', weight: 2.85, harvestType: 'multi' },
  { id: 'lilac', name: 'Lilac', baseValue: 31588, category: 'Legendary', type: 'Flowers', shop: 'Flower Seed', weight: 2.846, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'nectarthorn', name: 'Nectar Thorn', baseValue: 30083, category: 'Legendary', type: 'Plants', shop: 'Bizzy Bear\'s Crafting Station', weight: 5.76, harvestType: 'multi' },
  { id: 'lumira', name: 'Lumira', baseValue: 76713, category: 'Legendary', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station', weight: 5.69, harvestType: 'multi' },
  { id: 'cranberry', name: 'Cranberry', baseValue: 1805, category: 'Legendary', type: 'Fruits', shop: 'Angry Plant Event', weight: 0.95, harvestType: 'multi', obtainable: false },
  { id: 'durian', name: 'Durian', baseValue: 6317, category: 'Legendary', type: 'Fruits', shop: 'Angry Plant Event', weight: 7.6, harvestType: 'multi', obtainable: false },
  { id: 'papaya', name: 'Papaya', baseValue: 903, category: 'Legendary', type: 'Fruits', shop: 'Exotic Seed', weight: 2.86, harvestType: 'multi', obtainable: false },
  
  // Mythical Plants
  { id: 'pineapple', name: 'Pineapple', baseValue: 1805, category: 'Mythical', type: 'Fruits', shop: 'Normal Seed', weight: 2.85, price: { sheckle: 7500, robux: 475 }, harvestType: 'multi' },
  { id: 'kiwi', name: 'Kiwi', baseValue: 2482, category: 'Mythical', type: 'Fruits', shop: 'Uncategorized', weight: 4.75, price: { sheckle: 10000, robux: 529 }, harvestType: 'multi' },
  { id: 'bellpepper', name: 'Bell Pepper', baseValue: 4964, category: 'Mythical', type: 'Vegetables', shop: 'Uncategorized', weight: 7.61, price: { sheckle: 55000, robux: 589 }, harvestType: 'multi' },
  { id: 'pricklypear', name: 'Prickly Pear', baseValue: 6319, category: 'Mythical', type: 'Fruits', shop: 'Uncategorized', weight: 6.65, price: { sheckle: 555000, robux: 599 }, harvestType: 'multi' },
  { id: 'nectarine', name: 'Nectarine', baseValue: 35000, category: 'Mythical', type: 'Fruits', shop: 'Queen Bee Shop', weight: 2.807, price: { sheckle: 25, robux: 399 }, harvestType: 'multi' },
  { id: 'celestiberry', name: 'Celestiberry', baseValue: 9025, category: 'Mythical', type: 'Fruits', shop: 'Twilight Shop', weight: 1.9, price: { sheckle: 15000000, robux: 599 }, harvestType: 'multi' },
  { id: 'bloodbanana', name: 'Blood Banana', baseValue: 5415, category: 'Mythical', type: 'Fruits', shop: 'Blood Moon Shop', weight: 1.42, price: { sheckle: 200000, robux: 599 }, harvestType: 'multi' },
  { id: 'moonmelon', name: 'Moon Melon', baseValue: 16245, category: 'Mythical', type: 'Fruits', shop: 'Blood Moon Shop', weight: 7.6, price: { sheckle: 500000, robux: 729 }, harvestType: 'multi' },
  { id: 'bendboo', name: 'Bendboo', baseValue: 138988, category: 'Mythical', type: 'Plants', shop: 'Crafters Seed', weight: 17.09, price: { robux: 199 }, harvestType: 'single' },
  { id: 'cocovine', name: 'Cocovine', baseValue: 60166, category: 'Mythical', type: 'Fruits', shop: 'Crafters Seed', weight: 13.3, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'parasolflower', name: 'Parasol Flower', baseValue: 180500, category: 'Mythical', type: 'Flowers', shop: 'Summer Seed', weight: 5.7, price: { robux: 199 }, harvestType: 'single' },
  { id: 'pinklily', name: 'Pink Lily', baseValue: 58663, category: 'Mythical', type: 'Flowers', shop: 'Flower Seed', weight: 5.699, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'purpledahlia', name: 'Purple Dahlia', baseValue: 67688, category: 'Mythical', type: 'Flowers', shop: 'Flower Seed', weight: 11.4, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'moonglow', name: 'Moonglow', baseValue: 18050, category: 'Mythical', type: 'Flowers', shop: 'Lunar Glow Event', weight: 6.65, harvestType: 'multi' },
  { id: 'honeysuckle', name: 'Honeysuckle', baseValue: 90250, category: 'Mythical', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station', weight: 11.4, harvestType: 'multi' },
  { id: 'suncoil', name: 'Suncoil', baseValue: 72200, category: 'Mythical', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station', weight: 9.5, harvestType: 'multi' },
  { id: 'peach', name: 'Peach', baseValue: 271, category: 'Mythical', type: 'Fruits', shop: 'Normal Seed', weight: 1.9, harvestType: 'multi' },
  { id: 'easteregg', name: 'Easter Egg', baseValue: 2256, category: 'Mythical', type: 'Special', shop: 'Easter Event 2025', weight: 2.85, price: { sheckle: 500000, robux: 699 }, harvestType: 'multi' },
  { id: 'eggplant', name: 'Eggplant', baseValue: 6769, category: 'Mythical', type: 'Vegetables', shop: 'Angry Plant Event', weight: 4.75, harvestType: 'multi', obtainable: false },
  { id: 'passionfruit', name: 'Passion Fruit', baseValue: 3204, category: 'Mythical', type: 'Fruits', shop: 'Exotic Seed', weight: 2.867, harvestType: 'multi', obtainable: false },
  { id: 'lemon', name: 'Lemon', baseValue: 500, category: 'Mythical', type: 'Fruits', shop: 'Uncategorized', price: { robux: 21 }, harvestType: 'multi', obtainable: false },
  
  // Divine Plants
  { id: 'loquat', name: 'Loquat', baseValue: 7220, category: 'Divine', type: 'Fruits', shop: 'Uncategorized', weight: 6.17, price: { sheckle: 900000, robux: 629 }, harvestType: 'multi' },
  { id: 'feijoa', name: 'Feijoa', baseValue: 11733, category: 'Divine', type: 'Fruits', shop: 'Uncategorized', weight: 9.5, price: { sheckle: 2750000, robux: 679 }, harvestType: 'multi' },
  { id: 'hivefruit', name: 'Hive Fruit', baseValue: 55955, category: 'Divine', type: 'Fruits', shop: 'Queen Bee Shop', weight: 7.59, price: { sheckle: 40, robux: 599 }, harvestType: 'multi', obtainable: false },
  { id: 'moonmango', name: 'Moon Mango', baseValue: 45125, category: 'Divine', type: 'Fruits', shop: 'Twilight Shop', weight: 14.25, price: { sheckle: 1000000000, robux: 999 }, harvestType: 'multi' },
  { id: 'dragonpepper', name: 'Dragon Pepper', baseValue: 80000, category: 'Divine', type: 'Vegetables', shop: 'Crafters Seed', weight: 5.69, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'rosydelight', name: 'Rosy Delight', baseValue: 62273, category: 'Divine', type: 'Flowers', shop: 'Summer Seed', weight: 9.5, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'sunflower', name: 'Sunflower', baseValue: 144000, category: 'Divine', type: 'Flowers', shop: 'Flower Seed', weight: 15.65, price: { robux: 199 }, harvestType: 'multi' },
  { id: 'moonblossom', name: 'Moon Blossom', baseValue: 60166, category: 'Divine', type: 'Flowers', shop: 'Lunar Glow Event', weight: 2.85, harvestType: 'multi' },
  { id: 'soulfruit', name: 'Soul Fruit', baseValue: 6994, category: 'Divine', type: 'Fruits', shop: 'Exotic Seed', weight: 23.75, harvestType: 'multi', obtainable: false },
  { id: 'cursedfruit', name: 'Cursed Fruit', baseValue: 15000, category: 'Divine', type: 'Fruits', shop: 'Exotic Seed', weight: 22.9, harvestType: 'multi', obtainable: false },
  { id: 'venusflytrap', name: 'Venus Flytrap', baseValue: 76712, category: 'Divine', type: 'Plants', shop: 'Angry Plant Event', weight: 9.5, harvestType: 'multi', obtainable: false },
  { id: 'lotus', name: 'Lotus', baseValue: 15343, category: 'Divine', type: 'Flowers', shop: 'Angry Plant Event', weight: 18.99, harvestType: 'multi', obtainable: false },
  { id: 'candyblossom', name: 'Candy Blossom', baseValue: 90250, category: 'Divine', type: 'Flowers', shop: 'Easter Event 2025', weight: 2.85, price: { sheckle: 10000000, robux: 1299 }, harvestType: 'multi', obtainable: false },
  { id: 'cherryblossom', name: 'Cherry Blossom', baseValue: 550, category: 'Divine', type: 'Flowers', shop: 'Uncategorized', price: { robux: 21 }, harvestType: 'multi', obtainable: false },
  
  // Prismatic Plants
  { id: 'sugarapple', name: 'Sugar Apple', baseValue: 43320, category: 'Prismatic', type: 'Fruits', shop: 'Uncategorized', weight: 8.55, price: { sheckle: 25000000, robux: 819 }, harvestType: 'multi' },
  { id: 'elephantears', name: 'Elephant Ears', baseValue: 69492, category: 'Prismatic', type: 'Plants', shop: 'Summer Seed', weight: 17.1, price: { robux: 199 }, harvestType: 'multi' },
];

export const categories = ['All', 'Common', 'Uncommon', 'Rare', 'Legendary', 'Mythical', 'Divine', 'Prismatic'];

export const growthMutations: GrowthMutation[] = [
  { id: 'default', name: 'Default', multiplier: 1 },
  { id: 'gold', name: 'Gold Variant', multiplier: 20 },
  { id: 'rainbow', name: 'Rainbow Variant', multiplier: 50 },
  { id: 'shiny', name: 'Shiny Variant', multiplier: 3 },
];

export const temperatureMutations: TemperatureMutation[] = [
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