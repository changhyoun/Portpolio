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
      firstParagraph.innerHTML = 'Based on web trend analysis<br>systematic through planning, design, and development<br>Create a website as a process.';
    }
  
    // For .content2 .box2 p:nth-of-type(2)
    var secondParagraph = document.querySelector('.content2 .box2 p:nth-of-type(2)');
    if (windowWidth <= 768) {
      // Remove <br> tags and apply white-space: nowrap;
      var paragraphText = secondParagraph.textContent.replace(/<br>/g, ' ');
      secondParagraph.innerHTML = paragraphText;
    } else {
      // Restore original text with <br> tags
      secondParagraph.innerHTML = 'Suitable for smartphones<br>use a variety of mobile applications<br>mobile website<br>Provides UI/UX design.';
    }
  
    // For .content2 .box3 p:nth-of-type(2)
    var thirdParagraph = document.querySelector('.content2 .box3 p:nth-of-type(2)');
    if (windowWidth <= 768) {
      // Remove <br> tags and apply white-space: nowrap;
      var paragraphText = thirdParagraph.textContent.replace(/<br>/g, ' ');
      thirdParagraph.innerHTML = paragraphText;
    } else {
      // Restore original text with <br> tags
      thirdParagraph.innerHTML = 'In possibility<br>Analyze unstructured data<br>to individuals and businesses<br>Provides meaningful information.';
    }
  }
  
  // Execute the function on page load
  handleTextWrapping();
  
  // Execute the function whenever the window is resized
  window.addEventListener('resize', handleTextWrapping);
  });
  