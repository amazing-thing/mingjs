# v-ellipsis

::: tip 说明
限制文本最多显示几行，以...结束，仅适用于 webkit 内核浏览器  
:::

## 使用方式

```vue{1,5}
<div v-ellipsis="1">
一行
</div>

<div v-ellipsis="2">
二行
</div>
```

::: danger 注意
需要在vue文件style里面加上该样式

```css
.ming-ellipsis{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

:::
  
## 实现

```ts
/**
 * 限制文本最多显示几行，以...结束，仅适用于 webkit 内核浏览器
 * */
import type { Directive, DirectiveBinding } from 'vue'
import { addClass, removeClass } from '../common/index'

export default {
  mounted(el, binding: DirectiveBinding) {
    if (binding.value) {
      addClass(el, 'ming-ellipsis')
      el.style['-webkit-line-clamp'] = binding.value
    }
  },
  updated(el, binding: DirectiveBinding) {
    if (binding.value)
      el.style['-webkit-line-clamp'] = binding.value
  },
  unmounted(el) {
    removeClass(el, 'ming-ellipsis')
    el.style['-webkit-line-clamp'] = null
  },
} as Directive
```

## 普通单行兼容版本

```css
.className{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
```
