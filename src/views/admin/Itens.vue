<template>
  <main>
    <v-row class="d-flex pa-7" justify="space-between">
      <v-btn @click="eventActiveNewProducts" class="bg-orange color-white" :style="{ 'justify-content': 'end' }">
        Cadastrar Novo Produto
      </v-btn>
      <v-btn to="/admin">Sair</v-btn>
    </v-row>



    <v-col cols="12" rounded="xl">
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
                        mdi-pencil
                      </v-icon>
                      Alterar
                    </v-btn>
                  </v-row>
                </v-card-text>




              </v-card>
            </v-img>
          </v-card>

        </v-col>
      </v-row>
    </v-col>

    <NewProducts ref="NewProducts" @insert="teste($event)" />
  </main>
</template>


<script>
import { ref } from 'vue';
import { trigger } from '@vue/reactivity';
import produtos from '@/data/cardapio.json';
import NewProducts from '@/components/New_product.vue'

export default {
  components: {
    NewProducts
  },
  data() {
    return {
      cardapio: produtos,
    }
  },
  methods: {
    eventActiveNewProducts() {
      this.$refs.NewProducts.dialog = true;
    },
    teste(valor) {
      console.log(valor)
    }
  }
}


</script>
<style lang="scss" scoped>
.my-custom-text-field {
  height: 60px;
  width: 280px;
}

main {
  background-color: #adcfeb;
}
</style>
