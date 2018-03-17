# 1.BFC 是什么？如何生成 BFC？BFC 有什么作用？举例说明。

Blcok Formatting Context，块级格式上下文， 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

产生bfc的方法：

- 根元素或包含根元素的元素
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
- 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
- overflow 值不为 visible 的块元素
- display 值为 flow-root 的元素
- contain 值为 layout、content或 strict 的元素
- 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
- 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
- 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
- column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

作用：

1. margin合并   /*margin合并*/
	
	    .father{
    	margin
    		overflow: hidden;
    	}
    	.child{
    		margin-top: 50px;
    	}

2. contain float /*计算浮动元素高度*/
	

	    .father{
    		overflow: hidden;
    	}
    	
    	.child{
    		float: left;
    		padding:10px;
    	}  /*清除浮动*/

		

# 2.实现下方链接中的效果，附上预览链接。

https://xiaobei-quq.github.io/day-and-day/3.13/homework-9.html
 


# 3.在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例

 
1. 父子合并
2. 相邻元素合并，去最大值
3. 自己合并，当自己没有内容时

两个元素的上下边距或者左右边距都会在上述的三种情况出现合并。

相邻元素边距不合并可以采用
1. 给两个元素加上border或者padding，设置为1px，solid，white/contain-color，即可解决合并问题
2. 加入bfc，新建父元素，包裹着两个相邻元素，通过overflow:hidden，flow: left/right/both，display: inline-block，position: absolute等等设置成bfc。

		.father{
		    display: inline-block; /*设置成bfc会被子元素撑开*/
		}
		.child{
		    margin-top: 50px;
		}

# 4.什么是 CSS hack？在哪个网站查看标签(属性)的浏览器兼容情况。

 
针对不同浏览器的不同css写法

- 属性前缀法(即类内部Hack)：例如 IE6能识别下划线"_"和星号" * "，IE7能识别星号" * "，但不能识别下划线"_"，IE6~IE10都认识"\9"，但chrome前述三个都不能认识。
- 选择器前缀法(即选择器Hack)：例如 IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。
- IE条件注释法(即HTML条件注释Hack)：针对所有IE(注：IE10+已经不再支持条件注释)： <!--[if IE]>IE浏览器显示的内容 <![endif]-->，针对IE6及以下版本： <!--[if lt IE 6]>只在IE6-显示的内容 <![endif]-->。这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。

caniuse可以查看标签属性的兼容情况



# 5.ie6、7的 hack 写法是？

 <!--[if (IE 6)&(IE 7)]>IE6和IE7生效<![endif]-->


# 6.如下属性，兼容哪些浏览器？

inline-block:

min-width/min-height

:before,:afte:

div:hover

inline-block

background-size

圆角

阴影

动画/渐变
 
>=ie8 : inline-block/min-width/min-height/:before/:after

>=ie7 : div:hover

>=ie9 : background-size/圆角、阴影

>=ie10 : 动画，渐变


# 7.在什么场景下会出现外边距合并？如何合并？如何不让相邻元素外边距合并？给个父子外边距合并的范例

1. 父子合并
2. 相邻元素合并，去最大值
3. 自己合并，当自己没有内容时

两个元素的上下边距或者左右边距都会在上述的三种情况出现合并。

相邻元素边距不合并可以采用

1. 给两个元素加上border或者padding，设置为1px，solid，white/contain-color，即可解决合并问题
2. 加入bfc，新建父元素，包裹着两个相邻元素，通过overflow:hidden，flow: left/right/both，display: inline-block，position: absolute等等设置成bfc。
.father{
    display: inline-block; /*设置成bfc会被子元素撑开*/
}
.child{
    margin-top: 50px;
}


# 8.渐进增强和优雅降级分别是什么意思？

 渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验

优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验

优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。


# 9.以下工具/名词是做什么的？

条件注释
IE Hack
js 能力检测
html5shiv.js
respond.js
css reset
normalize.css
Modernizr
postCSS
 

条件注释： ie条件注释，用于ie hack，ie10以下会把注释的内容读取进行解析

IE Hack：为了让页面功能，交互兼容IE浏览器而采取的技术

js 能力检测：不是检查特定的浏览器，而是通过js检查浏览器的能力，支持哪些元素属性，不支持元素属性

html5shiv.js：  HTML5Shiv允许Internet Explorer 9之前的版本识别HTML5标记，并允许他们使用CSS样式。

respond.js: bootstrap的Respond.js让不支持css3 Media Query的浏览器包括IE6-IE8等其他浏览器支持查询。

css reset： 早期的CSS Reset的作用就是清除所有浏览器默认样式，让它一切归零！

normalize.css：保护有用的浏览器默认样式而不是完全去掉它们；一般化的样式：为大部分HTML元素提供；修复浏览器自身的bug并保证各浏览器的一致性；优化CSS可用性：用一些小技巧；解释代码：用注释和详细的文档来

Modernizr：检测浏览器的能力并返回标签，能支持的回归正常，不支持的标签变为no-...，高版本的浏览器会忽略no-...，而低版本的浏览器会执行另一种样式

postCSS：提供了一种方式用 JavaScript 代码来处理 CSS。它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。


# 10.尽可能多的列举浏览器兼容的处理范例

- 根据兼容需求选择技术框架/库(jquery)

        Bootstrap (>=ie8)
        jQuery 1.~ (>=ie6), jQuery 2.~ (>=ie9)
        Vue (>= ie9)

- 根据兼容需求选择兼容工具(html5shiv.js、respond.js、css reset、normalize.css、Modernizr)

- postCSS： js处理css代码，再由插件来进行处理

- 条件注释、CSS Hack、js 能力检测做一些修补

