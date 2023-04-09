<template>
  <v-row no-gutters justify="space-between">

    <v-col cols="2" class="mt-12 pt-12 pa-12">
      <v-card width="20vw" height="60vh" class="pa-10">
        <v-sheet>
          <v-list-item-title class="text-center">
            <span class="" color="red">Sacola de Pedidos</span>
          </v-list-item-title>
        </v-sheet>
      </v-card>
    </v-col>

    <!--<v-col v-if="cont_produtos_sacola !== 0" v-for="i in cont_produtos_sacola" :key="i">
      <v-card cols="12" class="mt-3 text-h1 bg-rgb(93, 64, 55, 0.8)" :elevation="3" :title="`Produto Nº ${i}`"></v-card>
    </v-col>
    <div v-else class="bg-blue ma-auto" height="100%" :style="{'width' : '100%', 'text-align' : 'center', 'margin' : 'auto'}">
        <p>Sua sacola está vazia!</p>
    </div>-->

    <v-col cols="9" class="mt-12 pt-12 pa-12" rounded="xl">
      <v-row>
        <v-col v-for="n in 212" :key="n" cols="3">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>

          <v-card id="produto1" class="bg-brown-lighten-1" :elevation="4" :title="`Produto ${n}`"
            :subtitle="`O Produto ${n} contém...`"
            text="Props give you an easy interface to display text-only content. They can also be used to easily render images and icons.">
            
            <v-card v-if="n % 2 == 0" :key="preco = n + 0.99" :text="`R$ ${preco}`" width="35%" color="rgb(0, 0, 0, 0)"
            :elevation="0"></v-card>

            <v-card v-else :key="preco = n + 0.49" :text="`R$ ${preco}`" width="35%" class="font-weight-black" :style="{'color' : 'white', 'font-weight' : 'bold'}" color="rgb(0, 0, 0, 0)" :elevation="0">
              <p class="font-weight-black" :text="`R$ ${preco}`"></p>
            </v-card>

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