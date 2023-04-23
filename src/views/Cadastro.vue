<template>
    <v-container class="d-flex mt-12">

        <!--CARD DE CADASTRO-->
        <v-sheet id="login" class="ma-auto mt-12 pa-12" color="rgb(93, 64, 55, 0.8)" width="60vw" rounded="xl"
            :elevation="7">

            <!--TÍTULOS-->
            <div>
                <v-list-item-title class="text-center">
                    <span class="text-h4 text-red-accent-3 font-weight-bold" color="rgb(183, 28, 28)">
                        Cadastre-se
                    </span>
                </v-list-item-title>

                <v-list-item-title class="pb-5 text-center font-weight-bold">
                    <span class="text-subtitle-1 text-white font-weight-bold">
                        Junte-se a nós!
                    </span>
                </v-list-item-title>
            </div>

            <v-row justify="space-around">
                <v-list-item-title>
                    <span class="text-subtitle-1 text-white font-weight-bold">
                        Informações Pessoais
                    </span>
                </v-list-item-title>

                <v-list-item-title>
                    <span class="text-body-1 text-white font-weight-bold">
                        Informações de Endereço
                    </span>
                </v-list-item-title>
            </v-row>

            <div class="d-flex mt-7">

                <!--INFORMAÇÕES PESSOAIS-->
                <div :style="{ 'width': '50%' }" class="ma-auto mt-5" align="center">

                    <v-card color="rgb(0,0,0,0)" elevation="0" max-width="25vw">

                        <v-row class="ma-auto">
                            <v-text-field :style="{ 'color': 'white', 'width': '50%' }" name="nome_completo"
                                bg-color="rgb(255, 255, 255, 0.5)" type="text" label="Nome Completo"
                                placeholder="Ex: João Silva" class="mr-3"></v-text-field>

                            <v-text-field :style="{ 'color': 'white', 'width': '40%' }" name="cpf"
                                bg-color="rgb(255, 255, 255, 0.5)" label="CPF" placeholder="___.___.___-__"></v-text-field>
                        </v-row>

                        <v-row class="ma-auto">
                            <v-text-field :style="{ 'color': 'white', 'width': '50%' }" name="email_cadastro"
                                bg-color="rgb(255, 255, 255, 0.5)" type="email" label="E-mail"
                                placeholder="Ex: joao_silva@gmail.com" class="mr-3"></v-text-field>

                            <v-text-field :style="{ 'color': 'white', 'width': '40%' }" name="tel"
                                bg-color="rgb(255, 255, 255, 0.5)" label="Celular"
                                placeholder="(__) _____-____"></v-text-field>
                        </v-row>


                        <v-row class="ma-auto">
                            <v-text-field :style="{ 'color': 'white', 'width': '40%' }" name="senha_cadastro"
                                bg-color="rgb(255, 255, 255, 0.5)"
                                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append-inner="showPassword = !showPassword"
                                :type="showPassword ? 'text' : 'password'" label="Senha" hint="Crie sua senha"
                                class="mr-3"></v-text-field>

                            <v-text-field :style="{ 'color': 'white', 'width': '40%' }" name="senha_cadastro"
                                bg-color="rgb(255, 255, 255, 0.5)"
                                :append-inner-icon="showPassword_confirmar ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append-inner="showPassword_confirmar = !showPassword_confirmar"
                                :type="showPassword_confirmar ? 'text' : 'password'" label="Confirmar Senha"
                                hint="Confirme sua Senha"></v-text-field>
                        </v-row>
                    </v-card>
                </div>

                <!--INFORMAÇÕES DE ENDEREÇO-->
                <div :style="{ 'width': '50%' }" class="ma-auto mt-5" align="center">

                    <v-card color="rgb(0,0,0,0)" elevation="0" max-width="25vw">
                        <v-row class="ma-auto">
                            <v-text-field :style="{ 'color': 'white', 'width': '30%' }" name="cep_cadastro"
                                bg-color="rgb(255, 255, 255, 0.5)" label="CEP" placeholder="_____-___"
                                class="mr-3"></v-text-field>

                            <v-text-field :style="{ 'color': 'white', 'width': '30%' }" name="cidade_cadastro"
                                bg-color="rgb(255, 255, 255, 0.5)" label="Cidade" class="mr-3"></v-text-field>

                            <v-select :style="{ 'color': 'white', 'width': '30%' }" name="estado_cadastro"
                                bg-color="rgb(255, 255, 255, 0.5)" v-model="selecionar_UF" :items="UF" label="Estado"
                                width="10em" valu="SP"></v-select>
                        </v-row>

                        <v-row class="ma-auto">
                            <v-text-field :style="{ 'color': 'white', 'width': '60%' }" name="endereco_cadastro"
                                bg-color="rgb(255, 255, 255, 0.5)" label="Endereço" placeholder="Ex: Rua João Silva"
                                class="mr-3"></v-text-field>

                            <v-text-field :style="{ 'color': 'white' }" name="numero_casa_cadastro"
                                bg-color="rgb(255, 255, 255, 0.5)" label="Número" placeholder="N° 0000"></v-text-field>
                        </v-row>
                    </v-card>
                </div>
            </div>

            <v-row no-gutters justify="center" class="mt-6 d-flex flex-column">
                <v-btn to="/login" color="red-accent-3" size="large" class="ma-auto" max-width="25%">
                    Cadastrar
                </v-btn>

                <span class="text-subtitle-1 text-white mt-5 text-center">
                    Já possui cadastro?
                    <router-link to="/login" class="text-center text-decoration-none text-subtitle-1 text-red-accent-3">
                        Entre
                    </router-link>
                </span>

            </v-row>

        </v-sheet>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            password: '',
            showPassword: false,
            showPassword_confirmar: false,
            selecionar_UF: null,
            UF: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RR', 'RO', 'RJ', 'RN', 'RS', 'SC', 'SP', 'SE', 'TO'],

        }
    }
}
</script>


<style>
div.v-application__wrap {
    background-color: #BCAAA4;
    background-image: url(https://github.com/joaop06/imagens-PI-2_Semestre/blob/main/Logo_Rang-On.png?raw=true);
    background-size: contain;
    background-position: center;
}</style>