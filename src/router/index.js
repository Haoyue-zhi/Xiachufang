import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'example',
        component: () => import('@/views/example.vue')
    },
    {
        path:'/swiper',
        component: () => import('@/views/swiper.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })


export default router