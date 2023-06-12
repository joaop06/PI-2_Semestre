<template>
  <v-container>

    <v-row>

      <v-sheet class="ma-auto d-flex mt-10 pa-10 align-center" color="rgb(141, 110, 99, 0.8)" rounded="lg" width="80%"
        height="80vh">
        <v-col cols="4">
          <v-card class="d-flex flex-column" color="rgb(0,0,0,0)">
            {{ cliente }}
            {{ cliente2 }}
            <v-btn :class="classBtn1" @click="mudaOpcaoBtn1">
              Dados Pessoais
            </v-btn>

            <v-btn :class="classBtn2" class="mt-5" @click="mudaOpcaoBtn2">
              Endereço
            </v-btn>
          </v-card>
        </v-col>

        <v-divider :thickness="3" class="border-opacity-50" color="white" vertical></v-divider>

        <!-- DADOS PESSOAIS -->
        <v-col cols="8">
          <v-card v-if="optionBtn" color="rgb(0,0,0,0)" :elevation="0">
            <v-row class="ma-auto">
              <v-text-field v-model="cliente[0].nome_completo" name="nome_completo" type="text" label="Nome Completo"
                class="mr-8" :style="{ 'color': 'white' }" bg-color="brown-darken-3" placeholder="Ex: João Silva"
                :readonly="true">
              </v-text-field>

              <v-text-field v-model="cliente[0].celular" name="celular" label="Celular" :style="{ 'color': 'white' }"
                bg-color="brown-darken-3" placeholder="(__) _____-____" :readonly="true">
              </v-text-field>

            </v-row>

            <v-row class="ma-auto">
              <v-text-field v-model="cliente[0].email" name="email" type="email" label="E-mail"
                :rules="[requiredCadastro, validEmail]" :style="{ 'color': 'white' }" bg-color="brown-darken-3"
                placeholder="Ex: joao_silva@gmail.com" :readonly="true">
              </v-text-field>
            </v-row>


            <v-row class="ma-auto mt-5">
              <v-btn @click="eventActiveUpdtDataUser()" class="ma-auto bg-red-accent-3" rounded="lg">
                <v-icon class="mr-2">
                  mdi-pencil
                </v-icon>
                Alterar
              </v-btn>
            </v-row>
          </v-card>


          <!-- ENDEREÇO -->
          <v-card v-else color="rgb(0,0,0,0)" :elevation="0">
            <v-row justify="space-between">
              <v-col cols="8">
                <v-text-field v-model="cliente[0].cep" name="cep" label="CEP" :style="{ 'color': 'white' }"
                  bg-color="brown-darken-3" placeholder="_____-___">
                </v-text-field>
              </v-col>
            </v-row>


            <v-row justify="space-between" class="my-n8">
              <v-col cols="8">
                <v-text-field v-model="cliente[0].cidade" name="cidade" label="Cidade" :style="{ 'color': 'white' }"
                  bg-color="brown-darken-3">
                </v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field :style="{ 'color': 'white' }" name="estado" bg-color="brown-darken-3" label="Estado"
                  width="10em" :value="cliente[0].estado">
                </v-text-field>
              </v-col>
            </v-row>

            <v-row justify="space-between" class="my-n8">
              <v-col cols="8">
                <v-text-field v-model="cliente[0].endereco" name="endereco" label="Endereço" :style="{ 'color': 'white' }"
                  bg-color="brown-darken-3" placeholder="Ex: Rua João Silva">
                </v-text-field>
              </v-col>

              <v-col cols="4">
                <v-text-field v-model="cliente[0].numero" name="numero" label="Número" type="number"
                  :style="{ 'color': 'white' }" bg-color="brown-darken-3" placeholder="N° 0000">
                </v-text-field>
              </v-col>

            </v-row>
            <v-row class="ma-auto mt-5">
              <v-btn @click="eventActiveUpdtDataUser()" class="ma-auto bg-red-accent-3" rounded="lg">
                <v-icon class="mr-2">
                  mdi-pencil
                </v-icon>
                Alterar
              </v-btn>
            </v-row>
          </v-card>
        </v-col>
      </v-sheet>
    </v-row>

    <Updt_perfil ref="Updt_perfil" />

  </v-container>
</template>

<script>
import Updt_perfil from '@/components/Updt_perfil.vue';
import apiURL from '@/services/apiURL';
import globalVariables from '@/controllers/globalVariables';

export default {
  components:{
    Updt_perfil
  },
  data() {
    return {
      cliente: globalVariables.clienteLogado,
      cliente2: null,
      classBtn1: 'bg-brown-darken-2',
      classBtn2: 'bg-brown-lighten-3',
      optionBtn: true
    }
  },
  methods: {
    mudaOpcaoBtn1() {
      this.classBtn1 = 'bg-brown-darken-2';
      this.classBtn2 = 'bg-brown-lighten-3';
      this.optionBtn = true;
    },
    mudaOpcaoBtn2() {
      this.classBtn1 = 'bg-brown-lighten-3';
      this.classBtn2 = 'bg-brown-darken-2';
      this.optionBtn = false;
    },
    async findUserData() {
      const id = globalVariables.clienteLogado[0].id
      apiURL.post('/data-user', id).then(response => {
        this.cliente2 = response.data.data
        console.log(this.cliente2)
      })
    },
    async eventActiveUpdtDataUser() {
      this.$refs.Updt_perfil.dialog = true
      this.$refs.Updt_perfil.cliente.id = this.cliente.id
      this.$refs.Updt_perfil.cliente.nome_completo = this.cliente.nome_completo
      this.$refs.Updt_perfil.cliente.celular = this.cliente.celular
      this.$refs.Updt_perfil.cliente.email = this.cliente.email
      this.$refs.Updt_perfil.cliente.cidade = this.cliente.cidade
      this.$refs.Updt_perfil.cliente.estado = this.cliente.estado
      this.$refs.Updt_perfil.cliente.cep = this.cliente.cep
      this.$refs.Updt_perfil.cliente.endereco = this.cliente.endereco
      this.$refs.Updt_perfil.cliente.numero = this.cliente.numero
    },
    validaCEP() {
      this.infoEndereco.cep = this.infoEndereco.cep.replace('-', '').replace(' ', '').replace('.', '')
      if (this.infoEndereco.cep.length == 8) {
        apiViaCEP.get(`${this.infoEndereco.cep}/json`).then(response => {
          this.infoEndereco.cidade = response.data.localidade
          this.infoEndereco.estado = response.data.uf
          this.infoEndereco.endereco = response.data.logradouro
        })
      } else {
        return alert('CEP inválido')
      }

    },
  },
  mounted() {
    this.findUserData()
  }
}
</script>