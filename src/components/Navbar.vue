<template>
  <v-app-bar color="brown-darken-2 pa-2" :elevation="5">

    <router-link to="/" tag="div"><v-img
        src="https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/Logo_Rang-On.png?raw=true" width="80"
        height="80"></v-img></router-link>


    <v-col v-if="sessao_user" class="text-right">

      <v-btn to="/pedidos" width="7vw" height="5vh" class="ma-5 bg-red-accent-3" color="white" rounded="shaped"
        :elevation="2" icon>
        <v-icon class="mr-2">mdi-history</v-icon>
        Pedidos
      </v-btn>

      <v-btn to="/sobre" width="7vw" height="5vh" class="ma-5 bg-red-accent-3" color="white" rounded="shaped"
        :elevation="2" icon>
        <v-icon class="mr-2">mdi-information</v-icon>
        Sobre
      </v-btn>

      <v-btn to="/perfil" width="7vw" height="5vh" class="ma-5 bg-red-accent-3" color="white" rounded="shaped"
        :elevation="2" icon>
        <v-icon class="mr-2">mdi-profile</v-icon>
        Perfil
      </v-btn>


      <div>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn color="primary" v-bind="props">
              Activator slot
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" :value="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              v-bind="props"
            >
              Dropdown
            </v-btn>
          </template>
    
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
    




    </v-col>

    <v-col v-else class="text-right">
      <v-btn width="15%" height="5vh" class="ma-5 bg-white font-weight-bold" color="red-accent-3" rounded="shaped"
        :elevation="1" to="/login">
        Entrar
      </v-btn>

      <v-btn width="15%" height="5vh" class="ma-5 bg-white font-weight-bold" color="red-accent-3" rounded="shaped"
        :elevation="1" to="/cadastro">
        Cadastrar
      </v-btn>

    </v-col>
  </v-app-bar>
</template>

<script>
import bd_rangon from '@/data/bd_rangon.json'
import variablesLogin from '@/controllers/globalVariables';

export default {
  data() {
    props: {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ]
    }

    return {
      id_user: 0,
      sessao_user: variablesLogin.sessao_login
    }
  }
}
</script>
