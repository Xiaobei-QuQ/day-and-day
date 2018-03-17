# BFC 

Blcok Formatting Context

块级格式上下文

产生：

1. 根元素
2. float属性不为none；
3. position为absolute或fixed
4. display为inline-block，fixe，或者inline-flex；
5. overflow不为visibale.


建立了隐形的边界

**特性：**

- 内部的box会在垂直方向，一个接一个放置
- box垂直方向的距离由margin决定
- BFC的区域不会与float box重叠
- BFC就是页面上一个隔离的独立容器，容器里面的子元素不会影响外面的元素
- 计算BFC的高度时，浮动元素也参与计算。


**作用：**

1. margin合并   /*垂直上下margin合并*/
2. contain float /*计算浮动元素高度*/


# 边距合并

1. **父子合并**
2. **相邻元素合并，去最大值**
3. **自己合并，当自己没有内容时**

**解决问题：**

1. **父子合并加border，padding解决**
2. bfc

一般情况下用margin-top搞定，实在没办法也是border和padding，不要为了解决小问题引入大问题。


# 浏览器兼容

caniuse.com

如何做

- 根据兼容需求选择技术框架/库(jquery)
- 选择兼容工具
- postCSS
- 条件注释、CSS Hack、js能力检测做一下修补

渐进增强和优雅降级

处理兼容问题的手段

合适的框架

1. bootstrap(>=ie9)
2. jQuery 1.~(>=ie6),jQuery 2.~(>=ie9)
3. Vue(>=ie9)
4. ...

条件注释 == ie条件注释

ie10不再支持条件注释

CSS hack,不同浏览器对css的解析不一样

常见hack写法

	.box{
		color: red;
		_color: blue; /*ie6*/
		 *color: pink; /*ie67*/
		color: yelow\9; /**ie/edge 6-8/
	}

	.target{
		display: inline-block;
		*display: inline;
		*zoom: 1;
	}


>\>=ie8 : inline-block/min-width/min-height/:before/:after

>\>=ie7 : div:hover
>
>\>=ie9 : background-size/圆角、阴影

>\>=ie10 : 动画，渐变