<template>
  <Navbar/>

  <v-card width="15vw" height="55vh" :elevation="10">
  
    <v-app-bar-title color="blue">Pedidos em Andamento</v-app-bar-title>


  
  </v-card>


</template>

<script>
  import Navbar from '../components/Navbar.vue'
  export default{
    components:{
      Navbar
    }
  }
</script>