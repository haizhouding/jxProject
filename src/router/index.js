import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import mine from '../components/haizhou/mine'
import home from '../components/mingxiong/Home.vue'


export default new Router({
  routes: [
    {path: '/mine', component: mine},
    {path: '/home', component: home}
  ]
})
