/*global $*/
$(function(){
  // id=back内のaタグがクリックされた時
  $('#back a').on('click',function(event){
    $('body,html').animate({
      scrollTop:0
    /*global slow*/
    },slow);
    event.preventDefault();
  });
});