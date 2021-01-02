import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./style.scss";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;

Vue.config.productionTip = false;
Vue.mixin({});
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  mounted() {
    SplashScreen.hide();
  }
}).$mount("#app");
