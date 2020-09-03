/**
 * 插件入口
 */
import Button from './Button'
import Icon from './Icon'

const install = (Vue) => {
  // 这里不应该手动导入
  // webpack 的 require.context() 符合前端工程化

  // Vue.component(Button.name, Button)
  // Vue.component(Icon.name, Icon)

  const requireComponent = require.context('.', true, /\.vue/)
  // console.log('requireComponent', requireComponent.keys())
  requireComponent.keys().forEach((fileName) => {
    const config = requireComponent(fileName)
    // console.log('config', config)
    Vue.component(config.default.name, config.default)
  })
}

export default {
  install,
}
