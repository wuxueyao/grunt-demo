/* global $:true*/
$(function(){
  //get dom elem
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /* cala button click event*/
  $btnCal.click(function(){
    console.log('1')
    //get value
    var w = Number($width.val()),
        h = Number($height.val());
    //calculate
   /* var p = 2 * (w + h),
        a = w * h;*/
    var rect = rectangle();
    //output
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  });
})