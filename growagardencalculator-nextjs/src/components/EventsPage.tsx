import React from 'react';
import Link from 'next/link';

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
      case 'completed': return 'bg-gray-600 text-gray-300';
      case 'ongoing': return 'bg-green-600 text-white';
      case 'upcoming': return 'bg-blue-600 text-white';
      default: return 'bg-gray-600 text-gray-300';
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-yellow-300 mb-4">
          Grow A Garden Events
        </h1>
        <p className="text-sm text-gray-300 max-w-6xl mx-auto leading-relaxed">
          Stay updated with all Grow a Garden events, including seasonal celebrations, special rewards, and limited-time content. Discover event timelines, exclusive crops, and unique features!
        </p>
      </div>

      {/* About Events */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">About Grow a Garden Events</h2>
        <div className="text-gray-300 text-sm leading-relaxed space-y-4">
          <p>
            Grow a Garden events are special limited-time occasions that bring unique content, exclusive crops, and special rewards to the game. These events typically coincide with real-world holidays, seasons, or special celebrations, offering players fresh gameplay experiences and rare collectibles.
          </p>
          <p>
            During events, players can access exclusive shops, participate in special activities, obtain rare mutations, and grow crops that are only available during the event period. Events often feature themed decorations, unique pets, and special game mechanics that enhance the overall experience.
          </p>
        </div>
      </div>

      {/* Event Timeline */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Grow a Garden Event Timeline 2025</h2>
        <div className="space-y-4">
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
               
              >
                <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-40 h-40 object-contain rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{event.title}</h3>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                            <span className="mr-1">{getStatusIcon(event.status)}</span>
                            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-2">{event.date}</p>
                        <p className="text-gray-300 text-sm">{event.description}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Current & Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={event.id} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(event.status)}`}>
                    <span className="mr-1">{getStatusIcon(event.status)}</span>
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-12 h-12 object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{event.date}</p>
                <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                <Link
                  href={getEventPath(event.id)}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-semibold inline-block text-center"
                 
                >
                  View Details
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Event Information */}
      <div className="space-y-8 mb-12">
        {/* Event Types */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Types of Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-yellow-300 mb-3">Seasonal Events</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 mt-1">•</span>
                  <span>Easter Event - Spring celebration with egg-themed content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 mt-1">•</span>
                  <span>Summer Festival - Beach and tropical themed events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 mt-1">•</span>
                  <span>Halloween Event - Spooky decorations and dark themes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 mt-1">•</span>
                  <span>Winter Holiday - Snow and festive celebrations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-300 mb-3">Special Events</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 mt-1">•</span>
                  <span>Lunar Events - Moon phases and celestial themes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 mt-1">•</span>
                  <span>Blood Moon - Rare mutations and dark atmosphere</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 mt-1">•</span>
                  <span>Angry Plant - Combat and defense mechanics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2 mt-1">•</span>
                  <span>Community Events - Player collaboration activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Event Tips */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          <h2 className="text-2xl font-bold text-white mb-6">Event Participation Tips</h2>
          <div className="text-gray-300 text-sm leading-relaxed">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Stay Updated:</strong> Follow official announcements and join the community to stay informed about upcoming events.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Plan Ahead:</strong> Save resources and prepare your garden layout before events begin for maximum efficiency.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Collect Everything:</strong> Event items are often limited-time only, so collect as many exclusive crops and items as possible.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-3 mt-1">•</span>
                <div>
                  <strong className="text-white">Complete Objectives:</strong> Focus on event-specific quests and objectives to maximize your rewards and progress.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}; 