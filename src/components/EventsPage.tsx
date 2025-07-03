'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '@/components/OptimizedImage';

interface Event {
  id: string;
  title: string;
  date: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  description: string;
  details: {
    duration?: string;
    rewards?: string[];
    features?: string[];
    crops?: string[];
    requirements?: string;
  };
  image?: string;
}

const events: Event[] = [
  {
    id: 'summer-harvest-2025',
    title: 'Summer Harvest Event',
    date: 'June 21 - July 5, 2025',
    status: 'completed',
    description: 'The fifth event featuring hourly harvest challenges where players submit summer crops to earn Harvest Points. Brought back rewards from previous events.',
    details: {
      duration: '14 days',
      rewards: ['Summer Seed Pack', 'Reclaimer', 'Moon Cat', 'Ember Lily Seed', 'Past Event Items', 'New Summer Pets', 'Weather Mutations'],
      features: ['Hourly harvest challenges', 'Georgia NPC cart system', 'Harvest Points currency', 'Past event rewards return', '16 new summer crops', 'New weather events', 'Permanent crafting system'],
      crops: ['Feijoa', 'Loquat', 'Prickly Pear', 'Bell Pepper', 'Kiwi', 'Avocado', 'Green Apple', 'Cauliflower', 'Elephant Ears', 'Rosy Delight'],
      requirements: 'Submit summer crops every hour during 10-minute harvest windows to earn Harvest Points'
    },
    image: '/events/Summer_Harvest_Almost_Filled.webp'
  },
  {
    id: 'easter-2025',
    title: 'Easter Event 2025',
    date: 'April 19 - April 27, 2025',
    status: 'completed',
    description: 'The first event added to Grow a Garden! A seasonal limited-time event packed with colorful rewards and unique gameplay features.',
    details: {
      duration: '8 days',
      rewards: ['Chocolate Carrot', 'Red Lollipop', 'Candy Sunflower', 'Easter Egg', 'Chocolate Sprinkler', 'Candy Blossom'],
      features: ['Easter Shop with rotating inventory', 'Poppy\'s Golden Request quest', 'Chocolate mutation', 'Shop restocks every 60 minutes'],
      crops: ['Chocolate Carrot', 'Red Lollipop', 'Candy Sunflower', 'Easter Egg', 'Candy Blossom'],
      requirements: 'Complete Poppy\'s Golden Request: Deliver 30 KG worth of Golden Fruits'
    },
    image: '/events/Easter_shop.webp'
  },
  {
    id: 'bizzy-bee-2025',
    title: 'Bizzy Bee Event',
    date: 'May 31 - June 21, 2025',
    status: 'completed',
    description: 'The fourth event featuring Queen Bee NPC, honey collection system, bee swarm events, and Bizzy Bear crafting. Players collected pollinated plants for Honey currency.',
    details: {
      duration: '21 days',
      rewards: ['Flower Seed Pack', 'Hive Fruit Seed', 'Honey Sprinkler', 'Bee Egg', 'Nectar Staff', 'Pollen Radar', 'Crafting Sprinklers'],
      features: ['Queen Bee & Onett NPCs', 'Honey collection system', 'Hourly bee swarm events', 'Working bee swarm (1/3 chance)', 'Bizzy Bear crafting system', 'Pollinated plant mutations'],
      crops: ['Lavender', 'Nectarshade', 'Nectarine', 'Hive Fruit', 'Pollinated crops'],
      requirements: 'Deposit 10kg+ pollinated plants into Honey Compressor for Honey currency'
    },
    image: '/events/Bizzy_Bee_Event.webp'
  },
  {
    id: 'angry-plant-2025',
    title: 'Angry Plant Event',
    date: 'April 27 - May 9, 2025',
    status: 'completed',
    description: 'The second event featuring Jim, an animated Venus Flytrap NPC. Players completed quests by bringing specific crops to earn seed packs.',
    details: {
      duration: '12 days',
      rewards: ['Basic Seed Pack (per quest)', 'Premium Seed Pack (completion)', 'Quest Progress Tracking'],
      features: ['Jim the Venus Flytrap NPC', '50 quest progression system', 'Specific crop and weight requirements', 'Mutation-based challenges', 'Interactive dialogue options'],
      crops: ['Tomato', 'Strawberry', 'Carrot', 'Mushroom', 'Various mutated crops'],
      requirements: 'Complete 50 quests by bringing Jim specific crops with exact weight and mutation requirements'
    },
    image: '/events/Angry_plant.webp'
  },
  {
    id: 'lunar-glow-2024',
    title: 'Lunar Glow Event',
    date: 'May 10 - May 31, 2025',
    status: 'completed',
    description: 'A limited-time event featuring the Wise Old Owl NPC, night cycles, and special mutations. Players harvested Moonlit and Bloodlit crops to earn Lunar Points.',
    details: {
      duration: '21 days',
      rewards: ['Hedgehog', 'Night Staff', 'Kiwi Pet', 'Owl Pet', 'Night Eggs', 'Night Seed Packs'],
      features: ['Wise Old Owl NPC', 'Lunar Points system', 'Night and Blood Moon cycles', 'Moonlit and Bloodlit mutations', 'Meteor Shower events'],
      crops: ['Moonlit crops', 'Bloodlit crops', 'Celestial mutation crops'],
      requirements: 'Harvest Moonlit/Bloodlit crops and exchange with Wise Old Owl for Lunar Points'
    },
    image: '/events/Lunar_Event_Reward.webp'
  },
  {
    id: 'blood-moon-2025',
    title: 'Blood Moon Event',
    date: 'May 17 - May 31, 2025',
    status: 'completed',
    description: 'Part of the Lunar Glow Event featuring the exclusive Blood Moon Shop and special Bloodlit mutations.',
    details: {
      duration: '14 days',
      rewards: ['Blood Banana', 'Moon Melon', 'Blood Kiwi', 'Blood Hedgehog', 'Blood Owl', 'Night Egg', 'Star Caller'],
      features: ['Blood Moon Shop dug from ground', 'Bloodlit mutations (4x value)', 'Meteor Shower events', '33% spawn chance', 'Extended 15-minute duration'],
      crops: ['Blood Banana', 'Moon Melon', 'Bloodlit crops'],
      requirements: 'Available during Blood Moon phases (33% chance every 3 nights)'
    },
    image: '/events/Blood_Shop.webp'
  }
];

