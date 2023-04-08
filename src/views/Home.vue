<template>
  <v-row no-gutters justify="space-between">
    <v-col xs="2" sm="2" md="2" lg="3" xl="2" cols="2" class="ml-8 mr-3 mt-5 pt-12">
      <v-card height="65vh" :elevation="5" rounded="lg" class="pa-5">
        <v-app-bar-title class="text-center mt-10  " text="Pedidos em Andamento"></v-app-bar-title>
        <v-row class="mt-10" height="90%" :elevation="0" rounded="xl">
          <v-col v-if="cont_produtos_sacola !== 0" v-for="i in cont_produtos_sacola" :key="i">
            <v-card cols="12" class="mt-3 text-h1" :elevation="3" :title="`Produto Nº ${i}`"></v-card>
          </v-col>
          <div v-else>
              <p>Sua sacola está vazia!</p>
          </div>
        </v-row>
      </v-card>
    </v-col>

    <v-col xs="2" sm="2" md="2" lg="8" xl="9" class="mr-8 pa-12" rounded="xl">
      <v-row class="pa-5">
        <v-col v-for="n in 212" :key="n" cols="3">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>

          <v-card id="produto1" class="bg-brown-lighten-1" :elevation="4" :title="`Produto ${n}`"
            :subtitle="`O Produto ${n} contém...`"
            text="Props give you an easy interface to display text-only content. They can also be used to easily render images and icons.">
            
            <v-card-text v-if="n % 2 == 0" :key="preco = n + 0.99" :text="`R$ ${preco}`" width="35%" color="rgb(0, 0, 0, 0)"
            :elevation="0"></v-card-text>

            <v-card-text v-else :key="preco = n + 0.49" :text="`R$ ${preco}`" width="35%" class="red--text" :style="{'color' : 'red'}" :elevation="0">
            </v-card-text>

            <v-btn width="33%" class="ma-4 bg-red-accent-3" rounded="lg" @click="addProdutos_Sacola">
              <v-icon class="mr-2">
                mdi-shopping-outline
              </v-icon>
              Pedir
            </v-btn>

          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      cont_produtos_sacola: 0,
    }
  },
  methods: {
    addProdutos_Sacola: function () {
      this.cont_produtos_sacola += 1
    }
  },
}

</script>

<style>
main {
  background-color: #BCAAA4;
}

v-card {
  color: white;
}
</style>