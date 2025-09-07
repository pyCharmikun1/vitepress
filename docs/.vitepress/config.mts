import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "不爱剪辑的Y",
  description: "在数字世界的角落，专注于美好的事物",
  lang: 'zh-CN',
  base: '/vitepress/',  // 添加这行，设置基础路径为仓库名
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '不爱剪辑的Y',
      description: '在数字世界的角落，专注于美好的事物'
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pycharmikun1' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 不爱剪辑的Y'
    },
    editLink: {
      pattern: 'https://github.com/pycharmikun1/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南文档', link: '/guide/markdown-examples' },
    ],

    sidebar: [
      {
        text: '文档示例',
        items: [
          { text: 'Markdown示例', link: '/guide/markdown-examples' },
          { text: 'API使用示例', link: '/guide/api-examples' }
        ]
      }
    ]
  }
})
