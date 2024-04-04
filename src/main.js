import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import "bootstrap-icons/font/bootstrap-icons.css";

app.use(createPinia());
app.use(router);

app.mount("#app");

// const xhttp = new XMLHttpRequest();
// xhttp.open("GET", "http://localhost:3000", true);
// xhttp.send();
// xhttp.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log(this.responseText);
//   }
// };
