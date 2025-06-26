import { Plant, GrowthMutation, TemperatureMutation, EnvironmentMutation } from '../types';

export const plants: Plant[] = [
  // Common Plants - 根据网站表格重新分配稀有度
  { id: 'carrot', name: 'Carrot', baseValue: 18, category: 'Common', type: 'Vegetables', shop: 'Uncategorized' },
  { id: 'strawberry', name: 'Strawberry', baseValue: 14, category: 'Common', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'corn', name: 'Corn', baseValue: 40, category: 'Common', type: 'Vegetables', shop: 'Uncategorized' },
  { id: 'raspberry', name: 'Raspberry', baseValue: 100, category: 'Common', type: 'Fruits', shop: 'Normal Seed' },
  { id: 'apple', name: 'Apple', baseValue: 275, category: 'Common', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'glowshroom', name: 'Glowshroom', baseValue: 300, category: 'Common', type: 'Mushrooms', shop: 'Lunar Glow Event' },
  { id: 'peach', name: 'Peach', baseValue: 300, category: 'Common', type: 'Fruits', shop: 'Normal Seed' },
  { id: 'lemon', name: 'Lemon', baseValue: 350, category: 'Common', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'cabbageee', name: 'Cabbage', baseValue: 500, category: 'Common', type: 'Vegetables', shop: 'Uncategorized' },
  
  // Uncommon Plants
  { id: 'blueberry', name: 'Blueberry', baseValue: 18, category: 'Uncommon', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'coconut', name: 'Coconut', baseValue: 400, category: 'Uncommon', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'cherryblossom', name: 'Cherry Blossom', baseValue: 500, category: 'Uncommon', type: 'Flowers', shop: 'Uncategorized' },
  { id: 'orangetulip', name: 'Orange Tulip', baseValue: 850, category: 'Uncommon', type: 'Flowers', shop: 'Uncategorized' },
  { id: 'lime', name: 'Lime', baseValue: 1000, category: 'Uncommon', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'daffodil', name: 'Daffodil', baseValue: 1000, category: 'Uncommon', type: 'Flowers', shop: 'Uncategorized' },
  { id: 'papaya', name: 'Papaya', baseValue: 1000, category: 'Uncommon', type: 'Fruits', shop: 'Exotic Seed' },
  { id: 'easteregg', name: 'Easter Egg', baseValue: 2500, category: 'Uncommon', type: 'Special', shop: 'Easter Event 2025' },
  { id: 'cactus', name: 'Cactus', baseValue: 3400, category: 'Uncommon', type: 'Plants', shop: 'Uncategorized' },
  { id: 'pumpkin', name: 'Pumpkin', baseValue: 3400, category: 'Uncommon', type: 'Vegetables', shop: 'Uncategorized' },
  { id: 'nightshade', name: 'Nightshade', baseValue: 3500, category: 'Uncommon', type: 'Plants', shop: 'Lunar Glow Event' },
  { id: 'cranberry', name: 'Cranberry', baseValue: 3500, category: 'Uncommon', type: 'Fruits', shop: 'Angry Plant Event' },
  { id: 'passionfruit', name: 'Passion Fruit', baseValue: 3550, category: 'Uncommon', type: 'Fruits', shop: 'Exotic Seed' },
  
  // Rare Plants
  { id: 'tomato', name: 'Tomato', baseValue: 27, category: 'Rare', type: 'Vegetables', shop: 'Uncategorized' },
  { id: 'cauliflower', name: 'Cauliflower', baseValue: 36, category: 'Rare', type: 'Vegetables', shop: 'Uncategorized' },
  { id: 'watermelon', name: 'Watermelon', baseValue: 2708, category: 'Rare', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'bamboo', name: 'Bamboo', baseValue: 4000, category: 'Rare', type: 'Plants', shop: 'Uncategorized' },
  { id: 'dragonfruit', name: 'Dragon Fruit', baseValue: 4750, category: 'Rare', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'rose', name: 'Rose', baseValue: 5000, category: 'Rare', type: 'Flowers', shop: 'Flower Seed' },
  { id: 'mint', name: 'Mint', baseValue: 5250, category: 'Rare', type: 'Herbs', shop: 'Lunar Glow Event' },
  { id: 'bloodbanana', name: 'Blood Banana', baseValue: 6000, category: 'Rare', type: 'Fruits', shop: 'Blood Moon Shop' },
  { id: 'mango', name: 'Mango', baseValue: 6500, category: 'Rare', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'durian', name: 'Durian', baseValue: 7500, category: 'Rare', type: 'Fruits', shop: 'Angry Plant Event' },
  { id: 'soulfruit', name: 'Soul Fruit', baseValue: 7750, category: 'Rare', type: 'Fruits', shop: 'Exotic Seed' },
  { id: 'grape', name: 'Grape', baseValue: 7850, category: 'Rare', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'pepper', name: 'Pepper', baseValue: 8000, category: 'Rare', type: 'Vegetables', shop: 'Uncategorized' },
  { id: 'moonflower', name: 'Moon Flower', baseValue: 9500, category: 'Rare', type: 'Flowers', shop: 'Lunar Glow Event' },
  { id: 'celestiberry', name: 'Celestiberry', baseValue: 10000, category: 'Rare', type: 'Fruits', shop: 'Twilight Shop' },
  { id: 'chocolatecarrot', name: 'Chocolate Carrot', baseValue: 11000, category: 'Rare', type: 'Vegetables', shop: 'Easter Event 2025' },
  { id: 'cacao', name: 'Cacao', baseValue: 12000, category: 'Rare', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'eggplant', name: 'Eggplant', baseValue: 12000, category: 'Rare', type: 'Vegetables', shop: 'Angry Plant Event' },
  { id: 'starfruit', name: 'Star Fruit', baseValue: 15000, category: 'Rare', type: 'Fruits', shop: 'Lunar Glow Event' },
  { id: 'moonmelon', name: 'Moon Melon', baseValue: 18000, category: 'Rare', type: 'Fruits', shop: 'Blood Moon Shop' },
  
  // Legendary Plants
  { id: 'greenapple', name: 'Green Apple', baseValue: 271, category: 'Legendary', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'avocado', name: 'Avocado', baseValue: 91, category: 'Legendary', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'banana', name: 'Banana', baseValue: 1805, category: 'Legendary', type: 'Fruits', shop: 'Exotic Seed' },
  { id: 'beebalm', name: 'Bee Balm', baseValue: 18000, category: 'Legendary', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station' },
  { id: 'foxglove', name: 'Foxglove', baseValue: 20000, category: 'Legendary', type: 'Flowers', shop: 'Flower Seed' },
  { id: 'pear', name: 'Pear', baseValue: 20000, category: 'Legendary', type: 'Fruits', shop: 'Normal Seed' },
  { id: 'lavender', name: 'Lavender', baseValue: 25000, category: 'Legendary', type: 'Flowers', shop: 'Queen Bee Shop' },
  { id: 'wildcarrot', name: 'Wild Carrot', baseValue: 25000, category: 'Legendary', type: 'Vegetables', shop: 'Summer Seed' },
  { id: 'manukaflower', name: 'Manuka Flower', baseValue: 25000, category: 'Legendary', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station' },
  { id: 'succulent', name: 'Succulent', baseValue: 25000, category: 'Legendary', type: 'Plants', shop: 'Crafters Seed' },
  { id: 'moonglow', name: 'Moonglow', baseValue: 25000, category: 'Legendary', type: 'Flowers', shop: 'Lunar Glow Event' },
  { id: 'cursedfruit', name: 'Cursed Fruit', baseValue: 25750, category: 'Legendary', type: 'Fruits', shop: 'Exotic Seed' },
  { id: 'beanstalk', name: 'Beanstalk', baseValue: 28000, category: 'Legendary', type: 'Plants', shop: 'Uncategorized' },
  { id: 'crocus', name: 'Crocus', baseValue: 30000, category: 'Legendary', type: 'Flowers', shop: 'Crafters Seed' },
  { id: 'cantaloupe', name: 'Cantaloupe', baseValue: 34000, category: 'Legendary', type: 'Fruits', shop: 'Summer Seed' },
  { id: 'lilac', name: 'Lilac', baseValue: 35000, category: 'Legendary', type: 'Flowers', shop: 'Flower Seed' },
  { id: 'lotus', name: 'Lotus', baseValue: 35000, category: 'Legendary', type: 'Flowers', shop: 'Angry Plant Event' },
  { id: 'nectarthorn', name: 'Nectar Thorn', baseValue: 44444, category: 'Legendary', type: 'Plants', shop: 'Bizzy Bear\'s Crafting Station' },
  { id: 'nectarine', name: 'Nectarine', baseValue: 48000, category: 'Legendary', type: 'Fruits', shop: 'Queen Bee Shop' },
  { id: 'redlollipop', name: 'Red Lollipop', baseValue: 50000, category: 'Legendary', type: 'Special', shop: 'Easter Event 2025' },
  { id: 'dandelion', name: 'Dandelion', baseValue: 50000, category: 'Legendary', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station' },
  { id: 'moonmango', name: 'Moon Mango', baseValue: 50000, category: 'Legendary', type: 'Fruits', shop: 'Twilight Shop' },
  { id: 'nectarshade', name: 'Nectar Shade', baseValue: 50000, category: 'Legendary', type: 'Plants', shop: 'Queen Bee Shop' },
  { id: 'violetcorn', name: 'Violet Corn', baseValue: 50000, category: 'Legendary', type: 'Vegetables', shop: 'Crafters Seed' },
  { id: 'hivefruit', name: 'Hive Fruit', baseValue: 62000, category: 'Legendary', type: 'Fruits', shop: 'Queen Bee Shop' },
  { id: 'pinklily', name: 'Pink Lily', baseValue: 65000, category: 'Legendary', type: 'Flowers', shop: 'Flower Seed' },
  { id: 'cocovine', name: 'Cocovine', baseValue: 66666, category: 'Legendary', type: 'Fruits', shop: 'Crafters Seed' },
  { id: 'emberlily', name: 'Ember Lily', baseValue: 66666, category: 'Legendary', type: 'Flowers', shop: 'Uncategorized' },
  { id: 'moonblossom', name: 'Moon Blossom', baseValue: 66666, category: 'Legendary', type: 'Flowers', shop: 'Lunar Glow Event' },
  { id: 'rosydelight', name: 'Rosy Delight', baseValue: 69000, category: 'Legendary', type: 'Flowers', shop: 'Summer Seed' },
  { id: 'purpledahlia', name: 'Purple Dahlia', baseValue: 75000, category: 'Legendary', type: 'Flowers', shop: 'Flower Seed' },
  { id: 'elephantears', name: 'Elephant Ears', baseValue: 77000, category: 'Legendary', type: 'Plants', shop: 'Summer Seed' },
  { id: 'candysunflower', name: 'Candy Sunflower', baseValue: 80000, category: 'Legendary', type: 'Flowers', shop: 'Easter Event 2025' },
  { id: 'suncoil', name: 'Suncoil', baseValue: 80000, category: 'Legendary', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station' },
  { id: 'lumira', name: 'Lumira', baseValue: 85000, category: 'Legendary', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station' },
  { id: 'dragonpepper', name: 'Dragon Pepper', baseValue: 88888, category: 'Legendary', type: 'Vegetables', shop: 'Crafters Seed' },
  { id: 'candyblossom', name: 'Candy Blossom', baseValue: 100000, category: 'Legendary', type: 'Flowers', shop: 'Easter Event 2025' },
  { id: 'honeysuckle', name: 'Honeysuckle', baseValue: 100000, category: 'Legendary', type: 'Flowers', shop: 'Bizzy Bear\'s Crafting Station' },
  { id: 'mushroom', name: 'Mushroom', baseValue: 151000, category: 'Legendary', type: 'Mushrooms', shop: 'Uncategorized' },
  { id: 'bendboo', name: 'Bendboo', baseValue: 155000, category: 'Legendary', type: 'Plants', shop: 'Crafters Seed' },
  { id: 'sunflower', name: 'Sunflower', baseValue: 160000, category: 'Legendary', type: 'Flowers', shop: 'Flower Seed' },
  { id: 'parasolflower', name: 'Parasol Flower', baseValue: 200000, category: 'Legendary', type: 'Flowers', shop: 'Summer Seed' },
  { id: 'venusflytrap', name: 'Venus Flytrap', baseValue: 85000, category: 'Legendary', type: 'Plants', shop: 'Angry Plant Event' },
  
  // Mythical Plants
  { id: 'pineapple', name: 'Pineapple', baseValue: 1805, category: 'Mythical', type: 'Fruits', shop: 'Normal Seed' },
  { id: 'kiwi', name: 'Kiwi', baseValue: 2482, category: 'Mythical', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'bellpepper', name: 'Bell Pepper', baseValue: 4964, category: 'Mythical', type: 'Vegetables', shop: 'Uncategorized' },
  { id: 'pricklypear', name: 'Prickly Pear', baseValue: 6319, category: 'Mythical', type: 'Fruits', shop: 'Uncategorized' },
  
  // Divine Plants
  { id: 'loquat', name: 'Loquat', baseValue: 7220, category: 'Divine', type: 'Fruits', shop: 'Uncategorized' },
  { id: 'feijoa', name: 'Feijoa', baseValue: 11733, category: 'Divine', type: 'Fruits', shop: 'Uncategorized' },
  
  // Prismatic Plants
  { id: 'sugarapple', name: 'Sugar Apple', baseValue: 43320, category: 'Prismatic', type: 'Fruits', shop: 'Uncategorized' },
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