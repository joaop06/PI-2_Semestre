<template>
  <v-container>
    <v-row class="d-flex mt-12 pa-2 bg-brown-lighten-2" justify="space-around" align="center" rounded="lg">
      <v-btn :class="classBtn1" width="45%" height="4vh" @click="mudaOpcaoBtn1">
        Em Andamento
      </v-btn>

      <v-btn :class="classBtn2" width="45%" height="4vh" @click="mudaOpcaoBtn2">
        Histórico de Pedidos
      </v-btn>
    </v-row>

    <p v-if="msgLogin">{{ msgLogin }}</p>









    <v-row>
      <!-- PEDIDOS EM ANDAMENTO -->
      <v-card v-if="optionBtn" class="ma-auto mt-12" :elevation="0" color="rgb(0,0,0,0)" width="70%">
        <v-card v-for="(pedido, index) in pedidosAndamento" :key="index"
          class="ma-2 bg-light-green-lighten-4 d-flex flex-column" border="red" rounded="lg"
          :style="{ 'border': 'solid 3px #1B5E20' }" :elevation="2">

          <v-col>
            <span class="d-flex justify-space-between">
              <p class="text-h5 text-green-darken-4">Pedido: {{ pedido.num_pedido }}</p>

              <p class="text-h5 text-green-darken-4">Status: {{ pedido.status_pedido }}</p>
            </span>
          </v-col>

          <v-col class="d-flex justify-space-between my-n5">
            <v-col cols="10">
              <p class="ma-2">
                <span class="text-h6 text-green-darken-4">Produtos:</span> {{ pedido.list_produtos }}
              </p>
              <p class="ml-2 text-h6 text-green-darken-4">Total: {{ parseFloat(pedido.total).toLocaleString("pt-BR", {
                style: "currency", currency:
                  "BRL"
              }) }}</p>
            </v-col>

            <v-col>
              <v-btn @click="cancelarPedido(pedido.num_pedido)" class="ma-auto text-red" icon="mdi-close-thick"
                color="rgb(0,0,0,0)" :elevation="0"></v-btn>
            </v-col>
          </v-col>

        </v-card>
      </v-card>



      <!-- PEDIDOS FINALIZADOS OU CANCELADOS -->
      <v-card v-else class="ma-auto mt-12" :elevation="0" color="rgb(0,0,0,0)" width="70%" height="70%">
        <v-sheet v-for="(pedido, index) in pedidosFinalizado" :key="index" color="rgb(0,0,0,0)" :elevation="0">

          <v-card v-if="pedido.status_pedido === 'Cancelado'" class="ma-2 pa-2 bg-grey-lighten-4" border="red"
            rounded="lg" :style="{ 'border': 'solid 3px #B71C1C' }" :elevation="2">
            <span class="d-flex justify-space-between ma-2">
              <p class="text-h5 text-grey-darken-3">Pedido: {{ pedido.num_pedido }}</p>

              <p class="text-h5 text-red-darken-4">Status: {{ pedido.status_pedido }}</p>
            </span>

            <p class="ma-2">
              <span class="text-h6 text-grey-darken-3">Produtos:</span> {{ pedido.list_produtos }}
            </p>

            <p class="ml-2 text-h6 text-grey-darken-3">Total: {{ parseFloat(pedido.total).toLocaleString("pt-BR", {
              style: "currency", currency:
                "BRL"
            }) }}</p>
          </v-card>

          <v-card v-else class="ma-2 pa-2 bg-grey-lighten-4" border="red" rounded="lg"
            :style="{ 'border': 'solid 3px #424242' }" :elevation="2">
            <span class="d-flex justify-space-between ma-2">
              <p class="text-h5 text-grey-darken-3">Pedido: {{ pedido.num_pedido }}</p>

              <p class="text-h5 text-grey-darken-3">Status: {{ pedido.status_pedido }}</p>
            </span>

            <p class="ma-2">
              <span class="text-h6 text-grey-darken-3">Produtos:</span> {{ pedido.list_produtos }}
            </p>

            <p class="ml-2 text-h6 text-grey-darken-3">Total: {{ parseFloat(pedido.total).toLocaleString("pt-BR", {
              style: "currency", currency:
                "BRL"
            }) }}</p>
          </v-card>

        </v-sheet>
      </v-card>
    </v-row>



    <v-snackbar v-model="snackbar" top>
      {{ textsnackbar }}

      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Fechar
        </v-btn>
      </template>
    </v-snackbar>

  </v-container>
</template>


<script>
import MenuPedidosTeste from '@/components/MenuPedidosTeste.vue'
import globalVariables from '@/controllers/globalVariables'
import apiURL from '@/services/apiURL'

export default {
  components: {
    MenuPedidosTeste
  },
  data() {
    return {
      cliente: globalVariables.clienteLogado[0].id,
      classBtn1: 'bg-brown-darken-2',
      classBtn2: 'bg-brown-lighten-3',
      optionBtn: true,
      pedidosAndamento: [],
      pedidosFinalizado: [],

      msgLogin: null,
      snackbar: false,
      textsnackbar: ''

    }
  },

  methods: {
    mudaOpcaoBtn1() {
      this.classBtn1 = 'bg-brown-darken-2';
      this.classBtn2 = 'bg-brown-lighten-3';
      this.optionBtn = true;
      this.pedidosEmAndamento()
    },
    mudaOpcaoBtn2() {
      this.classBtn1 = 'bg-brown-lighten-3';
      this.classBtn2 = 'bg-brown-darken-2';
      this.optionBtn = false;
      this.pedidosFinalizados_Cancelados()
    },
    async pedidosEmAndamento() {
      if (this.cliente == null) {
        return this.msgLogin = 'Faça login para ver seus pedidos!'
      } else {

        const body = {
          cliente: this.cliente
        }
        const response = await apiURL.post('/pedidos/andamento', body)

        if (response.status == 200) {
          this.pedidosAndamento = response.data.data
          console.log(this.pedidosAndamento)


        }

      }
    },
    async pedidosFinalizados_Cancelados() {
      if (this.cliente == null) {
        return this.msgLogin = 'Faça login para ver seus pedidos!'
      } else {

        const body = {
          cliente: this.cliente
        }
        const response = await apiURL.post('/pedidos/finalizadosCancelados', body)

        if (response.status == 200) {
          this.pedidosFinalizado = response.data.data
        }

      }
    },
    cancelarPedido(num_pedido) {
      const body = {
        num_pedido: num_pedido
      }

      apiURL.put('/pedidos/cancelarpedido', body).then(response => {
        if (response.status == 200) {
          this.snackbar = true,
            this.textsnackbar = `Pedido ${num_pedido} cancelado.`
          this.classBtn1 = 'bg-brown-lighten-3';
          this.classBtn2 = 'bg-brown-darken-2';
          this.optionBtn = false;
          this.pedidosFinalizados_Cancelados()
        }
      })
    }
  },
  mounted() {
    this.pedidosEmAndamento()
    this.pedidosFinalizados_Cancelados()
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
