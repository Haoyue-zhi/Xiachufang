import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from '@/utils/axios'
import 'virtual:svg-icons-register'
import iconSvg from '@/components/icon-svg/index.vue'
import '@/mock'
import { Swiper,SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import * as echarts from 'echarts';

const app = createApp(App)
// 创建iconSvg全局组件
app.component('iconSvg', iconSvg).component('Swiper',Swiper).component('SwiperSlide',SwiperSlide)
// 全局引入axios
app.config.globalProperties.$axios = axios
app.config.globalProperties.$echarts = echarts

app.use(ElementPlus).use(router).use(store).mount('#app')