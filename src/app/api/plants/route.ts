import { NextRequest, NextResponse } from 'next/server'
import { plants } from '@/data/gameData'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const tier = searchParams.get('tier')
  const search = searchParams.get('search')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '50')
  
  let filteredPlants = plants
  
  // 分类筛选
  if (category && category !== 'All') {
    filteredPlants = filteredPlants.filter(plant => plant.category === category)
  }
  
  // 等级筛选（使用category）
  if (tier && tier !== 'All') {
    filteredPlants = filteredPlants.filter(plant => plant.category === tier)
  }
  
  // 搜索筛选
  if (search) {
    const searchLower = search.toLowerCase()
    filteredPlants = filteredPlants.filter(plant => 
      plant.name.toLowerCase().includes(searchLower) ||
      plant.type.toLowerCase().includes(searchLower)
    )
  }
  
  // 分页
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedPlants = filteredPlants.slice(startIndex, endIndex)
  
  return NextResponse.json({
    plants: paginatedPlants,
    pagination: {
      page,
      limit,
      total: filteredPlants.length,
      totalPages: Math.ceil(filteredPlants.length / limit),
      hasMore: endIndex < filteredPlants.length
    },
    filters: {
      category,
      tier,
      search
    },
    timestamp: new Date().toISOString()
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'Content-Type': 'application/json'
    }
  })
} 