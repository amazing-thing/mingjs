# trim 

::: tip 说明
去除文字前后空格
:::

## 使用方式
```ts
import { trim } from '@mingjs/utils'

const str = ' 123 '

const result = trim(str) // '123'
```

## 实现
```ts
/**
 * 去除文字前后空格
 * @param string
 * @returns
 */
export const trim = function (string: string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
```
