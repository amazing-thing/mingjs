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
