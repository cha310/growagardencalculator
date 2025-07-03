'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { ChevronDown, Menu, X, Calculator, Book, Wrench, Calendar } from 'lucide-react'

export const Navigation: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [showWikiDropdown, setShowWikiDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Active link check
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Dropdown menu control
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowWikiDropdown(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowWikiDropdown(false)
    }, 150)
  }

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: Calculator,
    },
    {
      label: 'Wiki',
      href: '/wiki',
      icon: Book,
      dropdown: [
        { label: 'Crops', href: '/wiki/crops' },
        { label: 'Pets', href: '/wiki/pets' },
        { label: 'Gears', href: '/wiki/gears' },
        { label: 'Eggs', href: '/wiki/eggs' },
        { label: 'Mutations', href: '/wiki/mutations' },
        { label: 'Stock', href: '/grow-a-garden-stock' },
        { label: 'Codes', href: '/grow-a-garden-codes' },
        { label: 'Values', href: '/tools/values' },
      ]
    },
    {
      label: 'Events',
      href: '/events',
      icon: Calendar,
    },
    {
      label: 'FAQs',
      href: '/grow-a-garden-faqs',
      icon: Book,
    }
  ]

  return (
    <nav style={{ backgroundColor: '#111827', borderBottom: '1px solid #374151', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: '48px', position: 'relative' }}>
          {/* Logo - 左侧，与下方内容左边距对齐 */}
          <Link 
            href="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              fontSize: '14px', 
              fontWeight: 'bold', 
              color: '#fde047', 
              textDecoration: 'none',
              fontFamily: "'Press Start 2P', cursive",
              marginLeft: '16px'  // 图标往右侧移动一些
            }}
            onClick={scrollToTop}
          >
            <img 
              src="/icons/growagardencalculator.png" 
              alt="Grow A Garden Calculator"
              style={{ 
                width: '28px', 
                height: '28px',
                imageRendering: 'pixelated'
              }}
            />
          </Link>

          {/* Desktop Navigation - 靠近左侧图标 */}
          <div style={{ 
            marginLeft: '32px',
            display: 'flex', 
            alignItems: 'center', 
            gap: '24px' 
          }}>
            {navigationItems.map((item) => (
              <div key={item.href} style={{ position: 'relative' }}>
                {item.dropdown ? (
                  <div
                    style={{ position: 'relative' }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '8px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: isActiveLink(item.href) ? '#fde047' : '#d1d5db',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        fontFamily: "'Press Start 2P', cursive",
                        borderBottom: 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActiveLink(item.href)) {
                          e.currentTarget.style.color = '#fde047'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActiveLink(item.href)) {
                          e.currentTarget.style.color = '#d1d5db'
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown style={{ width: '12px', height: '12px' }} />
                    </Link>

                    {/* Dropdown Menu */}
                    {showWikiDropdown && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        marginTop: '4px',
                        width: '320px',
                        backgroundColor: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '4px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        padding: '8px',
                        zIndex: 50
                      }}>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '4px'
                        }}>
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              style={{
                                display: 'block',
                                padding: '8px 12px',
                                fontSize: '10px',
                                color: isActiveLink(subItem.href) ? '#fde047' : '#d1d5db',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                fontFamily: "'Press Start 2P', cursive",
                                borderRadius: '4px'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#374151'
                                if (!isActiveLink(subItem.href)) {
                                  e.currentTarget.style.color = '#fde047'
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent'
                                if (!isActiveLink(subItem.href)) {
                                  e.currentTarget.style.color = '#d1d5db'
                                }
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: isActiveLink(item.href) ? '#fde047' : '#d1d5db',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      fontFamily: "'Press Start 2P', cursive",
                      borderBottom: isActiveLink(item.href) ? '2px solid #fde047' : '2px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActiveLink(item.href)) {
                        e.currentTarget.style.color = '#fde047'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActiveLink(item.href)) {
                        e.currentTarget.style.color = '#d1d5db'
                      }
                    }}
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button - 只在小屏幕显示 */}
          <button
            style={{
              padding: '8px',
              borderRadius: '4px',
              color: '#d1d5db',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'none' // 默认隐藏，通过媒体查询在小屏幕显示
            }}
            onClick={toggleMobileMenu}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'white'
              e.currentTarget.style.backgroundColor = '#374151'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#d1d5db'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            {showMobileMenu ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div style={{ padding: '16px 0', borderTop: '1px solid #374151' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {navigationItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500',
                      color: isActiveLink(item.href) ? '#bbf7d0' : '#d1d5db',
                      backgroundColor: isActiveLink(item.href) ? '#166534' : 'transparent',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      fontFamily: "'Press Start 2P', cursive"
                    }}
                    onClick={() => setShowMobileMenu(false)}
                    onMouseEnter={(e) => {
                      if (!isActiveLink(item.href)) {
                        e.currentTarget.style.backgroundColor = '#374151'
                        e.currentTarget.style.color = 'white'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActiveLink(item.href)) {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = '#d1d5db'
                      }
                    }}
                  >
                    <item.icon style={{ width: '16px', height: '16px' }} />
                    <span>{item.label}</span>
                  </Link>
                  
                  {/* Mobile Sub-menu */}
                  {item.dropdown && (
                    <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          style={{
                            display: 'block',
                            padding: '8px 12px',
                            fontSize: '12px',
                            borderRadius: '4px',
                            color: isActiveLink(subItem.href) ? '#bbf7d0' : '#9ca3af',
                            backgroundColor: isActiveLink(subItem.href) ? '#166534' : 'transparent',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                            fontFamily: "'Press Start 2P', cursive"
                          }}
                          onClick={() => setShowMobileMenu(false)}
                          onMouseEnter={(e) => {
                            if (!isActiveLink(subItem.href)) {
                              e.currentTarget.style.backgroundColor = '#374151'
                              e.currentTarget.style.color = 'white'
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActiveLink(subItem.href)) {
                              e.currentTarget.style.backgroundColor = 'transparent'
                              e.currentTarget.style.color = '#9ca3af'
                            }
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 