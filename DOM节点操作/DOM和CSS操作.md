## DOM节点操作
DOM中的节点模型是一个非常重要的模型（M)，页面中的元素结构就是通过这种节点模型来互相对应着的。

### 1. 创建节点
```
// 创建节点
var node = $('<div>create a node</div>');
// 插入节点
$('body').append(node);
```

### 2. 插入节点
1. 内部插入节点方法

|方法名|描述|
|:--:|:--:|
|append(content)|向指定元素内部后面插入节点content|
|append(function(index, html){})|使用匿名函数向指定元素内部后面插入节点|
|appendTo(content)|将指定元素移入到指定元素content内部后面|
|prepend(content)|向指定元素content内部的前面插入节点|
|prepend(function(index, html){})|使用匿名函数向指定元素内部前面插入节点|
|prependTo(content)|将指定元素移入到指定元素content内部前面|

> 说明：
> 1. 匿名函数中的html是节点原本的内容
> 2. appendTo()方法中的移入是指无需再创建节点，将已有的节点放到指定的元素内部
> 3. pre与ap相反

2. 外部插入节点方法

|方法名|描述|
|:--:|:--:|
|after(content)|向指定元素外部后面插入节点content|
|after(function(index, html){})|使用匿名函数向指定元素外部后面插入节点|
|before(content)|向指定元素外部前面插入节点content|
|before(function(index, html){})|使用匿名函数向指定元素外部前面插入节点|
|insertAfter(content)|将指定节点移到指定元素content外部的后面|
|insertBefore(content)|将指定节点移到指定元素content外部的前面|

### 3. 包裹节点

包裹节点：就是使用字符串代码将指定元素的代码包含着的意思

|方法名|描述|
|:--:|:--:|
|wrap(html)|向指定元素包裹一层html代码|
|wrap(element)|向指定元素包裹一层DOM对象节点|
|wrap(function(index){})|使用匿名函数向指定元素包裹一层自定义内容|
|unwrap()|移除一层指定元素包裹的内容|
|wrapAll(html)|用html将所有元素包裹到一起|
|unwrap(function(index){})|使用匿名函数向指定元素包裹一层自定义内容|









附
