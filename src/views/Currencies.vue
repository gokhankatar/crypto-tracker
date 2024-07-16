<template>
  <!-- Loading -->
  <Loading v-if="isLoading" />
  <h3 v-if="!isLoading" class="text-h5 text-md-h4">Cryptocurrencies</h3>
  <v-divider v-if="!isLoading" class="my-4" />
  <v-row v-if="!isLoading">
    <v-col v-for="(item, index) of currencyArr" :key="index" cols="12" sm="8" md="3">
      <v-card class="pa-5" rounded="xl">
        <v-card-title>{{ item.name }} {{ item.pair }}</v-card-title>
        <v-card-actions class="d-flex flex-wrap ga-2 align-center">
          <v-btn
            @click="setFollow(item)"
            class="follow-btn transition"
            color="green-accent-3"
            variant="outlined"
            prepend-icon="mdi-plus"
            rounded="xl"
            >Follow</v-btn
          >
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
import Loading from "../components/Loading.vue";
import { onMounted, ref } from "vue";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore, doc, addDoc } from "firebase/firestore";

const isLoading = ref(false);
const currencyArr = ref([]);

const db = getFirestore();
const colRef = collection(db, "currencies");

const auth = getAuth();

const setFollow = async (item) => {
  try {
    let userId = auth.currentUser.uid;
    let usersRef = collection(db, "users");
    await addDoc(usersRef, {
      userId: userId,
      item:item
    });
  } catch (error) {
    console.error(error.message);
  }
};

const getCurrencies = async () => {
  try {
    isLoading.value = true;
    const q = await getDocs(colRef);
    q.docs.forEach((doc) => {
      currencyArr.value.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    isLoading.value = false;
  } catch (error) {
    console.error(error.message);
  }
};

onMounted(() => {
  getCurrencies();
});
</script>
<style scoped>
.transition {
  transition: all 0.2s ease;
}
.follow-btn:hover {
  border-color: #00e676;
  background-color: #00e676 !important;
  color: #fff !important;
}
.unfollow-btn:hover {
  border-color: #e57373;
  background-color: #e57373 !important;
  color: #fff !important;
}
</style>
