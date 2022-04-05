import {createRouter, createWebHashHistory} from 'vue-router'

import table from './modules/table'

const routes = [
    table,
    {
        path: '/mine/verification',
        component: () => import('@/views/mine/verification.vue'),
        meta: { transition: 'slide' }
    },
    {
        path:'/mine/password',
        component: () => import('@/views/mine/password.vue'),
        meta: { transition: 'slide' }
    },
    {
        path:'/mine/checkCode',
        component: () => import('@/views/mine/checkCode.vue'),
        meta: { transition: 'slide' }
    },
    {
        path:'/mine/setting',
        component: () => import('@/views/mine/setting.vue'),
        meta: { transition: 'slide' }
    },
    {
        path:'/mine/setting/edit',
        component: () => import('@/views/mine/edit.vue'),
        meta: { transition: 'slide' }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
