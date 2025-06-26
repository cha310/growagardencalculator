import { Plant, GrowthMutation, TemperatureMutation, EnvironmentMutation, Pet, Gear } from '../types';

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

export const pets: Pet[] = [
  // Common Pets
  { id: 'starfish', name: 'Starfish', trait: 'Gains an additional 5.85 XP per second, with the amount increasing as the pet ages.', tier: 'Common', obtainable: true, image: '/pet/Starfish.webp' },
  { id: 'crab', name: 'Crab', trait: 'Occasionally travels to another player\'s garden, pinches them, and grants the owner a small amount of Sheckles.', tier: 'Common', obtainable: true, image: '/pet/Crab.webp' },
  { id: 'seagull', name: 'Seagull', trait: 'Provides a chance for shoveling a plant to drop its equivalent seed. This ability does not work on fruits.', tier: 'Common', obtainable: true, image: '/pet/Seagull.webp' },
  { id: 'bunny', name: 'Bunny', trait: 'Every 40 seconds, it eats a carrot or chocolate carrot from the garden, automatically selling it for 1.5 times its value.', tier: 'Common', obtainable: true, image: '/pet/Bunny.webp' },
  { id: 'dog', name: 'Dog', trait: 'Every 60 seconds, it has a 5% chance to dig up a random seed from the Seed Shop.', tier: 'Common', obtainable: true, image: '/pet/Dog.webp' },
  { id: 'golden-lab', name: 'Golden Lab', trait: 'Every 60 seconds, it has a 10% chance to dig up a random seed from the Seed Shop.', tier: 'Common', obtainable: true, image: '/pet/Golden-Lab.webp' },

  // Uncommon Pets
  { id: 'bee', name: 'Bee', trait: 'Approximately every 25 minutes, it flies to a nearby fruit and applies the \'Pollinated\' mutation.', tier: 'Uncommon', obtainable: true, image: '/pet/Bee.webp' },
  { id: 'black-bunny', name: 'Black Bunny', trait: 'Every 40 seconds, it finds and eats a carrot or chocolate carrot from the garden, automatically selling it for 1.5 times its value.', tier: 'Uncommon', obtainable: true, image: '/pet/Black-Bunny.webp' },
  { id: 'cat', name: 'Cat', trait: 'Every 80 seconds, it naps for 10 seconds, causing new fruit within a 10-stud radius to grow 1.25 times larger.', tier: 'Uncommon', obtainable: true, image: '/pet/Cat.webp' },
  { id: 'chicken', name: 'Chicken', trait: 'Passively increases the hatch speed of all eggs by approximately 10%.', tier: 'Uncommon', obtainable: true, image: '/pet/Chicken.webp' },
  { id: 'deer', name: 'Deer', trait: 'Provides a 3% chance for harvested berry plants to replant themselves automatically.', tier: 'Uncommon', obtainable: true, image: '/pet/Deer.webp' },

  // Rare Pets
  { id: 'monkey', name: 'Monkey', trait: 'Grants an approximate 2.5% chance to refund a fruit to your inventory upon selling, with a lower chance for rarer fruits.', tier: 'Rare', obtainable: true, image: '/pet/Monkey.webp' },
  { id: 'orange-tabby', name: 'Orange Tabby', trait: 'Every 90 seconds, it naps for 15 seconds, causing new fruit within a 15-stud radius to grow 1.5 times larger.', tier: 'Rare', obtainable: true, image: '/pet/Orange-Tabby.webp' },
  { id: 'pig', name: 'Pig', trait: 'Every 118 seconds, it emits a 15-second aura that grants plants within 15 studs a 2x chance to grow mutated fruits.', tier: 'Rare', obtainable: true, image: '/pet/Pig.webp' },
  { id: 'rooster', name: 'Rooster', trait: 'Passively increases the hatch speed of all eggs by approximately 20%.', tier: 'Rare', obtainable: true, image: '/pet/Rooster.webp' },
  { id: 'spotted-deer', name: 'Spotted Deer', trait: 'Provides a 5% chance for berry plants to remain after being harvested instead of disappearing.', tier: 'Rare', obtainable: true, image: '/pet/Spotted-Deer.webp' },
  { id: 'flamingo', name: 'Flamingo', trait: 'Every 4 minutes, it stands on one leg for 15 seconds, causing all plants and crops within a 13-stud radius to grow 15 times faster.', tier: 'Rare', obtainable: true, image: '/pet/Flamingo.webp' },
  { id: 'toucan', name: 'Toucan', trait: 'Grants all tropical-type plants within a 25.77-stud radius a 1.7x size bonus and a 1.18x variant chance bonus.', tier: 'Rare', obtainable: true, image: '/pet/Toucan.webp' },
  { id: 'sea-turtle', name: 'Sea Turtle', trait: 'Every 10 minutes, grants 1000 bonus XP to a random active pet. Every 118 seconds, it has a 10% chance to apply the \'Wet\' mutation to a nearby fruit.', tier: 'Rare', obtainable: true, image: '/pet/Sea-Turtle.webp' },
  { id: 'orangutan', name: 'Orangutan', trait: 'When crafting, each material used has a 3.49% chance of not being consumed in the process.', tier: 'Rare', obtainable: true, image: '/pet/Orangutan.webp' },
  { id: 'seal', name: 'Seal', trait: 'When selling a pet, there is a 2.42% chance to receive its corresponding egg back.', tier: 'Rare', obtainable: true, image: '/pet/Seal.webp' },
  { id: 'honey-bee', name: 'Honey Bee', trait: 'Approximately every 20 minutes, it applies the \'Pollinated\' mutation to a nearby fruit.', tier: 'Rare', obtainable: true, image: '/pet/Honey-Bee.webp' },
  { id: 'wasp', name: 'Wasp', trait: 'Every 30 minutes it pollinates a fruit, and every 10 minutes it stings a random pet to advance its ability cooldown by 60 seconds.', tier: 'Rare', obtainable: true, image: '/pet/Wasp.webp' },
  { id: 'hedgehog', name: 'Hedgehog', trait: 'Occasionally grants a size bonus of approximately 1.5x to prickly fruits such as Cactus, Durian, and Pineapple.', tier: 'Rare', obtainable: true, image: '/pet/Hedgehog.webp' },

  // Legendary Pets
  { id: 'cow', name: 'Cow', trait: 'Every 90 seconds, it "moos" for 10 seconds, causing dairy crops within 15 studs to grow 15x faster and other crops 2x faster.', tier: 'Legendary', obtainable: true, image: '/pet/Cow.webp' },
  { id: 'panda', name: 'Panda', trait: 'Every 100 seconds, it waves bamboo for 10 seconds, granting all bamboo plants a 2x size bonus.', tier: 'Legendary', obtainable: true, image: '/pet/Panda.webp' },
  { id: 'peacock', name: 'Peacock', trait: 'Every 2 minutes, it spreads its tail for 8 seconds, giving all flowers within 20 studs a 15% chance to mutate.', tier: 'Legendary', obtainable: true, image: '/pet/Peacock.webp' },
  { id: 'scarlet-macaw', name: 'Scarlet Macaw', trait: 'Provides additional mutation chances and size bonuses for all tropical plants.', tier: 'Legendary', obtainable: true, image: '/pet/Scarlet-Macaw.webp' },
  { id: 'ostrich', name: 'Ostrich', trait: 'Every minute has a 5% chance to bury a random seed in the farm.', tier: 'Legendary', obtainable: true, image: '/pet/Ostrich.webp' },
  { id: 'polar-bear', name: 'Polar Bear', trait: 'Every 2 minutes, creates a blizzard for 8 seconds with a 10% chance to freeze nearby crops.', tier: 'Legendary', obtainable: true, image: '/pet/Polar-Bear.webp' },
  { id: 'caterpillar', name: 'Caterpillar', trait: 'Every 2 minutes, chews leaves for 10 seconds, making all leafy plants grow 3x faster.', tier: 'Legendary', obtainable: true, image: '/pet/Caterpillar.webp' },
  { id: 'frog', name: 'Frog', trait: 'Every 75 seconds, jumps and splashes water, giving nearby crops a chance to receive the "Wet" mutation.', tier: 'Legendary', obtainable: true, image: '/pet/Frog.webp' },
  { id: 'turtle', name: 'Turtle', trait: 'Slowly but steadily provides small growth acceleration to nearby plants.', tier: 'Legendary', obtainable: true, image: '/pet/Turtle.webp' },
  { id: 'moth', name: 'Moth', trait: 'Active at night, provides extra growth bonuses for nighttime plants.', tier: 'Legendary', obtainable: true, image: '/pet/Moth.webp' },

  // Mythical Pets
  { id: 'mole', name: 'Mole', trait: 'Every 90 seconds digs for 10 seconds, increasing nearby soil crops\' growth speed by 10%.', tier: 'Mythical', obtainable: true, image: '/pet/Mole.webp' },
  { id: 'praying-mantis', name: 'Praying Mantis', trait: 'Every 80 seconds, it prays for about 10 seconds, granting a ~1.5x mutation chance to crops within a 10-stud radius.', tier: 'Mythical', obtainable: true, image: '/pet/Praying-Mantis.webp' },
  { id: 'red-fox', name: 'Red Fox', trait: 'Every 8 minutes, it attempts to duplicate a seed from another player\'s garden and gives it to its owner.', tier: 'Mythical', obtainable: true, image: '/pet/Red-Fox.webp' },
  { id: 'red-giant-ant', name: 'Red Giant Ant', trait: 'Grants a 5% chance to duplicate harvested crops, with an additional 5% chance for fruit-type crops.', tier: 'Mythical', obtainable: true, image: '/pet/Red-Giant-Ant.webp' },
  { id: 'snail', name: 'Snail', trait: 'Provides an additional 5% chance for a harvested plant to drop its seed, with a lower chance for rarer plants.', tier: 'Mythical', obtainable: true, image: '/pet/Snail.webp' },
  { id: 'squirrel', name: 'Squirrel', trait: 'Grants a 2.5% chance to keep a seed after planting it, with the chance decreasing for rarer crops.', tier: 'Mythical', obtainable: true, image: '/pet/Squirrel.webp' },
  { id: 'bear-bee', name: 'Bear Bee', trait: 'Every 25 minutes, it applies the \'HoneyGlazed\' mutation to a nearby fruit, which adds a 5x value multiplier.', tier: 'Mythical', obtainable: true, image: '/pet/Bear-Bee.webp' },
  { id: 'butterfly', name: 'Butterfly', trait: 'Every 30 minutes, it converts a non-favorited fruit with 5 or more mutations into a \'Rainbow\' fruit.', tier: 'Mythical', obtainable: true, image: '/pet/Butterfly.webp' },
  { id: 'echo-frog', name: 'Echo Frog', trait: 'Approximately every 10 minutes, it causes a random nearby plant\'s growth to advance by 24 hours.', tier: 'Mythical', obtainable: true, image: '/pet/Echo-Frog.webp' },
  { id: 'pack-bee', name: 'Pack Bee', trait: 'Increases the player\'s backpack inventory size by 25, with the bonus increasing as the pet ages.', tier: 'Mythical', obtainable: true, image: '/pet/Pack-Bee.webp' },
  { id: 'mimic-octopus', name: 'Mimic Octopus', trait: 'Every 20 minutes, it mimics the ability of another active pet and performs that action.', tier: 'Mythical', obtainable: true, image: '/pet/Mimic-Octopus.webp' },
  { id: 'chicken-zombie', name: 'Chicken Zombie', trait: 'Every 30 minutes has a 20% chance to apply the \'Zombified\' mutation to a fruit, and passively increases egg hatch speed by 10%.', tier: 'Mythical', obtainable: false, image: '/pet/Chicken-Zombie.webp' },
  { id: 'firefly', name: 'Firefly', trait: 'Approximately every 80 seconds, it has a 3% chance to apply the \'Shocked\' mutation to a nearby crop.', tier: 'Mythical', obtainable: false, image: '/pet/Firefly.webp' },
  { id: 'blood-kiwi', name: 'Blood Kiwi', trait: 'Every minute, it decreases the hatch time of the longest-duration egg by 45 seconds and boosts its hatch speed by 20%.', tier: 'Mythical', obtainable: false, image: '/pet/Blood-Kiwi.webp' },
  { id: 'owl', name: 'Owl', trait: 'Passively boosts the experience gain of all other active pets by approximately 0.20 XP per second.', tier: 'Mythical', obtainable: false, image: '/pet/Owl.webp' },
  { id: 'golden-bee', name: 'Golden Bee', trait: 'Occasionally pollinates fruit and provides a chance for harvested fruit to turn into gold.', tier: 'Mythical', obtainable: false, image: '/pet/Golden-Bee.webp' },
  { id: 'cooked-owl', name: 'Cooked Owl', trait: 'Every 15 minutes, has a 15.35% chance to apply a \'Burnt\' or \'Cooked\' mutation and boosts all active pets\' XP gain by 0.17/s.', tier: 'Mythical', obtainable: false, image: '/pet/Cooked-Owl.webp' },

  // Divine Pets
  { id: 'dragonfly', name: 'Dragonfly', trait: 'Turns one random crop into gold approximately every 5 minutes.', tier: 'Divine', obtainable: true, image: '/pet/Dragonfly.webp' },
  { id: 'night-owl', name: 'Night Owl', trait: 'Passively increases the experience gain of all active pets by over 0.20 XP per second.', tier: 'Divine', obtainable: true, image: '/pet/Night-Owl.webp' },
  { id: 'queen-bee-pet', name: 'Queen Bee (Pet)', trait: 'Every 25 minutes, it pollinates a fruit and fully refreshes the ability cooldown of the pet with the longest remaining cooldown.', tier: 'Divine', obtainable: true, image: '/pet/Queen-Bee-(Pet).webp' },
  { id: 'raccoon', name: 'Raccoon', trait: 'Every 15 minutes, it visits another player\'s plot to duplicate a random crop and brings it back to its owner.', tier: 'Divine', obtainable: true, image: '/pet/Raccoon.webp' },
  { id: 'disco-bee', name: 'Disco Bee', trait: 'Approximately every 15 minutes, it has a 12% chance to apply the \'Disco\' mutation to a nearby fruit.', tier: 'Divine', obtainable: true, image: '/pet/Disco-Bee.webp' },
  { id: 'blood-owl', name: 'Blood Owl', trait: 'Passively increases the experience gain of all active pets by over 0.50 XP per second.', tier: 'Divine', obtainable: false, image: '/pet/Blood-Owl.webp' },

  // Unobtainable/Special Pets
  { id: 'red-dragon', name: 'Red Dragon', trait: 'Occasionally applies the \'Burnt\' mutation to a random nearby fruit.', tier: 'Prismatic', obtainable: false, image: '/pet/Red-Dragon.webp' },
];

