// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/pedidos',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/pedidos',
        name: 'Pedidos',
        component: () => import(/* webpackChunkName: "pedidos" */ '@/views/Pedidos.vue'),
      }
    ]
  },
  {
    path: '/sobre',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/sobre',
        name: 'Sobre',
        component: () => import(/* webpackChunkName: "pedidos" */ '@/views/Sobre.vue'),
      }
    ]
  },
  {
    path: '/perfil',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/perfil',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "pedidos" */ '@/views/Perfil.vue'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
