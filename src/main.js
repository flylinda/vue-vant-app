import Vue from 'vue'
import App from './App'
import { router } from './router'
import Router from 'vue-router'
import Vant from 'vant'
import 'vant/lib/index.css'
import Viser from 'viser-vue'
Vue.use(Viser)
Vue.use(Vant)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// require('./view/mock/mock.js')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
