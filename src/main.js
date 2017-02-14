// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store'
import App from './App.vue'

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  store, // inject store to all children
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
