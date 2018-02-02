// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

=======
import axios from 'axios'
Vue.prototype.axios = axios;
>>>>>>> b480fcbbc04a4e24e4fbd9c757d10c0be44faeff

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
