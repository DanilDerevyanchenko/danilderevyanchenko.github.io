$(document).ready(function(){
  $('.reviews__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          dots: false
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots:false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.menu__toggle').click(function() {
		$('.main__list').slideToggle(500);
  });
  	$(window).resize(function() {
  		if($(window).width() > 991 ){
			     $('.main__list').removeAttr('style');
          }
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
      var link        = $('.menu-link');
      var link_active = $('.menu-link__active');
      var  menu       = $('.menu');
      var nav_link    = $('.menu a');
      link.click(function(){
        link.toggleClass('menu-link__active');
        menu.toggleClass('menu_active');
      });
      nav_link.click(function(){
        link.toggleClass('menu-link__active');
        menu.toggleClass('menu_active');
      });
    });

$(function(){
  $('.header__button').on("click", function(){
      $('.overlay').fadeIn(100);
  });
   $('.map__numbers--button').on("click", function(){
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
      $('.main__form--button').click(function() {
          alert('Submit!');
      });
});

