<template>
  <v-app :theme="_store.theme">
    <v-main>
      <component :is="$route.meta.layout">
        <router-view />
      </component>
    </v-main>
  </v-app>
</template>

<script setup>
import app from "./db/db.js";
import store from "./store/pinia.js";

const _store = store();
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Andika:ital,wght@0,400;0,700;1,400;1,700&display=swap");

html {
  scrollbar-width: thin;
  scrollbar-color: #ff6f00 #f1f1f1;
  scroll-behavior: smooth;
}

body {
  font-family: "Andika", sans-serif;
  font-weight: 500;
  font-style: normal;
}
</style>
