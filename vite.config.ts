import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
