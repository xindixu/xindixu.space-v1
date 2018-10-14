import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import BootstrapVue from 'bootstrap-vue';
import NowUiKit from './plugins/now-ui-kit';
import VueFullPage from 'vue-fullpage.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './assets/css/fullpage.css';
import 'swiper/dist/css/swiper.css';



Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(NowUiKit);
Vue.use(VueFullPage);
Vue.use(VueAwesomeSwiper);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
