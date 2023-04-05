// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  // Rotas Cliente
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
    path: '/login-cadastro',
    name: 'Login-Cadastro',
    component: () => import('@/views/Login-Cadastro.vue'),
  },

  // Rotas Admin
  {
    path: '/admin',
    name: 'Admin_Login',
    component: () => import('@/views/admin/Login.vue'),
  },
  {
    path: '/admin/Home',
    name: 'Admin_Home',
    component: () => import('@/views/admin/Home.vue')
  },
  {
    path: '/admin/Itens',
    name: 'Admin_Itens',
    component: () => import('@/views/admin/Itens.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
