动态REM

# 手机专用的自适应方案

1. 什么是REM
2. REM和EM的区别是什么
3. 手机端方案的特点
4. 使用JS动态调整REM
5. REM可以与其他单位同事存在
6. 在SCSS里使用REM

### 预备知识

px 像素

em 一个m的宽度，一个汉字的宽度

rem root em 根元素html的font-size

vh viewport height 视口高度 100vh == 视口高度

vw wiewport width 视口宽度 100vw == 视口宽度

网页默认像素：16px

chroem默认最小像素：12px

1em="自身一个font-size的值"或者"M"的高度

em和rem的区别，一个自身元素，一个是根元素

### 手机端页面

两张图，

pc: Float/flex  定宽1000px；

手机: 

iphone6 375*667
ip6p 414*736
ip5 320*568
Nexus 412*732

响应式
0~320 一套CSS
320~375 另一套CSS
375~414 第三套CSS


1. 百分百布局
```

```
2. 整体缩放

3.rem

一切单位以宽度为标准就能完美还原设计稿

4.REM可以和其他单位并存，border=1px solid

### SaSS使用px2REM

不会使用less/Sass/Scss/Wepack的根源
1. 不会用命令行
2. 不会英语
3. 不会看文档

