// app/sitemap.js
export default async function sitemap() {
    const baseUrl = 'https://growagardencalculator.me';
    const now = new Date();

    const staticPages = [
      {
        url: baseUrl,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/grow-a-garden-wiki`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/grow-a-garden-events`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/grow-a-garden-faqs`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
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
        url: `${baseUrl}/grow-a-garden-mutations`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/grow-a-garden-values`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: `${baseUrl}/grow-a-garden-events`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: `${baseUrl}/grow-garden-summer-harvest`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/grow-garden-Easter-Event-2025`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/grow-garden-Bizzy-Bee-Event`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/grow-garden-Lunar-Glow-Event`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/grow-garden-Blood-Moon-Event`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: `${baseUrl}/grow-garden-Angry-Plant-Event`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.5,
      }
    ];
  
  
    return [...staticPages];
  }