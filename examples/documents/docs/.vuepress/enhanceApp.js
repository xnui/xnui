import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

// import xnui from 'xnui'
// import 'xnui/dist/xnui.css'

import Button from '../../../../src/packages/Button.vue'
import Icon from '../../../../src/packages/Icon.vue'

Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)

Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
export default ({ Vue, options, router, siteData }) => {
  Vue.use(Element)
  // Vue.use(xnui)
}
