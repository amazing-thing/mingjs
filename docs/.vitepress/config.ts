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
      { text: '工具', link: '/utils/' },
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
      '/utils/': [
        {
          text: '声明',
          items: [{ text: '免责声明', link: '/utils/disclaimer/' }],
        },
        {
          text: '工具函数',
          items: [
            { text: 'trim', link: '/utils/function/trim.md' },
            { text: 'isClient', link: '/utils/function/isClient.md' },
            { text: 'hasClass', link: '/utils/function/hasClass.md' },
            { text: 'addClass', link: '/utils/function/addClass.md' },
            { text: 'removeClass', link: '/utils/function/removeClass.md' },
            { text: 'downloadFile', link: '/utils/function/downloadFile.md' },
          ],
        },
        {
          text: '指令',
          items: [
            { text: 'v-ellsp', link: '/utils/redirect/' },
          ],
        },
        {
          text: '组件',
          items: [
            { text: 'antdVue+table内容自适应滚动', link: '/utils/component/' },
          ],
        },
      ],
    },
  },

})
