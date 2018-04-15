$(document).ready(function(){
  $('.reviews-slider').slick({
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
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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
          autoplaySpeed: 3000,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
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

  		$('.menu__toggle').click(function() {
  			$('.main__list').slideToggle(500);
  		});

  		$(window).resize(function() {
  			if($(window).width() > 991 ){
  				$('.main__list').removeAttr('style');
  			}
  		});

      $('.contacts__button').on("click", function(){
          $('.overlay').show();
      });
      $('.thanks__button').on("click", function(){
          $('.overlay').fadeToggle();         
      });
      $('.icontacts__button').on("click", function(){
          $('.overlay').show();
      });
}); 
