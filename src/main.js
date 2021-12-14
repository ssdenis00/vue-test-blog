import Vue from "vue";
import App from "./components/App/App";
import router from "./router/router";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
