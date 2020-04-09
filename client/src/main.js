import Vue from 'vue';
import App from './App.vue';
import router from './router';

import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-datepicker.min.css";
import "./assets/font-awesome/css/font-awesome.min.css" ;
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/color/default.css" ;



Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  data: {
  },
}).$mount('#my-app-vue');
