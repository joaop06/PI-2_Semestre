<template>
  <v-container>
      <v-bottom-navigation class="bg-#70bdfe" grow mode="shift" >


        <v-btn to="/" variant="text" flat>
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn to="/pedidos" size="small">
          <v-icon>mdi-history</v-icon>
          Pedidos
        </v-btn>

        <v-btn to="/perfil" size="small">
          <v-icon>mdi-account-box</v-icon>
          Perfil
        </v-btn>

      </v-bottom-navigation>
  </v-container>
</template>

<script>
</script>