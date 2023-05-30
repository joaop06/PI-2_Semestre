<template>
  <v-container>
    <h1>PERFIL</h1>
    <p>{{ cliente }}</p>
  </v-container>
</template>

<script>
import apiURL from '@/services/apiURL';
import globalVariables from '@/controllers/globalVariables'

export default {
  data() {
    return {
      cliente: globalVariables.clienteLogado[0]
    }
  },
  methods: {
    findUserData() {
      const body = {
        id: globalVariables.clienteLogado[0].id
      }

      apiURL.get('/perfil', body).then(response => {
        this.cliente = response.data.data;
      })
    }
  },
  mounted() {
  }
}
</script>