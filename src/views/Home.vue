<template>
  <v-row no-gutters justify="space-between">

    <v-col cols="2" class="mt-4 ml-5">

      <v-sheet width="25vw" height="70vh" class="pa-2" rounded="lg">

        <v-list-item-title class="text-center">
          <span class="" color="red">Sacola de Pedidos</span>
        </v-list-item-title>


        <v-row v-if="cont_produtos_sacola !== 0">
          <v-sheet v-for="i in cont_produtos_sacola" :key="i" cols="12"
            class="d-flex mt-3 text-body-2 bg-rgb(93, 64, 55, 0.8)" width="100%" :style="{ 'justify-content': 'center' }"
            :elevation="3" :title="`Produto ${i}`">

            <v-list-item-title>
              <span>Produto 1</span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <span>R$ 45,49</span>
            </v-list-item-subtitle>
            <v-btn icon="mdi-delete" class="bg-red" :elevation="0"></v-btn>
          </v-sheet>
        </v-row>


        <v-row v-else class="ma-auto" justify="center" align="center">
          <div class="bg-blue ma-auto" height="100%"
            :style="{ 'width': '100%', 'text-align': 'center', 'margin': 'auto' }">
            <p>Sua sacola está vazia!</p>
          </div>
        </v-row>

      </v-sheet>

    </v-col>


    <v-col cols="9" class="mt-12 pt-12 pa-12" rounded="xl">
      <v-row>
        <v-col v-for="n in 35" :key="n" cols="3" :name="n">

          <v-card class="bg-brown-lighten-1 pa-3">
            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>

            <v-card id="produto1" class="bg-brown-lighten-1" height="50%" :elevation="0" :title="`${totalProdutos[n-1]}`"
              :subtitle="`${totalProdutos[n-1]} contém...`"
              text="Teste descrição breve do produto, teste, teste, teste"><!--:text="`${totalProdutos[n][1]}`"-->


              <div class="d-flex ma-auto" :style="{ 'justify-content': 'space-between' }">
                <v-card :key="preco = n + 0.99" :text="`R$ ${preco}`" width="35%" color="rgb(0, 0, 0, 0)"
                  class="font-weight-black" :style="{ 'color': 'white', 'font-weight': 'bold' }" :elevation="0"></v-card>

                <v-btn width="33%" class="ma-4 bg-red-accent-3" rounded="lg" @click="add_Sacola">
                  <v-icon class="mr-2">
                    mdi-shopping-outline
                  </v-icon>
                  Pedir
                </v-btn>
              </div>
            </v-card>
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
      //totalProdutos: ['Produto 1'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 2'['9,99', 'Descrição produtos pares'], 'Produto 3'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 4'['9,99', 'Descrição produtos pares'], 'Produto 5'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 6'['9,99', 'Descrição produtos pares'], 'Produto 7'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 8'['9,99', 'Descrição produtos pares'], 'Produto 9'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 10'['9,99', 'Descrição produtos pares'], 'Produto 11'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 12'['9,99', 'Descrição produtos pares'], 'Produto 13'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 14'['9,99', 'Descrição produtos pares'], 'Produto 15'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 16'['9,99', 'Descrição produtos pares'], 'Produto 17'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content'], 'Produto 18'['9,99', 'Descrição produtos pares'], 'Produto 19'['4,49', 'Descrição produto ímpar, Props give you an easy interface to display text-only content']],

      totalProdutos: ['Pizza João', 'Pizza 4 Queijos', 'Lanche X-Tudo', 'Porção de Batata Frita', 'Lanche À Moda', 'Produto 11', 'Produto 12', 'Produto 13', 'Produto 14', 'Produto 15'],
      cont_produtos_sacola: 0,
      preco: 45,
      cont: 0
    }
  },
  methods: {
    add_Sacola: function () {
      this.cont_produtos_sacola += 1
    }
  },
}

</script>

<style>
main {
  background-color: #BCAAA4;
}
</style>