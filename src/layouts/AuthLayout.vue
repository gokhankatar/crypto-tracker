<template>
  <Navbar />
  <v-row class="d-flex justify-center align-center fill-height">
    <v-col
      :class="$route.fullPath === '/signup' ? 'wrapper-register' : 'wrapper-login'"
      class="rounded-xl d-flex flex-column flex-md-row align-center"
      cols="12"
      sm="10"
      md="8"
    >
      <RainEffect />
      <div class="form-container mx-auto pa-5">
        <slot />
      </div>
    </v-col>
  </v-row>
</template>
<script setup>
import RainEffect from "../components/RainEffect.vue";
import Navbar from "../components/Navbar.vue";
</script>
<style scoped>
.wrapper-register {
  box-shadow: 0 0 1.5rem #ff6f00;
}

.wrapper-login {
  box-shadow: 0 0 1.5rem #00e676;
}

.form-container {
  width: 90%;
}
</style>
