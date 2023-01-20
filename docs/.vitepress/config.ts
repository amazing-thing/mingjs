import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  themeConfig: {
    siteTitle: 'mingjs',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present amazing-ming',
    },
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '工具函数', link: '/utils/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '快速开始', link: '/guide/' },
          ],
        },
      ],
    },
  },

})
