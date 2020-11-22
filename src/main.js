import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import './assets/tailwind.css'

const options = {}

Vue.use(VueFormulate, options)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
