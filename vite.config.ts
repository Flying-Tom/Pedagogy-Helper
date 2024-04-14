import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  esbuild: {
    pure: ['console.debug'],
  },
  plugins: [
    monkey({
      entry: 'src/main.ts',
      server: {
        open: false,
      },
      userscript: {
        name: '教学立方作业助手',
        namespace: 'Flying-Tom/PedagogySquare-Helper',
        author: 'Flying-Tom',
        version: '0.0.1',
        description: '提供教学立方作业批改辅助功能',
        license: 'MIT',
        icon: 'https://s21.ax1x.com/2024/04/14/pFvFMHx.png',
        match: [
          'https://teaching.applysquare.com/Client/WeiXin/*', // 0
          'https://teaching.applysquare.com/T/Course/index/cid/*', // 1
        ],
      },
    }),
  ],
});
