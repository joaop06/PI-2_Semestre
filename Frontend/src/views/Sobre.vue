<template>
    <v-main class="img-logo">

        <v-row class="pa-12" justify="center">
            <v-col cols="12">
                <v-card class="pa-12" color="rgb(255,255,255,0.3)">
                    <v-col cols="7">
                        <h1 class="text-brown text-h3">Sobre Nós</h1>
                        <p class="text-h6">
                            Bem-vindo à nossa página "Sobre". Aqui você pode encontrar informações sobre nossa
                            empresa e nossa equipe.
                        </p>
                        <v-card-text>
                            <h2 class="mt-7 text-brown">Quem somos</h2>
                            <p>
                                Somos uma pizzaria autêntica que oferece uma experiência gastronômica única com nossas deliciosas pizzas, massas saborosas, saladas frescas e sobremesas tentadoras. Nós nos orgulhamos de usar apenas os melhores ingredientes frescos em nossos pratos, para que você possa desfrutar do verdadeiro sabor da Itália em cada mordida.
                            </p>
                            <h2 class="mt-7 text-brown">Nossa Missão</h2>
                            <p>
                                Nossa missão é oferecer uma experiência de alta qualidade, e estamos animados em anunciar que agora também oferecemos serviços de delivery para que você possa desfrutar da nossa comida em casa ou no escritório. Basta fazer o seu pedido online através do nosso site e nós faremos o resto, entregando a comida quente e deliciosa diretamente na sua porta.
                            </p>
                            <h2 class="mt-7 text-brown">Nossa Equipe</h2>
                            <p>
                                Nossa equipe é composta por chefs especialistas em suas respectivas áreas, prontos para prepararem os melhores pratos para você e sua familia se deliciarem ao máximo!
                            </p>
                        </v-card-text>


                        <v-card class="social-media-card d-flex justify-space-between pa-2" color="rgb(255,255,255,0)"
                            :elevation="0" width="100%">
                            <v-gradient class="instagram-gradient ma-auto" vertical>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <v-avatar size="100" class="social-media-instagram">
                                        <v-icon color="white" size="60" class="icon--black">mdi-instagram</v-icon>
                                    </v-avatar>
                                </a>
                            </v-gradient>

                            <v-gradient class="facebook-gradient ma-auto" vertical>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <v-avatar size="100" class="social-media-facebook">
                                        <v-icon color="white" size="60" class="icon--black">mdi-facebook</v-icon>
                                    </v-avatar>
                                </a>
                            </v-gradient>

                            <v-gradient class="whatsapp-gradient ma-auto" vertical>
                                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                                    <v-avatar size="100" class="social-media-whatsapp">
                                        <v-icon color="white" size="60" class="icon--black">mdi-whatsapp</v-icon>
                                    </v-avatar>
                                </a>
                            </v-gradient>
                        </v-card>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
</script>


<style>
.img-logo {
    background-image: url(https://raw.githubusercontent.com/joaop06/imagens-PI-2_Semestre/main/Logo_Rang-On.png);
    background-size: contain;
    background-position: right;
}


.social-media-instagram {
    background-color: #feda75;
    background-image: linear-gradient(to right, #fa7e1e, #d62976, #962fbf, #4f5bd5, #1e90ff);
}

.instagram-gradient {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.social-media-facebook {
    background-color: #00aced;
    background-image: linear-gradient(to right, #3b5998, #00aced);
}

.facebook-gradient {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}


.social-media-whatsapp {
    background-color: #25D366;
    /* WhatsApp green */
    background-image: linear-gradient(to right, #25D366, #128C7E);
}

.whatsapp-gradient {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
</style>