$(function(){
 
  $(window).on('load', function() {
     $("#load").fadeOut();
  });

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RRJ7H8V693');

    var offset = $('#container').offset().top;

    const menuTrigger = document.querySelector('.menu-trigger');

    menuTrigger.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active-1');

      
      
    });
    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();

  
      if (scrollTop <= 599) {
      
        $('.section1_tx p').fadeIn(500);
        
      } else if (scrollTop >= 600) {
      
        $('.section1_tx p').fadeOut(0);
      }
    }).trigger('scroll'); // 추가된 부분
  

    $('.mu,.ci').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 1200 }, 1000);
      });
      $('.mu').hover(function() {
        $(this).stop().animate({ marginBottom: '0.3%' }, 200);
      }, function() {
        $(this).stop().animate({ marginBottom: '0' }, 200);
      });      
      $(window).scroll(function() {
        if ($(this).scrollTop() >= 1300) {
          $('.content1, .content2').animate({ marginTop: '0px' }, 300);

        }
      
      });

      $(window).scroll(function() {
        if ($(window).scrollTop() >= 1900) {
          $('#section2').css({
            'transition': 'background-color 0.5s',
            'background-color': '#556B8F'
          });
        } else {
          $('#section2').css({
            'transition': 'background-color 0.5s',
            'background-color': 'white'
          });
        }
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop >= 2500) {
          $('.cover-image').css({
            transform: 'scale(1.4)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 2300) {
          $('.cover-image').css({
            transform: 'scale(1.3)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 2100) {
          $('.cover-image').css({
            transform: 'scale(1.2)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 1900) {
          $('.cover-image').css({
            transform: 'scale(1.1)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 1700) {
          $('.cover-image').css({
            transform: 'scale(1)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 1600) {
          $('.cover-image').css({
            transform: 'scaleX(0.9)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop <= 1599) {
          $('.cover-image').css({
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease'
          });
        } else {
          $('.cover-image').css({
            transform: 'scale(1)',
            transition: 'transform 0.3s ease'
          });
        }
      });

      
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        
 
        if (scrollTop >= 3500) {
          $('.cover-image2').css({
            transform: 'scale(1)',
            transition: 'transform 0.3s ease'
          });
        
        }else if (scrollTop >= 3300) {
          $('.cover-image2').css({
            transform: 'scale(1.2)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 3200) {
          $('.cover-image2').css({
            transform: 'scale(1.4)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 3100) {
          $('.cover-image2').css({
            transform: 'scale(1.6)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 2900) {
          $('.cover-image2').css({
            transform: 'scale(1.8)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 2700) {
          $('.cover-image2').css({
            transform: 'scale(2)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop >= 2550) {
          $('.cover-image2').css({
            transform: 'scaleY(1)',
            transition: 'transform 0.3s ease'
          });
        } else if (scrollTop <= 2549) {
          $('.cover-image2').css({
            transform: 'scaleY(0)',
            transition: 'transform 0.3s ease'
          });
        } 
      });

      $(window).scroll(function() {
        if ($(window).scrollTop() >= 3900) {
          $('#section4_5').css({
            'transition': 'background-color 0.5s',
            'background-color': '#394049'
          });
        } else {
          $('#section4_5').css({
            'transition': 'background-color 0.5s',
            'background-color': '#556B8F'
          });
        }
      });
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 4200) {
          $('#section5').css({
            'transition': 'background-color 0.5s',
            'background-color': '394049'
          });
        } else {
          $('#section5').css({
            'transition': 'background-color 0.5s',
            'background-color': '#556B8F'
          });
        }
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 4200) {
          var video = $('#section5 video')[0];
          video.playbackRate = 3; // 배속을 1.5배로 설정
          video.play(); // 비디오 재생
        }
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 3700) {
          $('#section5 img, #section5 video').css('opacity', '1');
        } else {
          $('#section5 img, #section5 video').css('opacity', '0');
        }
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 550 && scrollTop < 649) {
          $('#section1_5 img').attr('src', '../img/chunlogo_2.png');
        } else if (scrollTop >= 650 && scrollTop < 749) {
          $('#section1_5 img').attr('src', '../img/chunlogo_3.png');
        } else if (scrollTop >= 750 && scrollTop < 849) {
          $('#section1_5 img').attr('src', '../img/chunlogo_4.png');
        } else if (scrollTop >= 850) {
          $('#section1_5 img').attr('src', '../img/chunlogo_5.png');
        } else {
          $('#section1_5 img').attr('src', '../img/chunlogo_1.png');
        }
      
        var scale = 1 + (scrollTop / 800); // Calculate the scaling factor based on scroll position
        $('#section1_5 img').css('transform', 'scale(' + scale + ')'); // Apply the scaling effect
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 5200) {
          if (scrollTop >= 5300) {
            $('#section7 img').css({
              filter: 'brightness(60%)',
              transition: 'filter 0.3s ease'
            });
          } else if (scrollTop >= 5400) {
            $('#section7 img').css({
              filter: 'brightness(30%)',
              transition: 'filter 0.3s ease'
            });
          } else if (scrollTop >= 5600) {
            $('#section7 img').css({
              filter: 'brightness(10%)',
              transition: 'filter 0.3s ease'
            });
          } else {
            $('#section7 img').css({
              filter: 'brightness(80%)',
              transition: 'filter 0.3s ease'
            });
          }
        } else {
          $('#section7 img').css({
            filter: 'none',
            transition: 'filter 0.3s ease'
          });
        }
      });

      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 5600) {
          $('#section7 p').css({ transform: 'scale(1)',
          transition: 'transform 0.3s ease'});
        } else {
          $('#section7 p').css({transform: 'scale(0)',
          transition: 'transform 0.3s ease'})
          
        }
      });
     
      $('.workview').click(function(event) {
        event.preventDefault(); // 기본 클릭 동작을 중지시킴
        window.open('../충남대학교 병원/index.html', '_blank'); // 새 창에서 링크 열기
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 7401) {
          window.location.href = "content2.html";
        } else {
          if (scrollTop >= 6350 && scrollTop < 7450) {
            var scale = ((scrollTop - 6350) / (7450 - 6350)) * 0.9 + 0.1;
            $('#section9 img').css({
              transform: 'scale(' + scale + ')',
              transition: 'transform 0.8s ease'
            });
          }
        }
      });
      
      
   
});