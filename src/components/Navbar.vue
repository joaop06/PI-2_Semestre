<template>
  <v-app-bar color="#533b2d" height="70" :elevation="5">

    <router-link to="/" class="text-decoration-none text-white text-h5 font-italic font-weight-bold ml-12">Rang-On</router-link>

    <v-col v-if="false" class="text-right">
      
        <v-btn
          to="/pedidos"
          width="7vw"
          height="5vh"
          class="ma-5 bg-red-darken-4"
          color="white"
          rounded="sm"
          :elevation="2"
          icon
        >
          <v-icon class="mr-2">mdi-history</v-icon>
          Pedidos
        </v-btn>

        <v-btn
          to="/sobre"
          width="7vw"
          height="5vh"
          class="ma-5 bg-red-darken-4"
          color="white"
          rounded="sm"
          :elevation="2"
          icon
        >
          <v-icon class="mr-2">mdi-information</v-icon>
          Sobre
        </v-btn>

        <v-btn
          to="/perfil"
          width="7vw"
          height="5vh"
          class="ma-5 bg-red-darken-4"
          color="white"
          rounded="sm"
          :elevation="2"
          icon
        >
          <v-icon class="mr-2">mdi-account-box</v-icon>
          Perfil
        </v-btn>
    </v-col>

    <v-col v-else class="text-right">
      <v-btn
        width="7vw"
        height="5vh"
        class="ma-5 bg-white text-body-1"
        color="red-darken-4"
        rounded="sm"
        :elevation="1"
        to="/login-cadastro"
      >
        <v-icon class="mr-2">mdi-login</v-icon>
        Entrar
      </v-btn>

    </v-col>
  </v-app-bar>
</template>

<script>
</script>

