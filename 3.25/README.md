渲染：重绘，
回流/重新布局，restyle

# 浏览器渲染界面
给定浏览器一大块HTML，CSS和JavaScript，浏览器是如何在屏幕上显示页面呢？
渲染过程大概如下
![](http://www.phpied.com/files/reflow/render.png)



浏览器的呈现过程
- 浏览器解析出HTML源代码（标签汤）并构建一个DOM树。每个HTML标签都在树中具有相应的节点，而标签之间的文本块也获得文本节点表示。DOM树中的根节点是documentElement（<html>标签）
- 构建渲染树。浏览器解析CSS代码，解析CSS（包括外部CSS文件和样式元素以及js生成的样式），根据CSS选择器计算出节点的样式，创建另一个树 —-渲染树。渲染树有点像DOM树，但并不完全匹配。渲染树知道样式，因此，如果你隐藏了一个div有display: none，它不会在渲染树表示。其他无形元素也是如此，比如head其中的一切。另一方面，在渲染树中可能有多个DOM元素被表示为多个节点 - 比如文本节点，例如每个行中的每一行都<p>需要一个渲染节点。渲染树中的一个节点被称为一个框架或一个框（就像在CSS框中一样，盒模型）。每个节点都具有CSS框属性 - 宽度，高度，边框，边距等
- 布局渲染树: 从根节点递归调用，计算每一个元素的大小、位置等，给每个节点所应该出现在屏幕上的精确坐标。
- 绘制渲染树: 遍历渲染树，每个节点将使用UI后端层来绘制。

### 举个例子吧

HTML
```
<html>
<head>
  <title>Beautiful page</title>
</head>
<body>
    
  <p>
    Once upon a time there was 
    a looong paragraph...
  </p>
  
  <div style="display: none">
    Secret message
  </div>
  
  <div><img src="..." /></div>
  ...
 
</body>
</html>
```
 
代表这个HTML文档的DOM树基本上每个标签有一个节点，节点之间每个文本有一个文本节点（为简单起见，我们忽略了空白也是文本节点的事实）。

```
documentElement (html)
    head
        title
    body
        p
            [text node]
		
        div 
            [text node]
		
        div
            img
		
        ...
```
该渲染树是DOM树的视觉部分。它缺少一些东西 - 头部和隐藏的div，但是它具有用于文本行的附加节点（aka frames，aka boxes）。

```
root (RenderView)
    body
        p
            line 1
	        line 2
	        line 3
	    ...
	    
	div
	    img
	    
	...
```
渲染树的根节点是包含所有其他元素的框架（框）。您可以将其视为浏览器窗口的内部部分，因为这是页面可能传播的受限区域。技术上，WebKit调用根节点RenderView，它对应于CSS初始包含块，它基本上是从页面顶部（0，0）到（window.innerWidth，window.innerHeight）的视口矩形

#### 弄清楚在屏幕上显示什么和如何精确地涉及渲染树中的递归（流）。

*** 重绘和回流 ***
总是至少有一个初始页面布局和一个样式（除非，当然你更喜欢你的页面空白。之后，更改用于构建渲染树的输入信息可能会导致以下一种或两种情况：

渲染树的部分（或整个树）将需要重新验证，并重新计算节点维度。这被称为回流或者是重新布局。
屏幕的某些部分需要更新，或者是因为节点的几何属性发生了变化，或者是因为文体更改（如更改背景颜色）。此屏幕更新称为重绘或重绘。
重绘和回流代价很高，它们可能会损害用户体验，并使界面显得呆滞。

# 怎样触发回流或重绘
任何改变用于构建渲染树的输入信息都会导致重绘或回流，例如：

- 添加，删除，更新DOM节点
- 使用display: none（回流和重绘）隐藏DOM节点或visibility: hidden（仅重绘，因为没有几何变化）
- 移动，在页面上动画DOM节点
- 添加一个样式表，调整样式属性
- 用户操作，如调整窗口大小，更改字体大小或滚动
我们来看几个例子：
```
var bstyle = document.body.style; // cache
 
bstyle.padding = "20px"; // reflow, repaint
bstyle.border = "10px solid red"; // another reflow and a repaint
 
bstyle.color = "blue"; // repaint only, no dimensions changed
bstyle.backgroundColor = "#fad"; // repaint
 
bstyle.fontSize = "2em"; // reflow, repaint
 
// new DOM element - reflow, repaint
document.body.appendChild(document.createTextNode('dude!'));
```

一些回流可能比其他回流更昂贵。想想渲染树，如果你用一个节点沿着作为身体的直接后代元素的树设置，那么你可能不会使很多其他节点无效。但是，当你在页面的顶部设置动画和扩展div时会怎么样呢？然后这会推动页面的其余部分 - 这听起来很代价很高。

# 浏览器很聪明
由于与渲染树更改相关的重排和重绘费用很高，浏览器旨在减少负面影响。一种策略是简单地不做这项工作。至少不是现在，至少。浏览器将设置您的脚本需要的更改队列并批量执行它们。通过这种方式，每个需要回流的多次更改将被合并，并且只会计算一次回流。浏览器可以添加到排队的更改中，然后在一定时间过后或者达到一定数量的更改时刷新队列。

但有时脚本可能会阻止浏览器优化重排，并导致它刷新队列并执行所有批处理的更改。当您请求样式信息时会发生这种情况，例如

1. offsetTop，offsetLeft，offsetWidth，offsetHeight
2. scrollTop/左/宽/高
3. clientTop/左/宽/高
4. getComputedStyle()，或者currentStyle在IE中
上述所有内容都基本上是请求有关节点的样式信息，并且只要您这样做，浏览器就必须为您提供最新的值。为此，它需要应用所有计划的更改，刷新队列，咬住子弹并执行重排。

例如，在快速连续（循环）中设置和获取样式是一个坏主意，例如：
```
// no-no!
el.style.left = el.offsetLeft + 10 + "px";
```
# 最大限度地减少重绘和回流
减少回流/重新绘制对用户体验的负面影响的策略是简单地减少回流和重新绘制，并减少对样式信息的请求，因此浏览器可以优化回流。如何去做呢？

- 不要一个一个地改变个别风格。最好的理智和可维护性是改变类名而不是样式。但是，它假定了静态样式。如果样式是动态的，则编辑该cssText属性而不是触摸该元素及其样式属性以进行每次小的更改。
```
// bad
var left = 10,
    top = 10;
el.style.left = left + "px";
el.style.top  = top  + "px";
 
// better 
el.className += " theclassname";
 
// or when top and left are calculated dynamically...
 
// better
el.style.cssText += "; left: " + left + "px; top: " + top + "px;";
```
- 批量DOM更改并“脱机”执行它们。离线意味着不在活动的DOM树中。您可以：
用一个documentFragment来保存临时变化，
克隆您即将更新的节点，处理副本，然后将原始数据与更新后的克隆进行交换
用display: none（1 reflow，repaint）隐藏元素，添加100个更改，恢复显示（另一个回流，重绘）。这样你可以交换两次回流，可能有一百次
不要过度要求计算风格。如果您需要使用计算值，请将其采用一次，缓存到本地变量并使用本地副本。重新审视上面的不作为例子：
```
// no-no!
for(big; loop; here) {
    el.style.left = el.offsetLeft + 10 + "px";
    el.style.top  = el.offsetTop  + 10 + "px";
}
 
// better
var left = el.offsetLeft,
    top  = el.offsetTop
    esty = el.style;
for(big; loop; here) {
    left += 10;
    top  += 10;
    esty.left = left + "px";
    esty.top  = top  + "px";
}
```
- 一般来说，考虑一下渲染树，以及在更改之后需要重新验证多少渲染树。例如，使用绝对定位使该元素成为渲染树中的主体的子元素，因此当您为其设置动画时，它不会影响太多的其他节点。其他一些节点可能位于需要重新绘制的区域，当您将元素置于其上时，它们将不需要回流。
# 工具
仅在大约一年前，没有任何东西能够提供关于浏览器绘画和渲染方面发生的事情的任何可见性（不是我所知道的，当然MS绝对有可能没有人知道恶意开发工具关于，埋在MSDN的某处：P）。现在情况不同了，这非常非常酷。

首先，MozAfterPaint事件降落在Firefox Nightlies版，所以像这种扩展凯尔肖尔茨露面。mozAfterPaint很酷，但只会告诉你重绘。

DynaTrace Ajax和最近Google的SpeedTracer（注意两个“trace”:)）都是用于挖掘回流和重绘的极好工具 - 第一个是IE，第二个是WebKit。

