jQuery(document).ready(function($) {

// fancybox
	$('.fancybox').fancybox();

  
// WOW
  wow = new WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       40,          // default
    mobile:       false,       // default
    live:         true        // default
  });
  wow.init();


// nav active
  $('.h_nav-btn').on('click', function(event) {
    event.preventDefault();
    $('.h_nav').toggleClass('active');
  });


// Slider
  $('.c_product-list').slick({
    slidesToShow: 6, slidesToScroll: 1, arrows: true, autoplay: true, autoplaySpeed: 8000,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 1 } }
    ]
  });


  $('.c_why-gallery').slick({
    slidesToShow: 3, slidesToScroll: 3, arrows: true, dots: true, autoplay: true, autoplaySpeed: 8000,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 1 } }
    ]
  });


  $('.c_press-list').slick({
    slidesToShow: 2, slidesToScroll: 2, arrows: true, dots: true, autoplay: true, autoplaySpeed: 8000,
    responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 1 } }
    ]
  });


  $('.c_roadmap-list').slick({
    slidesToShow: 7, slidesToScroll: 1, asNavFor: '.c_roadmap-info', arrows: true, infinite: false, focusOnSelect: true
  });
  $('.c_roadmap-info').slick({
    slidesToShow: 1, slidesToScroll: 1, arrows: false, dots: false, fade: true, infinite: false, asNavFor: '.c_roadmap-list'
  });


// roadmap click info
  $('.c_roadmap-box__head').on('click', function() {
    $(this).parent().addClass('active').siblings().removeClass('active');
  });


// how it work
  $('.c_howit-box__dot').hover(function(){
    let idDot = $(this).data('id');
    $('.c_howit-item__point'+idDot).addClass('active').siblings().removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
  }, function(){
    $('.c_howit-item__point, .c_howit-box__dot').removeClass('active');
  });

  $('.c_howit-item__point').on('click', function(){
    let idDot = $(this).data('id');
    $('.c_howit-box__dot'+idDot).addClass('active').siblings().removeClass('active');
    $(this).parents('.c_howit-mod').find('.c_howit-item__point').removeClass('active');
    $(this).addClass('active');
  });


// Solution & what bg
  particlesJS('particles-js', {
  "particles": { /* настройка частиц */
    "number": {
      "value": 20, /* количество частиц */
      "density": { /* плотность частиц */
        "enable": true, /* включено/выключено */
        "value_area": 800 /* площадь, по которой частицы рассеяны, чем больше число, тем меньше плотность */
      }
    },
    "color": { /* цвет */
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle", /* форма: "circle", "edge", "triangle", "polygon", "star", "image" */
      "stroke": { /* обводка частиц */
        "width": 0, /* ширина обводки */
        "color": "#000000" /* цвет обводки */
      },
      "polygon": {
        "nb_sides": 5 /* количество сторон полигона (type: polygon), от 3 до 12 */
      }
    },
    "opacity": { /* прозрачность */
      "value": 0.5, /* значение прозрачности от 0.0 до 1.0 */
      "random": false, /* случайное значение для каждой частцы, но максимальным будет значение value */
      "anim": { /* анимация прозрачности */
        "enable": false, /* включено/выключено */
        "speed": 1, /* скорость анимации */
        "opacity_min": 0.1, /* минимальная прозрачность анимации */
        "sync": false /* анимация для всех частиц происходит синхронно или нет */
      }
    },
    "size": { /* размер */
      "value": 10, /* значение размера */
      "random": true, /* случайный размер */
      "anim": { /* анимация изменения размера частиц */
        "enable": false, /* включено/выключено */
        "speed": 80, /* скорость анимации */
        "size_min": 0.1, /* минимальный размер частицы */
        "sync": false /* анимация для всех частиц происходит синхронно или нет */
      }
    },
    "line_linked": { /* связующие линии */
      "enable": true, /* включено/выключено */
      "distance": 300, /* расстояние между частицами, при котором проявляется линия */
      "color": "#ffffff", /* цвет */
      "opacity": 0.4, /* прозрачность */
      "width": 2 /* ширина */
    },
    "move": { /* движение */
      "enable": true, /* включено/выключено */
      "speed": 2, /* скорость движения */
      "direction": "none", /* направление: none (хаотично), top, top-right, right, bottom-right, bottom, bottom-left, left, top-left */
      "random": false, /* скорость движения для каждой частицы случайна */
      "straight": false, /* движение строго в указанном направлении */
      "out_mode": "out", /* out (частицы выходят за пределы экрана) или bounce (не выходят за пределы) */
      "bounce": false, /* частицы отталкиваются друг от друга или нет */
      "attract": { /* притяжение частиц друг к другу */
        "enable": false, /* включено/выключено */
        "rotateX": 600, /* притяжение по горизонтали */
        "rotateY": 1200 /* притяжение по вертикали */
      }
    }
  },
  "interactivity": { /* интерактивность */
    "detect_on": "canvas", /* реакция на событие мыши в окне (window) или в объекте (canvas) */
    "events": { /* события */
      "onhover": { /* по наведению */
        "enable": false, /* включено/выключено */
        "mode": "repulse" /* repulse (отталкивание частиц), grab (соединение связующих линий), bubble ('пузырение' частиц) */
      },
      "onclick": { /* по клику */
        "enable": true, /* включено/выключено */
        "mode": "push" /* push (добавление новых частиц), remove (удаление частиц), bubble (временное изменение прозрачности частиц на непрозрачное и увеличение их в размере), repulse (отталкивание частиц) */
      },
      "resize": true /* я не понял на что влияет этот параметр, экспериментируйте =) */
    },
    "modes": { /* параметры видов событий */
      "grab": { /* при onhover: mode: grab */
        "distance": 800, /* расстояние от мышки до частиц, при котором проявляются линии */
        "line_linked": {
          "opacity": 1 /* прозрачность линий */
        }
      },
      "bubble": { /* при onhover или onclick: mode: bubble */
        "distance": 800, /* расстояние от мышки до частиц, при котором происходит эффект */
        "size": 80, /* размер увеличения частиц */
        "duration": 2, /* продолжительность эффекта в секундах при клике */
        "opacity": 0.8, /* максимальная прозрачность */
        "speed": 3 /* скорость эффекта */
      },
      "repulse": { /* при onhover или onclick: mode: repulse */
        "distance": 400, /* расстояние отталкивания */
        "duration": 0.4 /* продолжительность отталкивания */
      },
      "push": { /* при onclick: mode: push */
        "particles_nb": 4 /* количество добавляемых частиц */
      },
      "remove": { /* при onclick: mode: remove */
        "particles_nb": 2 /* количество убираемых частиц */
      }
    }
  },
  "retina_detect": true /* поддержка ретина-дисплеев */
}, function(){ /* Вызываем callback-функцию */
  console.log('callback - particles.js загружен!');
});



