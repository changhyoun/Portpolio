$(window).on('load', function() {
  var offset = $('#container').offset().top;

 
    $("#load").fadeOut();

  const menuTrigger = document.querySelector('.menu-trigger');

  menuTrigger.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active-1');
  
    
  });

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

  $('.mu').hover(function() {
    $(this).stop().animate({ marginBottom: '0.3%' }, 200);
  }, function() {
    $(this).stop().animate({ marginBottom: '0' }, 200);
  });    
   $('.section1_tx p').fadeOut(0);
        $('.section1_tx p').fadeIn(500);
        $('.mu,.ci').click(function(event) {
            event.preventDefault();
            $('html, body').animate({ scrollTop: 300 }, 1000);
          });
          $('.mu').hover(function() {
            $(this).stop().animate({ marginBottom: '0.3%' }, 200);
          }, function() {
            $(this).stop().animate({ marginBottom: '0' }, 200);
          });   
      

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 600 && scrollTop < 700) {
      $('#section2 img').attr('src', '../img/inologo2.png');
    } else if (scrollTop >= 700 && scrollTop < 800) {
      $('#section2 img').attr('src', '../img/inologo3.png');
    } else if (scrollTop >= 800 && scrollTop < 900) {
      $('#section2 img').attr('src','../img/inologo4.png');
    } else if (scrollTop >= 900) {
      $('#section2 img').attr('src', '../img/inologo5.png');
    } else {
      $('#section2 img').attr('src', '../img/inologo1.png');
    }


    
  
    var scale = 1 + (scrollTop / 800); // Calculate the scaling factor based on scroll position
    $('#section2 img').css('transform', 'scale(' + scale + ')'); // Apply the scaling effect

    $(window).scroll(function() {
      if ($(this).scrollTop() >= 1400) {
        $('.content1, .content2').animate({ marginTop: '0px' }, 300);
      }
    });
  
  });
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 1700 && scrollTop < 1900) {
      var scale = (scrollTop - 1700) / (1900 - 1700); // 0.1에서 1 사이의 스케일 값 계산
      $('#section4 .content1').css({
        transformOrigin: 'left', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(' + scale.toFixed(1) + ')',
        transition: 'transform 0.1s ease',
        display: 'block'
      });
    } else if (scrollTop >= 1900) {
      $('#section4 .content1').css({
        transformOrigin: 'left', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(1)',
        transition: 'transform 0.1s ease'
      });
   
    }if(scrollTop <= 1699) {
      $('#section4 .content1').css({display:'none'});
    }
  });
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 2000 && scrollTop < 2200) {
      var scale = (scrollTop - 2000) / (2200 - 2000); // 0.1에서 1 사이의 스케일 값 계산
      $('#section4 .content2').css({
        transformOrigin: 'right', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(' + scale.toFixed(1) + ')',
        transition: 'transform 0.1s ease',
        display: 'block'
      });
    } else if (scrollTop >= 2200) {
      $('#section4 .content2').css({
        transformOrigin: 'right', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(1)',
        transition: 'transform 0.1s ease'
      });
   
    }if(scrollTop <= 1999) {
      $('#section4 .content2').css({display:'none'});
    }
  });
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 2300 && scrollTop < 2500) {
      var scale = (scrollTop - 2300) / (2500 - 2300); // 0.1에서 1 사이의 스케일 값 계산
      $('#section4 .content3').css({
        transformOrigin: 'left', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(' + scale.toFixed(1) + ')',
        transition: 'transform 0.1s ease',
        display: 'block'
      });
    } else if (scrollTop >= 2500) {
      $('#section4 .content3').css({
        transformOrigin: 'left', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(1)',
        transition: 'transform 0.1s ease'
      });
   
    }if(scrollTop <= 2299) {
      $('#section4 .content3').css({display:'none'});
    }
  });

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 2600 && scrollTop < 2800) {
      var scale = (scrollTop - 2600) / (2800 - 2600); // 0.1에서 1 사이의 스케일 값 계산
      $('#section4 .content4').css({
        transformOrigin: 'right', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(' + scale.toFixed(1) + ')',
        transition: 'transform 0.1s ease',
        display: 'block'
      });
    } else if (scrollTop >= 2800) {
      $('#section4 .content4').css({
        transformOrigin: 'right', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(1)',
        transition: 'transform 0.1s ease'
      });
   
    }if(scrollTop <= 2599) {
      $('#section4 .content4').css({display:'none'});
    }
  });

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 2800 && scrollTop < 3000) {
      var scale = (scrollTop - 2800) / (3000 - 2800); // 0.1에서 1 사이의 스케일 값 계산
      $('#section4 .content5').css({
        transformOrigin: 'left', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(' + scale.toFixed(1) + ')',
        transition: 'transform 0.1s ease',
        display: 'block'
      });
    } else if (scrollTop >= 3000) {
      $('#section4 .content5').css({
        transformOrigin: 'left', // 기준점을 왼쪽으로 설정
        transform: 'scaleX(1)',
        transition: 'transform 0.1s ease'
      });
   
    }if(scrollTop <= 2799) {
      $('#section4 .content5').css({display:'none'});
    }
  });
  
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 3100 && scrollTop < 3400) {
      var scale = (scrollTop - 3100) / (3400 - 3100); // 0.1에서 1 사이의 스케일 값 계산
      $('#section4 .content6').css({
        transformOrigin: 'bottom', // 기준점을 왼쪽으로 설정
        transform: 'scaleY(' + scale.toFixed(3) + ')',
        transition: 'transform 0.1s ease',
        display: 'block'
      });
    } else if (scrollTop >= 3400) {
      $('#section4 .content6').css({
        transformOrigin: 'bottom', // 기준점을 왼쪽으로 설정
        transform: 'scaleY(1)',
        transition: 'transform 0.1s ease'
      });
   
    }if(scrollTop <= 3099) {
      $('#section4 .content6').css({display:'none'});
    }
    
  });
  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    if (scrollTop >= 3300 && scrollTop < 3700) {
      var scale = (scrollTop - 3300) / (3700 - 3300); // 0.1에서 1 사이의 스케일 값 계산
      $('#section4 .content7').css({
        transformOrigin: 'center', // 기준점을 왼쪽으로 설정
        transform: 'scale(' + scale.toFixed(20) + ')',
        transition: 'transform 0.1s ease',
        display: 'block'
      });
    } else if (scrollTop >= 3700) {
      $('#section4 .content7').css({
        transformOrigin: 'center', // 기준점을 왼쪽으로 설정
        transform: 'scale(20)',
        transition: 'transform 0.1s ease'
      });
   
    }if(scrollTop <= 3299) {
      $('#section4 .content7').css({display:'none'});
    }
  });