export const EventsPage: React.FC = () => {

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#6b7280'; // gray-500
      case 'ongoing': return '#10b981'; // emerald-500  
      case 'upcoming': return '#3b82f6'; // blue-500
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✓';
      case 'ongoing': return '●';
      case 'upcoming': return '◐';
      default: return '○';
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#f5d954', 
          marginBottom: '24px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Grow A Garden Events
        </h1>
        <p style={{ 
          fontSize: '10px', 
          color: '#d1d5db', 
          maxWidth: '768px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Stay updated with all Grow a Garden events, including seasonal celebrations, special rewards, and limited-time content. Discover event timelines, exclusive crops, and unique features!
        </p>
      </div>

      {/* About Events */}
      <div style={{ 
        backgroundColor: '#1f2a37', 
        border: '0.5px solid #4c555f', 
        borderRadius: '12px', 
        padding: '16px', 
        marginBottom: '24px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
      }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '24px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          About Grow a Garden Events
        </h2>
        <div style={{ 
          color: '#d1d5db', 
          fontSize: '10px', 
          lineHeight: '1.6', 
          fontFamily: "'Press Start 2P', cursive"
        }}>
          <p style={{ marginBottom: '4px' }}>
            Grow a Garden events are special limited-time occasions that bring unique content, exclusive crops, and special rewards to the game. These events typically coincide with real-world holidays, seasons, or special celebrations, offering players fresh gameplay experiences and rare collectibles.
          </p>
          <p>
            During events, players can access exclusive shops, participate in special activities, obtain rare mutations, and grow crops that are only available during the event period. Events often feature themed decorations, unique pets, and special game mechanics that enhance the overall experience.
          </p>
        </div>
      </div>

      {/* Event Timeline */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Grow a Garden Event Timeline 2025
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {events.map((event, index) => {
            const getEventPath = (eventId: string) => {
              switch (eventId) {
                case 'summer-harvest-2025': return '/grow-garden-summer-harvest';
                case 'easter-2025': return '/grow-garden-Easter-Event-2025';
                case 'bizzy-bee-2025': return '/grow-garden-Bizzy-Bee-Event';
                case 'lunar-glow-2024': return '/grow-garden-Lunar-Glow-Event';
                case 'blood-moon-2025': return '/grow-garden-Blood-Moon-Event';
                case 'angry-plant-2025': return '/grow-garden-Angry-Plant-Event';
                default: return '/grow-a-garden-events';
              }
            };

            return (
              <Link 
                key={event.id}
                href={getEventPath(event.id)}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ 
                  backgroundColor: '#374151', 
                  border: '3px solid #4b5563', 
                  borderRadius: '12px', 
                  padding: '24px', 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#fbbf24'
                  e.currentTarget.style.backgroundColor = '#4b5563'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#4b5563'
                  e.currentTarget.style.backgroundColor = '#374151'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ flexShrink: 0 }}>
                        <OptimizedImage 
                          src={event.image || '/events/growagardencalculator.png'} 
                          alt={event.title}
                          width={160}
                          height={160}
                          
                        />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                          <h3 style={{ 
                            fontSize: '18px', 
                            fontWeight: 'bold', 
                            color: 'white',
                            fontFamily: "'Press Start 2P', cursive"
                          }}>
                            {event.title}
                          </h3>
                          <span style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            padding: '4px 12px', 
                            borderRadius: '20px', 
                            fontSize: '10px', 
                            fontWeight: '600',
                            backgroundColor: getStatusColor(event.status),
                            color: 'white',
                            fontFamily: "'Press Start 2P', cursive"
                          }}>
                            <span style={{ marginRight: '4px' }}>{getStatusIcon(event.status)}</span>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </span>
                        </div>
                        <p style={{ 
                          color: '#9ca3af', 
                          fontSize: '12px', 
                          marginBottom: '8px',
                          fontFamily: "'Press Start 2P', cursive"
                        }}>
                          {event.date}
                        </p>
                        <p style={{ 
                          color: '#d1d5db', 
                          fontSize: '12px',
                          fontFamily: "'Press Start 2P', cursive",
                          lineHeight: '1.4'
                        }}>
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div style={{ flexShrink: 0 }}>
                      <svg style={{ width: '24px', height: '24px', color: '#fbbf24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Current Events */}
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '16px', 
          fontWeight: 'bold', 
          color: '#ffffff', 
          marginBottom: '8px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Current & Upcoming Events
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '24px' 
        }}>
          {events.filter(event => event.status !== 'completed').map((event) => {
            const getEventPath = (eventId: string) => {
              switch (eventId) {
                case 'summer-harvest-2025': return '/grow-garden-summer-harvest';
                case 'easter-2025': return '/grow-garden-Easter-Event-2025';
                case 'bizzy-bee-2025': return '/grow-garden-Bizzy-Bee-Event';
                case 'lunar-glow-2024': return '/grow-garden-Lunar-Glow-Event';
                case 'blood-moon-2025': return '/grow-garden-Blood-Moon-Event';
                case 'angry-plant-2025': return '/grow-garden-Angry-Plant-Event';
                default: return '/grow-a-garden-events';
              }
            };

            return (
              <div key={event.id} style={{ 
                backgroundColor: '#374151', 
                border: '3px solid #4b5563', 
                borderRadius: '12px', 
                padding: '24px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fbbf24'
                e.currentTarget.style.backgroundColor = '#4b5563'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#4b5563'
                e.currentTarget.style.backgroundColor = '#374151'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '10px', 
                    fontWeight: '600',
                    backgroundColor: getStatusColor(event.status),
                    color: 'white',
                    fontFamily: "'Press Start 2P', cursive"
                  }}>
                    <span style={{ marginRight: '4px' }}>{getStatusIcon(event.status)}</span>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                  <OptimizedImage 
                    src={event.image || '/events/growagardencalculator.png'} 
                    alt={event.title}
                    width={48}
                    height={48}
                    
                  />
                </div>
                <h3 style={{ 
                  fontSize: '16px', 
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '8px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  {event.title}
                </h3>
                <p style={{ 
                  color: '#9ca3af', 
                  fontSize: '12px', 
                  marginBottom: '12px',
                  fontFamily: "'Press Start 2P', cursive"
                }}>
                  {event.date}
                </p>
                <p style={{ 
                  color: '#d1d5db', 
                  fontSize: '12px', 
                  marginBottom: '16px',
                  fontFamily: "'Press Start 2P', cursive",
                  lineHeight: '1.4'
                }}>
                  {event.description}
                </p>
                <Link
                  href={getEventPath(event.id)}
                  style={{
                    width: '100%',
                    backgroundColor: '#fbbf24',
                    color: '#000000',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    transition: 'all 0.2s ease',
                    fontFamily: "'Press Start 2P', cursive",
                    border: '2px solid #fbbf24'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f59e0b'
                    e.currentTarget.style.borderColor = '#f59e0b'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fbbf24'
                    e.currentTarget.style.borderColor = '#fbbf24'
                  }}
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Information */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
        {/* Event Types */}
        <div style={{ 
          backgroundColor: '#1f2a37', 
          border: '0.5px solid #4c555f', 
          borderRadius: '12px', 
          padding: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            marginBottom: '24px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Types of Events
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            <div>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#f5d954', 
                marginBottom: '12px',
                fontFamily: "'Press Start 2P', cursive"
              }}>
                Seasonal Events
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#fbbf24', marginRight: '8px', marginTop: '4px' }}>•</span>
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: '1.4'
                  }}>
                    Easter Event - Spring celebration with egg-themed content
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#fbbf24', marginRight: '8px', marginTop: '4px' }}>•</span>
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: '1.4'
                  }}>
                    Summer Festival - Beach and tropical themed events
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#fbbf24', marginRight: '8px', marginTop: '4px' }}>•</span>
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: '1.4'
                  }}>
                    Halloween Event - Spooky decorations and dark themes
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#fbbf24', marginRight: '8px', marginTop: '4px' }}>•</span>
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: '1.4'
                  }}>
                    Winter Holiday - Snow and festive celebrations
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: 'bold', 
                color: '#f5d954', 
                marginBottom: '12px',
                fontFamily: "'Press Start 2P', cursive"
              }}>
                Special Events
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#fbbf24', marginRight: '8px', marginTop: '4px' }}>•</span>
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: '1.4'
                  }}>
                    Lunar Events - Moon phases and celestial themes
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#fbbf24', marginRight: '8px', marginTop: '4px' }}>•</span>
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: '1.4'
                  }}>
                    Blood Moon - Rare mutations and dark atmosphere
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#fbbf24', marginRight: '8px', marginTop: '4px' }}>•</span>
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '12px',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: '1.4'
                  }}>
                    Angry Plant - Combat and defense mechanics
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <span style={{ color: '#fbbf24', marginRight: '8px', marginTop: '4px' }}>•</span>
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '12px',
                    fontFamily: "'Press Start 2P', cursive",
                    lineHeight: '1.4'
                  }}>
                    Community Events - Player collaboration activities
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Event Tips */}
        <div style={{ 
          backgroundColor: '#1f2a37', 
          border: '0.5px solid #4c555f', 
          borderRadius: '12px', 
          padding: '32px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: 'bold', 
            color: '#ffffff', 
            marginBottom: '24px',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            Event Participation Tips
          </h2>
          <div style={{ 
            color: '#d1d5db', 
            fontSize: '10px', 
            lineHeight: '1.6',
            fontFamily: "'Press Start 2P', cursive"
          }}>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#fbbf24', marginRight: '12px', marginTop: '4px' }}>•</span>
                <div>
                  <strong style={{ color: 'white' }}>Stay Updated:</strong> Follow official announcements and join the community to stay informed about upcoming events.
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#fbbf24', marginRight: '12px', marginTop: '4px' }}>•</span>
                <div>
                  <strong style={{ color: 'white' }}>Plan Ahead:</strong> Save resources and prepare your garden layout before events begin for maximum efficiency.
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#fbbf24', marginRight: '12px', marginTop: '4px' }}>•</span>
                <div>
                  <strong style={{ color: 'white' }}>Collect Everything:</strong> Event items are often limited-time only, so collect as many exclusive crops and items as possible.
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#fbbf24', marginRight: '12px', marginTop: '4px' }}>•</span>
                <div>
                  <strong style={{ color: 'white' }}>Complete Objectives:</strong> Focus on event-specific quests and objectives to maximize your rewards and progress.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 