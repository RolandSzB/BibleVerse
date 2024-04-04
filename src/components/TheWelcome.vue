<script setup>
function getRandomBookNumber() {
  return Math.floor(Math.random() * 66) + 1;
}

import { ref } from "vue";
const welcomeJSON = ref("");
import axios from "axios";
function callAPIWelcome() {
  const randomBook = getRandomBookNumber();
  console.log("RANDOM NUMBER", randomNumber);
  const apiUrl = `https://query.getbible.net/v2/kjv/${randomBook} 1:1`;
  console.log("URL", apiUrl);

  axios({
    method: "GET",
    url: apiUrl,
  }).then((response) => {
    console.log("RESPONSE", response.data);
    welcomeJSON.value = response.data;
    localStorage.setItem("lists", JSON.stringify(response.data));
  });
}
</script>

<template>
  Welcome
  <button
    @click="callAPIWelcome"
    type="button"
    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    Call API Welcome
  </button>

  API RESPONSE
  <h3>{{ welcomeJSON }}</h3>
</template>
