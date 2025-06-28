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

  // 对于SPA应用，只包含确实能被搜索引擎访问的页面
  const pages = [
    // 主页 - 唯一确保可访问的页面
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: '1.0',
    }
  ];

  // 生成XML内容 - 使用更标准的格式
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
  
  xml += '</urlset>\n';

  // 写入文件
  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  
  console.log(`✅ Sitemap generated successfully at ${outputPath}`);
  console.log(`📊 Total pages: ${pages.length}`);
  console.log(`🔗 Sitemap URL: https://www.growagardencalculator.me/sitemap.xml`);
  console.log(`ℹ️  Note: Only including accessible pages for SPA application`);
}

// 运行生成器
generateSitemap().catch(console.error); 