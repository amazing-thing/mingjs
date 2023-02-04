# 小知识点

::: tip 说明
以下都为原生API
:::

## toLocaleString() 对数字进行处理

```js
// 数字加逗号
const numOne = 12345
numOne.toLocaleString() // '12,345'

// 数字转换成百分比
const numTwo = 1
const numThree = 0.12
numTwo.toLocaleStrig('zh', { style: 'precent' }) // '100%'
numThree.toLocaleStrig('zh', { style: 'precent' }) // '12%'

// 货币转换
const num = 2444222
num.toLocaleString('zh', { style: 'currency', currency: 'CNY' }) // ￥2,444,222.00
num.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'code' }) // CNY 2,444,222.00
num.toLocaleString('zh', { style: 'currency', currency: 'cny', currencyDisplay: 'name' }) // 2,444,222.00 人民币

// minimumIntegerDigits指定整数数字的最小数目.可能的值是从1到21,默认值是1。
// minimumFractionDigits指定小数位数的最小数目.可能的值是从0到20。
// maximumFractionDigits指定小数位数的最大数目。可能的值是从0到20。
// 不足自动补零
const num = 2333.3
connum.toLocaleString('zh', { minimumIntegerDigits: 5 }) // 02,333.3
// 如果不想有分隔符，可以指定useGrouping为false
num.toLocaleString('zh', { minimumIntegerDigits: 5, useGrouping: false }) // 02333.3
num.toLocaleString('zh', { minimumFractionDigits: 2, useGrouping: false }) // 2333.30

const num2 = 666.666
num2.toLocaleString('zh', { maximumFractionDigits: 2, useGrouping: false }) // 666.67

// minimumSignificantDigits控制有效数字的最小数目。可能的值是从1到21；默认值是1。
// maximumSignificantDigits控制有效数字的最大数量。可能的值是从1到21；
// 优先级大于上面一组
// 默认四舍五入
const num = 1234.5
num.toLocaleString('zh', { minimumSignificantDigits: 6, useGrouping: false }) // 1234.50
num.toLocaleString('zh', { maximumSignificantDigits: 4, useGrouping: false }) // 1235
```

## Sring.fromPointCode() 对Unicode码点返回对应字符

```js
String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1F680, 0x79) === 'x\uD83D\uDE80y'
// true   多个参数会合并成一个字符串
```

## codePointAt() 对字符转义返回Unicode

```js
const s = '𠮷'
s.codePointAt(0) // 134071
```

## padStart()、padEnd() 对长度不足的字符串进行填充

```js
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'
// 默认值为空格
```

## Number.isInteger() 用来判断一个数是不是整数

只能判定number类型，其他类型同意返回false

```js
Number.isInteger(25) // true
Number.isInteger(25.1) // false

// 25和25.0视为同一个值
Number.isInteger(25) // true
Number.isInteger(25.0) // true
```
