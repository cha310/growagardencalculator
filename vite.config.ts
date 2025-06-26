import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// 路由配置
const routes = [
  {
    path: '/',
    title: 'Grow a Garden Calculator - Roblox Fruit Value Calculator',
    description: 'Calculate your Grow A Garden crop values precisely, optimize your planting strategy, and maximize your profits. Free Roblox calculator tool for plant mutations and values.'
  },
  {
    path: '/grow-a-garden-wiki',
    title: 'Grow a Garden Wiki - Game Guide & Information',
    description: 'Complete guide to Grow a Garden game - learn about crops, pets, gears, eggs, mutations, and values in this comprehensive wiki.'
  },
  {
    path: '/grow-a-garden-wiki-crops',
    title: 'Crops - Grow a Garden Calculator',
    description: 'Browse all crops in Grow a Garden - detailed information about seeds, prices, values, and shop categories for every plant in the game.'
  },
  {
    path: '/grow-a-garden-faqs',
    title: 'FAQs - Grow a Garden Calculator',
    description: 'Frequently asked questions about the Grow a Garden Calculator - get answers to common questions about plant values, mutations, and optimization strategies.'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - Grow a Garden Calculator',
    description: 'Privacy policy for Grow a Garden Calculator - learn how we protect your data and what information we collect when you use our Roblox calculator tool.'
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service - Grow a Garden Calculator',
    description: 'Terms of service for Grow a Garden Calculator - understand the rules and conditions for using our Roblox calculator tool.'
  }
];

// 自定义插件来生成多个HTML文件
const multiPagePlugin = () => {
  return {
    name: 'multi-page',
    generateBundle(this: any, options: any, bundle: any) {
      // 读取原始的 index.html
      const indexHtml = fs.readFileSync('index.html', 'utf-8');
      
      // 为每个路由生成HTML文件
      routes.forEach(route => {
        if (route.path === '/') return; // 主页已经是 index.html
        
        // 替换title和description
        let html = indexHtml
          .replace(
            /<title>.*?<\/title>/,
            `<title>${route.title}</title>`
          )
          .replace(
            /<meta name="description" content=".*?"/,
            `<meta name="description" content="${route.description}"`
          )
          .replace(
            /<meta property="og:title" content=".*?"/,
            `<meta property="og:title" content="${route.title}"`
          )
          .replace(
            /<meta property="og:description" content=".*?"/,
            `<meta property="og:description" content="${route.description}"`
          )
          .replace(
            /<meta property="og:url" content=".*?"/,
            `<meta property="og:url" content="https://growagardencalculator.me${route.path}"`
          )
          .replace(
            /<link rel="canonical" href=".*?"/,
            `<link rel="canonical" href="https://growagardencalculator.me${route.path}"`
          );
        
        // 生成文件名
        const fileName = route.path.slice(1) + '.html'; // 移除开头的 '/'
        
        // 添加到bundle
        bundle[fileName] = {
          type: 'asset',
          fileName: fileName,
          source: html
        };
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), multiPagePlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // 构建配置，确保单页应用正确处理路由
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
