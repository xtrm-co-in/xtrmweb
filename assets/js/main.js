(function($) {
  "use strict";

  // mobile menu
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "991"
  });


  // sticky
  var wind = $(window);
  var sticky = $('#sticky-header');
  wind.on('scroll', function () {
    var scroll = wind.scrollTop();
    if (scroll < 180) {
      sticky.removeClass('sticky');
    } else {
      sticky.addClass('sticky');
    }
  });

  // offcanvas menu
  $(".menu-tigger").on("click", function() {
    $(".offcanvas-menu,.offcanvas-overly").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overly").on("click", function() {
    $(".offcanvas-menu,.offcanvas-overly").removeClass("active");
  });

  //   Slider activation

  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function(e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on("beforeChange", function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });
    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 10000,
      fade: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="icofont-long-arrow-left"></i>Prev</button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="icofont-long-arrow-right"></i>Next</button>',
      arrows: false,
      dots: true,
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function() {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay
        });
        $this.addClass($animationType).one(animationEndEvents, function() {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  // slider-three
  $(".slider-three-active").slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 1000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:
      '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>',
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      }
    ]
  });

  // isotope
  $(".portfolio-active").imagesLoaded(function() {
    var $grid = $(".portfolio-active").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });

    // filter items on button click
    $(".portfolio-menu").on("click", "button", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
    });
  });

  //for menu active class
  $(".portfolio-menu button").on("click", function(event) {
    $(this)
      .siblings(".active")
      .removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });

  // counterUp

  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });

  // testimonial

  $(".testimonial-active").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      100: {
        items: 1
      },
      200: {
        items: 1
      },
      300: {
        items: 1
      }
    }
  });

  // portfolio
  $(".portfolio-active").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // popup
  $(".view").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });

  $(".video-view").magnificPopup({
    type: "iframe"
  });

  // clients

  $(".clients-active").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      320: {
        items: 2
      },
      480: {
        items: 3
      },
      767: {
        items: 5
      },
      991: {
        items: 6
      },
      1000: {
        items: 6
      }
    }
  });

  $.scrollUp({
    scrollName: "scrollUp", // Element ID
    topDistance: "300", // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: "fade", // Fade, slide, none
    animationInSpeed: 1000, // Animation in speed (ms)
    animationOutSpeed: 1000, // Animation out speed (ms)
    scrollText: '<span class="lnr lnr-chevron-up"></span>' // Text for element
  });
  
  if($("#search-input").length >0){
    
    var sjs = SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json'
    });
  }



})(jQuery);


//script for tab
// var btns = document.getElementsByClassName("tablink");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//   });
// }




// Slider JS
jQuery(document).ready(function ($) {

    setInterval(function () {
      moveRight();
      moveRight1();
    }, 3000);
    
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
      $('#slider ul').animate({
        left: + slideWidth
      }, 1000, function () {
        $('#slider ul li:last-child').prependTo('#slider ul');
        $('#slider ul').css('left', '');
      });
    };

    function moveRight() {
      $('#slider ul').animate({
        left: - slideWidth
      }, 1000, function () {
        $('#slider ul li:first-child').appendTo('#slider ul');
        $('#slider ul').css('left', '');
      });
    };



    //Slider 2 js
    var slideCount = $('#slider_2 ul li').length;
    var slideWidth = $('#slider_2 ul li').width();
    var slideHeight = $('#slider_2 ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider_2').css({ width: slideWidth, height: slideHeight });
    
    $('#slider_2 ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
    $('#slider_2 ul li:last-child').prependTo('#slider_2 ul');

    function moveLeft1() {
      $('#slider_2 ul').animate({
        left: + slideWidth
      }, 1000, function () {
        $('#slider_2 ul li:last-child').prependTo('#slider_2 ul');
        $('#slider_2 ul').css('left', '');
      });
    };

    function moveRight1() {
      $('#slider_2 ul').animate({
        left: - slideWidth
      }, 1000, function () {
        $('#slider_2 ul li:first-child').appendTo('#slider_2 ul');
        $('#slider_2 ul').css('left', '');
      });
    };
    
    $('span.control_prev2').click(function () {
      moveLeft1();
    });

    $('span.control_next2').click(function () {
      moveRight1();
    });

    //end of slider 2 js

    $('span.control_prev').click(function () {
      moveLeft();
    });

    $('span.control_next').click(function () {
      moveRight();
    });

  }); 



// blog slider script
$('.product-slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    fade: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            autoplay: true
                    
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            autoplay: true,
          }
        }
      ]
});


// contact management slider
$('.contact_management_slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true
                    
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
          }
        }
      ]
});



// cost management slider
$('.cost_management_slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true
                    
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
          }
        }
      ]
});