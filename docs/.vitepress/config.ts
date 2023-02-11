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
      { text: '随笔', link: '/diary/' },
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
            { text: '说明', link: '/utils/redirect/' },
            { text: 'v-ellipsis', link: '/utils/redirect/ellipsis.md' },
          ],
        },
        {
          text: '组件',
          items: [
            { text: 'antdVue+table内容自适应滚动', link: '/utils/component/' },
          ],
        },
        {
          text: '其他',
          items: [
            { text: '库积累', link: '/utils/other/library.md' },
            { text: 'CSS', link: '/utils/other/css.md' },
            { text: '小知识点', link: '/utils/other/knowledgePoint.md' },
            { text: 'vscode插件', link: '/utils/other/vscodePlugin.md' },
          ],
        },
      ],
    },
  },

})
