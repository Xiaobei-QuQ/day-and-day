# 伪元素

伪元素用于创建一些不在文档树中的元素，并为其添加样式

单/双冒号
```
::before
::after
::first-letter
::first-line
```
仅双冒号
```
::selection
::placeholder
::backdrop
```

elemenr:before and after 让element多出两个子元素，可直接在CSS中写样式

应用-清楚浮动
```
.clearfix:after{
  content: '';
  display: block;
  clear: both;
}
.clearfix{
  *zoom: 1        /*兼容IE6,7*/
}
```

应用-替换标签
```
<h1 class="tooltip">
<span class="caret"></span>
小北</h1>
<h1 class="bubble">小北</h1>
.tooltip
.bubble{
  position: relative;
  padding: 10px;
  border-radius: 3px;
  background: #fff;
  border: 1px solid #000;
  display: inline-block;
}
.tooltip .caret,
.bubble:before{
  width: 10px;
  height: 10px;
  border-left: 1px solid #000;
  border-top: 1px solid #000;
  background: #fff;
  display: inline-block;
  transform: rotateZ(45deg)
  positio: absolute;
  top: -6px;
}
.bubble:befor{
  content:''
}
```

应用-自定义checkbox

```
input[type=checkbox]{
  apprearance: none;
  background: url() 0 0 no-repeat;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: contain;
  vertical-align: middle;
  outline: none;
}
input[type=checkbox]:checked{
  appearance: none;
  background: url() 0 0 repeat;
  displayL inline-block;
  width: 20px;
  height: 20px;
  background-size: contain;
  vertical-align: middle;
}
```

应用-字体图标

<link rel="stylesheet" type="text/css" href="//at.alicdn.com/t/font_nyta5xh650cnimi.css">

<span class="iconfont icon-xiaobei">

<style>
  .icon-xiaobei:before {
    content:'\e650'
  }
</style>
