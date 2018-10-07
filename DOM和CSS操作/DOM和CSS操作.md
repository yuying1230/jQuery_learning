## DOM和CSS操作
DOM是文档对象模型，方便开发者对HTML结构元素内容进行展示和修改。  
jQuery将常用的DOM操作方法进行了有效封装，并且不需要考虑浏览器的兼容性。
### 1. DOM简介
1. D表示的是页面文档Document；  
O表示对象，即一组含有独立特性的数据集合，一个元素可看成是一个对象；   
M表示模型，即页面上的元素节点和文本节点。

2. DOM有三种形式：  
标准DOM  
HTML DOM  
CSS DOM  
3. 树形结构用来表示DOM，大部分操作都是元素节点操作，还有少部分是文本节点操作。
### 2. 设置及获取元素内容

|方法名|描述|
|:--:|:--:|
|html()|获取元素中HTML内容|
|html(value)|设置元素中HTML内容|
|text()|获取元素中文本内容|
|text(value)|设置元素中文本内容|
|val()|获取表单中文本内容|
|val(value)|设置表单中文本内容|


**注意：**  
**1. text()方法会自动清理或转义HTML标签。  
$('#box').html(); 结果是<strong>www.lovestory.com</strong>;  
$('#box').text(); 结果是www.lovestory.com  
$('#box').text('<em>www.baidu.com</em>'); 结果是<em>www.baidu.com</em>；  
$('#box').html('<em>www.baidu.com</em>'); 结果是www.baidu.com；  
2. html()和text()设置元素内容时，会清空原来的数据。如果要追加内容的话，需要先获取原来的数据:$('#box').html('$('#box').html() + <em>www.baidu.com</em>');，此处获取两次jQuery对象，性能不高，可以改为：$('#box').html(function(index, value) { return value + <em>www.baidu.com</em>; })。  
3. 如果想设置多个选项的选定状态，比如下拉列表、单选复选框等，可以通过数组传递操作：$('input').val(['a', 'b']);**

### 3. 元素属性操作

|方法名|描述|
|:--:|:--:|
|attr(key)|获取某个元素key属性的属性值|
|attr(key, value)|设置某个元素key属性的属性值|
|attr({key1: value1, key2, value2, ...})|设置某个元素多个key属性的属性值|
|attr(key, function(index, value){})|设置某个元素key，通过function来设置|
|val()|获取表单中文本内容|
|val(value)|设置表单中文本内容|

**注意：1. class不建议使用attr来设置.  
2. attr()方法里的function可以不传参数，也可以只传一个参数index表示当前元素的索引（从0开始），也可以传两个参数index、value，value表示属性原本的值。  
3. jQuery中很多方法都可以使用function来返回出字符串，如果涉及到多个元素集合的话，还可以传递index参数来获取索引值，第二个参数value并不是所有方法都适合。  
4. 不建议使用attr()来创建id属性。  
5. 删除属性：removeAttr('title');该方法不适合使用function。**

```
// index是索引，jQeury对象按顺序获取其对应的索引值
// value是属性原来的值，如果没有的话是undefined
$('div').attr('title', function(index) {
  return 'I am lovestory' + index;
})
```

### 4. 元素样式操作
元素样式操作包括：直接设置CSS样式、增加CSS类别、类别切换、删除类别等操作方法。

|方法名|描述|
|:--:|:--:|
|css(name)|获取某个元素行内的CSS样式|
|css([name1, name2])|获取某个元素行内多个CSS样式|
|css(name, value)|设置某个元素行内的CSS样式|
|css(name, function(index, vlaue))|设置某个元素行内的CSS样式|
|css({name1: value1, name2: value2})|设置某个元素行内多个CSS样式|
|addClass(class)|给某元素添加一个CSS类|
|addClass(class1 class2 class3 ...)|给某元素添加多个CSS类|
|removeClass(class)|移除某元素的一个CSS类|
|removeClass(class1 class2 class3 ...)|移除某元素的多个CSS类|
|toggleClass(class)|来回切换默认样式和指定样式|
|toggleClass(class1 class2 class3 ...)|来回切换默认样式和多个指定样式|
|toggleClass(class, switch)|来回切换样式的时候设置切换频率|
|toggleClass(function(){})|通过匿名函数设置切换的规则|
|toggleClass(function(){}, switch)|在匿名函数设置时也可以设置频率|
|toggleClass(function(i, c, s){}, switch)|在匿名函数设置时传递三个参数|

**行内设置说明：**
1. css([name1, name2]);方法返回的是对象数组，需要使用for...in进行遍历才能解析(javascript方式)：
```
var box = $('#box').css(['color', 'height', 'width']);  
for(var i in box) {
  alert(i + ':' + box[i]);
}  
```
jQuery对象的遍历工具：  
1.
```
$.each(box, function(attr, value) {
  alert(attr + ':' + value);
})  
or  
$('#box').each(function(attr, value) {
  alert(attr + ':' + value);
})
```
2.
```
$('#box').css('color', 'red').css('background-color', '#ccc');   
```
等价于  
```
$('#box').css({'color': 'red', 'background-color': '#ccc'});
```
3.
```$('#box').css('width', function(index, value){
  return parseInt(value) - 500 + 'px';
})
```

**添加CSS类规则说明：**  
1. $('#box').addClass('class-style1 class-style2');  
$('#box').removeClass('class-style1 class-style2');

**样式切换说明：**  
1.
```
$('#box').click(function(){
    $(this).toggleClass('style1'); // 默认样式和指定样式两个样式之间的切换
});
```
2.
```
var count = 0;  
$('#box').click(function(){
  $(this).toggleClass(function(index, className, switchBool) {
    // index是索引，className是样式，switchBool是频率
  }, count++ % 3 == 0);
});
```

### 5. jQuery方法
1. width()方法

|方法名|描述|
|:--:|:--:|
|width()|获取某个元素的长度|
|width(value)|设置某个元素的长度|
|width(function(){index, value})|通过匿名函数设置某个元素的长度|

> 说明：
> 1. width()返回元素的长度是number类型，便于做运算，css返回的是string类型
> 2. 匿名函数中value指代原始值。  

2. height()方法

|方法名|描述|
|:--:|:--:|
|height()|获取某个元素的高度|
|height(value)|设置某个元素的高度|
|height(function(){index, value})|通过匿名函数设置某个元素的高度|

3. 内外边距和边框尺寸方法

|方法名|描述|
|:--:|:--:|
|innerWidth()|获取某个元素宽度，包含内边距|
|innerHeight()|获取某个元素高度，包含内边距|
|outerWidth()|获取某个元素宽度，包含内边距和边框|
|outerHeight()|获取某个元素高度，包含内边距和边框|
|outerWidth(true)|获取某个元素宽度，包含内边距、外边距和边框|
|outerHeight(true)|获取某个元素高度，包含内边距、外边距和边框|

4. 元素偏移方法

|方法名|描述|
|:--:|:--:|
|offset()|获取某个元素相对于视口的偏移位置|
|position()|获取某个元素相对于父元素的偏移位置|
|scrollTop()|获取垂直滚动条的值|
|scrollTop(value)|设置垂直滚动条的值|
|scrollLeft()|获取水平滚动条的值|
|scrollLeft(true)|设置水平滚动条的值|

说明：
1. offset()、position()获取的是对象，调用left或top可获取到对应的偏移量。
