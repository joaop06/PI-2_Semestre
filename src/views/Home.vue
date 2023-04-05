<template>
  <v-row no-gutters justify="space-between">
    <v-col cols="2" xs="2" sm="2" md="2" lg="3" xl="2" class="ml-8 mr-3 mt-5 pt-12">
      <v-card height="65vh" :elevation="5" rounded="lg" class="pa-5" >
        <v-app-bar-title
          class="text-center mt-10  "
          text="Pedidos em Andamento"
        ></v-app-bar-title>
        <v-row class="mt-10" height="90%" :elevation="0" rounded="xl">
          <v-col>
            <v-card v-if="false" v-for="i in 2" :key="i" cols="12" :title="`Pedido Nº ${i}`" class="mt-3 text-h1" :elevation="3"></v-card>
            
            <div v-else>
              <p>Sua sacola está vazia!</p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col xs="2" sm="2" md="2" lg="8" xl="9" class="mr-8 pa-12" rounded="xl">
      <v-row class="pa-5">
        <v-col v-for="n in 21" :key="n" cols="3">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
          
          <v-card
            id="produto1"
            :elevation="4"
            :title="`Produto ${n}`"
            :subtitle="`O Produto ${n} contém...`"
            text="Props give you an easy interface to display text-only content. They can also be used to easily render images and icons."
          >
          <div class="d-flex align-center justify-space-around ma-auto pa-1">
            <v-card v-if="n%2==0" :key="preco = n+0.99" :title="`R$ ${preco}`" width="35%" :elevation="0"></v-card>
            <v-card v-else :key="preco = n+0.49" :title="`R$ ${preco}`" width="35%" :elevation="0"></v-card>

            <v-btn width="33%" class="ma-4 bg-red-darken-4" rounded="lg">
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

</script>
