<template>
    <v-container class="d-flex justify-center">
        <v-sheet id="login" class="bg-brown-lighten-2 ma-7 mt-12 pa-5 pt-12 d-flex flex-column align-center" width="25vw"
            height="65vh" rounded="xl" :elevation="5">
            <v-list bg-color="brown-lighten-2" height="30%">
                <v-list-item-title class="text-center">
                    <span class="text-h4 font-weight-bold">Login</span>
                </v-list-item-title>
                <v-list-subheader>
                    <span class="text-subtitle-2 text-white">Bem vindo de volta!</span>
                </v-list-subheader>
            </v-list>

            <v-card width="100%" height="100%   " class="pa-5 mt-12" color="rgb(0,0,0,0)" elevation="0">
                <v-form>
                    <v-text-field name="email" color="white" type="email" label="E-mail" placeholder="E-mail">
                    </v-text-field>

                    <v-text-field name="senha" color="white" v-model="password"
                        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append-inner="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'"
                        label="Senha" placeholder="Senha" hint="Digite sua senha para acesar">
                    </v-text-field>
                </v-form>

                <v-row no-gutters justify="center" class="mt-6">
                    <v-btn to="/" color="red-darken-4" size="large">Login</v-btn>
                </v-row>
            </v-card>
        </v-sheet>


        <v-sheet id="login" class="bg-brown-lighten-2 ma-7 mt-12 pa-5 pt-12 d-flex flex-column align-center" width="30vw"
            height="65vh" rounded="xl" :elevation="5">
            <v-list bg-color="brown-lighten-2" height="30%">
                <v-list-item-title class="text-center">
                    <span class="text-h4 font-weight-bold">Cadastro</span>
                </v-list-item-title>
                <v-list-subheader>
                    <span class="text-subtitle-1 text-white">Junte-se a nós!</span>
                </v-list-subheader>
            </v-list>

            <v-card width="100%" height="100%   " class="pa-5 mt-12" color="rgb(0,0,0,0)" elevation="0">
                <v-form>
                    <v-text-field name="email" color="white" type="email" label="E-mail" placeholder="E-mail">
                    </v-text-field>

                    <v-text-field name="senha" color="white" v-model="password"
                        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append-inner="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'"
                        label="Senha" placeholder="Senha" hint="Digite sua senha para acesar">
                    </v-text-field>
                </v-form>

                <v-row no-gutters justify="center" class="mt-6">
                    <v-btn to="/" color="red-darken-4" size="large">Login</v-btn>
                </v-row>
            </v-card>
        </v-sheet>



        <v-card id="cadastro" class="bg-brown-lighten-2 ma-7 mt-12 pa-5 pt-12" color="red-darken-4" width="25vw"
            height="65vh" title="Cadasto" subtitle="Junte-se a nós!" :elevation="5" rounded="xl">
            <v-form>
                <v-text-field></v-text-field>
            </v-form>
        </v-card>
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
