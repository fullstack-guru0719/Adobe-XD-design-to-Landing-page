$(document).ready( function () {
  // Slider Initialization
  if( $('.blog-wrap').length ) {
    $('.blog-wrap').slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  }

  // Go to top button
  var gtt_time = Math.floor(($('html').outerHeight(true) / 4));

  $(window).on('scroll', function() {
    if( $(document).scrollTop() > 0 ) {
      $('.go-to-top').addClass('active');
    } else {
      $('.go-to-top').removeClass('active');
    }
  })

  $('.go-to-top').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, gtt_time, 'swing')
  });

  // Mobile Menu Initialization
  $('.hamburger').on('click', function() {
    $('.hamburger').toggleClass('is-active');
    $('.menu-wrap').toggleClass('is-active');
  });

  // Map Initialization
  initMap();
});

function initMap() {
  const temp = { lat: -25.344, lng: 131.036 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: temp,
  });
  const marker = new google.maps.Marker({
    position: temp,
    map: map,
  });
}