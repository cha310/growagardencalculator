'use client'

import React, { useState, useEffect, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { CalculationState } from '@/types'
import { growthMutations, temperatureMutations, environmentMutations } from '@/data/gameData'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ClientHydrationGuard } from '@/components/ClientHydrationGuard'

// 动态导入策略：按需加载各个组件
const PlantSelector = dynamic(
  () => import('@/components/PlantSelector').then(mod => ({ default: mod.PlantSelector })),
  {
    loading: () => <div className="pixel-card h-64 animate-pulse bg-gray-700"></div>,
    ssr: false // 首屏不需要，仅客户端渲染
  }
)

const MutationSelector = dynamic(
  () => import('@/components/MutationSelector').then(mod => ({ default: mod.MutationSelector })),
  {
    loading: () => <div className="pixel-card h-48 animate-pulse bg-gray-700"></div>,
    ssr: false
  }
)

const CalculationPanel = dynamic(
  () => import('@/components/CalculationPanel').then(mod => ({ default: mod.CalculationPanel })),
  {
    loading: () => <div className="pixel-card h-32 animate-pulse bg-gray-700"></div>,
    ssr: false
  }
)

const ResultsPanel = dynamic(
  () => import('@/components/ResultsPanel').then(mod => ({ default: mod.ResultsPanel })),
  {
    loading: () => <div className="pixel-card h-96 animate-pulse bg-gray-700"></div>,
    ssr: false
  }
)

