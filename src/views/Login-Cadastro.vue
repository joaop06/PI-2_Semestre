<template>
    <v-container class="d-flex justify-space-around align-center">
        <v-sheet id="login" class="bg-brown-lighten-2 d-flex flex-column align-center ml-12" width="25vw" height="65vh"
            rounded="xl" :elevation="5">
            <v-list-item-title class="text-center pa-5">
                <span class="text-h4 font-weight-bold">Login</span>
            </v-list-item-title>
            <v-list-subheader>
                <span class="text-subtitle-2 text-white ma-5">Bem vindo de volta!</span>
            </v-list-subheader>


            <v-card width="100%" height="100%" class="pa-6" color="rgb(0,0,0,0)" elevation="0">
                    <v-text-field name="email" color="white" type="email" label="E-mail" placeholder="E-mail"></v-text-field>

                    <v-text-field name="senha" color="white" v-model="password"
                        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append-inner="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'"
                        label="Senha" placeholder="Senha" hint="Digite sua senha para acessar">
                    </v-text-field>

                <v-row no-gutters justify="center" class="mt-6">
                    <v-btn to="/" color="red-darken-4" size="x-large">Login</v-btn>
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
