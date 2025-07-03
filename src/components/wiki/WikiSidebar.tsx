import React from 'react'
import Link from 'next/link'
import { Book, Users, Wrench, Egg, Sparkles } from 'lucide-react'

export const WikiSidebar: React.FC = () => {
  const wikiSections = [
    {
      title: 'Crops',
      href: '/wiki/crops',
      icon: Book,
      description: 'All plantable crops'
    },
    {
      title: 'Pets',
      href: '/wiki/pets',
      icon: Users,
      description: 'Pet companions'
    },
    {
      title: 'Gears',
      href: '/wiki/gears',
      icon: Wrench,
      description: 'Tools & equipment'
    },
    {
      title: 'Eggs',
      href: '/wiki/eggs',
      icon: Egg,
      description: 'Pet eggs guide'
    },
    {
      title: 'Mutations',
      href: '/wiki/mutations',
      icon: Sparkles,
      description: 'Crop mutations'
    }
  ]

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Wiki Sections</h3>
      <nav className="space-y-2">
        {wikiSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            <section.icon className="w-5 h-5" />
            <div>
              <div className="font-medium">{section.title}</div>
              <div className="text-xs text-gray-400">{section.description}</div>
            </div>
          </Link>
        ))}
      </nav>
    </div>
  )
}