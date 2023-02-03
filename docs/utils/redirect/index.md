# 说明

## 指令全局注册

```ts
import { createApp } from 'vue'
import mingjs from '@mingjs/utils'
import App from './App'

const app = createApp(App)

app.use(mingjs).mount('#app')
```
