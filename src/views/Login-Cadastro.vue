<template>
    <v-row>
        <v-col class="d-flex text-center justify-center ma-auto">
            <v-card
                id="login"
                class="bg-brown-lighten-2 ma-7 mt-12 pa-5 pt-12"
                color="red-darken-4"
                width="25vw"
                height="65vh"
                title="Login"
                subtitle="Bem vindo de volta!"
                rounded="xl"
                :elevation="5">
                <v-form action>

                    <v-text-field
                        name="email"
                        type="email"
                        label="E-mail"
                        placeholder="E-mail"
                        >
                    </v-text-field>

                    <v-text-field
                        name="senha"
                        v-model="password"
                        :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append="showPassword = !showPassword"
                        :type="showPassword ? 'text' : 'password'"
                        label="Senha"
                        placeholder="Senha"
                        hint="Digite sua senha para acesar">
                    </v-text-field>

                    <v-btn type="submit" to="/" color="red-darken-4" class="mt-4">Login</v-btn>

                </v-form>
            </v-card>




            <v-card id="cadastro" class="bg-brown-lighten-2 ma-7 mt-12 pa-5 pt-12" color="red-darken-4" width="25vw"
                height="65vh" title="Cadasto" subtitle="Junte-se a nós!" :elevation="5" rounded="xl">
                <v-form>
                    <v-text-field></v-text-field>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
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

