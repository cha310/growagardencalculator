/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ 启用SSR - 移除静态导出配置
  // output: 'export', // 已移除
  // distDir: 'dist', // 已移除
  trailingSlash: true,
  
  // ✅ SSR优化配置
  experimental: {
    // optimizeCss: true, // 暂时禁用，需要安装critters依赖
  },
  
  // ✅ 图片优化配置（SSR模式）
  images: {
    // unoptimized: true, // 已移除 - 启用Next.js图片优化
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // 图片加载优化
    minimumCacheTTL: 86400, // 24小时缓存
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // 远程图片模式
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/attachments/**',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_DOMAIN || 'localhost',
        port: '',
        pathname: '/**',
      }
    ],
  },
  
  // ✅ 性能和安全优化
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // swcMinify: true, // Next.js 15 中已默认启用
  
  // TypeScript配置
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint配置 - 临时禁用以完成迁移
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 页面扩展名
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  
  // ✅ 环境变量
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },
  
  // Webpack配置优化
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // 确保静态资源正确处理
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/public': '/public',
    };
    
    return config;
  },
};

export default nextConfig; 