<template>
  <v-app>
    <v-main>
      <Navbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>


<style>
router-view{
  background: url('../public/img/fundo_navbar.png');

}
</style>