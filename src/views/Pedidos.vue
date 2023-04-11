<template>
  <v-row class="mt-10 d-flex flex-column">
    <v-col id="pedidos_andamento" class="" :style="{'height' : '30vh'}">
      <v-card width="85vw" class="bg-red ma-auto" height="30vh">



        <v-card class="bg-brown-lighten-1 pa-3" width="10%">

          <v-card id="produto1" class="bg-brown-lighten-1" height="50%" :elevation="0" title="Produto 1"
            subtitle="Produto 1 contém..."
            text="Teste descrição breve do produto, teste, teste, teste"><!--:text="`${totalProdutos[n][1]}`"-->


            <div class="d-flex ma-auto" :style="{ 'justify-content': 'space-between' }">
              <v-card :key="preco = n + 0.99" :text="`R$ ${preco}`" width="35%" color="rgb(0, 0, 0, 0)"
                class="font-weight-black" :style="{ 'color': 'white', 'font-weight': 'bold' }" :elevation="0"></v-card>

              <v-btn width="33%" class="ma-4 bg-red-accent-3" rounded="lg" @click="add_Sacola">
                <v-icon class="mr-2">
                  mdi-shopping-outline
                </v-icon>
                Pedir
              </v-btn>
            </div>
          </v-card>
        </v-card>




      </v-card>
    </v-col>


    <v-col id="hitorico_pedidos">
      <v-card width="85vw" class="bg-blue ma-auto" height="50vh">
        hitorico_pedidos
      </v-card>
    </v-col>

  </v-row>


</template>


<script>
</script>