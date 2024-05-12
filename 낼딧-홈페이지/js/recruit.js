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
    $('.moblie_menu').hide()
    $('.mo_close').click(function(){
      $('.moblie_menu').fadeOut();
    })
    $('.mo_menu').click(function(){
      $('.moblie_menu').fadeIn();
    })
 
  
  // Execute the function on page load
  handleTextWrapping();
  
  // Execute the function whenever the window is resized
  window.addEventListener('resize', handleTextWrapping);
});

function handleTextWrapping() {
  var windowWidth = window.innerWidth;

  // For #section2 .content1_top p:nth-of-type(2)
  var firstParagraph = document.querySelector('#section2 .content1_top p:nth-of-type(2)');
  if (windowWidth <= 700) {
      // Remove <br> tag and apply white-space: nowrap;
      firstParagraph.innerHTML = firstParagraph.textContent;
  } else {
      // Restore original text
      firstParagraph.innerHTML = '본인 스스로 어떤 성과를 낼것인지에<br>집중할 수 있는 문화를 만들어갑니다.';
  }

  // For .content2_top p:nth-of-type(2)
  var secondParagraph = document.querySelector('#section2 .content2_top p:nth-of-type(2)');
  if (windowWidth <= 700) {
      // Remove <br> tag and apply white-space: nowrap;
      secondParagraph.innerHTML = secondParagraph.textContent;
  } else {
      // Restore original text
      secondParagraph.innerHTML = '개인이 자율적으로 업무 시간을 관리하고<br>일에 책임지는 문화를 만들어갑니다.';
  }

  // For .content3_top p:nth-of-type(2)
  var thirdParagraph = document.querySelector('#section2 .content3_top p:nth-of-type(2)');
  if (windowWidth <= 700) {
      // Remove <br> tag and apply white-space: nowrap;
      thirdParagraph.innerHTML = thirdParagraph.textContent;
  } else {
      // Restore original text
      thirdParagraph.innerHTML = '우리는 개인의 역량과 열정을 존중하며<br>최고의 성과를 이루기 위한 문화를 함께 만들어갑니다.';
  }
}

// Execute the function on page load
handleTextWrapping();

// Execute the function whenever the window is resized
window.addEventListener('resize', handleTextWrapping);