export const OptimizedHomeCalculator: React.FC = () => {
  const [state, setState] = useState<CalculationState>({
    selectedPlant: null,
    selectedCategory: 'All',
    growthMutations: [growthMutations[0]],
    temperatureMutations: [],
    environmentMutations: [],
    weight: 1,
    quantity: 1,
    friendBonus: 0,
  })

  const [result, setResult] = useState<number>(0)

  // 计算逻辑
  useEffect(() => {
    if (!state.selectedPlant) {
      setResult(0)
      return
    }

    const baseValue = state.selectedPlant.baseValue
    const weightMultiplier = state.weight
    const quantityMultiplier = state.quantity
    const friendMultiplier = 1 + (state.friendBonus / 100)

    const growthMultiplier = state.growthMutations.reduce(
      (acc, mutation) => acc * mutation.multiplier, 
      1
    )

    const temperatureBonus = state.temperatureMutations.reduce(
      (acc, mutation) => acc + (mutation.bonus || 0), 
      0
    )

    const environmentBonus = state.environmentMutations.reduce(
      (acc, mutation) => acc + (mutation.bonus || 0), 
      0
    )

    const bonusMultiplier = 1 + (temperatureBonus + environmentBonus) / 100

    const totalValue = baseValue * weightMultiplier * quantityMultiplier * 
                      friendMultiplier * growthMultiplier * bonusMultiplier

    setResult(totalValue)
  }, [state])

  // 事件处理器
  const handlePlantSelect = (plant: any) => {
    setState(prev => ({ ...prev, selectedPlant: plant }))
  }

  const handleCategorySelect = (category: string) => {
    setState(prev => ({ ...prev, selectedCategory: category }))
  }

  const handleGrowthMutationToggle = (mutation: any) => {
    setState(prev => {
      const isSelected = prev.growthMutations.some(m => m.id === mutation.id)
      if (isSelected) {
        return {
          ...prev,
          growthMutations: prev.growthMutations.filter(m => m.id !== mutation.id)
        }
      } else {
        // Implement exclusive rules for growth mutations
        let newGrowthMutations = [...prev.growthMutations]
        
        // Golden and Rainbow are mutually exclusive
        if (mutation.id === 'gold' || mutation.id === 'rainbow') {
          newGrowthMutations = newGrowthMutations.filter(m => m.id !== 'gold' && m.id !== 'rainbow')
        }
        
        return {
          ...prev,
          growthMutations: [...newGrowthMutations, mutation]
        }
      }
    })
  }

  const handleTemperatureMutationToggle = (mutation: any) => {
    setState(prev => {
      const isSelected = prev.temperatureMutations.some(m => m.id === mutation.id)
      if (isSelected) {
        return {
          ...prev,
          temperatureMutations: prev.temperatureMutations.filter(m => m.id !== mutation.id)
        }
      } else {
        // Implement exclusive rules for temperature mutations
        let newTemperatureMutations = [...prev.temperatureMutations]
        
        // Chilled/Wet/Frozen are mutually exclusive
        if (['chilled', 'wet', 'frozen'].includes(mutation.id)) {
          newTemperatureMutations = newTemperatureMutations.filter(m => 
            !['chilled', 'wet', 'frozen'].includes(m.id)
          )
        }
        
        // Burnt/Cooked are mutually exclusive
        if (['burnt', 'cooked'].includes(mutation.id)) {
          newTemperatureMutations = newTemperatureMutations.filter(m => 
            !['burnt', 'cooked'].includes(m.id)
          )
        }
        
        return {
          ...prev,
          temperatureMutations: [...newTemperatureMutations, mutation]
        }
      }
    })
  }

  const handleEnvironmentMutationToggle = (mutation: any) => {
    setState(prev => ({
      ...prev,
      environmentMutations: prev.environmentMutations.some(m => m.id === mutation.id)
        ? prev.environmentMutations.filter(m => m.id !== mutation.id)
        : [...prev.environmentMutations, mutation]
    }))
  }

  const handleWeightChange = (weight: number) => {
    setState(prev => ({ ...prev, weight }))
  }

  const handleQuantityChange = (quantity: number) => {
    setState(prev => ({ ...prev, quantity }))
  }

  const handleFriendBonusChange = (friendBonus: number) => {
    setState(prev => ({ ...prev, friendBonus }))
  }

  const handleReset = () => {
    setState({
      selectedPlant: null,
      selectedCategory: 'All',
      growthMutations: [growthMutations[0]],
      temperatureMutations: [],
      environmentMutations: [],
      weight: 1,
      quantity: 1,
      friendBonus: 0,
    })
  }

  const handleMaxMutation = () => {
    // Check if currently at max mutation state
    const hasRainbowAndShiny = state.growthMutations.some(m => m.id === 'rainbow') && 
                              state.growthMutations.some(m => m.id === 'shiny')
    const excludedMutations = ['chilled', 'wet', 'pollinated']
    const expectedTemperatureCount = temperatureMutations.filter(m => !excludedMutations.includes(m.id)).length
    
    const isCurrentlyMaxed = 
      hasRainbowAndShiny &&
      state.temperatureMutations.length === expectedTemperatureCount &&
      state.environmentMutations.length === environmentMutations.length &&
      state.friendBonus === 100

    if (isCurrentlyMaxed) {
      // If already maxed, reset to default state
      setState(prev => ({
        ...prev,
        growthMutations: [growthMutations[0]], // Default
        temperatureMutations: [],
        environmentMutations: [],
        friendBonus: 0,
      }))
    } else {
      // Set to max mutation state
      
      // Growth/Variants: Select Rainbow Variant and Shiny Variant
      const rainbowVariant = growthMutations.find(m => m.id === 'rainbow')
      const shinyVariant = growthMutations.find(m => m.id === 'shiny')
      const selectedGrowthMutations = [rainbowVariant, shinyVariant].filter((mutation): mutation is any => Boolean(mutation))
      
      // Temperature/Mutations: Select all except chilled, wet, pollinated
      const excludedMutations = ['chilled', 'wet', 'pollinated']
      const selectedTemperatureMutations = temperatureMutations.filter(m => 
        !excludedMutations.includes(m.id)
      )
      
      // Environment: Select all environment mutations
      const allEnvironmentMutations = [...environmentMutations]
      
      setState(prev => ({
        ...prev,
        growthMutations: selectedGrowthMutations,
        temperatureMutations: selectedTemperatureMutations,
        environmentMutations: allEnvironmentMutations,
        friendBonus: 100, // Set max friend bonus
      }))
    }
  }

  return (
    <ClientHydrationGuard fallback={<LoadingSpinner />}>
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-2 h-2 bg-yellow-300 mr-2"></div>
          <h2 className="text-2xl font-bold text-green-400">Farm Value Calculator</h2>
          <div className="w-2 h-2 bg-yellow-300 ml-2"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧控制面板 */}
          <div className="space-y-6">
            <Suspense fallback={<div className="pixel-card h-64 animate-pulse bg-gray-700"></div>}>
              <PlantSelector
                selectedPlant={state.selectedPlant}
                selectedCategory={state.selectedCategory}
                onPlantSelect={handlePlantSelect}
                onCategorySelect={handleCategorySelect}
              />
            </Suspense>
            
            <Suspense fallback={<div className="pixel-card h-48 animate-pulse bg-gray-700"></div>}>
              <MutationSelector
                growthMutations={state.growthMutations}
                temperatureMutations={state.temperatureMutations}
                environmentMutations={state.environmentMutations}
                onGrowthMutationToggle={handleGrowthMutationToggle}
                onTemperatureMutationToggle={handleTemperatureMutationToggle}
                onEnvironmentMutationToggle={handleEnvironmentMutationToggle}
              />
            </Suspense>
            
            <Suspense fallback={<div className="pixel-card h-32 animate-pulse bg-gray-700"></div>}>
              <CalculationPanel
                weight={state.weight}
                quantity={state.quantity}
                friendBonus={state.friendBonus}
                onWeightChange={handleWeightChange}
                onQuantityChange={handleQuantityChange}
                onFriendBonusChange={handleFriendBonusChange}
              />
            </Suspense>
          </div>
          
          {/* 右侧结果面板 */}
          <div>
            <Suspense fallback={<div className="pixel-card h-96 animate-pulse bg-gray-700"></div>}>
              <ResultsPanel
                state={state}
                result={result}
                onReset={handleReset}
                onMaxMutation={handleMaxMutation}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </ClientHydrationGuard>
  )
}