import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import Vuedatetime from 'vue-datetime'

Vue.use(VueSweetalert2);
Vue.use(Vuedatetime);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app');
