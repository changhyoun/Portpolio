$(document).ready(function() {
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var scrollPositionElement = document.getElementById('scroll-position');
        scrollPositionElement.textContent =  scrollPosition + 'px';
    });

    $('.intro_con').hide();
    $('.btn').click(function() {
        
        $('.intro_con').fadeIn();
    });

    $(document).mouseup(function (e) {
        var IntroCon = $(".intro_con");
        // 클릭된 영역이 .intro_con 요소의 외부인 경우에만 페이드아웃
        if (!IntroCon.is(e.target) && IntroCon.has(e.target).length === 0) {
            IntroCon.fadeOut();
        }
    });
    $('.intro_box span').click(function() {
        
        $('.intro_con').fadeOut();
    });

     
     

$('.intro_sns_bx').children().eq(0).click(function() {
    var instagramURL = 'http://qr.kakao.com/talk/DjZE6943FHyZu5OSrsSF7RM7RQQ-';
    window.open(instagramURL, '_blank');
});
$('.intro_sns_bx').children().eq(2).click(function() {
    var instagramURL = 'https://www.instagram.com/_chxxhny';
    window.open(instagramURL, '_blank');
});

$('.intro_sns_bx').children().eq(2).click(function() {
    var instagramURL = 'https://www.instagram.com/_chxxhny';
    window.open(instagramURL, '_blank');
});

$('.intro_sns_bx').children().eq(1).click(function() {
    var naverMailURL = 'mailto:llh94367@naver.com';
    window.location.href = naverMailURL;
});

$(window).scroll(function() {
    // 현재 스크롤 위치 확인
    var scrollPosition = $(this).scrollTop();

    // 스크롤 위치가 200 이상이면 fadeInUp 애니메이션을 적용하여 요소를 페이드 아웃하고 아래로 이동
    if (scrollPosition > 200) {
        $('#section2 #innercon1 .sc2_box1 p,#section2 #innercon1 .sc2_box1 span').stop().css({

            'transform': 'translate3d(0, 0, 0)',
            'opacity': '1',

            'transition': 'opacity 1s, transform 1s'
        });
    } else {
        $('#section2 #innercon1 .sc2_box1 p,#section2 #innercon1 .sc2_box1 span').stop().css({
            'opacity': '0',
            'transform': 'translate3d(0, -100%, 0)',
            'transition': 'opacity 1s, transform 1s'
        });
    }
    if (scrollPosition > 300) {
        $('#section2 #innercon1 .sc2_box2').stop().css({

            'transform': 'translate3d(0, 0, 0)',
            'opacity': '1',

            'transition': 'opacity 1s, transform 1s'
        });
    } else {
        $('#section2 #innercon1 .sc2_box2').stop().css({
            'opacity': '0',
            'transform': 'translate3d(0, -100%, 0)',
            'transition': 'opacity 1s, transform 1s'
        });
    }
    if (scrollPosition > 400) {
        $('#section2 #innercon1 .sc2_box3').stop().css({

            'transform': 'translate3d(0, 0, 0)',
            'opacity': '1',

            'transition': 'opacity 1s, transform 1s'
        });
    } else {
        $('#section2 #innercon1 .sc2_box3').stop().css({
            'opacity': '0',
            'transform': 'translate3d(0, -100%, 0)',
            'transition': 'opacity 1s, transform 1s'
        });
    }

    if (scrollPosition > 700) {
        $('#section3 .sc3_box1 .sc3_box1_left, #section3 .sc3_box1 .sc3_box1_right').css({
            'opacity': 1,
            'transform': 'translateY(0)'
        });
    } 
    if (scrollPosition > 1100) {
        $('#section3 .sc3_box2 .sc3_box2_left').css({
            'opacity': 1,
            'transform': 'translateY(0)'
        });
    }

    if (scrollPosition > 1700) {
        $('#section4 #innercon1 .sc4_box1 p,#section4 #innercon1 .sc4_box1 span').stop().css({

            'transform': 'translate3d(0, 0, 0)',
            'opacity': '1',

            'transition': 'opacity 1s, transform 1s'
        });
    } else {
        $('#section4 #innercon1 .sc4_box1 p,#section4 #innercon1 .sc4_box1 span').stop().css({
            'opacity': '0',
            'transform': 'translate3d(0, -100%, 0)',
            'transition': 'opacity 1s, transform 1s'
        });
    }

   

    if (scrollPosition > 2200) {
        $('#section4 #innercon1 .sc4_box3 > div > img').css({
            'opacity': 1,
            'transform': 'translateY(0)'
        });
    } else if (scrollPosition > 1800) {
        $('#section4 #innercon1 .sc4_box2 > div > img').css({
            'opacity': 1,
            'transform': 'translateY(0)'
        });
    }





  
});


});
