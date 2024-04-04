<script setup>
import { ref } from "vue";
const welcomeJSON = ref("");
import axios from "axios";
function callAPIWelcome() {
  axios({ method: "GET", url: "http://localhost:3000" }).then(response => {
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
