$(document).ready(function(){
  $('.reviews__slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          dots: true
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           infinite: true,
          arrows: true,
          dots:true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           infinite: true,
          arrows: false,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
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

$(function(){
   $('.results__contact--button').on("click", function(){
      $('.overlay').fadeIn(100);
  });
  $('.popup__close').on("click", function(){
      $('.overlay').fadeOut(100);
  });
    jQuery(function($){
      $("#phone").mask("+7 (999) 999-99-99");
    });
});

$(document).ready(function() {
      $('.main__button').click(function() {
          alert('Submit!');
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
        }
        else if ( top >= 20 && adaptive > 991) {
            menu.addClass('sticky');
        }
        else if ( top <= 20 && adaptive > 991 ) {
            menu.removeClass('sticky');
        }
        else if ( top >= 20 && adaptive < 991) {
            menu.addClass('sticky');
        }
        else if ( top <= 20 && adaptive < 991 ) {
            menu.removeClass('sticky');
        }
    });

   //Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };
});

