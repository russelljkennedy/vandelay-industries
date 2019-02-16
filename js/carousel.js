// Slick slider customisation
jQuery(document).ready(function($) {
  $('.hero-slider .slider-items').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      autoplaySpeed: 3000,
  });
  $('a.felicity').click(function(e){
    e.preventDefault();
  });
});
