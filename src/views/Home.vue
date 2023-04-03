<template>
  <v-row no-gutters justify="space-between">
    <v-col cols="2" xs="" sm="12" md="5" lg="4" xl="" class="ml-8 mr-5 mt-5 pt-12">
      <v-card height="65vh" :elevation="5" rounded="lg" class="pa-5" >
        <v-app-bar-title
          class="text-center"
          text="Pedidos em Andamento"
        ></v-app-bar-title>
        <div class="body">
          
        </div>
      </v-card>
    </v-col>

    <v-col sm="12" md="7" lg="9" class="mr-8 pa-12" rounded="xl">
      <v-row class="pa-5">
        <v-col v-for="n in 21" :key="n" cols="3">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
          <v-card
            :elevation="4"
            :title="`Produto ${n}`"
            :subtitle="`O Produto ${n} contém...`"
            text="Props give you an easy interface to display text-only content. They can also be used to easily render images and icons."
          >
          <div class="d-flex align-center justify-space-around ma-auto pa-1">
            <v-card v-if="n%2==0" :key="preco = n+0.99" :title="`R$ ${preco}`" width="35%"></v-card>
            <v-card v-else :key="preco = n+0.49" :title="`R$ ${preco}`" width="35%"></v-card>

            <v-btn width="33%" class="ma-4 bg-amber-darken-2" color="indigo-darken-4" rounded="lg">
              <v-icon class="mr-2">mdi-shopping-outline</v-icon>
              Pedir
            </v-btn>
          </div>
        </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.body{
  background: url('../public/img/fundo_navbar.png');

}
</style>