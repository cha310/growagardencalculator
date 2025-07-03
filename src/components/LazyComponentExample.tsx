import dynamic from 'next/dynamic'
import { LoadingSpinner } from './ui/LoadingSpinner'

// 大型计算器组件懒加载
const AdvancedCalculator = dynamic(
  () => import('./calculator/HomeCalculator').then(mod => ({ default: mod.HomeCalculator })),
  {
    loading: () => <LoadingSpinner />,
    ssr: false // 只在客户端渲染，保持交互性
  }
)

// FAQ 组件懒加载
const QuickFAQ = dynamic(
  () => import('./home/QuickFAQ').then(mod => ({ default: mod.QuickFAQ })),
  {
    loading: () => <div className="animate-pulse bg-gray-800 h-64 rounded-lg" />,
  }
)

// 工具组件懒加载
const FeaturedTools = dynamic(
  () => import('./home/FeaturedTools').then(mod => ({ default: mod.FeaturedTools })),
  {
    loading: () => <div className="animate-pulse bg-gray-800 h-48 rounded-lg" />,
  }
)

export {
  AdvancedCalculator,
  QuickFAQ,
  FeaturedTools
}