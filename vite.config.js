import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons';
import styleImport from 'vite-plugin-style-import';

export default defineConfig({
  plugins: [
    vue(),
    // vant按需引入
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/index`,
        },
      ],
    }),
    viteSvgIcons({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/icons/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  // 文件夹别名 @ 为src目录
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  server: {
    // 服务器启动时自动在浏览器中打开
    open: true
  },
  css: {
    postcss: {
      plugins: [
          require('postcss-pxtorem')({rootValue: 37.5, propList: ['*']})
      ]
    },
  }
})
