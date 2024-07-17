<template>
  <!-- Loading -->
  <Loading v-if="isLoading" />
  <h3 v-if="!isLoading" class="text-h5 text-md-h4">Cryptocurrencies</h3>
  <v-divider v-if="!isLoading" class="my-4" />
  <v-row v-if="!isLoading">
    <v-col v-for="(item, index) of currencyArr" :key="index" cols="12" sm="8" md="3">
      <v-card class="card transition cursor-pointer pa-5" rounded="xl">
        <v-card-title class="d-flex justify-space-between"
          ><span class="text-uppercase item item-title">{{ item.name }}</span>
          <span class="item text-blue-grey-darken-1"
            >$ {{ item.pair }}</span
          ></v-card-title
        >
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
        </v-card-actions>
        <v-divider class="my-2" />
        <v-card-subtitle class="text-end font-weight-bold text-green-accent-3"
          >{{ item.price }} $</v-card-subtitle
        >
      </v-card>
    </v-col>
  </v-row>

  <!-- toast -->
  <v-snackbar v-model="isInfo" :color="info.color">{{ info.msg }}</v-snackbar>
</template>
<script setup>
import Loading from "../components/Loading.vue";
import { onMounted, ref } from "vue";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const isInfo = ref(false);
const info = ref({
  color: "",
  msg: "",
});
const isLoading = ref(false);
const currencyArr = ref([]);

const db = getFirestore();
const colRef = collection(db, "currencies");

const auth = getAuth();

const setFollow = async (item) => {
  try {
    let userId = auth.currentUser.uid;
    let usersRef = collection(db, "users");
    const q = query(
      usersRef,
      where("userId", "==", userId),
      where("item.name", "==", item.name),
      where("item.pair", "==", item.pair)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      await addDoc(usersRef, {
        userId: userId,
        item: item,
      });
      isInfo.value = true;
      info.value.msg = "Item followed";
      info.value.color = "success";

      setTimeout(() => {
        isInfo.value = false;
      }, 2000);
    } else {
      isInfo.value = true;
      info.value.msg = "Item already followed";
      info.value.color = "error";

      setTimeout(() => {
        isInfo.value = false;
      }, 2000);
    }
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
.card:hover {
  box-shadow: 0 0 1.5rem #00e676;
  transform: scale(0.9);
}
.card:hover .item {
  color: #00e676 !important;
}
.card:hover .item-title {
  text-decoration: underline;
}
</style>
