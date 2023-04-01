<template>
  <v-row no-gutters justify="space-between">
    <v-col cols="2" sm="12" md="5">
      <v-card height="65vh" class="mr-10 pa-12" :elevation="8" rounded="lg">
        <v-app-bar-title
          color="red"
          text="Pedidos em Andamento"
        ></v-app-bar-title>
      </v-card>
    </v-col>

    <v-col sm="12" md="7">
      <v-row class="pa-5">
        <v-col v-for="n in 100" :key="n" cols="3">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>
          <v-card
            :elevation="4"
            :title="`Produto ${n}`"
            :subtitle="`O Produto ${n} contém...`"
            text="Props give you an easy interface to display text-only content. They can also be used to easily render images and icons."
          ></v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
};
</script>