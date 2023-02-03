# isClient

::: tip 说明
查看当前是否浏览器环境
:::

## 使用方式

```ts
import { isClient } from '@mingjs/utils'

console.log(isClient) // true or false
```

## 实现

```ts
/**
 * isClient 查看当前是否浏览器环境
 */
export const isClient = typeof window !== 'undefined'
```
