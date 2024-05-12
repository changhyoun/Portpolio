$(function() {
  $(window).on('load', function() {
    $("#load").fadeOut();
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
              $('#section1_5 img').attr('src', '../img/gruelogo_2.png');
            } else if (scrollTop >= 650 && scrollTop < 749) {
              $('#section1_5 img').attr('src', '../img/gruelogo_3.png');
            } else if (scrollTop >= 750 && scrollTop < 849) {
              $('#section1_5 img').attr('src', '../img/gruelogo_4.png');
            } else if (scrollTop >= 850) {
              $('#section1_5 img').attr('src', '../img/gruelogo_5.png');
            } else {
              $('#section1_5 img').attr('src', '../img/gruelogo_1.png');
            }
          
            var scale = 0.2 + (scrollTop / 1600); // Calculate the scaling factor based on scroll position
            $('#section1_5 img').css('transform', 'scale(' + scale + ')'); // Apply the scaling effect
          });
  
        $(window).scroll(function() {
          if ($(window).scrollTop() >= 1900) {
            $('#section2').css({
              'transition': 'background-color 0.5s',
              'background-color': '#626f80'
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
          
            if (scrollTop >= 2700) {
              if (scrollTop >= 3000) {
                $('#section4 img').css({
                  filter: 'brightness(60%)',
                  transition: 'filter 0.3s ease'
                });
              } else if (scrollTop >= 3300) {
                $('#section4 img').css({
                  filter: 'brightness(30%)',
                  transition: 'filter 0.3s ease'
                });
              } else if (scrollTop >= 3600) {
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
          $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
          
            if (scrollTop >= 3600) {
              $('#section4 p').css({ transform: 'scale(1)',
              transition: 'transform 0.3s ease'});
            } else {
              $('#section4 p').css({transform: 'scale(0)',
              transition: 'transform 0.3s ease'})
              
            }
          });
    

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ).hide(),
            $navOptions = $( '#nav-options' ).hide(),
            $shadow = $( '#shadow' ).hide(),
            slicebox = $( '#sb-slider' ).slicebox( {
                onReady : function() {

                    $navArrows.show();
                    $navOptions.show();
                    $shadow.show();

                },
                orientation : 'r',
                autoplay : true,
                cuboidsRandom : true,
                disperseFactor : 30
            } ),
            
            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':first' ).on( 'click', function() {

                    slicebox.next();
                    return false;

                } );

                $navArrows.children( ':last' ).on( 'click', function() {
                    
                    slicebox.previous();
                    return false;

                } );

                $( '#navPlay' ).on( 'click', function() {
                    
                    slicebox.play();
                    return false;

                } );

                $( '#navPause' ).on( 'click', function() {
                    
                    slicebox.pause();
                    return false;

                } );

            };

            return { init : init };

    })();

    Page.init();

    $('.workview').click(function(event) {
        event.preventDefault(); // 기본 클릭 동작을 중지시킴
        window.open('../grue/index.html', '_blank'); // 새 창에서 링크 열기
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 4901) {
          window.location.href = "content1.html";
        } else {
          if (scrollTop >= 4000 && scrollTop < 5000) {
            var scale = ((scrollTop - 4000) / (5000 - 4000)) * 0.9 + 0.1;
            $('#section6 img').css({
              transform: 'scale(' + scale + ')',
              transition: 'transform 0.8s ease'
            });
          }
        }
      });
      
      

});