export const gears: Gear[] = [
  // Common Gears
  { id: 'watering-can', name: 'Watering Can', description: 'A simple tool for watering plants. Increases crop growth speed slightly.', price: { sheckle: 500 }, tier: 'Common', obtainable: true, image: '/gears/Watering-Can.webp' },
  { id: 'basic-sprinkler', name: 'Basic Sprinkler', description: 'Automatically waters nearby plants. Covers a small area but saves time.', price: { sheckle: 2000 }, tier: 'Common', obtainable: true, image: '/gears/Basic-Sprinkler.webp' },
  { id: 'trowel', name: 'Trowel', description: 'A handy digging tool. Slightly increases seed planting speed.', price: { sheckle: 800 }, tier: 'Common', obtainable: true, image: '/gears/Trowel.webp' },

  // Uncommon Gears
  { id: 'harvest-tool', name: 'Harvest Tool', description: 'Speeds up harvesting of crops. Essential for busy farmers.', price: { sheckle: 5000 }, tier: 'Uncommon', obtainable: true, image: '/gears/Harvest-Tool.webp' },
  { id: 'advanced-sprinkler', name: 'Advanced Sprinkler', description: 'Covers a larger area than basic sprinkler and provides better watering efficiency.', price: { sheckle: 8000 }, tier: 'Uncommon', obtainable: true, image: '/gears/Advanced-Sprinkler.webp' },
  { id: 'cleaning-spray', name: 'Cleaning Spray', description: 'Removes dirt and debris from crops, potentially improving their quality.', price: { sheckle: 3500 }, tier: 'Uncommon', obtainable: true, image: '/gears/Cleaning-Spray.webp' },

  // Rare Gears
  { id: 'honey-sprinkler', name: 'Honey Sprinkler', description: 'Sprays honey essence that attracts beneficial insects and improves crop yields.', price: { honey: 100 }, tier: 'Rare', obtainable: true, image: '/gears/Honey-Sprinkler.webp' },
  { id: 'master-sprinkler', name: 'Master Sprinkler', description: 'The ultimate sprinkler system with maximum coverage and efficiency.', price: { sheckle: 25000 }, tier: 'Rare', obtainable: true, image: '/gears/Master-Sprinkler.webp' },
  { id: 'recall-wrench', name: 'Recall Wrench', description: 'Allows you to relocate planted crops without destroying them.', price: { sheckle: 15000 }, tier: 'Rare', obtainable: true, image: '/gears/Recall-Wrench.webp' },
  { id: 'friendship-pot', name: 'Friendship Pot', description: 'Enhances the effects of friend bonuses when farming with others.', price: { sheckle: 12000 }, tier: 'Rare', obtainable: true, image: '/gears/Friendship-Pot.webp' },

  // Legendary Gears
  { id: 'lightning-rod', name: 'Lightning Rod', description: 'Attracts lightning during storms, potentially giving crops the \'Shocked\' mutation.', price: { sheckle: 50000 }, tier: 'Legendary', obtainable: true, image: '/gears/Lightning-Rod.webp' },
  { id: 'pollen-radar', name: 'Pollen Radar', description: 'Detects and tracks pollination opportunities across your garden.', price: { honey: 500 }, tier: 'Legendary', obtainable: true, image: '/gears/Pollen-Radar.webp' },
  { id: 'nectar-staff', name: 'Nectar Staff', description: 'A mystical staff that enhances flower growth and nectar production.', price: { honey: 750 }, tier: 'Legendary', obtainable: true, image: '/gears/Nectar-Staff.webp' },
  { id: 'reclaimer', name: 'Reclaimer', description: 'Recovers materials from failed crops and experiments.', price: { sheckle: 75000 }, tier: 'Legendary', obtainable: true, image: '/gears/Reclaimer.webp' },

  // Mythical Gears
  { id: 'night-staff', name: 'Night Staff', description: 'Harnesses lunar energy to enhance nighttime crop growth and mutation chances.', price: { lunarPoint: 2500 }, tier: 'Mythical', obtainable: true, image: '/gears/Night-Staff.webp' },
  { id: 'star-caller', name: 'Star Caller', description: 'Calls upon celestial forces to bless crops with rare mutations.', price: { lunarPoint: 5000 }, tier: 'Mythical', obtainable: true, image: '/gears/Star-Caller.webp' },
  { id: 'godly-sprinkler', name: 'Godly Sprinkler', description: 'The most powerful sprinkler system, blessed by divine forces.', price: { other: 'Divine Materials' }, tier: 'Mythical', obtainable: true, image: '/gears/Godly-Sprinkler.webp' },

  // Divine Gears
  { id: 'favorite-tool', name: 'Favorite Tool', description: 'A mysterious tool that adapts to whatever task you need most.', price: { other: 'Special Event' }, tier: 'Divine', obtainable: false, image: '/gears/Favorite-Tool.webp' },

  // Craftable Gears (Special Category)
  { id: 'berry-blusher-sprinkler', name: 'Berry Blusher Sprinkler', description: 'Specialized sprinkler designed to enhance berry crop growth and color.', price: { other: 'Crafting Recipe' }, tier: 'Craftables', obtainable: true, image: '/gears/Berry-Blusher-Sprinkler.webp' },
  { id: 'chocolate-sprinkler', name: 'Chocolate Sprinkler', description: 'Sprays chocolate essence to enhance sweet crop varieties.', price: { other: 'Crafting Recipe' }, tier: 'Craftables', obtainable: true, image: '/gears/Chocolate-Sprinkler.webp' },
  { id: 'flower-froster-sprinkler', name: 'Flower Froster Sprinkler', description: 'Provides cooling mist that benefits flower growth in hot weather.', price: { other: 'Crafting Recipe' }, tier: 'Craftables', obtainable: true, image: '/gears/Flower-Froster-Sprinkler.webp' },
  { id: 'spice-spritzer-sprinkler', name: 'Spice Spritzer Sprinkler', description: 'Adds spicy essence to enhance herb and spice crop growth.', price: { other: 'Crafting Recipe' }, tier: 'Craftables', obtainable: true, image: '/gears/Spice-Spritzer-Sprinkler.webp' },
  { id: 'stalk-sprout-sprinkler', name: 'Stalk Sprout Sprinkler', description: 'Specialized for tall crops like corn and bamboo, promoting vertical growth.', price: { other: 'Crafting Recipe' }, tier: 'Craftables', obtainable: true, image: '/gears/Stalk-Sprout-Sprinkler.webp' },
  { id: 'sweet-soaker-sprinkler', name: 'Sweet Soaker Sprinkler', description: 'Enhances fruit sweetness and overall fruit crop quality.', price: { other: 'Crafting Recipe' }, tier: 'Craftables', obtainable: true, image: '/gears/Sweet-Soaker-Sprinkler.webp' },
  { id: 'tropical-mist-sprinkler', name: 'Tropical Mist Sprinkler', description: 'Creates tropical conditions perfect for exotic fruit growth.', price: { other: 'Crafting Recipe' }, tier: 'Craftables', obtainable: true, image: '/gears/Tropical-Mist-Sprinkler.webp' },
];