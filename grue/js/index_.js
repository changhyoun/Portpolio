$(function() {
    $('.hambuger').hover(function() {
      $('.hambuger').css('backgroundColor', '#00295D');
    }, function() {
      $('.hambuger').css('backgroundColor', 'transparent'); // 초기 배경색 값으로 돌아가도록 수정
    });
  

    
    $('#section1 .content1').slick({
    
      autoplay: true,
      autoplaySpeed: 5000,
      dots: false,
      arrows: true,
      fade: true,
      cssEase: 'linear', // 페이드 효과를 선형으로 설정
      useTransform: false, // 변형(transform)을 사용하지 않음
      speed: 500 // 페이드 인/아웃 속도 조정 (필요에 따라 변경 가능)

    });
  
        
        $('.content1').on('afterChange', function(event, slick, currentSlide) {
            if (currentSlide === 0) {
                $('.content2').fadeIn(400);
                $('.content2_2').fadeOut(400);
                $('.content2 p:nth-of-type(2)').slideDown(400);
           
                
            } else if (currentSlide === 1) {
                $('.content2').fadeOut(400);
                $('.content2_2').fadeIn(400);
          
                $('.content2_2 p:nth-of-type(2)').slideDown(400);
            }
        });

// 슬라이드 변화 이벤트
var progressBar = $('.progress-bar');

$('.content1').on('init reInit beforeChange', function(event, slick, currentSlide, nextSlide) {
  var progressWidth = ((nextSlide + 1) / slick.slideCount) * 100; // 0부터 100까지의 비율로 계산
  progressBar.css('width', progressWidth + '%');
});


    
      // 슬라이더 변화 후에 효과 적용
      $('#section1 .content1').on('init', function(event, slick) {
        var currentSlide = slick.currentSlide;
        applyEffect(currentSlide);
      });
    
      $('#section1 .content1').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        removeEffect(currentSlide);
      });
    
      $('#section1 .content1').on('afterChange', function(event, slick, currentSlide) {
        applyEffect(currentSlide);
      });
    
      // 초기 효과 적용
      applyEffect(0);
    
      function applyEffect(slideIndex) {
        var slide = $('#section1 .content1 .slick-slide[data-slick-index="' + slideIndex + '"]');
        slide.find('img').css({
          transform: 'scale(1)',
          transition: 'transform 5s ease'
        });
      }
    
      function removeEffect(slideIndex) {
        var slide = $('#section1 .content1 .slick-slide[data-slick-index="' + slideIndex + '"]');
        slide.find('img').css({
          transform: '',
          transition: ''
        });
      }
      $('.content1').on('afterChange', function(event, slick, currentSlide) {
        var pageNumber = currentSlide + 1;
        var formattedPageNumber = ('0' + pageNumber).slice(-2); // 두 자리 숫자로 포맷팅
        
        $('.paging1').text(formattedPageNumber);
      });
 
    
   $('.mom > li').stop().hover(function(){
    $(this).find('ul').slideDown(300);

   },function(){
    $(this).find('ul').slideUp(300);

    
   
   });

   $(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();

    if(scrollPosition < 900){
      $('.mom > li').stop().hover(function(){
        $(this).css('backgroundColor', '#00295D')
        
        $('.son li').css('backgroundColor', '#f5f5f5')
      },function(){
        $(this).css('backgroundColor', '')
        $('.son li').css('backgroundColor', '')
      });
    
    }
    
  })

   window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop >= 900) {
      document.getElementById('nav').style.backgroundColor = 'white';
      $('.mom > li > a').css('color','#333')
      $('#line span').css('background-color','#F2F2F2')
      $('.hambuger').css('background-color','#00295D')
      $('.logo img').attr('src', 'img/logo2.png');
      
    } else {
      document.getElementById('nav').style.backgroundColor = '';
      $('.mom > li > a').css('color','white')
      $('#line span').css('background-color','#ffffff60')
      $('.hambuger').css('background-color','')
      $('.logo img').attr('src', 'img/logo.png');
    }
  });
  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
  
    if (scrollPosition >= 900 && scrollPosition <= 1822 ) {
   
     
      $('.logo img').attr('src','img/logo2.png')
      $('.hambuger').css('backgroundColor','#223B5B')
      $('#nav').css('backgroundColor','white');
      $('.mom > li > a').css('color','#333')
      $('#line span').css('background-color','#F2F2F2')
      $('.mom > li').hover(function(){
        $(this).find('a').css('color','#f5f5f5')
        $('.son > li').find('a').css('color','#333')
      },function(){
        $(this).find('a').css('color','#333')
        $('.son > li').find('a').css('color','white')
      })
    } else {

      $('#nav').css('borderBottom','1px solid #ffffff60')
      $('.logo img').attr('src','img/logo.png')
      $('.hambuger').css('backgroundColor','')
      $('#nav').css('backgroundColor','');
      $('.mom > li > a').css('color','white')
      $('#line span').css('background-color','#ffffff60')


    }
  

    $(window).scroll(function() {
      var scrollPosition = $(window).scrollTop();
    
      if (scrollPosition >= 3000 && scrollPosition <= 4600 ) {
     
       
        $('.logo img').attr('src','img/logo2.png')
        $('.hambuger').css('backgroundColor','#223B5B')
        $('#nav').css('backgroundColor','white');
        $('.mom > li > a').css('color','#333')
        $('#line span').css('background-color','#F2F2F2')
      } else {
  
      
        $('.logo img').attr('src','img/logo.png')
        $('.hambuger').css('backgroundColor','')
        $('#nav').css('backgroundColor','');
        $('.mom > li > a').css('color','white')
        $('#line span').css('background-color','#ffffff60')
  
  
      };
    });
    

    
  

    $(window).scroll(function(){
      var scrollPosition = $(window).scrollTop();

      if(scrollPosition >= 900){
        $('.slick-slider').slick('slickPause');
        $('#nav').css('borderBottom','1px solid #F2F2F2')
      }else {
        $('.slick-slider').slick('slickPlay');
        $('#nav').css('borderBottom','1px solid #ffffff60')
      }
    })
    
  });
  $(document).ready(function() {
    var images = [
      'img/apartment1.jpg',
      'img/apartment2.jpg',
      'img/apartment3.jpg'
    ];
    var index = 0;
    var imageElement = $('.content3 img');
    var counterElement = $('#imageCounter');
    var titleElement = $('#titleText');
    var descriptionElement = $('#descriptionText');
    var yearElement = $('#yearText');
    var typeElement = $('#typeText');
    var locationElement = $('#locationText');
    var boxElement = $('.content3 .box1');
  
    imageElement.css({ opacity: '1', transform: 'scale(1)' });
    boxElement.css({ opacity: '1' });
  
    setInterval(function() {
      imageElement.animate({ opacity: 0 }, 500, function() {
        index = (index + 1) % images.length;
        imageElement.attr('src', images[index]);
  
        var counterText = (index < 9 ? '0' : '') + (index + 1) + '<span>/03</span>';
        counterElement.html(counterText);
  
        // 텍스트 변경
        switch(index) {
          case 0:
            titleElement.html('에스케이뷰');
            descriptionElement.html('대전 도룡동 에스케이뷰 아파트 건축 시공');
            yearElement.html('2022년');
            typeElement.html('일반 아파트');
            locationElement.html('대전 유성구 도룡동');
            break;
          case 1:
            titleElement.html('샹그릴라 플러스 빌');
            descriptionElement.html('대전 오피스텔 건축 시공');
            yearElement.html('2021년');
            typeElement.html('오피스텔');
            locationElement.html('대전 유성구 봉명동');
            break;
          case 2:
            titleElement.html('트리플 시티');
            descriptionElement.html('대전 상대동 트리플시티 아파트 건축 시공');
            yearElement.html('2020년');
            typeElement.html('일반 아파트');
            locationElement.html('대전 유성구 상대동');
            break;
        }
  
        imageElement.animate({ opacity: 1 }, 500);
      });
  
      setTimeout(function() {
        imageElement.css({ transform: 'scaleX(1)' });
        setTimeout(function() {
          imageElement.css({ transform: 'scaleX(0)' });
        }, 4500);
      }, 1500);
    }, 6000);
  
    // 첫 번째 이미지 로드
    imageElement.attr('src', images[0]);
  
  
 window.onload = function() {
    window.onscroll = function() {
      var scrollTop = (document.documentElement.scrollTop || document.body.scrollTop);
      document.getElementById('scroll-value').textContent = scrollTop;
    };
  };
  $('#section3 .content1, #section3 .content2, #section3 .content3, #section3 .content4').hover(function() {
    $(this).css('backgroundColor', 'rgba(34, 59, 91, 0.5)');
    $(this).find('a').css('opacity', '1');
    $(this).find('.material-symbols-rounded').css('opacity', '1');
  }, function() {
    $(this).css('backgroundColor', '');
    $(this).find('a').css('opacity', '');
    $(this).find('.material-symbols-rounded').css('opacity', '');
  });

  $('#section3 .content1').hover(function() {
    $('#section3').css('background-image', 'url(img/img3.jpg)');
  }, function() {
    $('#section3').css('background-image', 'url(img/img1.jpg)');
  });
  
  $('#section3 .content2').hover(function() {
    $('#section3').css('background-image', 'url(img/img2.jpg)');
  }, function() {
    $('#section3').css('background-image', 'url(img/img1.jpg)');
  });
});  
$('#section3 .content4').hover(function() {
  $('#section3').css('background-image', 'url(img/img4.jpg)');
}, function() {
  $('#section3').css('background-image', 'url(img/img1.jpg)');
});

