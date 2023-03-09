# chenkIEVersion

::: tip 说明
检查IE浏览器版本，是否edge浏览器，是否IE浏览器  
返回值有：7 | 8 | 9 | 10 | 6 | "edge" | 11 | -1
:::

::: warning
在低版本浏览器使用时，请使用var代替const
:::

## 使用方式

```ts
import { chenkIEVersion } from '@mingjs/utils'

const version = chenkIEVersion()
```

## 实现

```js 
/**
 * 判断是否IE，以及IE版本
 */
function IEVersion() {
  const userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  const isIE = userAgent.includes('compatible') && userAgent.includes('MSIE') // 判断是否IE<11浏览器
  const isEdge = userAgent.includes('Edg') && !isIE // 判断是否IE的Edge浏览器
  const isIE11 = userAgent.includes('Trident') && userAgent.includes('rv:11.0')
  if (isIE) {
    const reIE = /MSIE (\d+\.\d+);/
    const exec = reIE.exec(userAgent)!
    const fIEVersion = parseFloat(exec[1])
    if (fIEVersion === 7)
      return 7
    else if (fIEVersion === 8)
      return 8
    else if (fIEVersion === 9)
      return 9
    else if (fIEVersion === 10)
      return 10
    else
      return 6 // IE版本<=7
  }
  else if (isEdge) {
    return 'edge' // edge
  }
  else if (isIE11) {
    return 11 // IE11
  }
  else {
    return -1 // 不是ie浏览器
  }
}
```
