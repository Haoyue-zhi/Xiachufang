import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons';


export default defineConfig({
  plugins: [
    vue(),
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
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    // 服务器启动时自动在浏览器中打开
    open: true
  },
  // 暂时废弃
  // css: {
  //   //css预处理
  //   preprocessorOptions: {
  //     /*
	// 			引入var.scss全局预定义变量，
	// 			如果引入多个文件，
	// 			可以使用
	// 			'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
	// 			这种格式
	// 			 */
  //     scss: {
  //       additionalData: `@import "@/assets/scss/index.scss";`
  //     }
  //   }
  // }
})