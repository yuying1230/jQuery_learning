$(function(){
  // 简单选择器

  // 添加一个行为，css中称为添加样式
  // $('#box').css('color', 'red');
  // $('div').css('background', 'yellow');

  // $('.divbox').css('font-size', '25px');

  // alert($('.divbox').length);

  // $('div#box > p').css('color', 'blue');

  // 进阶选择器
  // 群组选择器
  // $('div, p, strong').css('color', 'red');
  // $('#box, .pox, strong').css('color', 'red');

  // 后代选择器
  // $('ul li a').css('color', 'red');

  // 通配符选择器
  // $('*').css('color', 'green');
  // alert($('*').length); // 包括html、body、head等元素
  // $('ul *').css('color', 'green');
  // $('.box.pox').css('color', 'green'); // 选择class中同时存在box和pox的那个元素

  // $('#box > p').css('color', 'red');
  // $('#box').children('p').css('color', 'red');

  // 过滤选择器
  // $('li:first').css('background', '#ccc');
  // $('li:last').css('background', '#ccc');
  // $('#box li:last').css('background', 'yellow');
  //
  // $('li:not(.red)').css('font-size', '16px');
  //
  // $('li:even').css('color', 'red');
  // $('li:eq(4)').css('font-size', '30px');
  //
  // $(':header').css('background', 'green');
  //
  // $(':focus').css('background', 'blue');
  //
  // $('div:contains("lovestory")').css('background', 'red');

  // $('li:first-child').css('background', 'yellow');
  // $('li:last-child').css('background', 'blue');
  // $('li:only-child').css('background', 'black');

  // $('li:nth-child(even)').css('background', 'yellow');
  // $('li:nth-child(1)').css('background', 'blue');
  // $('li:nth-child(3n)').css('background', 'blue');
  // $('li:nth-child(3n+1)').css('background', 'blue');

  // alert($('.red').is('li'));
  // alert($('.red').is($('li').eq(3)));
  // alert($('.red').is(function() {
  //   // this指代$('.red')
  //   return $(this).attr('title') === '3';
  // }));

  // alert($('li').hasClass('red'));
  // $('li').slice(0, 2).css('background', 'yellow');

  // 找到ul的前一个元素#box的元素状态
  // $('#box').next('ul').end().css('background', 'red');
  // $('li').filter('.red :first :last-child').css('background', 'yellow');
  $('li').filter(function() {
    return $(this).attr('class') == 'red' && $(this).attr('title') == '3';
  }).css('background', 'blue');
});
