import '@babel/polyfill';
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import './plugins/axios'
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
    store.dispatch('global/updateError', false, null)
    store.dispatch('global/updateLoading', true)
    next()
})
