<template>
  <main>
    <v-card>
      <v-layout>
        <v-navigation-drawer rail permanent style="width: 4vw;" class="bg-red-accent-2">

            <v-btn to="admin/PedidosGerais" icon="mdi-circle" class="" variant="tonal"></v-btn>

            <v-btn to="/admin" variant="tonal" icon="mdi-logout" class=""></v-btn>

        </v-navigation-drawer>

        <v-main>
          <div>
            <v-row class="d-flex pa-7" justify="space-between">
              <v-btn @click="eventActiveNewProducts" class="bg-orange"  :style="{ 'justify-content': 'end' }" prepend-icon="mdi-plus">
                Cadastrar Novo Produto
              </v-btn>
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
                            <v-card class="font-weight-black d-flex justify-center ma-5 pa-1"
                              color="rgb(255, 255, 255, 0)" :elevation="0">
                              <span :style="{ 'color': 'white', 'font-weight': 'bold' }">{{ produto.preco }}</span>
                            </v-card>

                            <v-btn @click="eventActiveUpdtProducts(produto.id)" class="ma-4 bg-red-accent-3" rounded="lg">
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
          </div>
        </v-main>
      </v-layout>
    </v-card>


    <NewProducts ref="NewProducts" />
    <UpdtProducts ref="UpdtProducts" />

  </main>
</template>

<script>
import { ref } from 'vue';
import NewProducts from '@/components/New_product.vue';
import UpdtProducts from '@/components/Updt_product.vue';
import apiURL from '@/services/apiURL';

export default {
  components: {
    NewProducts,
    UpdtProducts
  },
  data() {
    return {
      cardapio: [],

    }
  },
  methods: {
    eventActiveNewProducts() {
      this.$refs.NewProducts.dialog = true;
    },
    eventActiveUpdtProducts(produto_id) {
      this.$refs.UpdtProducts.dialog = true;
      const produto = ''
      this.$refs.UpdtProducts.produto = produto;
    },
    findItensAdmin(){
      apiURL.get('/admin-itens').then(response => {
        this.cardapio = response.data.data
      })
    }
  },
  mounted(){
    this.findItensAdmin()
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
