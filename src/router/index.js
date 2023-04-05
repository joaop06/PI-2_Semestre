// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: () => import('@/views/Pedidos.vue'),
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('@/views/Sobre.vue'),
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('@/views/Perfil.vue'),
  },
  
  {
    path: '/admin',
    name: 'Login',
    component: () => import('@/views/admin/Login.vue'),
  },
  {
    path: '/itens',
    name: 'Itens',
    component: () => import('@/views/admin/Itens.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
