# downloadFile 

::: tip 说明
文件下载，使用原生fetch
:::

## 使用方式
```ts
import { downloadFile } from '@mingjs/utils'

downloadFile('url', 'name')
```

## 实现
```ts
import { isClient } from '../common'
/**
 * 文件下载
 * @param url string
 * @param name string
 * @returns
 */
export async function downloadFile(url: string, name = 'unnamed') {
  if (!isClient)
    return Promise.reject(new Error('当前环境有误'))

  try {
    // 原生fetch
    const res = await fetch(url)
    const blob = await res.blob()

    if (!blob)
      return Promise.reject(new Error('文件下载失败, 请稍后重试'))

    const localUrl = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', localUrl)
    a.setAttribute('download', name)
    a.click()
    URL.revokeObjectURL(localUrl)
    return Promise.resolve()
  }
  catch (e) {
    return Promise.reject(e)
  }
}
```
