$(function() {
			

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    document.getElementById('scroll-position').innerText = scrollPosition;
  });

      
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-RRJ7H8V693');
    
    // 문서 로드 완료 후 실행되도록 이벤트 리스너 추가
    document.addEventListener('DOMContentLoaded', function() {
      // 요소가 로드된 후에 실행될 코드
      var container = document.getElementById('container');
      var offset = container.offsetTop;
    
      const menuTrigger = document.querySelector('.menu-trigger');
    
      menuTrigger.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active-1');
      });
    });

    $(window).on('load', function() {
      $("#load").fadeOut();
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
          var scrollTop = $(this).scrollTop();
        
          if (scrollTop >= 550 && scrollTop < 649) {
            $('#section1_5 img').attr('src', '../img/nelditlogo_2.png');
          } else if (scrollTop >= 650 && scrollTop < 749) {
            $('#section1_5 img').attr('src', '../img/nelditlogo_3.png');
          } else if (scrollTop >= 750 && scrollTop < 849) {
            $('#section1_5 img').attr('src', '../img/nelditlogo_4.png');
          } else if (scrollTop >= 850) {
            $('#section1_5 img').attr('src', '../img/nelditlogo_5.png');
          } else {
            $('#section1_5 img').attr('src', '../img/nelditlogo_1.png');
          }
        
          var scale = 0.2 + (scrollTop / 1600); // Calculate the scaling factor based on scroll position
          $('#section1_5 img').css('transform', 'scale(' + scale + ')'); // Apply the scaling effect
        });

      $(window).scroll(function() {
        if ($(window).scrollTop() >= 1900) {
          $('#section2').css({
            'transition': 'background-color 0.5s',
            'background-color': '#000'
          });
        } else {
          $('#section2').css({
            'transition': 'background-color 0.5s',
            'background-color': 'white'
          });
        }
      });
      $(document).ready(function() {
        var scrollThreshold = 2400;
  
        $(window).scroll(function() {
          var scrollPosition = $(window).scrollTop();
  
          if (scrollPosition >= scrollThreshold) {
            $('#section3 #phonebox img').each(function(index) {
              $(this).addClass('visible');
            });
          }
        });
      });
      $(document).ready(function() {
        var scrollThreshold1 = 3000;
        var $h2 = $('#section5 h2');
  
        $(window).scroll(function() {
          var scrollPosition = $(window).scrollTop();
  
          if (scrollPosition >= scrollThreshold1 && !$h2.hasClass('viisible')) {
            $h2.addClass('viisible');
          } else if (scrollPosition < scrollThreshold1 && $h2.hasClass('viisible')) {
            $h2.removeClass('viisible');
          }
        });
      });
      $(window).scroll(function() {
        if ($(window).scrollTop() >= 3000) {
          $('#section5 h2').stop().fadeIn(800);
          $('#section5 h2').css({
            'transition': 'background-color 1s',
            'color': '#f1f1f1'
          });

         
        } else {
          $('#section5 h2').stop().fadeOut(800);
          $('#section5 h2').css({
            'transition': 'background-color 1s',
            'color': '#d8d8d8'
          });

        }
      });
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
    
        if (scrollTop < 3500) {
          $('#section6 img').hide()
        }else{
          $('#section6 img').show()
        }
      });
      
        // 이미지 요소를 가져옵니다.
        // 이미지 요소를 가져옵니다.
        var image = document.querySelector("#section6 img");

        // 스크롤 이벤트를 감지합니다.
        window.addEventListener("scroll", function() {
          // 현재 스크롤 위치를 가져옵니다.
          var scrollPosition = window.scrollY;

          // 이미지 크기를 계산합니다.
          var scale = 0.1 + (scrollPosition - 3500) / (4500 - 3500) * (1 - 0.1);

          // 스크롤 위치가 14100 이상이면 이미지 크기를 1로 고정합니다.
          if (scrollPosition >= 4500) {
            scale = 1;
          }

          // 이미지 밝기를 계산합니다.
          var brightness = 10 + (scrollPosition - 3500) / (4500 - 3500) * (150 - 10);

          // 스크롤 위치가 14100 이상이면 이미지 밝기를 150으로 고정합니다.
          if (scrollPosition >= 4400) {
            brightness = 50;
          }

          // 트랜지션 효과를 적용합니다.
          image.style.transition = "transform 0.5s ease, filter 0.5s ease"; // 트랜지션 지속 시간과 이징 함수를 조정할 수 있습니다.

          // 이미지 크기와 밝기를 적용합니다.
          image.style.transform = "scale(" + scale + ")";
          image.style.filter = "brightness(" + brightness + "%)";
        });


        $(window).scroll(function() {
          var scrollPosition = $(window).scrollTop();
          if (scrollPosition >= 4400) {
            $('#section6 p').css({
              transform: 'scale(1) translate(-50%, -50%)',
              transition: 'transform 0.3s ease'
            });
          } else {
            $('#section6 p').css({
              transform: 'scale(0) translate(-50%, -50%)',
              transition: 'transform 0.3s ease'
            });
          }
        });
        $('.workview').click(function(event) {
          event.preventDefault(); // 기본 클릭 동작을 중지시킴
          window.open('../낼딧-홈페이지/index.html', '_blank'); // 새 창에서 링크 열기
        });
        
        $(window).scroll(function() {
          var scrollTop = $(this).scrollTop();
 
          if (scrollTop >= 6200) {
            window.location.href = "grue_.html";
          } else {
            if (scrollTop >= 5000 && scrollTop < 6200) {
              var scale = ((scrollTop - 5000) / (6200 - 5000)) * 0.9 + 0.1;
              $('#section8 img').css({
                transform: 'scale(' + scale + ')',
                transition: 'transform 0.8s ease'
              });
            }
          }
        });
        
        
    });