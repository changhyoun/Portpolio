
window.onload = function() {
  alert("미리보기 페이지는 동적으로 제작되었습니다.");
}; 

$(window).on('load', function() {
  $("#load").fadeOut();
});

window.addEventListener('scroll', function() {
  var scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  var h2 = document.querySelector('h2');
  h2.textContent = scrollX;
});

$(window).scroll(function() {
    if ($(this).scrollTop() <= 599) {
        $('.box1 .tx1').hide();
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop() <= 1399) {
        $('.box2 .tx2').hide();
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() <= 2299) {
        $('.box3 .tx3').hide();
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() <= 2999) {
        $('.box4 .tx4').hide();
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() <= 6099 ) {
        $('.circle').css('scale','1')
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 7100 ) {
        $('.circle').css('scale','1')
    }
});

function handleScroll() {
  // 스크롤 이벤트가 발생할 때 실행될 코드
  // 숨길 요소를 선택하고 숨기는 작업을 수행합니다.
  $('.scroll').hide();
  
  // 스크롤 이벤트 핸들러를 제거합니다.
  $(window).off('scroll', handleScroll);
}

$(window).on('scroll', handleScroll);
    
    
    

$(window).on('scroll', function() {
    var scrollPosition = $(this).scrollTop();
    $('h1').text(scrollPosition);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() < 99) {
      $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '0px',
        'left': '0px'
      });
      
    }
});
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 99 && $(this).scrollTop()  <= 199) {
      $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '200px',
        'left': '200px'
      });
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200 && $(this).scrollTop()  <= 299) {
      $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '500px',
        'left': '200px'
      });
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 300 && $(this).scrollTop()  <= 399) {
      $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '700px',
        'left': '300px'
      });
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 400 && $(this).scrollTop()  <= 499) {
      $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '900px',
        'left': '400px'
      });
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() >= 500 && $(this).scrollTop()  <= 599) {
       
      $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '1070px',
        'left': '500px'
      });
    }else if($(this).scrollTop() >= 600 && $(this).scrollTop()  <= 699){
        $('.circle').css({
            'transition': 'all 0.5s ease',
            'top': '900px',
            'left': '750px'
          });
          $('.box1 .tx1').show();
    }else if($(this).scrollTop() >= 700 && $(this).scrollTop()  <= 799){
        $('.circle').css({
            'transition': 'all 0.5s ease',
            'top': '1050px',
            'left': '1000px'
          });
    }else if($(this).scrollTop() >= 800 && $(this).scrollTop()  <= 899){
        $('.circle').css({
            'transition': 'all 0.5s ease',
            'top': '1200px',
            'left': '1100px'
          });
    }else if($(this).scrollTop() >= 800 && $(this).scrollTop()  <= 899){
            $('.circle').css({
                'transition': 'all 0.5s ease',
                'top': '1350px',
                'left': '1200px'
              });
    }else if($(this).scrollTop() >= 900 && $(this).scrollTop()  <= 999){
        $('.circle').css({
            'transition': 'all 0.5s ease',
            'top': '1450px',
            'left': '1220px'
          });
    }else if($(this).scrollTop() >= 1000 && $(this).scrollTop()  <= 1099){
    $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '1550px',
        'left': '1240px'
      });
    }else if($(this).scrollTop() >= 1100 && $(this).scrollTop()  <= 1199){
    $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '1650px',
        'left': '1260px'
    });
    }else if($(this).scrollTop() >= 1200 && $(this).scrollTop()  <= 1299){
    $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '1750px',
        'left': '1280px'
    });
    }else if($(this).scrollTop() >= 1300 && $(this).scrollTop()  <= 1399){
        $('.circle').css({
            'transition': 'all 0.5s ease',
            'top': '1910px',
            'left': '1300px'
        });
        
    }
    else if($(this).scrollTop() >= 1400 && $(this).scrollTop()  <= 1499){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '1800px',
        'left': '1150px'
        
        });
        $('.box2 .tx2').show();
    }else if($(this).scrollTop() >= 1500 && $(this).scrollTop()  <= 1599){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '2000px',
        'left': '900px'
        });
    }else if($(this).scrollTop() >= 1600 && $(this).scrollTop()  <= 1699){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '2200px',
        'left': '870px'
        });
    }else if($(this).scrollTop() >= 1700 && $(this).scrollTop()  <= 1799){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '2400px',
        'left': '830px'
        });
    }else if($(this).scrollTop() >= 1800 && $(this).scrollTop()  <= 1899){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '2600px',
        'left': '830px'
        });
    }else if($(this).scrollTop() >= 1900 && $(this).scrollTop()  <= 1999){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '2800px',
        'left': '810px'
        });
    }else if($(this).scrollTop() >= 2000 && $(this).scrollTop()  <= 2199){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3000px',
        'left': '740px'
        });
    }else if($(this).scrollTop() >= 2200 && $(this).scrollTop()  <= 2399){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3075px',
        'left': '650px'
        });
        
    }else if($(this).scrollTop() >= 2400 && $(this).scrollTop()  <= 2499){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '2900px',
        'left': '950px'
        });
        $('.box3 .tx3').show();
    }else if($(this).scrollTop() >= 2500 && $(this).scrollTop()  <= 2599){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3150px',
        'left': '1150px'
        });
    }else if($(this).scrollTop() >= 2600 && $(this).scrollTop()  <= 2699){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3300px',
        'left': '1300px'
        });
    }else if($(this).scrollTop() >= 2700 && $(this).scrollTop()  <= 2799){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3400px',
        'left': '1350px'
        });
    }else if($(this).scrollTop() >= 2800 && $(this).scrollTop()  <= 2899){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3500px',
        'left': '1450px'
        });
    }else if($(this).scrollTop() >= 2900 && $(this).scrollTop()  <= 2999){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3660px',
        'left': '1550px'
        });
    }else if($(this).scrollTop() >= 3000 && $(this).scrollTop()  <= 3099){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3460px',
        'left': '1350px'
        });
        $('.box4 .tx4').show();
    }else if($(this).scrollTop() >= 3100 && $(this).scrollTop()  <= 3199){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3300px',
        'left': '1050px'
        });
    }else if($(this).scrollTop() >= 3200 && $(this).scrollTop()  <= 3299){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3450px',
        'left': '800px'
        });
    }else if($(this).scrollTop() >= 3300 && $(this).scrollTop()  <= 3399){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3600px',
        'left': '550px'
        });
    }
    else if($(this).scrollTop() >= 3400 && $(this).scrollTop()  <= 3499){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '3800px',
        'left': '650px'
        });
    }else if($(this).scrollTop() >= 3500 && $(this).scrollTop()  <= 3599){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '4000px',
        'left': '800px'
        });
    }
    else if($(this).scrollTop() >= 3600 && $(this).scrollTop()  <= 3799){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '4300px',
        'left': '880px'
        });
    }else if($(this).scrollTop() >= 3800 && $(this).scrollTop()  <= 3899){
        $('.circle').css({
        'transition': 'all 0.5s ease',
        'top': '4600px',
        'left': '880px'
        });
    }else if($(this).scrollTop() > 5200 && $(this).scrollTop() <= 6099 ){
        $('.circle').css({
            'transition': 'all 0.5s ease',
            'top': '6600px',
            'left': '880px'
            
            });
    }else if($(this).scrollTop() >=6100 && $(this).scrollTop() <= 7100 ){
        $('.circle').css({
           'scale':'100',
            'transition': 'all 0.5s ease',
            'top': '6600px',
            'left': '880px'
            });
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 4700 && $(this).scrollTop() <= 7100 ) {
          $('.cloud2').css({
            'width': '150%',
            'position': 'fixed',
            'left': '-20%',
            'top': '-20%'
          });
        } else {
          $('.cloud2').css({
            'width': '',
            'position': '',
            'left': '',
            'top': ''
          });
        }
      });
    

      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= 7500 && scrollTop <= 8500) {
          $('#section4 p:nth-of-type(1)').css({
      
            'margin-left': '20%',
            'transition': 'all 1s ease'
          });
        } else {
          $('#section4 p:nth-of-type(1)').css({
     
            'margin-left': '-100%',
            'transition': 'all 1s ease'
          });
        }
      });

      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= 7700 && scrollTop <= 8700) {
          $('#section4 p:nth-of-type(2)').css({
            'font-family': 'neo1',
            'font-size': '3.5em',
            'color': '#f5f5f5',
            'margin-top': '10%',
            'margin-bottom': '10%',
            'margin-left': '70%',
            'transition': 'all 1s ease'
          });
        } else {
          $('#section4 p:nth-of-type(2)').css({
            'font-family': '',
            'font-size': '',
            'color': '',
            'margin-top': '10%',
            'margin-bottom': '10%',
            'margin-left': '100%',
            'transition': 'all 1s ease'
          });
        }
      });
      $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop >= 7900 && scrollTop <= 8900) {
          $('#section4 p:nth-of-type(3)').css({
      
            'margin-left': '20%',
            'transition': 'all 1s ease'
          });
        } else {
          $('#section4 p:nth-of-type(3)').css({
     
            'margin-left': '-100%',
            'transition': 'all 1s ease'
          });
        }
      });
      $(document).ready(function() {
        $(window).scroll(function() {
          var scrollTop = $(window).scrollTop();
      
          if (scrollTop >= 9000 && scrollTop <= 13000) {
            $('#section5').css('position', 'fixed');
            $('#section5').css('bottom', '-300px');
            $('#section5').css('overflow-y', 'hidden');
            $('#section5_content1').css('margin-right', '200px');
            $('.section5_content1').css('left', '50%','top','50%');
            $('.section5_content1').css('left', '0%');
            $('.section5_content1').css('top', '0%');
            $('.section5_content1').css('border-bottom', '1px solid #f5f5f5');
            $('.section5_content2').css('margin-bottom', '10%');
            $('.section5_content1').show();

       



            $('#section5').scrollLeft(scrollTop - 9000);
            $('.section5_content1').css('position', 'fixed');
          

         
          } else {
            $('#section5').css('position', 'static');
            
   
            $('.section5_content1').css('position', 'static');
            $('.section5_content1').css('left', '50%','top','8500px');
            $('.section5_content1').css('display','none');

          }
        });
      });
      $(document).ready(function() {
        var isVideoPlayed = false;
      
        $(window).scroll(function() {
          var scrollTop = $(window).scrollTop();
      
          if (scrollTop >= 9000) {
            if (!isVideoPlayed) {
              // 비디오 재생
              var video = $('.section5_content1 video').get(0);
              video.play();
              video.playbackRate = 1.5; // 재생 속도 2배로 설정
              isVideoPlayed = true;
            }
          } else if (scrollTop < 9000 && isVideoPlayed) {
            // 비디오 재실행
            var video = $('.section5_content1 video').get(0);
            video.currentTime = 0;
            video.play();
            isVideoPlayed = false;
          }
        });
      });

      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
    
        if (scrollTop < 13100) {
          $('#section7 img').hide()
        }else{
          $('#section7 img').show()
        }
      });
      
