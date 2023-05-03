<template>
  <v-container>
    <MenuPedidosTeste />
    <span>{{ OptionPedidos }}</span>


    <v-row class="mt-12">

      <v-col v-if="OptionPedidos == 1">

        <v-card v-if="qntdpedidos > 0" width="95%" class="bg-brown-lighten-5 ma-auto">

          <v-card theme="dark" flat rounded="0">

            <v-window v-model="onboarding">
              <v-window-item v-for="n in length" :key="`card-${n}`" :value="n">
                <v-card height="200" class="d-flex justify-center align-center">
                  <span class="text-h2">
                    Pedido {{ n }}
                  </span>
                </v-card>
              </v-window-item>
            </v-window>

            <v-card-actions class="justify-space-between">
              <v-btn variant="plain" icon="mdi-chevron-left" hei @click="prev">
              </v-btn>

              <v-item-group v-model="onboarding" class="text-center" mandatory>
                <v-item v-for="n in length" :key="`btn-${n}`" v-slot="{ isSelected, toggle }" :value="n">
                  <v-btn :variant="isSelected ? 'outlined' : 'text'" icon="mdi-record" @click="toggle">

                  </v-btn>
                </v-item>
              </v-item-group>

              <v-btn variant="plain" icon="mdi-chevron-right" @click="next">
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-card>
      </v-col>


      <v-col v-if="OptionPedidos == 2">
        <h1>Histórico De Pedidos</h1>
      </v-col>

    </v-row>
  </v-container>
</template>


<script>
import MenuPedidosTeste from '@/components/MenuPedidosTeste.vue'
import globalVariables from '@/controllers/globalVariables'

export default {
  components: {
    MenuPedidosTeste
  },
  data() {
    return {
      sempedidos: "O histórico está zerado? Isso quer dizer que está na hora de enchermos ele, não é mesmo?!",
      qntdpedidos: 1,
      onboarding: 0,
      length: 10,
      OptionPedidos: globalVariables.btnOptionPedidos
    }
  },
  
  methods: {
    next() {
      this.onboarding = this.onboarding + 1 > this.length
        ? 1
        : this.onboarding + 1
    },
    prev() {
      this.onboarding = this.onboarding - 1 <= 0
        ? this.length
        : this.onboarding - 1
    },
  }
}

</script>



<style>
.slide-x-enter-active,
.slide-x-leave-active {
  transition: transform 0.3s;
}

.slide-x-enter,
.slide-x-leave-to {
  transform: translateX(100%);
}
</style>