import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./components/app";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});