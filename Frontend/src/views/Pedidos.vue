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

    <p v-if="msgLogin !== ''">{{ msgLogin }}</p>
    {{ pedidosAndamento }}

    <!--
[ 
  { 
    "numpedido": 1,
    "id_cliente_fk": 1,
    "id_produtos": "[1]",
    "total": "10.50",
    "statuspedido": "Em Andamento"
  }
]


    -->

    <v-row>
      <v-card v-if="optionBtn" class="ma-auto mt-12" :elevation="0" color="rgb(0,0,0,0)" width="70%" height="70%">
        <v-card v-for="(pedido, index) in pedidosAndamento" :key="index" class="ma-2 pa-1" border="red" rounded="lg"
          :style="{ 'border': 'solid 2px #76FF03' }" :elevation="2">
          <p class="text-h6">Pedido: {{ pedido.numpedido }}</p>

          <p >
            Produtos: {{ pedido.id_produtos }}
          </p>

          <p>Total: {{ parseFloat(pedido.total).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}}</p>

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
      produtosAndamento: [],

      pedidosFinalizados: [],
      produtosFinalizados: [],

      msgLogin: ''

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
    nomeproduto(id_produtos){
      console.log(id_produtos.length)



    }
  },
  mounted() {
    this.pedidosEmAndamento()

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
