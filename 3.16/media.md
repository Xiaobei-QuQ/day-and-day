# 媒体查询

响应式采用了媒体查询的语法

```
@media screen and (max-width:990px){
  .container{
    background: orange;
  }
}  /*默认screen*/
```

@media在不同环境下的响应式

```
<style>
  h1 {color: red;}
  @media (min-width: 500px){
    h1{
      color: blue;
    }
  }
</style>

<h1>小北</h1>
```
写媒体查询，一般放在下面，而且要注意选择权权重

