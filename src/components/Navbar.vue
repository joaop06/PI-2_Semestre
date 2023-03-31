<template>
  
  <v-card>
    <v-layout>
      <v-app-bar color="orange-accent-2">

        <v-app-bar-title><router-link to="/">Teste Título</router-link></v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn to="/pedidos" width="10%" class="text-small" color="indigo-darken-3" rounded="sm" icon>
          <v-icon >mdi-history</v-icon>
          Pedidos
        </v-btn>

        <v-btn to="/sobre" width="10%" class="text-small" color="indigo-darken-3" rounded="sm" icon>
          <v-icon>mdi-information</v-icon>
          Sobre
        </v-btn>

        <v-btn to="/perfil" width="10%" class="text-small" color="indigo-darken-3" rounded="sm" icon>
          <v-icon>mdi-account-box</v-icon>
          Perfil
        </v-btn>
      </v-app-bar>


      <v-main>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
</script>