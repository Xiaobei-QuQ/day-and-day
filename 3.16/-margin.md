# 负margin相关

1. 利用-margin实现的两栏布局
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style>
  #content {width:100%; background:red;float:left; margin-right:-200px;}
#sidebar {width:200px; float:left;}	
#content p {margin-right:210px;}

  </style>
</head>
<body>
  
<div id="content"> <p>Main content in hereMain content in hereMain content in here</p> </div> 
<div id="sidebar"> <p>I’m the Sidebar! </p> </div>	

</body>
</html>
```
2. 使用重叠产生强调
3. 文字3D特效
4. 微调元素
5. 当浮动元素使用负margin时，最好加上position: relative