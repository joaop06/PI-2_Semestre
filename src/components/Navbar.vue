<template>
  <v-container>
    <div id="header" class="gb-red">
      <v-app-bar :elevation="2">
        <v-btn value="recent">
          <v-icon>mdi-history</v-icon>

          Recent
        </v-btn>

        <v-btn value="favorites">
          <v-icon>mdi-heart</v-icon>

          Favorites
        </v-btn>

        <v-btn value="nearby">
          <v-icon>mdi-map-marker</v-icon>

          Nearby
        </v-btn></v-app-bar
      >

        <v-btn append-icon="mdi-home" to="/" variant="text" flat>Home</v-btn>
      
      <router-link to="/pedidos"
        ><v-btn append-icon="mdi-history">Pedidos</v-btn></router-link
      >
      <router-link to="/sobre"
        ><v-btn class="bg-green" append-icon="mdi-information"
          >Sobre</v-btn
        ></router-link
      >
      <router-link to="/perfil"
        ><v-btn append-icon="mdi-profile">Perfil</v-btn></router-link
      >
    </div>
  </v-container>
</template>

<script>
</script>