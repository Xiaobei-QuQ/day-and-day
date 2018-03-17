# 布局

单列布局：页面挤在中间，两边留空。

### 一栏布局



```
<div class="layout">
        <div id="header">头部</div>
        <div id="content">
            <div class="aside"></div>
            <div class="main"></div>
        </div>
        <div id="footer">尾部</div>
    </div>
```

        .layout{
            max-width: 560px; /*屏幕变小不会有滚动条，自动缩小*/
            margin: 0 auto;
        }
        #header{
            height: 60px;
            background-color: red;
        }
        #content {
            position: relative;
        }
        #content .aside {
            position: absolute;
            right: 0;
            width: 100px;
            height: 300px;
            background-color: green;
        }
        #content .main{
            margin-right: 110px;
            height: 500px;
            background-color: pink;
        }
        #footer{
            height: 50px;
            background-color: yellow;
        }

### 一栏布局（通栏）
```
        <div id="header">
            <div class="layout">头部</div>
        </div>
        <div id="content" class="content">内容</div>
        <div id="footer">
            <div class="layout">尾部</div>
        </div>
```
```
    .layout{
        width: 600px;
        margin: 0 auto;
        border: 1px solid;
    }
    #header{
        height: 60px;
        background: red;
    }
    #content{
        height: 400px'
        background: red;
    }
    #footer{
        height: 50px;
        ackground: yellow;
    }
```

### 两栏布局

利用浮动元素+margin-left+清除浮动

浮动元素放在前面，先渲染。

### 圣杯布局

### 双飞翼布局

### 水平等翼布局
浮动和负margin

### 流式布局

### flex布局

### grid布局

### 移动端布局

1. 设置meta,如
    <meta name="viewport" content="width=device-width,inital-scale=1.0,maximum-scale=1.0, user-scalable=no;"/>
2. 适配
媒体查询 or 动态 rem

# 居中

### 水平居中

行内元素: text-align
>在父元素上设置text-algin: center使文字、图片水平居中

块级元素: margin
```
.container {
    width：80%；
    margin-left: auto;
    margin-right: auto;
}
```

### 垂直居中
```
.ct{
    padding: 40px 0;
    text-align: center;
    background: #eee;
}