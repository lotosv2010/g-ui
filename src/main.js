import Vue from "vue";
import App from "./App.vue";
import gui from "./packages";

Vue.config.productionTip = false;

Vue.use(gui);

new Vue({
  render: h => h(App)
}).$mount("#app");
