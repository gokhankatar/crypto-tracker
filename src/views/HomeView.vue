<template>
  <!-- Loading -->
  <Loading v-if="isLoading" />
  <h3 v-if="!isLoading" class="text-h5 text-md-h4">Cryptocurrencies you follow</h3>
  <v-divider v-if="!isLoading" class="my-4" />
  <v-row v-if="!isLoading && currencFollowArr.length > 0">
    <v-col v-for="(item, index) of currencFollowArr" :key="index" cols="12" sm="8" md="3">
      <v-card class="card transition cursor-pointer pa-5" rounded="xl">
        <v-card-title class="d-flex justify-space-between"
          ><span class="item item-title text-uppercase">{{ item.name }}</span>
          <span class="item text-blue-grey-darken-1"
            >$ {{ item.pair }}</span
          ></v-card-title
        >
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
        <v-divider class="my-2" />
        <v-card-subtitle class="text-end font-weight-bold text-green-accent-3"
          >{{ item.price }} $</v-card-subtitle
        >
      </v-card>
    </v-col>
  </v-row>

  <v-row
    class="my-5 d-flex flex-column align-start ga-2"
    v-if="!isLoading && currencFollowArr.length == 0"
  >
    <h3 class="text-h5 text-sm-h4">You don't have any assets you follow yet.</h3>
    <v-btn
      @click="$router.replace('/currencies')"
      class="follow-btn transition mt-5"
      color="green-accent-3"
      variant="outlined"
      rounded="xl"
      >Start following</v-btn
    >
  </v-row>

  <!-- toast -->
  <v-snackbar v-model="isInfo" :color="info.color">{{ info.msg }}</v-snackbar>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Loading from "../components/Loading.vue";
import store from "../store/pinia";
import { getAuth } from "firebase/auth";
import {
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const _store = store();

const isInfo = ref(false);
const info = ref({
  color: "",
  msg: "",
});
const isLoading = ref(false);
const currencFollowArr = ref([]);

const db = getFirestore();
const auth = getAuth();
const usersRef = collection(db, "users");

// get followed currencies
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

// remove from followList
const setUnfollow = async (item) => {
  try {
    let user = auth.currentUser;
    if (!user) {
      throw new Error("User not authenticated");
    }
    let userId = user.uid;
    const q = query(
      usersRef,
      where("userId", "==", userId),
      where("item.name", "==", item.name),
      where("item.pair", "==", item.pair)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);

      isInfo.value = true;
      info.value.msg = "Item unfollowed";
      info.value.color = "error";

      setTimeout(() => {
        isInfo.value = false;
      }, 2000);
    });

    // update DOM
    currencFollowArr.value = currencFollowArr.value.filter(
      (curr) => !(curr.name === item.name && curr.pair === item.pair)
    );
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
  box-shadow: 0 0 1.5rem #e57373;
  transform: scale(0.9);
}
.card:hover .item {
  color: #e57373 !important;
}
.card:hover .item-title {
  text-decoration: underline;
}
</style>
