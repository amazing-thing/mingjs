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

