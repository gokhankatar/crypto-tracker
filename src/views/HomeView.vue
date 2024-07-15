<template>
  <div lass="bg-primary pa-10">
    <h3 class="bg-primary">Home</h3>
    <h5 class="text-subtitle-1">{{ _store.getUserInfo }}</h5>
  </div>
</template>
<script setup>
import store from "../store/pinia";

const _store = store();
</script>
<style scoped></style>
