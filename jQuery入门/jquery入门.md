## jQuery概述
### 1. 什么是jQuery
jQuery：2006年由John Resig创建的一个开源项目，是一个JavaScript库，通过封装原生的JavaScript函数得到的一整套定义好的方法。  
[jQuery在线开发手册](http://t.mb5u.com/jquery)  
[英文版jQuery文档](http://api.jquery.com)  

### 2. jQuery的功能和优势
1. 可以像CSS那样访问和操作DOM
2. 修改CSS控制页面外观
3. 简化JS代码操作
4. 事件处理更容易
5. 各种动画效果使用方便
6. Ajax更容易使用
7. 基于jQuery的大量插件
8. 自行扩展功能插件

### 3. jQuery下载和引入
[jQuery下载](https://jquery.com/)  
线上项目一般使用压缩版

### 4. 基础核心
1. 代码风格  
jQuery程序中都是以美元符号“$”开始的，“$”是jQuery中最重要且独有的对象，即jQuery对象。  
“$”本身就是jQuery对象的缩写形式：  
```
$(function(){});  <==>  jQuery(function(){});  
$('#box');  <==>  jQuery('#box');
```
**$('#box').css('color', 'red');** 中，$对象获取元素后，返回的jQuery对象再调用css函数。

2. 加载模式  
> $(function(){});

jQuery库文件是在body元素之前加载的，必须等待所有的DOM元素加载后，延迟支持DOM元素，否则无法获取到DOM元素。  

>   $(document).ready(function(){});与window.onload = function(){};的区别

|      | window.onload | $(document).ready() |
| -- | :-- | :-- |
| 执行时机 | 必须等待网页全部加载完毕（包括图片）之后，再执行包裹代码 | 只需等待网页中的DOM结构加载完毕即可 |
| 执行次数 | 只能执行一次，第二次会覆盖第一次 | 可执行多次，第N次不会被上一次覆盖 |
| 简写方案 | 无 | $(function(){}); |

3. 对象互换  
jQuery虽然是jQuery独有的对象，但是也是由JS封装而来的。  
**$('#box'); <==> $(document.getElementById('#box'));** // 返回的是jQuery对象；  
**document.getElementById('#box'); <==> $('#box').get(0);**  // 返回的是原生的DOM对象

4. 多个库之间的冲突  
一个项目中引入多个第三方库时，由于没有命名空间的约束，库之间可能会发生冲突。  
假设jQuery库和X库，共容方法：  
(1). 将jQuery库在X库之前引入，则"$"的所有权归X库，jQuery只能直接使用jQuery对象，或者创建一个"$$"符。  
```
var $$ = jQuery;  
$$('#box').css('color', 'red');  
```
(2). 将jQuery库在X库之后引入，则"$"的所有权归jQuery库，如果想要X库生效，jQuery需要将"$"符所有权剔除：  
```
jQuery.noConflict();  //剔除$符的所有权  
var $$ = jQuery;  
$$('#box').css('color', 'red');  
```





### 附： 版本问题说明
版本的版本号升级主要有三种：
1. 大版本升级：如1.x.x - 2.x.x，这种升级改动最大，一般是核心库进行优化升级
2. 小版本升级：如1.1.x - 1.2.x，这种一般是增加或减少一些方法或功能
3. 微版本升级：如1.1.1 - 1.1.2，这种一般是修复bug或错误之类