$(window).scroll(function(){
  var scrollPosition = $(window).scrollTop();

  if(scrollPosition >= 2300){
    $('#section4 > p:nth-of-type(1)').stop().slideDown(200);
    $('#section4 > p:nth-of-type(2)').stop().slideDown(200);
    $('#section4 > p:nth-of-type(3)').stop().slideDown(200);
  }else {
    $('#section4 > p:nth-of-type(1)').stop().slideUp(200);
    $('#section4 > p:nth-of-type(2)').stop().slideUp(200);
    $('#section4 > p:nth-of-type(3)').stop().slideUp(200);
  }
})

$(window).scroll(function(){
  var scrollPosition = $(window).scrollTop();

  if(scrollPosition >= 3400){
    $('#line span').hide();
  }else {
    $('#line span').show();
  }
})
$('.footer3_box').hide();
$('.footer3 p:nth-of-type(1)').click(function(){
  $('.footer3_box').slideToggle();
})

$(window).scroll(function(){
  var scrollPosition = $(window).scrollTop();

  if(scrollPosition >= 200){
    $('#section2 p:nth-of-type(1)').fadeIn(500);
    $('#section2 p:nth-of-type(2)').fadeIn(500);

  }else {
    $('#section2 p:nth-of-type(1)').fadeOut(500);
    $('#section2 p:nth-of-type(2)').fadeOut(500);

  }

});
});
  



  
