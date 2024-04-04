<script setup>
import { ref } from "vue";
let randomBook = ref(null);

function getRandomBookNumber() {
  return Math.floor(Math.random() * 66) + 1;
}

const welcomeJSON = ref("");
import axios from "axios";
function callAPIWelcome() {
  randomBook.value = getRandomBookNumber();
  const apiUrl = `https://query.getbible.net/v2/kjv/${randomBook.value} 1:1`;

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
  Bible Verse
  <button
    @click="callAPIWelcome"
    type="button"
    class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    Get Verse
  </button>

  <a
    href="#"
    class="block max-w-sm p-6 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 text-center"
  >
    <h5 class="mb-2 text-2xl font-bold text-gray-900">
      {{ welcomeJSON ? welcomeJSON[`kjv_${randomBook}_1`].verses[0].text : "" }}
    </h5>
    <p class="font-normal text-gray-700">
      {{ welcomeJSON ? welcomeJSON[`kjv_${randomBook}_1`].verses[0].name : "" }}
    </p>
  </a>
</template>
