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

    {{ pedidosAndamento[0] }}

    <v-row>
      <v-card v-if="optionBtn" class="ma-auto mt-12" :elevation="0" color="rgb(0,0,0,0)" width="70%" height="70%">
        <v-card v-for="(pedido, index) in pedidosAndamento.length" :key="index" class="ma-2 pa-1" border="red" rounded="xl"
          :elevation="2">
          <p class="text-h6">Status: {{ pedido.statuspedido }}</p>
          {{ pedido.produtos[4] }}
          <p v-for="item in pedido.produtos" :key="item"> <span>{{ item.nome }}</span> </p>
        </v-card>

      </v-card>

      <v-card v-else>

      </v-card>
    </v-row>

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
      pedidosFinalizados: []
    }
  },

  methods: {
    mudaOpcaoBtn1() {
      this.classBtn1 = 'bg-brown-darken-2';
      this.classBtn2 = 'bg-brown-lighten-3';
      this.optionBtn = true;
    },
    mudaOpcaoBtn2() {
      this.classBtn1 = 'bg-brown-lighten-3';
      this.classBtn2 = 'bg-brown-darken-2';
      this.optionBtn = false;
    },
    pedidos() {
      if (this.cliente == null) {
        return 0
      } else {
        const body = {
          cliente: this.cliente
        }
        apiURL.post('/pedidos/andamento', body).then(response => {
          
          const listaPedidos = JSON.parse(response.data.data)
          this.pedidosAndamento = listaPedidos
        })
      }
    }

  },
  mounted() {
    this.pedidos()

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
