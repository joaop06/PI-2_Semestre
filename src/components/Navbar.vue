<template>
  <v-app-bar color="brown-darken-2 pa-2" :elevation="5">

    <v-img src="../../public/img/Logo_Rang-On.png" class="v-image__image--blur"></v-img>

    <v-col v-if="false" class="text-right">
      
        <v-btn
          to="/pedidos"
          width="7vw"
          height="5vh"
          class="ma-5 bg-red-accent-3"
          color="white"
          rounded="shaped"
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
          class="ma-5 bg-red-accent-3"
          color="white"
          rounded="shaped"
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
          class="ma-5 bg-red-accent-3"
          color="white"
          rounded="shaped"
          :elevation="2"
          icon
        >
          <v-icon class="mr-2">mdi-account-box</v-icon>
          Perfil
        </v-btn>
    </v-col>

    <v-col v-else class="text-right">
      <v-btn
        width="15%"
        height="5vh"
        class="ma-5 bg-white font-weight-bold"
        color="red-accent-3"
        rounded="shaped"
        :elevation="1"
        to="/login"
      >
        Entrar
      </v-btn>

      <v-btn
        width="15%"
        height="5vh"
        class="ma-5 bg-white font-weight-bold"
        color="red-accent-3"
        rounded="shaped"
        :elevation="1"
        to="/cadastro"
      >
        Cadastrar
      </v-btn>

    </v-col>
  </v-app-bar>
</template>

<script>
</script>
