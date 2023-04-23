<template>
  <main>
    <v-col cols="3">
      <v-btn @click="() => TogglePopup('buttonTrigger')" class="bg-orange color-white">
        Cadastrar Novo Produto
      </v-btn>
      <div class="popup">
        <popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
          <h2>Novo Item</h2>
          <h3>Nome</h3>
          <v-text-field></v-text-field>
          <h3>Descrição</h3>
          <v-text-field></v-text-field>
          <h3>Ingredientes</h3>
          <v-text-field></v-text-field>
          <h3>Preço</h3>
          <v-text-field></v-text-field>
          <v-btn class="popup-close" @click="TogglePopup()">
            Inserir Item
          </v-btn>
        </popup>
      </div>
    </v-col>
    <v-col cols="9" rounded="xl">
      <v-row justify="space-between">

        <v-col v-for="n in totalProdutos.length" class="d-flex justify-space-around aligin-center" :key="n" cols="4">

          <v-card color="rgb(0, 0, 0, 0)" rounded="lg" max-width="600px" max-height="400px">

            <v-img v-if="n % 2 == 0" class="image justify-space-between align-end d-flex"
              src="https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/hamburguer2.jpg?raw=true" cover>

              <v-card class="d-flex flex-column pa-1" color="rgb(0, 0, 0, 0.6)" :elevation="0"
                :style="{ 'justify-content': 'space-around', 'align-content': 'flex-end', 'color': 'white' }" text="">
                <samp class="text-body-1" :style="{ 'font-weight': 'bold' }">{{ totalProdutos[n - 1] }}</samp>
                <span class="text-body-2">Hamburguer, Ovo, Tomate, Alface, Cheddar, Presuto...</span>
              </v-card>


              <v-card class="d-flex justify-center align-center" color="rgb(0, 0, 0, 0.6)" :elevation="0">

                <v-card class="font-weight-black d-flex justify-center ma-5 pa-1" :key="preco = n + 0.99"
                  color="rgb(255, 255, 255, 0)" :elevation="0">
                  <span :style="{ 'color': 'white', 'font-weight': 'bold' }">R$ {{ preco }}</span>
                </v-card>

                <v-btn class="ma-4 bg-red-accent-3" rounded="lg" @click="editar_produto">
                  <v-icon class="mr-2">
                    mdi-pencil
                  </v-icon>
                  Alterar
                </v-btn>
              </v-card>

            </v-img>

            <v-img v-else class="image justify-space-between align-end d-flex"
              src="https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/pizza2.jpg?raw=true" cover>

              <v-card class="d-flex flex-column pa-1" color="rgb(0, 0, 0, 0.6)" :elevation="0"
                :style="{ 'justify-content': 'space-around', 'align-content': 'flex-end', 'color': 'white' }" text="">
                <samp class="text-body-1" :style="{ 'font-weight': 'bold' }">{{ totalProdutos[n - 1] }}</samp>
                <span class="text-body-2">Hamburguer, Ovo, Tomate, Alface, Cheddar, Presuto...</span>
              </v-card>


              <v-card class="d-flex justify-center align-center" color="rgb(0, 0, 0, 0.6)" :elevation="0">

                <v-card class="font-weight-black d-flex justify-center ma-5 pa-1" :key="preco = n + 0.99"
                  color="rgb(255, 255, 255, 0)" :elevation="0">
                  <span :style="{ 'color': 'white', 'font-weight': 'bold' }">R$ {{ preco }}</span>
                </v-card>

                <v-btn class="ma-4 bg-red-accent-3" rounded="lg" @click="editar_produto">
                  <v-icon class="mr-2">
                    mdi-pencil
                  </v-icon>
                  Alterar
                </v-btn>

              </v-card>

            </v-img>
          </v-card>
        </v-col>



      </v-row>
    </v-col>
  </main>
</template>

<script>
import { ref } from 'vue';
import Popup from '../../components/Popup.vue';
import { trigger } from '@vue/reactivity';

export default {
  data(){
    return{
      totalProdutos: ['Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa','Hamburguer X-Tudo', 'Pizza Portuguesa'],
      
    }
  },

  props: ['TogglePopup'],

  setup() {
    const popupTriggers = ref({
      buttonTrigger: false
    })

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }

    return {
      Popup,
      popupTriggers,
      TogglePopup
    }
  }
}

</script>
<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 1;
  right: 0;
  bottom: 1;
  background-color: rgb(255, 255, 255);
  padding: 80px;
}

main{
  background-color: #adcfeb;
}
</style>
