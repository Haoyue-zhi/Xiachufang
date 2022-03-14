import {createRouter, createWebHashHistory} from 'vue-router'

import layout from '@/layout/index.vue'

const routes = [
    {
        path: '/',
        component: layout,
        redirect: 'home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue')
            },
            {
                path: '/store',
                component: () => import('@/views/store/index.vue')
            },
            {
                path: '/collect',
                component: () => import('@/views/collect/index.vue')
            },
            {
                path: '/mine',
                component: () => import('@/views/mine/index.vue')
            },
        ]
    },
    {
        path: '/mine/verification',
        component: () => import('@/views/mine/components/verification.vue'),
        meta: { transition: 'slide' }
    },
    {
        path:'/mine/password',
        component: () => import('@/views/mine/components/password.vue'),
        meta: { transition: 'slide' }
    },
    {
        path:'/mine/checkCode',
        component: () => import('@/views/mine/components/checkCode.vue'),
        meta: { transition: 'slide' }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
