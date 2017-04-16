// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
import { sync } from 'vuex-router-sync';
import Search from './components/Search';

Vue.component('Search', Search);

//Vuex
import {store} from './store';

sync(store, router);

Vue.use(resource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
