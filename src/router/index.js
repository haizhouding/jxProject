import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import mine from '../components/haizhou/mine'


export default new Router({
  routes: [
    {path: '/mine', component: mine}
  ]
})
