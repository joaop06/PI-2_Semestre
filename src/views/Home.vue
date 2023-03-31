<template>
  <Navbar/>
<v-app>
  <v-layout>
    <v-main>
      <v-container class="d-flex">
        <v-card width="50vw" height="65vh" :elevation="10">
          <v-app-bar-title color="red" text="Pedidos em Andamento"></v-app-bar-title>
        </v-card>


        <v-row>
          <v-col v-for="n in 14" :key="n" cols="4" max-width="50vw">
            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
            <v-card :elevation="4" :title="`Produto ${n}`" :subtitle="`O Produto ${n} contém...`"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</v-app>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  export default{
    components:{
      Navbar
    }
  }
</script>