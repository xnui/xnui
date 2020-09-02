import Vue from 'vue'
import App from './App.vue'

// import xnUi from './packages'
import xnUi from '../dist/xnui.umd.min.js'
import '../dist/xnui.css'

Vue.config.productionTip = false

Vue.use(xnUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
