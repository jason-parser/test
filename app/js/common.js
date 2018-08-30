$(function() {


	// Прелоадер
	$(".loader_inner").fadeOut();
	$(".body_loader").delay(400).fadeOut("slow");


  // Плавный скролл к блоку
  $('a[href^="#to"]').on("click", function (event) {
  	event.preventDefault();
  	var id  = $(this).attr('href'),
  	top = $(id).offset().top;
  	$('body,html').animate({scrollTop: top}, 1000);
  });


	// Слайдер
	var swiper1 = new Swiper('.swiper-container-1', {
		slidesPerView: 'auto',
    centeredSlides: true,
		grabCursor: true,
		speed: 1000,
		navigation: {
			nextEl: '.sw1-btn-next',
			prevEl: '.sw1-btn-prev',
		},
		autoplay: {
	    delay: 5000,
	  },
	});
	var swiper2 = new Swiper('.swiper-container-2', {
		slidesPerView: 'auto',
    centeredSlides: true,
		grabCursor: true,
		speed: 1000,
		navigation: {
			nextEl: '.sw2-btn-next',
			prevEl: '.sw2-btn-prev',
		},
		autoplay: {
	    delay: 5000,
	    disableOnInteraction: false
	  },
	});

	// Галерея
  $('.swiper-container-1 .slide__photo').magnificPopup({
    mainClass: 'mfp-fade',
    removalDelay: 500,
    type: 'image',
    gallery:{
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% c %total%</span>',
      arrowMarkup: '<button type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0,2],
    }
  });
  $('.swiper-container-2 .slide__photo').magnificPopup({
    mainClass: 'mfp-fade',
    removalDelay: 500,
    type: 'image',
    gallery:{
      enabled:true,
      tCounter: '<span class="mfp-counter">%curr% c %total%</span>',
      arrowMarkup: '<button type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0,2],
    }
  });


  // Бургер
  var btnBurger = $('.burger');
  var navToggle = $('.nav__wrap');
  $(btnBurger).on('click', function(e) {
    e.preventDefault();
    navToggle.slideToggle();
    btnBurger.toggleClass('burger_active');
  });
  $(window).resize(function() {
    var wid = $(window).width();
    if(wid > 991 && navToggle.is(':hidden')) {
      navToggle.removeAttr('style');
    }
  });
  $('.our-proj__btn').click(function() {
    if($(window).width() < 992) {
      navToggle.slideToggle();
      btnBurger.removeClass('burger_active');
    }
  });


});

