<template>
  <v-form @submit.prevent="validate" ref="signInRef" class="w-100 w-md-auto">
    <v-text-field
      v-model="models.email"
      :rules="rules.email"
      type="email"
      label="Email"
      variant="outlined"
      rounded="xl"
      color="green-accent-3"
    />
    <v-text-field
      v-model="models.password"
      :rules="rules.password"
      type="password"
      label="Password"
      variant="outlined"
      rounded="xl"
      color="green-accent-3"
    />
    <v-btn
      type="submit"
      class="bg-green-accent-3 border-none"
      rounded="xl"
      variant="outlined"
      block
      >Login</v-btn
    >
    <span
      @click="$router.replace('/signup')"
      class="text d-flex justify-center align-center my-3 cursor-pointer text-caption text-md-subtitle-1"
      >You don't have an account ?</span
    >
  </v-form>
</template>
<script setup>
import { ref, reactive } from "vue";

const signInRef = ref(null);
const models = ref({
  email: "",
  password: "",
});
const rules = reactive({
  email: [(v) => !!v || "Email is required!"],
  password: [
    (v) => !!v || "Password is required!",
    (v) => (v && v.length > 5) || "Password must be longer than 5 charachters",
  ],
});

const validate = async () => {
  const { valid } = await signInRef.value.validate();

  if (valid) {
    //todo
  }
};
</script>
<style scoped>
.text:hover {
  text-decoration: underline;
}
</style>
