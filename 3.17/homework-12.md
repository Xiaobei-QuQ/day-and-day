1.实现一个两栏布局，右侧固定宽度200px，左侧自适应宽度，附上预览链接。
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>两栏布局</title>
  <style>
    .aside{
        width: 200px;
        float: right;
        background: blue;
        height: 220px;
    }
    .main{ 
      margin-right: 210px;
      background: red;
      height:200px;
    }
    .layout::after{
      content: '';
      display: block;
      clear: both;
    }
    .test{
      background: #ccc;
    }
  </style>
</head>
<body>
  <div class="layout">
    <div class="aside"></div>
    <div class="main"></div>
  </div>
  <div class="test">文字</div>
</body>
</html>
```


2
实现一个三栏布局，两侧固定宽度200px，中间宽度自适应撑满，附上链接。
效果如下

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>三栏布局</title>
</head>
  <style>
    .left-aside{
      float: left;
      width: 200px;
      height: 400px;
      background-color: red;
    }
    .right-aside{
      float: right;
      width: 200px;
      height: 400px;
      background-color: blue;
    }
    .main{
      margin-left: 210px;
      margin-right: 210px;
      height: 450px;
      background-color: pink;
    }
    .latout::after{
      content:'';
      display: block;
      clear: both;
    }
  </style>
<body>
    <div class="layout">
      <div class="left-aside"></div>
      <div class="right-aside"></div>
      <div class="main"></div>
      
    </div>
</body>
</html>
```
 



3.css reset 是什么？css 预编译器是什么？ 后编译器(post css)是什么？

早期的CSS Reset的作用就是清除所有浏览器默认样式，让它一切归零！后来逐渐发展为根需求删除一些不需要的样式，改进默认样式的Normalize.css。

css预编译器是因为css的功能太少，为提升开发效率，使用预编译器如sass等可以使用变量，partial feature，mixin高效解决问题，最后预编译器处理生成的文件还是css。

PostCSS的特点则是模块化。将css4+上的新特性迁移到css3上，可以直接在css上写嵌套，变量等css3不具备的特性，然后由postcss编译转换。
 

4.实现如下居中方式，并附上 Demo 链接
要求：块级元素固定宽度，水平居中

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>居中-1</title>
  <style>
    body{
      background: #CCCCCC;
    }
    .layout{
      width: 300px;
      height: 200px;
      margin: 0 auto;
      background: red;
    }
  </style>
</head>
<body>
  <div class="layout">宽300px，高200px，在页面水平居中</div>
</body>
</html>
```
 

5.实现如下居中方式，并附上 Demo 链接
要求：大段文字在容器内水平垂直居中

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>居中-2</title>
  <style>
  
  .layout{
    height: 300px;
    background: #ccc;
   position: relative;
  }
  .main{
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
     border: 1px solid blue;
  }
  .main h1,p{
    text-align: center;
  }
  
  </style>
  
</head>
<body>
  <div class="layout">
    <div class="main">
      <h1>这是标题</h1>
      <p>这是内容，这段文字在当前区块内垂直水平居中</p>
    </div>
  </div>
</body>
</html>
```
 

6
实现如下居中方式，并附上 Demo 链接
要求：并列三个按钮，在父容器内水平居中


 


Find
No Results

7
实现如下居中效果，
要求：图片在容器内水平垂直居中，容器宽高大于图片宽高


 


Find
No Results

8
实现如下居中方式
要求： 固定宽高的块在浏览器窗口水平垂直居中


 


Find
No Results

9
实现如下居中方式
要求： 不定宽高的块在浏览器窗口水平垂直居中


 


Find
No Results

预览 提交 返回
© 2014-2018 饥人谷版权所有 浙ICP备14041127号-1 | 微信公众号: XDML