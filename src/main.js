import { createApp } from "vue";
import { createPinia } from "pinia";
import './index.css'
import 'tw-elements';
import urql from "@urql/vue";
import '@fortawesome/fontawesome-free/css/all.min.css'


import App from "./App.vue";
import router from "./router";


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(urql, {
  url: "http://localhost:3000/graphql",
});

app.mount("#app");