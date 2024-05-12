$(window).on('load', function() {
    var offset = $('#container').offset().top;

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


     
      
  $('.mu').hover(function() {
    $(this).stop().animate({ marginBottom: '0.3%' }, 200);
  }, function() {
    $(this).stop().animate({ marginBottom: '0' }, 200);
  });    

        $('.mu,.ci').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 1000 }, 1000);
          });
          $('.mu').hover(function() {
            $(this).stop().animate({ marginBottom: '0.3%' }, 200);
          }, function() {
            $(this).stop().animate({ marginBottom: '0' }, 200);
          });   
    }).trigger('scroll'); // 추가된 부분

      $(window).scroll(function() {
        if ($(this).scrollTop() >= 200) {
          $('.content1, .content2').animate({ marginTop: '0px' }, 300);
        }
      });
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {
          $('#section2').css({
            'transition': 'background-color 0.5s',
            'background-color': '#5D6340'
          });
        } else {
          $('#section2').css({
            'transition': 'background-color 0.5s',
            'background-color': 'white'
          });
        }
      });
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 2900) {
          $('#section5').css({
            'transition': 'background-color 0.5s',
            'background-color': '#222'
          });
        } else {
          $('#section5').css({
            'transition': 'background-color 0.5s',
            'background-color': '#013418'
          });
        }
      });
     
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop >= 700 && scrollTop <=899) {
          $('#section3 img').css({
            transform: 'scale(1.2)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 900 && scrollTop <= 1099) {
          $('#section3 img').css({
            transform: 'scale(1.4)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 1100 && scrollTop <= 1299) {
          $('#section3 img').css({
            transform: 'scale(1.5)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 1300 && scrollTop < 1499) {
          $('#section3 img').css({
            transform: 'scale(1.4)',
            transition: 'transform 0.3s ease'
          });
          
        } else if (scrollTop >= 1500 && scrollTop < 1699) {
          $('#section3 img').css({
            transform: 'scale(1.3)',
            transition: 'transform 0.3s ease'
          });
        } else {
          $('#section3 img').css({
            transform: 'scale(1.25)',
            transition: 'transform 0.3s ease'
          });
        }
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 2300) {
          $('#section4 p').css({ transform: 'scale(1)',
          transition: 'transform 0.3s ease'});
        } else {
          $('#section4 p').css({transform: 'scale(0)',
          transition: 'transform 0.3s ease'})
          
        }
        $(window).scroll(function() {
          var scrollTop = $(this).scrollTop();
        
          if (scrollTop >= 1900) {
            if (scrollTop >= 2000) {
              $('#section4 img').css({
                filter: 'brightness(60%)',
                transition: 'filter 0.3s ease'
              });
            } else if (scrollTop >= 2200) {
              $('#section4 img').css({
                filter: 'brightness(30%)',
                transition: 'filter 0.3s ease'
              });
            } else if (scrollTop >= 2400) {
              $('#section4 img').css({
                filter: 'brightness(10%)',
                transition: 'filter 0.3s ease'
              });
            } else {
              $('#section4 img').css({
                filter: 'brightness(80%)',
                transition: 'filter 0.3s ease'
              });
            }
          } else {
            $('#section4 img').css({
              filter: 'none',
              transition: 'filter 0.3s ease'
            });
          }
        });
      });
      $('.workview').click(function(event) {
        event.preventDefault(); // 기본 클릭 동작을 중지시킴
        window.open('../lacoste/index.html', '_blank'); // 새 창에서 링크 열기
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 3901) {
          window.location.href = "content5.html";
        } else {
          if (scrollTop >= 3000 && scrollTop < 4000) {
            var scale = ((scrollTop - 3000) / (4000 - 3000)) * 2 + 0.1;
            $('#section6 img').css({
              transform: 'scale(' + scale + ')',
              transition: 'transform 0.8s ease'
            });
          }
        }
      });
   
    
    });