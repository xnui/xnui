module.exports = {
  title: 'xnui', // 设置网站标题
  description: '搭建私有 ui 库 ing', // 描述
  dest: './build', // 设置输出目录
  port: 2113, // 端口
  themeConfig: {
    sidebarDepth: 1,
    //主题配置
    // 导航条
    nav: [
      {
        text: '指南',
        link: '/guide/steps',
      },
      {
        text: '组件',
        link: '/components/basic/button',
      },
      {
        text: '配置',
        link: '/setting/'
      },
      {
        text: '插件',
        link: '/plugins/'
      },
      {
        text: '主题',
        link: '/themes/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/xnui'
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/guide/': [
        {
          title: 'steps',
          collapsable: false,
          children: [
            '/guide/steps'
          ]
        }
      ],
      '/components/': [
        {
          title: 'basic',
          collapsable: false,
          children: [
            '/components/basic/layout',
            '/components/basic/container',
            '/components/basic/button',
            '/components/basic/icon'
          ],
        },
        {
          title: 'form',
          collapsable: false,
          children: [
            '/components/form/input',
            '/components/form/switch',
            '/components/form/upload',
            '/components/form/datepicker'
          ],
        },
        {
          title: 'data',
          collapsable: false,
          children: [
            '/components/data/progress',
            '/components/data/table'
          ],
        },
        {
          title: 'others',
          collapsable: false,
          children: [
            '/components/others/infinitescroll',
            '/components/others/popover',
            '/components/others/carousel',
          ],
        },
      ],
    },
  },
}
