import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import api from "./plugins/api";
import prevent from "./plugins/prevent";
import db from "./plugins/db";
import "./style.scss";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;

Vue.use(api);
Vue.use(prevent);
Vue.use(db);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted() {
    SplashScreen.hide();
  }
}).$mount("#app");
