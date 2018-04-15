$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 920);
        return false;
      }
    }
  });
});



$(document).ready(function() {
  $('.footer__social--block').on("click", function() {
    $('.overlay').fadeIn(300);
  });
  $('.popup__close').on("click", function() {
    $('.overlay').fadeOut(300);
  });
});

$(document).ready(function() {
  var link        = $('.menu__toggle');
  var link_active = $('.menu__toggle-active');
  var  menu       = $('.main__nav');
  var nav_link    = $('.main__link');
    link.click(function(){
        link.toggleClass('menu__toggle-active');
        menu.toggleClass('main__nav_active');
      });
    nav_link.click(function(){
      link.toggleClass('menu__toggle-active');
      menu.toggleClass('main__nav_active');
    });
});

$(document).ready(function () {
    var menu     = $('.heading');
    var logo     = $('.logo__title');
    var link     = $('.main__link');
    var adaptive = $(window).width();

   $(window).scroll(function() {
        var top = $(this).scrollTop();
         if ( top >= 20 && adaptive > 991) {
            menu.addClass('sticky');
            logo.css("color", "rgba(0,0,0,.7)"); 
            link.addClass('main__link-black');
        }
        else if ( top >= 20 && adaptive > 991) {
            menu.addClass('sticky');
            logo.css("color", "rgba(0,0,0,.7)"); 
            link.addClass('main__link-black');
        }
        else if ( top <= 20 && adaptive > 991 ) {
            menu.removeClass('sticky');
            logo.css("color", "#fff");
            link.removeClass('main__link-black');
        }
        else if ( top >= 20 && adaptive < 991) {
            menu.addClass('sticky');
            logo.css("color", "rgba(0,0,0,.7)"); 
            link.removeClass('main__link-black');
        }
        else if ( top <= 20 && adaptive < 991 ) {
            menu.removeClass('sticky');
            logo.css("color", "#fff");
            link.removeClass('main__link-black');
        }
    });
});