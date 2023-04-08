<template>
  <v-app>
    <v-main>
      <Navbar v-if="!$route.path.includes('admin') && !$route.path.includes('login') && !$route.path.includes('cadastro')"/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  created() {
    // Importa o objeto $route do Vue Router
    const { $route } = this
    console.log($route.path) // Verifica o caminho da rota atual
  }
}
</script>