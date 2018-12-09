import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';
import store from './store/store';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: Routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store
})