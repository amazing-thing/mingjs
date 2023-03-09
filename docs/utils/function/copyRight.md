# 文本复制到粘贴板

## 使用方式

```ts
import { copyRight } from '@mingjs/utils'

copyRight('123123')
```

## 实现

```js
async function copyRight(text) {
  // 兼容处理
  try {
    await navigator.clipboard.writeText(text)
    return true
  }
  catch (e) {
    const input = document.createElement('input')
    input.value = text
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)

    return true
  }
}
```
