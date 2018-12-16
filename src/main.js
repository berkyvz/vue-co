/* Vendor Libs Begin */
import Vue from 'vue';
/* Vendor Libs End */

/*Custom Configuration Begin */
import router from './routes'
import store from './store/store';
/*Custom Configuration End */

/* Custom Component Begin */
import App from './App.vue';
/* Custom Component End */

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
});