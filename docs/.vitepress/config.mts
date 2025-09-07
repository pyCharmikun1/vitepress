import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点配置
  title: "不爱剪辑的Y",
  description: "在数字世界的角落，专注于美好的事物",
  lang: 'zh-CN',
  base: '/vitepress/',  // 设置基础路径为仓库名
  
  // 站点功能配置
  lastUpdated: true,  // 显示最后更新时间
  cleanUrls: true,    // 生成简洁的 URL
  head: [
    ['link', { rel: 'icon', href: '/vitepress/favicon.ico' }],  // 设置网站图标
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],      // 主题色
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  // 多语言配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '不爱剪辑的Y',
      description: '在数字世界的角落，专注于美好的事物'
    }
  },
  themeConfig: {
    // 站点标题样式
    siteTitle: '不爱剪辑的Y',
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pycharmikun1' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 不爱剪辑的Y'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/pycharmikun1/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 最后更新时间文本
    lastUpdatedText: '最后更新',

    // 文档页面标题
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 导航菜单
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/markdown-examples' },
      {
        text: '更多',
        items: [
          { text: '关于我', link: '/about' },
          { text: 'GitHub', link: 'https://github.com/pycharmikun1' }
        ]
      }
    ],

    // 侧边栏
    sidebar: [
      {
        text: '入门',
        collapsed: false,
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: 'Markdown示例', link: '/guide/markdown-examples' },
          { text: 'API使用示例', link: '/guide/api-examples' }
        ]
      },
      {
        text: '进阶',
        collapsed: false,
        items: [
          { text: '主题定制', link: '/advanced/theme' },
          { text: '部署指南', link: '/advanced/deploy' }
        ]
      }
    ],

    // 搜索框文本
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})
