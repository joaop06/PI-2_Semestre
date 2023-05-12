<template>
    <main>
        <v-container class="d-flex justify-center mt-12">
            <v-card class="bg-white pa-7" title="Login Admin" height="60vh" width="65%" rounded="xl" :elevation="10"
                variant="outlined">
                <v-text-field label="Login" hint="Digite seu login de administrador"></v-text-field>
                <v-text-field class="mt-5" name="senha" color="white" v-model="password"
                    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append-inner="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'"
                    label="Senha" hint="Digite sua senha de administrador">
                </v-text-field>
                <div class="text-center">
                    <v-dialog v-model="dialog" width="auto">
                        <template v-slot:activator="{ props }">
                            <v-btn color="primary" v-bind="props">
                                Esqueci minha senha
                            </v-btn>
                        </template>

                        <v-card>
                            <v-card-text>
                                Contate o administrador de TI da Rang-On
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" block @click="dialog = false">Fechar</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
                <v-row no-gutters justify="center">
                    <v-btn to="/admin/Itens" class="bg-black ma-8 pl-6 pr-6">Acessar</v-btn>
                </v-row> 
            </v-card>
        </v-container>
    </main>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            showPassword: false,
            dialog: false
        }
    }
}
</script>

<style>
main {
    background-color: #42A5F5;
}
</style>

