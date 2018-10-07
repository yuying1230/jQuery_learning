$(function(){
  $('input').click(function(){
    alert('jQuery入门');
  });

  $('#box').css('color', 'red').css('font-size', '30px');

  // 下面返回的都是jQuery对象
  // alert($);
  // alert($());
  // alert($('#box'));
  // alert($('#box').css('color', 'red'));
});
