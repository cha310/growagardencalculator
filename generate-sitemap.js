import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 导入sitemap数据
async function generateSitemap() {
  const baseUrl = 'https://www.growagardencalculator.me';
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const pages = [
    // 主页
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Wiki主页
    {
      url: `${baseUrl}/grow-a-garden-wiki`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Wiki子页面
    {
      url: `${baseUrl}/grow-a-garden-wiki-crops`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grow-a-garden-wiki-pets`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grow-a-garden-wiki-gears`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grow-a-garden-wiki-eggs`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/grow-a-garden-wiki-mutations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Events主页
    {
      url: `${baseUrl}/grow-a-garden-events`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Events子页面
    {
      url: `${baseUrl}/grow-garden-summer-harvest`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/grow-garden-Easter-Event-2025`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/grow-garden-Bizzy-Bee-Event`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/grow-garden-Lunar-Glow-Event`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/grow-garden-Blood-Moon-Event`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/grow-garden-Angry-Plant-Event`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // 其他功能页面
    {
      url: `${baseUrl}/grow-a-garden-values`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/grow-a-garden-stock`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/grow-a-garden-codes`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/grow-a-garden-faqs`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // 法律页面
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: '2024-06-25',
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: '2024-06-25',
      changeFrequency: 'yearly',
      priority: 0.1,
    }
  ];

  // 生成XML内容
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastModified}</lastmod>\n`;
    xml += `    <changefreq>${page.changeFrequency}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';

  // 写入文件
  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  
  console.log(`✅ Sitemap generated successfully at ${outputPath}`);
  console.log(`📊 Total pages: ${pages.length}`);
}

// 运行生成器
generateSitemap().catch(console.error); 