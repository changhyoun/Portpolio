$(document).ready(function() {
  $('.content1').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    dots: true,
    infinite: true,
    arrow: false,
  });
 
  $('#fullPage').fullpage({
    fixedElements: 'nav',
    navigation: true,
    scrollHorizontally: true,
    controlArrows: true,
    slidesNavigation: true,
    scrollingSpeed: 1000, // 1000ms (1초)로 설정하거나 원하는 값으로 조정
    easing: 'easeOutExpo',
    navigationTooltips: ['Main', 'Slogan', 'Brand naming', 'News','Directions']
    
  });  
  $('.fp-tooltip').css('color', '#5EB23F'); /* 원하는 텍스트 색상으로 수정하세요 */

  
  

  $('.allmenu').hide();
  $('.menu li a').hover(function() {
    $(this).css({ borderBottom: '2px solid #7CC062' });
    $('.allmenu').stop().slideDown();
  }, function() {
    $(this).css({ borderBottom: 'none' });
    $('.allmenu').stop().slideUp();
  });

  $('.allmenu').hover(function() {
    $('.allmenu').stop().slideDown();
  }, function() {
    $('.allmenu').stop().slideUp();
  });

  $('.allmenu ul').eq(0).hover(function(){
    $('.menu li a').eq(0).css({ borderBottom: '2px solid #7CC062' });
  },function(){
    $('.menu li a').eq(0).css({ borderBottom: 0 });
  });

  $('.allmenu ul').eq(1).hover(function(){
    $('.menu li a').eq(1).css({ borderBottom: '2px solid #7CC062' });
  },function(){
    $('.menu li a').eq(1).css({ borderBottom: 0 });
  });

  $('.allmenu ul').eq(2).hover(function(){
    $('.menu li a').eq(2).css({ borderBottom: '2px solid #7CC062' });
  },function(){
    $('.menu li a').eq(2).css({ borderBottom: 0 });
  });

  $('.allmenu ul').eq(3).hover(function(){
    $('.menu li a').eq(3).css({ borderBottom: '2px solid #7CC062' });
  },function(){
    $('.menu li a').eq(3).css({ borderBottom: 0 });
  });

  $('.allmenu li a').hover(function() {
    $(this).css({ color: '#7CC062' });
  }, function() {
    $(this).css({ color: '#333' });
  });
  $('.search').hide();
  $('.zoom').click(function(){
    $('.search').fadeIn(200);
  })
  $('.cl').click(function(){
    $('.search').fadeOut(200);
  });
 

$('.left_tx3').stop().hover(function(){
  $('.page2_right').css({transform:'scale(1.3,1)'});
  $('.page2_right_t1 .recycle').stop().fadeIn(800); 
  $('.page2_right_t1 p').stop().fadeIn(800); 
}, function(){
  $('.page2_right').css({transform:'scale(1,1)'});
  $('.page2_right_t1 p').stop().fadeOut(800);
  $('.page2_right_t1 .recycle').stop().fadeOut(800);  
});
$('.left_tx4').stop().hover(function(){
  $('.page2_right').css({transform:'scale(1.3,1)'});
  $('.page2_right_t2 .construction').stop().fadeIn(800);
  $('.page2_right_t2 p').stop().fadeIn(800); 
}, function(){
  $('.page2_right').css({transform:'scale(1,1)'});
  $('.page2_right_t2 .construction').stop().fadeOut(800);
  $('.page2_right_t2 p').stop().fadeOut(800);
});
$('.insta').hover(function(){
  $('.insta').attr('src','img/insta_2.png')
},function(){
  $('.insta').attr('src','img/insta.png')
});
$('.youtube').hover(function(){
  $('.youtube').attr('src','img/youtube_2.png')
},function(){
  $('.youtube').attr('src','img/youtube.png')
});
$('.facebook').hover(function(){
  $('.facebook').attr('src','img/facebook_2.png')
},function(){
  $('.facebook').attr('src','img/facebook.png')
});
$('.call').hover(function(){
 $('.call').css('color','#7cc062'); 
},function(){
  $('.call').css('color','#222')
})
$('.i1 p').hide();
$('.i1 h1').stop().hover(function(){
  $('.i1 p').fadeIn();
  $('.i1 h1').css({borderBottom:'3px solid #1690CF'})
  $('.i1 h1').animate()
},function(){
  $('.i1 p').fadeOut();
  $('.i1 h1').css({borderBottom:'0px'})
});
$('.i2 p').hide();
$('.i2 h1').stop().hover(function(){
  $('.i2 p').fadeIn();
  $('.i2 h1').css({borderBottom:'3px solid #6594FF'})
  $('.i2 h1').animate()
},function(){
  $('.i2 p').fadeOut();
  $('.i2 h1').css({borderBottom:'0px'})
});

$('.co1,.co2,.co3,.co4,.co5,.co6 img').click(function(){
  alert('준비중입니다.')
})

$('.lang_box p a').click(function(){
    $('.lang_box p a').removeClass('on');  // 모든 링크에서 'on' 클래스를 제거합니다.
    $(this).addClass('on');  // 클릭한 링크에만 'on' 클래스를 추가합니다.
    $('.lang_box p').css('color', 'black');  // 모든 텍스트를 검은색으로 설정합니다.
    $(this).parent().css('color', '');  // 클릭한 링크의 부모 요소의 색상을 기본 값으로 되돌립니다.

    // 해당 링크의 인덱스를 가져옵니다.
    var index = $('.lang_box p a').index(this);

    // 모든 버튼에서 'on2' 클래스를 제거합니다.
    $('.lang_box button').removeClass('on2');

    // 해당 인덱스에 해당하는 버튼에만 'on2' 클래스를 추가합니다.
    $('.lang_box button').eq(index).addClass('on2');

    // 나머지 버튼들은 기본값으로 변경합니다.
    $('.lang_box button').not(':eq(' + index + ')').parent().css('backgroundColor', '');
});
$('.lang_box button').click(function(){
    var index = $('.lang_box button').index(this); // 클릭한 버튼의 인덱스를 가져옵니다.

    // 모든 버튼에서 'on2' 클래스를 제거합니다.
    $('.lang_box button').removeClass('on2');

    // 해당 인덱스에 해당하는 버튼에만 'on2' 클래스를 추가합니다.
    $(this).addClass('on2');

    // 모든 링크에서 'on' 클래스를 제거합니다.
    $('.lang_box p a').removeClass('on');

    // 해당 인덱스에 해당하는 링크에만 'on' 클래스를 추가합니다.
    $('.lang_box p a').eq(index).addClass('on');

    // 나머지 링크들은 기본값으로 변경합니다.
    $('.lang_box p a').not(':eq(' + index + ')').parent().css('color', '');
});
$('.lang').hide();
$('.earth').click(function(){
$('.lang').fadeToggle();
});
$(".modal").hide();
$("#openModal").click(function() {
  $(".modal").fadeIn();
});
$(".close").click(function() {
  $(".modal").fadeOut();
});
$('.son2 li,.son3 li,.son4 li').hover(function(){
$(this).css('color','#5EB23F');
},function(){
  $(this).css('color','#222');
});
var mapContainer = document.getElementById('map');
var mapOption = {
  center: new kakao.maps.LatLng(36.327817284111795, 127.42684371295483),
  level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerPosition = new kakao.maps.LatLng(36.327817284111795, 127.42684371295483);

var marker = new kakao.maps.Marker({
  position: markerPosition
});

marker.setMap(map);



});