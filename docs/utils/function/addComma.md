# addComma

::: tip 说明
检查文件后缀
:::

## 使用方式

```ts
import { addComma } from '@mingjs/utils'

addComma(1251234.123)
addComma('235234')
```

## 实现

```ts
/**
 * 给数字加逗号
 * @param num
 * @returns
 */
export function addComma(num: string | number) {
  if (!num)
    return '0'

  let result = ''

  const numArr = num.toString().split('.')

  let int = numArr[0]

  const decmial = numArr[1] ? `.${numArr[1]}` : ''

  while (int.length > 3) {
    result = `,${int.slice(-3)}${result}`
    int = int.slice(0, int.length - 3)
  }

  if (int)
    result = int + result

  return result + decmial
}
```
