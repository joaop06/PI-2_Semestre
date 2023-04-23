<template>
  <v-container
  fluid>
    <v-row class="mt-3 pa-5"
    justify="space-between">


      <!-- SACOLA DE PRODUTOS -->
      <v-col cols="3">
        <v-sheet class="pa-3 justify-center text-center"
        color="rgb(255,255,255,0.5)"
        height="75vh"
        width="100%"
        rounded="xl"
        :elevation="8">
          <v-list-item-title class="text-center">
            <span class="text-h6">
              Sacola de Produtos
            </span>
          </v-list-item-title>

          <div class="shadow-invertida pa-1 mt-5 scrollbar-estilo"
          :style="{'height' : '75%', 'max-height': '75%' , 'overflow-y': 'auto', 'border-radius': '8px'}">

            <!-- Itens Adicionados a Sacola-->
            <v-row v-if="total_produtos_sacola !== 0" class="pa-3"
            justify="center"
            :style="{'width': '99%'}">

              <!-- Card do Produto na Sacola -->
              <v-sheet v-for="i in total_produtos_sacola" class="d-flex mt-3 pa-3 justify-space-between align-center"
              :style="{'background-color': '#f1f1f1', 'border': '#FF1744 1px solid'}"
              :key="i"
              rounded="shaped"
              width="90%"
              :elevation="4">

                <div class="d-flex flex-column">

                  <p>Pizza</p>

                  <v-list-item-subtitle class="mt-2">
                    <span>R$ 45,49</span>
                  </v-list-item-subtitle>
                </div>

                <v-btn class="bg-red-accent-3"
                icon="mdi-delete"
                size="40"
                :elevation="0"
                @click="remove_Sacola"></v-btn>
              </v-sheet>
            </v-row>

            <!-- Mensagem de Sacola Vazia-->
            <v-sheet v-else class="d-flex justify-center align-center text-body-1"
            :style="{'background-color': '#ded5d2'}"
            height="100%">
              <p>Sua sacola está vazia!</p>
            </v-sheet>
          </div>



          <!-- Rodapé da Sacola (Total e Botão de Finalizar Pedido)-->
          <v-card class="mt-8 text-start"
          :elevation="0"
          color="rgb(0, 0, 0, 0)"
          width="90%"
          height="3vh">
            <span>Total: R$ <span v-if="total_produtos_sacola !== 0">{{totalSacola}}</span></span>
          </v-card>


          <!-- Botão p/ Finalizar Pedido-->
          <v-btn v-if="total_produtos_sacola !== 0" class="mt-5 bg-red-accent-3"
          justify="center"
            width="90%"
            rounded="lg">
              Finalizar Pedido
          </v-btn>

        </v-sheet>
      </v-col>



      <!-- LISTA DE PRODUTOS (CARDÁPIO) -->
      <v-col class="ma-auto"
      cols="9"
      rounded="xl">
        <v-row
        justify="start">
          <v-col v-for="n in totalProdutos.length" class="d-flex justify-space-around aligin-center"
          :key="n"
          cols="4">

            <v-card color="rgb(0, 0, 0, 0)"
            rounded="lg"
            max-width="600px"
            max-height="400px">

              <v-img v-if="n%2==0" class="image justify-space-between align-end d-flex"
              src="https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/hamburguer2.jpg?raw=true"
              cover>

                <v-card class="d-flex flex-column pa-1"
                color="rgb(0, 0, 0, 0.6)"
                :elevation="0"
                :style="{'justify-content': 'space-around', 'align-content':'flex-end', 'color':'white'}"
                text="">
                  <samp class="text-body-1" :style="{'font-weight': 'bold'}">{{ totalProdutos[n-1] }}</samp>
                  <span class="text-body-2">Hamburguer, Ovo, Tomate, Alface, Cheddar, Presuto...</span>
                </v-card>


                <v-card class="d-flex justify-center align-center"
                color="rgb(0, 0, 0, 0.6)"
                :elevation="0">

                  <v-card class="font-weight-black d-flex justify-center ma-5 pa-1"
                  :key="preco = n + 0.99"
                  color="rgb(255, 255, 255, 0)"
                  :elevation="0">
                    <span :style="{ 'color': 'white', 'font-weight': 'bold'}">R$ {{preco}}</span>
                  </v-card>

                  <v-btn class="ma-4 bg-red-accent-3"
                  rounded="lg"
                  @click="add_Sacola">
                    <v-icon class="mr-2">
                      mdi-shopping-outline
                    </v-icon>
                    Pedir
                  </v-btn>
                </v-card>

              </v-img>

              <v-img v-else class="image justify-space-between align-end d-flex"
              src="https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/pizza2.jpg?raw=true"
              cover>




              <v-card class="d-flex flex-column pa-1"
                color="rgb(0, 0, 0, 0.6)"
                :elevation="0"
                :style="{'justify-content': 'space-around', 'align-content':'flex-end', 'color':'white'}"
                text="">
                  <samp class="text-body-1" :style="{'font-weight': 'bold'}">{{ totalProdutos[n-1] }}</samp>
                  <span class="text-body-2">Hamburguer, Ovo, Tomate, Alface, Cheddar, Presuto...</span>
                </v-card>


                <v-card class="d-flex justify-center align-center"
                color="rgb(0, 0, 0, 0.6)"
                :elevation="0">

                  <v-card class="font-weight-black d-flex justify-center ma-5 pa-1"
                  :key="preco = n + 0.99"
                  color="rgb(255, 255, 255, 0)"
                  :elevation="0">
                    <span :style="{ 'color': 'white', 'font-weight': 'bold'}">R$ {{preco}}</span>
                  </v-card>

                  <v-btn class="ma-4 bg-red-accent-3"
                  rounded="lg"
                  @click="add_Sacola">
                    <v-icon class="mr-2">
                      mdi-shopping-outline
                    </v-icon>
                    Pedir
                  </v-btn>
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
export default {
  data() {
    return {
      totalProdutos: ['Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa'],
      total_produtos_sacola: 0,
      id_produto: 45,
      totalSacola: 125.49,
      cont: 0,




      allData: '',
      query: '',
      sem_produtos: false
    }
  },
  methods: {
/*    fetchData: function(){
      axios.post('../controllers/produtos.js', {
        query: this.query
      }).then(function (response){
        if(response.data.lenght > 0){
          produtos = response.data;
          sem_produtos = false;
        }
        else{
          produtos = '';
          sem_produtos = true;
        }
      })
    },
*/




    add_Sacola: function () {
      this.total_produtos_sacola += 1
    },
    remove_Sacola: function (){
      this.total_produtos_sacola -= 1
    },
  },
/*  created: function(){
    this.fetchData();
  }
*/
}

</script>





<style>
main {
  background-color: #BCAAA4;
}

.shadow-invertida {
  box-shadow: inset 0px 0px 12px rgba(0,0,0,0.6);
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