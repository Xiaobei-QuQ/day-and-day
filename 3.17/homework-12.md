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
 

6.实现如下居中方式，并附上 Demo 链接
要求：并列三个按钮，在父容器内水平居中
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>居中-3</title>
  <style> 
    .layout {
      width: 1200px;
      margin: 0 auto;
      height: 180px;
      text-align: center;
      background: #ccc;
      position: relative;
    }
    .all-button {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
    .button{
      display: inline-block;
      padding: 10px;
      color: #fff;
      background: red;
      border-radius: 6px;
      font-weight: bold;
      margin: 0 10px;
    }
    
  </style>

</head>
<body>
  <div class="layout">
    <div class="all-button">
      <div class="button">按钮1</div>
      <div class="button">按钮2</div>
      <div class="button">按钮3</div>
    </div>
  </div>
</body>
</html>
 
```


7.实现如下居中效果，
要求：图片在容器内水平垂直居中，容器宽高大于图片宽高

```
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>居中-3</title>
  <style>
    .ct{
      width: 350px;
      height: 350px;
      border: 2px solid red;
      text-align: center;
    }
    .ct::before{
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    img{
      vertical-align: middle;
    }
  </style>
</head>
<body>
  <div class="ct">
    <img src="https://jirengu.com/data/upload/2017/0118/17/587f39fba695a.png" alt="">
  </div>
</body>
</html>

```

8.实现如下居中方式
要求： 固定宽高的块在浏览器窗口水平垂直居中
```

 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>居中-4</title>
  <style> 
  body{
    margin: 0;
    padding: 0;
  }
    .page {
    width: 100vw;
    height: 100vh;
    display: flex; /*弹性布局*/
    align-items: center; /*垂直居中*/
    justify-content: center; /*水平居中*/
    }
    .layout {
      background: #333333;
      width: 200px;
      height: 200px;
      border: 1px solid red;
     
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="layout"></div>
  </div>
  
</body>
</html>

```

9.实现如下居中方式
要求： 不定宽高的块在浏览器窗口水平垂直居中

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>居中-5</title>
  <style>
    .layout {
      background: #ccc;
      position: absolute;
      left: 50%;
      top:50%;
      transform: translate(-50%,-50%);
      padding: 20px;
    }
    .container {
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="layout">
    <h1>这里是内容</h1>
    <div class="container">内容的宽高不定</div>
  </div>
</body>
</html>
```
 

