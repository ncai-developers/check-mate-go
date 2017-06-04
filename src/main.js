// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes);
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`);
// ==============================

import Vue from 'vue';
import Quasar from 'quasar';
import { router, load } from './router';
import { store } from './store';

Vue.use(Quasar); // Install Quasar Framework

Vue.directive('focused', {
  inserted(el){
    el.focus();
  }
});
Vue.component('my-balance', load('Balance'));
Vue.component('my-product', load('Product'));
Vue.component('my-login', load('Login'));

Quasar.start(() => {
  /* eslint-disable no-new */
  window.app = new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  });
});
