import { Metadata } from 'next'
import { Suspense } from 'react'
import { CropsContent } from '@/components/wiki/CropsContent'
import { plants } from '@/data/gameData'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

// ✅ 动态元数据生成（SSR优化）
export async function generateMetadata(): Promise<Metadata> {
  const totalCrops = plants.length
  const categories = Array.from(new Set(plants.map(p => p.type)))
  
  return {
    title: `Grow A Garden Crops - Complete Guide to ${totalCrops} Plants`,
    description: `Comprehensive guide to all ${totalCrops} crops in Grow a Garden. Learn about ${categories.join(', ')} and optimize your farming strategy.`,
    keywords: [
      'grow a garden crops', 
      'farming guide', 
      'plant calculator', 
      'roblox farming',
      ...categories.map(cat => `${cat.toLowerCase()} guide`)
    ],
    openGraph: {
      title: `Grow A Garden Crops Guide - ${totalCrops} Plants`,
      description: `Complete farming guide with strategies for all ${totalCrops} crops`,
      images: ['/plant/strawberry.png']
    }
  }
}

// ✅ 服务端数据预取
async function getCropsData() {
  const categories = ['All', ...Array.from(new Set(plants.map(p => p.type)))]
  const tiers = ['All', ...Array.from(new Set(plants.map(p => p.category)))]
  
  return {
    totalCrops: plants.length,
    categories: categories.length - 1,
    tiers: tiers.length - 1,
    legendaryCount: plants.filter(p => p.category === 'Legendary').length,
    lastUpdated: '2024-01-01T00:00:00.000Z' // 使用固定时间避免SSR/CSR不一致
  }
}

// ✅ 服务端组件 - 自动预渲染
export default async function CropsPage() {
  const data = await getCropsData()
  
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px' }}>
      {/* SEO优化头部 - 服务端渲染 */}
      <header style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#fcdf56', 
          marginBottom: '16px',
          fontFamily: "'Press Start 2P', cursive"
        }}>
          Grow A Garden Crops
        </h1>
        <p style={{ 
          fontSize: '10px', 
          color: '#d1d5db', 
          maxWidth: '1000px', 
          margin: '0 auto', 
          lineHeight: '1.6',
          fontFamily: "'Press Start 2P', cursive"
        }}>
            Hey, fellow gardeners! If you're diving into the colorful world of Grow a Garden on Roblox, you're probably wondering, "What exactly are crops, and how can I maximize them?" Well, get ready—because crops are the lifeblood of this fantastic gardening sim! Whether you're a beginner sowing your first radish or a pro farmer hunting for those elusive mutations, mastering crops is the secret to cultivating a flourishing, profit-making paradise. Let's dig into the dirt and uncover all the juicy tips you need to make your garden thrive! 🌱
        </p>
      </header>

      {/* 客户端交互组件 */}
      <Suspense fallback={<LoadingSpinner />}>
        <CropsContent />
      </Suspense>
    </div>
  )
}

// ✅ 缓存配置 - 24小时重新验证
export const revalidate = 86400