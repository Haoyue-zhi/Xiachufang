import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons';
import styleImport from 'vite-plugin-style-import';
import pxtorem from 'postcss-pxtorem'

export default defineConfig({
    base:"./",
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
    css: {
        postcss: {
            plugins: [
                pxtorem({
                    rootValue: 39,
                    propList: ['*']
                })
            ]
        },
    },
    server: {
        // 服务器启动时自动在浏览器中打开
        open: true,
        host: '0.0.0.0'
    },
    build: {
        //生成静态资源的存放路径
        assetsDir: "img",
        //自定义底层的 Rollup 打包配置
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
                assetFileNames: '[ext]/[name]-[hash].[ext]',
            },
        },
        //启用/禁用 brotli 压缩大小报告
        brotliSize: false,
        minify: 'terser',
        // 删除console
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
})