去年的某个时候Douglas Crockford提到我们可能在CSS中做了一些我们不知道的非常愚蠢的事情。我可以肯定与此有关。我参与了一个项目，增加浏览器字体大小（在IE6中）导致CPU高达100％，并保持10-15分钟，最终重新绘制页面。

那么，这些工具现在就在这里，我们没有任何借口可以在CSS中做愚蠢的事情。

除了可能，讲的工具...，如果类似Firebug的工具除了DOM树之外还显示渲染树，这不是很酷吗？

最后一个例子
让我们快速看看这些工具，并展示restyle（渲染树不会影响几何图形的树更改）和reflow（影响布局）之间的区别，以及repaint。

我们来比较两种做同样事情的方法。首先，我们改变一些样式（不接触布局），并且在每次更改后，我们检查一个样式属性，与刚刚更改的样式属性完全无关。
```
bodystyle.color = 'red';
tmp = computed.backgroundColor;
bodystyle.color = 'white';
tmp = computed.backgroundImage;
bodystyle.color = 'green';
tmp = computed.backgroundAttachment;
```
然后是同样的事情，但只有在所有更改之后，我们才会触摸样式属性以获取信息：
```
bodystyle.color = 'yellow';
bodystyle.color = 'pink';
bodystyle.color = 'blue';
 
tmp = computed.backgroundColor;
tmp = computed.backgroundImage;
tmp = computed.backgroundAttachment;
```
在这两种情况下，这些是所用变量的定义：
```
var bodystyle = document.body.style;
var computed;
if (document.body.currentStyle) {
  computed = document.body.currentStyle;
} else {
  computed = document.defaultView.getComputedStyle(document.body, '');
}
```
  
