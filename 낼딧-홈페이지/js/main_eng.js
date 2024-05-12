$(function() {
 
  $('.scrolldown').on('click', function() {
    $('html').animate({ scrollTop: 50000 }, 'slow');
  });
  // 스크롤 이벤트 핸들러
  $(window).on('scroll', function() {
    // 현재 스크롤 위치를 구합니다.
    var scrollPosition = $(this).scrollTop();


    // 스크롤 위치에 따른 작업들 처리

    // section1의 p:nth-of-type(1)에 밑줄 효과 적용
    if (scrollPosition >= 1200) {
      $("#section3 .content1 p").addClass("show-underline");
    } else {
      // 밑줄 효과 해제
      $("#section3 .content1 p").removeClass("show-underline");
    }

    // section1 이미지와 p:nth-of-type(1)의 위치 설정
    if (scrollPosition >= 0 && scrollPosition <= 1200) {
      $("#section1 img, #section1 p:nth-of-type(1)").css("position", "fixed");
    } else {
      $("#section1 img, #section1 p:nth-of-type(1)").css("position", "static");
    }
    if (scrollPosition >= 0 && scrollPosition <= 1200) {
      $("#section1 img").css({
        'top': '0',
        'left': '0'
      });
    } else {
      $("#section1 img, #section1 p:nth-of-type(1)").css({
        'position': 'static'
      });
    }

    // section1의 p:nth-of-type(2)와 .mouse의 투명도 조절
    if (scrollPosition > 1) {
      $('#section1 p:nth-of-type(2), #section1 .mouse').css('opacity', '0');
    } else {
      $('#section1 p:nth-of-type(2), #section1 .mouse').css('opacity', '1');
    }

    // section1의 p:nth-of-type(1)의 내용과 투명도 변경
    var opacity = 1;
    if (scrollPosition >= 200 && scrollPosition <= 400) {
      opacity = (scrollPosition - 400) / 400;
    } else if (scrollPosition >= 600 && scrollPosition <= 800) {
      opacity = (scrollPosition - 800) / 800;
    }

    $('#section1 p:nth-of-type(1)').css('opacity', opacity);

    // section1의 p:nth-of-type(1)의 내용 변경
    if (scrollPosition >= 100 && scrollPosition <= 500) {
    
        $('#section1 p:nth-of-type(1)').html("Think about it first, discover it, and<br>Satisfaction beyond expectations.")
   
    } else if (scrollPosition >= 501) {
    
        $('#section1 p:nth-of-type(1)').html("partner's success<br>We strive for sustainable business.")
     
    } else {
   
        $('#section1 p:nth-of-type(1)').html("NELDIT<br>We provide new value with various technologies.")

    }

    
    // 네비게이션 스타일 변경
    if (scrollPosition >= 1500) {
      $('.nav_center .menu li a').css('color', '#C9C9C9');
      $('#nav').css('border-bottom', '2px solid #C9C9C9');
      $('.nav_right span').css('color', '#C9C9C9');
    } else {
      $('.nav_center .menu li a').css('color', '');
      $('#nav').css('border-bottom', '');
      $('.nav_right span').css('color', '');
    }
    if (scrollPosition >= 1300) {
      $('#section3 .content2_left, #section3 .content2_center, #section3 .content2_right').css('opacity', '1');
    } else {
      $('#section3 .content2_left, #section3 .content2_center, #section3 .content2_right').css('opacity', '0');
    }

    // section1 이미지 숨기기
    if (scrollPosition >= 1200) {
      $('#section1 img:nth-of-type(1)').hide();
    } else {
      $('#section1 img:nth-of-type(1)').show();
    }

    // section1 이미지의 회전 및 스케일 조절
    if (scrollPosition >= 1300 && scrollPosition <= 1700) {
      var scrollRange = 1700 - 1300;
      var scrollPositionRange = scrollPosition - 1300;
      var rotateAmount = scrollPositionRange / scrollRange;
      var scaleAmount = 0.5 + (scrollPositionRange / scrollRange) * 0.5;

      $('#section1 img:nth-of-type(1)').css({
        'transform': `rotateX(${-150 + rotateAmount * 15}deg) scale(${scaleAmount})`
      });
    } else {
      $('#section1 img:nth-of-type(1)').css({
        'transform': 'rotateX(0deg) scale(1)'
      });
    }
  });
  $(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    // 스크롤 위치가 900에서 1300 사이라면 배경 색상 서서히 변경
    if (scrollPosition >= 500 && scrollPosition <= 1100) {
      // 현재 스크롤 위치에서 900을 뺀 값의 비율로 배경 색상을 변경
      var ratio = (scrollPosition - 500) / (1100 - 500);
      var startColor = [255, 255, 255]; // RGB 색상 코드: #fff (흰색)
      var endColor = [17, 17, 17]; // RGB 색상 코드: #111 (검은색)

      // RGB 색상 계산
      var r = Math.round(startColor[0] + ratio * (endColor[0] - startColor[0]));
      var g = Math.round(startColor[1] + ratio * (endColor[1] - startColor[1]));
      var b = Math.round(startColor[2] + ratio * (endColor[2] - startColor[2]));

      // 변경된 RGB 값을 배경 색상으로 설정
      $('#section1,#section2').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
    } else if (scrollPosition >= 1100) {
      // 스크롤 위치가 1300 이상이라면 배경 색상을 #111로 설정
      $('#section1,#section2').css('background-color', '#111');
    } else {
      // 스크롤 위치가 900과 1300 사이가 아니라면 초기 색상 #fff로 설정
      $('#section1,#section2').css('background-color', '#fff');
    }
  });
    // 반응형 글자 크기를 설정하는 함수
function getWindowFontSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    return "0.7em";
  } else if (windowWidth <= 1024) {
    return "0.9em";
  } else {
    return "1.1em"; // 기본 크기 설정
  }
}
//#section3 .content2_left img,#section3 .content2_center img,#section3 .content2_right img 호버 반응형 및 글자 설정 
$("#section3 .content2_left img").stop().hover(
  function() {
    $('#section3 .content2_left img').stop().css("transform", "rotateY(180deg)");

    $('#section3 .content2_left p').stop().fadeOut(700, function() {
      $(this).html(`Think first and find<br>beyond customer expectations<br>It provides satisfaction.`).fadeIn(200);
    }).css({
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "font-size": getWindowFontSize(), // 반응형 글자 크기 적용
      "text-align": "center"
    });

    $('#section3 .content2_left span').stop().fadeOut(700);
  },
  function() {
    $('#section3 .content2_left img').stop().css("transform", "rotateY(0deg)");

    $('#section3 .content2_left p').stop().fadeOut(0, function() {
      $(this).text("Cooperation").stop().fadeIn(700);
    }).css({
      "position": "",
      "top": "",
      "left": "",
      "transform": "",
      "font-size": "",
      "text-align": ""
    });

    $('#section3 .content2_left span').stop().fadeIn(700);
  }
);

