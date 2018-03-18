# 命名技巧
  - 语义化
    - 语义化标签优先
    - 基于功能命名、基于内容命名、基于表现命名
    - 简略、明了、无后患


>tips: 
>1.大声叫出他的名字 
>2. 翻译成英语
  
```
  标签  <artical>
  类名  小写 引号包裹 中横线连接 体现功能 
  success
  theme-color
  login
  movies
  news
  .wrap/.wrapper
  .container/.ct
  .header
  .body
  .footer
  .aside/.sidebar
  .navigation
  .pagination
  .tabs > .tab
  .breadcrumbs
  .media
  .panel
  .tooltip
  .popup
  .dropdown
  .main
  .thumbnail
  .button/.btn
  .ad
  .subnav
  .menu
  .tag
  .message
  .notice
  .summary
  .logo
  .search
  .register
  .username
  .password
  .banner
  .modal(不能动)/.delog（弹窗）
  .copyright

  状态
  .inverse
  .toggled
  .switched
  .original
  .initial
  .disabled
  .loading
  .pending
  .syncing
  .default

  修饰
  .dark
  .light
  .shaded
  .flat
  .ghost
  .maroom
  .pale
  .intense
  .twisted
  .narrow
  .wide
  .smooth
  .separate
  .clean
  元素
  .pagination
  .modal
  .popup
  .article
  .story
  .flash
  .status
  .state
  .media
  .block
  .card
  .teaser
  .badge
  .label
  .sheet
  .poster
  .notice
  .record
  .entry
  .item
  .figure
  .square
  .module
  .bar
  .button
  .action
  .knob
  布局
  .navigation
  .wrapper
  .inner
  .section
  .divider
  .content
  .container
  .panel
  .pane
  .construct
  .composition
  .spacing
  .frame
```


# CSS规范

  - 书写规范
    - tab用两个空格表示
    - css的:后加个空格，{前加个空格
    - 每个声明后加个分号；
    - 换行
    - 颜色用小写+缩写
    - 小数不用写前缀，0不加单位
    - 尽量缩写
    - 顺序最好如下
    - 1.position
    - 2.bbox model
    - 3.typegraphic
    - 4.visual


# 伪元素

  单双冒号

  ::before/:before
  ::after/:after
  ::first-letter/:first-letter  第一个文字
  ::first-line/:first-line

  仅双冒号
  ::selection
  ::placeholder
  ::backddrop