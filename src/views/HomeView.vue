<template>
  <!-- Loading -->
  <Loading v-if="isLoading" />
  <h3 v-if="!isLoading" class="text-h5 text-md-h4">Cryptocurrencies you follow</h3>
  <v-divider v-if="!isLoading" class="my-4" />
  <v-row v-if="!isLoading">
    <v-col v-for="(item, index) of currencFollowArr" :key="index" cols="12" sm="8" md="3">
      <v-card class="pa-5" rounded="xl">
        <v-card-title>{{ item.name }} {{ item.pair }}</v-card-title>
        <v-card-actions class="d-flex flex-wrap ga-2 align-center">
          <v-btn
            @click="setUnfollow(item)"
            class="unfollow-btn transition"
            color="red-lighten-2"
            variant="outlined"
            prepend-icon="mdi-minus"
            rounded="xl"
            >Unfollow</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Loading from "../components/Loading.vue";
import store from "../store/pinia";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const _store = store();

const isLoading = ref(false);
const currencFollowArr = ref([]);

const db = getFirestore();
const auth = getAuth();
const usersRef = collection(db, "users");

const getCurrencies = async () => {
  try {
    isLoading.value = true;
    let userId = auth.currentUser.uid;
    const q = await getDocs(usersRef);

    q.docs.forEach((doc) => {
      if (doc.data().userId === userId) {
        currencFollowArr.value.push(doc.data().item);
      }
    });
    isLoading.value = false;
  } catch (error) {
    console.error(error.message);
  }
};

// todo : silme islemi yapılacak
const setUnfollow = (item) => {
  console.log(item);
};

onMounted(() => {
  getCurrencies();
});
</script>
<style scoped></style>
