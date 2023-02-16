# checkFileSuffix

::: tip 说明
检查文件后缀
:::

## 使用方式

```ts
import { checkFileSuffix } from '@mingjs/utils'

checkFileSuffix('xxx.jpg', ['jpg', 'png', 'pdf'])
```

## 实现

```ts
/**
  * 检查文件后缀名是否符合
  * @param { String } fileName 文件名
  * @param { Array } suffixArray 允许的后缀
  * @returns
  */
export function checkFileSuffix(fileName = '', suffixArray: string[] = []) {
  if (!fileName || suffixArray.length === 0)
    return false

  const name = fileName.split('.').pop()?.toLowerCase()

  if (!name)
    return false

  if (!suffixArray.includes(name))
    return false

  return true
}
```
