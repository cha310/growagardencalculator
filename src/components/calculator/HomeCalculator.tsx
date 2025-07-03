'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { CalculationState } from '@/types'
import { growthMutations, temperatureMutations, environmentMutations } from '@/data/gameData'
import { PlantSelector } from '@/components/PlantSelector'
import { MutationSelector } from '@/components/MutationSelector'
import { CalculationPanel } from '@/components/CalculationPanel'
import { ResultsPanel } from '@/components/ResultsPanel'

export const HomeCalculator: React.FC = () => {
  const [state, setState] = useState<CalculationState>({
    selectedPlant: null,
    selectedCategory: 'All',
    growthMutations: growthMutations?.[0] ? [growthMutations[0]] : [],
    temperatureMutations: [],
    environmentMutations: [],
    weight: 1,
    quantity: 1,
    friendBonus: 0,
  })

  const [result, setResult] = useState<number>(0)

  // Calculate result whenever state changes
  useEffect(() => {
    if (!state.selectedPlant) {
      setResult(0)
      return
    }

    const plantValue = state.selectedPlant.baseValue
    const weightMultiplier = state.weight
    const quantityMultiplier = state.quantity
    const friendMultiplier = 1 + (state.friendBonus / 100)

    // Calculate mutation effects
    const growthMultiplier = state.growthMutations.reduce((acc, mutation) => acc * mutation.multiplier, 1)
    const temperatureBonus = state.temperatureMutations.reduce((acc, mutation) => acc + (mutation.bonus || 0), 0)
    const environmentBonus = state.environmentMutations.reduce((acc, mutation) => acc + (mutation.bonus || 0), 0)
    
    const bonusMultiplier = 1 + (temperatureBonus + environmentBonus) / 100

    const totalValue = plantValue * weightMultiplier * quantityMultiplier * friendMultiplier * 
                      growthMultiplier * bonusMultiplier

    setResult(Math.round(totalValue))
  }, [state])

  // Handler functions
  const handlePlantSelect = (plant: any) => {
    setState(prev => ({ 
      ...prev, 
      selectedPlant: plant,
      weight: plant?.weight || 1
    }))
  }

  const handleCategorySelect = (category: string) => {
    setState(prev => ({ ...prev, selectedCategory: category }))
  }

  const handleWeightChange = (weight: number) => {
    setState(prev => ({ ...prev, weight }))
  }

  const handleQuantityChange = (quantity: number) => {
    setState(prev => ({ ...prev, quantity }))
  }

  const handleFriendBonusChange = (bonus: number) => {
    setState(prev => ({ ...prev, friendBonus: bonus }))
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
    setState(prev => {
      const isSelected = prev.environmentMutations.some(m => m.id === mutation.id)
      if (isSelected) {
        return {
          ...prev,
          environmentMutations: prev.environmentMutations.filter(m => m.id !== mutation.id)
        }
      } else {
        return {
          ...prev,
          environmentMutations: [...prev.environmentMutations, mutation]
        }
      }
    })
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
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '16px' }}>
      {/* 使用内联样式的65%/35%布局 */}
      <div style={{ display: 'flex', gap: '20px', minHeight: '600px' }}>
        {/* Left Column - Plant Selection (65%) */}
        <div style={{ flex: '0 0 65%' }}>
          <PlantSelector
            selectedPlant={state.selectedPlant}
            selectedCategory={state.selectedCategory}
            onPlantSelect={handlePlantSelect}
            onCategorySelect={handleCategorySelect}
          />
        </div>

        {/* Right Column - Results, Modifiers, and Calculation (35%) */}
        <div style={{ flex: '0 0 35%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <ResultsPanel
            state={state}
            result={result}
            onReset={handleReset}
            onMaxMutation={handleMaxMutation}
          />
          
          <MutationSelector
            growthMutations={state.growthMutations}
            temperatureMutations={state.temperatureMutations}
            environmentMutations={state.environmentMutations}
            onGrowthMutationToggle={handleGrowthMutationToggle}
            onTemperatureMutationToggle={handleTemperatureMutationToggle}
            onEnvironmentMutationToggle={handleEnvironmentMutationToggle}
          />
          
          <CalculationPanel
            weight={state.weight}
            quantity={state.quantity}
            friendBonus={state.friendBonus}
            onWeightChange={handleWeightChange}
            onQuantityChange={handleQuantityChange}
            onFriendBonusChange={handleFriendBonusChange}
          />
        </div>
      </div>
    </div>
  )
}