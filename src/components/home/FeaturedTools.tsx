import React from 'react'
import Link from 'next/link'
import { Calculator, Book, Wrench, Calendar } from 'lucide-react'

export const FeaturedTools: React.FC = () => {
  const tools = [
    {
      name: 'Crops Wiki',
      description: 'View detailed information for all crops',
      href: '/wiki/crops',
      icon: Book,
      color: 'bg-green-600'
    },
    {
      name: 'Value Calculator',
      description: 'Advanced value calculation tools',
      href: '/tools/values',
      icon: Calculator,
      color: 'bg-blue-600'
    },
    {
      name: 'Events Center',
      description: 'Check current event information',
      href: '/events',
      icon: Calendar,
      color: 'bg-purple-600'
    },
    {
      name: 'Utility Tools',
      description: 'Redeem codes, stock management, etc.',
      href: '/tools',
      icon: Wrench,
      color: 'bg-orange-600'
    }
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-400 text-center">Quick Access Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
          >
            <div className={`inline-flex p-3 rounded-lg ${tool.color} mb-4`}>
              <tool.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{tool.name}</h3>
            <p className="text-gray-400 text-sm">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}