

$(window).on('load', function() {

 
    $("#load").fadeOut();

    var offset = $('#container').offset().top;

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
        if ($(this).scrollTop() >= 300) {
          $('.content1, .content2').animate({ marginTop: '0px' }, 300);
        }
      });
      window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var content1 = document.querySelector('#section3 .content1 img');
    
        if (scrollTop >= 1400 && scrollTop <= 5000) {
            content1.style.position = 'fixed';
        } else {
            content1.style.position = 'static';
        }
    });

  

  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var content1 = document.querySelector('.vi');

    if (scrollTop >= 1400 && scrollTop <= 5000) {
        content1.style.position = 'fixed';
        content1.style.overflow = 'hidden' ;
    } else {
        content1.style.position = 'static';
        content1.style.overflow = 'hidden'; // 원하는 스타일로 변경 가능
    }
});

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var content1 = document.querySelector('#section3 .content2 p');

  if (scrollTop >= 1400 && scrollTop <= 5000) {
      content1.style.position = 'fixed';
      content1.style.zIndex = '1000';
      content1.style.display = 'block';

  } else {
      content1.style.position = 'static';
      content1.style.display = 'none';

  }
});
$(window).scroll(function() {
  if ($(window).scrollTop() >= 1000) {
    $('#section2').css({
      'transition': 'background-color 0.5s',
      'background-color': '#445d79',
    });
  } else {
    $('#section2').css({
      'transition': 'background-color 0.5s',
      'background-color': 'white'
    });
  }
});
$(window).scroll(function() {
  if ($(window).scrollTop() >= 5300) {
    $('#section3').css({
      'transition': 'background-color 0.5s',
      'background-color': '#E8E8E7',
    });
  } else {
    $('#section3').css({
      'transition': 'background-color 0.5s',
      'background-color': '#445d79'
    });
  }
});
$(window).scroll(function() {
  if ($(window).scrollTop() >= 6250) {
    $('#section5').css({
      'transition': 'background-color 0.5s',
      'background-color': '#222',
    });
  } else {
    $('#section5').css({
      'transition': 'background-color 0.5s',
      'background-color': '#555'
    });
  }
});


$(window).scroll(function() {
  if ($(this).scrollTop() >= 5400) {
    $('#section4 img').css({
      transformOrigin: 'top', // 기준점을 상단으로 설정
      transform: 'scaleY(1)',
      transition: 'transform 0.5s ease'
    });
  } else if ($(this).scrollTop() < 5400) {
    $('#section4 img').css({
      transformOrigin: 'top', // 기준점을 상단으로 설정
      transform: 'scaleY(0)',
      transition: 'transform 0.5s ease'
    });
  }
});

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  if (scrollTop >= 6400) {
    if (scrollTop >= 6500) {
      $('#section5 img').css({
        filter: 'brightness(60%)',
        transition: 'filter 0.3s ease'
      });
    } else if (scrollTop >= 6600) {
      $('#section5 img').css({
        filter: 'brightness(30%)',
        transition: 'filter 0.3s ease'
      });
    } else if (scrollTop >= 6800) {
      $('#section5 img').css({
        filter: 'brightness(10%)',
        transition: 'filter 0.3s ease'
      });
    } else {
      $('#section5 img').css({
        filter: 'brightness(80%)',
        transition: 'filter 0.3s ease'
      });
    }
  } else {
    $('#section5 img').css({
      filter: 'none',
      transition: 'filter 0.3s ease'
    });
  }
});

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  if (scrollTop >= 6600) {
    $('#section5 p').css({ transform: 'scale(1)',
    transition: 'transform 0.3s ease'});
  } else {
    $('#section5 p').css({transform: 'scale(0)',
    transition: 'transform 0.3s ease'})
    
  }
});
$('.workview').click(function(event) {
  event.preventDefault(); // 기본 클릭 동작을 중지시킴
  window.open('../hansung/index.html', '_blank'); // 새 창에서 링크 열기
});

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  if (scrollTop >= 8101) {
    window.location.href = "content5.html";
  } else {
    if (scrollTop >= 7200 && scrollTop < 8200) {
      var scale = ((scrollTop - 7200) / (8200 - 7200)) * 0.9 + 0.1;
      $('#section7 img').css({
        transform: 'scale(' + scale + ')',
        transition: 'transform 0.8s ease'
      });
    }
  }
});

 



});
