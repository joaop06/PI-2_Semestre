<template>
    <v-col xs="2" sm="2" md="2" lg="8" xl="9" class="mr-8 pa-12" rounded="xl">
        <v-row class="pa-5">
            <v-col v-for="n in 21" :key="n" cols="3">
            <v-img
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
            
            <v-card
                id="produto1"
                :elevation="4"
                :title="`Produto ${n}`"
                :subtitle="`O Produto ${n} contém...`"
                text="Props give you an easy interface to display text-only content. They can also be used to easily render images and icons."
            >
            <div class="d-flex align-center justify-space-around ma-auto pa-1">
                <v-card v-if="n%2==0" :key="preco = n+0.99" :title="`R$ ${preco}`" width="35%" :elevation="0"></v-card>
                <v-card v-else :key="preco = n+0.49" :title="`R$ ${preco}`" width="35%" :elevation="0"></v-card>

                <v-btn width="33%" class="ma-4 bg-amber-darken-2" color="indigo-darken-4" rounded="lg">
                <v-icon class="mr-2">mdi-shopping-outline</v-icon>
                Pedir
                </v-btn>
            </div>
            </v-card>  
            </v-col>
        </v-row>
    </v-col>
</template>