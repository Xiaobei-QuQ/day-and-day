# inline-block和浮动

inline-block 不需要清除浮动，简单，在设置居中时更方便，适合字内容不多的元素水平排列。但是需要注意缝隙，注意对齐，在ie8以下不能使用

float: 兼容性好，没缝隙问题，需要清除浮动，适合稍大的布局


# 浮动和负边距

	margin-left: -10px

# 定位

文档流：Normal Flow

position: static 默认值

相对定位

position: relative没有脱离文档流，相对于自身之前的位置

	.avatar {
		top: 3px;
		left: 7px;
		position: relative;
	}

position: absolute脱离文档流，所有元素都看不见他，先看父元素，一直相对于先代元素，查找absolute。relative，fixed，最后以为html根节点作为参考点

固定定位

position: fixed 相对于浏览器窗口进行定位。因当关东产生时，固定定位元素依然处于窗口的某个固定位置。

	.feedback{
		right: 30px;
		bottom: 30px;
		position: fixed;
	}

粘性定位

position: sticky相对定位和固定定位的结合，但兼容性差.


# 用定位还是浮动

- 大布局、自适应 用浮动
- 小元素、固定宽高 用定位
- 结合实际情况是关键


