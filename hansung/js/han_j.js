$(function(){

   

        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 4000, // 5초 간격으로 변경
            },
          
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'fade',
            progressBar: {
                el: '.swiper-progressbar .progress', // 프로그래스 바 요소
                hide: false, // 프로그래스 바 감추기 여부 (기본값: false)
              },
              on: {
            
          
                slideChangeTransitionStart: function () {
                    // 각 슬라이드 변경 시 이미지에 대한 효과를 적용
                    $(".swiper-slide-active img").css({
                        "transform": "scale(1)",
                        "transition": "transform 3s ease"
                    });
                  
                    updateProgressBar();
                },
                slidePrevTransitionStart: function () {
                    $(".swiper-slide-active img").css({
                        "transform": "scale(1.4)"
                    });
                    resetProgressBar();
                },
                slideNextTransitionStart: function () {
                    resetProgressBar();
                },
                slideChangeTransitionEnd: function () {
                   
                   
                    $(".swiper-slide-active img").css({
                        "transform": "scale(1)"
                    });
                },
            }
        });

    $('#intro #intro_txbx h1,#intro #intro_txbx p').css({
    "transform":"translateY(0%)",
    "opacity":"1",
 
    });
    $(document).ready(function(){
        // 2초 후에 실행
        setTimeout(function(){
          // #intro img를 2초동안 스케일 3으로 확대
          $("#intro img").css({
            transform: 'scale(3)'
          }, 2000);
      
          // #intro를 2초 동안 페이드 아웃 후 숨김
          $("#intro").fadeOut(2000);
        }, 2000); // 2초 딜레이
      });
})