// 이미지 롤링을 위한 변수 설정
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  if (scrollTop >= 4950) {
    $('.rolling-container').css('animation-play-state', 'running');
  } else {
    $('.rolling-container').css('animation-play-state', 'paused');
  }
});



$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  if (scrollTop >= 3700) {
    $('#section5').css('backgroundColor','#586B51') // 이미지를 서서히 나타나게 함
  } else {
    $('#section5').css('backgroundColor','white')  // 이미지를 서서히 사라지게 함
  }
});



    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
    
      if (scrollTop >= 3800) {
        $('#section5 img').fadeIn(300); // 이미지를 서서히 나타나게 함
        var video = $('#section5 video')[0];
        video.playbackRate = 3; // 영상 속도를 2배로 설정
        video.currentTime = 0; // 영상을 처음부터 시작
        video.play(); // 동영상 재생
      } else {
        $('#section5 img').fadeOut(300); // 이미지를 서서히 사라지게 함
        $('#section5 video')[0].pause(); // 동영상 일시정지
      }
    });
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
    
      if (scrollTop >= 5400) {
        if (scrollTop >= 5500) {
          $('#section7 img').css({
            filter: 'brightness(60%)',
            transition: 'filter 0.3s ease'
          });
        } else if (scrollTop >= 5600) {
          $('#section7 img').css({
            filter: 'brightness(30%)',
            transition: 'filter 0.3s ease'
          });
        } else if (scrollTop >= 5800) {
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
    
      if (scrollTop >= 5900) {
        $('#section7 p').css({ transform: 'scale(1)',
        transition: 'transform 0.3s ease'});
      } else {
        $('#section7 p').css({transform: 'scale(0)',
        transition: 'transform 0.3s ease'})
        
      }
      
    });
    $('.workview').click(function(event) {
      event.preventDefault(); // 기본 클릭 동작을 중지시킴
      window.open('../inovation/index.html', '_blank'); // 새 창에서 링크 열기
    });
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
    
      if (scrollTop >= 7451) {
        window.location.href = "content3.html";
      } else {
        if (scrollTop >= 6350 && scrollTop < 7550) {
          var scale = ((scrollTop - 6350) / (7550 - 6350)) * 0.9 + 0.1;
          $('#section9 img').css({
            transform: 'scale(' + scale + ')',
            transition: 'transform 0.8s ease'
          });
        }
      }
    });
    

  
});
