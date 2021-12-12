import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        redirect: 'home',
        children:[
            {
                path: '/home',
                component: () => import('@/views/home/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })


export default router
