import Vue from 'vue'
import App from './App.vue'

// import xnUi from './packages'
// import xnUi from '../dist/xn-ui.umd.min.js'
// import '../dist/xn-ui.css'
import xnui from '@xn213/xnui'
import '@xn213/xnui/dist/@xn213/xnui.css'

Vue.config.productionTip = false

Vue.use(xnui)

new Vue({
  render: h => h(App),
}).$mount('#app')
