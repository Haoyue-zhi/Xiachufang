import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import {createPinia} from 'pinia'
import '@/assets/scss/index.scss'
import axios from '@/utils/axios'
import 'virtual:svg-icons-register'
import iconSvg from '@/components/icon-svg/index.vue'
import {vant} from '@/vant-ui'
import 'amfe-flexible'

// 开发环境开启mock
if (process.env.NODE_ENV !== 'production') {
    import('@/mock')
}

const app = createApp(App)
// 初始化pinia
const pinia = createPinia()
// 创建全局组件
app.component('iconSvg', iconSvg)
// 全局引入axios
app.config.globalProperties.$axios = axios

app.use(vant).use(router).use(pinia)

app.mount('#app')
