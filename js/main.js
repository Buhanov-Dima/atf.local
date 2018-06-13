$(document).ready(function(){
	$(".slaider-team").owlCarousel({
    loop:false,
    margin: 20,
    nav:true,
    dots:true,
    autoHeight:true,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:2
            },
            1200:{
                items:3
            }
        }  
	});

    $(".slaider-2-2").owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoHeight:true,
    dots:false,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:2
            }
        }  
    });
    $(".slaider-c_sales-list").owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoHeight:false,
    dots:false,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:2
            }
        }  
    });
    $(".slaider-c_faq-list").owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoHeight:true,
    dots:false,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:2
            }
        }  
    });
    $(".slaider-documents").owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoHeight:true,
    dots:false,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:2
            }
        }  
    });
	$(".slaider").owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoHeight:true,
    dots:false,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:3
            },
            993:{
                items:5
            },
            1200:{
                items:6
            }
        }  
	});

	$(".slaider-1").owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    autoHeight:true,
    navText:false,
        responsive:{
            320:{
                items:2
            },
            576:{
                items:4
            },
            993:{
                items:6
            },
            1200:{
                items:7
            }
        }  
	});

  	$(".slaider-2").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoHeight:true,
    navText:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }  
	});

    $(".slaider-team-list").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoHeight:true,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:3
            },
            1200:{
                items:4
            }
        }  
    });

    $(".slaider-solutions").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoHeight:true,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:2
            }
            
        }  
    });

    $(".slaider-team-list-2").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoHeight:true,
    navText:false,
        responsive:{
            320:{
                items:1
            },
            576:{
                items:2
            },
            993:{
                items:3
            },
            1200:{
                items:4
            }
        }  
    });

    $('.c_howit-box__dot').hover(function(){
    let idDot = $(this).data('id');
    $('.c_howit-item__point'+idDot).addClass('active').siblings().removeClass('active');
    $(this).addClass('active').siblings().removeClass('active');
    }, 
    function(){
        $('.c_howit-item__point, .c_howit-box__dot').removeClass('active');
      });

  $('.c_howit-item__point').on('click', function(){
    let idDot = $(this).data('id');
    $('.c_howit-box__dot'+idDot).addClass('active').siblings().removeClass('active');
    $(this).parents('.c_howit-mod').find('.c_howit-item__point').removeClass('active');
    $(this).addClass('active');
  });

    // roadmap click info

    $(".c_roadmap-box__line").click(function(e) {
      e.preventDefault();
      $(".c_roadmap-box__line").removeClass('active');
      $(this).addClass('active');
    })

    $(".all_questions").click(function(e) {
      e.preventDefault();
      $(".all_questions").removeClass('active');
      $(this).addClass('active');
    })


    $(".c_roadmap-line").click(function(e) {
      e.preventDefault();
      $(".c_roadmap-line").removeClass('slick-current');
      $(this).addClass('slick-current');
      $(".c_roadmap-info .c_roadmap-box.slick-current").removeClass('slick-current');
      console.log($(this).attr('data-id'));
      $('.c_roadmap-box[data-id='+$(this).attr('data-id')+']').addClass('slick-current');
    })

    $(function() {
      $('.c_faq-btn').click(function() {
        $(this).siblings(".c_faq-list-open").toggle();
        $(this).toggleClass('active');
      });
    });

      wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       40,          // default
        mobile:       false,       // default
        live:         true        // default
      });
      wow.init();

      $("body").on('click', '.goto', function(e){
        var scrollTo = $(this).data('scroll');
        $('html,body').stop().animate({ scrollTop: $('#'+scrollTo).offset().top }, 1000);
        e.preventDefault();
    });


    function updater(d, h, m, s) {
      // День сброса - 27 сентября 2015 года (и далее каждые три дня)
      var baseTime = new Date(2018, 24, 12);
      // Период сброса — 3 дня
      var period = 12*24*60*60*900;

    function update() {
        var cur = new Date();
        // сколько осталось миллисекунд
        var diff = period - (cur - baseTime) % period;
        // сколько миллисекунд до конца секунды
        var millis = diff % 1000;
        diff = Math.floor(diff/1000);
        // сколько секунд до конца минуты
        var sec = diff % 60;
        if(sec < 10) sec = "0"+sec;
        diff = Math.floor(diff/60);
        // сколько минут до конца часа
        var min = diff % 60;
        if(min < 10) min = "0"+min;
        diff = Math.floor(diff/60);
        // сколько часов до конца дня
        var hours = diff % 24;
        if(hours < 10) hours = "0"+hours;
        var days = Math.floor(diff / 24);
        d.innerHTML = days;
        h.innerHTML = hours;
        m.innerHTML = min;
        s.innerHTML = sec;
      
        // следующий раз вызываем себя, когда закончится текущая секунда
        setTimeout(update, millis);
      }
      setTimeout(update, 0);
    };
     
    updater(document.getElementById("days"), document.getElementById("hours"), document.getElementById("minutes"), 
    document.getElementById("seconds"));


     // побуквенное появление заголовка
    $.fn.animate_Text = function() {
      var string = this.text();
      return this.each(function(){
       var $this = $(this);
       $this.html(string.replace(/./g, '<span class="main-h1-b1_new">$&</span>'));
       $this.find('span.main-h1-b1_new').each(function(i, el){
        setTimeout(function(){ $(el).addClass('main-h1-b1_opacity'); }, 20 * i);
       });
      });
     };
     $('.main-h1-b1').show();
     $('.main-h1-b1').animate_Text();


     // плавное появление bg
    setTimeout(function () {
        $(".header-bg").addClass("header-bg-load");
    }, 300);

     // плавное появление текста под заголовком
    setTimeout(function () {
        $(".h_desc").addClass("act-new");
    }, 1100);

    // плавное появление
    setTimeout(function () {
        $(".wrap-main-block").addClass("act-new");
    }, 1500);

    // плавное появление
    setTimeout(function () {
        $(".widgets").addClass("act-new");
    }, 2000);
    // плавное появление
    setTimeout(function () {
        $(".progressbar").addClass("act-new");
    }, 2500);
    // плавное появление

    //paralax 
    
});

$(window).bind('scroll',function(e){
    parallaxScroll();
});
 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.h_desc').css('top',(90-(scrolled*.15))+'px');
    $('.main-h1-b1').css('top',(90+(scrolled*.135))+'px');
    $('.header-bg').css('top',(100-(scrolled*.10))+'px');
    $('.bg-header').css('top',(0+(scrolled*.525))+'px');
};

jQuery(document).ready(function() {
    jQuery('.c_head-1').addClass("hidden").viewportChecker({
        classToAdd: 'visible',
        offset: 100
       });
});