$("#section3 .content2_center img").stop().hover(
  function() {
    $('#section3 .content2_center img').stop().css("transform", "rotateY(180deg)");

    $('#section3 .content2_center p').stop().fadeOut(700, function() {
      $(this).html(`Partner's success<br>for sustainable business<br>trying.`).fadeIn(200);
    }).css({
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "font-size": getWindowFontSize(), // 반응형 글자 크기 적용
      "text-align": "center"
    });

    $('#section3 .content2_center span').stop().fadeOut(700);
  },
  function() {
    $('#section3 .content2_center img').stop().css("transform", "rotateY(0deg)");

    $('#section3 .content2_center p').stop().fadeOut(0, function() {
      $(this).text("Trust").stop().fadeIn(700);
    }).css({
      "position": "",
      "top": "",
      "left": "",
      "transform": "",
      "font-size": "",
      "text-align": ""
    });

    $('#section3 .content2_center span').stop().fadeIn(700);
  }
);

$("#section3 .content2_right img").stop().hover(
  function() {
    $('#section3 .content2_right img').stop().css("transform", "rotateY(180deg)");

    $('#section3 .content2_right p').stop().fadeOut(700, function() {
      $(this).html(`We are looking for problems<br>focus on solving<brTo further provide good service<br>We will do our best.`).fadeIn(200);
    }).css({
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "font-size": getWindowFontSize(), // 반응형 글자 크기 적용
      "text-align": "center"
    });

    $('#section3 .content2_right span').stop().fadeOut(700);
  },
  function() {
    $('#section3 .content2_right img').stop().css("transform", "rotateY(0deg)");

    $('#section3 .content2_right p').stop().fadeOut(0, function() {
      $(this).text("Experience").stop().fadeIn(700);
    }).css({
      "position": "",
      "top": "",
      "left": "",
      "transform": "",
      "font-size": "",
      "text-align": ""
    });

    $('#section3 .content2_right span').stop().fadeIn(700);
  }
);
//
    $(window).scroll(function() {
      var scrollValue = 2100; // 스크롤이 2200일 때 애니메이션 실행
      var maxNumber1 = 41; // 첫 번째 섹션의 최대 숫자
      var maxNumber2 = 51; // 두 번째 섹션의 최대 숫자
      var maxNumber3 = 5; // 세 번째 섹션의 최대 숫자

      // 첫 번째 섹션 숫자 애니메이션 적용
      if ($(window).scrollTop() <= scrollValue) {
          var currentNumber1 = Math.floor(maxNumber1 * ($(window).scrollTop() / scrollValue));
          $(".section5_left p span").stop().animate({ "num": currentNumber1 }, {
              duration: 3000, // 2초 동안 애니메이션 진행
              step: function (now) {
                  $(this).text(Math.floor(now));
              }
          });
      } else {
          $(".section5_left p span").text(maxNumber1);
      }

      // 두 번째 섹션 숫자 애니메이션 적용
      if ($(window).scrollTop() <= scrollValue) {
          var currentNumber2 = Math.floor(maxNumber2 * ($(window).scrollTop() / scrollValue));
          $(".section5_center p span").stop().animate({ "num": currentNumber2 }, {
              duration: 3000, // 2초 동안 애니메이션 진행
              step: function (now) {
                  $(this).text(Math.floor(now));
              }
          });
      } else {
          $(".section5_center p span").text(maxNumber2);
      }
      
      // 세 번째 섹션 숫자 애니메이션 적용
      if ($(window).scrollTop() <= scrollValue) {
          var currentNumber3 = Math.floor(maxNumber3 * ($(window).scrollTop() / scrollValue));
          $(".section5_right p span").stop().animate({ "num": currentNumber3 }, {
              duration: 3000, // 2초 동안 애니메이션 진행
              step: function (now) {
                  $(this).text(Math.floor(now));
              }
          });
      } else {
          $(".section5_right p span").text(maxNumber3);
      }

        if (scrollValue >= 2100 && scrollValue < 3200) {
          $("#section5 img").css("border-radius", "0px");
        } else {
          // 스크롤 범위를 벗어날 경우 기본 값으로 설정 (예를 들면, 다시 원래대로 둘 경우)
          $("#section5 img").css("border-radius", "initial");
        }
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop >= 3000 && scrollTop <= 4800) {
          $('#section6').css({
            'position': 'fixed',
            'bottom': '0%',
            'left': '0',
            'width': '100%',
            'height': '100%',
            'overflow': 'hidden' // 세로 스크롤 숨김
          });

          $('#section6 .content2').css({
            'overflow-y': 'auto' // 가로 스크롤 숨김
          });

          // 스크롤한 값에 따라 가로 스크롤을 적용합니다.
          var scrollLeft = (scrollTop - 3000) * 1.5;
          $('#section6 .content2').scrollLeft(scrollLeft);
        } else {
          $('#section6').css({
            'position': 'static',
            'bottom': '',
            'left': '',
            'height': '', // 원래 높이로 돌아갑니다.
            'overflow': '' // 기본값으로 돌아갑니다.
          });

          $('#section6 .content2').css({
            'overflow-x': 'hidden', // 가로 스크롤 숨김
            'overflow-y': 'auto' // 세로 스크롤 표시
          });
        }
        $(window).scroll(function() {
          var scrollTop = $(this).scrollTop();
          var scrollThreshold = 4800; // 스크롤 탑이 4800 이상일 때 .more 요소를 숨깁니다.
      
          if (scrollTop <= scrollThreshold) {
            $('#section6 .more').show();
          } else {
            $('#section6 .more').hide();
          }
        });
      });
      $(".nav_center .menu li a,.nav_right P a").hover(
        function() {
          $(this).css("color", "#f5f5f5");
        },
        function() {
          $(this).css("color", "");
        }
      );
      $('.moblie_menu').hide()
      $('.mo_close').click(function(){
        $('.moblie_menu').fadeOut();
      })
      $('.mo_menu').click(function(){
        $('.moblie_menu').fadeIn();
      })
      if ($('.mobile_menu').hasClass('active')) {
        $('body').css('overflow', 'hidden');
      } else {
        // .mobile_menu.active 클래스가 제거되면 스크롤을 허용하기 위해 body의 overflow를 auto로 설정합니다.
        $('body').css('overflow', 'auto');
      }
});
  
  