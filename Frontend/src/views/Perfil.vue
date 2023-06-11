<template>
  <v-container>
    <h1> cliente </h1>

    <v-btn @click="eventActiveUpdtDataUser(cliente)" class="ma-4 bg-red-accent-3" rounded="lg">
      <v-icon class="mr-2">
        mdi-pencil
      </v-icon>
        Alterar
    </v-btn>
    
    <Updt_perfil ref="Updt_perfil"/>

  </v-container>
</template>

<script>
import Updt_perfil from '@/components/Updt_perfil.vue';
import apiURL from '@/services/apiURL';
import globalVariables from '@/controllers/globalVariables';

export default {
  
  components: { Updt_perfil },
  
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

      apiURL.get('/data-user', body).then(response => {
        this.cliente = response.data.data;
      })
    },
    eventActiveUpdtDataUser(){
      this.$refs.Updt_perfil.dialog = true;
      this.$refs.Updt_perfil.cliente.id = this.cliente.id,
      this.$refs.Updt_perfil.cliente.nome_completo = this.cliente.nome_completo,
      this.$refs.Updt_perfil.cliente.celular = this.cliente.celular,
      this.$refs.Updt_perfil.cliente.email = this.cliente.email,
      this.$refs.Updt_perfil.cliente.cidade = this.cliente.cidade,
      this.$refs.Updt_perfil.cliente.estado = this.cliente.estado,
      this.$refs.Updt_perfil.cliente.cep = this.cliente.cep,
      this.$refs.Updt_perfil.cliente.endereco = this.cliente.endereco,
      this.$refs.Updt_perfil.cliente.numero = this.cliente.numero
    }
  },
  mounted() {
  }
}
</script>