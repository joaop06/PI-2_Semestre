<template>
    <v-container class="d-flex mt-12 pt-12">

        <!--CARD DE LOGIN-->
        <v-sheet id="login" class="bg-brown-lighten-2 ma-auto mt-12 pa-8" width="25vw" rounded="xl" :elevation="7">
            <v-list-item-title class="text-center pt-12">
                <span class="text-h4 font-weight-bold">
                    Login
                </span>
            </v-list-item-title>

            <v-list-subheader class="pb-5 justify-center">
                <span class="text-subtitle-2 text-white">
                    Bem vindo de volta!
                </span>
            </v-list-subheader>


            <v-card width="100%" height="100%" class="pa-6" color="rgb(0,0,0,0)" elevation="0">

                <v-text-field :style="{ 'color': 'white' }" name="email_login" bg-color="rgb(255, 255, 255, 0.2)" type="email"
                    label="E-mail" placeholder="E-mail">
                </v-text-field>

                <v-text-field :style="{ 'color': 'white' }" name="senha_login" bg-color="rgb(255, 255, 255, 0.2)"
                    :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append-inner="showPassword = !showPassword" :type="showPassword ? 'text' : 'password'"
                    label="Senha" placeholder="Senha" hint="Digite sua senha para acessar">
                </v-text-field>

                <v-row no-gutters justify="center" class="mt-6">
                    <v-btn to="/" color="red-darken-4" size="large">
                        Login
                    </v-btn>
                </v-row>
            </v-card>
        </v-sheet>


        <!--CARD DE CADASTRO-->
        <v-sheet id="login" class="bg-brown-lighten-2 ma-auto mt-12 pa-8" width="30vw" rounded="xl" :elevation="7">
            <div class="mt-12">
                <v-list-item-title class="text-center">
                    <span class="text-h4 font-weight-bold">
                        Cadastre-se
                    </span>
                </v-list-item-title>

                <v-list-subheader class="pb-5 justify-center">
                    <span class="text-subtitle-2 text-white">
                        Junte-se a nós!
                    </span>
                </v-list-subheader>


                <v-card width="100%" height="100%" class="pa-2 ma-auto justify-center" color="rgb(0,0,0,0)" elevation="0"
                    max-width="25vw">

                    <v-row class="ma-auto">
                        <v-text-field :style="{ 'color': 'white', 'width': '50%' }" name="nome_completo" color="white"
                            bg-color="rgb(255, 255, 255, 0.2)" type="text" label="Nome Completo"
                            placeholder="Ex: João Silva" class="mr-3"></v-text-field>

                        <v-text-field :style="{ 'color': 'white', 'width': '40%' }" name="cpf"
                            bg-color="rgb(255, 255, 255, 0.2)" label="CPF" placeholder="___.___.___-__"></v-text-field>

                    </v-row>

                    <v-row class="ma-auto">
                        <v-text-field :style="{ 'color': 'white', 'width': '50%' }" name="email_cadastro"
                            bg-color="rgb(255, 255, 255, 0.2)" type="email" label="E-mail"
                            placeholder="Ex: joao_silva@gmail.com" class="mr-3"></v-text-field>

                        <v-text-field :style="{ 'color': 'white', 'width': '40%' }" name="tel"
                            bg-color="rgb(255, 255, 255, 0.2)" label="Celular" placeholder="(__) _____-____"></v-text-field>
                    </v-row>

                    <v-row class="ma-auto">

                        <v-text-field :style="{ 'color': 'white', 'width': '40%' }" name="senha_cadastro"
                            bg-color="rgb(255, 255, 255, 0.2)"
                            :append-inner-icon="showPassword_cadastro ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append-inner="showPassword_cadastro = !showPassword_cadastro"
                            :type="showPassword_cadastro ? 'text' : 'password'" label="Senha" hint="Crie sua senha"
                            class="mr-3"></v-text-field>

                        <v-text-field :style="{ 'color': 'white', 'width': '40%' }" name="senha_cadastro"
                            bg-color="rgb(255, 255, 255, 0.2)"
                            :append-inner-icon="showPassword_cadastro ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append-inner="showPassword_cadastro = !showPassword_cadastro"
                            :type="showPassword_cadastro ? 'text' : 'password'" label="Confirmar Senha"
                            hint="Confirme sua Senha"></v-text-field>
                    </v-row>

                    <!--
                    
                    <v-row class="ma-auto mt-5">
                        <v-text-field
                        :style="{'color': 'white', 'width' : '30%'}"
                        name="cep_cadastro"
                        bg-color="rgb(255, 255, 255, 0.2)"
                        label="CEP"
                        placeholder="_____-___"
                        class="mr-3"
                        ></v-text-field>

                        <v-text-field
                        :style="{'color': 'white', 'width' : '30%'}"
                        name="cidade_cadastro"
                        bg-color="rgb(255, 255, 255, 0.2)"
                        label="Cidade"
                        class="mr-3"
                        ></v-text-field>

                        <v-select
                        :style="{'color': 'white', 'width' : '30%'}"
                        name="estado_cadastro"
                        bg-color="rgb(255, 255, 255, 0.2)"
                        v-model="selecionar_UF"
                        :items="UF"
                        label="Estado"
                        width="10em"
                        ></v-select>
                    </v-row>

                    <v-row class="ma-auto">
                        <v-text-field
                        :style="{'color': 'white', 'width' : '60%'}"
                        name="endereco_cadastro"
                        bg-color="rgb(255, 255, 255, 0.2)"
                        label="Endereço"
                        placeholder="Ex: Rua João Silva"
                        class="mr-3"
                        ></v-text-field>

                        <v-text-field
                        :style="{'color': 'white'}"
                        name="numero_casa_cadastro"
                        bg-color="rgb(255, 255, 255, 0.2)"
                        label="Número"
                        placeholder="N° 0000"
                        ></v-text-field>
                        
                    </v-row>
    -->

                    <v-row no-gutters justify="center" class="mt-6">
                        <v-btn to="/" color="red-darken-4" size="large">
                            Cadastrar
                        </v-btn>
                    </v-row>
                </v-card>
            </div>

        </v-sheet>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            password: '',
            showPassword: false,
            password_cadastro: '',
            showPassword_cadastro: false,
            selecionar_UF: null,
            UF: ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO']
        }
    }
}
</script>


<style>
main {
    background-color: #4E342E;
    background-image: url(../../public/img/Logo_Rang-On.png);
}
</style>