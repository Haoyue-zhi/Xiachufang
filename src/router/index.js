import { createRouter, createWebHashHistory } from 'vue-router'

import layout from '@/layout/index.vue'

const routes = [
    {
        path: '/',
        component: layout,
        redirect: 'home',
        children:[
            {
                path: '/home',
                component: () => import('@/views/home/index.vue')
            },
            {
                path: '/store',
                component: () => import('@/views/home/index.vue')
            },
            {
                path: '/collect',
                component: () => import('@/views/home/index.vue')
            },
            {
                path: '/mine',
                component: () => import('@/views/mine/index.vue')
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
  })


export default router
