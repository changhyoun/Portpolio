$(function() {



    $(window).on('scroll', function() {
      var scrollPosition = $(this).scrollTop();
      $('h1').text(scrollPosition);
    });
    $("#section4 .content6 p").stop().hover(function() {
      $(this).css({
        "transition": "all 0.5s ease",
        "background-color": "#1ED760",
        "transform": "scale(1.05)"
      });
    }, function() {
      $(this).css({
        "transition": "all 0.5s ease",
        "background-color": "",
        "transform": ""
      });
    });


    
    $(window).on('load', function() {
      $('#section1 .content1')
        .css('transition', 'margin-left 0.5s ease')
        .css('marginLeft', '0');
    });
      
     $(window).on('load', function() {
  $('#section1 .content2')
    .css('transition', 'margin-left 2s ease, margin-right 2s ease')  // margin-right에도 트랜지션 추가
    .css('marginLeft', '0')
    .css('marginRight', '0');  // margin-right도 0으로 설정
});
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 1200) {
          $('#section2 p:nth-of-type(2)').css('marginRight', '10%');
       
        }else{
            $('#section2 p:nth-of-type(2)').css( 'marginRight','-50%');
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 700 && scrollTop <1700) {
            $('#section2 p:nth-of-type(2)').css( 'marginRight', '10%');
         
          }else{
              $('#section2 p:nth-of-type(2)').css('marginRight','-100%' );
          }
        }
      });

     
    
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 1000) {
          $('#section2 p:nth-of-type(1)').css( 'marginLeft', '5%');
       
        }else{
            $('#section2 p:nth-of-type(1)').css( 'marginLeft', '-60%' );
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 350 && scrollTop <1350) {
            $('#section2 p:nth-of-type(1)').css( 'marginLeft', '5%');
         
          }else{
              $('#section2 p:nth-of-type(1)').css('marginLeft', '-100%'  );
          }
        }
      });
      $('.section3_tie p').css('width', $('.section3_tie p a').width() + 'px');

      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 2150) { 
            $('#section3 .content2_1').css('marginTop','0%')
        }else{
            $('#section3 .content2_1').css('marginTop','')
        }

        $("#section3 .content2_1_box").stop().hover(function() {
          $(this).css({
            "transition": "all 0.5s ease",
            "background-color": "#1ED760",
            "transform": "scale(1.2)"
          });
        }, function() {
          $(this).css({
            "transition": "all 0.5s ease",
            "background-color": "",
            "transform": ""
          });
        });

        $(window).on('scroll', function() {
            var scrollTop = $(this).scrollTop();
          
            if (scrollTop >= 1950) { 
                $('#section3 .content2_2').css('marginTop','0%')
            }else{
                $('#section3 .content2_2').css('marginTop','')
            }
            if ($(window).width() <= 768) {
              // 스크린 크기가 1023px 이하인 경우
              if (scrollTop >= 1400 && scrollTop <2400) {
                $('#section3 .content2_2').css( 'marginTop','-10%');
             
              }else{
                  $('#section3 .content2_2').css('marginTop','' );
              }
            }
        });

        
    });
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 3110) { 
            $('#section4 .content2_right').css('marginTop','0%')
        }else{
            $('#section4 .content2_right').css('marginTop','')
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 2050 && scrollTop <3050) {
            $('#section4 .content2_right').css( 'marginTop','-10%');
         
          }else{
              $('#section4 .content2_right').css('marginTop','' );
          }
        }
    });
   
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 3850) { 
            $('#section4 .content3_right').css('marginTop','0%')
        }else{
            $('#section4 .content3_right').css('marginTop','')
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 2500 && scrollTop <3500) {
            $('#section4 .content3_right').css( 'marginTop','-10%');
         
          }else{
              $('#section4 .content3_right').css('marginTop','' );
          }
        }
    });

    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 4550) { 
            $('#section4 .content4_right').css('marginTop','0%')
        }else{
            $('#section4 .content4_right').css('marginTop','')
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 3000 && scrollTop <4000) {
            $('#section4 .content4_right').css( 'marginTop','-10%');
         
          }else{
              $('#section4 .content4_right').css('marginTop','' );
          }
        }
    });
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 5350) { 
            $('#section4 .content5_right').css('marginTop','0%')
        }else{
            $('#section4 .content5_right').css('marginTop','')
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 3500 && scrollTop <4500) {
            $('#section4 .content5_right').css( 'marginTop','-10%');
         
          }else{
              $('#section4 .content5_right').css('marginTop','' );
          }
        }
    });
    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();
    
      if (scrollTop >= 6050) {
        $('.section5_1 p:nth-of-type(1)').css( 'marginLeft', '5%');
     
      }else{
          $('.section5_1 p:nth-of-type(1)').css( 'marginLeft', '-100%' );
      }
      if ($(window).width() <= 768) {
        // 스크린 크기가 1023px 이하인 경우
        if (scrollTop >= 4300 && scrollTop <5300) {
          $('.section5_1 p:nth-of-type(1)').css( 'marginLeft', '5%');
       
        }else{
            $('.section5_1 p:nth-of-type(1)').css('marginLeft', '-150%'  );
        }
      }
    });

    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();
    
      if (scrollTop >= 6500) {
        $('.section5_1 p:nth-of-type(2)').css('marginRight', '10%');
     
      }else{
          $('.section5_1 p:nth-of-type(2)').css( 'marginRight','-100%');
      }
      if ($(window).width() <= 768) {
        // 스크린 크기가 1023px 이하인 경우
        if (scrollTop >= 4400 && scrollTop <5400) {
          $('.section5_1 p:nth-of-type(2)').css( 'marginRight', '10%');
       
        }else{
            $('.section5_1 p:nth-of-type(2)').css('marginRight','-150%' );
        }
      }
    });

    $(document).ready(function() {
      var animationRunning = false;
    
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 7200 && scrollTop <= 8000) {
          if (!animationRunning) {
            animateLeft();
            animationRunning = true;
          }
        } else {
          if (animationRunning) {
            $('.section5_2_2_all').stop();
            animationRunning = false;
          }
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 5000 && scrollTop <6000) {
            if (!animationRunning) {
              animateLeft();
              animationRunning = true;
            }
          }else{
            if (animationRunning) {
              $('.section5_2_2_all').stop();
              animationRunning = false;
            }
          }
        }
      });
    
      $('.section5_2_2_box1, .section5_2_2_box2, .section5_2_2_box3, .section5_2_2_box4, .section5_2_2_box5, .section5_2_2_box6, .section5_2_2_box7, .section5_2_2_box8, .section5_2_2_box9, .section5_2_2_box10, .section5_2_2_box11, .section5_2_2_box12, .section5_2_2_box13, .section5_2_2_box14, .section5_2_2_box15').hover(
        function() {
          $(this).find('img').css('filter', 'saturate(0%)');
          if (animationRunning) {
            $('.section5_2_2_all').stop();
            animationRunning = false;
          }
        },
        function() {
          $(this).find('img').css('filter', 'saturate(100%)');
          if (!animationRunning) {
            animateLeft();
            animationRunning = true;
          }
        }
      );
    
      function animateLeft() {
        $('.section5_2_2_all').animate({ 
          left: '-300%'
        }, 40000, 'linear', function() {
          $('.section5_2_2_all').css('left', '0');
          animateLeft();
        });
      }
    });
    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();
    
      if (scrollTop >= 7750) {
        $('#section6 p:nth-of-type(1)').css('marginLeft', '10%');
      } else {
        $('#section6 p:nth-of-type(1)').css('marginLeft', '-40%');
      }
    
      if ($(window).width() <= 1023) {
        // 스크린 크기가 1023px 이하인 경우
        if (scrollTop >= 7850) {
          $('#section6 p:nth-of-type(1)').css('marginLeft', '10%');
        } else {
          $('#section6 p:nth-of-type(1)').css('marginLeft', '-40%');
        }
      }
      
      if ($(window).width() <= 768) {
        // 스크린 크기가 1023px 이하인 경우
        if (scrollTop >= 5700) {
          $('#section6 p:nth-of-type(1)').css('marginLeft', '10%');
        } else {
          $('#section6 p:nth-of-type(1)').css('marginLeft', '-100%');
        }
      }
      
    });

    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();
    
      if (scrollTop >= 8050) {
        $('#section6 p:nth-of-type(2)').css('marginRight', '20%');
     
      }else{
          $('#section6 p:nth-of-type(2)').css( 'marginRight','-50%');
      }
      if ($(window).width() <= 1023) {
        // 스크린 크기가 1023px 이하인 경우
        if (scrollTop >= 8150) {
          $('#section6 p:nth-of-type(2)').css( 'marginRight', '20%');
       
        }else{
            $('#section6 p:nth-of-type(2)').css( 'marginRight', '-50%' );
        }
      }
      if ($(window).width() <= 768) {
        // 스크린 크기가 1023px 이하인 경우
        if (scrollTop >= 5900) {
          $('#section6 p:nth-of-type(2)').css('marginRight', '10%');
        } else {
          $('#section6 p:nth-of-type(2)').css( 'marginRight', '-100%' );
        }
      }
    });
    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();
    
      if (scrollTop >= 8350) {
        $('#section6 p:nth-of-type(3)').css( 'marginLeft', '10%');
     
      }else{
          $('#section6 p:nth-of-type(3)').css( 'marginLeft', '-40%' );
      }
      if ($(window).width() <= 1023) {
        // 스크린 크기가 1023px 이하인 경우
        if (scrollTop >= 8450) {
          $('#section6 p:nth-of-type(3)').css( 'marginLeft', '10%');
       
        }else{
            $('#section6 p:nth-of-type(3)').css( 'marginLeft', '-70%' );
        }
      }
      if ($(window).width() <= 768) {
        // 스크린 크기가 1023px 이하인 경우
        if (scrollTop >= 6100) {
          $('#section6 p:nth-of-type(3)').css( 'marginLeft', '10%');
       
        }else{
            $('#section6 p:nth-of-type(3)').css( 'marginLeft', '-100%' );
        }
      }
    });
 
      // content2_2 요소를 호버할 때
      $("#section7 .content1_1").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
       // content2_2 요소를 호버할 때
       $("#section7 .content1_2").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
    
       // content2_2 요소를 호버할 때
       $("#section7 .content1_3").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
    
       // content2_2 요소를 호버할 때
       $("#section7 .content2_1").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
    
       // content2_2 요소를 호버할 때
       $("#section7 .content2_2").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
    
       // content2_2 요소를 호버할 때
       $("#section7 .content2_3").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
    
       // content2_2 요소를 호버할 때
       $("#section7 .content3_1").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
    
       // content2_2 요소를 호버할 때
       $("#section7 .content3_2").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
    
       // content2_2 요소를 호버할 때
       $("#section7 .content3_3").hover(function() {
        // p 요소의 스타일 변경
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "#f5f5f5");
      }, function() {
        // 호버가 해제될 때 원래 스타일로 복원
        $(this).find("p:nth-of-type(1), p:nth-of-type(2)").css("color", "");
      });
    
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 8850) {
          $(' #section7 .content1_1,#section7 .content2_1,#section7 .content3_1').css( 'marginTop', '0%');
       
        }else{
            $( '#section7 .content1_1,#section7 .content2_1,#section7 .content3_1').css( 'marginTop', '' );
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 6400) {
            $(' #section7 .content1_1,#section7 .content2_1,#section7 .content3_1').css('marginTop', '-0.3%');
         
          }else{
              $('#section6 p:nth-of-type(3)').css( 'marginTop', ''  );
          }
        }
      });
      
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 9050) {
          $(' #section7 .content1_2,#section7 .content2_2,#section7 .content3_2').css( 'marginTop', '0%');
       
        }else{
            $( '#section7 .content1_2,#section7 .content2_2,#section7 .content3_2').css( 'marginTop', '' );
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 6600) {
            $(' #section7 .content1_2,#section7 .content2_2,#section7 .content3_2').css('marginTop', '0%');
         
          }else{
            $('#section7 .content1_2,#section7 .content2_2,#section7 .content3_2').css( 'marginTop', '' );
          }
        }
      });
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 9250) {
          $(' #section7 .content1_3,#section7 .content2_3,#section7 .content3_3').css( 'marginTop', '0%');
       
        }else{
            $( '#section7 .content1_3,#section7 .content2_3,#section7 .content3_3').css( 'marginTop', '' );
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 6800) {
            $(' #section7 .content1_3,#section7 .content2_3,#section7 .content3_3').css('marginTop', '0%');
         
          }else{
            $(' #section7 .content1_3,#section7 .content2_3,#section7 .content3_3').css( 'marginTop', '' );
          }
        }
      });
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if (scrollTop >= 10400 && scrollTop <= 13300) {
          $('.section8_1 img').css({
            position: 'fixed',
            top: '50%',
            left: '48.5%',
            transform: 'translate(-50%, -50%)',
            display: 'block' // 이미지 표시
          });
        } else {
          $('.section8_1 img').css({
            position: 'static',
            top: 'auto',
            left: 'auto',
            transform: 'none',
            display: 'none' // 이미지 숨김
          });
          
        }
        if ($(window).width() <= 1850) {
        if (scrollTop >= 10400 && scrollTop <= 13300) {
          $('.section8_1 img').css({
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'block' // 이미지 표시
          });
        } else {
          $('.section8_1 img').css({
            position: 'static',
            top: 'auto',
            left: 'auto',
            transform: 'none',
            display: 'none' // 이미지 숨김
          });
        }
        }

        if ($(window).width() <= 1024) {
          if (scrollTop >= 10400 && scrollTop <= 13300) {
            $('.section8_1 img').css({
              position: 'fixed',
              top: '53%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'block' // 이미지 표시
            });
          } else {
            $('.section8_1 img').css({
              position: 'static',
              top: 'auto',
              left: 'auto',
              transform: 'none',
              display: 'none' // 이미지 숨김
            });
          }
          }
        


        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 7700) {
            $('.section8_1 img').css({
              position: 'fixed',
              top: '50%',
              left: '48.5%',
              transform: 'translate(-50%, -50%)',
              display: 'block' // 이미지 표시
            });
          }else{
            $('.section8_1 img').css({
              position: 'static',
              top: 'auto',
              left: 'auto',
              transform: 'none',
              display: 'none' // 이미지 숨김
            });
          }
  
        }
        if (scrollTop >= 12400) {
          $('.section8_1 img').attr('src', 'img/potcast.png'); // 이미지 교체
        } else if (scrollTop >= 11500) {
          $('.section8_1 img').attr('src', 'img/playlistphone.png'); // 이미지 교체
        } else {
          $('.section8_1 img').attr('src', 'img/dj.png'); // 기존 이미지로 복원
        }
        
        if ($(window).width() <= 768) {
          if (scrollTop >= 7750 && scrollTop < 8550) {
            $('.section8_1 img').attr('src', 'img/dj.png'); // 이미지 교체
          } else if (scrollTop >= 8550 && scrollTop < 9050) {
            $('.section8_1 img').attr('src', 'img/playlistphone.png'); // 이미지 교체
          } else if (scrollTop >= 9050 && scrollTop < 9600) {
            $('.section8_1 img').attr('src', 'img/potcast.png'); // 기존 이미지로 복원
          } else {
            $('.section8_1 img').css('display', 'none'); // 이미지 숨김
          }
        }
      
        
  
        if (scrollTop >= 10200 && scrollTop <=11200) {
          $('.section8_1_right p:nth-of-type(1)').addClass('border-active');
          $('.section8_1_right p:nth-of-type(1)').css('color','#1ED760')
        } else {
          $('.section8_1_right p:nth-of-type(1)').removeClass('border-active');
          $('.section8_1_right p:nth-of-type(1)').css('color','')
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 7700 && scrollTop <=8500) {
              $('.section8_1_right p:nth-of-type(1)').addClass('border-active');
              $('.section8_1_right p:nth-of-type(1)').css('color','#1ED760')
          }else{
            $('.section8_1_right p:nth-of-type(1)').removeClass('border-active');
            $('.section8_1_right p:nth-of-type(1)').css('color','')

          }
        }
      

        if (scrollTop >= 11300 && scrollTop <=12300) {
          $('.section8_2_right p:nth-of-type(1)').addClass('border-active');
          $('.section8_2_right p:nth-of-type(1)').css('color','#1ED760')
        } else {
          $('.section8_2_right p:nth-of-type(1)').removeClass('border-active');
          $('.section8_2_right p:nth-of-type(1)').css('color','')
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 8500 && scrollTop <=9200) {
              $('.section8_2_right p:nth-of-type(1)').addClass('border-active');
              $('.section8_2_right p:nth-of-type(1)').css('color','#1ED760')
          }else{
            $('.section8_2_right p:nth-of-type(1)').removeClass('border-active');
            $('.section8_2_right p:nth-of-type(1)').css('color','')

          }
        }
      


          if (scrollTop >= 12600 && scrollTop <=13600){
            $('.section8_3_right p:nth-of-type(1)').addClass('border-active');
            $('.section8_3_right p:nth-of-type(1)').css('color','#1ED760')
          } else {
            $('.section8_3_right p:nth-of-type(1)').removeClass('border-active');
            $('.section8_3_right p:nth-of-type(1)').css('color','')
          }
          if ($(window).width() <= 768) {
            // 스크린 크기가 1023px 이하인 경우
            if (scrollTop >= 9200 && scrollTop <=9800) {
                $('.section8_3_right p:nth-of-type(1)').addClass('border-active');
                $('.section8_3_right p:nth-of-type(1)').css('color','#1ED760')
            }else{
              $('.section8_3_right p:nth-of-type(1)').removeClass('border-active');
              $('.section8_3_right p:nth-of-type(1)').css('color','')
  
            }
          }

      });
  

      $('.section8_3_right p:nth-of-type(2),.section8_3_right p:nth-of-type(4),.section8_3_right p:nth-of-type(6),.section8_2_right p:nth-of-type(2),.section8_2_right p:nth-of-type(4),.section8_2_right p:nth-of-type(6),.section8_1_right p:nth-of-type(2),.section8_1_right p:nth-of-type(4),.section8_1_right p:nth-of-type(6)').hover(function(){
        $(this).css('color','#f5f5f5');
      },function(){
        $(this).css('color','');
      });

      var textElement = document.getElementById('gradient-text');
      textElement.setAttribute('data-text', textElement.textContent);

      var textElement = document.getElementById('gradient-text2');
      textElement.setAttribute('data-text', textElement.textContent);
      
      
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var triggerScroll = 14250;
        var $gifImage = $('.section9_2 img');
        var gifDuration = 5000; // GIF 재생 시간 (5.5초)
      
        if (scrollTop >= triggerScroll) {
          if (!$gifImage.hasClass('gif-playing')) {
            $gifImage.addClass('gif-playing');
            $gifImage.attr('src', 'img/spotify.gif');
      
            setTimeout(function() {
              $gifImage.attr('src', 'img/spotify1.png'); // 이미지로 변경
            }, gifDuration);
          }
        } else {
          $gifImage.removeClass('gif-playing');
          $gifImage.attr('src', 'img/spotify1.png'); // 이미지로 변경
        }
      });
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var triggerScroll = 9900;
        var $gifImage = $('.section9_2 img');
        var gifDuration = 5000; // GIF 재생 시간 (5초)
      
        if (scrollTop >= triggerScroll || ($(window).width() <= 786 && scrollTop >= 9900)) {
          if (!$gifImage.hasClass('gif-playing')) {
            $gifImage.addClass('gif-playing');
            $gifImage.attr('src', 'img/spotify.gif');
      
            setTimeout(function() {
              if ($gifImage.hasClass('gif-playing')) {
                $gifImage.attr('src', 'img/spotify1.png'); // 이미지로 변경
                $gifImage.removeClass('gif-playing'); // GIF 재생 클래스 제거
              }
            }, gifDuration);
          }
        } else {
          $gifImage.removeClass('gif-playing');
          $gifImage.attr('src', 'img/spotify1.png'); // 이미지로 변경
        }
      });
      

      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
    
        if (scrollTop >= 13200 && scrollTop <14200) {
          $('#gradient-text').css('margin-left', '0'); // 왼쪽으로 이동
        } else {
          $('#gradient-text').css('margin-left', '-50%'); // 초기 위치로 복원
        }
        if ($(window).width() <= 1023) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 13400 && scrollTop <14400) {
            $('#gradient-text').css( 'marginLeft', '0%');
         
          }else{
              $('#gradient-text').css( 'marginLeft', '-180%' );
          }
          if ($(window).width() <= 768) {
            // 스크린 크기가 1023px 이하인 경우
            if (scrollTop >= 9450 && scrollTop <10250) {
              $('#gradient-text').css( 'marginLeft', '0%');
           
            }else{
                $('#gradient-text').css( 'marginLeft', '-2000%' );
            }
          }
        }
      });
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
    
        if (scrollTop >= 13600 && scrollTop <14600) {
          $('#gradient-text2').css('margin-right', '0'); // 왼쪽으로 이동
        } else {
          $('#gradient-text2').css('margin-right', '-50%'); // 초기 위치로 복원
        }
        if ($(window).width() <= 1023) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 13700 && scrollTop <14700) {
            $('#gradient-text2').css( 'margin-right', '0');
         
          }else{
              $('#gradient-text2').css('margin-right', '-180%' );
          }
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 1023px 이하인 경우
          if (scrollTop >= 9750 && scrollTop <10550) {
            $('#gradient-text2').css( 'margin-right', '0');
         
          }else{
              $('#gradient-text2').css('margin-right', '-200%' );
          }
        }
      });
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
    
        if (scrollTop >= 14000) {
          $('.section9_2 p').fadeIn()
        } else {
          $('.section9_2 p').fadeOut()
        }
        
        
      });
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
      
        if ($(window).width() <= 768) {
          // 스크린 크기가 768px 이하인 경우
          if (scrollTop >= 9900) {
            $('.section9_2 p').stop().css('opacity','1');
          } else {
            $('.section9_2 p').stop().css('opacity','0');
          }
      
        }
          
      });
    

      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var scrollThreshold = 0;
        var scrollDisappearThreshold = 1000;
        var $video = $('.background1');
      
        if (scrollTop >= scrollThreshold && scrollTop < scrollDisappearThreshold) {
          $video.css('display', 'block');
          $video.get(0).play();
        } else {
          $video.css('display', 'none');
          $video.get(0).pause();
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 768px 이하인 경우
          if (scrollTop >= 0 && scrollTop <= 550) {
            $video.show();
          } else {
            $video.hide();
          }
        }
      });
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var $video = $('#section2 video');
        var scrollThresholdMin = 1000;
        var scrollThresholdMax = 2000;
      
        if (scrollTop >= scrollThresholdMin && scrollTop <= scrollThresholdMax) {
          $video.show();
        } else {
          $video.hide();
        }
        if ($(window).width() <= 768) {
          // 스크린 크기가 768px 이하인 경우
          if (scrollTop >= 501 && scrollTop <= 1050) {
            $video.show();
          } else {
            $video.hide();
          }
        }
      });
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var $video = $('#section3 video');
        var scrollThresholdMin = 2001;
        var scrollThresholdMax = 6000;
      
        if (scrollTop >= scrollThresholdMin && scrollTop <= scrollThresholdMax) {
          if ($video.data('played') !== true) {
            // 범위 내에서 스크롤될 때 비디오를 보이게 하고 한 번만 재생합니다.
            $video.show();
            playVideoWithPlaybackRate($video[0], 0.7);
            $video.data('played', true);
          }
        } else {
          // 범위 외부에서 스크롤될 때 비디오를 숨기고 중지시킵니다.
          $video.hide();
          stopVideo($video[0]);
          $video.data('played', false);
        }
       
      
      
      function playVideoWithPlaybackRate(video, playbackRate) {
        if (video.paused) {
          video.playbackRate = playbackRate;
          video.play();
        }
      }
      
      function stopVideo(video) {
        if (!video.paused) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
      

      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var $video = $('#section5 video');
        var scrollThresholdMin;
        var scrollThresholdMax;
      
        if ($(window).width() <= 1023) {
          // 스크린 크기가 1023px 이하인 경우
          scrollThresholdMin = 6200;
          scrollThresholdMax = 7600;
        } else {
          // 스크린 크기가 1023px 초과인 경우
          scrollThresholdMin = 6400;
          scrollThresholdMax = 7700;
        }
      
      
        if (scrollTop >= scrollThresholdMin && scrollTop <= scrollThresholdMax) {
          if ($video.data('played') !== true) {
            // 범위 내에서 스크롤될 때 비디오를 보이게 하고 한 번만 재생합니다.
            $video.show();
            playVideoWithPlaybackRate($video[0], 0.6);
            $video.data('played', true);
          }
        } else {
          // 범위 외부에서 스크롤될 때 비디오를 숨기고 중지시킵니다.
          $video.hide();
          stopVideo($video[0]);
          $video.data('played', false);
        }
      });

      
      function playVideoWithPlaybackRate(video, playbackRate) {
        if (video.paused) {
          video.playbackRate = playbackRate;
          video.play();
        }
      }
      
      function stopVideo(video) {
        if (!video.paused) {
          video.pause();
          video.currentTime = 0;
        }
      
      }
      
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var $video = $('#section6 video');
        var scrollThresholdMin = 7900;
        var scrollThresholdMax = 10000;
        var isVideoVisible = $video.is(':visible');
      
        if (scrollTop >= scrollThresholdMin && scrollTop <= scrollThresholdMax) {
          if (!isVideoVisible) {
            // 범위 내에 진입한 경우 비디오를 보이게 합니다.
            $video.show();
            playVideoWithPlaybackRate($video[0], 0.8);
          }
        } else {
          if (isVideoVisible) {
            // 범위를 벗어난 경우 비디오를 숨깁니다.
            $video.hide();
            stopVideo($video[0]);
          }
        }
      
        if ($(window).width() <= 768) {
          // 스크린 크기가 768px 이하인 경우
          if (isVideoVisible) {
            $video.css('opacity', '0%');
          }
        }
      });
      
      function playVideoWithPlaybackRate(video, playbackRate) {
        if (video.paused) {
          video.playbackRate = playbackRate;
          video.play();
        }
      }
      
      function stopVideo(video) {
        if (!video.paused) {
          video.pause();
          video.currentTime = 0;
        }
      }
      
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        var $video = $('#section8 video');
        var scrollThresholdMin = 10350;
        var scrollThresholdMax = 13450;
      
        if ($(window).width() <= 768) {
          // 스크린 크기가 768px 이하인 경우
          if (scrollTop >= 7700 && scrollTop <= 9500) {
            $video.show();
          } else {
            $video.hide();
          }
        } else {
          // 스크린 크기가 768px 초과인 경우
          if (scrollTop >= scrollThresholdMin && scrollTop <= scrollThresholdMax) {
            $video.show();
          } else {
            $video.hide();
          }
        }
      });
      
      function playVideoWithPlaybackRate(video, playbackRate) {
        if (video.paused) {
          video.playbackRate = playbackRate;
          video.play();
        }
      }
      
      function stopVideo(video) {
        if (!video.paused) {
          video.pause();
          video.currentTime = 0;
        }
      }
      
      
      
    

  
      
      


  });
  