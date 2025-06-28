# Next.js项目部署指南

## 问题原因
您之前部署的是根目录的React SPA版本，而不是`growagardencalculator-nextjs`文件夹中的Next.js版本。这导致子页面无法正确访问。

## 正确的部署步骤

### 1. 部署源选择
确保您部署的是 `growagardencalculator-nextjs` 文件夹，而不是根目录。

### 2. 平台特定配置

#### Vercel部署
1. 在Vercel中选择 `growagardencalculator-nextjs` 作为根目录
2. 框架检测：Next.js
3. 构建命令：`npm run build`
4. 输出目录：`./out`
5. Node.js版本：18.x或20.x

#### Netlify部署
1. 基本目录：`growagardencalculator-nextjs`
2. 构建命令：`npm run build`
3. 发布目录：`growagardencalculator-nextjs/out`
4. 确保 `_redirects` 文件包含在构建输出中

#### GitHub Pages部署
1. 使用GitHub Actions工作流
2. 构建目录：`growagardencalculator-nextjs`
3. 部署 `out` 文件夹的内容

### 3. 关键配置文件

#### next.config.ts
```typescript
const nextConfig: NextConfig = {
  output: 'export',        // 启用静态导出
  trailingSlash: true,     // 确保URL以斜杠结尾
  images: {
    unoptimized: true,     // 禁用图片优化（静态导出需要）
  },
};
```

#### _redirects文件
包含所有页面路由的重定向规则，确保子页面可以直接访问。

### 4. 验证部署

部署后验证以下页面可以直接访问：
- https://yoursite.com/grow-a-garden-codes/
- https://yoursite.com/grow-a-garden-wiki/
- https://yoursite.com/grow-garden-Angry-Plant-Event/
- 等等...

### 5. 本地测试

在部署前，可以本地测试：
```bash
cd growagardencalculator-nextjs
npm run build
npx serve out
```

然后访问 http://localhost:3000/grow-a-garden-codes/ 等页面验证路由正常。

## 构建输出结构

成功构建后，`out` 文件夹包含：
- `index.html` - 首页
- `grow-a-garden-codes/index.html` - 各子页面
- `_next/` - Next.js资源文件
- `plant/`, `pet/` 等静态资源文件夹

每个子页面都有独立的HTML文件，可以被搜索引擎正确索引和直接访问。 