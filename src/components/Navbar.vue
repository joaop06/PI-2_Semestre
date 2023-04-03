<template>
  <v-app-bar color="amber-lighten-1" height="75" :elevation="3">
    <v-app-bar-title>
      <v-row no-gutters>
        <v-img src="../../public/img/Logo_Rang-On2.png" height="75" justify="start"></v-img>
      </v-row>

    </v-app-bar-title>

    <div v-if="true" class="d-flex justify-space-between mr-16 pr-16">
      <v-btn
        to="/pedidos"
        width="33%"
        class="ma-5 bg-amber-darken-2"
        color="indigo-darken-4"
        rounded="sm"
        :elevation="2"
        icon
      >
        <v-icon>mdi-history</v-icon>
        Pedidos
      </v-btn>

      <v-btn
        to="/sobre"
        width="33%"
        class="ma-5 bg-amber-darken-2"
        color="indigo-darken-4"
        rounded="sm"
        :elevation="2"
        icon
      >
        <v-icon>mdi-information</v-icon>
        Sobre
      </v-btn>

      <v-btn
        to="/perfil"
        width="33%"
        class="ma-5 bg-orange-lighten-1"
        color="indigo-darken-4"
        rounded="sm"
        :elevation="2"
        icon
      >
        <v-icon>mdi-account-box</v-icon>
        Perfil
      </v-btn>
    </div>

    <div v-else class="d-flex justify-space-between mr-16 pr-16">
      <v-btn
        width="50%"
        class="ma-5 bg-indigo-accent-3"
        color="orange-lighten-1"
        rounded="sm"
        :elevation="1"
      >
        Login
      </v-btn>

      <v-btn
        width="50%"
        class="ma-5 bg-indigo-accent-3"
        color="orange-lighten-1"
        rounded="sm"
        :elevation="1"
      >
        Cadastrar-se
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
</script>