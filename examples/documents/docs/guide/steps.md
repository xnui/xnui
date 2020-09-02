# 步骤 - 从零搭建 `Vue` 组件库

## 一. 通过 `Vue-Cli` 初始化项目

```bash
vue create xnui
```

```bash
? Check the features needed for your project:
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 (*) CSS Pre-processors
 ( ) Linter / Formatter
 (*) Unit Testing
 ( ) E2E Testing
```

```shell
> Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
  Less
  Stylus
```

```bash
? Pick a unit testing solution:
> Mocha + Chai
  Jest
```

## 二. 目录结构配置

```bash
│  .browserslistrc
│  .gitignore
│  babel.config.js
│  package-lock.json
│  package.json
│  README.md
├─public
│      favicon.ico
│      index.html
├─src
│  │  App.vue
│  │  main.js
│  │
│  ├─packages # 需要打包的组件
│  │      button.vue
│  │      icon.vue
│  │      index.js # 所有组件的入口
│  │
│  └─styles
│          _var.scss
└─tests
    └─unit
            button.spec.js
```

## 三. 编写插件入口

```js
import Button from './button.vue'
import Icon from './icon.vue'

const install = (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
}
export default {
  install,
}
```

```js
import xnUi from './packages'
Vue.use(xnUi)
```

## 四. 编写 Button 组件

### 实现功能规划

- [ ] 按钮的基本用法
- [ ] 图标按钮
- [ ] 按钮加载中状态
- [ ] 按钮组的实现

### 准备备用样式

```scss
$border-radius: 4px;

$primary: #409eff;
$success: #67c23a;
$warning: #e6a23c;
$danger: #f56c6c;
$info: #909399;

$primary-hover: #66b1ff;
$success-hover: #85ce61;
$warning-hover: #ebb563;
$danger-hover: #f78989;
$info-hover: #a6a9ad;

$primary-active: #3a8ee6;
$success-active: #5daf34;
$warning-active: #cf9236;
$danger-active: #dd6161;
$info-active: #82848a;
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

#### (1). 实现按钮的基本用法

使用 type 属性来定义 Button 的样式。

```vue
<template>
  <button class="xn-button" :class="btnClass">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
      validator(type) {
        if (type && !['warning', 'success', 'danger', 'info', 'primary'].includes(type)) {
          console.error('类型必须是:' + `'warning','success','danger','info','primary'`)
        }
        return true
      },
    },
  },
  computed: {
    btnClass() {
      let classes = []
      if (this.type) {
        classes.push(`xn-button-${this.type}`)
      }
      return classes
    },
  },
  name: 'xn-button',
}
</script>
<style lang="scss">
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.xn-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: 42px;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }
  @each $type,
    $color
      in (primary: $primary, success: $success, info: $info, warning: $warning, danger: $danger)
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active,
    &-#{$type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
}
</style>
```

#### (2). 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

**创建图标组件**:

```vue
<template>
  <svg class="xn-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>
<script>
import '../styles/icon'
export default {
  props: {
    icon: String,
  },
  name: 'xn-icon',
}
</script>
<style lang="scss">
.xn-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
```

```vue
<button class="xn-button" :class="btnClass">
    <xn-icon
        :icon="icon"
        v-if="icon"
        class="icon"
    ></xn-icon>
    <span v-if="this.$slots.default">
        <slot></slot>
    </span>
</button>
<style>
.icon {
  fill: #fff;
  width: 16px;
  height: 16px;
}
.icon + span {
  margin-left: 5px;
}
span + .icon {
  margin-right: 5px;
}
</style>
```

#### (3). 按钮加载中状态

要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```vue
<template>
  <button class="xn-button" :class="btnClass" :disabled="loading">
    <xn-icon :icon="icon" v-if="icon && !loading" class="icon"></xn-icon>
    <xn-icon icon="loading" v-if="loading" class="icon"></xn-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
```

#### (4). 按钮组的实现

以按钮组的方式出现，常用于多项类似操作。

```vue
<template>
  <div class="xn-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'xn-button-group',
  mounted() {
    let children = this.$el.children
    for (let i = 0; i < children.length; i++) {
      console.assert(children[i].tagName === 'BUTTON', '必须子节点是button')
    }
  },
}
</script>
<style lang="scss">
@import '../styles/_var.scss';
.xn-button-group {
  display: inline-flex;
  vertical-align: middle;
  button {
    border-radius: 0;
    position: relative;
    &:not(first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  button:hover {
    z-index: 1;
  }
  button:focus {
    z-index: 2;
  }
}
</style>
```

## 五. 搭建测试环境

### Karma 配置

#### (1) 安装 `karma`

```bash
npm install --save-dev @vue/test-utils karma karma-chrome-launcher karma-mocha karma-sourcemap-loader karma-spec-reporter karma-webpack mocha karma-chai
```

#### (2) 配置 karma 文件

`karma.conf.js`

```js
var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: ['tests/**/*.spec.js'],
    preprocessors: {
      '**/*..spec.js': ['webpack', 'sourcemap'],
    },
    autoWatch: true,
    webpack: webpackConfig,
    reporters: ['spec'],
    browsers: ['ChromeHeadless'],
  })
}
```

```js
{
  "scripts":{
    "test": "karma start"
  }
}
```

### 单元测试

```js
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai'
import Button from '@/packages/button'
import Icon from '@/packages/icon'

