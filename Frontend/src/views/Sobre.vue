<template>
    <v-main class="img-logo">
        <v-row class="my-n12" justify="center">
            <v-col cols="12">
                <v-card class="pa-12 d-flex ma-auto" width="90%" height="85vh" color="rgb(93, 64, 55, 0.8)">
                    <v-col cols="5">
                        <Logo />
                    </v-col>
                    <v-col cols="7">
                        <h1 class="text-white text-h3">Sobre Nós</h1>
                        <p class="text-h6 text-white">
                            Bem-vindo à nossa página "Sobre". Aqui você pode encontrar informações sobre nossa
                            empresa e nossa equipe.
                        </p>
                        <v-card-text>
                            <h2 class="mt-7 text-h5 text-white">Quem somos</h2>
                            <p class="text-brown-lighten-4">
                                Bem-vindo ao Rang-On, uma pizzaria autêntica que oferece uma experiência gastronômica única
                                com nossas
                                deliciosas pizzas, massas saborosas,
                                saladas frescas e sobremesas tentadoras. Nós nos orgulhamos de usar apenas os melhores
                                ingredientes
                                frescos
                                em nossos pratos, para que você
                                possa desfrutar do verdadeiro sabor da Itália em cada mordida.
                            </p>
                            <h2 class="mt-7 text-h5 text-white">Nossa Missão</h2>
                            <p class="text-brown-lighten-4">
                                Estamos animados em anunciar que agora também oferecemos serviços de delivery para que você
                                possa
                                desfrutar
                                da nossa comida em casa ou no escritório.
                                Basta fazer o seu pedido online através do nosso site e nós faremos o resto, entregando a
                                comida quente
                                e
                                deliciosa diretamente na sua porta.
                                Nosso site também é fácil de navegar, permitindo que você encontre nossos pratos facilmente
                                e faça seu
                                pedido rapidamente.
                                Além disso, nosso ambiente é acolhedor e convidativo, perfeito para uma refeição
                                descontraída com amigos
                                e
                                familiares.
                                Nossa equipe de atendimento é simpática e profissional, garantindo que você se sinta
                                bem-vindo e
                                confortável
                                durante a sua visita.
                            </p>
                            <h2 class="mt-7 text-h5 text-white">Nossa Equipe</h2>
                            <p class="text-brown-lighten-4">
                                No Rang-On, acreditamos que a boa comida deve ser compartilhada com todos, e é por isso que
                                nossa equipe
                                se
                                esforça ao máximo
                                para oferecer uma variedade de opções em nosso menu,
                                incluindo opções vegetarianas e veganas. Se você tem alguma restrição alimentar, não hesite
                                em perguntar
                                a
                                nossa equipe, teremos o prazer de ajudá-lo
                                a escolher um prato que atenda às suas necessidades.
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
import Logo from '@/components/Image.vue';

export default {
    components: {
        Logo
    }
}
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