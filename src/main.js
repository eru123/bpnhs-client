import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./style.scss";
import { Plugins } from "@capacitor/core";
const { SplashScreen } = Plugins;
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  timeout: false,
  hideProgressBar: true,
};

Vue.use(Toast, options);
Vue.config.productionTip = false;
Vue.mixin({});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  mounted() {
    SplashScreen.hide();
  },
}).$mount("#app");
