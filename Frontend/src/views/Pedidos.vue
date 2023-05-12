<template>

  <v-row class="mt-10 d-flex flex-column">

    <v-col id="pedidos_andamento" class="" :style="{'height' : '30vh'}">

        <v-card class="bg-brown-lighten-2 pa-2 d-flex justify-center" width="100%">

          <v-card id="produto1" class="bg-brown-darken-1 d-flex flex-column align-center" height="80%" width="50%" :elevation="0">

            <div class="d-flex flex-column align-center" :style="{ 'justify-content': 'space-between' }">
              <h2>Pedidos</h2>
              <p v-if="qntdpedidos === 0"> {{ sempedidos }} </p>
            </div>

          </v-card>

      </v-card>

    </v-col>

    <v-col id="hitorico_pedidos">

      <v-card v-if="qntdpedidos > 0" width="95%" class="bg-brown-lighten-5 ma-auto">
      
        <v-card theme="dark" flat rounded="0">
          
          <v-window  v-model="onboarding">
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

  </v-row>

</template>


<script>

export default {
  data() {
    return { 
      sempedidos: "O histórico está zerado? Isso quer dizer que está na hora de enchermos ele, não é mesmo?!",
      qntdpedidos: 1,
      onboarding: 0,
      length: 10,
    }
  },

  methods: {
      next () {
        this.onboarding = this.onboarding + 1 > this.length
          ? 1
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 <= 0
          ? this.length
          : this.onboarding - 1
      },
    }
}

</script>