# hasClass 

::: tip 说明
元素是否含有此类
:::

## 使用方式
```ts
import { hasClass } from '@mingjs/utils'

const el = document.querySelector('#id')

const result = hasClass(el, 'className') // true or false
```

## 实现
```ts
/**
 * 元素是否含有此类
 * @param el  元素节点
 * @param cls 类名，空格分割
 * @returns
 */
export function hasClass(el: Element | undefined, cls: string) {
  if (!el || !cls)
    return false
  if (cls.includes(' '))
    throw new Error('className should not contain space.')
  if (el.classList)
    return el.classList.contains(cls)
  else
    return (` ${el.className} `).includes(` ${cls} `)
}
```
