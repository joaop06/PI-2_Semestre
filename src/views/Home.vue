<template>
  <v-container fluid>
    <v-row class="mt-3 pa-5" justify="space-between">


      <!-- SACOLA DE PRODUTOS -->
      <v-col cols="3">
        <v-sheet class="pa-3 justify-center text-center" color="rgb(255,255,255,0.5)" height="75vh" width="100%"
          rounded="xl" :elevation="8">
          <v-list-item-title class="text-center">
            <span class="text-h6">
              Sacola de Produtos
            </span>
          </v-list-item-title>

          <div class="shadow-invertida pa-1 mt-5 scrollbar-estilo"
            :style="{ 'height': '75%', 'max-height': '75%', 'overflow-y': 'auto', 'border-radius': '8px' }">

            <!-- Itens Adicionados a Sacola-->
            <v-row v-if="quant_total_sacola.length !== 0" class="pa-3" justify="center" :style="{ 'width': '99%' }">

              <!-- Card do Produto na Sacola -->
              <v-sheet v-for="(produto, index) in quant_total_sacola"
                class="d-flex mt-3 pa-3 justify-space-between align-center"
                :style="{ 'background-color': '#f1f1f1', 'border': '#FF1744 1px solid' }" :key="index" rounded="shaped"
                width="90%" :elevation="4">

                <div class="d-flex flex-column">

                  <p>{{ produto.nome }}</p>

                  <v-list-item-subtitle class="mt-2">
                    <span>{{ produto.preco }}</span>
                  </v-list-item-subtitle>
                </div>

                <v-btn class="bg-red-accent-3" icon="mdi-delete" size="40" :elevation="0"
                  @click="remove_Sacola(index, prdouto)"></v-btn>
              </v-sheet>
            </v-row>

            <!-- Mensagem de Sacola Vazia-->
            <v-sheet v-else class="d-flex justify-center align-center text-body-1"
              :style="{ 'background-color': '#ded5d2' }" height="100%">
              <p>Sua sacola está vazia!</p>
            </v-sheet>
          </div>


          <!-- Rodapé da Sacola (Total e Botão de Finalizar Pedido)-->
          <v-card class="mt-8 text-start" :elevation="0" color="rgb(0, 0, 0, 0)" width="90%" height="3vh">
            <span>Total: R$ <span v-if="quant_total_sacola !== 0">{{ total_ValorSacola }}</span></span>
          </v-card>


          <!-- Botão p/ Finalizar Pedido-->
          <v-btn v-if="quant_total_sacola !== 0" class="mt-5 bg-red-accent-3" justify="center" width="90%" rounded="lg">
            Finalizar Pedido
          </v-btn>

        </v-sheet>
      </v-col>



      <!-- LISTA DE PRODUTOS (CARDÁPIO) -->
      <v-col class="ma-auto" cols="9" rounded="xl">
        <v-row justify="start">
          <v-col v-for="(produto, index) in cardapio" class="d-flex justify-space-around aligin-center" :key="index"
            cols="4">

            <v-card color="rgb(0, 0, 0, 0)" rounded="lg" width="25vw" height="30vh" min-height="200px">

              <v-img class="image justify-space-between align-end d-flex"
                gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,1)" :src="produto.imagem"
                :lazy-src="produto.imagem" cover min-height="200px">
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                  </div>
                </template>

                <v-card color="transparent" :elevation="0">

                  <v-card-title>
                    <span class="text-h6 text-white text-bold">{{ produto.nome }}</span>
                  </v-card-title>
                  <v-card-subtitle class="mt-n3">
                    <span class="text-white">{{ produto.descricao }}</span>
                  </v-card-subtitle>

                  <v-card-text class="my-n4">
                    <v-row justify="space-between" no-gutters>
                      <v-card class="font-weight-black d-flex justify-center ma-5 pa-1" color="rgb(255, 255, 255, 0)"
                        :elevation="0">
                        <span :style="{ 'color': 'white', 'font-weight': 'bold' }">{{ produto.preco }}</span>
                      </v-card>

                      <v-btn class="ma-4 bg-red-accent-3" rounded="lg" @click="add_Sacola(produto)">
                        <v-icon class="mr-2">
                          mdi-shopping-outline
                        </v-icon>
                        Pedir
                      </v-btn>
                    </v-row>
                  </v-card-text>




                </v-card>
              </v-img>
            </v-card>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import produtos from '@/data/cardapio.json'


export default ({
  data() {
    return {
      cardapio: produtos,

      quant_total_sacola: [],
      total_ValorSacola: 0,

    }
  },
  methods: {
    // Adiciona o produto desejado na Sacola de Produtos
    add_Sacola: function (produto) {
      this.quant_total_sacola.splice(0, 0, produto)
      this.total_ValorSacola += produto.preco
    },

    // Remove o item selecionado da Sacola de Produtos
    remove_Sacola: function (index, prdouto) {
      this.quant_total_sacola.splice(index, 1)

    },
  },
})
</script>


<style>
main {
  background-color: #BCAAA4;
}


.shadow-invertida {
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.6);
}

.scrollbar-estilo::-webkit-scrollbar {
  width: 5px;
}

.scrollbar-estilo::-webkit-scrollbar-track {
  background: #d1cbc9;
}

.scrollbar-estilo::-webkit-scrollbar-thumb {
  background: #FF1744;
  border-radius: 3px;
}

.scrollbar-estilo::-webkit-scrollbar-thumb:hover {
  background: #FF1744;
}
</style>