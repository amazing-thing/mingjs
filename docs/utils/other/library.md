# 一些库的分享

## [@vueuse/core](https://vueuse.org/)

vue环境各种简便API方法

```shell
pnpm add @vueuse/core
```

## [@iconify-json/mdi](https://www.npmjs.com/package/@iconify-json/mdi)

iconify mdi css图标

```shell
pnpm add @iconify-json/mdi -D
```

## [@antfu/eslint-config](https://github.com/antfu/eslint-config)

antfu eslint规则

```shell
pnpm add eslint @antfu-eslint-config
```

```json
// .eslintrc.js
{
  "extends": ["@antfu"]
}
```

## [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

component文件夹下组件自动全局注册

```shell
pnpm add unplugin-vue-components -D
```

```ts
// vite.config.ts
import Components from 'unplugin-vue-components/vite'
Components({
  dts: true,
})
```

## [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

全局语法糖注册

```shell
pnpm add unplugin-auto-import -D
```

```ts
import AutoImport from 'unplugin-auto-import/vite'
AutoImport({
  imports: [
    'vue',
    'vue/macros',
    'vue-router',
    '@vueuse/core',
  ],
  dts: true,
})
```

## [unocss](https://github.com/unocss/unocss)

原子化css

```shell
pnpm add unocss
```

```ts
// vite.config.ts
import Unocss from 'unocss/vite'

// main.ts
import '@unocss/reset/tailwind.css' // 页面样式初始化
import 'uno.css'
Unocss()
```

## [canvas-confetti](https://github.com/catdad/canvas-confetti)

结算画面 烟花礼炮效果

```shell
pnpm add canvas-confetti @types/canvas-confetti
```

## [fast-glob](https://github.com/mrmlnc/fast-glob)

快速扫描文件

```shell
pnpm add fast-glob
```

## [magic-string](https://www.npmjs.com/package/magic-string)

改变code内容，不改变原code下标

```shell
pnpm add magic-string
```

## [acorn](https://github.com/acornjs/acorn)

javascript语法解析器 ast

```shell
pnpm add acorn
```

```js
const ast = require('acorn')
// 转变成AST 抽象语法树
ast.parse('var a=1')
```

## [lucky-canvas](https://100px.net/)

基于 JS + Canvas 实现的【大转盘 & 九宫格 & 老虎机】抽奖

```shell
pnpm add canvas-confetti @types/canvas-confetti
```

## [vizzu-lib](https://github.com/vizzuhq/vizzu-lib)

用于动画数据可视化的库（echarts）

```shell
pnpm add vizzu
```

## [lottie-web](https://github.com/airbnb/lottie-web)

非常好用的svg动画库

```shell
pnpm add lottie-web
```

## [timeago.js](https://github.com/airbnb/lottie-web)

相对时间库

`一分钟前，半小时前，三个月前`

```shell
pnpm add timeago.js
```

::: tip
dayjs也有相对时间库

```shell
pnpm add dayjs 
```

---

```js
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import rTime from 'dayjs/plugin/relativeTime'

dayjs.locale('zh-cn')
dayjs.extend(rTime)

const time = ref()
time.value = dayjs().to(1675111735862)
```

:::

## [vue-draggable-resizable](https://github.com/mauricius/vue-draggable-resizable)

Vue2 Component 元素可伸缩拖拽

```shell
pnpm add vue-draggable-resizable 
```

```js
import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('VueDraggableResizable', VueDraggableResizable)
```

## [vuedraggable](https://github.com/SortableJS/vue.draggable.next)

[vue2版可拖拽中文版](https://www.itxst.com/vue-draggable/yvq3mifz.html)  
[vue3版可拖拽中文版](https://www.itxst.com/vue-draggable-next/tutorial.html)

```shell
pnpm add vuedraggable // vue2
pnpm add vuedraggable@next // vue3
```

```js
import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('VueDraggableResizable', VueDraggableResizable)
```

## [pinyin](https://www.npmjs.com/package/pinyin)

汉字拼音转换工具

```shell
pnpm add pinyin
```

```js
import pinyin from 'pinyin'

console.log(pinyin('中心')) // [ [ 'zhōng' ], [ 'xīn' ] ]
```

## [Inquirer.js](https://github.com/SBoudrias/Inquirer.js)

Node.js的易于嵌入且美观的命令行界面

```shell
pnpm add inquirer
```

## [degit](https://github.com/Rich-Harris/degit)

简单的项目脚手架，如果使用git clone，会得到一个.git属于项目模板的文件夹，而不是你的项目。您很容易忘记重新初始化存储库，最终让自己感到困惑

```shell
npm install -g degit

degit user/repo

# these commands are equivalent
degit github:user/repo
degit git@github.com:user/repo
degit https://github.com/user/repo
```

## [favicons](https://www.npmjs.com/package/favicons)

用于生成网站图标及其关联文件的Node.js 模块

```shell
pnpm add favicons
```

## [depcheck](https://github.com/depcheck/depcheck)

分析项目中依赖项的工具，用于查看每个依赖项是如何使用的，哪些依赖项是无用的，哪些依赖项从package.json中丢失了

```shell
pnpm install -g depcheck

# use
depcheck

# 配置文件 .depcheckrc
ignores: ["eslint", "babel-*"] # 需要忽略的检查项
skip-missing: true # 指示 depcheck 是否跳过缺失依赖项的计算
```

## [FileSaver.js](https://github.com/eligrey/FileSaver.js)

是在客户端保存文件的解决方案，非常适合在客户端生成文件的 Web 应用程序，但是如果文件来自服务器，我们建议您首先尝试使用 Content-Disposition附件响应标头，因为它具有更多的跨浏览器兼容性。

```shell
pnpm install file-saver --save
# Additional typescript definitions
npm install @types/file-saver --save-dev
```

## [devtools-detector](https://github.com/AEPKILL/devtools-detector)

用于检测浏览器F12的打开关闭

```shell
pnpm install devtools-detector --save
```

```ts
import { addListener, launch } from 'devtools-detector'
const view = document.createElement('div')
document.body.appendChild(view)

// 1. add listener
addListener(
  isOpen =>
    (view.innerText = isOpen
      ? 'devtools status: open'
      : 'devtools status: close')
)
// 2. launch detect
launch()
```
