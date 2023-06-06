<template>
    <main>
        <NavbarAdmin />
        <v-row>
            <v-card class="ma-auto mt-12" :elevation="0" color="rgb(0,0,0,0)" width="70%">

                <!--v-for="(pedido, index) in pedidosAndamento" :key="index"-->
                <v-card class="ma-2 bg-light-green-lighten-4 d-flex flex-column" border="red" rounded="lg"
                    :style="{ 'border': 'solid 3px #1B5E20' }" :elevation="2">

                    <v-col>
                        <span class="d-flex justify-space-between">
                            <p class="text-h5 text-green-dar  ken-4">Pedido: </p>

                            <p class="text-h5 text-green-darken-4">Status: </p>
                        </span>
                    </v-col>

                    <v-col class="d-flex justify-space-between my-n5">
                        <v-col cols="10">
                            <p class="ma-2">
                                <span class="text-h6 text-green-darken-4">Produtos:</span>
                            </p>
                            <p class="ml-2 text-h6 text-green-darken-4">Total: </p>
                        </v-col>

                        <v-col>
                            <v-btn class="ma-auto text-red" icon="mdi-close-thick" color="rgb(0,0,0,0)"
                                :elevation="0"></v-btn>
                        </v-col>
                    </v-col>

                </v-card>
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
                if (response.data.data > 0) {
                    this.pedidos_gerais = response.data.data
                } else {
                    console.log("Não há pedidos no momento")
                }
            })
        }
    }
})
</script>
