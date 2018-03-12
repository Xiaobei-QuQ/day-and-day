
> 一个浮动盒会向左或向右移动，直到其外边（outer edge）挨到包含块边沿或者另一个浮动盒的外边。如果存在行盒，浮动盒的外top（边）会与当前行盒的top（边）对齐 如果没有足够的水平空间来浮动，它会向下移动，直到空间合适或者不会再出现其它浮动了因为浮动（盒）不在普通流内，在浮动盒之前或者之后创建的未定位的（non-positioned）块盒会竖直排列，就像浮动不存在一样。然而，接着（next to）浮动（盒）创建的当前及后续行盒会进行必要的缩短，为了给浮动（盒）的margin box让出空间


## 1.放不下会换行

## 2.换行的时候会被卡住

## 3.文本被缩短下移动

> 脱离普通流：？
> 
> float和absolute不一样。块盒看不见浮动元素，但是盒子内的文字看得见浮动元素。不同于absolute。

注：块级元素设置float后宽度收缩，块级元素设置float可以设置宽高margin

# 浮动的使用场景

## 两栏布局 ##

	.aside{
		width:100px;
    	float:left;
	}
	.main{
	  		margin-left:110px;
	}
> float可以实现宽度自适应，inline-block不行。而且inline-block还要在每个元素中加vertical-align: top

## 三栏布局

	.aside{
		width: 150px;
		height: 400px;
		backgroud: red;
		float: right;
	}
	.menu{
		width: 150px;
		height: 400px;
		background: red;
		float: left;
	}
	.main{
		margin-right: 160px;
		margin-left: 160px;
		background: blue;
		height: 500px;
	}

> 注意menu/aside/main的顺序，如果main在第二个会占用一整行空间似的aside挤进去下一行。


## 导航条

	.navbar{
		list-style: none;
	}
	.navbar>li{
		float: left;
		margin-left: 15px;
	}


	<ul class="navbar">
	<li><a href="#">1首页</a></li>
	<li><a href="#">2产品</a></li>
	<li><a href="#">3服务</a></li>
	<li><a href="#">4关于</a></li>
	</ul>




## 浮动的副作用

1. 浮动元素脱离了文档流，正常元素认为浮动不存在，所以ul的边框和背景都无法设置。

2. 对后续元素位置产生影响，例如footer


## 清除浮动

	.box{
		width: 100px;
		height: 50px;
		border:1px solid;
		float: left;
	}
	.box2{
		clear: left;
	}
	clear:right无效

# li中加clear: left + float: none

	<li class="clear"></li>
	.clear{
		clear: left; /*使li在第二行新开始*/
		float: none; /*使ul可以看到元素,撑开父元素*/
	}


# 伪元素清除浮动

	.clearfix::after{  /*父元素*/
		content: '';
		display: block;
		clear: both;
	}




