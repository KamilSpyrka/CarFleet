import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dayjs from 'dayjs'
import vuelidate from 'vuelidate'
import store from "./store/store";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  dayjs,
  vuelidate,
  render: (h) => h(App),
}).$mount("#app");
