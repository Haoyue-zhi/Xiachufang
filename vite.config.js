import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


export default defineConfig({
  plugins: [vue()],
  // 文件夹别名 @ 为src目录
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  }
})
