# addClass

::: tip 说明
元素添加class类
:::

## 使用方式

```ts
import { addClass } from '@mingjs/utils'

const el = document.querySelector('#id')

const result = addClass(el, 'className1')
const result = addClass(el, 'className1 className2')
```

## 实现

```ts
/**
 * 元素添加class类
 * @param el  元素节点
 * @param cls 类名，空格分割
 * @returns
 */
export function addClass(el: Element | undefined, cls: string) {
  if (!el)
    return

  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]

    if (!clsName)
      continue

    if (el.classList) {
      el.classList.add(clsName)
    }
    else {
      if (!hasClass(el, clsName))
        curClass += ` ${clsName}`
    }
  }

  if (!el.classList)
    el.className = curClass
}
```