// scroll to
	$("body").on('click', '.goto', function(e){
		var scrollTo = $(this).data('scroll');
		$('html,body').stop().animate({ scrollTop: $('#'+scrollTo).offset().top }, 1000);
		e.preventDefault();
	});


//  
// Работа с попап
//  
  $('.overlay, .popup-close').on('click', function(){
    $('.popup').fadeOut(); 
    $('.overlay').fadeOut();
  });
  $('.action').on('click', function(){
    var event = $(this).data('event'),
    eventTitle = $(this).data('name');
    $('input[name="input_type"]').val(eventTitle);
    $('.overlay').fadeIn();
    $('.popup-' + event).centered_popup(); 
    $('.popup-' + event).fadeIn(); 
    return false;
  });
  
// Маска для телефона
  $("[type=tel]").mask("+7(999) 999-99-99");
    
// Обработка форм на AJAX
  $.validator.addMethod("minlenghtphone", function (value, element) {
      return value.replace(/\D+/g, '').length > 10;
  },
  "Введите полный номер.");
  
  $(".c_form").each(function(){
      $(this).validate({
          rules: {
              name: {
                required: true
              },
              tel: {
                required: true,
                minlenghtphone: true
              }
          },
          submitHandler: function(form, event){
              event = event || window.event;
              $('.overlay').fadeOut(300);
              $('.popup').fadeOut();

              $(form).ajaxSubmit({
                  error: function(){
                    // После ошибки
                  },
                  success: function(responseText, statusText, xhr){
                            // Цель на отправку формы
                            /****  Поменять номер счетчика ****/
                            //yaCounterxxxxxx.reachGoal('ORDER');
                        
                            // Очистка форм после отправки
                            $('.form-input').val('');
                        
                            // Появление "спасибо"                        
							$('.popup').fadeOut();							
							$('.popup-thy').centered_popup();
							$('.overlay').fadeIn();
							$('.popup-thy').fadeIn();
                        
                            // Через 5 сек скрываем "спасибо" 
							setTimeout(function(){
								$('.popup-thy').fadeOut(500);
								$('.overlay').fadeOut(500);
							}, 5 * 1000)
                  }
              });
              return false;
         }
      });
  });
  //
});

// Центрируем эелемент
$.fn.centered_popup = function(top) {
    this.css('position', 'absolute');
    this.css('left', ($(window).outerWidth() - this.outerWidth()) / 2 + $(window).scrollLeft() + 'px');
    if( top == 1 )
        this.css('top', $(window).scrollTop() + 'px');
    else
        this.css('top', ($(window).outerHeight() - this.outerHeight()) / 2 + $(window).scrollTop() + 'px');
}