describe('button.vue', () => {
  it('1. 测试 slot 是否能正常显示', () => {
    cosnt wrapper = shallowMount(Button, {
      slots: {
        default: 'xn-ui'
      }
    })
  })
  it('2. 测试传入 icon 属性', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'xn-icon': Icon
      },
      propsData: {
        icon: 'edit' // 传入的是 edit 测试一下 edit 是否 ok
      }
    })
    expect(wrapper.find('use').attributes('href')).to.equal('#icon-edit')
  })
  it('3. 测试传入 loading 是否能控制 loading 属性', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'xn-icon': Icon
      },
      propsData: {
        loading: true // 传入的是 loading 测试一下 loading 是否 能控制
      }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading')
    expect(wrapper.find('use').attributes('disabled')).to.eq('disabled')
  })
  it('4. 测试点击按钮', () => {
    const wrapper = shallowMount(Button, {
      stubs: ['xn-icon']
    })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click').length).to.eq(1)
  })
  it('5. 测试前后图标', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'xn-icon': Icon
      },
      slots: {
        default: 'hello'
      },
      attachToDocument: true,
      propsData: {
        iconPosition: 'left',
        icon: 'edit'
      }
    })
    let ele = wrapper.vm.$el.querySelector('span')
    expect(getComputedStyle(ele, null).order).to.eq('2')
    wrapper.setProps({
      iconPosition: 'right'
    })
    return wrapper.vm.$nextTick().then(() => {
      expect(getComputedStyle(ele, null).order).to.eq('1')
    })
  })
})
```

## 六. 打包组件

#### (1)配置打包命令

```bash
"lib": "vue-cli-service build --target lib --name xnui  ./src/packages/index.js"
```

#### (2)配置运行入口

```bash
"main": "./dist/xnui.umd.min.js"
```

#### (3) link 到全局下 (删)

```bash
npm link
```

## 七. 使用`VuePress`搭建文档

### `VuePress`基本配置:

#### (1).安装

```
npm install vuepress -D
```

#### (2).配置 scripts

```bash
{
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
}
```

#### (3).初始化 docs

增加入口页面`README.MD`

```
---
home: true
actionText: 欢迎 →
actionLink: /components/button
features:
- title: 搭建自己的组件库
  details: 从0搭建自己的组件库
---
```

#### (4).配置导航

增加`config.js`

```js
module.exports = {
  title: 'xn-ui', // 设置网站标题
  description: 'ui 库', //描述
  dest: './build', // 设置输出目录
  port: 1234, //端口
  themeConfig: {
    //主题配置
    nav: [
      {
        text: '主页',
        link: '/',
      }, // 导航条
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/components/': [
        {
          collapsable: true,
          children: ['button'],
        },
      ],
    },
  },
}
```

#### (5).初始化配置文件 `.vuepress`

`enhanceApp.js`

- 安装包

  ```bash
  npm install element-ui highlight.js node-sass sass-loader --save
  ```

- link 组件库

  ```bash
  npm link xn-ui
  ```

```js
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

import xnUi from 'xn-ui'
import 'xn-ui/dist/xn-ui.css'
Vue.directive('highlight', function(el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
export default ({ Vue, options, router, siteData }) => {
  Vue.use(Element)
  Vue.use(xnUi)
}
```

#### (6).覆盖默认样式

`styles/palette.styl`

```stylus
$codeBgColor = #282c34

$accentColor = #3eaf7c
$textColor = #2c3e50

$borderColor = #eaecef
$arrowBgColor = #ccc
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #DA5961

.content pre{  margin: 0!important;}

.theme-default-content:not(.custom){
    max-width: 1000px !important;
}
```

#### (7).创建 components 目录

创建`demo-block`可收缩代码块

```vue
<template>
  <div class="demo-block">
    <div style="padding:24px">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta" v-show="isExpanded">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight " v-highlight>
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="demo-block-control" ref="control" @click="isExpanded = !isExpanded">
      <i :class="[iconClass, { hovering: hovering }]"></i>
      {{ controlText }}
    </div>
  </div>
</template>

<style lang="scss">
.demo-block-control {
  -webkit-user-select: none;
}
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .demo-button {
    float: right;
  }

  .source {
    padding: 24px;
  }

  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
  }

  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;

    p {
      margin: 0;
      line-height: 26px;
    }

    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .highlight {
    pre {
      margin: 0;
    }

    code.hljs {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;
      line-height: 1.8;
      color: black;
      &::before {
        content: none;
      }
    }
  }

  .demo-block-control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>

<script type="text/babel">
export default {
  data() {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null,
      langConfig: {
        'hide-text': '隐藏代码',
        'show-text': '显示代码',
      },
    }
  },
  computed: {
    iconClass() {
      return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
    },
    controlText() {
      return this.isExpanded ? this.langConfig['hide-text'] : this.langConfig['show-text']
    },
  },
}
</script>
```

#### (8).编写对应组件的`md`文件

````md
# Button 组件

常用的操作按钮。

## 基础用法

基础的按钮用法。

<demo-block>
::: slot source
<button-test1></button-test1>
:::

使用 type 属性来定义 Button 的样式。

::: slot highlight
​```html

<div>
    <xn-button>默认按钮</xn-button>
    <xn-button type="primary">主要按钮</xn-button>
    <xn-button type="success">成功按钮</xn-button>
    <xn-button type="info">信息按钮</xn-button>
    <xn-button type="warning">警告按钮</xn-button>
    <xn-button type="danger">危险按钮</xn-button>
</div>
​```
:::
</demo-block>
````

## 八. 发布到`npm`

配置`.npmignore`配置文件

```
npm addUser
npm publishdeom
```
