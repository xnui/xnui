import Vue from 'vue'
import App from './App.vue'

import xnUi from './packages'

Vue.config.productionTip = false

Vue.use(xnUi)

new Vue({
  render: h => h(App),
}).$mount('#app')
