$(function(){
  // alert($('#box').html());  //<strong>www.lovestory.com</strong>

  // alert($('#box').text());  //www.lovestory.com

  // $('#box').html('<em>www.baidu.com</em>');  //www.baidu.com</em>
  // $('#box').text('<em>www.baidu.com</em>');  //<em>www.baidu.com</em>

  // alert($('div').attr('id'));
  // $('strong').attr('title', 'lovestory');
  // $('div').attr('title', function() {
  //   return 'lovestory';
  // })

  // index是索引，jQeury对象按顺序获取其对应的索引值
  // value是属性原来的值，如果没有的话是undefined
  // $('div').attr('title', function(index) {
  //   return 'I am lovestory' + index;
  // })

  $('strong').css('color', 'red');
});
