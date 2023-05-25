<template>
  <v-container>
    <h1>PERFIL</h1>
    <p>{{ cliente }}</p>
  </v-container>
</template>

<script>
import apiURL from '@/services/apiURL';

export default {
  data() {
    return {
      cliente: {}
    }
  },
  methods: {
    findUserData() {
      const body = {
        id: this.$store.state.user.id
      }

      apiURL.get('/perfil', body).then(response => {
        this.cliente = response.data.data;
      })
    }
  },
  mounted() {
    this.findUserData();
  }
}
</script>