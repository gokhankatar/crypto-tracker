<template>
  <v-form @submit.prevent="validate" ref="signUpRef" class="w-100 w-md-auto">
    <v-text-field
      v-model="models.fullName"
      :rules="rules.fullName"
      type="text"
      label="Full Name"
      rounded="xl"
      variant="outlined"
      color="amber-darken-4"
      clearable
    />
    <v-text-field
      v-model="models.email"
      :rules="rules.email"
      type="email"
      label="Email"
      variant="outlined"
      rounded="xl"
      color="amber-darken-4"
    />
    <v-text-field
      v-model="models.password"
      :rules="rules.password"
      type="password"
      label="Password"
      variant="outlined"
      rounded="xl"
      color="amber-darken-4"
    />
    <v-btn
      type="submit"
      class="bg-amber-darken-4 border-none"
      rounded="xl"
      variant="outlined"
      block
      >Register</v-btn
    >
    <span
      @click="$router.replace('/signin')"
      class="text d-flex justify-center align-center my-3 cursor-pointer text-caption text-md-subtitle-1"
      >You have already an account ?</span
    >
  </v-form>
</template>
<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, reactive } from "vue";
import store from "../store/pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const _store = store();

const signUpRef = ref(null);
const models = ref({
  fullName: "",
  email: "",
  password: "",
});
const rules = reactive({
  fullName: [
    (v) => !!v || "Full name is required!",
    (v) => (v && v.length > 3) || "Your name must be longer than 3 charachters",
  ],
  email: [(v) => !!v || "Email is required!"],
  password: [
    (v) => !!v || "Password is required!",
    (v) => (v && v.length > 5) || "Password must be longer than 5 charachters",
  ],
});

const auth = getAuth();

const createUser = async () => {
  try {
    const u = await createUserWithEmailAndPassword(
      auth,
      models.value.email,
      models.value.password
    );
    _store.setUserInfo(u.user.uid, models.value.fullName);
    signUpRef.value.reset();
    router.replace("/");
  } catch (error) {
    console.error(error.message);
  }
};

const validate = async () => {
  const { valid } = await signUpRef.value.validate();

  if (valid) {
    createUser();
  }
};
</script>
<style scoped>
.text:hover {
  text-decoration: underline;
}
</style>
