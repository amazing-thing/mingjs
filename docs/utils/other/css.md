# CSS部分属性记录

## clip-path

> 可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的URL定义的路径或者外部svg的路径，或者作为一个形状。  
> [相关文章](https://blog.csdn.net/weixin_44116302/article/details/98882841)

```html [6]
<style>
.outer{
  width:100px;
  height: 100px;
  background:orange;
  -webkit-clip-path: circle(50% at 50% 50%)
}
</style>
<div class='outer'></div>
```

![图](https://img-blog.csdnimg.cn/2019081517534818.png)

## shape-shadow

> CSS Shapes布局用于实现不规则的图文环绕效果，需配合float一起使用。
> [相关文章](https://blog.csdn.net/weixin_41192489/article/details/120978607) and [相关文章2](https://blog.csdn.net/cwyp18809/article/details/105097750)

```html [13]
<style>
.shape {
  float: left;
  width: 60px; height: 60px;
  padding: 10px; margin: 10px;
  border: 10px solid;
  border-radius: 50%;
  background-color: currentColor;
  background-clip: content-box;
  color: #cd0000;
}
.margin-box {
  shape-outside: circle();
}
</style>
<div class="container">
    <span class="shape margin-box"></span>
    <p>文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容。</p>
    <p>文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字。</p>
</div> 
```

![图](https://img-blog.csdnimg.cn/3eb529d7dcc541adb9f074753262b306.png)

## drop-shadow

> 图片内容轮廓阴影  
> [相关文章](https://www.jb51.net/css/796860.html)

```html [8]
<style>
div {
  width: 200px;
  height: 200px;
  border-top: 5px solid #000;
  border-radius: 50%;
  box-shadow: 0 0 5px #000;
  filter: drop-shadow(0 0 5px #000);
}
</style>

<div></div>
```
