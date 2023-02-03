# 快速开始

::: tip 声明
各类工具函数来自从各种UI库，或者来自各类博客中，如有侵权，请在[Issues](https://github.com/amazing-thing/mingjs/issues)中告知
:::

## 安装

```bash
npm i @mingjs/utils
```

## 简单使用

  **hasClass** 查看元素上是否有相关类

``` vue
<script setup lang="ts">
import { hasClass } from '@mingjs/utils'
import { ref } from 'vue'

const el = ref(null) // 某元素

const has = hasClass(el, 'className1')

console.log(has) // true or false
</script>
```
