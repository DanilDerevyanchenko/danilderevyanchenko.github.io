$(document).ready(function(){
  
  $(".main__send").on("click", function() {
    $(".main__send--sub").slideToggle(500);
    $(".main__send--arrow").toggleClass("main__send--arrow-top");
  });

    $(".main__receive").on("click", function() {
    $(".main__receive--sub").slideToggle(500);
    $(".main__receive--arrow").toggleClass("main__receive--arrow-top");
  });

 });

$(document).ready(function() {
  var link        = $('.menu__toggle');
  var link_active = $('.menu__toggle-active');
  var  menu       = $('.main__menu');
  var nav_link    = $('.main__link');
    link.click(function(){
        link.toggleClass('menu__toggle-active');
        menu.toggleClass('main__menu_active');
      });
    nav_link.click(function(){
      link.toggleClass('menu__toggle-active');
      menu.toggleClass('main__menu_active');
    });
});