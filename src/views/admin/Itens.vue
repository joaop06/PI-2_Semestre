<template>
  <main>
    <v-col cols="3">
      <v-btn @click="() => TogglePopup('buttonTrigger')" class="bg-orange color-white">
              Cadastrar Novo Produto
      </v-btn>
      <div class="popup">
        <popup 
          v-if="popupTriggers.buttonTrigger" 
          :TogglePopup="() => TogglePopup('buttonTrigger')">
          <h2>Novo Item</h2>
          <h3>Nome</h3>
          <v-text-field></v-text-field>
          <h3>Descrição</h3>
          <v-text-field></v-text-field>
          <h3>Ingredientes</h3>
          <v-text-field></v-text-field> 
          <h3>Preço</h3>
          <v-text-field></v-text-field>
          <v-btn class="popup-close" @click ="TogglePopup()">
            Inserir Item
          </v-btn>
        </popup>
      </div>
    </v-col>
    <v-col cols="9" rounded="xl">
      <v-row justify="space-between">
        <v-col v-for="n in 21" :key="n" cols="4">
          <v-card class="bg-blue-lighten-1 pa-5" :id="`${n}`" v-model="id_produto">
            <v-img
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>

            <v-card
              id="produto1"
              class="bg-blue-lighten-1 pa-5"
              :elevation="0"
              :title="`Produto ${n}`"
              :subtitle="`O Produto ${n} contém...`"
              text="descrição complementar">
              
            <div class="d-flex ma-auto" :style="{ 'justify-content': 'space-between' }">
              <v-card :key="preco = n + 0.99" :text="`R$ ${preco}`" width="35%" color="rgb(0, 0, 0, 0)"
                class="font-weight-black" :style="{ 'color': 'white', 'font-weight': 'bold' }"
                :elevation="0"></v-card>

              <v-btn width="50%" class="ma-4 bg-red-darken-4" rounded="lg">
                <v-icon class="mr-2">mdi-shopping-outline</v-icon>
                  Alterar
                </v-btn>
              </div>
            </v-card>
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

  props: ['TogglePopup'],

  setup () {
    const popupTriggers = ref({
      buttonTrigger: false
    })

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]}

    return {
      Popup,
      popupTriggers,
      TogglePopup
    }
  }}

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
</style>
