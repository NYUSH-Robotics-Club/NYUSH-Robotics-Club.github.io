import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * GitHub Pages 是纯静态托管，没有服务端 rewrite。
 * 之前直接访问 /events、/members 这类地址会落到 GitHub 自带的 404 页面
 * （分享出去的链接、刷新页面都会失效）。
 *
 * 把构建产物里的 index.html 复制一份成 404.html 后，未知路径会返回 SPA 外壳，
 * 再由 React Router 按真实路径渲染对应页面。
 */
function spaFallback(): Plugin {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(process.cwd(), 'dist');
      const index = resolve(outDir, 'index.html');
      if (existsSync(index)) {
        copyFileSync(index, resolve(outDir, '404.html'));
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  build: {
    target: 'es2019',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-i18n': ['i18next', 'react-i18next'],
        },
      },
    },
  },
});
