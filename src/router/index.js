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
<<<<<<< HEAD
    path: '/itens',
    name: 'Itens',
    component: () => import('@/views/admin/Itens.vue'),
  }
=======
    path: '/login-cadastro',
    name: 'Login-Cadastro',
    component: () => import('@/views/Login-Cadastro.vue'),
  },
>>>>>>> a5cb3215526de44b9962afd3fa1243f3a24fb0e6
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
