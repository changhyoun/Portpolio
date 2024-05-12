$(function(){
  $('.scrolldown').on('click', function() {
    $('html').animate({ scrollTop: 50000 }, 'slow');
  });
$(".nav_center .menu li a,.nav_right P a").hover(
    function() {
      $(this).css("color", "#f5f5f5");
    },
    function() {
      $(this).css("color", "");
    }
  );

  $(window).on('scroll', function() {
    // 현재 스크롤 위치를 구합니다.
    var scrollPosition = $(this).scrollTop();


  if (scrollPosition >= 300) {
    $('#section2 .content2 .box1').css('opacity', '1');
  } else {
    $('#section2 .content2 .box1').css('opacity', '0');
  }

  if (scrollPosition >= 300) {
    $('#section2 .content2 .box2').delay(900).queue(function(next) {
      $(this).css('opacity', '1');
      next();
    });
  } else {
    $('#section2 .content2 .box2').css('opacity', '0');
  }

  if (scrollPosition >= 300) {
    $('#section2 .content2 .box3').delay(1800).queue(function(next) {
      $(this).css('opacity', '1');
      next();
    });
  } else {
    $('#section2 .content2 .box3').css('opacity', '0');
  }
  if (scrollPosition >= 900) {
        $('#section3 .content2 .box1').fadeIn(500); // 페이드인
      } else {
        $('#section3 .content2 .box1').fadeOut(500); // 페이드아웃
      }
      if (scrollPosition >= 1200) {
        $('#section3 .content2 .box2').fadeIn(500); // 페이드인
      } else {
        $('#section3 .content2 .box2').fadeOut(500); // 페이드아웃
      }
      if (scrollPosition >= 1500) {
        $('#section3 .content2 .box3').fadeIn(500); // 페이드인
      } else {
        $('#section3 .content2 .box3').fadeOut(500); // 페이드아웃
      }
      if (scrollPosition >= 1800) {
        $('#section3 .content2 .box4').fadeIn(500); // 페이드인
      } else {
        $('#section3 .content2 .box4').fadeOut(500); // 페이드아웃
      }
      if (scrollPosition >= 2100) {
        $('#section3 .content2 .box5').fadeIn(500); // 페이드인
      } else {
        $('#section3 .content2 .box5').fadeOut(500); // 페이드아웃
      }
      if (scrollPosition >= 2400) {
        $('#section3 .content2 .box6').fadeIn(500); // 페이드인
      } else {
        $('#section3 .content2 .box6').fadeOut(500); // 페이드아웃
      }
      if (scrollPosition >= 2700) {
        $('#section3 .content2 .box7').fadeIn(500); // 페이드인
      } else {
        $('#section3 .content2 .box7').fadeOut(500); // 페이드아웃
      }
       if (scrollPosition >= 3000) {
        $('#section4 .content2').fadeIn(500); // 페이드인
      } else {
        $('#section4 .content2').fadeOut(500); // 페이드아웃
      }

});
$('.moblie_menu').hide()
$('.mo_close').click(function(){
  $('.moblie_menu').fadeOut();
})
$('.mo_menu').click(function(){
  $('.moblie_menu').fadeIn();
})
function handleTextWrapping() {
  var windowWidth = window.innerWidth;

  // For .content2 .box1 p:nth-of-type(2)
  var firstParagraph = document.querySelector('.content2 .box1 p:nth-of-type(2)');
  if (windowWidth <= 700) {
    // Remove <br> tags and apply white-space: nowrap;
    var paragraphText = firstParagraph.textContent.replace(/<br>/g, ' ');
    firstParagraph.innerHTML = paragraphText;
  } else {
    // Restore original text with <br> tags
    firstParagraph.innerHTML = '웹트렌드 분석을 바탕으로<br>기획, 디자인, 개발로 체계적인<br>프로세스로 웹사이트를 제작합니다.';
  }

  // For .content2 .box2 p:nth-of-type(2)
  var secondParagraph = document.querySelector('.content2 .box2 p:nth-of-type(2)');
  if (windowWidth <= 768) {
    // Remove <br> tags and apply white-space: nowrap;
    var paragraphText = secondParagraph.textContent.replace(/<br>/g, ' ');
    secondParagraph.innerHTML = paragraphText;
  } else {
    // Restore original text with <br> tags
    secondParagraph.innerHTML = '스마트폰에 적합한<br>다양한 모바일 어플리케이션과<br>모바일 웹사이트의<br>UI/UX디자인을 제공합니다.';
  }

  // For .content2 .box3 p:nth-of-type(2)
  var thirdParagraph = document.querySelector('.content2 .box3 p:nth-of-type(2)');
  if (windowWidth <= 768) {
    // Remove <br> tags and apply white-space: nowrap;
    var paragraphText = thirdParagraph.textContent.replace(/<br>/g, ' ');
    thirdParagraph.innerHTML = paragraphText;
  } else {
    // Restore original text with <br> tags
    thirdParagraph.innerHTML = '가능성을 가지고 있는<br>비정형데이터를 분석해<br>개인과 기업에게<br>의미있는 정보를 제공합니다.';
  }
}

// Execute the function on page load
handleTextWrapping();

// Execute the function whenever the window is resized
window.addEventListener('resize', handleTextWrapping);
});
