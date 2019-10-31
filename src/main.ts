import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '../packages/theme/src/index.scss';
import gui from '../packages/index';
Vue.use(gui);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
