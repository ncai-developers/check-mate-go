import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export function load(component){
  return () => System.import(`components/${component}.vue`);
}

export const router =  new VueRouter({
  routes: [
    { path: '/', component: load('Home') },
    { path: '*', redirect: '/' }
  ]
});
