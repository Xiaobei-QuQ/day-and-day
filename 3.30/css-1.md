# css不正交
CSS不正交的特点主要表现为以下两点
1. 各属性之间互相影响
    - margin V.S. border
    - 小圆点 V.S. display
    - position: absolute V.S. display: inline
2. 各元素之间互相影响
    - position: fixed V.S. transform
    - float 影响 inline 元素

# 宽度和高度
文档流
1. 内联元素的宽高
2. div的宽高
    - 内部是字体的，取决于字体的行高
    - 内部文字左右对齐span{ text-align: justify; height: 20px; overflow:hidden; },span::after{ display:inline-block;width:100% }
    - 两个内联元素之间有间隙，因为有看不见的字符。所以尽量inline-block,最好用clearfix和float。
    - word-break: break-all,单词设置断连
    - div的高度是由内部的文档流元素的宽高总和决定的
    - 文档流：内联元素从左到右，块级元素从上到下，各占一行
    - 脱离文档流: float, position: absolute/fixed
3. 多行文字溢出
    - div { white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
        }
    - 多行溢出google搜索 css multi line text ellipsii
4. 文字居中
    - 不要设置包裹文本的元素的height
    - 设置包裹着文本元素的line-height或者上下padding
5. margn合并
    - 父元素没有包裹着子元素border或者padding的属性时，上下margin会和子元素合并
    - 尽量避免overflow: hiddern
    - outline不占位置，可以用来测试和检测
6. 垂直居中
    - div.father（高度不确定）
        div.child
        {
            padding-top: 100px;
            padding-bottom: 100px;
        }
    - div.father（高度确定，全屏）
        div.child{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 
            width: 
            margin: auto;
        }//div.child确定宽高+margin: auto
        div.child{
            display: flex;
            justify-content: center;
            align-items: center;
        }//div.child不确定宽高+flex
7. 宽高实现1:1
div.one{
    padding-top: 100%;
}//height为0
