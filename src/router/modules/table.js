import layout from '@/layout/index.vue'

const table = {
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
}
export default table