现在，这两个示例样式更改将在单击文档时执行。测试页面实际上是在这里 [restyle.html](http://www.phpied.com/files/reflow/restyle.html)（点击“dude”）。我们称之为restyle测试。

第二项测试就像第一项测试一样，但是这次我们也会更改布局信息：
```
// touch styles every time
bodystyle.color = 'red';
bodystyle.padding = '1px';
tmp = computed.backgroundColor;
bodystyle.color = 'white';
bodystyle.padding = '2px';
tmp = computed.backgroundImage;
bodystyle.color = 'green';
bodystyle.padding = '3px';
tmp = computed.backgroundAttachment;
 
 
// touch at the end
bodystyle.color = 'yellow';
bodystyle.padding = '4px';
bodystyle.color = 'pink';
bodystyle.padding = '5px';
bodystyle.color = 'blue';
bodystyle.padding = '6px';
tmp = computed.backgroundColor;
tmp = computed.backgroundImage;
tmp = computed.backgroundAttachment;
```
这个测试改变了布局，所以我们称之为“重新布局测试”，[源代码在这里](http://www.phpied.com/files/reflow/relayout.html)。

以下是DynaTrace用于restyle测试的可视化类型。

![](http://www.phpied.com/files/reflow/dyna1.png)

基本上加载页面，然后我点击一次执行第一个场景（每次请求样式信息，大约2秒），然后再次单击执行第二个场景（请求样式延迟到最后，大约4秒）

该工具显示如何加载页面和IE标志显示onload。然后，鼠标光标在点击后的渲染活动之上。放大到有趣的区域（这有多酷！）有一个更详细的视图：

![](http://www.phpied.com/files/reflow/dyna2.png)

您可以清楚地看到JavaScript活动的蓝色栏和以下呈现活动的绿色栏。现在，这是一个简单的例子，但仍然注意到条形图的长度 - 与执行JavaScript相比，花费了多少时间来渲染。通常在Ajax / Rich应用程序中，JavaScript不是瓶颈，而是DOM访问和操作以及渲染部分。

好了，现在正在运行“重新布局测试”，即改变车身几何形状的测试。这次查看这个“PurePaths”视图。这是一个时间表，加上关于时间线中每个项目的更多信息。我突出显示了第一次点击，这是一项产生预定布局任务的JavaScript活动。
![](http://www.phpied.com/files/reflow/dyna3.png)

再次，放大有趣的部分，您可以看到现在除了“绘图”栏以外，还有一个新的 - “计算流布局”，因为在此测试中，除了重绘之外，还有一个回流。
![](http://www.phpied.com/files/reflow/dyna4.png)

现在让我们在Chrome中测试相同的页面，并查看SpeedTracer结果。

这是第一次“restyle”测试放大到有趣的部分，这是一个发生了什么事情的概述。

![](http://www.phpied.com/files/reflow/speedtracer3.png)

总体来说，有一个点击，就有一个绘制。但在第一次点击中，重新计算样式的时间也有50％。这是为什么？那么，这是因为我们在每次更改时都会要求提供样式信息。

展开事件并显示隐藏的线条（灰色线条被Speedtracer隐藏，因为它们不是很慢），我们可以看到发生了什么 - 在第一次点击之后，样式计算了三次。经过第二次 - 只有一次。

![](http://www.phpied.com/files/reflow/speedtracer4.png)

现在我们来运行“重新布局测试”。整个事件列表看起来是一样的：

![](http://www.phpied.com/files/reflow/speedtracer1.png)

但详细视图显示了第一次点击是如何引起三次回流的（因为它要求计算样式信息），而第二次点击只引发一次回流。这是对发生的事情的很好的了解。

![](http://www.phpied.com/files/reflow/speedtracer2.png)

这些工具中的一些细微差异 - DynaTrace所做的工作时，SpeedTracer没有显示何时安排了布局任务并将其添加到队列中。然后DynaTrace没有像SpeedTracer那样显示“restyle”和“reflow / layout”之间区别的细节。也许只是IE浏览器在两者之间没有区别？DynaTrace也没有在不同的改变 - 结束 - 触摸与改变 - 然后触摸测试中显示三个回流，而不是一个回流，也许这就是IE的工作原理？

运行这些简单的例子数百次也证实，对于IE而言，如果您在更改它时请求样式信息，则无关紧要。

以足够的重复次数运行测试之后，还有一些数据点：

在Chrome中，如果更改样式（restyle test），则修改样式的速度提高2.5 倍，而在更改样式和布局（重新布局测试）时速度提高4.42倍，
在Firefox中 - 在restyle测试中不要求计算样式的速度提高1.87倍，在重新布局测试中速度提高1.64倍
在IE6和IE8中，没关系
在所有浏览器中，尽管更改样式只需要一半时间来更改样式和布局。（现在我写了，我只应该比较不同的风格，而不仅仅是改变版面）。除IE6以外，改变布局是4倍更昂贵，然后只改变样式。

Ps:
- 渲染树 - DOM树的可视部分
- 渲染树中的节点称为帧或h盒子
- 看起来，重新计算渲染树的部分称为reflow（在Mozilla中），并在每个其他浏览器中调用布局
- 使用重新计算的渲染树的结果更新屏幕称为重绘，或重绘（在IE / DynaTrace中）
- SpeedTracer引入了“风格重新计算”的概念（没有几何变化的风格）与“布局”


- Mozilla：关于回流的说明
- Mozilla的David Baron：谷歌关于Web开发者的Layout Engine Internals的技术讨论
- WebKit：渲染基础知识 - 6篇文章系列
- Opera：重绘和回流是关于高效JavaScript的文章的一部分
-Dynatrace：IE渲染行为
