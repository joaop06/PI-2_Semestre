<template>

      <v-bottom-navigation class="bg-blue-lighten-2" :elevation="8" grow mode="shift" >


        <v-btn to="/" variant="text" flat>
          <v-icon>mdi-home</v-icon>
          Início
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



    <v-card>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>


</template>

<script>
</script>