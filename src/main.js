import Vue from 'vue'
import App from '@/components/App'
import store from '@/vuex/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
