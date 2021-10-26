import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from  '@/utils/axios'

const app = createApp(App)
// 全局引入axios
app.config.globalProperties.$axios = axios

app.use(ElementPlus).use(router).use(store).mount('#app')
