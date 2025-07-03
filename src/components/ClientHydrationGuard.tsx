'use client'

import { useEffect, useState, ReactNode } from 'react'

interface ClientHydrationGuardProps {
  children: ReactNode
  fallback?: ReactNode
}

/**
 * Client hydration guard component
 * Ensures content is only rendered after client-side hydration is complete
 */
export const ClientHydrationGuard: React.FC<ClientHydrationGuardProps> = ({ 
  children, 
  fallback = null 
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}