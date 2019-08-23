import Vue from 'vue'
import App from './App'
import { router } from './router'
import Router from 'vue-router'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
