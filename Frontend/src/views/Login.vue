<template>
    <v-container class="d-flex mt-12">

        <div class="text-center">
            <v-snackbar v-model="snackbar" :timeout="tempo">
                {{ }}
            </v-snackbar>
        </div>


        <!--CARD DE CADASTRO-->
        <v-sheet id="login" class="ma-auto mt-12 pa-12" color="rgb(93, 64, 55, 0.8)" width="25vw" rounded="xl"
            :elevation="7">

            <!--TÍTULOS-->
            <div>
                <v-list-item-title class="text-center">
                    <span class="text-h4 text-red-accent-3 font-weight-bold" color="rgb(183, 28, 28)">
                        Login
                    </span>
                </v-list-item-title>

                <v-list-item-title class="pb-5 text-center font-weight-bold">
                    <span class="text-subtitle-1 text-white font-weight-bold">
                        Bem vindo de volta!
                    </span>
                </v-list-item-title>
            </div>


            <div class="mt-7">

                <v-card color="rgb(0,0,0,0)" elevation="0" max-width="25vw">

                    <v-row class="ma-auto">
                        <v-text-field v-model="email" name="email" type="email" label="E-mail"
                            :rules="[required, validEmail]" :style="{ 'color': 'white' }" bg-color="rgb(255, 255, 255, 0.5)"
                            placeholder="E-mail">
                        </v-text-field>


                    </v-row>

                    <v-row class="ma-auto">
                        <v-text-field v-model="senha" name="senha" label="Senha" :rules="[required]"
                            :style="{ 'color': 'white' }" bg-color="rgb(255, 255, 255, 0.5)"
                            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append-inner="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'"
                            placeholder="Senha" hint="Digite sua senha">
                        </v-text-field>
                    </v-row>
                </v-card>
            </div>


            <v-row no-gutters justify="center" class="mt-6 d-flex flex-column">
                <v-btn @click="login" color="red-accent-3" size="large" class="ma-auto" max-width="25%">
                    Login
                </v-btn>

                <span class="text-subtitle-1 text-white mt-5 text-center">
                    Ainda não possui cadastro?
                    <router-link to="/cadastro" class="text-center text-decoration-none text-subtitle-1 text-red-accent-3">
                        Cadastre-se
                    </router-link>
                </span>

            </v-row>

        </v-sheet>

        <v-snackbar v-model="snackbar" top>
            {{ textsnackbar }}

            <template v-slot:actions>
                <v-btn color="pink" variant="text" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>



        <Navbarteste ref="Navbar" v-if="false" />
    </v-container>
</template>

<script>
import router from '@/router';
import apiURL from '@/services/apiURL';
import Navbarteste from '@/components/Navbar.vue'
import axios from 'axios';

export default ({
    components: {
        Navbarteste
    },
    data() {
        return {
            password: '',
            showPassword: false,
            email: '',
            senha: '',
            bd_rangon: [],

            snackbar: false,
            textsnackbar: 'testanto'
        }
    },
    methods: {
        required(value) {
            return !!value || 'Este campo é obrigatório'
        },
        validEmail(value) {
            const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return pattern.test(value) || 'Endereço de e-mail inválido'
        },
        clienteLogado() {
            this.$refs.Navbarteste.clienteLogado = true;
        },



        async login() {
            try {
                if (this.email !== '' && this.senha !== '') {

                    const body = {
                        email: this.email,
                        senha: this.senha
                    }

                    axios.post('http://localhost:8080/login', body)
                        .then(response => {
                            if (response.status == 200) {

                                this.clienteLogado()

                                this.textsnackbar = 'Login realizado!'
                                this.snackbar = true
                                router.push('/Home')

                            } else {
                                this.textsnackbar = 'Login e/ou senha inválidos!'
                                this.snackbar = true
                            }

                        })

                } else {
                    this.textsnackbar = 'Preencha todos os campos'
                    this.snackbar = true
                }
            } catch (err) {
                console.log(err)
            }
        }

    },
})


</script>


<style>
main {
    background-color: #BCAAA4;
    background-image: url(https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/Logo_Rang-On.png?raw=true);
    background-size: contain;
    background-position: center;
}
</style>
