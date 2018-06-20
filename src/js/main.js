$(document).ready(function(){
  $('.main-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          arrows: false,
          dots: true 
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: true
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
          dots: true
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

    $('.featured-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    appendArrows: ".featured__arrow",
    prevArrow: '<button class="featured__arrow-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="featured__arrow-next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          draggable: false,
          autoplay: false,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          draggable: false,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

    $('.new-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    appendArrows: ".new__arrow",
    prevArrow: '<button class="new__arrow-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="new__arrow-next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

   $('.recently-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    appendArrows: ".recently__arrow",
    prevArrow: '<button class="recently__arrow-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="recently__arrow-next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.bslider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    draggable: true,
    prevArrow: '<button class="bslider__arrow-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="bslider__arrow-next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          autoplay: false,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          autoplay: false,
          dots: false
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

    $('.footer__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    appendArrows: ".footer__arrow",
    prevArrow: '<button class="footer__arrow-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="footer__arrow-next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false
        }
      },
       {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          autoplay: false,
          dots: false
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

 });



 $(document).ready(function() {
   var link        = $('.menu__toggle');
   var link_active = $('.menu__toggle-active');
   var  menu       = $('.account__menu');
   var nav_link    = $('.account__link');
    link.click(function(){
         link.toggleClass('menu__toggle-active');
         menu.toggleClass('account__menu_active');
    });
    nav_link.click(function(){
       link.toggleClass('menu__toggle-active');
       menu.toggleClass('account__menu_active');
    });

    $(".main__menu--button").on("click", function() {
      $(".main__list").slideToggle(500);
      $(".main__menu--button i").toggleClass("arrow-top");
    });
 });

 $(document).ready(function() {
  $(".main__item--active").click(function() {
    $(".main__filter").slideToggle(500);
  });

  $(".main__item").on("click", function(e) {
    e.preventDefault();
    $(".main__item").removeClass("active__link");
    $(this).addClass("active__link");
  });
  $("body").on("click", function() {
    $(".main__item").removeClass("active__link");
  });


  $(".account__language").click(function() {
     $(".account__language--arrow").toggleClass(".account__language--active");
    $(".account__language--submenu").slideToggle(500);
  });

  $(".account__money").click(function() {
    $(".account__money--submenu").slideToggle(500);
    $(".account__money--arrow").toggleClass(".account__money--active");
  });
 });

 // $(function (){
 //  var mobHeader = $('<div class="main__menu--active"><ul class="main__list"><li class="main__item main__item--active"><a class="main__link main__link--active"><img src="img/main-list.svg" alt="">all categories</a></li><li class="main__item"><a href="#" class="main__link">Brands</a></li><li class="main__item"><a href="#" class="main__link">Deals of the Day</a></li><li class="main__item"><a href="#" class="main__link">News</a></li><li class="main__item"><a href="#" class="main__link">Sale</a></li></ul></div>');
 //  $("account__list").before(mobHeader);
 // });


// $(function() {
//   $(".featured__block").click(function() {
//     $(".featured__block--submenu").slideToggle(500);
//   });
// });