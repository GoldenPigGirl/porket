// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import Axios from "axios"
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Vant);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
