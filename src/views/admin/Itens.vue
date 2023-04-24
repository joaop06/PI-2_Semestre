<template>
  <main>
    <v-col cols="3">
      <v-btn @click="() => TogglePopup('buttonTrigger')" class="bg-orange color-white">
        Cadastrar Novo Produto
      </v-btn>
      <div class="popup">
        <popup v-if="popupTriggers.buttonTrigger" :TogglePopup="() => TogglePopup('buttonTrigger')">
          <h2 class="pl-3 pr-3 pa-2">Novo Item</h2>
          <h3 class="pl-3 pr-3">Nome</h3>
          <v-text-field class="my-custom-text-field pl-3 pr-3 "></v-text-field>
          <h3 class="pl-3 pr-3 pt-4S">Descrição</h3>
          <v-text-field class="pl-3 pr-3"></v-text-field>
          <h3 class="pl-3 pr-3">Tipo</h3>
          <v-select class="pl-3 pr-3" chips :items="['Lanche', 'Pizza']"></v-select>
          <h3 class="pl-3 pr-3">Preço</h3>
          <v-text-field class="pl-3 pr-3"></v-text-field>
          <div class="pl-3 pr-3 pb-4">
            <v-btn class="popup-close bg-orange" @click="TogglePopup()">
              Inserir Item
            </v-btn>
          </div>
        </popup>
      </div>
    </v-col>
    <v-col cols="9" rounded="xl">
      <v-row justify="space-between">

        <v-col v-for="(produto, index) in cardapio" class="d-flex justify-space-around aligin-center" :key="index"
          cols="4">

          <v-card color="rgb(0, 0, 0, 0)" rounded="lg" max-width="600px" max-height="400px">

            <v-img class="image justify-space-between align-end d-flex" :src="produto.imagem" cover>

              <v-card class="d-flex flex-column pa-1" color="rgb(0, 0, 0, 0.6)" :elevation="0"
                :style="{ 'justify-content': 'space-around', 'align-content': 'flex-end', 'color': 'white' }">
                <span class="text-body-1" :style="{ 'font-weight': 'bold' }">{{ produto.nome }}</span>
                <span class="text-body-2">{{ produto.descricao }}</span>
              </v-card>


              <v-card class="d-flex justify-center align-center" color="rgb(0, 0, 0, 0.6)" :elevation="0">

                <v-card class="font-weight-black d-flex justify-center ma-5 pa-1" color="rgb(255, 255, 255, 0)"
                  :elevation="0">
                  <span :style="{ 'color': 'white', 'font-weight': 'bold' }">{{ produto.preco }}</span>
                </v-card>

                <v-btn class="ma-4 bg-red-accent-3" rounded="lg" @click="add_Sacola(produto)">
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
import produtos from '@/controllers/cardapio.json';

export default {
  data() {
    return {
      cardapio: produtos,
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
  background-color: white;
  margin: 70px 20px 70px 0px;
}

.my-custom-text-field {
  height: 60px;
  width: 280px;
}

main {
  background-color: #adcfeb;
}
</style>
