<template>
  <v-app>
    <v-main>
      <Navbar ref="Navbar" v-if="!$route.path.includes('admin') && !$route.path.includes('login') && !$route.path.includes('cadastro')"/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'

export default {
  components: {
    Navbar
  },
  data(){
    return{

    }
  },
  created() {
    // Importa o objeto $route do Vue Router
    const { $route } = this
    console.log($route.path) // Verifica o caminho da rota atual
  },
  mounted(){
    if(this.$route.path == '/Home'){
      axios.get('http://localhost:8080/Home')
    }
  }
}
</script>


<style>
main{
    background-color: #BCAAA4;
}
</style>
