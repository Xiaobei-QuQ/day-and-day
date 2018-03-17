##  居中

### 水平居中

在父元素中设置text-align:center，可以使得行内子元素/文字居中

display: inline-block+text-align: center; 可以使得几个行内元素排列居中

在块级元素中设置width和margin: 0 auto;可以使得块级元素在父元素中水平居中

在块级元素中设置max-width: 600px; margin: 0 auto;可以使得块级元素随着宽度自适应，600px以上居中，600px以下宽度自适应

### 垂直居中

1. 父元素里设置上下padding: 40px 0;
2. 绝对定位实现居中
```
.dialog{
  position: absolute;
  left: 50%;
  top:50%; //左上角的顶点居中
  margin-left: -200px;
  margin-top: -150px;
  
  width: 400px;
  height: 300px;
  box-shadow; 0px 0px 3px #000;
}
.dialog .header{
  padding: 10px;
  background: #000;
  color: #fff;
}
.dialog .content{
  padding: 10px;
}
```
宽度不固定的时候
```
.dialog{
  transform: translate(-50%,-50%)
}
```
3.verti-align实现居中
```
<div class="box">
<span class="test"></span>
    <img src="" alt="">
  </div>

<style>
    .box{
      width: 300px;
      height: 200px;
      border: 1px solid ;
      text-align: center;
      vertical-align: middle; //没有用
    }
    .box img{
      vertical-align: middle; //没有用
    }
    //一步步往下深入转换
    .test {
      font-size: 80px;
      vertical-align: middle; //文字和图片中间对齐
    }  

    .test {
      hegiht: 20px;
      display:inline-block'
      background:red;
      width: 0px;
      vertical-align: middle;
    }

    .box::before{
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
    
<.style>
```
4. table实现居中
```
.box{
  display:table-cell; //非块级元素，宽度会收缩，不像上一种
  vertical-align: middle;
}
```
5. display: flex

```
<div class="space">
  <div class="earth"></div>
</div>
<style>
  .space{
    width: 100vw;
    height: 100vh;
    display: flex; /*弹性布局*/
    align-items； center; /*垂直居中*/
    justify-content: center; /*水平居中*/
  }
  body{
    margin: 0;
    background: rgba(0,0,0,.95);
  }
  .earth::after{
    content: '地球'；
    font-size: 85px;
  }
</style>
```