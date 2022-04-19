import {createRouter, createWebHashHistory} from 'vue-router'

import table from './modules/table'

const routes = [
    table,
    {
        path: '/mine/verification',
        component: () => import('@/views/mine/verification.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/mine/password',
        component: () => import('@/views/mine/password.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/mine/checkCode',
        component: () => import('@/views/mine/checkCode.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/mine/setting',
        component: () => import('@/views/mine/setting.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/mine/setting/edit',
        component: () => import('@/views/mine/edit.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/mine/setting/editPassword',
        component: () => import('@/views/mine/editPassword.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/mine/setting/address',
        component: () => import('@/views/mine/address.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/mine/setting/editAddress',
        component: () => import('@/views/mine/editAddress.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/menu',
        component: () => import('@/views/menu/index.vue'),
        meta: { transition: 'left' }
    },
    {
        path:'/works',
        component: () => import('@/views/works/index.vue'),
        meta: { transition: 'bottom' }
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
