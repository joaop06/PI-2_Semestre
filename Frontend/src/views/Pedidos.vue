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



    <v-row>
      <v-card v-if="optionBtn" class="ma-auto mt-12" :elevation="0" color="rgb(0,0,0,0)" width="70%" height="70%">
        <v-card v-for="(pedido, index) in pedidosAndamento" :key="index" class="ma-2 pa-1" border="red"
          rounded="lg" :style="{'border' : 'solid 2px #76FF03'}" :elevation="2">
          <p class="text-h6">Pedido: {{ pedido.numpedido }}</p>
          <span v-for="(produto, index) in JSON.parse(pedido.produtos)" :key="index"> {{ typeof(produto) }} </span>

          
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
    async pedidos() {
      if (this.cliente == null) {
        return 0
      } else {
        const body = {
          cliente: this.cliente
        }
        const response = await apiURL.post('/pedidos/andamento', body)

        if (response.status == 200) {
          console.log(response.data.data)
          console.log(typeof(response.data.data))

          this.pedidosAndamento = response.data.data
        }

      }
    },
    procuraProduto(produto){

      const body = {
        id: produto
      }
      const response = apiURL.get('/pedidos/procuraproduto', body)

      if(response.status == 200){
        const produto = response.data.data
        console.log(produto)
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
