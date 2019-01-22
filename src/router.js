import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/items',
      name: 'ItemsIndex',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "ItemsIndex" */ './views/items/Index.vue')
    },
    {
      path: '/items/new',
      name: 'ItemsNew',
      component: () =>
        import(/* webpackChunkName: "ItemsNew" */ './views/items/New.vue')
    },
    {
      path: '/item/:id',
      name: 'ItemShow',
      component: () =>
        import(/* webpackChunkName: "ItemShow" */ './views/items/Show.vue')
    }
  ]
});
