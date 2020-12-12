import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: false,
    compact: false,
  },
  dva: {
    immer: true,
    hmr: false,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
