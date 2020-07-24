import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vue-material/dist/vue-material.css';
import vueMaterial from 'vue-material';

Vue.use(vueMaterial)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
