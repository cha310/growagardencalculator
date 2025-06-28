import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // 在构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // 对于静态导出，禁用图片优化
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.growagardencalculator.me',
      },
    ],
  },
  // 暂时禁用静态导出以测试基本功能
  // output: 'export',
  trailingSlash: true,
  // 确保静态文件可以正确访问
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
