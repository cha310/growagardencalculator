import { NextRequest, NextResponse } from 'next/server'
import { plants, growthMutations, temperatureMutations, environmentMutations } from '@/data/gameData'

interface CalculationRequest {
  plantId: string
  weight: number
  quantity: number
  friendBonus: number
  growthMutationIds: string[]
  temperatureMutationIds: string[]
  environmentMutationIds: string[]
}

export async function POST(request: NextRequest) {
  try {
    const calculation: CalculationRequest = await request.json()
    
    // 验证输入
    if (!calculation.plantId || !calculation.weight || !calculation.quantity) {
      return NextResponse.json(
        { error: 'Missing required fields: plantId, weight, quantity' },
        { status: 400 }
      )
    }
    
    // 查找植物
    const plant = plants.find(p => p.id === calculation.plantId)
    if (!plant) {
      return NextResponse.json(
        { error: 'Plant not found' },
        { status: 404 }
      )
    }
    
    // 计算基础值
    const baseValue = plant.baseValue
    const weightMultiplier = calculation.weight
    const quantityMultiplier = calculation.quantity
    const friendMultiplier = 1 + (calculation.friendBonus / 100)
    
    // 计算生长突变效果
    const selectedGrowthMutations = growthMutations.filter(m => 
      calculation.growthMutationIds.includes(m.id)
    )
    const growthMultiplier = selectedGrowthMutations.reduce(
      (acc, mutation) => acc * mutation.multiplier, 
      1
    )
    
    // 计算温度突变效果
    const selectedTempMutations = temperatureMutations.filter(m => 
      calculation.temperatureMutationIds.includes(m.id)
    )
    const temperatureBonus = selectedTempMutations.reduce(
      (acc, mutation) => acc + (mutation.bonus || 0), 
      0
    )
    
    // 计算环境突变效果
    const selectedEnvMutations = environmentMutations.filter(m => 
      calculation.environmentMutationIds.includes(m.id)
    )
    const environmentBonus = selectedEnvMutations.reduce(
      (acc, mutation) => acc + (mutation.bonus || 0), 
      0
    )
    
    const bonusMultiplier = 1 + (temperatureBonus + environmentBonus) / 100
    
    // 最终计算
    const totalValue = baseValue * weightMultiplier * quantityMultiplier * 
                      friendMultiplier * growthMultiplier * bonusMultiplier
    
    const result = {
      plantId: calculation.plantId,
      plantName: plant.name,
      calculation: {
        baseValue,
        weight: calculation.weight,
        quantity: calculation.quantity,
        friendBonus: calculation.friendBonus,
        growthMultiplier,
        temperatureBonus,
        environmentBonus,
        bonusMultiplier,
        totalValue: Math.round(totalValue)
      },
      appliedMutations: {
        growth: selectedGrowthMutations.map(m => m.name),
        temperature: selectedTempMutations.map(m => m.name),
        environment: selectedEnvMutations.map(m => m.name)
      },
      calculatedAt: new Date().toISOString()
    }
    
    return NextResponse.json(result, {
      headers: {
        'Cache-Control': 'no-store', // 不缓存计算结果
        'Content-Type': 'application/json'
      }
    })
    
  } catch (error) {
    console.error('Calculation error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 