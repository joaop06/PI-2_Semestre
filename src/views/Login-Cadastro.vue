<template>
    <v-container class="d-flex justify-space-around align-center">
        <v-sheet id="login" class="bg-brown-lighten-2 justify-center ml-12" width="25vw" height="65vh" rounded="xl"
            :elevation="7   ">
            <v-list-item-title class="text-center pa-5">
                <span class="text-h4 font-weight-bold">Login</span>
            </v-list-item-title>
            <v-list-subheader class="mt-0 justify-center text-center">
                <span class="text-subtitle-2 text-white">Bem vindo de volta!</span>
            </v-list-subheader>


            <v-card width="100%" height="100%" class="pa-6" color="rgb(0,0,0,0)" elevation="0">
                <v-text-field name="email" color="white" bg-color="rbg(255, 255, 255, 0.1)" type="email" label="E-mail" placeholder="E-mail"></v-text-field>

                <v-text-field name="senha" color="white" bg-color="rbg(255, 255, 255, 0.1)" v-model="password"
                    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append-inner="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'"
                    label="Senha" placeholder="Senha" hint="Digite sua senha para acessar">
                </v-text-field>

                <v-row no-gutters justify="center" class="mt-6">
                    <v-btn to="/" color="red-darken-4" size="large">Login</v-btn>
                </v-row>
            </v-card>
        </v-sheet>


        <v-sheet id="login" class="bg-brown-lighten-2 justify-center ml-12" width="25vw" height="80%" rounded="xl"
            :elevation="7">
            <v-list-item-title class="text-center pa-5">
                <span class="text-h4 font-weight-bold">Cadastre-se</span>
            </v-list-item-title>
            <v-list-subheader class="mt-0 justify-center text-center">
                <span class="text-subtitle-2 text-white">Junte-se a nós!</span>
            </v-list-subheader>


            <v-card width="100%" height="100%" class="pa-6 justify-center" color="rgb(0,0,0,0)" elevation="0">

                <v-text-field name="email" color="color" bg-color="rgb(255, 255, 255, 0.3)" type="email" variant="solo"></v-text-field>

                <v-text-field name="nome_completo" color="white" bg-color="rgb(255, 255, 255, 0.2)" type="text" variant="solo" label="Nome Completo" input-classes="red--text"></v-text-field>

                <v-text-field name="senha" color="white" bg-color="rgb(255, 255, 255, 0.2)" v-model="password"
                    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append-inner="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'"
                    label="Senha" placeholder="Senha" hint="Digite sua senha para acessar" variant="solo">
                </v-text-field>

                <v-row no-gutters justify="center" class="mt-6">
                    <v-btn to="/" color="red-darken-4" size="large">Cadastrar</v-btn>
                </v-row>
            </v-card>
        </v-sheet>

    </v-container>
</template>


<script>
export default {
    data() {
        return {
            password: '',
            showPassword: false
        }
    }
}
</script>


<style>
.red--text input{
    color: red;
}
</style>