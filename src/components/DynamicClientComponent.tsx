import dynamic from 'next/dynamic'
import { ComponentType } from 'react'
import { LoadingSpinner } from './ui/LoadingSpinner'

/**
 * Utility function for dynamically importing client components
 * Used for optimizing code splitting and avoiding SSR hydration issues
 */

// Dynamic import PlantSelector (main interactive component)
export const DynamicPlantSelector = dynamic(
  () => import('./PlantSelector').then(mod => ({ default: mod.PlantSelector })),
  {
    loading: () => <LoadingSpinner />,
    ssr: false // Client-side only rendering
  }
)

// Dynamic import CalculationPanel (calculation component)
export const DynamicCalculationPanel = dynamic(
  () => import('./CalculationPanel').then(mod => ({ default: mod.CalculationPanel })),
  {
    loading: () => <LoadingSpinner />,
    ssr: false
  }
)

// Dynamic import ResultsPanel (results display)
export const DynamicResultsPanel = dynamic(
  () => import('./ResultsPanel').then(mod => ({ default: mod.ResultsPanel })),
  {
    loading: () => <LoadingSpinner />,
    ssr: false
  }
)

// Dynamic import MutationSelector (mutation selector)
export const DynamicMutationSelector = dynamic(
  () => import('./MutationSelector').then(mod => ({ default: mod.MutationSelector })),
  {
    loading: () => <LoadingSpinner />,
    ssr: false
  }
)

// Client-only component dynamic import utility
export function createClientOnlyComponent<T = {}>(
  importFn: () => Promise<{ default: ComponentType<T> }>
) {
  return dynamic(importFn, {
    loading: () => <LoadingSpinner />,
    ssr: false
  })
}