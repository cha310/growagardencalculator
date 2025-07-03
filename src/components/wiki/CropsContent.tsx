'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { plants } from '@/data/gameData'
import { OptimizedImage } from '@/components/OptimizedImage'

export const CropsContent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Plant image mapping
  const getPlantImage = (plantId: string) => {
    const plantImages: { [key: string]: string } = {
      // Fruits
      'apple': '/plant/apple.png',
      'avocado': '/plant/avocado.png',
      'banana': '/plant/banana.png',
      'blueberry': '/plant/blueberry.png',
      'bloodbanana': '/plant/blood-banana.png',
      'cacao': '/plant/cacao.png',
      'cantaloupe': '/plant/cantaloupe.png',
      'celestiberry': '/plant/celestiberry.png',
      'cocovine': '/plant/cocovine.png',
      'coconut': '/plant/coconut.png',
      'cranberry': '/plant/cranberry.png',
      'cursedfruit': '/plant/cursed-fruit.png',
      'dragonfruit': '/plant/dragon-fruit.png',
      'durian': '/plant/durian.png',
      'feijoa': '/plant/feijoa.png',
      'grape': '/plant/grape.png',
      'greenapple': '/plant/green-apple.png',
      'hivefruit': '/plant/hive-fruit.png',
      'kiwi': '/plant/kiwi.png',
      'lemon': '/plant/lemon.png',
      'loquat': '/plant/loquat.png',
      'mango': '/plant/mango.png',
      'moonmango': '/plant/moon-mango.png',
      'moonmelon': '/plant/moon-melon.png',
      'nectarine': '/plant/nectarine.png',
      'papaya': '/plant/papaya.png',
      'passionfruit': '/plant/passionfruit.png',
      'peach': '/plant/peach.png',
      'pear': '/plant/pear.png',
      'pineapple': '/plant/pineapple.png',
      'pricklypear': '/plant/prickly-pear.png',
      'raspberry': '/plant/raspberry.png',
      'soulfruit': '/plant/soul-fruit.png',
      'starfruit': '/plant/starfruit.png',
      'strawberry': '/plant/strawberry.png',
      'sugarapple': '/plant/sugar-apple.png',
      'watermelon': '/plant/watermelon.png',
      
      // Vegetables
      'carrot': '/plant/carrot.png',
      'cauliflower': '/plant/cauliflower.png',
      'chocolatecarrot': '/plant/chocolate-carrot.png',
      'corn': '/plant/corn.png',
      'dragonpepper': '/plant/dragon-pepper.png',
      'eggplant': '/plant/eggplant.png',
      'pepper': '/plant/pepper.png',
      'bellpepper': '/plant/bell-pepper.png',
      'pumpkin': '/plant/pumpkin.png',
      'tomato': '/plant/tomato.png',
      'violetcorn': '/plant/violet-corn.png',
      'wildcarrot': '/plant/wild-carrot.png',
      
      // Flowers
      'beebalm': '/plant/bee-balm.png',
      'candyblossom': '/plant/candy-blossom.png',
      'candysunflower': '/plant/candy-sunflower.png',
      'cherryblossom': '/plant/cherry-blossom.png',
      'crocus': '/plant/crocus.png',
      'daffodil': '/plant/daffodil.png',
      'dandelion': '/plant/dandelion.png',
      'emberlily': '/plant/ember-lily.png',
      'foxglove': '/plant/foxglove.png',
      'honeysuckle': '/plant/honeysuckle.png',
      'lavender': '/plant/lavender.png',
      'lilac': '/plant/lilac.png',
      'lotus': '/plant/lotus.png',
      'lumira': '/plant/lumira.png',
      'manukaflower': '/plant/manuka-flower.png',
      'moonblossom': '/plant/moon-blossom.png',
      'moonflower': '/plant/moonflower.png',
      'moonglow': '/plant/moonglow.png',
      'orangetulip': '/plant/orange-tulip.png',
      'parasolflower': '/plant/parasol-flower.png',
      'pinklily': '/plant/pink-lily.png',
      'purpledahlia': '/plant/purple-dahlia.png',
      'rose': '/plant/rose.png',
      'rosydelight': '/plant/rosy-delight.png',
      'suncoil': '/plant/suncoil.png',
      'sunflower': '/plant/sunflower.png',
      
      // Plants
      'bamboo': '/plant/bamboo.png',
      'beanstalk': '/plant/beanstalk.png',
      'bendboo': '/plant/bendboo.png',
      'cactus': '/plant/cactus.png',
      'elephantears': '/plant/elephant-ears.png',
      'nectarshade': '/plant/nectarshade.png',
      'nectarthorn': '/plant/nectar-thorn.png',
      'nightshade': '/plant/nightshade.png',
      'succulent': '/plant/succulent.png',
      'venusflytrap': '/plant/venus-fly-trap.png',
      
      // Mushrooms
      'glowshroom': '/plant/glowshroom.png',
      'mushroom': '/plant/mushroom.png',
      
      // Special items
      'easteregg': '/plant/easter-egg.png',
      'redlollipop': '/plant/red-lollipop.png',
      
      // Herbs
      'mint': '/plant/mint.png',
      
      // Special mappings
      'purplecabbage': '/plant/Cabbageee.webp',
      'lime': '/plant/Lime_possible_appearance.webp'
    }
    
    return plantImages[plantId] || '/plant/currency-0.png'
  }

  // Convert gameData plants to crops format
  const crops = plants.map(plant => ({
    name: plant.name,
    image: getPlantImage(plant.id),
    price: { 
      sheckle: Math.round(plant.baseValue * 0.5),
      robux: Math.round(plant.baseValue * 0.02)
    },
    value: plant.baseValue,
    weight: Math.round(plant.baseValue * 0.001 * 100) / 100,
    tier: plant.category,
    harvest: 'Multi',
    obtainable: plant.obtainable === false ? 'NO' : 'YES',
    category: plant.shop || "Tom's Shop"
  }))

  const categories = [
    'All',
    "Tom's Shop", 
    'Queen Bee Shop', 
    'Twilight Shop', 
    'Blood Moon Shop', 
    'Crafters Seed', 
    'Summer Seed', 
    'Flower Seed', 
    'Exotic Seed', 
    'Normal Seed', 
    'Lunar Glow Event', 
    'Angry Plant Event', 
    'Easter Event 2025', 
    "Bizzy Bear's Crafting Station", 
    'Uncategorized'
  ]

  const filteredCrops = selectedCategory === 'All' 
    ? crops 
    : crops.filter(crop => crop.category === selectedCategory)

  const getTierColor = (tier: string) => {
    const colors = {
      'Common': '#d1d5db',
      'Uncommon': '#4ade80',
      'Rare': '#60a5fa',
      'Legendary': '#c084fc',
      'Mythical': '#f472b6',
      'Divine': '#facc15',
      'Prismatic': '#facc15' // fallback for prismatic
    }
    return colors[tier as keyof typeof colors] || '#d1d5db'
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <>
      {/* What Are Crops Section */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          What Are Crops in Grow a Garden?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '12px' }}>
            In Grow a Garden, crops are the plants you grow from seeds in your personal garden plot. These crops range from classic veggies like carrots and pumpkins to exotic fruits like Moon Mango and Hive Fruit, each with unique appearances, growth times, and sell values.
          </p>
          <p style={{ marginBottom: '12px' }}>
            You plant seeds, wait for them to grow (in real-time hours), and then harvest the crops to sell for Sheckles, the in-game currency, at Steven's Stand. Some crops are single-harvest, meaning you pick them once and they're gone, while others are multi-harvest, regrowing fruits or veggies every few minutes for continuous profits. Pretty sweet, right?
          </p>
          <p>
            Crops are the main way to earn cash in Grow a Garden, and they come in different rarities—<span style={{ color: '#d1d5db' }}>Common</span>, <span style={{ color: '#4ade80' }}>Uncommon</span>, <span style={{ color: '#60a5fa' }}>Rare</span>, <span style={{ color: '#c084fc' }}>Legendary</span>, <span style={{ color: '#f472b6' }}>Mythical</span>, <span style={{ color: '#facc15' }}>Divine</span>, and <span style={{ background: 'linear-gradient(to right, #f87171, #facc15, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Prismatic</span>. The rarer the crop, the longer it takes to grow, but the bigger the payout!
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ 
          fontSize: '12px', 
          fontWeight: 'bold', 
          color: '#fffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          All Crops in Grow a Garden
        </h3>
        <div style={{ position: 'relative' }}>
          <div style={{ overflowX: 'auto' }}>
            <div style={{ 
              display: 'flex', 
              gap: '4px', 
              paddingBottom: '4px', 
              minWidth: 'max-content', 
              borderBottom: '2px solid #4b5563'
            }}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '12px 12px',
                    fontSize: '10px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    position: 'relative',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Press Start 2P', cursive",
                    color: selectedCategory === category ? '#fbbf24' : '#9ca3af',
                    fontWeight: selectedCategory === category ? '600' : 'normal'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.color = '#d1d5db'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.color = '#9ca3af'
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Crops Table */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px 16px 16px 16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        {/* Desktop Table */}
        <div>
          <table style={{ width: '100%', textAlign: 'left', tableLayout: 'fixed' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #666d77' }}>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '10px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Image</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px',
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Name</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Price (Sheckle / Robux)</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Min Value / Weight(kg)</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Tier</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Harvest</th>
                <th style={{ 
                  padding: '4px', 
                  color: '#fcdf56', 
                  fontWeight: '600', 
                  fontSize: '8px', 
                  textAlign: 'center',
                  fontFamily: "'Press Start 2P', cursive"
                }}>Obtainable</th>
              </tr>
            </thead>
            <tbody>
              {filteredCrops.map((crop, index) => (
                <tr key={index} style={{ 
                  borderBottom: '1px solid #666d77',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(75, 85, 99, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}>
                  <td style={{ padding: '4px', textAlign: 'center' }}>
                    <OptimizedImage 
                      src={crop.image} 
                      alt={crop.name} 
                      width={48}
                      height={48}
                      style={{ 
                        width: '32px', 
                        height: '32px', 
                        objectFit: 'contain', 
                        borderRadius: '4px', 
                        margin: '0 auto',
                        imageRendering: 'pixelated'
                      }}
                    />
                  </td>
                  <td style={{ 
                    padding: '4px', 
                    color: 'white', 
                    fontWeight: '600', 
                    fontSize: '8px',
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{crop.name}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{formatNumber(crop.price.sheckle)} / {crop.price.robux}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{formatNumber(crop.value)} / {crop.weight}</td>
                  <td style={{ 
                    padding: '4px', 
                    fontWeight: '600', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive",
                    color: getTierColor(crop.tier)
                  }}>{crop.tier}</td>
                  <td style={{ 
                    padding: '4px', 
                    color: '#d1d5db', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{crop.harvest === 'Single' ? '-' : 'Multi'}</td>
                  <td style={{ 
                    padding: '4px', 
                    fontWeight: '600', 
                    fontSize: '8px', 
                    textAlign: 'center',
                    color: crop.obtainable === 'YES' ? '#4ade80' : '#f87171',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>{crop.obtainable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards - Hidden for now, showing table instead */}
        <div style={{ display: 'none' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '16px' 
          }}>
            {filteredCrops.map((crop, index) => (
              <div key={index} style={{ 
                backgroundColor: '#4b5563', 
                borderRadius: '8px', 
                padding: '16px', 
                border: '2px solid #6b7280'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <OptimizedImage 
                    src={crop.image} 
                    alt={crop.name} 
                    width={64}
                    height={64}
                    style={{ 
                      width: '64px', 
                      height: '64px', 
                      objectFit: 'contain', 
                      borderRadius: '8px', 
                      marginRight: '16px',
                      imageRendering: 'pixelated'
                    }}
                  />
                  <div>
                    <h3 style={{ 
                      color: 'white', 
                      fontWeight: '600', 
                      fontSize: '16px',
                      fontFamily: "'Press Start 2P', cursive",
                      marginBottom: '4px'
                    }}>{crop.name}</h3>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '12px',
                      color: getTierColor(crop.tier),
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{crop.tier}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Price:</span>
                    <span style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{formatNumber(crop.price.sheckle)} / {crop.price.robux}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Value/Weight:</span>
                    <span style={{ 
                      color: '#d1d5db',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{formatNumber(crop.value)} / {crop.weight}kg</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ 
                      color: '#9ca3af',
                      fontSize: '12px',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>Obtainable:</span>
                    <span style={{ 
                      fontWeight: '600',
                      fontSize: '12px',
                      color: crop.obtainable === 'YES' ? '#4ade80' : '#f87171',
                      fontFamily: "'Press Start 2P', cursive"
                    }}>{crop.obtainable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Crops Make Grow a Garden So Fun */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px', 
        marginBottom: '16px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Why Crops Make Grow a Garden So Fun?
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '16px' }}>
            Crops aren't just about making money—they're about creativity and community! Show off your garden's unique layout to friends, trade rare mutated crops, or compete to grow the most epic plants.
          </p>
          <p style={{ marginBottom: '16px' }}>
            With abundant crops to discover (and counting!), from blocky Mushrooms to towering Beanstalks, there's always something new to plant. Plus, the thrill of seeing a crop mutate into a sparkly, billion-Sheckle masterpiece? Unbeatable.
          </p>
          <p style={{ 
            color: '#f5d954', 
            fontWeight: 'bold' 
          }}>
            So, what are you waiting for? Grab some seeds, plant your plot, and start growing your way to gardening glory in Grow a Garden!
          </p>
        </div>
      </div>

      {/* Back to Calculator */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          gap: '16px', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
            <Link 
              href="/" 
              style={{
                backgroundColor: '#22c55e',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontSize: '10px',
                fontFamily: "'Press Start 2P', cursive",
                border: 'none',
                textAlign: 'center',
                display: 'block',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#16a34a'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#22c55e'
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              ← Calculator
            </Link>
            <Link 
              href="/wiki" 
              style={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '12px',
                fontWeight: 'bold',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                fontSize: '10px',
                fontFamily: "'Press Start 2P', cursive",
                border: 'none',
                textAlign: 'center',
                display: 'block',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6'
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
            >
              ← Back to Wiki
            </Link>
        </div>
      </div>
    </>
  )
}