# removeClass 

::: tip 说明
元素移除class类
:::

## 使用方式
```ts
import { removeClass } from '@mingjs/utils'

const el = document.querySelector('#id')

const result = removeClass(el, 'className1')
const result = removeClass(el, 'className1 className2')
```

## 实现
```ts
/**
 * 元素移除class类
 * @param el  元素节点
 * @param cls 类名，空格分割
 * @returns
 */
export function removeClass(el: Element | undefined, cls: string) {
  if (!el || !cls)
    return

  const classes = cls.split(' ')
  let curClass = ` ${el.className} `

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName)
      continue

    if (el.classList) {
      el.classList.remove(clsName)
    }
    else {
      if (hasClass(el, clsName))
        curClass = curClass.replace(` ${clsName} `, ' ')
    }
  }

  if (!el.classList)
    el.className = trim(curClass)
}
```
