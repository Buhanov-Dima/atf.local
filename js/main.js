$(document).ready(function(){
	$(".slaider-team").owlCarousel({
    loop:false,
    margin: 20,
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
                items:3
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
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
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
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
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

    // roadmap click info

    $(".c_roadmap-box__line").click(function(e) {
      e.preventDefault();
      $(".c_roadmap-box__line").removeClass('active');
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
});