<template>
  <v-app-bar class="d-flex justify-space-between align-center px-5 px-sm-15">
    <div
      @click="goToHome"
      class="logo cursor-pointer d-flex align-center justify-center ga-2"
    >
      <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"
        :width="30"
      />
      <span class="text-subtitle-1 text-md-h5 font-weight-bold">Crypto Tracker</span>
    </div>

    <v-responsive />

    <div class="actions d-flex ga-3 justify-center align-center">
      <span
        v-if="isUser"
        @click="goToCurrencies"
        :class="_store.isActivePage === 'currencies' ? 'activeItem' : ''"
        class="list-item transition rounded-lg pa-2 text-subtitle-1 cursor-pointer"
        >Currencies</span
      >
      <span
        @click="goToAuth"
        v-if="!isUser"
        :class="_store.isActivePage === 'auth' ? 'activeItem' : ''"
        class="list-item transition rounded-lg pa-2 text-subtitle-1 cursor-pointer"
        >Register / Login</span
      >
      <span
        v-if="isUser"
        @click="logOut"
        class="list-item transition rounded-lg pa-2 text-subtitle-1 cursor-pointer"
        >Logout</span
      >

      <v-icon
        @click="_store.changeTheme"
        class="mode-icon transition cursor-pointer"
        :icon="_store.theme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
      />
    </div>
  </v-app-bar>
  <slot />
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import store from "../store/pinia";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const _store = store();
const router = useRouter();
const isUser = ref(false);

const goToHome = () => {
  _store.setHomePage();
  router.replace("/");
};

const goToAuth = () => {
  _store.setAuthPage();
  router.replace("/signup");
};

const goToCurrencies = () => {
  _store.setCurrenciesPage();
  router.replace("/currencies");
};

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("LOGIN OLMUS", user);
    isUser.value = true;
  } else {
    console.log("KULLANICI YOK", user);
    isUser.value = false;
  }
});

const logOut = async () => {
  try {
    await signOut(auth);
    router.replace("/signin");
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<style scoped>
.transition {
  transition: all 0.2s ease;
}
.list-item:hover {
  background-color: #ff6f003a;
}
.mode-icon:hover {
  transform: rotate(360deg);
  color: #ff6f00;
}
.activeItem {
  background-color: #ff6f00 !important;
  color: #fff !important;
}
</style>
