<template>
    <main>
        <NavbarAdmin />
        <v-row>
            <v-card class="ma-auto mt-12 d-flex" :elevation="0" color="rgb(0,0,0)" width="50%">

                <!---->
                <v-col>
                    <v-card v-for="(pedido, index) in pedidos_gerais" :key="index" class="ma-2 d-flex flex-column"
                        border="red" rounded="lg" :style="{ 'border': 'solid 3px #000000' }" :elevation="2" min-width="40%"
                        max-width="40%">

                        <v-col>
                            <span class="d-flex justify-space-between">
                                <p class="text-h5">Pedido: {{ pedido.num_pedido }}</p>

                                <p class="text-h5">Status: {{ pedido.status_pedido }}</p>
                            </span>
                        </v-col>

                        <v-col class="d-flex justify-space-between my-n5">
                            <v-col cols="10">
                                <p class="ma-2">
                                    <span class="text-h6">Cliente: <span class="text-black">{{ pedido.nome_completo
                                    }}</span></span>
                                </p>
                                <p class="ma-2">
                                    <span class="text-h6">Produtos: <span class="text-black">{{ pedido.list_produtos
                                    }}</span></span>
                                </p>
                                <p class="ml-2 text-h6">Total: <span class="text-black">{{
                                    parseFloat(pedido.total).toLocaleString("pt-BR", {
                                        style: "currency", currency:
                                            "BRL"
                                    }) }}</span></p>
                            </v-col>

                            <v-col>
                                <v-btn class="ma-auto text-red" icon="mdi-close-thick" color="rgb(0,0,0,0)"
                                    :elevation="0"></v-btn>
                            </v-col>
                        </v-col>
                    </v-card>
                </v-col>
            </v-card>
        </v-row>
    </main>
</template>


<script>
import NavbarAdmin from '@/components/NavbarAdmin.vue'
import apiURL from '@/services/apiURL.js'

export default ({
    components: {
        NavbarAdmin
    },
    data() {
        return {
            pedidos_gerais: []
        }
    },
    methods: {
        async pedidosGerais() {
            await apiURL.get('/pedidos-gerais').then(response => {
                console.log(response.data.data[0])
                if (response.data.data.length > 0) {
                    this.pedidos_gerais = response.data.data
                    console.log(this.pedidos_gerais)
                } else {
                    console.log("Não há pedidos no momento")
                }
            })
        }
    },
    mounted() {
        this.pedidosGerais()
    }
})
</script>
