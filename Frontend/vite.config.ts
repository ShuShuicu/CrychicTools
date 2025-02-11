// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      // 自定义选项，确保这里配置正确
      // 例如：可以指定入口路径等
      pagesDir: 'src/pages', // 如果有自定义页面目录
    }),
  ],
});