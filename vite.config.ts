import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

/**
 * 应用里的全部路由。新增页面时这里要同步加一条，
 * 否则那个地址在 GitHub Pages 上会返回 404 状态码。
 */
const ROUTES = [
  'about',
  'events',
  'contact',
  'robomaster-team',
  'vex-u-team',
  'wechat-code',
  'past-event-involvementfair',
];

/**
 * GitHub Pages 是纯静态托管，没有服务端 rewrite。
 *
 * 只放一个 404.html 的话，用户能看到页面，但服务器返回的状态码是 404——
 * 搜索引擎会认为 /events、/about 这些页面不存在，等于整站只有首页能被收录。
 *
 * 所以为每条路由生成 dist/<route>/index.html（内容就是 SPA 外壳）。
 * 这样 /about/ 命中的是真实存在的文件，返回 200；/about 会被 Pages
 * 301 到 /about/。未知路径仍然落到 404.html，由 React Router 渲染 404 页。
 *
 * 注意：不能删掉 404.html，也不能把这里换成 Netlify/Vercel 的 rewrite 配置——
 * 那些平台才支持服务端规则，GitHub Pages 不支持。
 */
function spaRoutes(): Plugin {
  return {
    name: 'spa-static-routes',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(process.cwd(), 'dist');
      const index = resolve(outDir, 'index.html');
      if (!existsSync(index)) return;

      for (const route of ROUTES) {
        const target = resolve(outDir, route, 'index.html');
        mkdirSync(dirname(target), { recursive: true });
        copyFileSync(index, target);
      }

      copyFileSync(index, resolve(outDir, '404.html'));
    },
  };
}

export default defineConfig({
  plugins: [react(), spaRoutes()],
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
