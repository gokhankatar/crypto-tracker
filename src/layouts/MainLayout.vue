<template>
  <v-container class="pa-5 pa-sm-7 pa-md-15">
    <Navbar />
    <slot />
  </v-container>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
</script>
