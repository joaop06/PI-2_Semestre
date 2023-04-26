<template>
  <h1>PERFIL</h1>

  <v-btn @click="sair">
    Sair
  </v-btn>
</template>

<script>
import bd_rangon from '@/data/bd_rangon.json'

export default {
  data() {
    return {
      user: bd_rangon.clientes[0]
    }
  },
  methods: {
    sair() {
      const sair_user = bd_rangon.clientes[0]
      sair_user.status_logado = !sair_user.status_logado
    }
  }
}
</script>