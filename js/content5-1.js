$(window).on('load', function() {
    var offset = $('#container').offset().top;
    $('h2').text(offset);
    const menuTrigger = document.querySelector('.menu-trigger');

    menuTrigger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active-1');
    
      
    });


      $("#load").fadeOut();

  
    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();
     
  
      if (scrollTop <= 599) {
        $('#section1 img').css({
          transform: 'scaleX(1.2)',
          transition: 'transform 0.5s ease',
          filter: 'brightness(0.5)'
        });
        $('.section1_tx p').fadeIn(500);
      } else if (scrollTop >= 600) {
        $('#section1 img').css({
          transform: 'scaleX(1)',
          transition: 'transform 0.5s ease',
          filter: 'brightness(1)'
        });
        $('.section1_tx p').fadeOut(0);
      }
    }).trigger('scroll'); // 추가된 부분

        var offset = $('#container').offset().top;
    
    
        $(window).on('scroll',function(){
          var ab = $(this).scrollTop();

        });
        $('.section1_tx p').fadeOut(0);
        $('.section1_tx p').fadeIn(500);
        $('.mu,.ci').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 1000 }, 1000);
          });
          $('.mu').hover(function() {
            $(this).stop().animate({ marginBottom: '0.3%' }, 200);
          }, function() {
            $(this).stop().animate({ marginBottom: '0' }, 200);
          });    
          $(window).scroll(function() {
            if ($(window).scrollTop() >= 200) {
              $('.content1_left img, .content1_right').css({
                'transform': 'scaleY(1)',
                'transform-origin': 'top',
                'transition': 'transform 0.5s ease'
              });
            }else{
                $('.content1_left img, .content1_right').css({
                    'transform': 'scaleY(0)',
                    'transform-origin': 'top',
                    'transition': 'transform 0.5s ease'
                });
            }
          });
          $(window).scroll(function() {
            if ($(window).scrollTop() >= 1200) {
              $('.content2_left img, .content2_right').css({
                'transform': 'scaleY(1)',
                'transform-origin': 'top',
                'transition': 'transform 0.5s ease'
              });
            }else{
                $('.content2_left img, .content2_right').css({
                    'transform': 'scaleY(0)',
                    'transform-origin': 'top',
                    'transition': 'transform 0.5s ease'
                });
            }
          });
          $(window).scroll(function() {
            if ($(window).scrollTop() >= 1800) {
              $('#section2').css({
                'transition': 'background-color 0.5s',
                'background-color': '#D7D7D7'
              });
            } else {
              $('#section2').css({
                'transition': 'background-color 0.5s',
                'background-color': '#222'
              });
            }
          });
          
          
          
          $(window).scroll(function() {
            if ($(window).scrollTop() >= 1900) {
              $('#section3 img').css({
                'transform': 'translateY(100px)',
                'transition': 'transform 1s ease'
              });
            } else {
              $('#section3 img').css({
                'transform': 'translateY(0)',
                'transition': 'transform 1s ease'
              });
            }
          });
          $(window).scroll(function() {
            if ($(window).scrollTop() >= 2600) {
              $('#section4 img').css({
                'transform': 'translateY(-100px)',
                'transition': 'transform 1s ease'
              });
            } else {
              $('#section4 img').css({
                'transform': 'translateY(0)',
                'transition': 'transform 1s ease'
              });
            }
          });
          $(window).scroll(function() {
            if ($(window).scrollTop() >= 3700) {
              $('#section5 img').css({
                'transform': 'translateY(0)',
                'transition': 'transform 1s ease'
              });
            } else {
              $('#section5 img').css({
                'transform': 'translateY(100px)',
                'transition': 'transform 1s ease'
              });
            }
          });
        
          $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
          
            if (scrollTop >= 5750) {
              window.location.href = "spotify_.html";
            } else {
              if (scrollTop >= 4900 && scrollTop < 5900) {
                var scale = ((scrollTop - 4900) / (5900 - 4900)) * 1.5 + 0.1;
                $('#section7 img').css({
                  transform: 'scale(' + scale + ')',
                  transition: 'transform 0.8s ease'
                });
              }
            }
          });
       
      
          
          
          
          
});  