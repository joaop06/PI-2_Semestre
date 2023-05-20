<template>
  <v-app-bar color="brown-darken-2 pa-2" :elevation="5">

    <router-link to="/" tag="div">
      <v-img src="https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/Logo_Rang-On.png?raw=true" width="80"
        height="80"></v-img>
    </router-link>


    <v-col v-if="clienteLogado" class="d-flex text-right justify-end">

      <v-btn to="/pedidos" width="7vw" height="5vh" class="ma-5 bg-red-accent-3" color="white" rounded="shaped"
        :elevation="2" icon>
        <v-icon class="mr-2">mdi-history</v-icon>
        <p class="text-body-1">Pedidos</p>
      </v-btn>

      <v-btn to="/sobre" width="7vw" height="5vh" class="ma-5 bg-red-accent-3" color="white" rounded="shaped"
        :elevation="2" icon>
        <v-icon class="mr-2">mdi-information</v-icon>
        <p class="text-overline-1">Sobre</p>
      </v-btn>



      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn width="7vw" height="5vh" class="ma-5 bg-red-accent-3" rounded="shaped" :elevation="2" v-bind="props">
            <div>
              <p class="text-button my-n2">Olá, {{ nome }}!</p>
              <p class="text-subtitle-2 text-decoration-underline">Minha conta</p>
            </div>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-btn to="/perfil" width="100%" color="rgb(0,0,0,0)" :elevation="0" rounded="lg" icon>
                <v-icon class="mr-2" color="red-accent-3">mdi-account-box</v-icon>
                <p class="text-button">Perfil</p>
              </v-btn>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <v-btn @click="deslogar" width="100%" color="rgb(0,0,0,0)" :elevation="0" rounded="lg" icon>
                <v-icon class="mr-2" color="red-accent-3">mdi-logout</v-icon>
                <p class="text-button">Sair</p>
              </v-btn>
            </v-list-item-title>
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

export default {
  props: {

  },
  data() {
    return {
      clienteLogado: false,
      cliente: {},
      items: [
        { title: 'Perfil' },
        { title: 'Sair' },
      ],
      locations: [
        'top',
        'bottom',
        'start',
        'end',
        'center',
      ],
      location: 'end',
    }
  },
  methods: {
    deslogar() {
      this.$router.push('/');
      this.sessao_user = !this.sessao_user
      location.reload()
    },
  }
}
</script>
