import { Plant, GrowthMutation, TemperatureMutation, EnvironmentMutation } from '../types';

export const plants: Plant[] = [
  // Common Plants (价值 $15-$300)
  { id: 'strawberry', name: 'Strawberry', baseValue: 15, category: 'Common', type: 'Fruits' },
  { id: 'blueberry', name: 'Blueberry', baseValue: 20, category: 'Common', type: 'Fruits' },
  { id: 'carrot', name: 'Carrot', baseValue: 20, category: 'Common', type: 'Vegetables' },
  { id: 'tomato', name: 'Tomato', baseValue: 30, category: 'Common', type: 'Vegetables' },
  { id: 'cauliflower', name: 'Cauliflower', baseValue: 40, category: 'Common', type: 'Vegetables' },
  { id: 'corn', name: 'Corn', baseValue: 40, category: 'Common', type: 'Vegetables' },
  { id: 'raspberry', name: 'Raspberry', baseValue: 100, category: 'Common', type: 'Fruits' },
  { id: 'apple', name: 'Apple', baseValue: 275, category: 'Common', type: 'Fruits' },
  { id: 'greenapple', name: 'Green Apple', baseValue: 300, category: 'Common', type: 'Fruits' },
  { id: 'glowshroom', name: 'Glowshroom', baseValue: 300, category: 'Common', type: 'Mushrooms' },
  { id: 'peach', name: 'Peach', baseValue: 300, category: 'Common', type: 'Fruits' },
  { id: 'lemon', name: 'Lemon', baseValue: 350, category: 'Common', type: 'Fruits' },
  { id: 'purplecabbage', name: 'Purple Cabbage', baseValue: 500, category: 'Common', type: 'Vegetables' },
  
  // Uncommon Plants (价值 $350-$3,550)
  { id: 'avocado', name: 'Avocado', baseValue: 350, category: 'Uncommon', type: 'Fruits' },
  { id: 'coconut', name: 'Coconut', baseValue: 400, category: 'Uncommon', type: 'Fruits' },
  { id: 'cherryblossom', name: 'Cherry Blossom', baseValue: 500, category: 'Uncommon', type: 'Flowers' },
  { id: 'orangetulip', name: 'Orange Tulip', baseValue: 850, category: 'Uncommon', type: 'Flowers' },
  { id: 'lime', name: 'Lime', baseValue: 1000, category: 'Uncommon', type: 'Fruits' },
  { id: 'daffodil', name: 'Daffodil', baseValue: 1000, category: 'Uncommon', type: 'Flowers' },
  { id: 'papaya', name: 'Papaya', baseValue: 1000, category: 'Uncommon', type: 'Fruits' },
  { id: 'banana', name: 'Banana', baseValue: 1750, category: 'Uncommon', type: 'Fruits' },
  { id: 'pineapple', name: 'Pineapple', baseValue: 2000, category: 'Uncommon', type: 'Fruits' },
  { id: 'easteregg', name: 'Easter Egg', baseValue: 2500, category: 'Uncommon', type: 'Special' },
  { id: 'kiwi', name: 'Kiwi', baseValue: 2750, category: 'Uncommon', type: 'Fruits' },
  { id: 'watermelon', name: 'Watermelon', baseValue: 3000, category: 'Uncommon', type: 'Fruits' },
  { id: 'cactus', name: 'Cactus', baseValue: 3400, category: 'Uncommon', type: 'Plants' },
  { id: 'pumpkin', name: 'Pumpkin', baseValue: 3400, category: 'Uncommon', type: 'Vegetables' },
  { id: 'nightshade', name: 'Nightshade', baseValue: 3500, category: 'Uncommon', type: 'Plants' },
  { id: 'cranberry', name: 'Cranberry', baseValue: 3500, category: 'Uncommon', type: 'Fruits' },
  { id: 'passionfruit', name: 'Passion Fruit', baseValue: 3550, category: 'Uncommon', type: 'Fruits' },
  
  // Rare Plants (价值 $4,000-$18,000)
  { id: 'bamboo', name: 'Bamboo', baseValue: 4000, category: 'Rare', type: 'Plants' },
  { id: 'dragonfruit', name: 'Dragon Fruit', baseValue: 4750, category: 'Rare', type: 'Fruits' },
  { id: 'rose', name: 'Rose', baseValue: 5000, category: 'Rare', type: 'Flowers' },
  { id: 'mint', name: 'Mint', baseValue: 5250, category: 'Rare', type: 'Herbs' },
  { id: 'bloodbanana', name: 'Blood Banana', baseValue: 6000, category: 'Rare', type: 'Fruits' },
  { id: 'mango', name: 'Mango', baseValue: 6500, category: 'Rare', type: 'Fruits' },
  { id: 'pricklypear', name: 'Prickly Pear', baseValue: 7000, category: 'Rare', type: 'Fruits' },
  { id: 'durian', name: 'Durian', baseValue: 7500, category: 'Rare', type: 'Fruits' },
  { id: 'soulfruit', name: 'Soul Fruit', baseValue: 7750, category: 'Rare', type: 'Fruits' },
  { id: 'grape', name: 'Grape', baseValue: 7850, category: 'Rare', type: 'Fruits' },
  { id: 'pepper', name: 'Pepper', baseValue: 8000, category: 'Rare', type: 'Vegetables' },
  { id: 'loquat', name: 'Loquat', baseValue: 8000, category: 'Rare', type: 'Fruits' },
  { id: 'moonflower', name: 'Moon Flower', baseValue: 9500, category: 'Rare', type: 'Flowers' },
  { id: 'celestiberry', name: 'Celestiberry', baseValue: 10000, category: 'Rare', type: 'Fruits' },
  { id: 'chocolatecarrot', name: 'Chocolate Carrot', baseValue: 11000, category: 'Rare', type: 'Vegetables' },
  { id: 'cacao', name: 'Cacao', baseValue: 12000, category: 'Rare', type: 'Fruits' },
  { id: 'eggplant', name: 'Eggplant', baseValue: 12000, category: 'Rare', type: 'Vegetables' },
  { id: 'feijoa', name: 'Feijoa', baseValue: 13000, category: 'Rare', type: 'Fruits' },
  { id: 'starfruit', name: 'Star Fruit', baseValue: 15000, category: 'Rare', type: 'Fruits' },
  { id: 'moonmelon', name: 'Moon Melon', baseValue: 18000, category: 'Rare', type: 'Fruits' },
  
  // Epic Plants (价值 $18,000-$88,888)
  { id: 'beebalm', name: 'Bee Balm', baseValue: 18000, category: 'Epic', type: 'Flowers' },
  { id: 'foxglove', name: 'Foxglove', baseValue: 20000, category: 'Epic', type: 'Flowers' },
  { id: 'pear', name: 'Pear', baseValue: 20000, category: 'Epic', type: 'Fruits' },
  { id: 'lavender', name: 'Lavender', baseValue: 25000, category: 'Epic', type: 'Flowers' },
  { id: 'wildcarrot', name: 'Wild Carrot', baseValue: 25000, category: 'Epic', type: 'Vegetables' },
  { id: 'manukaflower', name: 'Manuka Flower', baseValue: 25000, category: 'Epic', type: 'Flowers' },
  { id: 'succulent', name: 'Succulent', baseValue: 25000, category: 'Epic', type: 'Plants' },
  { id: 'moonglow', name: 'Moonglow', baseValue: 25000, category: 'Epic', type: 'Flowers' },
  { id: 'cursedfruit', name: 'Cursed Fruit', baseValue: 25750, category: 'Epic', type: 'Fruits' },
  { id: 'beanstalk', name: 'Beanstalk', baseValue: 28000, category: 'Epic', type: 'Plants' },
  { id: 'crocus', name: 'Crocus', baseValue: 30000, category: 'Epic', type: 'Flowers' },
  { id: 'cantaloupe', name: 'Cantaloupe', baseValue: 34000, category: 'Epic', type: 'Fruits' },
  { id: 'lilac', name: 'Lilac', baseValue: 35000, category: 'Epic', type: 'Flowers' },
  { id: 'lotus', name: 'Lotus', baseValue: 35000, category: 'Epic', type: 'Flowers' },
  { id: 'nectarthorn', name: 'Nectar Thorn', baseValue: 44444, category: 'Epic', type: 'Plants' },
  { id: 'nectarine', name: 'Nectarine', baseValue: 48000, category: 'Epic', type: 'Fruits' },
  { id: 'sugarapple', name: 'Sugar Apple', baseValue: 48000, category: 'Epic', type: 'Fruits' },
  { id: 'redlollipop', name: 'Red Lollipop', baseValue: 50000, category: 'Epic', type: 'Special' },
  { id: 'dandelion', name: 'Dandelion', baseValue: 50000, category: 'Epic', type: 'Flowers' },
  { id: 'moonmango', name: 'Moon Mango', baseValue: 50000, category: 'Epic', type: 'Fruits' },
  { id: 'nectarshade', name: 'Nectar Shade', baseValue: 50000, category: 'Epic', type: 'Plants' },
  { id: 'violetcorn', name: 'Violet Corn', baseValue: 50000, category: 'Epic', type: 'Vegetables' },
  { id: 'hivefruit', name: 'Hive Fruit', baseValue: 62000, category: 'Epic', type: 'Fruits' },
  { id: 'pinklily', name: 'Pink Lily', baseValue: 65000, category: 'Epic', type: 'Flowers' },
  { id: 'cocovine', name: 'Cocovine', baseValue: 66666, category: 'Epic', type: 'Fruits' },
  { id: 'emberlily', name: 'Ember Lily', baseValue: 66666, category: 'Epic', type: 'Flowers' },
  { id: 'moonblossom', name: 'Moon Blossom', baseValue: 66666, category: 'Epic', type: 'Flowers' },
  { id: 'rosydelight', name: 'Rosy Delight', baseValue: 69000, category: 'Epic', type: 'Flowers' },
  { id: 'purpledahlia', name: 'Purple Dahlia', baseValue: 75000, category: 'Epic', type: 'Flowers' },
  { id: 'elephantears', name: 'Elephant Ears', baseValue: 77000, category: 'Epic', type: 'Plants' },
  { id: 'candysunflower', name: 'Candy Sunflower', baseValue: 80000, category: 'Epic', type: 'Flowers' },
  { id: 'suncoil', name: 'Suncoil', baseValue: 80000, category: 'Epic', type: 'Flowers' },
  { id: 'lumira', name: 'Lumira', baseValue: 85000, category: 'Epic', type: 'Flowers' },
  { id: 'dragonpepper', name: 'Dragon Pepper', baseValue: 88888, category: 'Epic', type: 'Vegetables' },
  
  // Legendary Plants (价值 $100,000-$500,000)
  { id: 'candyblossom', name: 'Candy Blossom', baseValue: 100000, category: 'Legendary', type: 'Flowers' },
  { id: 'honeysuckle', name: 'Honeysuckle', baseValue: 100000, category: 'Legendary', type: 'Flowers' },
  { id: 'mushroom', name: 'Mushroom', baseValue: 151000, category: 'Legendary', type: 'Mushrooms' },
  { id: 'bendboo', name: 'Bendboo', baseValue: 155000, category: 'Legendary', type: 'Plants' },
  { id: 'sunflower', name: 'Sunflower', baseValue: 160000, category: 'Legendary', type: 'Flowers' },
  { id: 'parasolflower', name: 'Parasol Flower', baseValue: 200000, category: 'Legendary', type: 'Flowers' },
  { id: 'venusflytrap', name: 'Venus Flytrap', baseValue: 85000, category: 'Legendary', type: 'Plants' },
];

export const categories = ['All', 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];

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