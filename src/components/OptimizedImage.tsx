'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  placeholder?: 'blur' | 'empty'
  fill?: boolean
  loading?: 'lazy' | 'eager'
  quality?: number
  sizes?: string
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 200,
  height = 200,
  className,
  style,
  priority = false,
  placeholder = 'blur',
  fill = false,
  loading = 'lazy',
  quality = 85,
  sizes
}) => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  // 智能 sizes 计算
  const getOptimalSizes = () => {
    if (sizes) return sizes
    if (fill) return '100vw'
    
    // 基于宽度的响应式尺寸
    if (width <= 64) return '64px'
    if (width <= 128) return '(max-width: 640px) 64px, 128px'
    if (width <= 256) return '(max-width: 640px) 128px, (max-width: 768px) 192px, 256px'
    return '(max-width: 640px) 256px, (max-width: 1024px) 384px, 512px'
  }
  
  if (error) {
    return (
      <div className={`relative ${isLoading ? 'animate-pulse bg-gray-700 rounded-lg' : ''}`}>
        <Image
          src="/plant/currency-0.png"
          alt="Image failed to load"
          width={width}
          height={height}
          className={className}
          style={style}
          priority={priority}
          quality={quality}
          sizes={getOptimalSizes()}
        />
      </div>
    )
  }
  
  return (
    <div className={`relative ${isLoading ? 'animate-pulse bg-gray-700 rounded-lg' : ''}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        priority={priority}
        placeholder={placeholder}
        loading={priority ? 'eager' : loading}
        quality={quality}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true)
          setIsLoading(false)
        }}
        sizes={getOptimalSizes()}
      />
    </div>
  )
} 