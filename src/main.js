import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from './router';
import NowUiKit from './plugins/now-ui-kit';
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false;

Vue.use(NowUiKit);
Vue.use(VueFullPage);

import 'bootstrap/dist/css/bootstrap.css'



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
