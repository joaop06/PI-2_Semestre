<template>
    <v-dialog v-model="dialog" width="70vw" scrim="black">
        <v-card rounded="xl" class="pa-8">
            <v-row no-gutters justify="space-between">
                <h2 class="pl-3 pr-3 pa-2">Novo Item</h2>

                <v-btn icon="mdi-close" variant="icon" @click="close">
                </v-btn>
            </v-row>
            
            <h3 class="pl-3 pr-3">Nome</h3>
            <v-text-field class="my-custom-text-field pl-3 pr-3 "></v-text-field>
            <h3 class="pl-3 pr-3 pt-4S">Descrição</h3>
            <v-text-field class="pl-3 pr-3"></v-text-field>
            <h3 class="pl-3 pr-3">Tipo</h3>
            <v-select class="pl-3 pr-3" chips :items="['Lanche', 'Pizza']"></v-select>
            <h3 class="pl-3 pr-3">Preço</h3>
            <v-text-field class="pl-3 pr-3"></v-text-field>
            <div class="pl-3 pr-3 pb-4">
                <v-btn class="popup-close bg-orange" @click="insert()">
                    Inserir Item
                </v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>


<script>
export default {
    props:{

    },
    data(){
        return{
            dialog: false,
        }
    },
    methods: {
        insert(){
            this.$emit('insert',10),
            this.dialog = false
        },
        close(){
            this.dialog = false
        }
    }
}
</script>

<style></style>