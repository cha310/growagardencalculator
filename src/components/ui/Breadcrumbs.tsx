'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

export const Breadcrumbs: React.FC = () => {
  const pathname = usePathname()
  
  // Path mapping
  const pathMap: Record<string, string> = {
    '/': 'Home',
    '/wiki': 'Wiki',
    '/wiki/crops': 'Crops',
    '/wiki/pets': 'Pets',
    '/wiki/gears': 'Gears',
    '/wiki/eggs': 'Eggs',
    '/wiki/mutations': 'Mutations',
    '/tools': 'Tools',
    '/tools/values': 'Value Calculator',
    '/tools/codes': 'Redeem Codes',
    '/tools/stock': 'Stock Management',
    '/tools/faq': 'FAQ',
    '/events': 'Events',
    '/events/summer-harvest': 'Summer Harvest',
    '/events/easter-2025': 'Easter 2025',
    '/legal/privacy-policy': 'Privacy Policy',
    '/legal/terms-of-service': 'Terms of Service',
  }

  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs = [{ name: 'Home', href: '/' }]

    let currentPath = ''
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`
      const name = pathMap[currentPath] || segment
      breadcrumbs.push({ name, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  if (breadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.href}>
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-gray-200 font-medium">{breadcrumb.name}</span>
          ) : (
            <Link
              href={breadcrumb.href}
              className="hover:text-green-400 transition-colors"
            >
              {index === 0 ? <Home className="w-4 h-4" /> : breadcrumb.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}