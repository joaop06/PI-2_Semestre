<template>
  <Navbar/>
<v-app>
  <v-layout>
      <v-main class="d-flex pa-10">
        <v-card width="80vw" height="65vh" class="mr-10 pa-12" :elevation="8" rounded="lg">
          <v-app-bar-title color="red" text="Pedidos em Andamento"></v-app-bar-title>
        </v-card>

        <v-row class="pa-5">
          <v-col v-for="n in 28" :key="n" cols="3">

            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
            <v-card :elevation="4" :title="`Produto ${n}`" :subtitle="`O Produto ${n} contém...`" text="Props give you an easy interface to display text-only content. They can also be used to easily render images and icons."></v-card>

          </v-col>
        </v-row>
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