// 이미지 요소를 가져옵니다.
// 이미지 요소를 가져옵니다.
var image = document.querySelector("#section7 img");

// 스크롤 이벤트를 감지합니다.
window.addEventListener("scroll", function() {
  // 현재 스크롤 위치를 가져옵니다.
  var scrollPosition = window.scrollY;

  // 이미지 크기를 계산합니다.
  var scale = 0.1 + (scrollPosition - 13100) / (14100 - 13100) * (1 - 0.1);

  // 스크롤 위치가 14100 이상이면 이미지 크기를 1로 고정합니다.
  if (scrollPosition >= 14100) {
    scale = 1;
  }

  // 이미지 밝기를 계산합니다.
  var brightness = 10 + (scrollPosition - 13100) / (14100 - 13100) * (150 - 10);

  // 스크롤 위치가 14100 이상이면 이미지 밝기를 150으로 고정합니다.
  if (scrollPosition >= 14000) {
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
  if (scrollPosition >= 14000) {
    $('#section7 p').css({
      transform: 'scale(1) translate(-50%, -50%)',
      transition: 'transform 0.3s ease'
    });
  } else {
    $('#section7 p').css({
      transform: 'scale(0) translate(-50%, -50%)',
      transition: 'transform 0.3s ease'
    });
  }
});
$(document).ready(function() {
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    // 로고 이미지 변경
    if (scrollTop >= 300) {
      $('.logo').css({
        'background': 'url(../img/porlogo2.png) no-repeat center center',
        'background-size': 'cover'
      });
    } else {
      $('.logo').css({
        'background': 'url(../img/porlogo1.png) no-repeat center center',
        'background-size': 'cover'
      });
    }
    
    // 메뉴 트리거 색상 변경
    if (scrollTop >= 300 && scrollTop <=4439) {
      $('.menu-trigger span').css('background-color', '#000');
    } else {
      $('.menu-trigger span').css('background-color', '#EBEBEB');
    }
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    
    // 로고 이미지 변경
    if (scrollTop >= 4400) {
      $('.logo').css({
        'background': 'url(../img/porlogo1.png) no-repeat center center',
        'background-size': 'cover'
      });
    } else {
      $('.logo').css({
        'background': 'url(../img/porlogo2.png) no-repeat center center',
        'background-size': 'cover'
      });
    }
     // 메뉴 트리거 색상 변경
     if (scrollTop >= 4400) {
      $('.menu-trigger span').css('background-color', '#ebebeb');
      $('.menu-trigger span').css('z-index','10000000000')
    }
  
  });


});

$('.workview').click(function(event) {
  event.preventDefault(); // 기본 클릭 동작을 중지시킴
  window.open('../spotify/index.html', '_blank'); // 새 창에서 링크 열기
});

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  if (scrollTop >= 15501) {
    window.location.href = "neldit_.html";
  } else {
    if (scrollTop >= 14700 && scrollTop < 15600) {
      var scale = ((scrollTop - 14700) / (15600 - 14700)) * 0.9 + 0.1;
      $('#section9 img').css({
        transform: 'scale(' + scale + ')',
        transition: 'transform 0.8s ease'
      });
    }
  }
});



  });
 