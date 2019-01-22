import Vue from 'vue';
import Vuex from 'vuex';
import globalModule from './modules/global';
import itemsModule from './modules/items';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global: globalModule,
    items: itemsModule
  }
});
