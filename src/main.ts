import { createApp } from "vue";
import App from "@/App.vue";
import "@/style.css";
// router
import router from "@/router/router";
// pinia
import { createPinia } from "pinia";
// quasar
import { Quasar, Notify, Dialog } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const app = createApp(App);

app
  .use(Quasar, {
    plugins: {
      Notify,
      Dialog,
    }, // import Quasar plugins and add here
  })
  .use(router)
  .use(createPinia());

app.mount("#app");
