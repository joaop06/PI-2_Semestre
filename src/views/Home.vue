<template>
  <v-container fluid>
    <v-row class="mt-3" justify="space-between">


      <!-- SACOLA DE PRODUTOS -->
      <v-col cols="3">
        <v-sheet height="70vh" class="pa-2 bg-brown-lighten-1" rounded="lg" :elevation="8">
          <v-list-item-title class="text-center">
            <span class="text-h5" color="red">Sacola de Pedidos</span>
          </v-list-item-title>

          <v-row v-if="total_produtos_sacola !== 0">
            <v-sheet v-for="i in total_produtos_sacola" :key="i" cols="12" class="d-flex mt-3 text-body-2" width="100%"
              :style="{ 'justify-content': 'center' }" :elevation="3" :title="`Produto ${i}`">

              <v-list-item-title>
                <span v-bind:title="totalProdutos"></span>
              </v-list-item-title>

              <v-list-item-subtitle>
                <span>R$ 45,49</span>
              </v-list-item-subtitle>
              <v-btn icon="mdi-delete" class="bg-red" :elevation="0"></v-btn>
            </v-sheet>

          </v-row>

          <v-responsive height="100vh" width="100vw" v-else class="align-center">

            <p class="text-center">Sua sacola está vazia!</p>

          </v-responsive>

        </v-sheet>
      </v-col>



      <!-- LISTA DE PRODUTOS (CARDÁPIO) -->
      <v-col cols="9" rounded="xl">
        <v-row justify="space-between">
          <v-col v-for="n in totalProdutos.length" :key="n" cols="4">

            <v-card class="bg-brown-lighten-1 pa-5" :id="`${n}`" v-model="id_produto">
              <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" gradient="to bottom rgb(0, 0, 0, 0.5),rgb(0, 0, 0, 0.5)"></v-img>

              <v-card id="produto1" class="bg-brown-lighten-1" height="50%" :elevation="0"
                :title="`${totalProdutos[n - 1]}`" :subtitle="`${totalProdutos[n - 1]} contém...`"
                text="Teste descrição breve do produto, teste, teste, teste"><!--:text="`${totalProdutos[n][1]}`"-->


                <div class="d-flex ma-auto" :style="{ 'justify-content': 'space-between' }">
                  <v-card :key="preco = n + 0.99" :text="`R$ ${preco}`" width="35%" color="rgb(0, 0, 0, 0)"
                    class="font-weight-black" :style="{ 'color': 'white', 'font-weight': 'bold' }"
                    :elevation="0"></v-card>

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
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      testetotalProdutos: { 'nome_produto': 'Pizza Teste João', 'id': '1' },
      totalProdutos: ['Pizza 4 Queijos', 'Lanche X-Tudo', 'Porção de Batata Frita', 'Lanche À Moda', 'Produto 11', 'Produto 12', 'Produto 13', 'Produto 14', 'Produto 15'],
      total_produtos_sacola: 0,
      id_produto: 45,
      cont: 0
    }
  },
  methods: {
    add_Sacola: function () {
      this.total_produtos_sacola += 1
    }
  },
}

</script>

<style>
main {
  background-color: #BCAAA4;
}
</style>